import React from "react";
import Breadcrumbs from "../components/reusable_components/breadcrumbs";
import { dataRoadmap, dataRoadmapMobile }  from "../assets/fake-data/data-roadmap";

import icon from "../assets/images/common/down.svg";

function Roadmap() {
  return (
    <div className="inner-page">
      <Breadcrumbs pageTitle={"Roadmap"} />

      <section className="tf-section roadmap pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="d-md-flex d-none roadmap-wrapper-style2"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="left">
                  {dataRoadmap.slice(0, 2).map((item) => {
                    return (
                      <div key={item.id} className={`roadmap-box-style ${item.status}`}>
                        <div className="icon">
                          <img src={icon} alt="" />
                        </div>
                        <div className="content">
                          <h6 className="date">{item.time}</h6>
                          <ul>
                            <li>
                            {item.text1}
                            </li>
                            <li>
                            {item.text2}
                            </li>
                            <li>{item.text3}</li>
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="right">
                {dataRoadmap.slice(2, 4).map((item) => {
                    return (
                      <div key={item.id} className={`roadmap-box-style ${item.status}`}>
                        <div className="icon">
                          <img src={icon} alt="" />
                        </div>
                        <div className="content">
                          <h6 className="date">{item.time}</h6>
                          <ul>
                            <li>
                            {item.text1}
                            </li>
                            <li>
                            {item.text2}
                            </li>
                            <li>{item.text3}</li>
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="d-md-none d-flex roadmap-wrapper-style2"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="left">
                  {dataRoadmapMobile.map((item) => {
                    return (
                      <div key={item.id} className={`roadmap-box-style ${item.status}`}>
                        <div className="icon">
                          <img src={icon} alt="" />
                        </div>
                        <div className="content">
                          <h6 className="date">{item.time}</h6>
                          <ul>
                            <li>
                            {item.text1}
                            </li>
                            <li>
                            {item.text2}
                            </li>
                            <li>{item.text3}</li>
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Roadmap;
