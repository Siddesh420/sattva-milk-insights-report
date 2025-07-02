import React, { useState } from 'react';
import { Check, Calendar, Truck, Star, Crown, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState('weekly');

  const plans = [
    {
      id: 'daily',
      name: 'Daily Fresh',
      hindi: 'दैनिक ताजा',
      price: 2500,
      originalPrice: 2800,
      frequency: 'Daily delivery',
      icon: Zap,
      popular: false,
      features: [
        '1L Fresh Cow Milk daily',
        'Morning delivery (6-8 AM)',
        'Skip or pause anytime',
        'Free delivery',
        'Quality guarantee'
      ],
      savings: '₹300/month'
    },
    {
      id: 'weekly',
      name: 'Weekly Essentials',
      hindi: 'साप्ताहिक आवश्यक',
      price: 1800,
      originalPrice: 2100,
      frequency: 'Weekly delivery',
      icon: Star,
      popular: true,
      features: [
        '7L Cow Milk + 500g Paneer',
        '2x weekly delivery',
        'Flexible scheduling',
        'Free delivery',
        '24/7 customer support',
        'Premium packaging'
      ],
      savings: '₹300/week'
    },
    {
      id: 'monthly',
      name: 'Family Premium',
      hindi: 'पारिवारिक प्रीमियम',
      price: 6500,
      originalPrice: 7500,
      frequency: 'Monthly box',
      icon: Crown,
      popular: false,
      features: [
        'Complete dairy bundle',
        '15L Milk + Ghee + Paneer + Curd',
        'Monthly delivery',
        'Premium products only',
        'Free delivery',
        'Nutrition consultation'
      ],
      savings: '₹1000/month'
    }
  ];

  const handleSubscribe = (planId: string) => {
    // In a real app, this would integrate with payment processing
    alert(`Subscribing to ${plans.find(p => p.id === planId)?.name} plan!`);
  };

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-8 sm:py-16 bg-gradient-to-r from-terracotta-50 to-sage-50 dark:from-card dark:to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-earth-800 dark:text-earth-200 mb-4">
            Fresh Dairy <span className="text-terracotta-600 dark:text-terracotta-400">Subscriptions</span>
          </h1>
          <p className="text-base sm:text-xl text-earth-600 dark:text-earth-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            सदस्यता सेवा - Never run out of fresh, pure dairy products. 
            Get regular deliveries of our finest organic dairy straight to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sage-600 dark:text-sage-400 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-terracotta-600 dark:text-terracotta-400" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-terracotta-600 dark:text-terracotta-400" />
              <span>Flexible Schedule</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 sm:h-5 sm:w-5 text-terracotta-600 dark:text-terracotta-400" />
              <span>Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-earth-800 dark:text-earth-200 mb-4">Choose Your Plan</h2>
            <p className="text-earth-600 dark:text-earth-300 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Select the subscription that fits your family's needs. 
              All plans include our freshest products with convenient delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white dark:bg-card rounded-2xl border-2 p-4 sm:p-6 lg:p-8 relative transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? 'border-terracotta-500 dark:border-terracotta-400 shadow-lg lg:transform lg:scale-105'
                    : 'border-sage-200 dark:border-sage-700 hover:border-sage-300 dark:hover:border-sage-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-terracotta-500 dark:bg-terracotta-400 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl flex items-center justify-center ${
                    plan.popular ? 'bg-terracotta-100 dark:bg-terracotta-900/30' : 'bg-sage-100 dark:bg-sage-900/30'
                  }`}>
                    <plan.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${
                      plan.popular ? 'text-terracotta-600 dark:text-terracotta-400' : 'text-sage-600 dark:text-sage-400'
                    }`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-earth-800 dark:text-earth-200 mb-1">{plan.name}</h3>
                  <p className="text-sage-600 dark:text-sage-400 font-medium text-sm sm:text-base">{plan.hindi}</p>
                  <p className="text-xs sm:text-sm text-earth-500 dark:text-earth-400 mt-2">{plan.frequency}</p>
                </div>

                <div className="text-center mb-4 sm:mb-6">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-2xl sm:text-4xl font-bold text-terracotta-600 dark:text-terracotta-400">₹{plan.price}</span>
                    <span className="text-sm sm:text-lg text-earth-500 dark:text-earth-400 line-through">₹{plan.originalPrice}</span>
                  </div>
                  <p className="text-green-600 dark:text-green-400 font-medium text-xs sm:text-sm">Save {plan.savings}</p>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-earth-700 dark:text-earth-300 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleSubscribe(plan.id)}
                  className={`w-full py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                    plan.popular
                      ? 'bg-terracotta-500 dark:bg-terracotta-400 hover:bg-terracotta-600 dark:hover:bg-terracotta-500 text-white'
                      : 'border-2 border-sage-300 dark:border-sage-600 text-sage-700 dark:text-sage-300 hover:bg-sage-50 dark:hover:bg-sage-800 bg-transparent'
                  }`}
                >
                  Start Subscription
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-8 sm:py-16 bg-gradient-to-r from-sage-50 to-cream-50 dark:from-card dark:to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-earth-800 dark:text-earth-200 mb-4">How It Works</h2>
            <p className="text-earth-600 dark:text-earth-300 text-sm sm:text-base">Simple steps to fresh dairy delivered to your door</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '1',
                title: 'Choose Plan',
                description: 'Select the subscription that fits your needs'
              },
              {
                step: '2',
                title: 'Schedule Delivery',
                description: 'Pick your preferred delivery days and times'
              },
              {
                step: '3',
                title: 'Fresh Preparation',
                description: 'We prepare your order fresh every delivery day'
              },
              {
                step: '4',
                title: 'Doorstep Delivery',
                description: 'Receive fresh dairy products at your door'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-terracotta-500 dark:bg-terracotta-400 text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg mx-auto mb-3 sm:mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-earth-800 dark:text-earth-200 mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-earth-600 dark:text-earth-300 text-xs sm:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-earth-800 dark:text-earth-200 mb-4">Why Subscribe?</h2>
            <p className="text-earth-600 dark:text-earth-300 text-sm sm:text-base">Exclusive benefits for our subscription members</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: '💰',
                title: 'Save More',
                description: 'Up to 15% savings compared to one-time purchases'
              },
              {
                icon: '🚚',
                title: 'Never Run Out',
                description: 'Regular deliveries ensure you always have fresh dairy'
              },
              {
                icon: '⏰',
                title: 'Total Flexibility',
                description: 'Skip, pause, or modify your subscription anytime'
              },
              {
                icon: '🎁',
                title: 'Exclusive Products',
                description: 'Access to premium and seasonal dairy products'
              },
              {
                icon: '📞',
                title: 'Priority Support',
                description: '24/7 customer support for subscribers'
              },
              {
                icon: '🌱',
                title: 'Eco-Friendly',
                description: 'Reusable packaging and reduced delivery trips'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-white dark:bg-card rounded-xl border border-sage-200 dark:border-sage-700 hover:shadow-lg transition-shadow">
                <div className="text-2xl sm:text-4xl mb-3 sm:mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-earth-800 dark:text-earth-200 mb-2 text-sm sm:text-base">{benefit.title}</h3>
                <p className="text-earth-600 dark:text-earth-300 text-xs sm:text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Subscription;