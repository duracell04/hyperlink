// ---------- Leak report types ----------

export type SaaSLeakIssue = "duplicate" | "zombie" | "overprovisioned";

export type SaaSLeak = {
  id: string;
  vendor: string;
  category: string;
  spendPerYear: number;
  issue: SaaSLeakIssue;
  recommendation: string;
};

export type LeakReport = {
  companyName: string;
  headcount: number;
  period: string;
  totalSpend: number;
  estimatedWaste: number;
  leaks: SaaSLeak[];
};

// ---------- Toolbox types ----------

export type ToolInfo = {
  id: string;
  name: string;
  url: string;
  category: string;
  shortDescription: string;
  typicalPlan: string;
  approxMonthlyCost: string;
  recommendedFor: string;
};

export type Toolbox = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  idealUser: string;
  idealTeamSize: string;
  tags: string[];
  tools: ToolInfo[];
};

// ---------- Dummy leak report ----------

const dummyLeakReport: LeakReport = {
  companyName: "Acme SaaS GmbH",
  headcount: 42,
  period: "Last 12 months",
  totalSpend: 48_237,
  estimatedWaste: 8_120,
  leaks: [
    {
      id: "1",
      vendor: "Figma",
      category: "Design",
      spendPerYear: 2_400,
      issue: "overprovisioned",
      recommendation:
        "You pay for 15 seats, but only ~9 designers are active monthly. Trim 6 seats and save ~€960/year.",
    },
    {
      id: "2",
      vendor: "Notion + Confluence",
      category: "Knowledge / Docs",
      spendPerYear: 3_600,
      issue: "duplicate",
      recommendation:
        "You maintain both Notion and Confluence for docs. Migrate one way, shut the other down - expect ~50% savings and simpler onboarding.",
    },
    {
      id: "3",
      vendor: "RandomTool.io",
      category: "Analytics",
      spendPerYear: 2_120,
      issue: "zombie",
      recommendation:
        "No invoices in the last 6 months show any user activity or exports. Treat as a zombie subscription and cancel.",
    },
    {
      id: "4",
      vendor: "Zoom + Whereby + Google Meet",
      category: "Meetings",
      spendPerYear: 1_320,
      issue: "duplicate",
      recommendation:
        "Three separate providers for video calls. Standardise on one, cancel the rest - small but easy win and fewer support tickets.",
    },
    {
      id: "5",
      vendor: "Loom",
      category: "Async video",
      spendPerYear: 780,
      issue: "overprovisioned",
      recommendation:
        "24 seats, but only 7 people created a video in the last 3 months. Drop to a smaller tier and re-enable later if adoption grows.",
    },
  ],
};

export async function fetchLeakReportMock(): Promise<LeakReport> {
  await new Promise((res) => setTimeout(res, 600));
  return dummyLeakReport;
}

// ---------- Dummy toolboxes with real tools ----------

const modernWebStudioToolbox: Toolbox = {
  id: "modern_web_studio",
  name: "Modern Web Studio Launchpad",
  tagline: "Ship marketing sites, microsites and client portals in days.",
  description:
    "A no-code forward stack that keeps Webflow builds organised, lets you hand projects back to clients cleanly and showcases work with zero engineering bottlenecks.",
  idealUser: "Web studios, marketing leads, solo no-code makers",
  idealTeamSize: "2-15 makers",
  tags: ["webflow", "client work", "no-code"],
  tools: [
    {
      id: "webflow",
      name: "Webflow",
      url: "https://webflow.com/",
      category: "Site Builder",
      shortDescription: "Visual CMS + hosting for high-polish marketing sites.",
      typicalPlan: "Workspace Core + CMS",
      approxMonthlyCost: "~$29-$49 / site",
      recommendedFor: "Shipping responsive pages without touching code.",
    },
    {
      id: "framer_sites",
      name: "Framer Sites",
      url: "https://www.framer.com/sites/",
      category: "Site Builder",
      shortDescription:
        "Design-led site builder with animation, components and AI.",
      typicalPlan: "Pro",
      approxMonthlyCost: "~$20 / site",
      recommendedFor: "Campaign pages that need motion and iteration speed.",
    },
    {
      id: "relume",
      name: "Relume Library",
      url: "https://library.relume.io/",
      category: "Component Library",
      shortDescription:
        "2,000+ audited sections for Webflow + Figma, ready to remix.",
      typicalPlan: "Team",
      approxMonthlyCost: "~$32 / seat",
      recommendedFor: "Systemising builds and handing off clean design systems.",
    },
    {
      id: "finsweet_client_first",
      name: "Finsweet Client-First",
      url: "https://www.finsweet.com/client-first",
      category: "Standards",
      shortDescription:
        "Naming conventions, clonables and docs so any builder can jump in.",
      typicalPlan: "Free",
      approxMonthlyCost: "$0",
      recommendedFor:
        "Keeping class naming consistent for scale and client updates.",
    },
    {
      id: "notion_client_portal",
      name: "Notion Client Portal",
      url: "https://www.notion.so/templates/client-portal",
      category: "Client Portal",
      shortDescription:
        "Branded portal for briefs, milestones, deliverables and invoices.",
      typicalPlan: "Plus",
      approxMonthlyCost: "~$8 / user",
      recommendedFor: "Sharing progress, QA notes and approvals transparently.",
    },
  ],
};

