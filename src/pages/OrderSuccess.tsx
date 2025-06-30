
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
      <div className="min-h-screen bg-cream-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-earth-800">Order not found</h1>
            <Link to="/" className="text-terracotta-600 hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-earth-800 mb-2">Order Placed Successfully!</h1>
            <p className="text-earth-600">Thank you for choosing Sattvamilk for your fresh dairy needs</p>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-sage-200 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Package className="h-5 w-5 text-terracotta-600" />
              <h3 className="text-xl font-bold text-earth-800">Order Details</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-sage-600">Order ID</p>
                <p className="font-bold text-earth-800">{orderId}</p>
              </div>
              <div>
                <p className="text-sm text-sage-600">Order Total</p>
                <p className="font-bold text-terracotta-600 text-xl">₹{orderTotal}</p>
              </div>
              <div>
                <p className="text-sm text-sage-600">Expected Delivery</p>
                <p className="font-medium text-earth-800">Tomorrow, 6:00 AM - 8:00 AM</p>
              </div>
              <div>
                <p className="text-sm text-sage-600">Payment Method</p>
                <p className="font-medium text-earth-800">
                  {customerInfo?.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Card Payment'}
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-sage-200 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-terracotta-600" />
              <h3 className="text-xl font-bold text-earth-800">Delivery Information</h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm text-sage-600">Delivery Address</p>
                <p className="font-medium text-earth-800">
                  {customerInfo?.firstName} {customerInfo?.lastName}<br />
                  {customerInfo?.address}<br />
                  {customerInfo?.city}, {customerInfo?.state} - {customerInfo?.pincode}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-sage-600">Phone</p>
                  <p className="font-medium text-earth-800">{customerInfo?.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-sage-600">Email</p>
                  <p className="font-medium text-earth-800">{customerInfo?.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-terracotta-50 to-sage-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-earth-800 mb-4">What's Next?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-terracotta-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <p className="font-medium text-earth-800">Order Confirmation</p>
                  <p className="text-sm text-earth-600">You'll receive an SMS and email confirmation shortly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-terracotta-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <p className="font-medium text-earth-800">Fresh Preparation</p>
                  <p className="text-sm text-earth-600">Your dairy products will be freshly prepared tonight</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-terracotta-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <p className="font-medium text-earth-800">Morning Delivery</p>
                  <p className="text-sm text-earth-600">Fresh delivery between 6:00 AM - 8:00 AM tomorrow</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="flex-1">
              <Button className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white">
                Order More Products
              </Button>
            </Link>
            <Link to="/subscription" className="flex-1">
              <Button variant="outline" className="w-full border-sage-300 text-sage-700 hover:bg-sage-50">
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
