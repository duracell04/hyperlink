import React from "react";
import { Link } from "react-router-dom";
import dataTeam from "../assets/fake-data/data-team";

const AboutUs = () => {
  return (
    <div className="inner-page custom-section">
      <section className="tf-section pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div
                className="tf-title mb40"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h2 className="title">We are Hyperlink</h2>
              </div>

              <div className="col-md-12 mt30 mb-5">
                <p className="desc text-center mb20">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  nobis impedit maxime deserunt dolorum voluptatum, porro autem
                  blanditiis dolor illo provident sunt architecto cum nostrum id
                  ab quibusdam ut magnam. Porro iure deleniti qui odit tempora,
                  ducimus optio? Obcaecati reiciendis cupiditate veritatis
                  cumque saepe numquam enim cum distinctio nobis tempore
                  repellendus ipsa iure, perspiciatis consequuntur. Nihil
                  facilis earum distinctio dignissimos! Repudiandae vitae enim,
                  velit perferendis provident iusto iure cupiditate aspernatur
                  odio nobis incidunt beatae molestias qui, vel aliquam eum.
                  Eius quas numquam nesciunt beatae quisquam minima repellat
                  itaque sapiente molestias! Dolores officiis magni, vel
                  exercitationem eaque ipsum quam commodi quae. Sint,
                  consequuntur alias similique sit laborum ducimus architecto
                  inventore nobis unde itaque, hic sunt ipsum eveniet.
                  Voluptatum suscipit labore quidem! Velit, vero reprehenderit
                  dolorum provident cupiditate excepturi incidunt quisquam omnis
                  voluptatibus est eius officia unde. Quasi delectus eos optio
                  asperiores iste ullam inventore explicabo sapiente rem fuga,
                  ratione error consequatur!
                </p>
                <div className="wrap-btn justify-content-center">
                  <Link to="/contact" className="tf-button style1">
                    JOIN US
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div
                className="tf-title mb40"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h2 className="title">About team</h2>
              </div>
            </div>

            {dataTeam.map((data) => {
              return (
                <div className="col-md-12 mb-4">
                  <div className="project-info-form check-radio">
                    <div className="form-inner">
                      <div className="row">
                        <div className="col-md-3 col-12">
                          <div
                            key={data.id}
                            className="team-box-v2 ms-md-auto ms-0  w-100"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="800"
                          >
                            <div className="image">
                              <img src={data.img} alt="" />
                            </div>
                            <div className="content">
                              <h5 className="name">
                                <Link to="/team_details">{data.name}</Link>
                              </h5>
                              <p className="position">{data.unit}</p>
                              <ul className="social d-flex justify-content-center">
                                <li>
                                  <Link to="#">
                                    <svg
                                      width="13"
                                      height="22"
                                      viewBox="0 0 13 22"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M8.20381 22V11.9655H11.5706L12.0757 8.05372H8.20381V5.55662C8.20381 4.42442 8.51692 3.65284 10.1423 3.65284L12.212 3.65199V0.153153C11.8541 0.10664 10.6255 0 9.19548 0C6.20942 0 4.16511 1.82266 4.16511 5.1692V8.05372H0.788086V11.9655H4.16511V22H8.20381Z"
                                        fill="#798DA3"
                                      />
                                    </svg>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <svg
                                      width="23"
                                      height="18"
                                      viewBox="0 0 23 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M22.5 2.17863C21.6819 2.5375 20.8101 2.77537 19.9012 2.89087C20.8363 2.33262 21.5499 1.45537 21.8854 0.398C21.0136 0.91775 20.0511 1.28488 19.0254 1.48975C18.1976 0.608375 17.0179 0.0625 15.7309 0.0625C13.2339 0.0625 11.2236 2.08925 11.2236 4.57388C11.2236 4.93138 11.2539 5.27512 11.3281 5.60237C7.5785 5.4195 4.26063 3.62238 2.03175 0.88475C1.64262 1.55988 1.41438 2.33262 1.41438 3.1645C1.41438 4.7265 2.21875 6.11112 3.41775 6.91275C2.69313 6.899 1.98225 6.68862 1.38 6.35725C1.38 6.371 1.38 6.38888 1.38 6.40675C1.38 8.5985 2.94337 10.419 4.9935 10.8384C4.62637 10.9388 4.22625 10.9869 3.811 10.9869C3.52225 10.9869 3.23075 10.9704 2.95712 10.9099C3.5415 12.696 5.19975 14.0091 7.1715 14.0518C5.637 15.2521 3.68863 15.9754 1.57938 15.9754C1.2095 15.9754 0.85475 15.9589 0.5 15.9135C2.49787 17.2019 4.86562 17.9375 7.419 17.9375C15.7185 17.9375 20.256 11.0625 20.256 5.10325C20.256 4.90387 20.2491 4.71138 20.2395 4.52025C21.1346 3.885 21.8867 3.09162 22.5 2.17863Z"
                                        fill="#798DA3"
                                      />
                                    </svg>
                                  </Link>
                                </li>
                                <li>
                                  <a
                                    href={data.linkedIn}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <svg
                                      width="19"
                                      height="18"
                                      viewBox="0 0 19 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M18.3003 17.8V11.354C18.3003 8.18599 17.6183 5.76599 13.9223 5.76599C12.1403 5.76599 10.9523 6.73399 10.4683 7.65799H10.4243V6.05199H6.92627V17.8H10.5783V11.97C10.5783 10.43 10.8643 8.95599 12.7563 8.95599C14.6263 8.95599 14.6483 10.694 14.6483 12.058V17.778H18.3003V17.8Z"
                                        fill="#798DA3"
                                      />
                                      <path
                                        d="M0.986328 6.052H4.63833V17.8H0.986328V6.052Z"
                                        fill="#798DA3"
                                      />
                                      <path
                                        d="M2.8122 0.200012C1.6462 0.200012 0.700195 1.14601 0.700195 2.31201C0.700195 3.47801 1.6462 4.44601 2.8122 4.44601C3.9782 4.44601 4.9242 3.47801 4.9242 2.31201C4.9242 1.14601 3.9782 0.200012 2.8122 0.200012Z"
                                        fill="#798DA3"
                                      />
                                    </svg>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-md-9 col-12 d-flex align-items-center px-5">
                          {data.describe}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
