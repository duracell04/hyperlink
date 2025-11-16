import React from 'react';

import '../styles.scss';
import ToolboxesIcons from '../../toolboxes/ToolboxesIcons';

function Toolboxes() {
  return (
    <section className="tf-section project toolboxes-showcase">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="tf-title"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <p className="eyebrow">Stacks to ship with</p>
              <h2 className="title">Explore Toolboxes</h2>
              <p className="desc">
                Curated combinations of real web tools that help small teams
                ship faster. Each stack is hand-written so you can see why the
                tool belongs and what it costs before you even sign up.
              </p>
              <div className="toolboxes-hero-meta">
                <div className="toolboxes-hero-meta__item">
                  <span className="label">Curated stacks</span>
                  <strong>3</strong>
                  <span className="hint">Tailored to workflow archetypes</span>
                </div>
                <div className="toolboxes-hero-meta__item">
                  <span className="label">Tools surfaced</span>
                  <strong>15+</strong>
                  <span className="hint">Shortlisted with clear guidance</span>
                </div>
                <div className="toolboxes-hero-meta__item">
                  <span className="label">Click through</span>
                  <strong>Instant links</strong>
                  <span className="hint">Jump straight into each vendor</span>
                </div>
              </div>
            </div>
          </div>
          <ToolboxesIcons />
        </div>
      </div>
    </section>
  );
}

export default Toolboxes;
