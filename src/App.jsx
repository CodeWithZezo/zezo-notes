import { useState, useEffect, useCallback } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar.jsx"
import MDViewer from "./components/MDViewer.jsx"
import Home from "./components/Home.jsx"
import AboutUs from "./components/AboutUs.jsx"
import { siteConfig } from "./config/content.js"
import "./App.css"

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia(query).matches
  })
  useEffect(() => {
    const mql = window.matchMedia(query)
    const handler = (e) => setMatches(e.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [query])
  return matches
}

export default function App() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const [theme, setTheme] = useState(
    () => localStorage.getItem("md-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  )
  const [sidebarOpen, setSidebarOpen] = useState(isDesktop)

  // Sync sidebar open state on breakpoint changes
  useEffect(() => {
    setSidebarOpen(isDesktop)
  }, [isDesktop])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("md-theme", theme)
    // Update meta theme-color
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute("content", theme === "dark" ? "#1A1816" : "#FAF9F6")
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(t => t === "dark" ? "light" : "dark")
  }, [])

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(o => !o)
  }, [])

  const closeOnMobile = useCallback(() => {
    if (!isDesktop) setSidebarOpen(false)
  }, [isDesktop])

  return (
    <BrowserRouter>
      <div className="app-shell">
        {/* Mobile top bar */}
        <header className="mobile-topbar" role="banner">
          <button
            className="hamburger-btn"
            onClick={toggleSidebar}
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
            aria-expanded={sidebarOpen}
            aria-controls="sidebar"
          >
            <span className={`hamburger-icon ${sidebarOpen ? "open" : ""}`} aria-hidden="true">
              <span /><span /><span />
            </span>
          </button>
          <span className="topbar-title" aria-label="Site name">{siteConfig.title}</span>
          <button
            className="icon-btn topbar-theme-btn"
            onClick={toggleTheme}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </header>

        {/* Overlay (mobile) */}
        {sidebarOpen && !isDesktop && (
          <div
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
            role="presentation"
          />
        )}

        <Sidebar
          id="sidebar"
          config={siteConfig}
          isOpen={sidebarOpen}
          onToggle={toggleSidebar}
          theme={theme}
          onThemeToggle={toggleTheme}
          onNavClick={closeOnMobile}
        />

        <main
          className={`content-area ${sidebarOpen ? "sidebar-visible" : "sidebar-hidden"}`}
          id="main-content"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route
              path="/doc/:fileId"
              element={<MDViewer config={siteConfig} theme={theme} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

function NotFound() {
  return (
    <div className="empty-state" role="main">
      <p className="empty-state-code">404</p>
      <p>Page not found.</p>
    </div>
  )
}
