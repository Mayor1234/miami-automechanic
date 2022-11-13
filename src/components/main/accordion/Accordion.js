import React, { useState } from 'react';

import AccordionItems from './AccordionItems';
import './accordion.scss';

const Accordion = ({ accordionData }) => {
  const [clicked, setClicked] = useState('0');

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked('0');
    }
    setClicked(index);
  };

  return (
    <div className="accord-container">
      {console.log(accordionData)}
      <ul className="accordion">
        {accordionData.map((accordItem, index) => (
          <AccordionItems
            key={index}
            accordItem={accordItem}
            toggle={() => handleToggle(index)}
            active={clicked === index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
