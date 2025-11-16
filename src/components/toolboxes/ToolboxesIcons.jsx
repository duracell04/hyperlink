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
                <div className="toolbox-cards__loading">
                  <span className="spinner" aria-hidden="true" />
                  <p>Loading curated toolboxes...</p>
                </div>
              ) : (
                <Swiper
                  className="slider-13 toolbox-cards-slider"
                  modules={[Navigation]}
                  navigation
                  spaceBetween={32}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                  }}
                >
                  {toolboxes.map((box) => (
                    <SwiperSlide key={box.id}>
                      <article className="toolbox-card">
                        <Link
                          to={`/toolboxes/${box.id}`}
                          className="toolbox-card__inner"
                          aria-label={`View ${box.name} toolbox`}
                        >
                          <p className="toolbox-card__tags">
                            {box.tags.join(' | ')}
                          </p>
                          <h3 className="toolbox-card__title">{box.name}</h3>
                          <p className="toolbox-card__tagline">{box.tagline}</p>
                          <p className="toolbox-card__ideal">
                            <strong>Ideal for:</strong> {box.idealUser}
                          </p>
                          <ul className="toolbox-card__tool-list">
                            {box.tools.slice(0, 3).map((tool) => (
                              <li key={tool.id}>
                                <div>
                                  <span className="tool-name">{tool.name}</span>
                                  <span className="tool-category">
                                    {tool.category}
                                  </span>
                                </div>
                                <span className="tool-cost">
                                  {tool.approxMonthlyCost}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <div className="toolbox-card__cta">
                            <span>{box.tools.length} tools inside</span>
                            <span className="cta-link">
                              View stack <span aria-hidden="true">-&gt;</span>
                            </span>
                          </div>
                        </Link>
                      </article>
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
