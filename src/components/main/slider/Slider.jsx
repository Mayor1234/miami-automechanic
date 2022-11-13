import React, { useEffect, useState } from 'react';
import './slider.scss';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    const lastSlide = current === slides.length - 1;
    const newSlide = lastSlide ? 0 : current + 1;
    setCurrent(newSlide);
  };

  const prev = () => {
    const firstSlide = current === 0;
    const newSlide = firstSlide ? slides.length - 1 : current - 1;
    setCurrent(newSlide);
  };

  useEffect(() => {
    const next = (current + 1) % slides.length;
    const timeout = setTimeout(() => setCurrent(next), 5000);

    return () => clearTimeout(timeout);
  }, [current, slides.length]);

  const slideStyle = {
    backgroundImage: `linear-gradient(
          180deg, 
          rgba(43, 59, 201, 0.709),
          rgba(11, 11, 11, 0.276)
        ), url(${slides[current].image})`,
  };

  return (
    <div className="slider">
      <div className="next" onClick={next}>
        <FaAngleRight />
      </div>
      <div className="prev" onClick={prev}>
        <FaAngleLeft />
      </div>
      <div className="slider-inner" style={slideStyle}>
        {
          <div className="hero-content-container">
            <h1>{slides[current].title}</h1>
            <h3>{slides[current].subtitle}</h3>
          </div>
        }
      </div>
    </div>
  );
}

export default Slider;
