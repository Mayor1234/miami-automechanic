import React, { useRef } from 'react';
import './accordionitems.scss';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';

function AccordionItems({ accordItem, active, toggle }) {
  const { title, subtitle } = accordItem;

  const subRef = useRef();

  return (
    <div>
      <li className={`accordion-item ${active ? 'activve' : ''}`}>
        <button className="accord-btn" onClick={toggle}>
          {title}
          <span className={'control'}>
            {active ? <FaAngleDoubleDown /> : <FaAngleDoubleRight />}
          </span>
        </button>

        <div
          ref={subRef}
          className="subtitle-wrapper"
          style={
            active ? { height: subRef.current.scrollHeight } : { height: '0px' }
          }
        >
          <div className="subtitle">{subtitle}</div>
        </div>
      </li>
    </div>
  );
}

export default AccordionItems;
