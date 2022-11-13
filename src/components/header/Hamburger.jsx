import React from 'react';
import './hamburger.scss';

function Hamburger({ open }) {
  return (
    <div>
      <div open={open} className="burger-menu">
        <div className={`ham ${open ? 'open' : ''}`}></div>
        <div className={`ham ${open ? 'open' : ''}`}></div>
        <div className={`ham ${open ? 'open' : ''}`}></div>
      </div>
    </div>
  );
}

export default Hamburger;
