import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

const dev = {
  name: "Zeeshan Saleem",
  handle: "@codewithzezo",
  tagline: "Backend engineer focused on scalable systems & real-time architecture.",
  location: "Faisalabad, Pakistan",
  available: true,

  avatar: "zee.png",

  bio: `Backend-focused Software Engineering student building production-grade systems using Node.js and TypeScript.

I enjoy designing scalable APIs, working with real-time systems, and solving performance problems.

Built systems like authentication platforms with RBAC and high-throughput analytics pipelines — deployed on AWS using Docker and CI/CD.

Currently looking for a backend internship where I can contribute to real-world systems.`,

  skills: [
    { label: "Backend", items: ["Node.js", "TypeScript", "Express.js", "REST APIs", "JWT", "WebSockets"] },
    { label: "Databases", items: ["MongoDB", "PostgreSQL", "Redis", "MySQL"] },
    { label: "Architecture", items: ["RBAC", "Multi-Tenancy", "MVC", "Event-Driven"] },
    { label: "DevOps", items: ["Docker", "AWS", "CI/CD", "GitHub Actions"] },
  ],

  journey: [
    {
      year: "2025",
      role: "Backend Engineer (Projects)",
      company: "Self",
      note: "Built authentication system with RBAC, JWT, and multi-tenancy."
    },
    {
      year: "2024",
      role: "Real-Time Systems",
      company: "Personal Project",
      note: "Handled 50k events/sec and 5k concurrent WebSocket connections."
    },
    {
      year: "2024–Present",
      role: "Software Engineering Student",
      company: "Arid Agriculture University",
      note: "Studying DSA, databases, and system design."
    }
  ],

  links: [
    { label: "GitHub", href: "https://github.com/codewithzezo", icon: "⬡" },
    { label: "LinkedIn", href: "https://linkedin.com/in/zeeshan-saleem", icon: "in" },
    { label: "Email", href: "mailto:codewithzezo@gmail.com", icon: "@" },
  ],
}

export default function AboutUs() {
  const pageRef = useRef(null)

  useEffect(() => {
    const el = pageRef.current
    if (!el) return
    el.style.opacity = "0"
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.5s ease"
      el.style.opacity = "1"
    })
  }, [])

  return (
    <div className="about-page" ref={pageRef}>

      {/* ── HEADER ── */}
      <section className="about-header">

        {/* Avatar (UPDATED TO IMAGE) */}
        <div className="about-avatar">
          <img src={dev.avatar} alt={dev.name} />
        </div>

        <div className="about-meta">
          <div className="about-name-row">
            <h1 className="about-name">{dev.name}</h1>

            {dev.available && (
              <span className="about-available-badge">
                <span className="badge-dot green" />
                open to work
              </span>
            )}
          </div>

          <p className="about-handle">{dev.handle}</p>
          <p className="about-location">📍 {dev.location}</p>
          <p className="about-tagline">"{dev.tagline}"</p>
        </div>

        <div className="about-links">
          {dev.links.map(l => (
            <a key={l.label} href={l.href} className="about-link-btn" target="_blank">
              <span className="about-link-icon">{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>

      </section>

      {/* ── BIO ── */}
      <section className="about-section">
        <h2 className="about-section-title">// who am i</h2>
        <p className="about-bio">{dev.bio}</p>
      </section>

      {/* ── SKILLS ── */}
      <section className="about-section">
        <h2 className="about-section-title">// skills & stack</h2>

        <div className="about-skills-grid">
          {dev.skills.map(group => (
            <div key={group.label} className="about-skill-group">
              <p className="about-skill-label">{group.label}</p>

              <div className="about-skill-tags">
                {group.items.map(item => (
                  <span key={item} className="about-skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="about-section">
        <h2 className="about-section-title">// timeline</h2>

        <div className="about-timeline">
          {dev.journey.map((entry, i) => (
            <div key={i} className="about-timeline-item">

              <div className="timeline-year">{entry.year}</div>

              <div className="timeline-connector">
                <div className="timeline-dot" />
                {i < dev.journey.length - 1 && <div className="timeline-line" />}
              </div>

              <div className="timeline-content">
                <p className="timeline-role">{entry.role}</p>
                <p className="timeline-company">{entry.company}</p>
                <p className="timeline-note">{entry.note}</p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta-section">
        <p className="about-cta-text">
          The best way to understand how I think is through my notes and systems.
        </p>

        <Link to="/" className="home-cta-primary">
          Explore Notes →
        </Link>
      </section>

    </div>
  )
}