import React from 'react';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import Footer from '../components/Footer';

const ProductCatalog = () => {
  return (
    <div className="min-h-screen bg-cream-50 dark:bg-background">
      <Header />
      <ProductListing />
      <Footer />
    </div>
  );
};

export default ProductCatalog;