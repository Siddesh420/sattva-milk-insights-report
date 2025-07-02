import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Story from '../components/Story';
import Traceability from '../components/Traceability';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-background">
      <Header />
      <Hero />
      <Products />
      <Story />
      <Traceability />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;