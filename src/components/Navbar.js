import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { Link as ScrollLink, useHistory } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const history = useHistory();

  const handleNav = () => setNav(!nav);

  const handleScroll = (section) => {
    history.push(`/#${section}`);
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
      <Link to="/" className="logo" >
        <h2>PET EXPO</h2>
      </Link>
      <ul className="nav-menu">
        <li>
          <button className="about-button" onClick={() => handleScroll('about-us')}>About us</button>
        </li>
        <li>
          <button className="contact-button" onClick={() => handleScroll('contact-us')}>Contact us</button>
        </li>
      </ul>
      <div className="hamburger" onClick={handleNav}>
        <HiOutlineMenuAlt4 className='icon' />
      </div>
      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className="mobile-nav">
          <li>
            <button className="about-button-mobile" onClick={() => handleScroll('about-us')}>About us</button>
          </li>
          <li>
            <button className="contact-button-mobile" onClick={() => handleScroll('contact-us')}>Contact us</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
