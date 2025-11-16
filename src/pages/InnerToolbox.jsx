import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Breadcrumbs from '../components/reusable_components/breadcrumbs';
import { fetchToolboxesMock } from '../services/mockApi';

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
      <div className="inner-page project-grid-5">
        <section className="tf-section project_2 pt-4">
          <div className="container">
            <p style={{ color: '#fff', opacity: 0.8 }}>Loading toolbox...</p>
          </div>
        </section>
      </div>
    );
  }

  if (!selectedToolbox) {
    return null;
  }

  return (
    <div className="inner-page project-grid-5">
      <Breadcrumbs
        pageTitle={selectedToolbox.id}
        pageTitleLabel={selectedToolbox.name}
        secondLink="toolboxes"
      />

      <section className="tf-section project_2 pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="tf-title left mb40"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <p className="label">Toolbox</p>
                <h2 className="title">{selectedToolbox.name}</h2>
                <p className="desc">{selectedToolbox.description}</p>
                <p className="desc" style={{ opacity: 0.75 }}>
                  <strong>Ideal user:</strong> {selectedToolbox.idealUser} |{' '}
                  <strong>Team size:</strong> {selectedToolbox.idealTeamSize}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-box-style3_wrapper">
                {selectedToolbox.tools.map((tool) => (
                  <div
                    key={tool.id}
                    className="project-box-style3"
                    data-aos="fade-in"
                    data-aos-duration="800"
                  >
                    <div className="header_project">
                      <div className="image">
                        <div
                          className="mask"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(148,163,184,0.1)',
                            color: '#e6eefc',
                            fontWeight: 600,
                            fontSize: '1.5rem',
                          }}
                        >
                          {tool.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h5 className="heading mb-1">
                          <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {tool.name}
                          </a>
                        </h5>
                        <p className="desc">{tool.category}</p>
                      </div>
                    </div>
                    <div className="content">
                      <p style={{ minHeight: '72px' }}>
                        {tool.shortDescription}
                      </p>
                      <div className="td td6">
                        <div className="meta" style={{ marginBottom: '0.75rem' }}>
                          <span style={{ display: 'block', fontSize: '0.85rem' }}>
                            <strong>Plan:</strong> {tool.typicalPlan}
                          </span>
                          <span style={{ display: 'block', fontSize: '0.85rem' }}>
                            <strong>Cost:</strong> {tool.approxMonthlyCost}
                          </span>
                          <span style={{ display: 'block', fontSize: '0.85rem' }}>
                            <strong>Use it for:</strong> {tool.recommendedFor}
                          </span>
                        </div>
                        <div className="wrap-btn justify-content-between">
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
                            Explore
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnerToolbox;
