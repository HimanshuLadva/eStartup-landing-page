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

### CSS Selector Scoping
- Prefix child element selectors with the parent component class for specificity
- Example: Use `.hero .icon-box` instead of just `.icon-box`
- This prevents style conflicts when similar patterns are used across sections

### Section Pattern
- Sections use `section` or `.section` as base styling
- Apply `.light-background` modifier class for light-themed sections
- Modifier classes define their own CSS variable overrides
- Sections include `scroll-margin-top` for smooth anchor navigation

## Styling Conventions

### CSS Variables
- Defined in `:root` in `index.css`
- `--surface-color`: Background surfaces (cards, boxes) - #FFFFFF
- `--accent-color`: Primary accent color for interactive elements - #5CB85C
- `--default-color`: Default text color - #212529
- `--background-color`: Section backgrounds (set via modifier classes)
- Add new variables to `:root` when introducing reusable colors/values
- Modifier classes like `.light-background` can override CSS variables locally

### Color Palette
- Primary green/accent: #5CB85C (buttons, accents, icons)
- Primary green hover: #4CAF50
- Default text: #212529
- Dark text: #2C3E50
- Gray text: #6C757D
- Light background: #f1f6f1
- Surface/cards: #FFFFFF (via --surface-color)

### Modern CSS Features
- Use `color-mix()` for color transparency/mixing
- Use `overflow: clip` for section overflow handling

### Typography
- Open Sans: Body text, general UI
- Poppins: Headings, buttons, navigation
- Raleway: Hero headings, special titles, icon-box titles

### Hover/Transition Patterns
- Use `transition: all 0.3s ease-in-out` for multi-property transitions
- Use `transition: 0.3s` or `transition: color 0.3s ease` for single properties
- Interactive cards lift on hover with `transform: translateY(-5px)`
- Accent-colored backgrounds on hover with white text/icons for contrast

### Utility Classes
- Bootstrap-like utility classes are manually implemented (d-flex, align-items-center, etc.)
- Grid system uses custom flexbox implementation with col-lg-*, col-md-*, col-xl-* classes

### Icons
- Bootstrap Icons via CDN import in index.css
- Use `bi bi-*` class naming convention

### Icon Box Pattern
- Reusable card component with icon, title, and optional link
- Structure: `.icon-box` > `.icon` (with `i.bi-*`) + `.title` (with `a.stretched-link`)
- Uses `.stretched-link` for full-card clickable area
- Hover state: accent background with white text/icons

### Responsive Breakpoints
- Extra large (xl): 1200px+
- Large (lg): 992px+
- Medium (md): 768px+
- Small: below 768px
- Extra small: below 576px
