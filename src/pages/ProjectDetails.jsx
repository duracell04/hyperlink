import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Breadcrumbs from '../components/reusable_components/breadcrumbs';
import { fetchToolboxesMock } from '../services/mockApi';

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
      <div className="inner-page project-grid-5">
        <section className="tf-section details mt-5">
          <div className="container">
            <p style={{ color: '#fff', opacity: 0.8 }}>
              Loading tool details...
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="inner-page project-grid-5">
      <Breadcrumbs
        pageTitle={toolbox.id}
        pageTitleLabel={toolbox.name}
        innerPage={tool.id}
        innerPageLabel={tool.name}
        secondLink="toolboxes"
      />

      <section className="tf-section details mt-5">
        <div className="container">
          <div className="row">
            <article
              className="article"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="project_detail project-box-style5">
                <span className="boder"></span>
                <div className="img-box">
                  <div className="image">
                    <div
                      className="mask"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        fontWeight: 600,
                        background: 'rgba(148,163,184,0.1)',
                        color: '#e6eefc',
                      }}
                    >
                      {tool.name.charAt(0)}
                    </div>
                  </div>
                  <div className="content">
                    <h5 className="heading">{tool.name}</h5>
                    <p className="desc">{tool.category}</p>
                  </div>
                </div>
                <div className="content-inner">
                  <p style={{ fontSize: '1rem' }}>{tool.shortDescription}</p>
                  <p style={{ opacity: 0.75 }}>
                    <strong>Recommended for:</strong> {tool.recommendedFor}
                  </p>
                  <div className="wrap-btn my-2">
                    <a
                      className="tf-button w-100 style2"
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit {tool.name}
                    </a>
                  </div>
                </div>
              </div>
            </article>
            <aside
              className="sidebar"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="prodect-content">
                <h4 className="heading mb10">Tool snapshot</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong>Part of toolbox:</strong>
                    <div>{toolbox.name}</div>
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong>Plan:</strong>
                    <div>{tool.typicalPlan}</div>
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong>Approx. monthly cost:</strong>
                    <div>{tool.approxMonthlyCost}</div>
                  </li>
                  <li>
                    <strong>Tags:</strong>
                    <div>{toolbox.tags.join(', ')}</div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
