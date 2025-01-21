# Boilerplate App

- Vite + TypeScript + React + TanStack Query + Tailwind CSS + FormatJS + React-Intl + Zustand + Zod + React Hook Form + React Helmet Async + Vitest + Testing Library + Playwright + ESLint + Prettier

## Dev instructions

1. `npm install`
2. `npm run dev`

## Credentials

<< login info >>

## Code Conventions

- Use named export instead default export. eg: `export const Header = () => {`
- Avoid `index.tsx` filenames. Prefer component name instead. eg: `componens/Header.tsx`
- Icons should be placed under `componens/icons` folder with `Icon` prefix. eg: `IconRefresh`
- Use `ComponentName + Props` naming convention for prop types. eg: `type FooterProps`
- Use `react-intl` for translations. Never manually type translation IDs since they are auto-generated
- Prefer file-based page components. eg: `pages/about-us.tsx > /about-us`
