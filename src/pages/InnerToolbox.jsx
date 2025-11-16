import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Breadcrumbs from '../components/reusable_components/breadcrumbs';
import { fetchToolboxesMock } from '../services/mockApi';
import './toolboxes.scss';

const InnerToolbox = () => {
  const { id: pageTitle } = useParams();
  const navigate = useNavigate();
  const [toolboxes, setToolboxes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      const data = await fetchToolboxesMock();
      if (!active) {
        return;
      }
      setToolboxes(data);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, []);

  const selectedToolbox = useMemo(
    () => toolboxes.find((box) => box.id === pageTitle),
    [toolboxes, pageTitle]
  );

  useEffect(() => {
    if (!loading && !selectedToolbox) {
      navigate('/toolboxes');
    }
  }, [loading, selectedToolbox, navigate]);

  if (loading) {
    return (
      <div className="toolbox-detail-page">
        <section className="toolbox-detail-hero">
          <div className="container">
            <p>Loading toolbox...</p>
          </div>
        </section>
      </div>
    );
  }

  if (!selectedToolbox) {
    return null;
  }

  return (
    <div className="toolbox-detail-page">
      <Breadcrumbs
        pageTitle={selectedToolbox.id}
        pageTitleLabel={selectedToolbox.name}
        secondLink="toolboxes"
      />

      <section className="toolbox-detail-hero">
        <div className="container">
          <div className="hero-card">
            <p className="eyebrow">Toolbox</p>
            <h1>{selectedToolbox.name}</h1>
            <p>{selectedToolbox.description}</p>
            <ul className="hero-meta">
              <li>
                <span className="label">Ideal user</span>
                <strong>{selectedToolbox.idealUser}</strong>
              </li>
              <li>
                <span className="label">Team size</span>
                <strong>{selectedToolbox.idealTeamSize}</strong>
              </li>
              <li>
                <span className="label">Focus</span>
                <strong>{selectedToolbox.tags.join(' / ')}</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="toolbox-tools">
        <div className="container">
          <div className="toolbox-tools__grid">
            {selectedToolbox.tools.map((tool) => (
              <article key={tool.id} className="tool-detail-card">
                <div className="tool-detail-card__header">
                  <div className="avatar">{tool.name.charAt(0)}</div>
                  <div>
                    <h3>{tool.name}</h3>
                    <span>{tool.category}</span>
                  </div>
                </div>
                <p>{tool.shortDescription}</p>
                <dl>
                  <div>
                    <dt>Plan</dt>
                    <dd>{tool.typicalPlan}</dd>
                  </div>
                  <div>
                    <dt>Cost</dt>
                    <dd>{tool.approxMonthlyCost}</dd>
                  </div>
                  <div>
                    <dt>Use it for</dt>
                    <dd>{tool.recommendedFor}</dd>
                  </div>
                </dl>
                <div className="tool-detail-card__actions">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tf-button style1"
                  >
                    Visit site
                  </a>
                  <Link
                    to={`/toolboxes/${selectedToolbox.id}/${tool.id}`}
                    className="tf-button style2"
                  >
                    Drill in
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnerToolbox;
