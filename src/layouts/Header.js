import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './../assets/images/logo.png';
import LogoWhite from './../assets/images/logo-white.png';

function Header() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      setHeaderVisible(!isScrolledDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    closeSidebar();
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className={`site-header mo-left header ${!headerVisible ? '' : 'is-fixed bg-red'}`}>
        <div className={`sticky-header  main-bar-wraper navbar-expand-lg`}>
          <div className={`main-bar clearfix`}>
            <div className="container clearfix">
              <div className="logo-header">
                <NavLink to="/" className={headerVisible ? 'logo-dark' : 'logo-light'}>
                  <img src={headerVisible ? "https://i.postimg.cc/4N94Gycc/fecotrade-web-site-logo-01.png" : "https://i.postimg.cc/fW675VS6/fecotrade-web-site-logo-01.png"} alt="" />
                </NavLink>
              </div>

              <button
                type="button"
                className={`navbar-toggler navicon justify-content-end ${sidebarOpen ? 'open' : 'collapsed'}`}
                onClick={handleSidebarToggle}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className={`header-nav navbar-collapse collapse justify-content-end ${sidebarOpen ? 'show' : ''}`} id="navbarNavDropdown">
                <div className="logo-header mostion">
                  <NavLink to="#" className="logo-dark">
                    <img src={`https://i.postimg.cc/4N94Gycc/fecotrade-web-site-logo-01.png`} alt="" />
                  </NavLink>
                </div>
                <ul className="nav navbar-nav navbar">
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => handleNavLinkClick('home')}
                      className={activeLink === 'home' ? 'text-primary' : ''}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about-us"
                      onClick={() => handleNavLinkClick('about')}
                      className={activeLink === 'about' ? 'text-primary' : ''}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pricing"
                      onClick={() => handleNavLinkClick('pricing')}
                      className={activeLink === 'pricing' ? 'text-primary' : ''}
                    >
                      Mining
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/stacking"
                      onClick={() => handleNavLinkClick('staking')}
                      className={activeLink === 'staking' ? 'text-primary' : ''}
                    >
                      Staking
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog"
                      onClick={() => handleNavLinkClick('faq')}
                      className={activeLink === 'faq' ? 'text-primary' : ''}
                    >
                      FAQ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact-us"
                      onClick={() => handleNavLinkClick('contact')}
                      className={activeLink === 'contact' ? 'text-primary' : ''}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
                <div className="extra-nav">
                  <div className="extra-cell">
                    <a className="btn btn-outline-primary" target="_blank" rel="noreferrer" href="https://auth.fecotrade.com/login">Login</a>
                    <a className="btn btn-primary btn-gradient btn-shadow" target="_blank" rel="noreferrer" href="https://auth.fecotrade.com/register">Register</a>
                  </div>
                </div>
                <div className="header-bottom">
                  <div className="dz-social-icon">
                    <ul>
                      <li><a target="_blank" className="fab fa-facebook-f" rel="noreferrer" href="https://www.facebook.com/fectorade"></a></li>
                      <li><a target="_blank" className="fab fa-twitter" rel="noreferrer" href="https://twitter.com/"></a></li>
                      <li><a target="_blank" className="fab fa-linkedin-in" rel="noreferrer" href="https://www.linkedin.com/"></a></li>
                      <li><a target="_blank" className="fab fa-instagram" rel="noreferrer" href="https://www.instagram.com/"></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
