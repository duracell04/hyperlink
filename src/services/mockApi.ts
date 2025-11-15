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

const studentCreatorToolbox: Toolbox = {
  id: "student_creator",
  name: "Student Creator Toolbox",
  tagline: "Everything you need to ship uni projects and side hustles.",
  description:
    "A lean, low-cost stack for students who want to design, collaborate and publish without burning their stipend on software.",
  idealUser: "Students, early-stage hackers, side-project builders",
  idealTeamSize: "1-3 people",
  tags: ["low cost", "design", "content", "solo / small team"],
  tools: [
    {
      id: "figma",
      name: "Figma",
      url: "https://www.figma.com/",
      category: "Design",
      shortDescription: "Collaborative interface design and whiteboarding.",
      typicalPlan: "Starter / Education",
      approxMonthlyCost: "Free-€15 / editor",
      recommendedFor: "Designing UIs, slides, simple diagrams.",
    },
    {
      id: "notion",
      name: "Notion",
      url: "https://www.notion.so/",
      category: "Docs & Knowledge",
      shortDescription: "All-in-one notes, docs, tasks and wiki.",
      typicalPlan: "Personal Pro / Plus",
      approxMonthlyCost: "~€8 / user",
      recommendedFor: "Project docs, personal knowledge base, task lists.",
    },
    {
      id: "canva",
      name: "Canva",
      url: "https://www.canva.com/",
      category: "Graphics & Content",
      shortDescription: "Templates for social posts, presentations and flyers.",
      typicalPlan: "Canva Pro",
      approxMonthlyCost: "~€12 / user",
      recommendedFor: "Social media content, quick visuals for pitches.",
    },
    {
      id: "google_workspace",
      name: "Google Workspace",
      url: "https://workspace.google.com/",
      category: "Email & Files",
      shortDescription: "Gmail, Drive, Docs, Sheets under your own domain.",
      typicalPlan: "Business Starter",
      approxMonthlyCost: "~€6 / user",
      recommendedFor: "Email, file storage, collaborative docs.",
    },
    {
      id: "calendly",
      name: "Calendly",
      url: "https://calendly.com/",
      category: "Scheduling",
      shortDescription: "No-back-and-forth meeting scheduling.",
      typicalPlan: "Standard",
      approxMonthlyCost: "~€10 / user",
      recommendedFor: "Booking calls with classmates, clients or mentors.",
    },
  ],
};

const productTeamToolbox: Toolbox = {
  id: "product_team",
  name: "Product Team Toolbox",
  tagline: "Ship faster with a clean, battle-tested product stack.",
  description:
    "A modern stack for 5-20 person product teams that need a shared source of truth, clean communication and clear ownership.",
  idealUser: "Product-led SaaS teams",
  idealTeamSize: "5-20 people",
  tags: ["SaaS", "product", "collaboration"],
  tools: [
    {
      id: "linear",
      name: "Linear",
      url: "https://linear.app/",
      category: "Issues & Roadmap",
      shortDescription: "Lightning-fast issue tracking and sprints.",
      typicalPlan: "Standard",
      approxMonthlyCost: "~€10 / user",
      recommendedFor: "Product & engineering task management.",
    },
    {
      id: "slack",
      name: "Slack",
      url: "https://slack.com/",
      category: "Communication",
      shortDescription: "Channel-based team messaging.",
      typicalPlan: "Pro",
      approxMonthlyCost: "~€7 / user",
      recommendedFor: "Daily team communication, alerts, quick questions.",
    },
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/",
      category: "Code Hosting",
      shortDescription: "Git repos, reviews and CI for your codebase.",
      typicalPlan: "Team / Pro",
      approxMonthlyCost: "~€4 / user",
      recommendedFor: "Version control, code review, CI.",
    },
    {
      id: "vercel",
      name: "Vercel",
      url: "https://vercel.com/",
      category: "Hosting",
      shortDescription: "Serverless hosting for frontends and APIs.",
      typicalPlan: "Hobby / Pro",
      approxMonthlyCost: "Varies (~€20+ / project)",
      recommendedFor: "Deploying marketing site and web app quickly.",
    },
    {
      id: "posthog",
      name: "PostHog",
      url: "https://posthog.com/",
      category: "Product Analytics",
      shortDescription: "Open-source product analytics and feature flags.",
      typicalPlan: "Usage-based",
      approxMonthlyCost: "Starts free, scales with events",
      recommendedFor: "Tracking usage, funnels, feature adoption.",
    },
  ],
};

const agencyToolbox: Toolbox = {
  id: "agency",
  name: "Creative Agency Toolbox",
  tagline: "Pitch, produce and deliver client work without chaos.",
  description:
    "A stack for digital agencies that balances creativity, collaboration and client visibility.",
  idealUser: "Digital / creative / product agencies",
  idealTeamSize: "8-40 people",
  tags: ["agency", "client work", "collaboration"],
  tools: [
    {
      id: "miro",
      name: "Miro",
      url: "https://miro.com/",
      category: "Whiteboarding",
      shortDescription: "Visual collaboration for workshops and mapping.",
      typicalPlan: "Business",
      approxMonthlyCost: "~€16 / user",
      recommendedFor: "Workshops, flows, story maps with clients.",
    },
    {
      id: "clickup",
      name: "ClickUp",
      url: "https://clickup.com/",
      category: "Project Management",
      shortDescription: "Tasks, docs and timelines in one place.",
      typicalPlan: "Business",
      approxMonthlyCost: "~€12 / user",
      recommendedFor: "Managing multiple client projects and tasks.",
    },
    {
      id: "loom",
      name: "Loom",
      url: "https://www.loom.com/",
      category: "Async Video",
      shortDescription: "Quick screen recordings for updates and reviews.",
      typicalPlan: "Business",
      approxMonthlyCost: "~€12 / user",
      recommendedFor: "Async feedback on designs, walkthroughs.",
    },
    {
      id: "hubspot",
      name: "HubSpot CRM",
      url: "https://www.hubspot.com/products/crm",
      category: "CRM",
      shortDescription: "Track leads, deals and client communication.",
      typicalPlan: "Starter",
      approxMonthlyCost: "~€20-€50+ / month",
      recommendedFor: "Sales pipeline and client management.",
    },
    {
      id: "1password",
      name: "1Password",
      url: "https://1password.com/",
      category: "Security",
      shortDescription: "Shared password manager for teams.",
      typicalPlan: "Business",
      approxMonthlyCost: "~€7 / user",
      recommendedFor: "Managing logins for shared client tools securely.",
    },
  ],
};

const allToolboxes: Toolbox[] = [
  studentCreatorToolbox,
  productTeamToolbox,
  agencyToolbox,
];

export async function fetchToolboxesMock(): Promise<Toolbox[]> {
  await new Promise((res) => setTimeout(res, 400));
  return allToolboxes;
}
