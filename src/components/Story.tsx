
import React from 'react';
import { MapPin, Clock, Award, Users, Droplets } from 'lucide-react';

const Story = () => {
  return (
    <section id="story" className="py-20 bg-gradient-to-br from-sage-50 to-cream-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-earth-800">
                Our <span className="text-terracotta-600">Heritage</span> Story
              </h2>
              <p className="text-lg text-earth-600">
                हमारी विरासत की कहानी - Born from a deep respect for traditional dairy farming 
                and our sacred relationship with cows, SATTVAMILK represents generations of wisdom.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-sage-200">
                <h3 className="text-xl font-bold text-earth-800 mb-3">
                  गाय माता - Sacred Bond
                </h3>
                <p className="text-earth-600">
                  In Indian culture, cows are revered as mothers who give selflessly. 
                  Our farmers treat each cow with love and respect, ensuring their wellbeing 
                  translates into the purest milk.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-sage-200">
                <h3 className="text-xl font-bold text-earth-800 mb-3">
                  Traditional Methods, Modern Quality
                </h3>
                <p className="text-earth-600">
                  We combine time-honored practices like the bilona method for ghee 
                  with modern quality testing to ensure every product meets the highest standards.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-terracotta-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Users className="h-8 w-8" />
                </div>
                <p className="text-2xl font-bold text-earth-800">50+</p>
                <p className="text-sm text-earth-600">Partner Farmers</p>
              </div>
              <div className="text-center">
                <div className="bg-sage-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Award className="h-8 w-8" />
                </div>
                <p className="text-2xl font-bold text-earth-800">100%</p>
                <p className="text-sm text-earth-600">Organic Certified</p>
              </div>
            </div>
          </div>

          {/* Right Side - Journey */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-earth-800 mb-8">Farm to Table Journey</h3>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="bg-terracotta-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="bg-white rounded-xl p-4 flex-1 border border-sage-200">
                  <h4 className="font-bold text-earth-800 mb-2">5:00 AM - Morning Milking</h4>
                  <p className="text-earth-600 text-sm">
                    Our partner farmers begin the day with traditional prayers and fresh milking 
                    from happy, well-fed A2 desi cows.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="bg-sage-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="bg-white rounded-xl p-4 flex-1 border border-sage-200">
                  <h4 className="font-bold text-earth-800 mb-2">6:00 AM - Quality Testing</h4>
                  <p className="text-earth-600 text-sm">
                    Every batch undergoes rigorous testing for purity, fat content, 
                    and absence of adulterants in our certified labs.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="bg-terracotta-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Droplets className="h-6 w-6" />
                </div>
                <div className="bg-white rounded-xl p-4 flex-1 border border-sage-200">
                  <h4 className="font-bold text-earth-800 mb-2">8:00 AM - Fresh Delivery</h4>
                  <p className="text-earth-600 text-sm">
                    Within 3 hours of milking, fresh milk reaches your doorstep 
                    in recyclable glass bottles, preserving taste and nutrition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
