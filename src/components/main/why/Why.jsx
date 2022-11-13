import React from 'react';
import './why.scss';
import why from '../../../asset/image/miami5.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHelmetSafety,
  faScrewdriverWrench,
  faSackDollar,
  faBuildingUser,
} from '@fortawesome/free-solid-svg-icons';

function Why() {
  return (
    <div>
      <div className="why-choose-us">
        <div className="why-wrapper">
          <div className="why-container-left">
            <h2 className="row">
              <span>Why</span> Choose Miami Automechanic
            </h2>
            <div className="why-content">
              <div className="job why-box">
                <p className="icon">
                  <FontAwesomeIcon icon={faBuildingUser} />
                </p>
                <h3>
                  <span>Every</span> Job is Personal
                </h3>
                <p>
                  If you want the quality you would expect from the dealership,
                  but with a more personal and friendly atmosphere, you have
                  found it.
                </p>
              </div>

              <div className="price why-box">
                <p className="icon">
                  <FontAwesomeIcon icon={faSackDollar} />
                </p>
                <h3>
                  <span>Affordable</span> Price
                </h3>
                <p>
                  Most of the vehicles get damaged just because of maintenance
                  neglect you take.
                </p>
              </div>

              <div className="Equipment why-box">
                <p className="icon">
                  <FontAwesomeIcon icon={faScrewdriverWrench} />
                </p>
                <h3>
                  <span>Sophisticated</span> Equiptments
                </h3>
                <p>
                  We have invested in all the latest specialist tools and
                  diagnostic software that is specifically tailored for the
                  software in your vehicle.
                </p>
              </div>

              <div className="standard why-box">
                <p className="icon">
                  <FontAwesomeIcon icon={faHelmetSafety} />
                </p>
                <h3>
                  <span>Professional</span> Standards
                </h3>
                <p>
                  Our auto repair shop is capable of servicing a variety of
                  models. We only do the work that is needed to fix your
                  problem.
                </p>
              </div>
            </div>
          </div>

          <div className="why-container-right">
            <img src={why} alt="why" className="why-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
