import React from 'react';
import About from './about/About';
import Brands from './brands/Brands';
import HeroBanner from './heroBanner/HeroBanner';
import Service from './ourService/Service';
import Process from './process/Process';
import Why from './why/Why';

function Main() {
  return (
    <>
      <HeroBanner />
      <Why />
      <About />
      <Service />
      <Process />
      <Brands />
    </>
  );
}

export default Main;
