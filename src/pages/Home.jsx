import React from 'react';
import '../scss/component/_section.scss';
import '../scss/component/_box.scss';
import '../scss/component/_tf-section.scss';
import '../scss/component/_reponsive.scss';
import Banner from '../components/banner/banner_v2';
import dataStep from '../assets/fake-data/data-step';
import Toolboxes from '../components/project/project_v1';
import dataProject from '../assets/fake-data/data-project';
import dataFeatured from '../assets/fake-data/data-feature';

import Team from '../components/team';
import Partner from '../components/partner';
import dataPartner from '../assets/fake-data/data-partner';
import Step from '../components/Step/Step';
import dataTeam from '../assets/fake-data/data-team';
import Featured2 from '../components/featured/Featured2';

function Home() {
  return (
    <div className="header-fixed main home1 counter-scroll">
      {<Banner />}
      {<Toolboxes data={dataProject} />}
      {<Step data={dataStep} />}

      <Featured2 data={dataFeatured} />

      <Team data={dataTeam} />

      <Partner data={dataPartner} />
    </div>
  );
}

export default Home;
