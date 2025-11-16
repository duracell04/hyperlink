import React from 'react';
import { Link } from 'react-router-dom';
import dataTeam from '../assets/fake-data/data-team';
import './brandLayouts.scss';

const AboutUs = () => {
  return (
    <div className="brand-page">
      <section className="brand-hero">
        <div className="container">
          <span className="eyebrow">Our story</span>
          <h1>We are Hyperlink</h1>
          <p>
            Hyperlink started with a founder juggling forgotten seat licenses,
            password spreadsheets, and missed renewals. Today we run a calm layer
            on top of SaaS — blending editorial research, product ops expertise,
            and partner data so you can see, explain, and launch the right tools.
          </p>
          <div className="meta-grid">
            <div>
              <span>Founded</span>
              <strong>2023</strong>
              <p>Born in Berlin from operators tired of SaaS chaos.</p>
            </div>
            <div>
              <span>What we deliver</span>
              <strong>Curated toolboxes</strong>
              <p>Clear narratives, pricing clarity, and rollout guardrails.</p>
            </div>
            <div>
              <span>North star</span>
              <strong>Unified tooling OS</strong>
              <p>One calm interface for every vendor relationship you manage.</p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <Link to="/contact" className="tf-button style2">
              Partner with us
            </Link>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center mb-4">
            <div>
              <span className="eyebrow">Meet the team</span>
              <h2>The humans translating chaos into guidance.</h2>
              <p>
                We’re operators, researchers, and engineers who have lived the
                pain of fragmented tooling. Every recommendation we publish is
                written by someone who has done the work.
              </p>
            </div>
            <Link to="/team_details" className="tf-button style1">
              View roles
            </Link>
          </div>
          <div className="brand-card-grid">
            {dataTeam.map((teammate) => (
              <article key={teammate.id} className="brand-card">
                <img
                  src={teammate.img}
                  alt={teammate.name}
                  style={{
                    width: '100%',
                    borderRadius: 16,
                    marginBottom: 16,
                    maxHeight: 220,
                    objectFit: 'cover',
                  }}
                />
                <h5>{teammate.name}</h5>
                <p style={{ textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  {teammate.unit}
                </p>
                <p>{teammate.describe}</p>
                <a
                  href={teammate.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-link"
                >
                  LinkedIn →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
