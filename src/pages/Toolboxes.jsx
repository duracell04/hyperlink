import React from 'react';

import Breadcrumbs from '../components/reusable_components/breadcrumbs';
import { ToolboxesMock } from '../components/ToolboxesMock';
import './toolboxes.scss';

function ToolboxesPage() {
  return (
    <div className="toolboxes-page">
      <Breadcrumbs pageTitle="toolboxes" pageTitleLabel="Toolboxes" />
      <section className="toolboxes-hero">
        <div className="container">
          <div className="toolboxes-hero__grid">
            <div>
              <p className="eyebrow">Curated stacks</p>
              <h1>Hand-picked Hyperlink toolboxes</h1>
              <p className="lead">
                These mock toolboxes mirror the experience inside Hyperlink:
                explain the stack, share ideal use cases, reveal pricing, and
                link you straight to every vendor.
              </p>
              <ul className="hero-bullets">
                <li>Each toolbox contains real tools and cost guidance.</li>
                <li>Click in for a breakdown of plan, use case, and rollout.</li>
                <li>Use these as inspiration or as-is for your team.</li>
              </ul>
            </div>
            <div className="toolboxes-hero__meta">
              <div>
                <span className="label">Stacks live</span>
                <strong>3</strong>
                <p>Web Studio, Growth Ops, AI Product Squad.</p>
              </div>
              <div>
                <span className="label">Vendors tracked</span>
                <strong>150+</strong>
                <p>And counting across marketing, ops, and product.</p>
              </div>
              <div>
                <span className="label">Feedback loop</span>
                <strong>Human editorial</strong>
                <p>No AI spam — every recommendation has context.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <ToolboxesMock />
      </div>
    </div>
  );
}

export default ToolboxesPage;
