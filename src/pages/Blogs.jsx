import React from "react";
import { Link } from "react-router-dom";

import data from "../assets/fake-data/data-blog";

function Blogs() {
  return (
    <div className="inner-page custom-section">
      <section className="tf-section tf-blog pt60">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="tf-title mb40"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h2 className="title">Blogs</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {data.slice(0, 9).map((item, i) => (
              <div key={item.id} className="col-lg-4 col-md-12">
                <div className="grid-box">
                  <div className="image">
                    <img src={item.img} alt={item.heading} />
                  </div>
                  <div className="content">
                    <Link to={`/blogs/${i}`} className="tag">
                    {item.cate}
                    </Link>
                    <h5 className="title">
                      <Link to={`/blogs/${i}`} >{item.heading}</Link>
                    </h5>
                    <p>{item.text}</p>
                  </div>
                  <Link to={`/blogs/${i}`}  className="tf-button style1">
                    Read more
                  </Link>
                </div>
              </div>
            ))}

            <div className="col-md-12">
              <ul
                className="panigation"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <li>
                  <Link to="#">
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 1L1.5 6L6.5 11"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="active">
                    1
                  </Link>
                </li>
                <li>
                  <Link to="#">2</Link>
                </li>
                <li>
                  <Link to="#">3</Link>
                </li>
                <li>
                  <Link to="#">
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 1L6.5 6L1.5 11"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
