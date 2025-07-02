import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, MapPin, Phone, Mail, Calendar, Package } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const OrderSuccess = () => {
  const location = useLocation();
  const { orderId, customerInfo, orderTotal } = location.state || {};

  if (!orderId) {
    return (
      <div className="min-h-screen bg-cream-50 dark:bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-bold text-earth-800 dark:text-earth-200">Order not found</h1>
            <Link to="/" className="text-terracotta-600 dark:text-terracotta-400 hover:underline text-sm sm:text-base">
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="bg-green-100 dark:bg-green-900/30 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-earth-800 dark:text-earth-200 mb-2">Order Placed Successfully!</h1>
            <p className="text-earth-600 dark:text-earth-300 text-sm sm:text-base">Thank you for choosing SattvaMilk for your fresh dairy needs</p>
          </div>

          {/* Order Details */}
          <div className="bg-white dark:bg-card rounded-xl p-4 sm:p-6 shadow-sm border border-sage-200 dark:border-sage-700 mb-4 sm:mb-6">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Package className="h-4 w-4 sm:h-5 sm:w-5 text-terracotta-600 dark:text-terracotta-400" />
              <h3 className="text-lg sm:text-xl font-bold text-earth-800 dark:text-earth-200">Order Details</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div>
                <p className="text-xs sm:text-sm text-sage-600 dark:text-sage-400">Order ID</p>
                <p className="font-bold text-earth-800 dark:text-earth-200 text-sm sm:text-base">{orderId}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-sage-600 dark:text-sage-400">Order Total</p>
                <p className="font-bold text-terracotta-600 dark:text-terracotta-400 text-lg sm:text-xl">₹{orderTotal}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-sage-600 dark:text-sage-400">Expected Delivery</p>
                <p className="font-medium text-earth-800 dark:text-earth-200 text-sm sm:text-base">Tomorrow, 6:00 AM - 8:00 AM</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-sage-600 dark:text-sage-400">Payment Method</p>
                <p className="font-medium text-earth-800 dark:text-earth-200 text-sm sm:text-base">
                  {customerInfo?.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Card Payment'}
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-white dark:bg-card rounded-xl p-4 sm:p-6 shadow-sm border border-sage-200 dark:border-sage-700 mb-4 sm:mb-6">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-terracotta-600 dark:text-terracotta-400" />
              <h3 className="text-lg sm:text-xl font-bold text-earth-800 dark:text-earth-200">Delivery Information</h3>
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              <div>
                <p className="text-xs sm:text-sm text-sage-600 dark:text-sage-400">Delivery Address</p>
                <p className="font-medium text-earth-800 dark:text-earth-200 text-sm sm:text-base">
                  {customerInfo?.firstName} {customerInfo?.lastName}<br />
                  {customerInfo?.address}<br />
                  {customerInfo?.city}, {customerInfo?.state} - {customerInfo?.pincode}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <p className="text-xs sm:text-sm text-sage-600 dark:text-sage-400">Phone</p>
                  <p className="font-medium text-earth-800 dark:text-earth-200 text-sm sm:text-base">{customerInfo?.phone}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-sage-600 dark:text-sage-400">Email</p>
                  <p className="font-medium text-earth-800 dark:text-earth-200 text-sm sm:text-base">{customerInfo?.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-terracotta-50 to-sage-50 dark:from-terracotta-900/20 dark:to-sage-900/20 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-terracotta-100 dark:border-terracotta-700">
            <h3 className="text-lg sm:text-xl font-bold text-earth-800 dark:text-earth-200 mb-3 sm:mb-4">What's Next?</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="bg-terracotta-500 dark:bg-terracotta-400 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-medium text-earth-800 dark:text-earth-200 text-sm sm:text-base">Order Confirmation</p>
                  <p className="text-xs sm:text-sm text-earth-600 dark:text-earth-300">You'll receive an SMS and email confirmation shortly</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="bg-terracotta-500 dark:bg-terracotta-400 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-medium text-earth-800 dark:text-earth-200 text-sm sm:text-base">Fresh Preparation</p>
                  <p className="text-xs sm:text-sm text-earth-600 dark:text-earth-300">Your dairy products will be freshly prepared tonight</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="bg-terracotta-500 dark:bg-terracotta-400 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-medium text-earth-800 dark:text-earth-200 text-sm sm:text-base">Morning Delivery</p>
                  <p className="text-xs sm:text-sm text-earth-600 dark:text-earth-300">Fresh delivery between 6:00 AM - 8:00 AM tomorrow</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/products" className="flex-1">
              <Button className="w-full bg-terracotta-500 dark:bg-terracotta-400 hover:bg-terracotta-600 dark:hover:bg-terracotta-500 text-white text-sm sm:text-base py-2.5 sm:py-3">
                Order More Products
              </Button>
            </Link>
            <Link to="/subscription" className="flex-1">
              <Button variant="outline" className="w-full border-sage-300 dark:border-sage-600 text-sage-700 dark:text-sage-300 hover:bg-sage-50 dark:hover:bg-sage-800 text-sm sm:text-base py-2.5 sm:py-3">
                Set Up Subscription
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderSuccess;