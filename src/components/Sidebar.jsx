import { useState, useEffect, useRef } from "react"
import { NavLink, useLocation } from "react-router-dom"

export default function Sidebar({ id, config, isOpen, onToggle, theme, onThemeToggle, onNavClick }) {
  const [openCats, setOpenCats] = useState(
    () => new Set(config.categories.map(c => c.id))
  )
  const [search, setSearch] = useState("")
  const location = useLocation()
  const sidebarRef = useRef(null)

  // Auto-expand category of current route
  useEffect(() => {
    const fileId = location.pathname.split("/doc/")[1]
    if (!fileId) return
    const cat = config.categories.find(c => c.files.some(f => f.id === fileId))
    if (cat) {
      setOpenCats(prev => {
        if (prev.has(cat.id)) return prev
        return new Set([...prev, cat.id])
      })
    }
  }, [location.pathname, config.categories])

  const toggleCat = (id) => {
    setOpenCats(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  // Filter files by search query
  const filtered = search.trim()
    ? config.categories.map(cat => ({
        ...cat,
        files: cat.files.filter(f =>
          f.label.toLowerCase().includes(search.toLowerCase())
        ),
      })).filter(cat => cat.files.length > 0)
    : config.categories

  const totalResults = search.trim()
    ? filtered.reduce((acc, c) => acc + c.files.length, 0)
    : null

  return (
    <>
      <aside
        id={id}
        ref={sidebarRef}
        className={`sidebar ${isOpen ? "open" : "closed"}`}
        aria-label="Site navigation"
        aria-hidden={!isOpen}
        inert={!isOpen ? "" : undefined}
      >
        {/* Header */}
        <div className="sidebar-header">
          <span className="sidebar-title" aria-label="Site name">{config.title}</span>
          <div className="sidebar-controls">
            <button
              className="icon-btn"
              onClick={onThemeToggle}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>
            <button
              className="icon-btn"
              onClick={onToggle}
              title="Collapse sidebar"
              aria-label="Collapse sidebar"
            >
              ←
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="sidebar-search-wrap">
          <div className="sidebar-search">
            <span className="search-icon" aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search notes…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="search-input"
              aria-label="Search notes"
            />
            {search && (
              <button
                className="search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >×</button>
            )}
          </div>
          {totalResults !== null && (
            <p className="search-count" aria-live="polite">
              {totalResults} {totalResults === 1 ? "result" : "results"}
            </p>
          )}
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav" aria-label="Documentation navigation">

          {/* Top-level links */}
          {!search && (
            <>
              <div className="sidebar-top-links">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => `sidebar-top-link ${isActive ? "active" : ""}`}
                  onClick={onNavClick}
                >
                  <span aria-hidden="true">🏠</span> Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `sidebar-top-link ${isActive ? "active" : ""}`}
                  onClick={onNavClick}
                >
                  <span aria-hidden="true">👤</span> About Me
                </NavLink>
              </div>
              <div className="sidebar-divider" role="separator" />
            </>
          )}

          {/* Categories */}
          {filtered.length === 0 && (
            <p className="search-empty">No notes found.</p>
          )}

          {filtered.map(category => {
            const isCatOpen = search ? true : openCats.has(category.id)
            return (
              <div key={category.id} className="category">
                {!search && (
                  <button
                    className="category-header"
                    onClick={() => toggleCat(category.id)}
                    aria-expanded={isCatOpen}
                    aria-controls={`cat-files-${category.id}`}
                  >
                    <span className="category-label">
                      <span className="cat-icon" aria-hidden="true">{category.icon}</span>
                      {category.label}
                    </span>
                    <span
                      className={`chevron ${isCatOpen ? "open" : ""}`}
                      aria-hidden="true"
                    >›</span>
                  </button>
                )}
                {search && (
                  <div className="category-label-static">
                    <span className="cat-icon" aria-hidden="true">{category.icon}</span>
                    <span className="category-label-text">{category.label}</span>
                  </div>
                )}

                {isCatOpen && (
                  <ul
                    id={`cat-files-${category.id}`}
                    className="file-list"
                    role="list"
                  >
                    {category.files.map(file => (
                      <li key={file.id}>
                        <NavLink
                          to={`/doc/${file.id}`}
                          className={({ isActive }) =>
                            `file-link ${isActive ? "active" : ""}`
                          }
                          title={file.label}
                          onClick={onNavClick}
                        >
                          <span className="file-link-dot" aria-hidden="true" />
                          <span className="file-link-label">{file.label}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </nav>
      </aside>

      {/* Desktop: re-open button when sidebar collapsed */}
      {!isOpen && (
        <button
          className="sidebar-open-btn"
          onClick={onToggle}
          title="Open sidebar"
          aria-label="Open sidebar"
          aria-expanded={false}
          aria-controls={id}
        >
          →
        </button>
      )}
    </>
  )
}
