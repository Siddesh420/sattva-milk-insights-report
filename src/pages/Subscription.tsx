
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
    <div className="min-h-screen bg-cream-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-terracotta-50 to-sage-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-earth-800 mb-4">
            Fresh Dairy <span className="text-terracotta-600">Subscriptions</span>
          </h1>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto mb-8">
            सदस्यता सेवा - Never run out of fresh, pure dairy products. 
            Get regular deliveries of our finest organic dairy straight to your doorstep.
          </p>
          <div className="flex items-center justify-center gap-6 text-sage-600">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-terracotta-600" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-terracotta-600" />
              <span>Flexible Schedule</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-terracotta-600" />
              <span>Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-earth-800 mb-4">Choose Your Plan</h2>
            <p className="text-earth-600 max-w-2xl mx-auto">
              Select the subscription that fits your family's needs. 
              All plans include our freshest products with convenient delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl border-2 p-8 relative transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? 'border-terracotta-500 shadow-lg transform scale-105'
                    : 'border-sage-200 hover:border-sage-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-terracotta-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    plan.popular ? 'bg-terracotta-100' : 'bg-sage-100'
                  }`}>
                    <plan.icon className={`h-8 w-8 ${
                      plan.popular ? 'text-terracotta-600' : 'text-sage-600'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold text-earth-800 mb-1">{plan.name}</h3>
                  <p className="text-sage-600 font-medium">{plan.hindi}</p>
                  <p className="text-sm text-earth-500 mt-2">{plan.frequency}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-terracotta-600">₹{plan.price}</span>
                    <span className="text-lg text-earth-500 line-through">₹{plan.originalPrice}</span>
                  </div>
                  <p className="text-green-600 font-medium text-sm">Save {plan.savings}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-earth-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleSubscribe(plan.id)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-terracotta-500 hover:bg-terracotta-600 text-white'
                      : 'border-2 border-sage-300 text-sage-700 hover:bg-sage-50 bg-transparent'
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
      <section className="py-16 bg-gradient-to-r from-sage-50 to-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-earth-800 mb-4">How It Works</h2>
            <p className="text-earth-600">Simple steps to fresh dairy delivered to your door</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
                <div className="w-12 h-12 bg-terracotta-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-earth-800 mb-2">{item.title}</h3>
                <p className="text-earth-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-earth-800 mb-4">Why Subscribe?</h2>
            <p className="text-earth-600">Exclusive benefits for our subscription members</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
              <div key={index} className="text-center p-6 bg-white rounded-xl border border-sage-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-earth-800 mb-2">{benefit.title}</h3>
                <p className="text-earth-600 text-sm">{benefit.description}</p>
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
