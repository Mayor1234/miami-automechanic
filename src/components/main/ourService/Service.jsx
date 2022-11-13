import React from 'react';
import './service.scss';
import image5 from '../../../asset/image/miami5.JPG';
import image9 from '../../../asset/image/miami9.JPG';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Service() {
  return (
    <div className="service-container">
      <div className="bg-service">
        <h2>
          <span>Our</span> Services
        </h2>
      </div>
      <div className="service-display">
        <div className="service-box box-1">
          <img
            src={image5}
            alt="auto diagnosis service"
            className="service-img"
          />
        </div>
        <div className="service-box box-2">
          <div className="service-box2-content">
            <h2>The perfect solution for your car</h2>
            <ul>
              <li className="bullet">Engine Diagnosis</li>
              <li className="bullet">Change Oil and Filter</li>
              <li className="bullet">Tune Up</li>
              <li className="bullet">Auto Diagnois Training</li>
              <li className="bullet">Spare Parts replacement </li>
              <li className="bullet">Starter Replacement</li>
              <li className="bullet">Spark Plugs Replacement</li>
              <li className="bullet">Alternator Replacement</li>
            </ul>
            <div className="about-btn-center">
              <Link to="/services">
                <p>
                  Read more
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="read-more-icon"
                  />
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="service-box box-3">
          <img
            src={image9}
            alt="auto diagnosis service"
            className="service-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
