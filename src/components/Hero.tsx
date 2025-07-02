
import React from 'react';
import { Milk, Leaf, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-cream-100 to-sage-50 dark:from-background dark:to-card py-12 sm:py-16 lg:py-20 hero-height flex items-center">
      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-responsive-lg order-2 lg:order-1">
            <div className="space-responsive-md">
              <h1 className="text-responsive-4xl font-bold text-earth-800 dark:text-earth-200 leading-tight">
                Pure. Fresh. 
                <span className="text-terracotta-600 dark:text-terracotta-400"> Honest</span> Dairy
              </h1>
              <p className="text-responsive-lg text-earth-600 dark:text-earth-300 leading-relaxed">
                सवेरा की ताजी दूध - Experience the authentic taste of farm-fresh A2 milk, 
                delivered from our trusted farms to your doorstep within hours of milking.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Milk className="h-5 w-5 sm:h-6 sm:w-6 text-terracotta-500 dark:text-terracotta-400 flex-shrink-0" />
                <span className="text-responsive-sm text-earth-700 dark:text-earth-300 font-medium">100% A2 Desi Cow Milk</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-sage-600 dark:text-sage-400 flex-shrink-0" />
                <span className="text-responsive-sm text-earth-700 dark:text-earth-300 font-medium">Certified Organic</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-rose-500 dark:text-rose-400 flex-shrink-0" />
                <span className="text-responsive-sm text-earth-700 dark:text-earth-300 font-medium">Farm to Table in 6 Hours</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="touch-target bg-terracotta-500 dark:bg-terracotta-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-terracotta-600 dark:hover:bg-terracotta-500 transition-colors font-semibold text-responsive-base shadow-lg focus-ring w-full sm:w-auto">
                Start Your Subscription
              </button>
              <button className="touch-target border-2 border-earth-600 dark:border-earth-400 text-earth-600 dark:text-earth-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-earth-600 dark:hover:bg-earth-400 hover:text-white dark:hover:text-earth-800 transition-colors font-semibold text-responsive-base focus-ring w-full sm:w-auto">
                Explore Products
              </button>
            </div>

            {/* Social Proof */}
            <div className="bg-white/70 dark:bg-card/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-sage-200 dark:border-sage-700">
              <p className="text-earth-600 dark:text-earth-300 italic mb-2 text-responsive-sm">
                "हमारे गायों का दूध स्वादिष्ट और पोषक है। SATTVAMILK पर भरोसा करें।"
              </p>
              <p className="text-xs sm:text-sm text-earth-500 dark:text-earth-400">- Ramesh Sharma, Dairy Farmer, Rajasthan</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-terracotta-200 to-sage-200 dark:from-terracotta-800/30 dark:to-sage-800/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <div className="bg-white dark:bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center space-responsive-md">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto bg-gradient-to-br from-terracotta-100 to-cream-200 dark:from-terracotta-900/30 dark:to-cream-900/30 rounded-full flex items-center justify-center">
                  <Milk className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-terracotta-600 dark:text-terracotta-400" />
                </div>
                <h3 className="text-responsive-xl font-bold text-earth-800 dark:text-earth-200">Fresh Delivery</h3>
                <p className="text-earth-600 dark:text-earth-300 text-responsive-sm">
                  Every morning at 6 AM, fresh A2 milk from our partner farms reaches your doorstep
                </p>
                <div className="bg-sage-50 dark:bg-sage-900/30 rounded-xl p-3 sm:p-4">
                  <p className="text-2xl sm:text-3xl font-bold text-terracotta-600 dark:text-terracotta-400">₹85</p>
                  <p className="text-xs sm:text-sm text-earth-600 dark:text-earth-400">per litre | Organic A2 Milk</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements - Hidden on very small screens */}
            <div className="hidden sm:block absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white dark:bg-card rounded-full p-2 sm:p-4 shadow-lg">
              <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-sage-600 dark:text-sage-400" />
            </div>
            <div className="hidden sm:block absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-terracotta-500 dark:bg-terracotta-400 rounded-full p-2 sm:p-4 shadow-lg">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
