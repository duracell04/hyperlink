'use client';

import { useMemo, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getReportForScenario, toolboxes, type Issue, type Tool } from "@/lib/mockData";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const scenarios = [
  { id: "saas", label: "SaaS team" },
  { id: "agency", label: "Agency" },
  { id: "student", label: "Student" },
];

export default function DemoPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initialScenario = searchParams.get("scenario") ?? "saas";
  const [scenario, setScenario] = useState(initialScenario);
  const [loading, setLoading] = useState(false);
  const [appliedFixes, setAppliedFixes] = useState<Set<string>>(new Set());

  const report = getReportForScenario(scenario);

  const handleScenarioChange = (nextScenario: string) => {
    setScenario(nextScenario);
    setAppliedFixes(new Set());

    const params = new URLSearchParams(searchParams.toString());
    params.set("scenario", nextScenario);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const handleGenerateReport = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Mock report generated");
    }, 800);
  };

  const toggleFix = (issueId: string) => {
    setAppliedFixes((prev) => {
      const next = new Set(prev);
      if (next.has(issueId)) {
        next.delete(issueId);
      } else {
        next.add(issueId);
      }
      return next;
    });
  };

  const calculatedSavings = useMemo(() => {
    return report.issues.reduce((acc, issue) => {
      if (appliedFixes.has(issue.id)) {
        return acc + issue.potentialSaving;
      }
      return acc;
    }, 0);
  }, [appliedFixes, report.issues]);

  const remainingWaste = Math.max(report.estimatedWaste - calculatedSavings, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8 space-y-8">
        <Card className="p-6 border-border bg-card space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Mock data</p>
              <h2 className="text-2xl font-semibold">Configure your company snapshot</h2>
            </div>
            <Button onClick={handleGenerateReport} disabled={loading}>
              {loading ? "Generating..." : "Generate report"}
            </Button>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Scenario</p>
              <div className="flex flex-wrap gap-2">
                {scenarios.map(({ id, label }) => (
                  <Button
                    key={id}
                    variant={scenario === id ? "default" : "outline"}
                    onClick={() => handleScenarioChange(id)}
                    className={cn(
                      scenario === id &&
                        "bg-gradient-to-r from-brand-yellow to-brand-orange text-primary-foreground hover:opacity-90",
                    )}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              This demo uses mock data from a {report.headcount}-person{" "}
              {scenario === "saas" ? "B2B SaaS team" : scenario === "agency" ? "digital agency" : "student project"}.
            </p>
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          <SummaryCard label="Total SaaS spend" value={`£${report.totalSpend.toLocaleString()}`} sublabel="/ year" />
          <SummaryCard
            label="Estimated waste"
            value={`£${remainingWaste.toLocaleString()}`}
            sublabel={`${calculatedSavings ? `£${calculatedSavings.toLocaleString()} saved` : "Potential savings"}`}
            highlight
          />
          <SummaryCard
            label="Tools detected"
            value={report.toolsCount.toString()}
            sublabel={`Across ${report.categoriesCount} categories`}
          />
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="issues">Issues</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="toolboxes">Toolboxes</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="p-6 space-y-4 border-border">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Savings simulator</h3>
                <p className="text-sm text-muted-foreground">
                  Toggle fixes to simulate the impact of each recommendation. Applied fixes reduce the waste total in real time.
                </p>
              </div>
              <div className="space-y-3">
                {report.issues.map((issue) => (
                  <div
                    key={issue.id}
                    className={cn(
                      "flex flex-col gap-2 rounded-lg border border-border/70 p-4 md:flex-row md:items-center md:justify-between",
                      appliedFixes.has(issue.id) && "bg-primary/5 border-primary/60",
                    )}
                  >
                    <div>
                      <p className="font-semibold">{issue.tool}</p>
                      <p className="text-sm text-muted-foreground">{issue.recommendation}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">Potential saving</p>
                        <p className="text-lg font-semibold text-success tabular-nums">
                          £{issue.potentialSaving.toLocaleString()}
                        </p>
                      </div>
                      <Button
                        variant={appliedFixes.has(issue.id) ? "default" : "outline"}
                        onClick={() => toggleFix(issue.id)}
                      >
                        {appliedFixes.has(issue.id) ? "Applied" : "Apply fix"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="issues" className="space-y-4">
            {report.issues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </TabsContent>

          <TabsContent value="tools">
            <Card className="p-0 overflow-hidden border-border">
              <div className="grid grid-cols-12 bg-muted px-4 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                <span className="col-span-4">Tool</span>
                <span className="col-span-3">Category</span>
                <span className="col-span-2 text-right">Annual spend</span>
                <span className="col-span-3 text-right">Health</span>
              </div>
              {report.tools.map((tool) => (
                <ToolRow key={tool.id} tool={tool} />
              ))}
            </Card>
          </TabsContent>

          <TabsContent value="toolboxes">
            <div className="grid gap-4 md:grid-cols-2">
              {toolboxes.map((toolbox) => (
                <Card
                  key={toolbox.id}
                  className={cn(
                    "p-5 border-border/60",
                    report.toolboxes.includes(toolbox.id) && "border-primary/60 bg-primary/5",
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{toolbox.name}</h3>
                      <p className="text-sm text-muted-foreground">{toolbox.tagline}</p>
                    </div>
                    {report.toolboxes.includes(toolbox.id) && <Badge variant="outline">Suggested</Badge>}
                  </div>
                  <div className="mt-4 space-y-2">
                    {toolbox.tools.map((tool) => (
                      <div key={tool.name} className="flex justify-between text-sm">
                        <span>{tool.name}</span>
                        <span className="text-muted-foreground tabular-nums">{tool.approxCost}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

const SummaryCard = ({ label, value, sublabel, highlight }: { label: string; value: string; sublabel?: string; highlight?: boolean }) => (
  <Card
    className={cn(
      "p-5 border-border/70",
      highlight && "bg-gradient-to-br from-brand-yellow/10 via-brand-orange/10 to-transparent border-brand-yellow/60",
    )}
  >
    <p className="text-sm text-muted-foreground">{label}</p>
    <p className="text-3xl font-bold tabular-nums">{value}</p>
    {sublabel && <p className="text-xs text-muted-foreground">{sublabel}</p>}
  </Card>
);

const IssueCard = ({ issue }: { issue: Issue }) => {
  const tone =
    issue.type === "zombie" ? "destructive" : issue.type === "duplicate" ? "warning" : "success";

  return (
    <Card className="p-5 border-border/70 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Badge variant={tone === "destructive" ? "destructive" : "outline"}>{issue.type}</Badge>
          <span className="text-sm text-muted-foreground">{issue.category}</span>
        </div>
        <h3 className="text-lg font-semibold">{issue.tool}</h3>
        <p className="text-sm text-muted-foreground">{issue.recommendation}</p>
      </div>
      <div className="text-right">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">Annual cost</p>
        <p className="text-lg font-semibold tabular-nums">£{issue.annualCost.toLocaleString()}</p>
        <p className="text-xs text-muted-foreground">
          Potential saving: <span className="text-success font-semibold">£{issue.potentialSaving.toLocaleString()}</span>
        </p>
      </div>
    </Card>
  );
};

const ToolRow = ({ tool }: { tool: Tool }) => {
  const tone = {
    healthy: "text-success",
    zombie: "text-destructive",
    duplicate: "text-warning",
    overprovisioned: "text-warning",
  }[tool.status];

  return (
    <div className="grid grid-cols-12 border-t border-border/60 px-4 py-3 text-sm">
      <span className="col-span-4 font-medium">{tool.name}</span>
      <span className="col-span-3 text-muted-foreground">{tool.category}</span>
      <span className="col-span-2 text-right tabular-nums">£{tool.annualSpend.toLocaleString()}</span>
      <span className={cn("col-span-3 text-right capitalize font-medium", tone)}>{tool.status}</span>
    </div>
  );
};
