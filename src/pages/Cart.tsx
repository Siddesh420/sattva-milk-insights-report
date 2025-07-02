import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';

const Cart = () => {
  const { state, updateQuantity, removeItem } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-cream-50 dark:bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <div className="text-center py-8 sm:py-16">
            <div className="bg-white/80 dark:bg-card/80 rounded-2xl p-6 sm:p-8 max-w-md mx-auto border border-sage-200 dark:border-sage-700">
              <ShoppingBag className="h-12 w-12 sm:h-16 sm:w-16 text-sage-400 dark:text-sage-500 mx-auto mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold text-earth-800 dark:text-earth-200 mb-4">Your Cart is Empty</h2>
              <p className="text-earth-600 dark:text-earth-300 mb-6 text-sm sm:text-base">Add some fresh dairy products to get started!</p>
              <Link to="/products">
                <Button className="bg-terracotta-500 dark:bg-terracotta-400 hover:bg-terracotta-600 dark:hover:bg-terracotta-500 text-white w-full sm:w-auto">
                  Browse Products
                </Button>
              </Link>
            </div>
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
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-earth-800 dark:text-earth-200 mb-2">Shopping Cart</h1>
          <p className="text-earth-600 dark:text-earth-300 text-sm sm:text-base">Review your fresh dairy products</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="bg-white dark:bg-card rounded-xl p-4 sm:p-6 shadow-sm border border-sage-200 dark:border-sage-700">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-cream-100 dark:bg-cream-900/30 rounded-lg p-2 sm:p-3 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg sm:text-2xl">🥛</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-earth-800 dark:text-earth-200 text-base sm:text-lg">{item.name}</h3>
                    <p className="text-sage-600 dark:text-sage-400 text-xs sm:text-sm">{item.hindi}</p>
                    <p className="text-earth-500 dark:text-earth-400 text-xs sm:text-sm">per {item.unit}</p>
                    <p className="text-terracotta-600 dark:text-terracotta-400 font-bold text-lg sm:text-xl mt-1">₹{item.price}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3">
                    <div className="flex items-center border border-sage-300 dark:border-sage-600 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 sm:p-2 hover:bg-sage-50 dark:hover:bg-sage-800 rounded-l-lg text-earth-700 dark:text-earth-300"
                      >
                        <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                      <span className="px-2 sm:px-4 py-1.5 sm:py-2 border-x border-sage-300 dark:border-sage-600 font-medium text-earth-800 dark:text-earth-200 text-sm sm:text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 sm:p-2 hover:bg-sage-50 dark:hover:bg-sage-800 rounded-r-lg text-earth-700 dark:text-earth-300"
                      >
                        <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 sm:p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                    >
                      <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-sage-200 dark:border-sage-700 flex justify-between items-center">
                  <span className="text-earth-600 dark:text-earth-400 text-sm sm:text-base">Subtotal:</span>
                  <span className="font-bold text-earth-800 dark:text-earth-200 text-base sm:text-lg">₹{item.price * item.quantity}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white dark:bg-card rounded-xl p-4 sm:p-6 shadow-sm border border-sage-200 dark:border-sage-700 h-fit">
            <h3 className="text-lg sm:text-xl font-bold text-earth-800 dark:text-earth-200 mb-4">Order Summary</h3>
            
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex justify-between">
                <span className="text-earth-600 dark:text-earth-400 text-sm sm:text-base">Items ({state.itemCount})</span>
                <span className="font-medium text-earth-800 dark:text-earth-200 text-sm sm:text-base">₹{state.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-earth-600 dark:text-earth-400 text-sm sm:text-base">Delivery</span>
                <span className="font-medium text-green-600 dark:text-green-400 text-sm sm:text-base">FREE</span>
              </div>
              <div className="border-t border-sage-200 dark:border-sage-700 pt-2 sm:pt-3 flex justify-between">
                <span className="font-bold text-earth-800 dark:text-earth-200 text-sm sm:text-base">Total</span>
                <span className="font-bold text-terracotta-600 dark:text-terracotta-400 text-lg sm:text-xl">₹{state.total}</span>
              </div>
            </div>

            <Link to="/checkout">
              <Button className="w-full bg-terracotta-500 dark:bg-terracotta-400 hover:bg-terracotta-600 dark:hover:bg-terracotta-500 text-white py-2.5 sm:py-3 rounded-xl text-sm sm:text-base">
                Proceed to Checkout
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>

            <div className="mt-3 sm:mt-4 text-center">
              <Link to="/products" className="text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300 text-xs sm:text-sm">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;