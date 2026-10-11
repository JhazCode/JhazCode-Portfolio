# Jhazel Apuli Portfolio

Personal portfolio website for Jhazel John B. Apuli, an Information Technology student focused on infrastructure, technical support, networking, and systems administration.

## Repository structure

```text
jhazel-portfolio/
├── packages/
│   └── portfolio/          # Vite application package and source code
│       ├── index.html
│       ├── src/
│       └── vite.config.ts
├── dependencies/           # Package manifest, lockfile, and installed packages
│   ├── package.json
│   ├── package-lock.json
│   └── node_modules/
├── pages/                  # Application-level React page components
│   ├── Home.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Credentials.tsx
│   └── Contact.tsx
├── resources/              # Shared visual resources and static assets
│   ├── files/              # Downloadable documents such as a resume PDF
│   ├── fonts/              # Bundled JetBrains Mono webfont files
│   ├── images/             # Profile pictures, project screenshots, and badges
│   └── styles.css
```

The root intentionally contains only these categorized folders and this README. `packages/portfolio` contains the application source, while `dependencies` owns the Node package manifest and installed dependencies.

## Standalone pages

The portfolio is built as a multi-page Vite application. Each destination has its
own HTML entry point, so the browser performs ordinary page navigation instead of
trying to fit every destination into one scroll-snap document:

- `index.html` — About Me landing page
- `skills.html` — Skills
- `projects.html` — Projects
- `experience.html` — Experience
- `credentials.html` — Credentials
- `contact.html` — Let’s Connect

All pages use the shared `PageShell`, navbar, footer, components, and stylesheet.
Page content uses natural document height, allowing longer pages to scroll normally
without overlapping the next section.

## Commands

```bash
npm --prefix dependencies run dev
npm --prefix dependencies run build
npm --prefix dependencies run preview
```
