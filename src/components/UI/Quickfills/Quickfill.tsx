import React from 'react';
import Hero from './Hero';
import Overview from './Overview';
import Users from './Users';
import Research from './Research';
import Features from './Features';
import Footer from '@/app/component/layout/Footer';

type Props = {};

const Quickfill = (props: Props) => {
  return (
    <section>
      <Hero />
      <Overview />
      <Users />
      <Research />
      <Features />
      <Footer />
    </section>
  );
};

export default Quickfill;
