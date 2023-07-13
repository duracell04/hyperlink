import React, { useEffect, useState } from "react";
import linkedIn from "./linkedin-svgrepo-com.svg";
import "./styles.scss";

import { Link } from "react-router-dom";

function Footer(props) {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <footer id="footer">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="footer-logo">
              <div className="logo_footer">
                <img
                  src={require("../../assets/images/logo/hyperlink-removebg.png")}
                  alt=""
                  width="80px"
                />
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
              Copyright © 2023. Designed by{" "}
              <a
                href="https://www.linkedin.com/in/tornike-nizharadze-7832a81a0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ToykoSpace
              </a>
            </div>
            <ul className="social">
              {/* <li>
                            <Link to="#">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_157_2529)">
                                    <path d="M18 3.41887C17.3306 3.7125 16.6174 3.90712 15.8737 4.00162C16.6388 3.54487 17.2226 2.82712 17.4971 1.962C16.7839 2.38725 15.9964 2.68763 15.1571 2.85525C14.4799 2.13413 13.5146 1.6875 12.4616 1.6875C10.4186 1.6875 8.77387 3.34575 8.77387 5.37863C8.77387 5.67113 8.79862 5.95237 8.85938 6.22012C5.7915 6.0705 3.07687 4.60013 1.25325 2.36025C0.934875 2.91263 0.748125 3.54488 0.748125 4.2255C0.748125 5.5035 1.40625 6.63637 2.38725 7.29225C1.79437 7.281 1.21275 7.10888 0.72 6.83775C0.72 6.849 0.72 6.86363 0.72 6.87825C0.72 8.6715 1.99912 10.161 3.6765 10.5041C3.37612 10.5863 3.04875 10.6256 2.709 10.6256C2.47275 10.6256 2.23425 10.6121 2.01038 10.5626C2.4885 12.024 3.84525 13.0984 5.4585 13.1332C4.203 14.1154 2.60888 14.7071 0.883125 14.7071C0.5805 14.7071 0.29025 14.6936 0 14.6565C1.63462 15.7106 3.57188 16.3125 5.661 16.3125C12.4515 16.3125 16.164 10.6875 16.164 5.81175C16.164 5.64862 16.1584 5.49113 16.1505 5.33475C16.8829 4.815 17.4982 4.16587 18 3.41887Z" fill="#798DA3"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_157_2529">
                                    <rect width="18" height="18" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                    
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4377 0H13.2325L6.98535 10.9429L11.0106 18H15.2159L11.1906 10.9429L17.4377 0Z" fill="#798DA3"/>
                                    <path d="M5.24588 3.375H1.28138L3.57525 7.41488L0.5625 12.375H4.527L7.53975 7.41488L5.24588 3.375Z" fill="#798DA3"/>
                                    </svg>
                                    
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0.199951C6.684 0.199951 4.8 2.08395 4.8 4.39995V11.6C4.8 11.93 4.5312 12.2 4.2 12.2C3.8688 12.2 3.6 11.93 3.6 11.6V8.59995H0V11.6C0 13.916 1.884 15.8 4.2 15.8C6.516 15.8 8.4 13.916 8.4 11.6V4.39995C8.4 4.06875 8.6688 3.79995 9 3.79995C9.3312 3.79995 9.6 4.06875 9.6 4.39995V6.67875L11.4 7.87875L13.2 6.67875V4.39995C13.2 2.08395 11.316 0.199951 9 0.199951Z" fill="#798DA3"/>
                                    <path d="M14.4001 8.59989V11.5999C14.4001 11.9299 14.1301 12.1999 13.8001 12.1999C13.4701 12.1999 13.2001 11.9299 13.2001 11.5999V8.12109L11.7325 9.09909C11.6317 9.16629 11.5165 9.19989 11.4001 9.19989C11.2837 9.19989 11.1685 9.16629 11.0677 9.09909L9.6001 8.12109V11.5999C9.6001 13.9159 11.4841 15.7999 13.8001 15.7999C16.1161 15.7999 18.0001 13.9159 18.0001 11.5999V8.59989H14.4001Z" fill="#798DA3"/>
                                    </svg>
                                    
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3836 5.00756C10.3836 3.73634 10.8716 3.0748 11.5606 3.0748C12.2169 3.0748 12.654 3.6686 12.654 4.87208C12.654 5.5569 12.472 6.30736 12.3376 6.75085C12.3386 6.75191 12.9917 7.90035 14.7784 7.54788C15.1573 6.69899 15.3637 5.59924 15.3637 4.63498C15.3637 2.04068 14.0512 0.531311 11.6464 0.531311C9.17275 0.531311 7.72689 2.44819 7.72689 4.97475C7.72689 7.47802 8.88803 9.62776 10.8017 10.6068C9.9973 12.2295 8.9727 13.6595 7.90471 14.737C5.96772 12.3745 4.21596 9.22449 3.4962 3.07586H0.63623C1.9572 13.3165 5.89363 16.5766 6.9341 17.2032C7.5226 17.5599 8.03067 17.543 8.56837 17.2371C9.41302 16.7523 11.9512 14.195 13.3569 11.1985C13.9464 11.1964 14.6556 11.1287 15.3627 10.9667V8.95034C14.9297 9.0509 14.5117 9.09535 14.1348 9.09535C12.0147 9.09535 10.3836 7.60292 10.3836 5.00756Z" fill="#798DA3"/>
                                    </svg>
                                    
                            </Link>
                        </li> */}
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
