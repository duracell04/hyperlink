import React from 'react';

import '../styles.scss';
import ToolboxesIcons from '../../toolboxes/ToolboxesIcons';

function Toolboxes() {
  return (
    <section className="tf-section project">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="tf-title"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h2 className="title">Explore Toolboxes</h2>
            </div>
          </div>
          <ToolboxesIcons />
        </div>
      </div>
    </section>
  );
}

export default Toolboxes;
