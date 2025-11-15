import React from 'react';
import '../styles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import Countdown from '../../countdown';

function Banner() {
  return (
    <div className="page-title">
      <div className="slider-main">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          //   navigation
        >
          <SwiperSlide>
            <div className="slider-st2">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="box-slider">
                      <div className="content-box">
                        <h1 className="title">WELCOME TO HYPERLINK</h1>
                        <p className="sub-title">
                          Hyperlink is an online platform that offers a curated
                          collection of web tools
                          <br className="show-destop" /> to make users&rsquo;
                          lives easier
                        </p>
                        <div className="wrap-btn">
                          <Link to="/toolboxes" className="tf-button style2">
                            EXPLORE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div
                      className="tf-title"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    >
                      <div className="featured-countdown style2">
                        <p className="featured_title">Website launching in</p>
                        <span className="slogan"></span>
                        <span className="js-countdown" data-timer="186555000">
                          {<Countdown />}
                        </span>
                        <ul className="desc">
                          <li>day</li>
                          <li>hou</li>
                          <li>min</li>
                          <li>sec</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;
