# AGENTS.md

## Tech stack

React 19 + TypeScript 6 + Vite 8 + Tailwind CSS 4 + lucide-react. Slate grayscale + blue accent, driven by CSS design tokens.

## Commands

- `npm run dev` — start dev server
- `npm run build` — typecheck + production build (`tsc -b && vite build`)
- `npm run lint` — oxlint

## Design tokens

All colors are CSS custom properties defined in `src/index.css` (`:root` light, `.dark` dark) and registered in `tailwind.config.cjs` → use Tailwind classes, never hardcoded hex:

| Token | Class examples | Light | Dark |
| --- | --- | --- | --- |
| `--background` | `bg-background` | #F8FAFC | #020617 |
| `--surface` | `bg-surface` | #FFFFFF | #0F172A |
| `--primary` | `text-primary`, `bg-primary`, `border-primary` | #2563EB | #3B82F6 |
| `--secondary` | `text-secondary` | #60A5FA | #93C5FD |
| `--ink` | `text-ink` | #0F172A | #F8FAFC |
| `--muted` | `text-muted` | #64748B | #94A3B8 |
| `--line` | `border-line` (also the DEFAULT border color) | #E2E8F0 | #1E293B |

- Tokens switch automatically with `.dark` — do NOT write `dark:` color variants for them
- Opacity modifiers work (`bg-primary/10`, `ring-primary/15`) via color-mix

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

**Brand icons**: this lucide-react version removed brand icons (`Github`, `Linkedin`). Use the inline SVG components in `src/components/icons.tsx` (`GithubIcon`, `LinkedinIcon`) instead.

## TypeScript strictness

- `noUnusedLocals: true`, `noUnusedParameters: true` — unused imports cause build failures
- `verbatimModuleSyntax: false` — `import type` is not required but allowed
- `erasableSyntaxOnly: true` — do not use `enum` (use `as const` objects instead)

## Architecture

- All CV data lives in `src/data/cvData.ts` — edit one file to customize
- Layout (`src/App.tsx`): fixed `SideNav` (top bar on mobile, left icon rail on `lg:`) + hero banner (`src/assets/hero-background.jpg`) with the card grid overlapping it via `-mt-10 sm:-mt-14` + `ProfileCard` sticky column + stacked section cards
- Every section uses the shared `Section` wrapper (`src/components/Section.tsx`): card + title + accent bar. Sections auto-hide when their data array is empty (Experience, Education, Skills, Certifications, Languages)
- `SideNav` has scroll-spy via IntersectionObserver; anchor scrolling needs `scroll-mt-24` on sections (already in `Section`)
- Dark mode: `<html class="dark">` toggled via ThemeToggle, preference saved in localStorage; `index.html` has an inline script to apply the saved theme before first paint
- "Descargar CV" button calls `window.print()`
- CSS entry: `src/main.tsx` imports `./index.css`
