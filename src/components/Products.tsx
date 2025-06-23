
import React from 'react';
import { Milk, Coffee, ChefHat, Cookie } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "Organic Cow Milk",
      hindi: "जैविक गाय का दूध",
      price: "₹85",
      originalPrice: "₹80",
      size: "1L",
      icon: Milk,
      description: "Fresh A2 desi cow milk, rich in protein and natural goodness",
      features: ["A2 Protein", "No Adulterants", "Farm Fresh"]
    },
    {
      name: "Fresh Buttermilk", 
      hindi: "ताजा छाछ",
      price: "₹64",
      originalPrice: "₹60", 
      size: "1L",
      icon: Coffee,
      description: "Traditional churned buttermilk with natural probiotics",
      features: ["Probiotic Rich", "Low Fat", "Digestive Aid"]
    },
    {
      name: "Organic Desi Ghee",
      hindi: "जैविक देसी घी",
      price: "₹795",
      originalPrice: "₹750",
      size: "500ml", 
      icon: ChefHat,
      description: "Pure A2 cow ghee made using traditional bilona method",
      features: ["Bilona Method", "A2 Cow Ghee", "Golden Color"]
    },
    {
      name: "Malai Paneer",
      hindi: "मलाई पनीर", 
      price: "₹191",
      originalPrice: "₹180",
      size: "250g",
      icon: Cookie,
      description: "Soft, fresh cottage cheese made from organic milk",
      features: ["High Protein", "Soft Texture", "Fresh Daily"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-earth-800 mb-4">
            Our <span className="text-terracotta-600">Pure</span> Products
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            हमारे शुद्ध उत्पाद - From fresh morning milk to traditional ghee, 
            every product tells a story of purity and tradition
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gradient-to-br from-cream-50 to-sage-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group border border-sage-100">
              {/* Product Icon */}
              <div className="bg-white rounded-xl p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <product.icon className="h-8 w-8 text-terracotta-600" />
              </div>

              {/* Product Info */}
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-earth-800">{product.name}</h3>
                  <p className="text-sage-600 text-sm">{product.hindi}</p>
                </div>

                <p className="text-earth-600 text-sm leading-relaxed">{product.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-terracotta-600">{product.price}</span>
                    <span className="text-sm text-earth-500 line-through">{product.originalPrice}</span>
                  </div>
                  <p className="text-sm text-earth-500">per {product.size}</p>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-terracotta-500 text-white py-3 rounded-xl hover:bg-terracotta-600 transition-colors font-medium group-hover:shadow-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products */}
        <div className="text-center mt-12">
          <button className="border-2 border-terracotta-500 text-terracotta-600 px-8 py-3 rounded-full hover:bg-terracotta-500 hover:text-white transition-colors font-semibold">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
