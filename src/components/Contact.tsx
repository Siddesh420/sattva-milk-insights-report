import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cream-100 to-sage-50 dark:from-card dark:to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-earth-800 dark:text-earth-200">
                Get in <span className="text-terracotta-600 dark:text-terracotta-400">Touch</span>
              </h2>
              <p className="text-lg text-earth-600 dark:text-earth-300">
                संपर्क करें - Ready to experience pure, honest dairy? 
                Contact us for fresh deliveries and subscription plans.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-terracotta-500 dark:bg-terracotta-400 text-white rounded-full p-3">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-earth-800 dark:text-earth-200">Call Us</h3>
                  <p className="text-earth-600 dark:text-earth-300">+91 98765 43210</p>
                  <p className="text-sm text-earth-500 dark:text-earth-400">Daily 6 AM - 8 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-sage-600 dark:bg-sage-500 text-white rounded-full p-3">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-earth-800 dark:text-earth-200">Email Us</h3>
                  <p className="text-earth-600 dark:text-earth-300">hello@sattvamilk.com</p>
                  <p className="text-sm text-earth-500 dark:text-earth-400">24/7 Support</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-terracotta-500 dark:bg-terracotta-400 text-white rounded-full p-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-earth-800 dark:text-earth-200">Visit Us</h3>
                  <p className="text-earth-600 dark:text-earth-300">123 Dairy Farm Road, Jaipur</p>
                  <p className="text-sm text-earth-500 dark:text-earth-400">Rajasthan 302001</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-sage-600 dark:bg-sage-500 text-white rounded-full p-3">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-earth-800 dark:text-earth-200">Delivery Hours</h3>
                  <p className="text-earth-600 dark:text-earth-300">Morning: 6 AM - 9 AM</p>
                  <p className="text-sm text-earth-500 dark:text-earth-400">Evening: 5 PM - 7 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-xl border border-sage-200 dark:border-sage-700">
            <h3 className="text-2xl font-bold text-earth-800 dark:text-earth-200 mb-6">Start Your Subscription</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-earth-700 dark:text-earth-300 font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-sage-300 dark:border-sage-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 dark:focus:ring-terracotta-400 bg-white dark:bg-background text-earth-800 dark:text-earth-200"
                    placeholder="राम"
                  />
                </div>
                <div>
                  <label className="block text-earth-700 dark:text-earth-300 font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-sage-300 dark:border-sage-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 dark:focus:ring-terracotta-400 bg-white dark:bg-background text-earth-800 dark:text-earth-200"
                    placeholder="शर्मा"
                  />
                </div>
              </div>

              <div>
                <label className="block text-earth-700 dark:text-earth-300 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-sage-300 dark:border-sage-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 dark:focus:ring-terracotta-400 bg-white dark:bg-background text-earth-800 dark:text-earth-200"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-earth-700 dark:text-earth-300 font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-sage-300 dark:border-sage-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 dark:focus:ring-terracotta-400 bg-white dark:bg-background text-earth-800 dark:text-earth-200"
                  placeholder="ram.sharma@email.com"
                />
              </div>

              <div>
                <label className="block text-earth-700 dark:text-earth-300 font-medium mb-2">Delivery Address</label>
                <textarea 
                  rows={3}
                  className="w-full px-4 py-3 border border-sage-300 dark:border-sage-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 dark:focus:ring-terracotta-400 bg-white dark:bg-background text-earth-800 dark:text-earth-200"
                  placeholder="House No., Street, Area, City..."
                />
              </div>

              <div>
                <label className="block text-earth-700 dark:text-earth-300 font-medium mb-2">Preferred Products</label>
                <select className="w-full px-4 py-3 border border-sage-300 dark:border-sage-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-500 dark:focus:ring-terracotta-400 bg-white dark:bg-background text-earth-800 dark:text-earth-200">
                  <option>A2 Cow Milk (1L Daily)</option>
                  <option>A2 Cow Milk + Buttermilk</option>
                  <option>Complete Dairy Package</option>
                  <option>Custom Selection</option>
                </select>
              </div>

              <button className="w-full bg-terracotta-500 dark:bg-terracotta-400 text-white py-4 rounded-xl hover:bg-terracotta-600 dark:hover:bg-terracotta-500 transition-colors font-semibold text-lg">
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