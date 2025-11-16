'use client';

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { Users, Building2, GraduationCap, Search, AlertTriangle, Wand2 } from "lucide-react";

import { Header } from "@/components/Header";
import { HeroCard } from "@/components/HeroCard";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toolboxes } from "@/lib/mockData";

export default function HomePage() {
  const [showLoading, setShowLoading] = useState(true);
  const [heroLoading, setHeroLoading] = useState(true);

  useEffect(() => {
    const hasSeenLoading = typeof window !== "undefined" ? sessionStorage.getItem("hasSeenLoading") : null;
    if (hasSeenLoading) {
      setShowLoading(false);
      setHeroLoading(false);
    }
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
        <main>
          <section id="hero" className="container py-20 md:py-32">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6 animate-fade-in-up">
                <Badge variant="outline" className="bg-background-secondary/40 text-xs uppercase tracking-wide">
                  Spend clarity for the modern SaaS stack
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  The control panel for your <span className="gradient-text">SaaS stack</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hyperlink finds zombie tools, duplicate subscriptions, and offboarding risks in minutes -- no billing
                  integration drama required. Turn &quot;we have no idea what we pay for&quot; into a clean, board-ready
                  story.
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  Runs continuously in the background. When a new tool appears, waste resurfaces, or a renewal is coming
                  up, you know before it becomes a problem.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/demo">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-brand-yellow to-brand-orange text-primary-foreground hover:opacity-90"
                    >
                      View mock report
                    </Button>
                  </Link>
                  <a href="mailto:contact@hyperlink.tools">
                    <Button size="lg" variant="outline">
                      Join waitlist
                    </Button>
                  </a>
                </div>
                <p className="text-xs text-muted-foreground">The demo runs entirely on mock data -- shareable, no billing access required.</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <HeroCard loading={heroLoading} />
              </div>
            </div>
          </section>

          <section id="product" className="container py-20">
            <h2 className="text-3xl font-bold text-center mb-12">What Hyperlink does</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <PillarCard
                icon={<Search className="h-8 w-8" />}
                title="Discover"
                copy="Ingest card statements, billing emails, or accounting exports and build a live SaaS inventory -- kept up to date automatically."
              />
              <PillarCard
                icon={<AlertTriangle className="h-8 w-8" />}
                title="Diagnose"
                copy="Detect duplicate apps, zombie subscriptions, over-provisioned seats, and offboarding risks without spreadsheets."
              />
              <PillarCard
                icon={<Wand2 className="h-8 w-8" />}
                title="Recommend"
                copy="Translate insights into clear actions, renewal prep, and curated toolboxes that match your goals and budget."
              />
            </div>
          </section>

          <section className="container py-20">
            <div className="grid gap-8 md:grid-cols-2">
              <FeatureCard
                title="SaaS Leak Report"
                subtitle="A CFO-friendly view in minutes"
                points={[
                  "Live spend, waste, and risk breakdowns with tabular numbers",
                  "Issue cards grouped by category with potential savings attached",
                  "Owner + renewal reminders so nothing slips through the cracks",
                ]}
              />
              <FeatureCard
                title="Toolboxes & guidance"
                subtitle="Curated stacks for every scenario"
                points={[
                  "Instantly see which recommendations you already own",
                  "Shortlist best-in-class tools for SaaS teams, agencies, or students",
                  "Give teams a north star to consolidate towards",
                ]}
              />
            </div>
          </section>

          <section id="use-cases" className="bg-background-secondary/50">
            <div className="container py-20 space-y-10">
              <div className="text-center space-y-3">
                <Badge variant="secondary">Use cases</Badge>
                <h2 className="text-3xl font-bold">Where Hyperlink shines first</h2>
                <p className="text-muted-foreground">
                  Designed for operators, finance leads, and founders who need clarity without adding another tool to the stack.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <UseCaseCard
                  icon={<Users className="h-6 w-6" />}
                  title="SaaS & Product Teams"
                  copy="Keep your engineering, design, and GTM stack lean. Surface duplicate tools before the next renewal cycle."
                />
                <UseCaseCard
                  icon={<Building2 className="h-6 w-6" />}
                  title="Agencies & Studios"
                  copy="Track which client subscriptions still exist, assign owners, and keep pass-through costs under control."
                />
                <UseCaseCard
                  icon={<GraduationCap className="h-6 w-6" />}
                  title="Students & Solo Builders"
                  copy="Ship projects without burning through stipends. Get a curated toolbox that respects tight budgets."
                />
              </div>
            </div>
          </section>

          <section id="toolboxes" className="container py-20 space-y-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-bold">Toolboxes preview</h2>
                <p className="text-muted-foreground">
                  Hyperlink compares your inventory to curated stacks. Here&apos;s a taste of the playbooks that ship with
                  the demo.
                </p>
              </div>
              <Link href="/demo">
                <Button variant="outline">Open Leak Report</Button>
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {toolboxes.map((toolbox) => (
                <ToolboxCard key={toolbox.id} {...toolbox} />
              ))}
            </div>
          </section>

          <section className="container py-20 border-t border-border space-y-10">
            <div className="text-center space-y-3">
              <Badge variant="outline">Roadmap</Badge>
              <h2 className="text-3xl font-bold">From mockup to always-on copilot</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <RoadmapItem
                label="Today"
                items={[
                  "Interactive Leak Report mock",
                  "Toolboxes + savings simulator",
                  "Branded loading + status states",
                ]}
              />
              <RoadmapItem
                label="Next"
                items={[
                  "CSV + inbox ingestion",
                  "Basic auth & workspace sharing",
                  "Issue assignment & approvals",
                ]}
              />
              <RoadmapItem
                label="Later"
                items={[
                  "Full access library",
                  "Continuous monitoring",
                  "FinOps-grade reporting",
                ]}
              />
            </div>
          </section>

          <section className="container pb-24">
            <Card className="p-8 bg-card/70 border-border/60">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">Ready to explore the Hyperlink mockup?</h3>
                  <p className="text-muted-foreground">
                    Jump into the Leak Report demo or reach out if you&apos;d like to jam on your stack.
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Link href="/demo">
                    <Button className="bg-gradient-to-r from-brand-yellow to-brand-orange text-primary-foreground">
                      Launch demo
                    </Button>
                  </Link>
                  <a href="mailto:contact@hyperlink.tools">
                    <Button variant="ghost">contact@hyperlink.tools</Button>
                  </a>
                </div>
              </div>
            </Card>
          </section>
        </main>
      </div>
    </>
  );
}

interface PillarCardProps {
  icon: ReactNode;
  title: string;
  copy: string;
}

const PillarCard = ({ icon, title, copy }: PillarCardProps) => (
  <Card className="p-6 space-y-4 border-border/80">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background-secondary/60 text-primary">{icon}</div>
    <div className="space-y-2">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{copy}</p>
    </div>
  </Card>
);

interface FeatureCardProps {
  title: string;
  subtitle: string;
  points: string[];
}

const FeatureCard = ({ title, subtitle, points }: FeatureCardProps) => (
  <Card className="p-6 space-y-4 border-border/80">
    <div>
      <p className="text-sm uppercase tracking-wide text-muted-foreground">{subtitle}</p>
      <h3 className="text-2xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-3 text-sm text-muted-foreground">
      {points.map((point) => (
        <li key={point} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </Card>
);

const UseCaseCard = ({ icon, title, copy }: { icon: ReactNode; title: string; copy: string }) => (
  <Card className="p-6 space-y-3 border-border/60">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background text-primary">{icon}</div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-sm text-muted-foreground">{copy}</p>
  </Card>
);

const ToolboxCard = ({
  name,
  tagline,
  idealFor,
  teamSize,
  tools,
}: (typeof toolboxes)[number]) => (
  <Card className="p-6 space-y-4 border-border/60">
    <div className="space-y-1">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-muted-foreground">{tagline}</p>
    </div>
    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
      <Badge variant="outline">{idealFor}</Badge>
      <Badge variant="outline">{teamSize}</Badge>
    </div>
    <div className="space-y-3">
      {tools.map((tool) => (
        <div key={tool.name} className="flex justify-between text-sm">
          <div>
            <p className="font-medium">{tool.name}</p>
            <p className="text-muted-foreground">{tool.description}</p>
          </div>
          <span className="text-muted-foreground tabular-nums">{tool.approxCost}</span>
        </div>
      ))}
    </div>
  </Card>
);

const RoadmapItem = ({ label, items }: { label: string; items: string[] }) => (
  <Card className="p-6 space-y-4 border-border/70">
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-primary" />
      <p className="text-sm uppercase tracking-wide text-muted-foreground">{label}</p>
    </div>
    <ul className="space-y-2 text-sm text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </Card>
);
