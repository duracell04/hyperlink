import React from 'react';
import '../styles.scss';
import { Link } from 'react-router-dom';
import Countdown from '../../countdown';

function Banner() {
  return (
    <section className="hero-banner">
      <div className="hero-banner__glow" />
      <div className="container">
        <div className="hero-banner__grid">
          <div className="hero-banner__content">
            <p className="eyebrow">Hyperlink brand OS</p>
            <h1>
              Operationalise your web tools with a curated, story-driven
              workspace.
            </h1>
            <p className="lead">
              Hyperlink surfaces the exact SaaS combinations high-performing
              teams rely on. We document why each tool matters, how much it
              costs, and hand you a clean way to launch it with the rest of
              your stack.
            </p>
            <ul className="hero-banner__bullets">
              <li>Editorial toolboxes with pricing clarity.</li>
              <li>Guided roll-outs for founders, operators & makers.</li>
              <li>Human support layered on AI summaries.</li>
            </ul>
            <div className="hero-banner__actions">
              <Link to="/toolboxes" className="tf-button style2">
                Browse toolboxes
              </Link>
              <Link to="/contact" className="tf-button ghost">
                Talk to us
              </Link>
            </div>
            <div className="hero-banner__stats">
              <div>
                <strong>150+</strong>
                <span>hand-reviewed tools</span>
              </div>
              <div>
                <strong>3</strong>
                <span>ready-to-use stacks today</span>
              </div>
              <div>
                <strong>Zero spam</strong>
                <span>just clean vendor guidance</span>
              </div>
            </div>
          </div>
          <div className="hero-banner__panel" data-aos="fade-left">
            <div className="hero-banner__panel-card">
              <p className="label">Next release window</p>
              <div className="countdown">
                <Countdown />
                <span className="hint">Beta invites go out monthly.</span>
              </div>
              <div className="hero-banner__meta-list">
                <div>
                  <p className="label">Latest drop</p>
                  <strong>Web Studio Launchpad</strong>
                  <span>Everything a modern Webflow shop needs.</span>
                </div>
                <div>
                  <p className="label">On deck</p>
                  <strong>Ops Command Kit</strong>
                  <span>Outbound, attribution, automations.</span>
                </div>
              </div>
            </div>
            <div className="hero-banner__panel-card secondary">
              <p>“Hyperlink makes SaaS ops feel editorial again.”</p>
              <span>— Early adopter feedback</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
