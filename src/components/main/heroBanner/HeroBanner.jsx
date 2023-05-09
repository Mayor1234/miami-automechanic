import React from 'react';
import './heroBanner.scss';
import { slides } from '../../utils/SliderData';
import Slider from '../slider/Slider';
import { Link } from 'react-router-dom';
import GoogleAds from '../../googleAds/GoogleAds';

function HeroBanner() {
  return (
    <div>
      <GoogleAds dataAdSlot={2189077895} />
      <div className="slider-container">
        <Slider slides={slides} />
      </div>
      <div className="elementor-section">
        <div className="elementor-widget-wrap">
          <div className="elementor-container">
            <div className="contact-heading">
              <h2>Contact Details</h2>
            </div>
            <div className="contact-details">
              <ul>
                <li>
                  <span>
                    <strong>Call us :</strong>
                  </span>
                  <p className="info">08020796860, 08038074534</p>
                </li>
                <li>
                  <span>
                    <strong>Find us :</strong>
                  </span>
                  <p className="info">
                    Udoudoma Avenue, Adjacent To 100 Units Uyo, Aks.
                  </p>
                </li>
                <li>
                  <span>
                    <strong>Work time :</strong>
                  </span>
                  <p className="info">
                    Mon - Sat: 8:00am - 6:00pm
                    <br />
                    Sunday: Closed
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="elementor-widget-wrap elementor2">
          <div className="elementor-container">
            <div className="elementor-content">
              <h2>Searching for auto repair?</h2>
              <p>
                Our service department maintain your car to stay safe on the
                road for many more years. We provide the absolute best value for
                your modern vehicle. Schedule your appointment today!
              </p>
            </div>
            <Link to="/contact">
              <button type="button" className="btn">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>

        <div className="elementor-widget-wrap elementor3">
          <div className="elementor-container">
            <div className="elementor-content">
              <h2>Searching for accessories?</h2>
              <p>
                With a robust selection of popular automobile spare parts, we
                are trusted by many to provide on-demand accessories for all
                brand of cars. Call or visit us today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
