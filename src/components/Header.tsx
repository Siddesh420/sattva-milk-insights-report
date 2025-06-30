
import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { state } = useCart();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-sage-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/585f336f-d61c-49cf-b469-fbb6fd759961.png" 
              alt="Sattvamilk Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-earth-800">SATTVAMILK</h1>
              <p className="text-sm text-sage-600 -mt-1">सत्य दूध - The Honest Dairy</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${
                isActive('/') ? 'text-terracotta-600' : 'text-earth-700 hover:text-terracotta-600'
              }`}
            >
              Home
            </Link>
            <a 
              href="/#products" 
              className="text-earth-700 hover:text-terracotta-600 transition-colors font-medium"
            >
              Products
            </a>
            <Link 
              to="/products" 
              className={`transition-colors font-medium ${
                isActive('/products') ? 'text-terracotta-600' : 'text-earth-700 hover:text-terracotta-600'
              }`}
            >
              Product Catalog
            </Link>
            <Link 
              to="/subscription" 
              className={`transition-colors font-medium ${
                isActive('/subscription') ? 'text-terracotta-600' : 'text-earth-700 hover:text-terracotta-600'
              }`}
            >
              Subscription
            </Link>
            <a 
              href="/#story" 
              className="text-earth-700 hover:text-terracotta-600 transition-colors font-medium"
            >
              Our Story
            </a>
            <a 
              href="/#traceability" 
              className="text-earth-700 hover:text-terracotta-600 transition-colors font-medium"
            >
              Traceability
            </a>
            <a 
              href="/#contact" 
              className="text-earth-700 hover:text-terracotta-600 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Cart and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/cart" 
              className="relative p-2 text-earth-700 hover:text-terracotta-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {state.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-terracotta-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {state.itemCount}
                </span>
              )}
            </Link>
            <button className="bg-terracotta-500 text-white px-6 py-2 rounded-full hover:bg-terracotta-600 transition-colors font-medium shadow-lg">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-sage-200 pt-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`transition-colors font-medium ${
                  isActive('/') ? 'text-terracotta-600' : 'text-earth-700 hover:text-terracotta-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="/#products" 
                className="text-earth-700 hover:text-terracotta-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <Link 
                to="/products" 
                className={`transition-colors font-medium ${
                  isActive('/products') ? 'text-terracotta-600' : 'text-earth-700 hover:text-terracotta-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Product Catalog
              </Link>
              <Link 
                to="/subscription" 
                className={`transition-colors font-medium ${
                  isActive('/subscription') ? 'text-terracotta-600' : 'text-earth-700 hover:text-terracotta-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Subscription
              </Link>
              <a 
                href="/#story" 
                className="text-earth-700 hover:text-terracotta-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </a>
              <a 
                href="/#traceability" 
                className="text-earth-700 hover:text-terracotta-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Traceability
              </a>
              <a 
                href="/#contact" 
                className="text-earth-700 hover:text-terracotta-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Link 
                to="/cart" 
                className="flex items-center gap-2 text-earth-700 hover:text-terracotta-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="h-5 w-5" />
                Cart ({state.itemCount})
              </Link>
              <button className="bg-terracotta-500 text-white px-6 py-2 rounded-full hover:bg-terracotta-600 transition-colors font-medium w-fit">
                Order Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
