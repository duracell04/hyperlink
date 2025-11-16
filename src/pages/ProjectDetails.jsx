import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Breadcrumbs from '../components/reusable_components/breadcrumbs';
import { fetchToolboxesMock } from '../services/mockApi';
import './toolboxes.scss';

function ProjectDetails() {
  const { id: toolboxType, toolid } = useParams();
  const navigate = useNavigate();
  const [toolbox, setToolbox] = useState(null);
  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      const boxes = await fetchToolboxesMock();
      if (!active) return;
      const foundToolbox = boxes.find((box) => box.id === toolboxType);
      const foundTool = foundToolbox?.tools.find((t) => t.id === toolid);
      if (!foundToolbox || !foundTool) {
        navigate('/toolboxes');
        return;
      }
      setToolbox(foundToolbox);
      setTool(foundTool);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [toolboxType, toolid, navigate]);

  if (loading || !toolbox || !tool) {
    return (
      <div className="toolbox-detail-page">
        <section className="toolbox-detail-hero">
          <div className="container">
            <p>Loading tool...</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="toolbox-detail-page">
      <Breadcrumbs
        pageTitle={toolbox.id}
        pageTitleLabel={toolbox.name}
        innerPage={tool.id}
        innerPageLabel={tool.name}
        secondLink="toolboxes"
      />

      <section className="toolbox-detail-hero">
        <div className="container">
          <div className="hero-card">
            <p className="eyebrow">Tool deep dive</p>
            <h1>{tool.name}</h1>
            <p>{tool.shortDescription}</p>
            <ul className="hero-meta">
              <li>
                <span className="label">Category</span>
                <strong>{tool.category}</strong>
              </li>
              <li>
                <span className="label">Plan</span>
                <strong>{tool.typicalPlan}</strong>
              </li>
              <li>
                <span className="label">Approx. cost</span>
                <strong>{tool.approxMonthlyCost}</strong>
              </li>
            </ul>
            <div className="tool-actions">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tf-button style2"
              >
                Visit {tool.name}
              </a>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(
                  tool.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="tf-button ghost"
              >
                Research more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="toolbox-tools">
        <div className="container">
          <div className="tool-detail-summary">
            <div>
              <h4>Where it fits</h4>
              <p>
                {tool.name} lives inside the <strong>{toolbox.name}</strong>{' '}
                toolbox. Combine it with the rest of the stack to keep workflows
                unified.
              </p>
            </div>
            <div>
              <h4>Use it when</h4>
              <p>{tool.recommendedFor}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
