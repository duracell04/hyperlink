import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import data from '../assets/fake-data/data-project';
import Breadcrumbs from '../components/reusable_components/breadcrumbs';

const toolboxesList = [
  'scholar',
  'secretary',
  'designer',
  'marketing',
  'start-up',
  'custom',
];

const InnerToolbox = () => {
  const { id: pageTitle } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!toolboxesList.includes(pageTitle)) {
      navigate('/');
    }
  }, [pageTitle, navigate]);

  return (
    <div className="inner-page project-grid-5">
      <Breadcrumbs pageTitle={pageTitle} />

      <section className="tf-section project_2 pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="tf-title left mb40"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h2 className="title">{pageTitle}</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="project-box-style3_wrapper">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="project-box-style3"
                    data-aos="fade-in"
                    data-aos-duration="800"
                  >
                    <div className="header_project">
                      <div className="image">
                        <img
                          className="mask"
                          src={item.img}
                          alt={item.actualName}
                        />
                        <div className="shape">
                          <img src={''} alt="Decorative shape" />
                        </div>
                      </div>
                      <h5 className="heading">
                        <Link to="/project_details">{item.actualName}</Link>
                      </h5>
                    </div>
                    <div className="content justify-content-end">
                      <div className="td td6">
                        <div className="wrap-btn justify-content-end">
                          <Link
                            to={`/toolboxes/${pageTitle}/${item.name}`}
                            className="tf-button style2"
                          >
                            EXPLORE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-12">
              <div className="wrap-btn justify-content-center mt30">
                <Link to="/project_details" className="tf-button style1">
                  Show more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnerToolbox;
