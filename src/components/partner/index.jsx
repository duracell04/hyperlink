import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

Partner.propTypes = {
  data: PropTypes.array,
};

function Partner(props) {
  const { data } = props;

  const [dataTitle] = useState({
    title: 'Our Partners',
  });

  return (
    <section className="tf-section tf_partner partner-ribbon">
      <div className="container">
        <div className="partner-ribbon__header">
          <div>
            <p className="eyebrow">Ecosystem</p>
            <h2 className="title">{dataTitle.title}</h2>
            <p>
              Hyperlink taps into a global network of builders, agencies, and
              platform partners to keep our advice pragmatic.
            </p>
          </div>
          <Link to="/contact" className="tf-button style2">
            Become a partner
          </Link>
        </div>
        <div className="partner-ribbon__logos">
          {data.map((idx) => (
            <Link key={idx.id} to="/home_v2" className="logo-tile">
              <img src={idx.img} alt="" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partner;
