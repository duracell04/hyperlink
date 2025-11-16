# Hyperlink

Hyperlink is an automated web-tool management system for teams with a large SaaS stack.
It acts as your central library of 'who can access what', and as an audit layer that shows which tools are really needed, which should be cancelled, and which are missing for a healthy stack.

## What is Hyperlink (product vision)?

Hyperlink is an automated web-tool management system for companies with a big SaaS stack.

It is designed to be:

### Your web-tool library

A single, always-up-to-date list of:
- Which SaaS tools the company uses
- Which people or teams can access each one
- Through which identity channel (SSO, shared account, role, etc.)

### Your access map

A clear view of:
- Who has admin vs. user rights
- Which shared credentials exist (ideally via integrations with password managers or SSO)
- Where offboarding gaps might exist (ex-employees, unused accounts, risky access patterns)

### Your audit layer

An opinionated report on:
- What is truly needed and actively used
- What should be downgraded or cancelled (zombies, duplicates, overprovisioned seats)
- What is missing for a healthy stack (for example no password manager, no logging, no proper analytics)

The mockup in this repo focuses on the audit side (SaaS Leak Report + Toolboxes preview) while hinting at the longer-term direction: a full web-tool library and access cockpit.

## What this repo is

This repository contains the Hyperlink demo/MVP frontend. It is a clickable product mockup that:

- Demonstrates the core product concept (SaaS Leak Report + SaaS control panel)
- Shows the intended UX and information architecture
- Supports conversations with early users, mentors, and investors

It does not process real billing data or connect to a production backend yet. All data is mocked and local, so think of it as a realistic product tour, not the final product.

## Core product capabilities (target)

Hyperlink is meant to cover three pillars:

### Tool library (What do we have?)

- Automated discovery of all SaaS tools paid for by the company (billing data, card statements, invoice inbox)
- Categorised inventory (design, docs, dev, analytics, CRM, etc.)
- Per-tool metadata: vendor, plan, cost, billing frequency, owning team, and links to docs, contracts, or security info

### Access library (Who can access what?)

- Mapping of users to tools to roles (admin, member, guest)
- Visibility into SSO groups and shared accounts via password manager or SSO integrations
- Identification of tools with too many admins, tools still accessible to ex-employees, and shared logins that should move into a proper identity system

### Audit and recommendations (What should change?)

- Usage vs. spend analysis that highlights zombie subscriptions, duplicates, and overprovisioned seats
- Security and governance signals such as offboarding risk, weak ownership, and tools with no clear owner
- Detection of missing pieces (for example no password manager or monitoring for a production stack)
- Actionable output: a SaaS Leak Report and a Next steps list that can be reviewed monthly in ops or finance meetings

The current mockup shows a slice of this: how a Leak Report could look, how key issues are presented, and how curated toolboxes could guide what to keep, cut, or add.

## Demo highlights

### Landing page (`/`)

- Hero section explaining 'The control panel for your SaaS stack' with mock company metrics
- Use cases for SaaS companies, agencies, and students or solo builders
- 'What Hyperlink does' story (Discover, Diagnose, Recommend)
- Toolboxes teaser that showcases curated stacks Hyperlink AI could suggest
- Roadmap strip outlining Today, Next, and Later milestones

### Demo page (`/demo`)

- Pseudo-upload input that simulates ingesting statements
- SaaS Leak Report view with spend, waste, tool count, and issue cards
- Simple savings simulator concept with Apply fix toggles
- Tools list/table with health status and category filters
- Toolboxes view that indicates which recommended tools already exist in the stack
- Optional scenario view comparing Current vs. Consolidated stack

Everything you see in the demo is powered by local mock data (for example `mockReport.ts` or `mockToolboxes.ts`), not live integrations.

## Tech stack (demo)

- React + TypeScript, targeting Next.js (App Router) with Tailwind CSS
- Tailwind CSS and branded UI components (logo, cards, pills, loader)
- Mock modules for leak reports and toolboxes
- No production backend calls or real financial data

## Getting started

```bash
pnpm install      # or npm install
pnpm dev          # or npm start, depending on the setup
```

Then open:

- http://localhost:3000/ for the landing/story experience
- http://localhost:3000/demo for the interactive mock report

## Roadmap

Short-term:

- Finalise `/` and `/demo` flows
- Align copy and visuals with the product story
- Keep mock data realistic and internally consistent
- Polish loading states with the Hyperlink-branded animation

Medium-term:

- Move fully to Next.js + Tailwind + TypeScript
- Introduce basic backend endpoints for CSV upload and simple parsing/report generation
- Add auth and multi-tenant support once storage and security are defined

## Contact and feedback

This repo is primarily for early adopters, mentors, investors, and potential collaborators. If you have feedback, want to explore a pilot, or are interested in collaborating, reach out at contact@hyperlink.tools.

We welcome thoughtful feedback on the problem framing, the UX, and the roadmap.

## Disclaimer

This is not production software. Do not use it with real billing exports or production credentials. No real financial data is processed in this demo.
