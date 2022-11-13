import React, { useState } from 'react';
import './header.scss';

import { Link } from 'react-router-dom';
import Logo from './Logo';
import Hamburger from './Hamburger';

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((toggleBurger) => !toggleBurger);
  };

  return (
    <div>
      <nav>
        <div className="nav-container row">
          <div className="left-nav">
            <Logo />
          </div>
          <div className="right-nav">
            <ul
              className={`main-nav ${open ? 'open' : 'close'}`}
              onClick={handleClick}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hamburger" onClick={handleClick}>
          <Hamburger open={open} />
        </div>
      </nav>
    </div>
  );
}

export default Header;
