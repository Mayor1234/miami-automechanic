import React from 'react';
import { aboutAccordionData } from '../../utils/AboutAccordionData';
import Accordion from './Accordion';

function AccordionComponent() {
  return (
    <div>
      <Accordion accordionData={aboutAccordionData} />
    </div>
  );
}

export default AccordionComponent;
