export type SaaSLeak = {
  id: string;
  vendor: string;
  category: string;
  spendPerYear: number;
  issue: 'duplicate' | 'zombie' | 'overprovisioned';
  recommendation: string;
};

export type LeakReport = {
  period: string;
  totalSpend: number;
  estimatedWaste: number;
  leaks: SaaSLeak[];
};

const dummyReport: LeakReport = {
  period: 'Last 12 months',
  totalSpend: 48_237,
  estimatedWaste: 8_120,
  leaks: [
    {
      id: '1',
      vendor: 'Figma',
      category: 'Design',
      spendPerYear: 2_400,
      issue: 'overprovisioned',
      recommendation: 'Trim 5 unused seats – save ~€600/year.',
    },
    {
      id: '2',
      vendor: 'Notion + Confluence',
      category: 'Knowledge',
      spendPerYear: 3_600,
      issue: 'duplicate',
      recommendation:
        'Consolidate onto one tool – expected save ~€1.8k/year and simpler onboarding.',
    },
    {
      id: '3',
      vendor: 'RandomTool.io',
      category: 'Analytics',
      spendPerYear: 2_120,
      issue: 'zombie',
      recommendation:
        'No known users in last 6 months – cancel or downgrade to free tier.',
    },
  ],
};

export async function fetchLeakReportMock(): Promise<LeakReport> {
  // simulate network latency
  await new Promise((res) => setTimeout(res, 500));
  return dummyReport;
}
