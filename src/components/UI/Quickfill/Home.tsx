import React from 'react';
import Hero from './Hero';
import Overview from './Overview';
import Users from './Users';
import Research from './Research';
import Features from './Features';

type Props = {};

const Home = (props: Props) => {
  return (
    <section>
      <Hero />
      <Overview />
      <Users />
      <Research />
      <Features />
    </section>
  );
};

export default Home;
