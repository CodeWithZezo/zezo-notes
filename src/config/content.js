// /**
//  * CONTENT CONFIG  ─  src/config/content.js
//  * ─────────────────────────────────────────────────────────────
//  * This is the ONLY file you need to edit to add new content.
//  *
//  * HOW IT WORKS
//  * ─────────────
//  * Every entry in `categories` maps to a collapsible section in
//  * the sidebar. Every entry in `files` maps to a route:
//  *
//  *   /doc/:id   →   fetches :path from the public folder
//  *
//  * FILE PATHS
//  * ─────────────
//  * Paths are relative to your project's /public folder.
//  * Put your .md files inside /public/docs/ (or any sub-folder you
//  * prefer) and reference them like:  "/docs/python/basics.md"
//  *
//  * ICONS
//  * ─────────────
//  * Use any single emoji as the category icon.
//  */

// export const siteConfig = {

//   // ── Site title shown at the top of the sidebar ──────────────
//   title: "My Notes",

//   // ── Categories ───────────────────────────────────────────────
//   categories: [
//     {
//       id: "getting-started",       // unique slug (no spaces)
//       label: "Getting Started",    // displayed in sidebar
//       icon: "🚀",                  // emoji icon
//       files: [
//         {
//           id: "intro",                        // unique slug used in URL  →  /doc/intro
//           label: "Introduction",              // displayed in sidebar
//           path: "/docs/getting-started/intro.md", // path inside /public
//         },
//         {
//           id: "how-to-use",
//           label: "How to Use",
//           path: "/docs/getting-started/how-to-use.md",
//         },
//       ],
//     },

//     {
//       id: "python",
//       label: "Python",
//       icon: "🐍",
//       files: [
//         {
//           id: "python-basics",
//           label: "Basics",
//           path: "/docs/python/basics.md",
//         },
//         {
//           id: "python-oop",
//           label: "OOP",
//           path: "/docs/python/oop.md",
//         },
//         {
//           id: "python-async",
//           label: "Async / Await",
//           path: "/docs/python/async.md",
//         },
//       ],
//     },

//     {
//       id: "javascript",
//       label: "JavaScript",
//       icon: "⚡",
//       files: [
//         {
//           id: "js-basics",
//           label: "Basics",
//           path: "/docs/javascript/basics.md",
//         },
//         {
//           id: "js-promises",
//           label: "Promises",
//           path: "/docs/javascript/promises.md",
//         },
//       ],
//     },

//     // ── ADD MORE CATEGORIES BELOW ────────────────────────────
//     // {
//     //   id: "react",
//     //   label: "React",
//     //   icon: "⚛️",
//     //   files: [
//     //     {
//     //       id: "react-hooks",
//     //       label: "Hooks",
//     //       path: "/docs/react/hooks.md",
//     //     },
//     //   ],
//     // },
//   ],
// }


/**
 * CONTENT CONFIG  ─  src/config/content.js
 * ─────────────────────────────────────────────────────────────
 * This is the ONLY file you need to edit to add new content.
 *
 * HOW IT WORKS
 * ─────────────
 * Every entry in `categories` maps to a collapsible section in
 * the sidebar. Every entry in `files` maps to a route:
 *
 *   /doc/:id   →   fetches :path from the public folder
 *
 * FILE PATHS
 * ─────────────
 * Paths are relative to your project's /public folder.
 * Put your .md files inside /public/docs/ (or any sub-folder you
 * prefer) and reference them like:  "/docs/python/basics.md"
 *
 * ICONS
 * ─────────────
 * Use any single emoji as the category icon.
 */

export const siteConfig = {

  // ── Site title shown at the top of the sidebar ──────────────
  title: "Zezo Notes",

  // ── Categories ───────────────────────────────────────────────
  categories: [
    // ── ADD MORE CATEGORIES BELOW ────────────────────────────
    {
      id: "microservices",
      label: "Microservices",
      icon: "⚛️",
      files: [
        {
          id: "communicationPatterns",
          label: "Communication Patterns _ Microservices & Distributed Systems",
          path: "/docs/microservices/communicationPatterns.md",
        },
      ],
    },

    {
      id: "university",
      label: "university notes",
      icon: "⚛️",
      files: [
        {
          id: "javathrory",
          label: "java_throry",
          path: "/docs/uni/java_throry.md",
        },

        {
          id: "javathroryexplanation",
          label: "java_throry explanation",
          path: "/docs/uni/java_throry_explanation.md",
        },

        {
          id: "javaprograms",
          label: "java_programs",
          path: "/docs/uni/java_programs.md",
        },

        {
          id: "javaprogramsexplanation",
          label: "java_programs explanation",
          path: "/docs/uni/java_programs_explanation.md",
        },
        
         

      ],
    },
    
  ],
}