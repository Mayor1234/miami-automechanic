import React from 'react';
import { Link } from 'react-router-dom';
import newlogo from '../../asset/image/newlogo.png';
import './logo.scss';

const Logo = () => {
  return (
    <>
      <Link to="/">
        <div className="logo">
          <img
            src={newlogo}
            alt="miami automechanic logo"
            width={50}
            height={50}
            className="img-logo"
          />
          <div className="brand-name">
            <h1>
              <strong> Miami</strong>
            </h1>
            <span>
              <strong> Automechanical</strong>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Logo;
