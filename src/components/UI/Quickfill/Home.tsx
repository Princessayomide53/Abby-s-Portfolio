import React from 'react';
import Hero from './Hero';
import Overview from './Overview';

type Props = {};

const Home = (props: Props) => {
  return (
    <section>
      <Hero />
      <Overview />
    </section>
  );
};

export default Home;
