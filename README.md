# Church Website Frontend

Frontend for the church website built with React + Vite.

## Quick Start

### 1) Prerequisites
- Node.js 18+
- npm 9+

### 2) Install dependencies

```bash
npm install
```

### 3) Run locally

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Useful Scripts

- `npm run dev` → start local development server
- `npm run build` → production build
- `npm run preview` → preview built app locally
- `npm run lint` → run lint checks

## Project Structure (high level)

- `src/pages/` → route-level pages
- `src/components/` → reusable UI components
- `src/locales/` → translation strings
- `src/data/` → shared static app data (for example contact info)
- `src/context/` → React context providers
- `src/utils/` → helper utilities

## Development Workflow

### Branching rule
Work on **feature-based branches** only.

Examples:
- `feature/media-card-updates`
- `feature/registrations-redesign`
- `fix/navbar-dropdown`

### PR rule
1. Create/update your feature branch
2. Push your branch
3. Open a Pull Request to `main`
4. Project owner reviews and merges PR

> Do not push directly to `main`.

## Deployment Notes

- `main` is the source of truth for deployment.
- Deployment happens after PR merge into `main`.
- Keep PRs focused and small where possible.

## Translation Rule

- Keep `src/locales/*.json` for translated labels/messages only.
- Keep non-translation content (contact links, static structured data, etc.) in `src/data/`.
