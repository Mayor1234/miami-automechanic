import React, { useRef } from 'react';
import './accordionitems.scss';
import { FaAngleDown } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

function AccordionItems({ accordItem, active, toggle }) {
  const { title, subtitle } = accordItem;

  const subRef = useRef();

  return (
    <div>
      <li className={`accordion-item ${active ? 'activve' : ''}`}>
        <div>
          <button className="accord-btn" onClick={toggle}>
            <div className="title-pos">{title}</div>
            <span className="control">
              {active ? <FaAngleRight /> : <FaAngleDown />}
            </span>
          </button>
        </div>

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
