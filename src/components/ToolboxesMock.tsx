import React, { useEffect, useState } from "react";
import {
  fetchToolboxesMock,
  type Toolbox,
} from "../services/mockApi";

export function ToolboxesMock() {
  const [toolboxes, setToolboxes] = useState<Toolbox[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetchToolboxesMock();
      setToolboxes(data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div style={{ marginTop: "2rem", color: "#e6eefc" }}>
        Loading toolboxes...
      </div>
    );
  }

  return (
    <section style={{ marginTop: "3rem", color: "#e6eefc" }}>
      <h2>Hyperlink Toolboxes Preview</h2>
      <p style={{ opacity: 0.8, marginBottom: "1rem" }}>
        Sample curated stacks that demonstrate how Hyperlink can explain the
        why behind each tool and point you to the exact web apps worth trying.
      </p>

      {toolboxes.map((box) => (
        <div
          key={box.id}
          id={box.id}
          style={{
            marginBottom: "2rem",
            padding: "1.5rem",
            borderRadius: 16,
            background: "#020617",
            border: "1px solid rgba(148,163,184,0.4)",
          }}
        >
          <div style={{ marginBottom: "0.75rem" }}>
            <h3 style={{ margin: 0 }}>{box.name}</h3>
            <p style={{ margin: "0.25rem 0", opacity: 0.85 }}>
              {box.tagline}
            </p>
            <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.7 }}>
              {box.description}
            </p>
            <p style={{ margin: "0.4rem 0 0", fontSize: "0.8rem", opacity: 0.7 }}>
              <strong>Ideal user:</strong> {box.idealUser}{" | "}
              <strong>Team size:</strong> {box.idealTeamSize}
            </p>
            <div
              style={{
                marginTop: "0.4rem",
                fontSize: "0.75rem",
                opacity: 0.75,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              <strong style={{ fontSize: "0.75rem" }}>Focus:</strong>
              {box.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-block",
                    padding: "0.1rem 0.5rem",
                    borderRadius: 999,
                    background: "rgba(148,163,184,0.2)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {box.tools.map((tool) => (
              <li
                key={tool.id}
                style={{
                  padding: "0.6rem 0",
                  borderTop: "1px solid rgba(148,163,184,0.25)",
                  fontSize: "0.9rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#bfdbfe", textDecoration: "none" }}
                    >
                      <strong>{tool.name}</strong>
                    </a>{" "}
                    <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>
                      {" | "}{tool.category}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      opacity: 0.75,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tool.approxMonthlyCost}
                  </div>
                </div>
                <div style={{ fontSize: "0.8rem", opacity: 0.8 }}>
                  {tool.shortDescription}
                </div>
                <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>
                  <strong>Plan:</strong> {tool.typicalPlan}{" | "}
                  <strong>Use:</strong> {tool.recommendedFor}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
