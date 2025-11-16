import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Featured2.propTypes = {
  data: PropTypes.array,
};

function Featured2(props) {
  const { data } = props;
  return (
    <section className="tf-section features insight-grid">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-4">
            <div className="insight-grid__copy">
              <p className="eyebrow">Why Hyperlink now?</p>
              <h2>Less tab-hoarding, more confident tooling decisions.</h2>
              <p>
                We keep a human editorial layer in the loop so every
                recommendation reads like an internal strategy memo instead of
                AI filler.
              </p>
              <div className="insight-grid__note">
                Beta invites open — join the waitlist and get the next drop.
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="insight-grid__wrapper">
              {data.map((item) => (
                <article key={item.id} className="insight-card">
                  <div className="icon">
                    <img src={item.img} alt="" />
                  </div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
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

export default Featured2;
