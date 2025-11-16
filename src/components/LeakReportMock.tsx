import React, { useEffect, useState } from "react";
import {
  fetchLeakReportMock,
  type LeakReport,
  type SaaSLeak,
} from "../services/mockApi";
import { ToolboxesMock } from "./ToolboxesMock";

export function LeakReportMock() {
  const [report, setReport] = useState<LeakReport | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const leakReport = await fetchLeakReportMock();
      setReport(leakReport);
      setLoading(false);
    })();
  }, []);

  const renderLeak = (leak: SaaSLeak) => (
    <li
      key={leak.id}
      style={{
        background: "#0b1120",
        borderRadius: 12,
        padding: "1rem",
        border: "1px solid rgba(148,163,184,0.25)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <div>
          <h4 style={{ margin: 0 }}>{leak.vendor}</h4>
          <p style={{ margin: 0, fontSize: "0.8rem", opacity: 0.7 }}>
            {leak.category} | {leak.issue.toUpperCase()}
          </p>
        </div>
        <strong style={{ fontSize: "0.9rem" }}>
          €{(leak.spendPerYear / 12).toFixed(0)}/mo
        </strong>
      </div>
      <p style={{ fontSize: "0.9rem", marginTop: "0.75rem" }}>
        {leak.recommendation}
      </p>
    </li>
  );

  return (
    <section style={{ marginTop: "3rem", color: "#e6eefc" }}>
      <h2>Hyperlink AI Leak Report (Mock)</h2>
      <p style={{ opacity: 0.8, marginBottom: "1rem" }}>
        Example data showing how Hyperlink might summarise your SaaS waste and easy wins.
      </p>

      {loading && (
        <div style={{ marginTop: "1rem" }}>Generating report...</div>
      )}

      {report && (
        <>
          <div
            style={{
              background: "#020617",
              borderRadius: 16,
              padding: "1.5rem",
              border: "1px solid rgba(148,163,184,0.4)",
            }}
          >
            <header style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ margin: 0 }}>{report.companyName}</h3>
              <p style={{ margin: "0.25rem 0", opacity: 0.8 }}>
                {report.period} | {report.headcount} people
              </p>
            </header>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <StatCard label="Total SaaS spend" value={`€${report.totalSpend.toLocaleString()}/yr`} />
              <StatCard label="Estimated waste" value={`€${report.estimatedWaste.toLocaleString()}/yr`} />
              <StatCard label="Leak count" value={report.leaks.length.toString()} />
            </div>

            <div>
              <h4 style={{ marginBottom: "0.75rem" }}>Top detected leaks</h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: "0.85rem",
                }}
              >
                {report.leaks.map(renderLeak)}
              </ul>
            </div>
          </div>

          <ToolboxesMock condensed />
        </>
      )}
    </section>
  );
}

type StatCardProps = {
  label: string;
  value: string;
};

function StatCard({ label, value }: StatCardProps) {
  return (
    <div
      style={{
        borderRadius: 12,
        padding: "1rem",
        background: "rgba(15,23,42,0.6)",
        border: "1px solid rgba(148,163,184,0.25)",
      }}
    >
      <p style={{ margin: 0, fontSize: "0.75rem", opacity: 0.7 }}>{label}</p>
      <strong style={{ fontSize: "1.1rem" }}>{value}</strong>
    </div>
  );
}

export default LeakReportMock;
