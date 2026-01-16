# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with HMR
- `npm run build` - Type-check with TypeScript and build for production
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview the production build locally

## Tech Stack

- React 19 with TypeScript
- Vite 7 for bundling and dev server
- ESLint 9 with flat config format (eslint.config.js)
- TypeScript-ESLint for type-aware linting
- CSS files for styling (no CSS-in-JS)

## Project Structure

- `src/main.tsx` - Application entry point, renders App in StrictMode
- `src/App.tsx` - Root component
- `src/index.css` - Global styles, CSS variables, and font imports
- `src/App.css` - App-level styles (minimal)
- `src/components/` - Component files with co-located CSS
- `src/assets/images/` - Image assets
- `vite.config.ts` - Vite configuration with React plugin
- `tsconfig.json` - References tsconfig.app.json (app code) and tsconfig.node.json (tooling)

## Component Architecture

- Each component has its own `.tsx` and `.css` file in `src/components/`
- Components import their own CSS file at the top
- Functional components only (no class components)

## Styling Conventions

### CSS Variables
- Defined in `:root` in `index.css`
- Use `--surface-color` for background surfaces (cards, boxes)
- Add new variables to `:root` when introducing reusable colors/values

### Color Palette
- Primary green: #5CB85C (buttons, accents, icons)
- Primary green hover: #4CAF50
- Dark text: #2C3E50
- Gray text: #6C757D
- Light background: #F0FDF4
- Surface/cards: #FFFFFF (via --surface-color)

### Typography
- Open Sans: Body text, general UI
- Poppins: Headings, buttons, navigation
- Raleway: Hero headings, special titles

### Utility Classes
- Bootstrap-like utility classes are manually implemented (d-flex, align-items-center, etc.)
- Grid system uses custom flexbox implementation with col-lg-*, col-md-*, col-xl-* classes

### Icons
- Bootstrap Icons via CDN import in index.css
- Use `bi bi-*` class naming convention

### Responsive Breakpoints
- Extra large (xl): 1200px+
- Large (lg): 992px+
- Medium (md): 768px+
- Small: below 768px
- Extra small: below 576px
