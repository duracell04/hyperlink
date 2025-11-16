import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchToolboxesMock,
  type Toolbox,
} from "../services/mockApi";
import "../pages/toolboxes.scss";

type ToolboxesMockProps = {
  condensed?: boolean;
};

export function ToolboxesMock({ condensed = false }: ToolboxesMockProps) {
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
      <div className="toolboxes-collection">
        <p className="toolboxes-collection__loading">Loading toolboxes...</p>
      </div>
    );
  }

  return (
    <section
      className={`toolboxes-collection ${
        condensed ? "toolboxes-collection--condensed" : ""
      }`}
    >
      {!condensed && (
        <header className="toolboxes-collection__header">
          <div>
            <p className="eyebrow">Sample data</p>
            <h2>Hyperlink Toolboxes Preview</h2>
            <p>
              Explore three example stacks to understand the fidelity Hyperlink
              provides. Click through for detailed plan notes, use cases, and
              pricing context.
            </p>
          </div>
          <a className="tf-button style2" href="#modern_web_studio">
            Jump to stacks
          </a>
        </header>
      )}
      <div className="toolboxes-grid">
        {toolboxes.map((box) => (
          <article
            className="toolbox-card toolbox-card--stack"
            id={box.id}
            key={box.id}
          >
            <Link
              to={`/toolboxes/${box.id}`}
              className="toolbox-card__inner"
              aria-label={`View ${box.name} toolbox`}
            >
              <div className="toolbox-card__tags">{box.tags.join(" | ")}</div>
              <h3 className="toolbox-card__title">{box.name}</h3>
              <p className="toolbox-card__tagline">{box.tagline}</p>
              <p className="toolbox-card__ideal">
                <strong>Ideal for:</strong> {box.idealUser} •{" "}
                <strong>Team size:</strong> {box.idealTeamSize}
              </p>
              <div className="toolbox-card__focus">
                <span>Focus:</span>
                {box.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="toolbox-card__tool-list">
                {box.tools.map((tool) => (
                  <li key={tool.id}>
                    <div>
                      <span className="tool-name">{tool.name}</span>
                      <span className="tool-category">{tool.category}</span>
                    </div>
                    <span className="tool-cost">{tool.approxMonthlyCost}</span>
                  </li>
                ))}
              </ul>
              <div className="toolbox-card__cta">
                <span>{box.tools.length} tools captured</span>
                <span className="cta-link">View details →</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
