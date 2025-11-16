# Hyperlink

Hyperlink is an automated web-tool management system for teams with a large SaaS stack. It acts as the central library of _who can access what_ and as an audit layer that spotlights which tools are truly needed, which should be cancelled, and which are missing for a healthy stack.

## What is Hyperlink (product vision)?

Hyperlink is designed as an always-on control panel for SaaS operations. It combines three lenses:

### Your web-tool library

- A single, up-to-date list of which SaaS tools the company uses
- Ownership metadata for every tool (team, role, admin vs. member)
- Channel visibility: SSO, shared accounts, role-based access, etc.

### Your access map

- Clear separation of admin vs. user rights
- Insight into shared credentials (password manager, SSO groups, shared inboxes)
- Offboarding visibility (ex-employees, unused accounts, risky access patterns)

### Your audit layer

- Usage vs. spend analysis to reveal zombies, duplicates, and overprovisioned seats
- Security/governance signals (too many admins, missing owners, weak controls)
- Recommendations for missing stack pieces (password manager, monitoring, analytics)

The mockup in this repo focuses on the audit view (SaaS Leak Report + Toolboxes preview) while hinting at the longer-term direction: a full library + access cockpit.

## What this repo is

This repository contains the Hyperlink demo/MVP frontend. It is a clickable mockup that:

- Demonstrates the SaaS Leak Report + control panel concept
- Shows the intended UX and product narrative
- Supports conversations with early users, mentors, and investors

There is no production backend here. All data is mocked locally--think of this as a polished tour, not a live product.

## Demo highlights

### Landing page (`/`)

- Hero section that pitches “The control panel for your SaaS stack”
- Use cases for SaaS businesses, agencies, students/solo builders
- “Discover �' Diagnose �' Recommend” storyline
- Toolboxes teaser highlighting curated stacks Hyperlink AI could suggest
- Roadmap strip covering Today, Next, Later milestones

### Demo page (`/demo`)

- Pseudo-upload flow that mimics ingesting statements
- SaaS Leak Report with spend/waste/headline insights
- Savings simulator with “apply fix” toggles
- Tool list/table with health status and filters
- Toolboxes section showing which recommendations already exist in the stack
- Optional scenario toggle (Current vs. Consolidated stack)

Everything is powered by local mock modules (`src/lib/mockReport.ts`, `src/lib/mockToolboxes.ts`, etc.).

## Tech stack (current demo)

- **Framework**: Next.js (App Router) + React 18 + TypeScript
- **Styling**: Tailwind CSS with shadcn/Radix primitives and branded components
- **State/UX helpers**: TanStack Query, next-themes, lucide-react, Sonner
- **Tooling**: pnpm, ESLint, TypeScript, Tailwind CLI
- **Data**: local mocks only--no production billing data or APIs

## Architecture at a glance

- `src/app`: Next.js App Router routes (`page.tsx`, `/demo/page.tsx`, layout, etc.)
- `src/components`: reusable primitives (Hero card, Header, ThemeToggle, etc.)
- `src/components/ui`: curated subset of shadcn components that the demo actually uses
- `src/lib`: mock data, helper utilities (`utils.ts`)
- `src/hooks`: custom hooks (theme helpers, query helpers)
- `public`: favicon and robots text only (unused placeholder assets removed)

## Getting started

```bash
pnpm install
pnpm dev
```

Then open:

- `http://localhost:3000/` for the landing/story experience
- `http://localhost:3000/demo` for the interactive mock report

## Development workflow

Run these locally before pushing:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Notes:

- `pnpm test` is an aggregate script that runs lint + typecheck.
- Husky's pre-commit hook invokes `pnpm test`, so the same guardrails apply locally and in CI.
- The GitHub Actions workflow replicates the same steps and uploads the `.next` build artifact for previewing.

Additional guidance:

- [CONTRIBUTING.md](./CONTRIBUTING.md) covers branch conventions, commit checklists, and PR etiquette.
- [ARCHITECTURE.md](./ARCHITECTURE.md) documents the project layout, mock data flow, and design system usage.

## Contribution checklist

1. Create a branch and make your change.
2. Run `pnpm test` (lint + typecheck) and `pnpm build` to ensure the mock compiles.
3. Verify `/` and `/demo` manually if you touched UX.
4. Update documentation or mock data when behaviour changes.
5. Commit with a clear message and open a PR--CI must stay green.

## Testing & QA

- Use `pnpm test` for fast structural checks.
- `pnpm lint`/`pnpm typecheck` can still run individually if you’re iterating on one dimension.
- Snapshot or visual testing is manual for now--take screen captures when altering layouts.

## Deployment / hosting

The demo targets a standard Next.js deployment (Vercel or any Node-friendly host). Former Firebase Hosting configs have been removed; run `pnpm build && pnpm start` the same way CI does if you need to preview in another environment.

## Roadmap

**Short-term**

- Finalise `/` and `/demo` flows and copy
- Keep mock data realistic and internally consistent
- Polish loading/transition states with the Hyperlink animation

**Medium-term**

- Harden the Next.js + Tailwind implementation (or graduate into production)
- Introduce lightweight backend endpoints for CSV uploads + parsing
- Add auth and multi-tenant support once storage/security paths are defined

## Contact and feedback

This repo is for early adopters, mentors, investors, and collaborators. Share feedback or pilot interest via [contact@hyperlink.tools](mailto:contact@hyperlink.tools). Thoughtful critiques on the problem framing, UX, or roadmap are welcome.

## Disclaimer

This is not production software. Do **not** use it with real billing exports or production credentials. No real financial data is processed in this demo.



