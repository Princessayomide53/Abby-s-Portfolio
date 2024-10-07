import Nav from '@/app/component/layout/Nav';
import React from 'react';
import Hero from './Hero';
import Overview from './Overview';
import Billboard from './Billboard';

const Home = () => {
  return (
    <section>
      <Hero />
      <Overview />
      <Billboard />
    </section>
  );
};

export default Home;
