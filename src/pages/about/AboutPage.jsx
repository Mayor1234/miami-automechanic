import React from 'react';
import PagesHeader from '../pagesHeader/PagesHeader';
import aboutRight from '../../asset/image/miami8.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
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
      <div className="about-page-container row">
        <div className="about-page-content">
          <div className="about-page-left">
            <div className="about-page-left-content">
              <div className="about-heading-wrapper">
                <FontAwesomeIcon icon={faScrewdriverWrench} className="icon" />
                <h2>
                  <span>Over 20+ Years </span> Experience
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
              width="400"
              height="600"
              className="about-page-right-img"
            />
          </div>
        </div>
        <div className="secion2">
          <AccordionComponent />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
