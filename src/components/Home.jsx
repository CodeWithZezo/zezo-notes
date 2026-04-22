import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { siteConfig } from "../config/content.js"

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    // Trigger staggered animation
    const children = [...el.querySelectorAll(".animate-in")]
    children.forEach((child, i) => {
      child.style.opacity = "0"
      child.style.transform = "translateY(20px)"
      setTimeout(() => {
        child.style.transition = "opacity 0.55s ease, transform 0.55s ease"
        child.style.opacity = "1"
        child.style.transform = "translateY(0)"
      }, i * 90)
    })
  }, [])

  const totalDocs = siteConfig.categories.reduce((acc, c) => acc + c.files.length, 0)
  const firstDoc = siteConfig.categories[0]?.files[0]

  return (
    <div className="home-page">
      <section className="home-hero" ref={heroRef} aria-labelledby="hero-title">
        <div className="home-hero-badge animate-in" aria-label="Status: open for reading">
          <span className="badge-dot" aria-hidden="true" />
          open for reading
        </div>

        <h1 id="hero-title" className="home-hero-title animate-in">
          {siteConfig.title}
        </h1>

        <p className="home-hero-sub animate-in">
          Personal notes, learnings &amp; reference docs — written while building things.
          Not perfect, but honest.
        </p>

        <div className="home-hero-actions animate-in">
          {firstDoc && (
            <Link to={`/doc/${firstDoc.id}`} className="home-cta-primary">
              Start Reading →
            </Link>
          )}
          <Link to="/about" className="home-cta-secondary">
            About Me
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="home-stats animate-section" aria-label="Site statistics">
        <div className="home-stat">
          <span className="stat-num" aria-label={`${siteConfig.categories.length} topics`}>
            {siteConfig.categories.length}
          </span>
          <span className="stat-label">Topics</span>
        </div>
        <div className="stat-divider" aria-hidden="true" />
        <div className="home-stat">
          <span className="stat-num" aria-label={`${totalDocs} notes`}>{totalDocs}</span>
          <span className="stat-label">Notes</span>
        </div>
        <div className="stat-divider" aria-hidden="true" />
        <div className="home-stat">
          <span className="stat-num" aria-hidden="true">∞</span>
          <span className="stat-label">Things to learn</span>
        </div>
      </section>

      {/* Categories grid */}
      <section className="home-section" aria-labelledby="browse-heading">
        <h2 id="browse-heading" className="home-section-title">Browse Topics</h2>
        <div className="home-cards-grid" role="list">
          {siteConfig.categories.map((cat, i) => (
            <div
              key={cat.id}
              className="home-card"
              role="listitem"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="home-card-icon" aria-hidden="true">{cat.icon}</div>
              <div className="home-card-body">
                <h3 className="home-card-title">{cat.label}</h3>
                <p className="home-card-count">
                  {cat.files.length} {cat.files.length === 1 ? "note" : "notes"}
                </p>
                <ul className="home-card-files" aria-label={`${cat.label} files`}>
                  {cat.files.slice(0, 4).map(f => (
                    <li key={f.id}>
                      <Link to={`/doc/${f.id}`} className="home-card-file-link">
                        {f.label}
                      </Link>
                    </li>
                  ))}
                  {cat.files.length > 4 && (
                    <li className="home-card-more" aria-label={`${cat.files.length - 4} more files`}>
                      +{cat.files.length - 4} more
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About strip */}
      <section className="home-about-strip" aria-label="About the author">
        <div className="home-about-text">
          <p>
            These notes are written the way I understand things — messy drafts turned
            into something readable. If you find a mistake, that&apos;s just me learning
            in public.
          </p>
        </div>
        <Link to="/about" className="home-about-link">
          Meet the author →
        </Link>
      </section>
    </div>
  )
}
