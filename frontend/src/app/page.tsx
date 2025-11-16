'use client';

import { useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Header } from "@/components/Header";
import { HeroCard } from "@/components/HeroCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toolboxes } from "@/lib/mockData";
import {
  Users,
  Building2,
  GraduationCap,
  Search,
  AlertTriangle,
  Wand2,
} from "lucide-react";

export default function HomePage() {
  const [showLoading, setShowLoading] = useState(true);
  const [heroLoading, setHeroLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasSeen = sessionStorage.getItem("hasSeenLoading");
    if (!hasSeen) return;
    const timeout = window.setTimeout(() => {
      setShowLoading(false);
      setHeroLoading(false);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("hasSeenLoading", "true");
    }
    setTimeout(() => {
      setHeroLoading(false);
    }, 300);
  };

  return (
    <>
      {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div className="min-h-screen bg-background">
        <Header />

        <section id="hero" className="container py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                The control panel for your{" "}
                <span className="gradient-text">SaaS stack</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hyperlink finds zombie tools, duplicate subscriptions and
                offboarding risks in your SaaS stack – and turns “we have no
                idea what we pay for” into a clean, board-ready overview. It
                runs continuously in the background so when a new tool appears
                or a renewal is coming up, you see it before it becomes a
                problem.
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                In practice: a live SaaS inventory, a renewal calendar, risk &
                owner mapping, and a Leak Report that shows where to save or
                simplify.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/demo">
                  <Button className="bg-gradient-to-r from-brand-yellow to-brand-orange text-primary-foreground hover:opacity-90" size="lg">
                    View mock report
                  </Button>
                </Link>
                <a href="mailto:contact@hyperlink.tools">
                  <Button size="lg" variant="outline">
                    Join waitlist
                  </Button>
                </a>
              </div>
              <p className="text-xs text-muted-foreground">
                The demo runs on mock data only – no real billing access
                required.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <HeroCard loading={heroLoading} />
            </div>
          </div>
        </section>

        <section id="product" className="container py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Hyperlink does
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PillarCard
              icon={<Search className="h-8 w-8" />}
              title="Discover"
              description="We ingest your SaaS billing from card statements or invoices and build a live inventory of every tool, always up to date."
            />
            <PillarCard
              icon={<AlertTriangle className="h-8 w-8" />}
              title="Diagnose"
              description="We detect duplicates, zombie subscriptions, overprovisioned seats and offboarding risks in your stack."
            />
            <PillarCard
              icon={<Wand2 className="h-8 w-8" />}
              title="Recommend"
              description="We propose concrete actions and curated toolboxes so your stack matches your goals and budget."
            />
          </div>
        </section>

        <section className="container py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                Leak report preview
              </Badge>
              <h2 className="text-3xl font-bold">
                Turn billing chaos into one view
              </h2>
              <p className="text-muted-foreground">
                Hyperlink ingests statements, email receipts or accounting
                exports to produce a single source of truth: who pays for what,
                how often and why.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Live SaaS inventory with owners and spend</li>
                <li>• Renewal calendar and risk mapping</li>
                <li>• Leak Reports that show waste, duplicates and zombies</li>
              </ul>
            </div>
            <Card className="p-6 bg-card border-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total SaaS spend
                    </p>
                    <p className="text-3xl font-bold">€48,237</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Estimated waste
                    </p>
                    <p className="text-3xl font-bold text-destructive">€8,120</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <IssueRow
                    title="Figma"
                    description="Overprovisioned seats"
                    cost="€2,400/year"
                  />
                  <IssueRow
                    title="Notion + Confluence"
                    description="Duplicate tools"
                    cost="€3,600/year"
                  />
                  <IssueRow
                    title="RandomTool.io"
                    description="Zombie subscription"
                    cost="€2,120/year"
                  />
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="use-cases" className="container py-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Who Hyperlink helps
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <UseCaseCard
              icon={<Users className="h-6 w-6" />}
              title="SaaS teams"
              description="Keep product, finance and ops aligned on one source of truth for the stack."
              badge="B2B SaaS"
            />
            <UseCaseCard
              icon={<Building2 className="h-6 w-6" />}
              title="Agencies"
              description="Map every client toolset, track renewals and trim zombie subscriptions."
              badge="Agencies"
            />
            <UseCaseCard
              icon={<GraduationCap className="h-6 w-6" />}
              title="Student builders"
              description="Ship uni projects and side hustles with curated toolboxes on a student budget."
              badge="Students"
            />
          </div>
        </section>

        <section id="toolboxes" className="container py-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold">Curated toolboxes</h2>
              <p className="text-muted-foreground">
                Hyperlink suggests the right stack for your stage, team size and
                budget.
              </p>
            </div>
            <Link href="/demo">
              <Button variant="outline">See mock recommendations</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {toolboxes.map((toolbox) => (
              <ToolboxCard key={toolbox.id} toolbox={toolbox} />
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-background-secondary py-16">
          <div className="container text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Ready to show Hyperlink to your team?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Book a live walkthrough of the mock report, or invite us to your
              next finance/ops sync. We’ll show how Hyperlink keeps your SaaS
              stack sharp.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/demo">
                <Button className="bg-gradient-to-r from-brand-yellow to-brand-orange text-primary-foreground hover:opacity-90">
                  Explore the demo
                </Button>
              </Link>
              <a href="mailto:contact@hyperlink.tools">
                <Button variant="outline">Contact us</Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function PillarCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 bg-card border-border space-y-4">
      <div className="w-12 h-12 rounded-full bg-background-secondary flex items-center justify-center text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </Card>
  );
}

function IssueRow({
  title,
  description,
  cost,
}: {
  title: string;
  description: string;
  cost: string;
}) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-background-secondary border border-border/60">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <p className="text-sm font-semibold tabular-nums text-destructive">
        {cost}
      </p>
    </div>
  );
}

function UseCaseCard({
  icon,
  title,
  description,
  badge,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  badge: string;
}) {
  return (
    <Card className="p-6 border-border bg-card space-y-4">
      <Badge variant="outline" className="w-fit text-xs">
        {badge}
      </Badge>
      <div className="text-primary">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </Card>
  );
}

function ToolboxCard({ toolbox }: { toolbox: (typeof toolboxes)[number] }) {
  return (
    <Card className="p-6 border-border bg-card space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">{toolbox.name}</h3>
          <p className="text-sm text-muted-foreground">{toolbox.tagline}</p>
        </div>
        <Badge variant="outline">{toolbox.teamSize}</Badge>
      </div>
      <p className="text-sm text-muted-foreground">{toolbox.idealFor}</p>
      <div className="space-y-2">
        {toolbox.tools.slice(0, 3).map((tool) => (
          <div key={tool.name} className="p-3 rounded-lg bg-background-secondary">
            <div className="flex items-center justify-between">
              <span className="font-medium">{tool.name}</span>
              <span className="text-xs text-muted-foreground">
                {tool.approxCost}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{tool.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
