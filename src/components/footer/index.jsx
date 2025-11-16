import React, { useEffect, useState } from 'react';
import linkedIn from './linkedin-svgrepo-com.svg';
import './styles.scss';

import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <footer id="footer">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="footer-logo">
              <div className="logo_footer">
                <Logo size="md" />
              </div>
              <p>Leading platforming in marketing</p>
            </div>
            <div className="widget">
              <h5 className="widget-title">Contact us</h5>
              <ul className="widget-link contact">
                <li>
                  <p>Address</p>
                  <Link to="#">Georgia, Tbilisi</Link>
                </li>
                <li>
                  <p>Phone</p>
                  <Link to="#">+995 595 12 34 56</Link>
                </li>
                <li className="email">
                  <p>Email</p>
                  <Link to="#">hyperlink@support.com</Link>
                </li>
              </ul>
            </div>
            <div className="widget support">
              <h5 className="widget-title">Toolboxes</h5>
              <ul className="widget-link">
                <li>
                  <Link to="/">Scholar</Link>
                </li>
                <li>
                  <Link to="/">Secretary</Link>
                </li>
                <li>
                  <Link to="/">Designer</Link>
                </li>
                <li>
                  <Link to="/">Marketing</Link>
                </li>
                <li>
                  <Link to="/">Start-up</Link>
                </li>
                <li>
                  <Link to="/">Custom</Link>
                </li>
              </ul>
            </div>
            <div className="widget link">
              <h5 className="widget-title">Main</h5>
              <ul className="widget-link">
                <li>
                  <Link to="/">Hyperlink</Link>
                </li>
                <li>
                  <Link to="/aboutUs">About us</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/roadmap">Roadmap</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/">Privacy policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="wrap-fx">
            <div className="Copyright">
              Copyright © 2023. Designed by{' '}
              <a
                href="https://www.linkedin.com/in/tornike-nizharadze-7832a81a0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ToykoSpace
              </a>
            </div>
            <ul className="social">
              <li>
                <a
                  href="https://www.linkedin.com/in/enrique-g-zbinden-80908a18b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedIn} alt="linkedIn logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isVisible && <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>}
    </footer>
  );
}

export default Footer;
