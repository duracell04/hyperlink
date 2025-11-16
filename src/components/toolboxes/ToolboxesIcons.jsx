import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { fetchToolboxesMock } from '../../services/mockApi';

function ToolboxesIcons() {
  const [toolboxes, setToolboxes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      const data = await fetchToolboxesMock();
      if (!active) return;
      setToolboxes(data);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="tf-section tf-faq_2">
      <div className="container w_1310">
        <div className="row">
          <div className="col-md-12">
            <div className="container_inner">
              {loading ? (
                <p style={{ color: '#e6eefc', opacity: 0.8 }}>
                  Loading toolboxes...
                </p>
              ) : (
                <Swiper
                  className="slider-13"
                  modules={[Navigation]}
                  spaceBetween={30}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    600: { slidesPerView: 2 },
                    900: { slidesPerView: 3 },
                  }}
                >
                  {toolboxes.map((box) => (
                    <SwiperSlide key={box.id}>
                      <div className="icon-box-style4">
                        <Link to={`/toolboxes/${box.id}`}>
                          <div className="icon-wrapper" style={{ gap: '0.65rem' }}>
                            <span
                              style={{
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                opacity: 0.75,
                              }}
                            >
                              {box.tags.join(' · ')}
                            </span>
                            <h6>{box.name}</h6>
                            <p style={{ minHeight: '72px', opacity: 0.85 }}>
                              {box.tagline}
                            </p>
                            <ul
                              style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: '0 0 0.75rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.35rem',
                              }}
                            >
                              {box.tools.slice(0, 3).map((tool) => (
                                <li
                                  key={tool.id}
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '0.9rem',
                                  }}
                                >
                                  <span>{tool.name}</span>
                                  <span style={{ opacity: 0.7 }}>
                                    {tool.category}
                                  </span>
                                </li>
                              ))}
                            </ul>
                            <span className="tf-button style2">
                              Explore stack
                            </span>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToolboxesIcons;
