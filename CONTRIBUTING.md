# Contributing to Hyperlink

Thanks for helping keep the Hyperlink mock sharp. This document collects the day-to-day conventions so you can land changes quickly without breaking the demo.

## Tooling expectations

| Purpose          | Command                    | Notes |
| ---------------- | -------------------------- | ----- |
| Install deps     | `pnpm install`             | pnpm is the canonical package manager (see `packageManager` in `package.json`). |
| Dev server       | `pnpm dev`                 | Runs the Next.js App Router dev server on port 3000. |
| Type checking    | `pnpm typecheck`           | Uses `tsc --noEmit`. |
| Linting          | `pnpm lint`                | Runs `next lint`. |
| Aggregate tests  | `pnpm test`                | Convenience script that chains lint + typecheck (used by Husky + CI). |
| Production build | `pnpm build` / `pnpm start`| Build mirrors CI; `start` serves the result locally. |

Install Husky hooks by running `pnpm install` (it triggers `pnpm prepare` which installs hooks). The `pre-commit` hook runs `pnpm test`.

## Branch & commit workflow

1. Branch from `main` (`git checkout -b feat/<topic>` or similar).
2. Make your changes alongside any mock data/docs updates.
3. Run `pnpm test` and `pnpm build`.
4. Manually spot-check `/` and `/demo`, especially for visual tweaks.
5. Commit with a descriptive message (`feat: add scenario toggle`, `docs: expand roadmap`, etc.).
6. Open a PR; ensure CI (lint → typecheck → test → build) is green before requesting review.

## Pull request checklist

- [ ] Code compiles (`pnpm build`).
- [ ] `pnpm test` passes locally (lint + typecheck).
- [ ] UI changes were verified on `/` and/or `/demo`.
- [ ] Mock data updated (if behaviour or copy changed).
- [ ] README/docs reflect new behaviour or setup steps.
- [ ] Screenshots/GIFs attached when UI shifts materially.

## Coding conventions

- Use the existing Tailwind + shadcn design tokens; prefer composing from `src/components/ui` primitives where available.
- Keep new modules in the existing structure (`src/app`, `src/components`, `src/lib`, `src/hooks`).
- Favour TypeScript types/interfaces near their usage; reuse shared types via `src/lib/types.ts` when a contract spans multiple modules.
- Avoid introducing additional package managers or build tools; align with pnpm + Next.js defaults.

## Filing issues / triage

When opening issues, include:

- Route(s) affected (`/`, `/demo`, etc.).
- Screenshots of the current vs. expected behaviour.
- Steps to reproduce, including any mock data changes required.
- Suggested priority (`p1` = launch blocker, `p3` = polish/nice-to-have).

Thanks for contributing! Ping `contact@hyperlink.tools` if you need context beyond this doc.
