import React from 'react';

import Breadcrumbs from '../components/reusable_components/breadcrumbs';
import { ToolboxesMock } from '../components/ToolboxesMock';

function ToolboxesPage() {
  return (
    <div className="inner-page project-grid-5">
      <Breadcrumbs pageTitle="Toolboxes" />
      <section className="tf-section project" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="tf-title mb40"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <p className="label">Curated stacks</p>
                <h2 className="title">Hand-picked Hyperlink toolboxes</h2>
                <p className="desc">
                  Browse every stack and drill into the tools that matter for
                  your role. These previews are mock data, but mirror how the
                  Hyperlink platform recommends web apps.
                </p>
              </div>
            </div>
          </div>
          <ToolboxesMock />
        </div>
      </section>
    </div>
  );
}

export default ToolboxesPage;
