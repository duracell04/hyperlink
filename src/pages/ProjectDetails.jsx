import React from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import Breadcrumbs from "../components/reusable_components/breadcrumbs";

function ProjectDetails() {
  const { id: toolboxType, toolid } = useParams();

  return (
    <div className="inner-page project-grid-5">
      <Breadcrumbs
        pageTitle={toolboxType}
        innerPage={toolid}
        secondLink={"toolboxes"}
      />

      <section className="tf-section details mt-5">
        <div className="container">
          <div className="row">
            <article
              className="article"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="project_detail project-box-style5">
                <span className="boder"></span>
                <div className="img-box">
                  <div className="image">
                    <img
                      className="mask"
                      src={require("../assets/images/common/canva.webp")}
                      alt=""
                    />
                    <div className="shape">
                      <img src={""} alt="" />
                    </div>
                  </div>
                  <div className="content">
                    <h5 className="heading text-capitalize">{toolid}</h5>
                    <p className="desc text-capitalize">{toolboxType}</p>
                  </div>
                </div>
                <div className="content-inner">
                  <div className="wrap-btn my-2">
                    <a
                      className="tf-button w-100 style2"
                      href="https://www.canva.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hyperlink
                    </a>
                  </div>
                </div>
              </div>
            </article>
            <div
              className="sidebar"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="prodect-content">
                <h4 className="heading mb10">About Project</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
                  magna ipsum. Phasellus dignissim odio eget turpis scelerisque
                  imperdiet. Praesent sit amet maximus nunc. Donec ornare mauris
                  odio, sit amet vestibulum lectus elementum vitae. Nulla eget
                  fermentum dolor. Sed quis ante iaculis, consequat odio eget.
                </p>
                <div className="spacing"></div>
                <ul className="social justify-content-start mb30">
                  <li>
                    <Link to="#">
                      <svg
                        width="22"
                        height="18"
                        viewBox="0 0 22 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 2.17863C21.1819 2.5375 20.3101 2.77537 19.4012 2.89087C20.3362 2.33262 21.0499 1.45537 21.3854 0.398C20.5136 0.91775 19.5511 1.28488 18.5254 1.48975C17.6976 0.608375 16.5179 0.0625 15.2309 0.0625C12.7339 0.0625 10.7236 2.08925 10.7236 4.57388C10.7236 4.93138 10.7539 5.27512 10.8281 5.60237C7.0785 5.4195 3.76063 3.62238 1.53175 0.88475C1.14262 1.55988 0.914375 2.33263 0.914375 3.1645C0.914375 4.7265 1.71875 6.11112 2.91775 6.91275C2.19312 6.899 1.48225 6.68863 0.88 6.35725C0.88 6.371 0.88 6.38887 0.88 6.40675C0.88 8.5985 2.44337 10.419 4.4935 10.8384C4.12637 10.9387 3.72625 10.9869 3.311 10.9869C3.02225 10.9869 2.73075 10.9704 2.45712 10.9099C3.0415 12.696 4.69975 14.0091 6.6715 14.0517C5.137 15.2521 3.18863 15.9754 1.07938 15.9754C0.7095 15.9754 0.35475 15.9589 0 15.9135C1.99787 17.2019 4.36563 17.9375 6.919 17.9375C15.2185 17.9375 19.756 11.0625 19.756 5.10325C19.756 4.90387 19.7491 4.71138 19.7395 4.52025C20.6346 3.885 21.3867 3.09163 22 2.17863Z"
                          fill="#798DA3"
                        ></path>
                      </svg>
                    </Link>
                  </li>

                  <li>
                    <Link to="#">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 0C4.93457 0 0 4.93457 0 11C0 17.0654 4.93457 22 11 22C17.0654 22 22 17.0654 22 11C22 4.93457 17.0654 0 11 0ZM1.375 11C1.37461 10.1454 1.48831 9.29453 1.71308 8.47H5.13275C4.92335 10.1502 4.92335 11.8498 5.13275 13.53H1.71308C1.48831 12.7055 1.37461 11.8546 1.375 11ZM6.35078 11C6.34995 10.1539 6.40605 9.30861 6.5187 8.47H10.3125V13.53H6.51862C6.40599 12.6914 6.34992 11.8461 6.35078 11ZM11.6875 1.49205C12.5891 1.79592 13.4634 2.6834 14.1601 4.02974C14.6231 4.92439 14.9854 5.96333 15.2369 7.095H11.6875V1.49205ZM10.3125 1.49205V7.09517H6.76328C7.01478 5.96355 7.37713 4.92456 7.84012 4.02991C8.53664 2.6834 9.41089 1.79609 10.3125 1.49205ZM10.3125 14.905V20.5081C9.41089 20.2043 8.53664 19.3168 7.83991 17.9704C7.37692 17.0758 7.01456 16.0368 6.76307 14.9052L10.3125 14.905ZM11.6875 20.5081V14.905H15.2369C14.9854 16.0366 14.6231 17.0756 14.1601 17.9703C13.4634 19.3166 12.5891 20.2039 11.6875 20.508V20.5081ZM11.6875 13.53V8.47H15.4814C15.594 9.30861 15.6501 10.1539 15.6492 11C15.6501 11.8461 15.594 12.6914 15.4813 13.53H11.6875ZM16.8673 8.47H20.2869C20.7377 10.1265 20.7377 11.8735 20.2869 13.53H16.8673C16.9724 12.6908 17.0248 11.8458 17.0242 11C17.0248 10.1542 16.9724 9.30923 16.8673 8.47ZM19.7964 7.095H16.6418C16.3635 5.73053 15.9384 4.47391 15.3814 3.3978C15.1393 2.92471 14.857 2.47331 14.5375 2.04858C16.881 2.98141 18.7678 4.79201 19.7964 7.095ZM7.46268 2.04841C7.14323 2.47313 6.86087 2.92453 6.61873 3.39762C6.06182 4.47378 5.63664 5.73036 5.35838 7.09483H2.20357C3.23225 4.79179 5.11917 2.98119 7.46268 2.04841ZM2.20357 14.905H5.3582C5.63647 16.2695 6.06164 17.5261 6.61856 18.6022C6.8607 19.0753 7.14305 19.5267 7.46251 19.9514C5.11906 19.0186 3.23221 17.208 2.20357 14.905ZM14.5374 19.9516C14.8568 19.5269 15.1391 19.0755 15.3813 18.6024C15.9382 17.5262 16.3634 16.2696 16.6416 14.9052H19.7964C18.7678 17.2082 16.8809 19.0188 14.5374 19.9516Z"
                          fill="#798DA3"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
                <div className="image mb30">
                  <img className="boder-20" alt="" />
                </div>
                <div className="box">
                  <h4 className="heading mb10">1. Project overview</h4>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                  <p>
                    Nulla sed ex in magna ullamcorper lacinia. Maecenas maximus
                    sagittis tellus, ac hendrerit ex. Maecenas ut bibendum ex,
                    at luctus velit. Vestibulum sit amet neque odio. Suspendisse
                    nisl odio, accumsan at ante at, ultrices mollis augue. Morbi
                    id lorem elementum, interdum velit eu, pellentesque felis.
                    Morbi tincidunt ultrices felis sed vulputate. Etiam non nisl
                    congue, ultricies augue eget, tristique enim.
                  </p>
                  <ul>
                    <li>
                      <span>
                        Praesent fringilla, purus quis congue rutrum, tortor
                        ligula egestas justo, eu venenatis erat tellus ut risus.
                        Nam elit magna, facilisis nec iaculis id
                      </span>
                    </li>
                    <li>
                      <span>
                        Fusce id erat rutrum, dignissim diam eget, finibus odio.
                        Aenean porta lacus suscipit urna luctus luctus.
                      </span>
                    </li>
                    <li>
                      <span>
                        Maecenas ut bibendum ex, at luctus velit. Vestibulum sit
                        amet neque odio
                      </span>
                    </li>
                    <li>
                      <span>
                        Morbi id lorem elementum, interdum velit eu,
                        pellentesque felis.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="box">
                  <h4 className="heading mb10">2. Revenue stream</h4>
                  <div className="inner-box">
                    <h6>Private Round</h6>
                    <ul>
                      <li>
                        <p>Fundraised:</p>
                        <p>$3,528,000</p>
                      </li>
                      <li>
                        <p>Price:</p>
                        <p>$0.021</p>
                      </li>
                      <li>
                        <p>Lock-up:</p>
                        <p>
                          8% on TGE, 2 months cliff, 3rd - 6th months 3%, 7th -
                          10th 4%, 11th - 18th 5%, 19th - 22nd 6%.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="inner-box">
                    <h6>Public Sale & Seed SHO</h6>
                    <ul>
                      <li>
                        <p>Fundraised:</p>
                        <p> $378,000</p>
                      </li>
                      <li>
                        <p>Platfrom Raise:</p>
                        <p>$178,000</p>
                      </li>
                      <li>
                        <p>Price:</p>
                        <p>$0.021</p>
                      </li>
                      <li>
                        <p>Lock-up:</p>
                        <p>
                          8% on TGE, 2 months cliff, 3rd - 6th months 3%, 7th -
                          10th 4%, 11th - 18th 5%, 19th - 22nd 6%.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
