import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import LiveWebsite from './LiveWebsite';
import Contact from './Contact';
import Footer from './Footer';
import Arts from './Arts';
import Motion from './Motion';

const HomePage = () => {
  return (
    <div className=''>
      <Nav />
      <Hero />
      <Projects />
      <LiveWebsite />
      <Arts />
      <Motion />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
