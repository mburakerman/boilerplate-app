# Boilerplate App

- Vite + TypeScript + React + TanStack Query + Tailwind CSS + FormatJS + React-Intl + Zustand + Zod + React Hook Form + React Helmet Async + Vitest + Testing Library + Playwright + ESLint + Prettier

## Dev instructions

1. `npm install`
2. `npm run dev`

## Credentials

<< login info >>

## Code Conventions

- Use named export instead default export. eg: `export const Header = () => {`
- Avoid `index.tsx` filenames. Prefer component name instead. eg: `componens/Header/Header.tsx`
- Icons should be placed under `componens/icons` folder with `Icon` prefix. eg: `IconRefresh`
- Use `ComponentName + Props` naming convention for prop types. eg: `type FooterProps`
- Use `react-intl` for translations. Never manually type translation IDs since they are auto-generated
- Ensure react-query hook names match their API endpoints. eg: `/auth/init => useAuthInit`
- Ensure react-query hook names for GET requests should end with "data" suffix. eg: `/company-types => useCompanyTypesData`
- Prefer file-based page components. eg: `pages/about-us.tsx > /about-us`

## Skills

```sh
npx skills add remix-run/agent-skills --skill react-router-data-mode
```

```sh
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

```sh
npx skills add https://github.com/openai/skills --skill security-best-practices
```
