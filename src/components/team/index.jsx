import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

Team.propTypes = {
  data: PropTypes.array,
};

function Team(props) {
  const { data } = props;

  const [dataTitle] = useState({
    title: 'Meet the team',
  });
  return (
    <section className="tf-section tf_team team-showcase">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-lg-4">
            <div className="team-showcase__intro">
              <p className="eyebrow">Humans in the loop</p>
              <h2>{dataTitle.title}</h2>
              <p>
                Hyperlink mixes craft editorial work with deep tooling
                experience. Meet the crew translating chaos into clean
                playbooks.
              </p>
              <Link to="/team_details" className="tf-button style2">
                Learn more
              </Link>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="team-showcase__grid">
              {data.map((item) => (
                <article className="team-card" key={item.id}>
                  <div className="team-card__media">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="team-card__content">
                    <div>
                      <h5>{item.name}</h5>
                      <span>{item.unit}</span>
                      <p>{item.describe}</p>
                    </div>
                    <a
                      href={item.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-link"
                    >
                      View LinkedIn →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
