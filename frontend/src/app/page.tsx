import Link from "next/link";
import { HyperlinkLogo } from "@/components/HyperlinkLogo";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl space-y-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HyperlinkLogo size={40} />
            <span className="text-xl font-bold tracking-tight">
              Hyper
              <span className="bg-gradient-to-b from-amber-300 to-orange-500 bg-clip-text text-transparent">
                link
              </span>
            </span>
          </div>
          <nav className="flex gap-3 text-sm">
            <Link
              href="/demo"
              className="rounded-xl border border-slate-700 px-3 py-1.5 hover:bg-slate-800/60"
            >
              Demo
            </Link>
          </nav>
        </header>

        <section className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            The control panel for your SaaS stack.
          </h1>
          <p className="text-slate-400 text-sm md:text-base">
            Hyperlink finds zombie tools, duplicate subscriptions and offboarding
            risks in your SaaS stack, then suggests cleaner, cheaper toolboxes so
            your team can focus on shipping, not managing software.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-amber-300 to-orange-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/30 hover:brightness-110"
          >
            View the mock report
          </Link>
        </section>
      </div>
    </main>
  );
}
