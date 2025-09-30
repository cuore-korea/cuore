import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import ContactStatic from '../components/ContactStatic';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ContactStatic />
      <Footer />
    </>
  );
};

export default HomePage;
