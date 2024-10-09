import Nav from '@/app/component/layout/Nav';
import React from 'react';
import Hero from './Hero';
import Overview from './Overview';
import Billboard from './Billboard';

const Gatsby = () => {
  return (
    <section>
      <Hero />
      <Overview />
      <Billboard />
    </section>
  );
};

export default Gatsby;
