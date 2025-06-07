import React from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useState } from 'react';

Technology.propTypes = {
    data: PropTypes.array
};

function Technology(props) {

    const {data} = props;

    const [dataTitle] = useState(
        {
            title: 'Our technology supports multiple platforms',
            text: 'Hyperlink integrates seamlessly with the tools you already use, providing a consistent experience on desktop and mobile.'
        }
    )

    return (
        <section className="tf-section technology">
                    <div className="container w_1490">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="tf-title" data-aos="fade-right" data-aos-duration="800">
                                    <div className="img_technology">
                                        <img src={require ("../../assets/images/common/img_technology1.png")} alt="" />
                                        <img className="coin coin_1" src={""} alt="" />
                                        <img className="coin coin_2" src={""} alt="" />
                                        <img className="coin coin_3" src={""} alt="" />
                                        <img className="coin coin_4" src={""} alt="" />
                                        <img className="coin coin_5" src={""} alt="" />
                                        <img className="coin coin_6" src={""} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="content_technology" data-aos="fade-up" data-aos-duration="800">
                                    <div className="tf-title left">
                                        <h2 className="title mb20">
                                            {dataTitle.title}
                                        </h2>
                                    </div>
                                    <p className="sub_technology">{dataTitle.text}
                                    </p>

                                    <Swiper
                                        className='slider-6'
                                        modules={[Navigation]}
                                            spaceBetween={0}
                                            slidesPerView={3}
                                            // navigation 
                                        >
                                        {
                                            data.map(item => (
                                                <SwiperSlide key={item.id}>
                                                    <img src={item.img} alt="" />
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                    <Swiper
                                        className='slider-6'
                                        modules={[Navigation]}
                                            spaceBetween={0}
                                            slidesPerView={3}
                                            
                                        >
                                        {
                                            data.slice(2,6).map(item => (
                                                <SwiperSlide key={item.id}>
                                                    <img src={item.img} alt="" />
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
              
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
    );
}

export default Technology;