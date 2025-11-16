"use client";

import React, { useState } from "react";
import { HyperlinkLogo } from "@/components/HyperlinkLogo";
import { InlineLoader } from "@/components/Loaders";
import {
  fetchLeakReportMock,
  fetchToolboxesMock,
  type LeakReport,
  type Toolbox,
} from "@/lib/mockReport";

export default function DemoPage() {
  const [report, setReport] = useState<LeakReport | null>(null);
  const [toolboxes, setToolboxes] = useState<Toolbox[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setReport(null);
    setToolboxes([]);
    const [r, t] = await Promise.all([
      fetchLeakReportMock(),
      fetchToolboxesMock(),
    ]);
    setReport(r);
    setToolboxes(t);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl space-y-8">
        <header className="flex items-center gap-4">
          <HyperlinkLogo size={56} />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Hyperlink – SaaS Leak Report (Demo)
            </h1>
            <p className="text-slate-400 text-sm">
              Demo of what Hyperlink would surface from your billing data. All
              numbers and tools here are mock data.
            </p>
          </div>
        </header>

        <form
          onSubmit={handleGenerate}
          className="flex flex-col md:flex-row items-start gap-4 md:items-center"
        >
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Card statement or SaaS receipts
            </label>
            <input
              type="file"
              disabled
              className="block w-64 rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-500 cursor-not-allowed"
            />
            <p className="text-xs text-slate-500 mt-1">
              In this demo, the file input is disabled. We use a sample stack.
            </p>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-amber-300 to-orange-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/30 transition hover:brightness-110 disabled:opacity-60"
          >
            {loading ? "Analyzing…" : "Generate mock report"}
          </button>
        </form>

        {loading && (
          <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
            <InlineLoader message="Analyzing your stack…" />
            <p className="text-sm text-slate-400 mt-2">
              We are simulating card-statement parsing and leakage detection.
            </p>
          </section>
        )}

        {report && (
          <section className="space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    Summary – {report.companyName}
                  </h2>
                  <p className="text-slate-400 text-sm">
                    {report.headcount} people · {report.period}
                  </p>
                </div>
                <div className="flex gap-6 text-sm">
                  <div>
                    <div className="text-slate-400">Total SaaS spend</div>
                    <div className="text-lg font-semibold">
                      €
                      {report.totalSpend.toLocaleString("de-CH", {
                        maximumFractionDigits: 0,
                      })}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400">Estimated waste</div>
                    <div className="text-lg font-semibold text-amber-300">
                      €
                      {report.estimatedWaste.toLocaleString("de-CH", {
                        maximumFractionDigits: 0,
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-4 text-sm">
                {report.leaks.map((leak) => (
                  <div
                    key={leak.id}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{leak.vendor}</span>
                      <span className="text-xs rounded-full bg-slate-800 px-2 py-0.5 text-slate-300">
                        {leak.category}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">
                      Spend: €
                      {leak.spendPerYear.toLocaleString("de-CH", {
                        maximumFractionDigits: 0,
                      })}
                      /year
                    </div>
                    <div className="text-xs uppercase tracking-wide text-rose-300 mt-1">
                      {leak.issue === "duplicate" && "Duplicate tools"}
                      {leak.issue === "zombie" && "Zombie subscription"}
                      {leak.issue === "overprovisioned" &&
                        "Overprovisioned seats"}
                    </div>
                    <p className="text-xs text-slate-200 mt-2">
                      {leak.recommendation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {toolboxes.length > 0 && (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-4">
                <h3 className="text-lg font-semibold">
                  Example toolboxes Hyperlink AI could suggest
                </h3>
                <p className="text-slate-400 text-sm">
                  Based on your role, goals and budget, Hyperlink would propose a
                  curated stack instead of a random tool zoo.
                </p>

                <div className="space-y-3">
                  {toolboxes.map((box) => (
                    <div
                      key={box.id}
                      className="rounded-xl border border-slate-800 bg-slate-950/50 p-4"
                    >
                      <div className="flex flex-col gap-1 mb-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold">{box.name}</span>
                          <span className="text-xs text-slate-400">
                            {box.idealTeamSize}
                          </span>
                        </div>
                        <p className="text-slate-300 text-sm">{box.tagline}</p>
                        <p className="text-slate-400 text-xs">
                          Ideal for: {box.idealUser}
                        </p>
                      </div>
                      <ul className="text-xs text-slate-300 space-y-1">
                        {box.tools.map((tool) => (
                          <li
                            key={tool.id}
                            className="border-t border-slate-800 pt-2 mt-2"
                          >
                            <div className="flex justify-between gap-2">
                              <a
                                href={tool.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sky-300 hover:underline"
                              >
                                {tool.name}
                              </a>
                              <span className="text-slate-400 whitespace-nowrap">
                                {tool.approxMonthlyCost}
                              </span>
                            </div>
                            <div className="text-slate-400">
                              {tool.shortDescription}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
