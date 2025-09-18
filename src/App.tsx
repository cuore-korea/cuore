import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsStatic from './components/ProductsStatic';
import About from './components/About';
import Services from './components/Services';
import ContactStatic from './components/ContactStatic';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductsStatic />
      <About />
      <Services />
      <ContactStatic />
      <Footer />
    </div>
  );
}

export default App;