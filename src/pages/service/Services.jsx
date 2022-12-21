import React from 'react';
import PagesHeader from '../pagesHeader/PagesHeader';
import './services.scss';
import { serviceData } from '../../components/utils/services';
import ServicesPreview from './ServicesPreview';
import GoogleAds from '../../components/googleAds/GoogleAds';

const pageData = {
  page: 'Best Services',
  title: 'Our Services',
};

function Services() {
  return (
    <>
      <PagesHeader pageData={pageData} />
      <GoogleAds dataAdSlot={2189077895} />
      <div className="service-page row">
        <h2>
          <span>Our</span> Services
        </h2>
        <div className="services-display">
          {serviceData.map((item, index) => (
            <ServicesPreview key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
