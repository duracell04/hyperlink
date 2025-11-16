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
        "You maintain both Notion and Confluence for docs. Migrate one way, shut the other down – expect ~50% savings and simpler onboarding.",
    },
    {
      id: "3",
      vendor: "RandomTool.io",
      category: "Analytics",
      spendPerYear: 2_120,
      issue: "zombie",
      recommendation:
        "No evidence of active users in 6+ months. Treat as a zombie subscription and cancel.",
    },
  ],
};

const toolboxes: Toolbox[] = [
  {
    id: "student_creator",
    name: "Student Creator Toolbox",
    tagline: "Ship uni projects and side hustles on a student budget.",
    description:
      "A lean, low-cost stack for students who want to design, collaborate and publish without burning their stipend on software.",
    idealUser: "Students, early-stage hackers, side-project builders",
    idealTeamSize: "1–3 people",
    tags: ["low cost", "design", "content", "solo / small team"],
    tools: [
      {
        id: "figma",
        name: "Figma",
        url: "https://www.figma.com/",
        category: "Design",
        shortDescription: "Collaborative interface design and whiteboarding.",
        typicalPlan: "Starter / Education",
        approxMonthlyCost: "Free–€15 / editor",
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
    ],
  },
  // add Product Team + Agency toolboxes if you want, same pattern
];

export async function fetchLeakReportMock(): Promise<LeakReport> {
  await new Promise((res) => setTimeout(res, 500));
  return dummyLeakReport;
}

export async function fetchToolboxesMock(): Promise<Toolbox[]> {
  await new Promise((res) => setTimeout(res, 400));
  return toolboxes;
}
