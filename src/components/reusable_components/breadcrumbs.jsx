import React from "react";

import { Link } from "react-router-dom";

const Breadcrumbs = ({ mainPage = "Home", mainLink = "/", pageTitle, secondLink, innerPage }) => {
  return (
    <div className="container breadcrumb-section">
      <div className="row">
        <div className="col-md-12 ">
          <div
            className="breadcrumbs"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <ul>
              <li>
                <Link to={mainLink}>{mainPage}</Link>
              </li>
              <li>
                <span className="icon">
                  <svg
                    width="5"
                    height="9"
                    viewBox="0 0 5 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.9375 1.375L4.0625 4.5L0.9375 7.625"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {innerPage ? (
                  <Link to={`/${secondLink}/${pageTitle}`}>{pageTitle}</Link>
                ) : (
                  <span>{pageTitle}</span>
                )}
              </li>
              {innerPage && (
                <li>
                  <span className="icon">
                    <svg
                      width="5"
                      height="9"
                      viewBox="0 0 5 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.9375 1.375L4.0625 4.5L0.9375 7.625"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{innerPage}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
