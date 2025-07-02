import React from 'react';
import { QrCode, Smartphone, Shield, CheckCircle } from 'lucide-react';

const Traceability = () => {
  return (
    <section id="traceability" className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-earth-800 dark:text-earth-200 mb-4">
            <span className="text-terracotta-600 dark:text-terracotta-400">Complete</span> Transparency
          </h2>
          <p className="text-xl text-earth-600 dark:text-earth-300 max-w-3xl mx-auto">
            ट्रेसेबिलिटी की गारंटी - Every product carries a unique QR code connecting you 
            directly to its source farm, ensuring complete transparency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - QR Demo */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-cream-50 to-sage-50 dark:from-card dark:to-background rounded-2xl p-8 border border-sage-200 dark:border-sage-700">
              <div className="text-center space-y-6">
                <div className="bg-white dark:bg-card rounded-xl p-6 mx-auto w-fit shadow-lg border border-sage-100 dark:border-sage-700">
                  <QrCode className="h-24 w-24 text-earth-800 dark:text-earth-200 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-earth-800 dark:text-earth-200">Scan & Discover</h3>
                <p className="text-earth-600 dark:text-earth-300">
                  Simply scan the QR code on your milk bottle to reveal its complete journey
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sage-50 dark:bg-sage-900/30 rounded-xl p-6 text-center border border-sage-100 dark:border-sage-700">
                <Shield className="h-8 w-8 text-sage-600 dark:text-sage-400 mx-auto mb-3" />
                <h4 className="font-bold text-earth-800 dark:text-earth-200 mb-2">Lab Certified</h4>
                <p className="text-sm text-earth-600 dark:text-earth-400">FSSAI & Organic Certified</p>
              </div>
              <div className="bg-terracotta-50 dark:bg-terracotta-900/30 rounded-xl p-6 text-center border border-terracotta-100 dark:border-terracotta-700">
                <CheckCircle className="h-8 w-8 text-terracotta-600 dark:text-terracotta-400 mx-auto mb-3" />
                <h4 className="font-bold text-earth-800 dark:text-earth-200 mb-2">Verified Source</h4>
                <p className="text-sm text-earth-600 dark:text-earth-400">Direct from Partner Farms</p>
              </div>
            </div>
          </div>

          {/* Right Side - Information Display */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-earth-800 dark:text-earth-200 mb-6">What You'll See:</h3>
            
            {/* Sample Traceability Info */}
            <div className="bg-white dark:bg-card border border-sage-200 dark:border-sage-700 rounded-xl p-6 space-y-4">
              <div className="flex items-center space-x-3 pb-4 border-b border-sage-100 dark:border-sage-700">
                <Smartphone className="h-6 w-6 text-terracotta-600 dark:text-terracotta-400" />
                <h4 className="text-lg font-bold text-earth-800 dark:text-earth-200">Farm Details</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-earth-600 dark:text-earth-400">Farmer Name:</span>
                  <span className="font-medium text-earth-800 dark:text-earth-200">श्री रमेश शर्मा</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-earth-600 dark:text-earth-400">Farm Location:</span>
                  <span className="font-medium text-earth-800 dark:text-earth-200">Jaipur, Rajasthan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-earth-600 dark:text-earth-400">Milking Date:</span>
                  <span className="font-medium text-earth-800 dark:text-earth-200">Today, 5:30 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-earth-600 dark:text-earth-400">Cow Breed:</span>
                  <span className="font-medium text-earth-800 dark:text-earth-200">Gir A2 Desi</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-card border border-sage-200 dark:border-sage-700 rounded-xl p-6 space-y-4">
              <div className="flex items-center space-x-3 pb-4 border-b border-sage-100 dark:border-sage-700">
                <Shield className="h-6 w-6 text-sage-600 dark:text-sage-400" />
                <h4 className="text-lg font-bold text-earth-800 dark:text-earth-200">Quality Tests</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-earth-600 dark:text-earth-400">Fat Content:</span>
                  <span className="font-medium text-earth-800 dark:text-earth-200">4.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-earth-600 dark:text-earth-400">Protein:</span>
                  <span className="font-medium text-earth-800 dark:text-earth-200">3.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-earth-600 dark:text-earth-400">Adulterants:</span>
                  <span className="font-medium text-sage-600 dark:text-sage-400">None Detected ✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-earth-600 dark:text-earth-400">Antibiotics:</span>
                  <span className="font-medium text-sage-600 dark:text-sage-400">None Detected ✓</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-terracotta-50 to-sage-50 dark:from-terracotta-900/20 dark:to-sage-900/20 rounded-xl p-6 border border-terracotta-100 dark:border-terracotta-700">
              <h4 className="font-bold text-earth-800 dark:text-earth-200 mb-3">Farm-to-Table Promise</h4>
              <p className="text-earth-600 dark:text-earth-300 text-sm">
                "हमारी गाय माता खुश और स्वस्थ हैं। उनका दूध प्राकृतिक रूप से मिठास से भरपूर है।" 
                - Direct message from your farmer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traceability;