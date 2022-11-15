import React from 'react';
import PagesHeader from '../pagesHeader/PagesHeader';
import aboutRight from '../../asset/image/miami8.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faScrewdriverWrench,
  faCalendarCheck,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import './aboutPage.scss';
import AccordionComponent from '../../components/main/accordion/AccordionComponent';

const pageData = {
  page: 'About Page',
  title: 'About Us',
};

function AboutPage() {
  return (
    <div>
      <PagesHeader pageData={pageData} />
      <div className="about-page-container">
        <div className="about-page-content row">
          <div className="about-page-left">
            <div className="about-page-left-content">
              <div className="about-heading-wrapper">
                <FontAwesomeIcon icon={faScrewdriverWrench} className="icon" />
                <h2>
                  <span>Over 30+ Years </span> Experience
                </h2>
              </div>
              <p>
                Miami Automechanic was established to deliver a global standard
                automobile diagnosis and repair. We offer a training programme
                which involves learning basic fundamental skills of how a
                vehicle works, function of different components, how to perform
                diagnosis, basic maintenance and service repairs.
              </p>
            </div>
          </div>
          <div className="about-page-right">
            <img
              src={aboutRight}
              alt="About pic"
              className="about-page-right-img"
            />
          </div>
        </div>
        <div className="about-secion2 row">
          <div className="left-section">
            <AccordionComponent />
          </div>
          <div className="right-section">
            <h2>Miami Automechanical Statistics</h2>
            <div className="right-section-wrapper">
              <div className="right-section-detail">
                <FontAwesomeIcon icon={faCalendarCheck} className="icon-2" />
                <span>30+</span>
                <p>Years of Experience</p>
              </div>
              <div className="right-section-detail">
                <FontAwesomeIcon icon={faThumbsUp} className="icon-2" />
                <span>100%</span>
                <p>Customer Satisfaction</p>
              </div>
              <div className="right-section-detail">
                <FontAwesomeIcon
                  icon={faScrewdriverWrench}
                  className="icon-2"
                />
                <span>5000+</span>
                <p>Vehicles Repaired</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
