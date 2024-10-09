import React from 'react';
import Hero from './Hero';
import Overview from './Overview';
import Users from './Users';
import Research from './Research';
import Features from './Features';
import Footer from '@/app/component/layout/Footer';

const QuickFill = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <Users />
      <Research />
      <Features />
      <Footer />
    </div>
  );
};

export default QuickFill;
