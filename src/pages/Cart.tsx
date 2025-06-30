
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
      <div className="min-h-screen bg-cream-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center py-16">
            <div className="bg-white/80 rounded-2xl p-8 max-w-md mx-auto">
              <ShoppingBag className="h-16 w-16 text-sage-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-earth-800 mb-4">Your Cart is Empty</h2>
              <p className="text-earth-600 mb-6">Add some fresh dairy products to get started!</p>
              <Link to="/products">
                <Button className="bg-terracotta-500 hover:bg-terracotta-600 text-white">
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
    <div className="min-h-screen bg-cream-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-earth-800 mb-2">Shopping Cart</h1>
          <p className="text-earth-600">Review your fresh dairy products</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm border border-sage-200">
                <div className="flex items-start gap-4">
                  <div className="bg-cream-100 rounded-lg p-3 w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl">🥛</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-earth-800 text-lg">{item.name}</h3>
                    <p className="text-sage-600 text-sm">{item.hindi}</p>
                    <p className="text-earth-500 text-sm">per {item.unit}</p>
                    <p className="text-terracotta-600 font-bold text-xl mt-1">₹{item.price}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-sage-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-sage-50 rounded-l-lg"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 border-x border-sage-300 font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-sage-50 rounded-r-lg"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-sage-200 flex justify-between items-center">
                  <span className="text-earth-600">Subtotal:</span>
                  <span className="font-bold text-earth-800 text-lg">₹{item.price * item.quantity}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-sage-200 h-fit">
            <h3 className="text-xl font-bold text-earth-800 mb-4">Order Summary</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-earth-600">Items ({state.itemCount})</span>
                <span className="font-medium">₹{state.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-earth-600">Delivery</span>
                <span className="font-medium text-green-600">FREE</span>
              </div>
              <div className="border-t border-sage-200 pt-3 flex justify-between">
                <span className="font-bold text-earth-800">Total</span>
                <span className="font-bold text-terracotta-600 text-xl">₹{state.total}</span>
              </div>
            </div>

            <Link to="/checkout">
              <Button className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white py-3 rounded-xl">
                Proceed to Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <div className="mt-4 text-center">
              <Link to="/products" className="text-sage-600 hover:text-sage-800 text-sm">
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
