import Nav from '@/app/component/layout/Nav';
import React from 'react';
import Hero from './Hero';
import Overview from './Overview';
import Billboard from './Billboard';

const Gatsby = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <Billboard />
    </div>
  );
};

export default Gatsby;