const growthOpsCommandToolbox: Toolbox = {
  id: "growth_ops_command",
  name: "Growth Ops Command Kit",
  tagline: "One shared cockpit for outbound, lifecycle and attribution.",
  description:
    "Tools a lean revenue team needs to enrich leads, automate follow-ups and prove which experiments created pipeline.",
  idealUser: "RevOps, marketing operators, SDR leaders",
  idealTeamSize: "3-25 people",
  tags: ["growth", "automation", "attribution"],
  tools: [
    {
      id: "hubspot",
      name: "HubSpot Marketing & CRM",
      url: "https://www.hubspot.com/",
      category: "CRM + Automation",
      shortDescription: "Contact, deal and nurture automation inside one UI.",
      typicalPlan: "Starter / Pro bundle",
      approxMonthlyCost: "~$45-$890 / month",
      recommendedFor: "Central source of truth for pipeline and lifecycle.",
    },
    {
      id: "clay",
      name: "Clay",
      url: "https://www.clay.com/",
      category: "Prospecting",
      shortDescription: "Automated lead sourcing, enrichment and scoring.",
      typicalPlan: "Pro",
      approxMonthlyCost: "~$149 / month",
      recommendedFor: "Crafting hyper-personalised outbound at scale.",
    },
    {
      id: "apollo",
      name: "Apollo.io",
      url: "https://www.apollo.io/",
      category: "Sales Engagement",
      shortDescription: "Sequencing, dialer and inbox for SDR teams.",
      typicalPlan: "Professional",
      approxMonthlyCost: "~$79 / seat",
      recommendedFor: "Running multichannel outbound with built-in analytics.",
    },
    {
      id: "zapier",
      name: "Zapier",
      url: "https://zapier.com/",
      category: "Automation",
      shortDescription: "Connect SaaS tools without code. Keeps ops flowing.",
      typicalPlan: "Professional",
      approxMonthlyCost: "~$49 / month",
      recommendedFor: "Routing leads, alerts and enrichment jobs everywhere.",
    },
    {
      id: "looker_studio",
      name: "Looker Studio",
      url: "https://lookerstudio.google.com/",
      category: "Analytics",
      shortDescription: "Live dashboards for spend, pipeline and cohorts.",
      typicalPlan: "Free",
      approxMonthlyCost: "$0",
      recommendedFor: "Executive-ready reporting + shareable growth scorecards.",
    },
  ],
};

const aiProductSquadToolbox: Toolbox = {
  id: "ai_product_squad",
  name: "AI Product Squad Stack",
  tagline: "Everything a lean AI team needs from spec to shipped feature.",
  description:
    "Opinionated picks that keep builders in flow: planning, code, infra and analytics tailored for AI-heavy shipping.",
  idealUser: "Founding engineers, PM/tech leads, AI feature squads",
  idealTeamSize: "4-20 people",
  tags: ["product", "engineering", "ai"],
  tools: [
    {
      id: "linear",
      name: "Linear",
      url: "https://linear.app/",
      category: "Planning",
      shortDescription: "Issues, projects and roadmaps with keyboard-first UX.",
      typicalPlan: "Standard",
      approxMonthlyCost: "~$10 / user",
      recommendedFor: "Linking discovery, delivery and bug fixes.",
    },
    {
      id: "notion",
      name: "Notion",
      url: "https://www.notion.so/",
      category: "Docs",
      shortDescription: "Specs, research and architecture in one collaborative OS.",
      typicalPlan: "Plus",
      approxMonthlyCost: "~$8 / user",
      recommendedFor: "PRDs, prompt libraries and runbooks.",
    },
    {
      id: "github_copilot",
      name: "GitHub Copilot",
      url: "https://github.com/features/copilot",
      category: "AI Pairing",
      shortDescription: "AI pair programmer inside VS Code and JetBrains.",
      typicalPlan: "Business",
      approxMonthlyCost: "$19 / user",
      recommendedFor: "Accelerating CRUD, tests and repetitive glue code.",
    },
    {
      id: "supabase",
      name: "Supabase",
      url: "https://supabase.com/",
      category: "Backend",
      shortDescription: "Managed Postgres, auth, storage and edge functions.",
      typicalPlan: "Pro",
      approxMonthlyCost: "~$25 / project",
      recommendedFor: "Launching APIs + auth without spinning infra.",
    },
    {
      id: "vercel",
      name: "Vercel",
      url: "https://vercel.com/",
      category: "Deployment",
      shortDescription: "Serverless deployments with previews and edge runtime.",
      typicalPlan: "Pro",
      approxMonthlyCost: "~$20+ / seat",
      recommendedFor: "Instant previews, SSR and AI workloads close to users.",
    },
    {
      id: "posthog",
      name: "PostHog",
      url: "https://posthog.com/",
      category: "Product Analytics",
      shortDescription: "Self-serve analytics, feature flags and session replay.",
      typicalPlan: "Scale",
      approxMonthlyCost: "Usage-based",
      recommendedFor:
        "Measuring retention, funnels and running safe rollouts.",
    },
  ],
};

const allToolboxes: Toolbox[] = [
  modernWebStudioToolbox,
  growthOpsCommandToolbox,
  aiProductSquadToolbox,
];

export async function fetchToolboxesMock(): Promise<Toolbox[]> {
  await new Promise((res) => setTimeout(res, 400));
  return allToolboxes;
}
