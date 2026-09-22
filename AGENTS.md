# AGENTS.md

## Tech stack

React 19 + TypeScript 6 + Vite 8 + Tailwind CSS 4 + lucide-react. All grayscale (no colors).

## Commands

- `npm run dev` — start dev server
- `npm run build` — typecheck + production build (`tsc -b && vite build`)
- `npm run lint` — oxlint

## Tailwind 4 gotchas

- **Must** use `@import "tailwindcss"` in `src/index.css` — NOT `@tailwind base; @tailwind components; @tailwind utilities;` (old v3 syntax does not work)
- **Must** add `@config "../tailwind.config.cjs"` after the import — without it, responsive (`sm:`, `lg:`) and dark mode classes are not generated
- `postcss.config.cjs` plugin must be `'@tailwindcss/postcss': {}` — NOT `tailwindcss: {}`
- Do NOT use `@apply` inside `@layer base` — Tailwind 4 cannot resolve utility classes there. Use raw CSS values instead
- `.cjs` config files must use `module.exports` (project has `"type": "module"` in package.json)

## Icon imports

Import icons as React components from `lucide-react`:
```tsx
import { Mail, Phone, MapPin } from "lucide-react"
<Mail className="w-4 h-4" />
```
Do NOT use `data-lucide="mail"` attribute pattern — it requires a runtime `lucide.createIcons()` call and does not work in this React setup.

## TypeScript strictness

- `noUnusedLocals: true`, `noUnusedParameters: true` — unused imports cause build failures
- `verbatimModuleSyntax: false` — `import type` is not required but allowed
- `erasableSyntaxOnly: true` — do not use `enum` (use `as const` objects instead)

## Architecture

- All CV data lives in `src/data/cvData.ts` — edit one file to customize
- Components auto-hide when their data array is empty (certifications, languages)
- Dark mode: `<html class="dark">` toggled via ThemeToggle, preference saved in localStorage
- CSS entry: `src/main.tsx` imports `./index.css`
