import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { state } = useCart();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/90 dark:bg-background/90 backdrop-blur-sm sticky top-0 z-50 border-b border-sage-200 dark:border-sage-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/585f336f-d61c-49cf-b469-fbb6fd759961.png" 
              alt="Sattvamilk Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-earth-800 dark:text-earth-200">SattvaMilk</h1>
              <p className="text-sm text-sage-600 dark:text-sage-400 -mt-1 hidden sm:block">सत्य दूध - The Honest Dairy</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${
                isActive('/') ? 'text-terracotta-600 dark:text-terracotta-400' : 'text-earth-700 dark:text-earth-300 hover:text-terracotta-600 dark:hover:text-terracotta-400'
              }`}
            >
              Home
            </Link>
            <a 
              href="/#products" 
              className="text-earth-700 dark:text-earth-300 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors font-medium"
            >
              Products
            </a>
            <Link 
              to="/products" 
              className={`transition-colors font-medium ${
                isActive('/products') ? 'text-terracotta-600 dark:text-terracotta-400' : 'text-earth-700 dark:text-earth-300 hover:text-terracotta-600 dark:hover:text-terracotta-400'
              }`}
            >
              Product Catalog
            </Link>
            <Link 
              to="/subscription" 
              className={`transition-colors font-medium ${
                isActive('/subscription') ? 'text-terracotta-600 dark:text-terracotta-400' : 'text-earth-700 dark:text-earth-300 hover:text-terracotta-600 dark:hover:text-terracotta-400'
              }`}
            >
              Subscription
            </Link>
            <a 
              href="/#story" 
              className="text-earth-700 dark:text-earth-300 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors font-medium"
            >
              Our Story
            </a>
            <a 
              href="/#traceability" 
              className="text-earth-700 dark:text-earth-300 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors font-medium"
            >
              Traceability
            </a>
            <a 
              href="/#contact" 
              className="text-earth-700 dark:text-earth-300 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Cart, Theme Toggle and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link 
              to="/cart" 
              className="relative p-2 text-earth-700 hover:text-terracotta-600 transition-colors dark:text-earth-200 dark:hover:text-terracotta-400"
            >
              <ShoppingCart className="h-6 w-6" />
              {state.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-terracotta-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold dark:bg-terracotta-400">
                  {state.itemCount}
                </span>
              )}
            </Link>
            <button className="bg-terracotta-500 text-white px-6 py-2 rounded-full hover:bg-terracotta-600 transition-colors font-medium shadow-lg dark:bg-terracotta-400 dark:hover:bg-terracotta-500">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-earth-700 dark:text-earth-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-sage-200 dark:border-sage-700 pt-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`transition-colors font-medium py-2 ${
                  isActive('/') ? 'text-terracotta-600 dark:text-terracotta-400' : 'text-earth-700 dark:text-earth-300 hover:text-terracotta-600 dark:hover:text-terracotta-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="/#products" 
                className="text-earth-700 dark:text-earth-300 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <Link 
                to="/products" 
                className={`transition-colors font-medium py-2 ${
                  isActive('/products') ? 'text-terracotta-600 dark:text-terracotta-400' : 'text-earth-700 dark:text-earth-300 hover:text-terracotta-600 dark:hover:text-terracotta-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Product Catalog
              </Link>
              <Link 
                to="/subscription" 
                className={`transition-colors font-medium py-2 ${
                  isActive('/subscription') ? 'text-terracotta-600 dark:text-terracotta-400' : 'text-earth-700 dark:text-earth-300 hover:text-terracotta-600 dark:hover:text-terracotta-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Subscription
              </Link>
              <a 
                href="/#story" 
                className="text-earth-700 dark:text-earth-300 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </a>
              <a 
                href="/#traceability" 
                className="text-earth-700 dark:text-earth-300 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Traceability
              </a>
              <a 
                href="/#contact" 
                className="text-earth-700 dark:text-earth-300 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              
              {/* Mobile Theme Toggle and Cart */}
              <div className="flex items-center justify-between pt-4 border-t border-sage-200 dark:border-sage-700">
                <div className="flex items-center gap-2">
                  <span className="text-earth-700 dark:text-earth-300 text-sm font-medium">Theme:</span>
                  <ThemeToggle />
                </div>
                <Link 
                  to="/cart" 
                  className="flex items-center gap-2 text-earth-700 dark:text-earth-300 hover:text-terracotta-600 dark:hover:text-terracotta-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Cart ({state.itemCount})</span>
                </Link>
              </div>
              
              <button 
                className="bg-terracotta-500 dark:bg-terracotta-400 text-white px-6 py-3 rounded-full hover:bg-terracotta-600 dark:hover:bg-terracotta-500 transition-colors font-medium w-full mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
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