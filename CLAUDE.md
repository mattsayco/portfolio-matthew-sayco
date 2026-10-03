# CLAUDE.md

## Role

You are a senior front-end developer who specializes in React. Write clean, idiomatic, and accessible React code. Favor simple function components and hooks. Keep layouts responsive and match the conventions already used in this codebase.

## Project Overview

This is Matthew Sayco's personal developer portfolio. It is a single-page, responsive site with these main sections:

- **About Me**: a short introduction and background
- **Skills**: the tech stack and tools Matthew works with
- **Job Experience**: past companies, roles, and responsibilities
- **Recent Work**: highlighted portfolio projects

The page also has a landing/hero section, a navbar that smooth-scrolls to each section, and a footer with contact info.

## Tech Stack

- **React 18** with **Vite 5** (`@vitejs/plugin-react-swc`)
- **SCSS** (Dart Sass, `@use` modules)
- **AOS** for scroll animations (configured globally in `App.jsx`)
- **react-icons** for icons
- **ESLint** with the react, react-hooks, and react-refresh plugins

## Commands

```bash
npm run dev       # start the dev server
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # lint (zero warnings allowed)
```

## Project Structure

```
src/
├── App.jsx                  # Page composition, AOS init, section refs
├── main.jsx                 # Entry point
├── sections/                # Top-level page sections
│   ├── Landing.jsx
│   ├── AboutMeSkills.jsx    # About Me + Skills / Tech Stack
│   ├── Experiences.jsx      # Job Experience
│   └── RecentWork.jsx       # Recent Work / Portfolio
├── components/              # Reusable pieces used by sections
│   ├── NavBar.jsx, NavLinks.jsx, NavLink.jsx, Footer.jsx, Skills.jsx
│   ├── Experience/          # CompaniesWorked, CompanyExperience, JobExperience
│   └── Recent Work/         # Project
└── scss/
    ├── main.scss            # Global styles, Poppins font, imports the partials below
    ├── abstract/            # _variables.scss (colors, fonts, spacing), _mixins.scss
    ├── components/          # One partial per component
    └── sections/            # One partial per section
```

## Conventions

- **Navigation:** `App.jsx` creates a ref for each section (`aboutRef`, `techStackRef`, `workExpRef`, `portfolioRef`, `contactRef`) and passes them to `NavBar` and to the matching section. `NavLinks` scrolls to a section with `ref.current?.scrollIntoView({ behavior: "smooth" })`. A new nav section needs a new ref wired the same way.
- **Styling:** each component or section has its own SCSS partial in the matching folder, registered in that folder's `_index.scss`. Use the variables in `abstract/_variables.scss` for colors and fonts instead of hard-coded values.
- **Responsiveness:** use the `breakpoint` mixin (`tablet` ≤ 900px, `mobile` ≤ 600px, `small` ≤ 380px) and `flex-center` from `abstract/_mixins.scss`.
- **Animations:** add AOS effects with `data-aos` attributes on elements. Don't call `AOS.init` again.
- **Components:** use function components with default exports and PascalCase file names. Put new section-level components in `sections/` and reusable pieces in `components/` (grouped in a subfolder when they belong to one section).
- Props are not type-checked (`react/prop-types` is disabled per file). Keep prop names descriptive.
