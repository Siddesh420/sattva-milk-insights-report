
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cream-100 to-sage-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-earth-800">
                Get in <span className="text-terracotta-600">Touch</span>
              </h2>
              <p className="text-lg text-earth-600">
                संपर्क करें - Ready to experience pure, honest dairy? 
                Contact us for fresh deliveries and subscription plans.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-terracotta-500 text-white rounded-full p-3">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-earth-800">Call Us</h3>
                  <p className="text-earth-600">+91 98765 43210</p>
                  <p className="text-sm text-earth-500">Daily 6 AM - 8 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-sage-600 text-white rounded-full p-3">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-earth-800">Email Us</h3>
                  <p className="text-earth-600">hello@sattvamilk.com</p>
                  <p className="text-sm text-earth-500">24/7 Support</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-terracotta-500 text-white rounded-full p-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-earth-800">Visit Us</h3>
                  <p className="text-earth-600">123 Dairy Farm Road, Jaipur</p>
                  <p className="text-sm text-earth-500">Rajasthan 302001</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-sage-600 text-white rounded-full p-3">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-earth-800">Delivery Hours</h3>
                  <p className="text-earth-600">Morning: 6 AM - 9 AM</p>
                  <p className="text-sm text-earth-500">Evening: 5 PM - 7 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-sage-200">
            <h3 className="text-2xl font-bold text-earth-800 mb-6">Start Your Subscription</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-earth-700 font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-sage-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                    placeholder="राम"
                  />
                </div>
                <div>
                  <label className="block text-earth-700 font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-sage-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                    placeholder="शर्मा"
                  />
                </div>
              </div>

              <div>
                <label className="block text-earth-700 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-sage-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-earth-700 font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-sage-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                  placeholder="ram.sharma@email.com"
                />
              </div>

              <div>
                <label className="block text-earth-700 font-medium mb-2">Delivery Address</label>
                <textarea 
                  rows={3}
                  className="w-full px-4 py-3 border border-sage-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                  placeholder="House No., Street, Area, City..."
                />
              </div>

              <div>
                <label className="block text-earth-700 font-medium mb-2">Preferred Products</label>
                <select className="w-full px-4 py-3 border border-sage-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500">
                  <option>A2 Cow Milk (1L Daily)</option>
                  <option>A2 Cow Milk + Buttermilk</option>
                  <option>Complete Dairy Package</option>
                  <option>Custom Selection</option>
                </select>
              </div>

              <button className="w-full bg-terracotta-500 text-white py-4 rounded-xl hover:bg-terracotta-600 transition-colors font-semibold text-lg">
                Start My Subscription
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
