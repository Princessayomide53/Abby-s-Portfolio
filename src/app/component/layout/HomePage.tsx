import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import LiveWebsite from './LiveWebsite';
import Contact from './Contact';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className=''>
      <Nav />
      <Hero />
      <Projects />
      <LiveWebsite />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
