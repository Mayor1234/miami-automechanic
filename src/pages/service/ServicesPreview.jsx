import React from 'react';
import './servicesPreview.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ServicesPreview({ item }) {
  const { title, content, img, serviceIcon } = item;
  return (
    <div className="services-preview">
      <div className="service-card">
        <img
          src={img}
          alt="services images"
          width={350}
          height={200}
          className="service-img"
        />
      </div>
      <div className="service-content">
        <div className="service-content-wrap">
          <FontAwesomeIcon icon={serviceIcon} className="icon" />
          <h3 className="service-title">{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPreview;
