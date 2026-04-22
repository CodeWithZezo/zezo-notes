import { useState, useEffect, useRef, useCallback } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkSlug from "remark-slug"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism"

// Copy-to-clipboard hook
function useCopy() {
  const [copied, setCopied] = useState(false)
  const copy = useCallback((text) => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [])
  return { copied, copy }
}

function CodeBlock({ code, lang, style }) {
  const { copied, copy } = useCopy()
  const showLines = code.split("\n").length > 5

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <span className="code-lang">{lang || "code"}</span>
        <button
          className="copy-btn"
          onClick={() => copy(code)}
          aria-label={copied ? "Copied!" : "Copy code"}
          title={copied ? "Copied!" : "Copy code"}
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter
        style={style}
        language={lang}
        PreTag="div"
        showLineNumbers={showLines}
        wrapLongLines={false}
        customStyle={{ margin: 0, borderRadius: "0 0 8px 8px" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

// Reading progress bar
function ReadingProgress({ containerRef }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container
      const total = scrollHeight - clientHeight
      if (total <= 0) { setProgress(0); return }
      setProgress(Math.min(100, Math.round((scrollTop / total) * 100)))
    }

    container.addEventListener("scroll", onScroll, { passive: true })
    return () => container.removeEventListener("scroll", onScroll)
  }, [containerRef])

  return (
    <div
      className="reading-progress"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div className="reading-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  )
}

export default function MDViewer({ config, theme }) {
  const { fileId } = useParams()
  const navigate = useNavigate()
  const [content, setContent] = useState("")
  const [status, setStatus] = useState("loading")
  const [errorMsg, setErrorMsg] = useState("")
  const [readTime, setReadTime] = useState(null)
  const containerRef = useRef(null)

  const file = config.categories
    .flatMap(c => c.files)
    .find(f => f.id === fileId)

  useEffect(() => {
    if (!file) {
      setErrorMsg(`"${fileId}" not found in content config.`)
      setStatus("error")
      return
    }

    setStatus("loading")
    setContent("")
    setReadTime(null)

    const controller = new AbortController()

    fetch(file.path, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(
          `Could not load "${file.path}" (HTTP ${res.status}).`
        )
        return res.text()
      })
      .then(text => {
        setContent(text)
        setStatus("ready")
        // Estimate reading time (~200 wpm)
        const words = text.trim().split(/\s+/).length
        setReadTime(Math.max(1, Math.ceil(words / 200)))
        // Scroll article to top, not the whole page
        containerRef.current?.scrollTo({ top: 0 })
      })
      .catch(err => {
        if (err.name === "AbortError") return
        setErrorMsg(err.message)
        setStatus("error")
      })

    return () => controller.abort()
  }, [fileId])

  const codeStyle = theme === "dark" ? vscDarkPlus : oneLight

  if (status === "loading") {
    return (
      <div className="viewer-state" aria-busy="true" aria-label="Loading document">
        <span className="loader" aria-hidden="true" />
        Loading…
      </div>
    )
  }

  if (status === "error") {
    return (
      <div className="viewer-state error" role="alert">
        <span aria-hidden="true">⚠</span> {errorMsg}
        <button className="error-back-btn" onClick={() => navigate("/")}>
          ← Back to home
        </button>
      </div>
    )
  }

  return (
    <div className="md-viewer-container" ref={containerRef}>
      <ReadingProgress containerRef={containerRef} />
      <article className="md-viewer" aria-label={file?.label}>
        {/* Doc meta header */}
        <header className="doc-header">
          <h1 className="doc-title">{file?.label}</h1>
          {readTime && (
            <p className="doc-meta">
              <span aria-label={`${readTime} minute read`}>{readTime} min read</span>
            </p>
          )}
          <div className="doc-divider" aria-hidden="true" />
        </header>

        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkSlug]}
          components={{
            // Skip the first H1 if it duplicates the doc title
            h1({ children }) {
              const text = String(children)
              if (text === file?.label) return null
              return <h1>{children}</h1>
            },
            code({ node, inline, className, children, ...props }) {
              const lang = /language-(\w+)/.exec(className || "")?.[1]
              const code = String(children).replace(/\n$/, "")

              if (!inline && lang) {
                return <CodeBlock code={code} lang={lang} style={codeStyle} />
              }
              return <code className={className} {...props}>{children}</code>
            },
            table({ children, ...props }) {
              return (
                <div className="table-wrapper" role="region" aria-label="Table">
                  <table {...props}>{children}</table>
                </div>
              )
            },
            img({ src, alt, ...props }) {
              return (
                <img
                  src={src}
                  alt={alt || ""}
                  loading="lazy"
                  decoding="async"
                  {...props}
                />
              )
            },
            a({ href, children, ...props }) {
              const isExternal = href?.startsWith("http")
              return (
                <a
                  href={href}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...props}
                >
                  {children}
                  {isExternal && <span className="ext-link-icon" aria-label="(external link)"> ↗</span>}
                </a>
              )
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  )
}
