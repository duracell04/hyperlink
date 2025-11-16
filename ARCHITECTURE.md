# Hyperlink Architecture Notes

The demo is intentionally lightweight, but knowing how the pieces fit together helps when extending it.

## High-level overview

```
Next.js (App Router)
│
├─ src/app
│  ├─ layout.tsx      → root layout, metadata, theme provider
│  ├─ page.tsx        → landing experience (`/`)
│  └─ demo/page.tsx   → interactive leak report mock (`/demo`)
│
├─ src/components
│  ├─ ui/             → curated shadcn/Radix primitives actually used in the mock
│  ├─ Header.tsx, HeroCard.tsx, ThemeToggle.tsx, etc.
│  └─ LoadingScreen.tsx → branded loading state
│
├─ src/lib
│  ├─ mockReport.ts   → SaaS Leak Report mock data
│  ├─ mockToolboxes.ts→ Toolboxes mock data
│  └─ utils.ts        → helpers (cn / formatting)
│
└─ src/hooks
   └─ useThemeToggle.ts, etc.
```

## Data flow

- All “backend” data lives in `src/lib/mock*.ts`. Routes import these modules directly (no API layer).
- UI state is local to route components; TanStack Query is included primarily for future async flows.
- No persistence occurs—the demo resets on refresh.

## Styling system

- Tailwind CSS drives layout/spacing/typography (`tailwind.config.ts`).
- shadcn UI was trimmed to only the primitives the mock uses, reducing bundle size and maintenance.
- Custom brand tokens (colors, gradients) live in `src/app/globals.css` as Tailwind utilities or CSS variables.

## Theming

- `next-themes` handles dark/light switching.
- `ThemeToggle` component (under `src/components`) wires the UI toggle to the provider.

## Build & tooling

- Pnpm is required (`packageManager` field). Node 18+ recommended.
- `pnpm lint` → `next lint`
- `pnpm typecheck` → `tsc --noEmit`
- `pnpm test` → lint + typecheck (used by Husky + CI)
- `pnpm build` → `next build`

## Adding new UI pieces

1. Prefer composing from the existing `src/components/ui/*` primitives; add new ones only if they’re actually used.
2. Keep page-level composition inside the relevant route file (e.g., `src/app/demo/page.tsx`).
3. If a component is shared between routes, place it under `src/components` (not `app/`).
4. Update mock data under `src/lib` rather than hardcoding JSON in components.

## Future extension points

- Replace mock data with API calls via Next.js route handlers or server actions.
- Introduce persistence (Supabase, Planetscale, etc.) once data contracts stabilize.
- Expand CI to run visual tests or capture storybook snapshots if the component library grows.

For more day-to-day workflow guidelines, see `CONTRIBUTING.md`.
