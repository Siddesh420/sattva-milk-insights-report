import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, CreditCard, Calendar, Lock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const Checkout = () => {
  const { state, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'card'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate order ID
    const orderId = 'ORD' + Date.now();
    
    // Clear cart and navigate to success page
    clearCart();
    navigate('/order-success', { 
      state: { 
        orderId, 
        customerInfo: formData,
        orderTotal: state.total 
      } 
    });
  };

  if (state.items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-earth-800 dark:text-earth-200 mb-2">Checkout</h1>
          <p className="text-earth-600 dark:text-earth-300 text-sm sm:text-base">Complete your order for fresh dairy products</p>
        </div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Customer Information */}
            <div className="bg-white dark:bg-card rounded-xl p-4 sm:p-6 shadow-sm border border-sage-200 dark:border-sage-700">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-terracotta-600 dark:text-terracotta-400" />
                <h3 className="text-lg sm:text-xl font-bold text-earth-800 dark:text-earth-200">Customer Information</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-earth-700 dark:text-earth-300 text-sm sm:text-base">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="mt-1 bg-white dark:bg-background border-sage-300 dark:border-sage-600 text-earth-800 dark:text-earth-200 focus:ring-terracotta-500 dark:focus:ring-terracotta-400 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-earth-700 dark:text-earth-300 text-sm sm:text-base">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="mt-1 bg-white dark:bg-background border-sage-300 dark:border-sage-600 text-earth-800 dark:text-earth-200 focus:ring-terracotta-500 dark:focus:ring-terracotta-400 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-earth-700 dark:text-earth-300 text-sm sm:text-base">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 bg-white dark:bg-background border-sage-300 dark:border-sage-600 text-earth-800 dark:text-earth-200 focus:ring-terracotta-500 dark:focus:ring-terracotta-400 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-earth-700 dark:text-earth-300 text-sm sm:text-base">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1 bg-white dark:bg-background border-sage-300 dark:border-sage-600 text-earth-800 dark:text-earth-200 focus:ring-terracotta-500 dark:focus:ring-terracotta-400 text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white dark:bg-card rounded-xl p-4 sm:p-6 shadow-sm border border-sage-200 dark:border-sage-700">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-terracotta-600 dark:text-terracotta-400" />
                <h3 className="text-lg sm:text-xl font-bold text-earth-800 dark:text-earth-200">Delivery Address</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <Label htmlFor="address" className="text-earth-700 dark:text-earth-300 text-sm sm:text-base">Street Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="mt-1 bg-white dark:bg-background border-sage-300 dark:border-sage-600 text-earth-800 dark:text-earth-200 focus:ring-terracotta-500 dark:focus:ring-terracotta-400 text-sm sm:text-base"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div>
                    <Label htmlFor="city" className="text-earth-700 dark:text-earth-300 text-sm sm:text-base">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-white dark:bg-background border-sage-300 dark:border-sage-600 text-earth-800 dark:text-earth-200 focus:ring-terracotta-500 dark:focus:ring-terracotta-400 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-earth-700 dark:text-earth-300 text-sm sm:text-base">State</Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-white dark:bg-background border-sage-300 dark:border-sage-600 text-earth-800 dark:text-earth-200 focus:ring-terracotta-500 dark:focus:ring-terracotta-400 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode" className="text-earth-700 dark:text-earth-300 text-sm sm:text-base">PIN Code</Label>
                    <Input
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-white dark:bg-background border-sage-300 dark:border-sage-600 text-earth-800 dark:text-earth-200 focus:ring-terracotta-500 dark:focus:ring-terracotta-400 text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white dark:bg-card rounded-xl p-4 sm:p-6 shadow-sm border border-sage-200 dark:border-sage-700">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 text-terracotta-600 dark:text-terracotta-400" />
                <h3 className="text-lg sm:text-xl font-bold text-earth-800 dark:text-earth-200">Payment Method</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    id="card"
                    name="paymentMethod"
                    type="radio"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                    className="text-terracotta-600 dark:text-terracotta-400"
                  />
                  <Label htmlFor="card" className="text-earth-700 dark:text-earth-300 text-sm sm:text-base">Credit/Debit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    id="cod"
                    name="paymentMethod"
                    type="radio"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                    className="text-terracotta-600 dark:text-terracotta-400"
                  />
                  <Label htmlFor="cod" className="text-earth-700 dark:text-earth-300 text-sm sm:text-base">Cash on Delivery</Label>
                </div>
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 p-3 sm:p-4 bg-sage-50 dark:bg-sage-900/20 rounded-lg border border-sage-200 dark:border-sage-700">
                  <div>
                    <Label htmlFor="cardNumber" className="text-earth-700 dark:text-earth-300 text-sm sm:text-base">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      required
                      className="mt-1 bg-white dark:bg-background border-sage-300 dark:border-sage-600 text-earth-800 dark:text-earth-200 text-sm sm:text-base"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <Label htmlFor="expiry" className="text-earth-700 dark:text-earth-300 text-sm sm:text-base">Expiry Date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        required
                        className="mt-1 bg-white dark:bg-background border-sage-300 dark:border-sage-600 text-earth-800 dark:text-earth-200 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="text-earth-700 dark:text-earth-300 text-sm sm:text-base">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        required
                        className="mt-1 bg-white dark:bg-background border-sage-300 dark:border-sage-600 text-earth-800 dark:text-earth-200 text-sm sm:text-base"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white dark:bg-card rounded-xl p-4 sm:p-6 shadow-sm border border-sage-200 dark:border-sage-700 h-fit">
            <h3 className="text-lg sm:text-xl font-bold text-earth-800 dark:text-earth-200 mb-4 sm:mb-6">Order Summary</h3>
            
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              {state.items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <p className="font-medium text-earth-800 dark:text-earth-200 text-sm sm:text-base">{item.name}</p>
                    <p className="text-xs sm:text-sm text-sage-600 dark:text-sage-400">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium text-earth-800 dark:text-earth-200 text-sm sm:text-base">₹{item.price * item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-sage-200 dark:border-sage-700 pt-3 sm:pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-earth-600 dark:text-earth-400 text-sm sm:text-base">Subtotal</span>
                <span className="font-medium text-earth-800 dark:text-earth-200 text-sm sm:text-base">₹{state.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-earth-600 dark:text-earth-400 text-sm sm:text-base">Delivery</span>
                <span className="font-medium text-green-600 dark:text-green-400 text-sm sm:text-base">FREE</span>
              </div>
              <div className="flex justify-between font-bold text-base sm:text-lg pt-2 border-t border-sage-200 dark:border-sage-700">
                <span className="text-earth-800 dark:text-earth-200">Total</span>
                <span className="text-terracotta-600 dark:text-terracotta-400">₹{state.total}</span>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-4 sm:mt-6 bg-terracotta-500 dark:bg-terracotta-400 hover:bg-terracotta-600 dark:hover:bg-terracotta-500 text-white py-2.5 sm:py-3 rounded-xl text-sm sm:text-base"
            >
              <Lock className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Place Order
            </Button>

            <div className="mt-3 sm:mt-4 text-center text-xs text-sage-600 dark:text-sage-400">
              <p>Your payment information is secure and encrypted</p>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;