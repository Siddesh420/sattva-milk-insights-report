import React, { useState } from 'react';
import { Milk, Coffee, ChefHat, Cookie } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import ProductModal from './ProductModal';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: "Organic Cow Milk",
      hindi: "जैविक गाय का दूध",
      price: "₹85",
      originalPrice: "₹90",
      size: "1L",
      icon: Milk,
      description: "Fresh A2 desi cow milk, rich in protein and natural goodness. Sourced from happy, grass-fed cows in Rajasthan farms.",
      features: ["A2 Protein", "No Adulterants", "Farm Fresh"],
      images: [
        "https://i.postimg.cc/7hyg3bhd/raw.png",
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1518384401463-7c69f97279de?w=400&h=400&fit=crop"
      ],
      story: "Milked this morning at sunrise from our Gir cows",
      nutrition: { fat: "4.2%", protein: "3.8%", calcium: "120mg", vitamins: "A, D, B12" },
      farmDetails: { 
        name: "Sunrise Dairy Farm, Jaipur", 
        time: "Today, 5:30 AM", 
        cow: "Ganga (Gir A2 Desi)",
        message: "हमारी गाय माता खुश और स्वस्थ हैं। प्राकृतिक चारा खाकर मिठास से भरपूर दूध देती हैं।"
      }
    },
    {
      id: 2,
      name: "Fresh Buttermilk", 
      hindi: "ताजा छाछ",
      price: "₹64",
      originalPrice: "₹70", 
      size: "1L",
      icon: Coffee,
      description: "Traditional churned buttermilk with natural probiotics. Perfect for digestion and cooling the body naturally.",
      features: ["Probiotic Rich", "Low Fat", "Digestive Aid"],
      images: [
        "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571167015670-dca2ea5c6d15?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?w=400&h=400&fit=crop"
      ],
      story: "Churned fresh from today's organic milk",
      nutrition: { fat: "0.5%", protein: "3.1%", calcium: "116mg", vitamins: "B2, B12" },
      farmDetails: { 
        name: "Heritage Dairy, Udaipur", 
        time: "Today, 7:00 AM", 
        cow: "Lakshmi (Indigenous Rathi)",
        message: "पारंपरिक मथनी से मथा गया शुद्ध छाछ, पेट के लिए अमृत समान।"
      }
    },
    {
      id: 3,
      name: "Organic Desi Ghee",
      hindi: "जैविक देसी घी",
      price: "₹795",
      originalPrice: "₹850",
      size: "500ml", 
      icon: ChefHat,
      description: "Pure A2 cow ghee made using traditional bilona method. Golden colored with divine aroma and medicinal properties.",
      features: ["Bilona Method", "A2 Cow Ghee", "Golden Color"],
      images: [
        "https://i.postimg.cc/rwSJFKCD/ghee-1.jpg",
        "https://i.postimg.cc/0jY2SyKt/Delicious-41.jpg",
        "https://i.postimg.cc/rwSJFKCD/ghee-1.jpg"
      ],
      story: "Hand-churned using 200-year-old bilona technique",
      nutrition: { fat: "99.8%", protein: "0.3%", calcium: "25mg", vitamins: "A, D, E, K" },
      farmDetails: { 
        name: "Traditional Ghani, Mathura", 
        time: "Prepared yesterday", 
        cow: "Radha (Pure Sahiwal)",
        message: "बिलोना विधि से बना शुद्ध घी, माता के प्रेम का स्वाद।"
      }
    },
    {
      id: 4,
      name: "Malai Paneer",
      hindi: "मलाई पनीर", 
      price: "₹191",
      originalPrice: "₹210",
      size: "250g",
      icon: Cookie,
      description: "Soft, fresh cottage cheese made from organic milk. Rich in protein and perfect for healthy Indian cuisine.",
      features: ["High Protein", "Soft Texture", "Fresh Daily"],
      images: [
        "https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=400&fit=crop"
      ],
      story: "Made fresh this morning from pure cow milk",
      nutrition: { fat: "20g", protein: "18g", calcium: "208mg", vitamins: "B12, Riboflavin" },
      farmDetails: { 
        name: "Fresh Dairy, Vrindavan", 
        time: "Today, 9:00 AM", 
        cow: "Yamuna (Haryana Cow)",
        message: "ताजे दूध से बना कोमल पनीर, घर का स्वाद।"
      }
    }
  ];

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      hindi: product.hindi,
      price: parseInt(product.price.replace('₹', '')),
      unit: product.size,
      category: product.name.toLowerCase().includes('milk') ? 'milk' : 
               product.name.toLowerCase().includes('ghee') ? 'ghee' :
               product.name.toLowerCase().includes('paneer') ? 'paneer' : 'other'
    });
    toast.success(`${product.name} added to cart!`, {
      description: `${product.price} per ${product.size}`
    });
  };

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-cream-50 to-sage-50 dark:from-background dark:to-card">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-responsive-md">
          <h2 className="text-responsive-3xl font-bold text-earth-800 dark:text-earth-200 mb-3 sm:mb-4">
            Our <span className="text-terracotta-600 dark:text-terracotta-400">Pure</span> Products
          </h2>
          <p className="text-responsive-lg text-earth-600 dark:text-earth-300 max-w-3xl mx-auto">
            हमारे शुद्ध उत्पाद - From fresh morning milk to traditional ghee, 
            every product tells a story of purity and tradition
          </p>
          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-sage-600 dark:text-sage-400">
            <span className="w-2 h-2 bg-terracotta-500 dark:bg-terracotta-400 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm">Fresh Today • Farm to Table • 100% Organic</span>
            <span className="w-2 h-2 bg-terracotta-500 dark:bg-terracotta-400 rounded-full animate-pulse"></span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid-responsive-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-card rounded-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group border border-sage-100 dark:border-sage-700 relative"
            >
              {/* Fresh Today Badge */}
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-terracotta-500 dark:bg-terracotta-400 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                Fresh Today
              </div>

              {/* Image Carousel */}
              <div className="relative">
                <Carousel 
                  className="w-full"
                  plugins={[
                    Autoplay({
                      delay: 3000,
                      stopOnInteraction: true,
                      stopOnMouseEnter: true,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {product.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="aspect-square relative overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${product.name} ${imgIndex + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-sage-200" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-sage-200" />
                </Carousel>

                {/* Story overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{product.story}</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="card-responsive space-responsive-sm">
                <div className="text-center">
                  <div className="bg-cream-100 dark:bg-cream-900/30 rounded-xl p-2 sm:p-3 w-fit mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="h-5 w-5 sm:h-6 sm:w-6 text-terracotta-600 dark:text-terracotta-400" />
                  </div>
                  
                  <div>
                    <h3 className="text-responsive-lg font-bold text-earth-800 dark:text-earth-200">{product.name}</h3>
                    <p className="text-sage-600 dark:text-sage-400 text-xs sm:text-sm font-medium">{product.hindi}</p>
                  </div>
                </div>

                <p className="text-earth-600 dark:text-earth-300 text-xs sm:text-sm leading-relaxed text-center">
                  {product.description.substring(0, window.innerWidth < 640 ? 60 : 80)}...
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="bg-sage-100 dark:bg-sage-800 text-sage-700 dark:text-sage-300 px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-sage-200 dark:border-sage-600">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="text-center space-y-1 sm:space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-xl sm:text-2xl font-bold text-terracotta-600 dark:text-terracotta-400">{product.price}</span>
                    <span className="text-xs sm:text-sm text-earth-500 dark:text-earth-400 line-through">{product.originalPrice}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-earth-500 dark:text-earth-400">per {product.size}</p>
                  <p className="text-xs text-sage-600 dark:text-sage-400">Delivery in 2-3 hours</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="touch-target w-full bg-terracotta-500 dark:bg-terracotta-400 text-white py-2 sm:py-3 rounded-xl hover:bg-terracotta-600 dark:hover:bg-terracotta-500 transition-all duration-300 font-medium group-hover:shadow-lg transform hover:scale-[1.02] focus-ring text-sm sm:text-base"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => openModal(product)}
                    className="touch-target w-full border-2 border-sage-300 dark:border-sage-600 text-sage-700 dark:text-sage-300 py-2 rounded-xl hover:bg-sage-50 dark:hover:bg-sage-800 transition-colors font-medium text-xs sm:text-sm focus-ring"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="touch-target border-2 border-terracotta-500 dark:border-terracotta-400 text-terracotta-600 dark:text-terracotta-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-terracotta-500 dark:hover:bg-terracotta-400 hover:text-white dark:hover:text-earth-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 focus-ring text-sm sm:text-base">
            View All Products
          </button>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Products;
