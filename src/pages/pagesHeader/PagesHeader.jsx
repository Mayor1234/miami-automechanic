import React from 'react';
import './PagesHeader.scss';
import { Link } from 'react-router-dom';
function PagesHeader({ pageData }) {
  const { page, title } = pageData;
  return (
    <div className="page-header">
      {
        <div className="wrapper-container">
          <h2>{page}</h2>
          <h3>
            <Link to="/">Home</Link> / <span> {title} </span>
          </h3>
        </div>
      }
    </div>
  );
}

export default PagesHeader;
