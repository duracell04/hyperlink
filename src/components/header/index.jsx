import React, { useState, useEffect, useContext } from 'react';

import { Link, NavLink } from 'react-router-dom';
import menus from '../../pages/menu';
import './styles.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../configs/firebase';
import { AuthContext } from '../../context/authContext';
import Logo from '../Logo';

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 300);
    });
    return () => {
      setScroll({});
    };
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/login');
        console.log('Signed out successfully');
      })
      .catch(() => {
        // An error happened.
      });
  };

  const [menuActive, setMenuActive] = useState(null);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleDropdown = (index) => {
    setActiveIndex(index);
  };

  return (
    <header id="header_main" className={`header ${scroll ? 'is-fixed' : ''}`}>
      <div className="container">
        <div id="site-header-inner">
          <div className="header__logo">
            <NavLink to="/">
              <Logo className="align-items-center" size="md" />
            </NavLink>
          </div>
          <nav
            id="main-nav"
            className={`main-nav ${menuActive ? 'active' : ''}`}
          >
            <ul id="menu-primary-menu" className="menu">
              {menus.map((data, idx) => (
                <li
                  key={idx}
                  onClick={() => handleDropdown(idx)}
                  className={`menu-item ${
                    data.namesub ? 'menu-item-has-children' : ''
                  } ${activeIndex === idx ? 'active' : ''}`}
                >
                  <Link to={data.links}>{data.name}</Link>
                  {data.namesub && (
                    <ul className="sub-menu">
                      {data.namesub.map((submenu) => (
                        <li key={submenu.id} className="menu-item">
                          <NavLink to={submenu.links} onClick={handleDropdown}>
                            {submenu.sub}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <Dropdown className="d-inline ms-auto">
            <Dropdown.Toggle
              id="dropdown-autoclose-true"
              style={{ background: 'none', border: 'none', boxShadow: 'none' }}
            >
              <span className="fas fa-lg fa-user"></span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {currentUser ? (
                <>
                  <Dropdown.Item href="/dashboard">
                    User dashboard
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                </>
              ) : (
                <Dropdown.Item href="/login">Login</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <div
            className={`mobile-button ${menuActive ? 'active' : ''}`}
            onClick={handleMenuActive}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
