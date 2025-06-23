
import React from 'react';
import { Milk, Leaf, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-cream-100 to-sage-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-earth-800 leading-tight">
                Pure. Fresh. 
                <span className="text-terracotta-600"> Honest</span> Dairy
              </h1>
              <p className="text-xl text-earth-600 leading-relaxed">
                सवेरा की ताजी दूध - Experience the authentic taste of farm-fresh A2 milk, 
                delivered from our trusted farms to your doorstep within hours of milking.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Milk className="h-6 w-6 text-terracotta-500" />
                <span className="text-earth-700 font-medium">100% A2 Desi Cow Milk</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-6 w-6 text-sage-600" />
                <span className="text-earth-700 font-medium">Certified Organic</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-rose-500" />
                <span className="text-earth-700 font-medium">Farm to Table in 6 Hours</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-terracotta-500 text-white px-8 py-4 rounded-full hover:bg-terracotta-600 transition-colors font-semibold text-lg shadow-lg">
                Start Your Subscription
              </button>
              <button className="border-2 border-earth-600 text-earth-600 px-8 py-4 rounded-full hover:bg-earth-600 hover:text-white transition-colors font-semibold text-lg">
                Explore Products
              </button>
            </div>

            {/* Social Proof */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-sage-200">
              <p className="text-earth-600 italic mb-2">
                "हमारे गायों का दूध स्वादिष्ट और पोषक है। SATTVAMILK पर भरोसा करें।"
              </p>
              <p className="text-sm text-earth-500">- Ramesh Sharma, Dairy Farmer, Rajasthan</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-terracotta-200 to-sage-200 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 text-center space-y-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-terracotta-100 to-cream-200 rounded-full flex items-center justify-center">
                  <Milk className="h-16 w-16 text-terracotta-600" />
                </div>
                <h3 className="text-2xl font-bold text-earth-800">Fresh Delivery</h3>
                <p className="text-earth-600">
                  Every morning at 6 AM, fresh A2 milk from our partner farms reaches your doorstep
                </p>
                <div className="bg-sage-50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-terracotta-600">₹85</p>
                  <p className="text-sm text-earth-600">per litre | Organic A2 Milk</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <Leaf className="h-8 w-8 text-sage-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-terracotta-500 rounded-full p-4 shadow-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
