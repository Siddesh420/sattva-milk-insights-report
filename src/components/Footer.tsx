
import React from 'react';
import { Milk, Facebook, Instagram, Twitter, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-earth-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/585f336f-d61c-49cf-b469-fbb6fd759961.png" 
                alt="Sattvamilk Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">SATTVAMILK</h3>
                <p className="text-sm text-cream-200">सत्य दूध</p>
              </div>
            </div>
            <p className="text-cream-200 text-sm">
              Pure, honest dairy from our heart to yours. 
              Experience the authentic taste of traditional farming.
            </p>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 text-cream-300 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-cream-300 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-cream-300 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Products</h4>
            <ul className="space-y-2 text-cream-200 text-sm">
              <li className="hover:text-white cursor-pointer">A2 Cow Milk</li>
              <li className="hover:text-white cursor-pointer">Fresh Buttermilk</li>
              <li className="hover:text-white cursor-pointer">Organic Ghee</li>
              <li className="hover:text-white cursor-pointer">Malai Paneer</li>
              <li className="hover:text-white cursor-pointer">Greek Yogurt</li>
              <li className="hover:text-white cursor-pointer">Probiotic Curd</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Company</h4>
            <ul className="space-y-2 text-cream-200 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Farmers</li>
              <li className="hover:text-white cursor-pointer">Quality Promise</li>
              <li className="hover:text-white cursor-pointer">Sustainability</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Support</h4>
            <ul className="space-y-2 text-cream-200 text-sm">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Delivery Info</li>
              <li className="hover:text-white cursor-pointer">Returns</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Track Order</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-earth-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-cream-200 text-sm">
              <span>© 2024 SATTVAMILK. All rights reserved.</span>
              <span>|</span>
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span>|</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
            </div>
            <div className="flex items-center space-x-2 text-cream-200 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Proudly serving from Rajasthan, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
