import React from 'react';
import './process.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarCheck,
  faCar,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';

function Process() {
  return (
    <div className="process-bg">
      <div className="our-process row">
        <div className="process-heading">
          <h2>
            <span>Our</span> Working Process
          </h2>
        </div>
        <div className="box-container">
          <div className="process-box">
            <h3>Book An Appointment</h3>
            <p className="process-icon">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </p>
            <div className="arrow-div"></div>
            <p className="arrow-content">
              Call: 08038074534 or
              <br />
              Email: ioyeniyi0@gmail.com to book an appointment.
            </p>
          </div>
          <div className="process-box">
            <h3>Bring Your Vehicle</h3>
            <p className="process-icon">
              <FontAwesomeIcon icon={faCar} />
            </p>
            <div className="arrow-div2"></div>
            <p className="arrow-content">
              To keep your car fine and running, we provide a regular check-up
              which will prevent your car from mal-functioning.
            </p>
          </div>
          <div className="process-box">
            <h3>Get It Repaired</h3>
            <p className="process-icon">
              <FontAwesomeIcon icon={faWrench} />
            </p>
            <div className="arrow-div3"></div>
            <p className="arrow-content">
              It is of great importance to us that your car takes you to your
              destinations safely. We provide top-notch service & repair
              maintenance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
