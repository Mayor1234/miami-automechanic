import React from 'react';
import './brands.scss';
import lexuslogo from '../../../asset/image/lexuslogo.jpeg';
import toyotalogo from '../../../asset/image/toyotalogo.jpeg';
import benzlogo from '../../../asset/image/benzlogo.jpeg';
import hondalogo from '../../../asset/image/hondalogo.jpeg';
import infinitilogo from '../../../asset/image/infinitilogo.png';
import audilogo from '../../../asset/image/audilogo.png';
import kialogo from '../../../asset/image/kialogo.png';
import nissanlogo from '../../../asset/image/nissanlogo.png';
import rangelogo from '../../../asset/image/rangelogo.png';
import bmwlogo from '../../../asset/image/bmwlogo.png';

function Brands() {
  return (
    <div className="brands ">
      <div className="brand-heading-wrapper">
        <div className="brand-heading row">
          <h2>
            <span>Our</span> Brands
          </h2>
        </div>
      </div>

      <div className="container row">
        <div className="car">
          <img src={lexuslogo} alt="lexus logo" className="brand-logo" />
        </div>
        <div className="car">
          <img src={audilogo} alt="audi logo" className="brand-logo" />
        </div>
        <div className="car">
          <img src={bmwlogo} alt="bmw logo" className="brand-logo" />
        </div>

        <div className="car">
          <img src={toyotalogo} alt="toyota logo" className="brand-logo" />
        </div>

        <div className="car">
          <img src={benzlogo} alt="benz logo" className="brand-logo" />
        </div>

        <div className="car">
          <img src={hondalogo} alt="honda logo" className="brand-logo" />
        </div>
        <div className="car">
          <img src={rangelogo} alt="range logo" className="brand-logo" />
        </div>
        <div className="car">
          <img src={nissanlogo} alt="nissan logo" className="brand-logo" />
        </div>
        <div className="car">
          <img src={kialogo} alt="kia logo" className="brand-logo" />
        </div>
        <div className="car">
          <img src={infinitilogo} alt="infiniti logo" className="brand-logo" />
        </div>
      </div>
    </div>
  );
}

export default Brands;
