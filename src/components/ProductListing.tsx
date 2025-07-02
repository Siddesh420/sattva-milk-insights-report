import React, { useState } from 'react';
import { Search, Milk, Cookie, ChefHat, Coffee, Zap, ShoppingCart, Star, Sparkles } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

const ProductListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: "Organic Cow Milk",
      hindi: "जैविक गाय का दूध",
      unit: "1 L",
      marketPrice: 80,
      ourPrice: 85,
      icon: Milk,
      benefits: "A2 Desi Cow Milk — Farm Fresh, No Adulterants",
      tags: ["Best Seller", "Fresh Today"],
      category: "milk"
    },
    {
      id: 2,
      name: "Organic Fresh Buttermilk",
      hindi: "जैविक ताजा छाछ",
      unit: "1 L",
      marketPrice: 60,
      ourPrice: 64,
      icon: Coffee,
      benefits: "Probiotic Rich — Perfect for Digestion",
      tags: ["Fresh Today"],
      category: "buttermilk"
    },
    {
      id: 3,
      name: "Organic Butter",
      hindi: "जैविक मक्खन",
      unit: "200 g",
      marketPrice: 150,
      ourPrice: 159,
      icon: Cookie,
      benefits: "Churned Fresh — Rich in Vitamins A & D",
      tags: ["Premium"],
      category: "butter"
    },
    {
      id: 4,
      name: "Organic Desi Cow Ghee",
      hindi: "जैविक देसी गाय का घी",
      unit: "500 ml",
      marketPrice: 750,
      ourPrice: 795,
      icon: ChefHat,
      benefits: "Bilona Method — Pure A2 Cow Ghee",
      tags: ["Best Seller", "Traditional"],
      category: "ghee"
    },
    {
      id: 5,
      name: "Organic Cheddar Cheese",
      hindi: "जैविक चेडर चीज़",
      unit: "200 g",
      marketPrice: 300,
      ourPrice: 318,
      icon: Cookie,
      benefits: "Aged Naturally — Rich in Protein",
      tags: ["Premium"],
      category: "cheese"
    },
    {
      id: 6,
      name: "Organic Malai Paneer",
      hindi: "जैविक मलाई पनीर",
      unit: "250 g",
      marketPrice: 180,
      ourPrice: 191,
      icon: Cookie,
      benefits: "Soft Texture — High Protein Content",
      tags: ["Fresh Today"],
      category: "paneer"
    },
    {
      id: 7,
      name: "Organic Probiotic Curd",
      hindi: "जैविक प्रोबायोटिक दही",
      unit: "500 g",
      marketPrice: 120,
      ourPrice: 127,
      icon: Coffee,
      benefits: "Live Cultures — Digestive Health",
      tags: ["Fresh Today"],
      category: "curd"
    },
    {
      id: 8,
      name: "Organic Greek Yoghurt",
      hindi: "जैविक ग्रीक योगर्ट",
      unit: "500 g",
      marketPrice: 250,
      ourPrice: 265,
      icon: Coffee,
      benefits: "Thick & Creamy — High Protein",
      tags: ["Premium"],
      category: "yoghurt"
    },
    {
      id: 9,
      name: "Organic Buttermilk On-the-go",
      hindi: "जैविक छाछ (पोर्टेबल)",
      unit: "200 ml",
      marketPrice: 40,
      ourPrice: 43,
      icon: Coffee,
      benefits: "Convenient Pack — Instant Energy",
      tags: ["Travel Size"],
      category: "buttermilk"
    },
    {
      id: 10,
      name: "Organic Milk – UHT",
      hindi: "जैविक दूध (यूएचटी)",
      unit: "1 L",
      marketPrice: 100,
      ourPrice: 106,
      icon: Milk,
      benefits: "Long Shelf Life — Same Nutrition",
      tags: ["Convenient"],
      category: "milk"
    }
  ];

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      hindi: product.hindi,
      price: product.ourPrice,
      unit: product.unit,
      category: product.category
    });
    toast.success(`${product.name} added to cart!`, {
      description: `₹${product.ourPrice} per ${product.unit}`
    });
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.hindi.includes(searchTerm) ||
    product.category.includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];
    
    if (sortBy === 'name') {
      aValue = a.name;
      bValue = b.name;
    } else if (sortBy === 'marketPrice' || sortBy === 'ourPrice') {
      aValue = a[sortBy];
      bValue = b[sortBy];
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-cream-50 to-sage-50 dark:from-background dark:to-card min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-8 w-8 text-terracotta-500 dark:text-terracotta-400" />
            <h1 className="text-4xl lg:text-5xl font-bold text-earth-800 dark:text-earth-200">
              Pure <span className="text-terracotta-600 dark:text-terracotta-400">Dairy</span> Collection
            </h1>
            <Sparkles className="h-8 w-8 text-terracotta-500 dark:text-terracotta-400" />
          </div>
          
          <p className="text-xl text-earth-600 dark:text-earth-300 max-w-4xl mx-auto mb-6">
            हमारे शुद्ध डेयरी उत्पाद - Transparently priced, ethically sourced dairy products 
            from our partner farms across Rajasthan and Gujarat
          </p>
          
          {/* Trust Note */}
          <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border border-sage-200 dark:border-sage-700 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Zap className="h-5 w-5 text-terracotta-500 dark:text-terracotta-400" />
              <span className="font-bold text-earth-800 dark:text-earth-200">Honest Pricing Promise</span>
              <Zap className="h-5 w-5 text-terracotta-500 dark:text-terracotta-400" />
            </div>
            <p className="text-earth-700 dark:text-earth-300 font-medium">
              We price honestly with only a <span className="text-terracotta-600 dark:text-terracotta-400 font-bold">6% markup</span> from market average. 
              Every rupee supports pure, traceable dairy and fair farmer wages.
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sage-500 dark:text-sage-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search products... (e.g., milk, घी, paneer)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-sage-300 dark:border-sage-600 rounded-xl bg-white/90 dark:bg-background/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500 dark:focus:ring-terracotta-400 focus:border-transparent text-earth-800 dark:text-earth-200"
            />
          </div>
          
          <div className="flex gap-2 text-sm text-earth-600 dark:text-earth-400">
            <span>Sort by:</span>
            <button 
              onClick={() => handleSort('name')}
              className={`px-3 py-1 rounded-full transition-colors ${sortBy === 'name' ? 'bg-terracotta-100 dark:bg-terracotta-900/30 text-terracotta-700 dark:text-terracotta-400' : 'hover:bg-sage-100 dark:hover:bg-sage-800'}`}
            >
              Name {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
            </button>
            <button 
              onClick={() => handleSort('ourPrice')}
              className={`px-3 py-1 rounded-full transition-colors ${sortBy === 'ourPrice' ? 'bg-terracotta-100 dark:bg-terracotta-900/30 text-terracotta-700 dark:text-terracotta-400' : 'hover:bg-sage-100 dark:hover:bg-sage-800'}`}
            >
              Price {sortBy === 'ourPrice' && (sortOrder === 'asc' ? '↑' : '↓')}
            </button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl shadow-xl border border-sage-200 dark:border-sage-700 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-cream-100 to-sage-100 dark:from-card dark:to-background border-b border-sage-200 dark:border-sage-700">
                <TableHead className="font-bold text-earth-800 dark:text-earth-200 py-4">Product</TableHead>
                <TableHead className="font-bold text-earth-800 dark:text-earth-200 text-center">Market Price</TableHead>
                <TableHead className="font-bold text-terracotta-700 dark:text-terracotta-400 text-center bg-terracotta-50 dark:bg-terracotta-900/20">Our Price</TableHead>
                <TableHead className="font-bold text-earth-800 dark:text-earth-200 text-center">Benefits</TableHead>
                <TableHead className="font-bold text-earth-800 dark:text-earth-200 text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedProducts.map((product, index) => (
                <TableRow 
                  key={product.id} 
                  className={`hover:bg-cream-25 dark:hover:bg-card/50 transition-colors border-b border-sage-100 dark:border-sage-700 ${index % 2 === 0 ? 'bg-white/50 dark:bg-background/50' : 'bg-cream-25 dark:bg-card/30'}`}
                >
                  <TableCell className="py-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-terracotta-100 dark:bg-terracotta-900/30 p-3 rounded-xl">
                        <product.icon className="h-6 w-6 text-terracotta-600 dark:text-terracotta-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-earth-800 dark:text-earth-200 text-lg">{product.name}</h3>
                        <p className="text-sage-600 dark:text-sage-400 font-medium">{product.hindi}</p>
                        <p className="text-earth-500 dark:text-earth-400 text-sm">per {product.unit}</p>
                        <div className="flex gap-1 mt-2">
                          {product.tags.map((tag, tagIndex) => (
                            <Badge 
                              key={tagIndex} 
                              variant="outline"
                              className={`text-xs ${
                                tag === 'Best Seller' ? 'border-terracotta-300 dark:border-terracotta-600 text-terracotta-700 dark:text-terracotta-400 bg-terracotta-50 dark:bg-terracotta-900/20' :
                                tag === 'Fresh Today' ? 'border-sage-300 dark:border-sage-600 text-sage-700 dark:text-sage-400 bg-sage-50 dark:bg-sage-900/20' :
                                'border-earth-300 dark:border-earth-600 text-earth-700 dark:text-earth-400 bg-earth-50 dark:bg-earth-900/20'
                              }`}
                            >
                              {tag === 'Best Seller' && <Star className="h-3 w-3 mr-1" />}
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center py-6">
                    <div className="text-earth-500 dark:text-earth-400 font-medium">
                      <span className="line-through">₹{product.marketPrice}</span>
                      <p className="text-xs text-earth-400 dark:text-earth-500 mt-1">Market Avg.</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center py-6 bg-terracotta-25 dark:bg-terracotta-900/10">
                    <div className="text-terracotta-700 dark:text-terracotta-400 font-bold text-xl">
                      ₹{product.ourPrice}
                    </div>
                    <div className="text-xs text-terracotta-600 dark:text-terracotta-400 mt-1 font-medium">
                      +6% markup
                    </div>
                    <div className="text-xs text-sage-600 dark:text-sage-400 mt-1">
                      Save ₹{Math.max(0, product.marketPrice + (product.marketPrice * 0.15) - product.ourPrice)}
                    </div>
                  </TableCell>
                  <TableCell className="py-6">
                    <div className="max-w-xs">
                      <p className="text-earth-600 dark:text-earth-300 text-sm leading-relaxed">{product.benefits}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center py-6">
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="bg-terracotta-500 dark:bg-terracotta-400 hover:bg-terracotta-600 dark:hover:bg-terracotta-500 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden grid gap-6">
          {sortedProducts.map((product) => (
            <Card key={product.id} className="bg-white/90 dark:bg-card/90 backdrop-blur-sm border-sage-200 dark:border-sage-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-terracotta-100 dark:bg-terracotta-900/30 p-3 rounded-xl flex-shrink-0">
                    <product.icon className="h-6 w-6 text-terracotta-600 dark:text-terracotta-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-earth-800 dark:text-earth-200 text-lg">{product.name}</h3>
                    <p className="text-sage-600 dark:text-sage-400 font-medium">{product.hindi}</p>
                    <p className="text-earth-500 dark:text-earth-400 text-sm">per {product.unit}</p>
                  </div>
                  <div className="flex gap-1 flex-wrap">
                    {product.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline"
                        className={`text-xs ${
                          tag === 'Best Seller' ? 'border-terracotta-300 dark:border-terracotta-600 text-terracotta-700 dark:text-terracotta-400 bg-terracotta-50 dark:bg-terracotta-900/20' :
                          tag === 'Fresh Today' ? 'border-sage-300 dark:border-sage-600 text-sage-700 dark:text-sage-400 bg-sage-50 dark:bg-sage-900/20' :
                          'border-earth-300 dark:border-earth-600 text-earth-700 dark:text-earth-400 bg-earth-50 dark:bg-earth-900/20'
                        }`}
                      >
                        {tag === 'Best Seller' && <Star className="h-3 w-3 mr-1" />}
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <p className="text-earth-600 dark:text-earth-300 text-sm mb-4 leading-relaxed">{product.benefits}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <p className="text-xs text-earth-400 dark:text-earth-500 mb-1">Market Price</p>
                    <p className="text-earth-500 dark:text-earth-400 font-medium line-through">₹{product.marketPrice}</p>
                  </div>
                  <div className="text-center bg-terracotta-50 dark:bg-terracotta-900/20 rounded-xl px-4 py-2">
                    <p className="text-xs text-terracotta-600 dark:text-terracotta-400 mb-1 font-medium">Our Price (+6%)</p>
                    <p className="text-terracotta-700 dark:text-terracotta-400 font-bold text-xl">₹{product.ourPrice}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-sage-600 dark:text-sage-400 mb-1">You Save</p>
                    <p className="text-sage-700 dark:text-sage-400 font-medium">₹{Math.max(0, product.marketPrice + (product.marketPrice * 0.15) - product.ourPrice)}</p>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-terracotta-500 dark:bg-terracotta-400 hover:bg-terracotta-600 dark:hover:bg-terracotta-500 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart - ₹{product.ourPrice}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/80 dark:bg-card/80 rounded-2xl p-8 max-w-md mx-auto border border-sage-200 dark:border-sage-700">
              <Search className="h-12 w-12 text-sage-400 dark:text-sage-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-earth-700 dark:text-earth-300 mb-2">No Products Found</h3>
              <p className="text-earth-500 dark:text-earth-400">Try adjusting your search terms or browse all products.</p>
              <Button 
                onClick={() => setSearchTerm('')}
                className="mt-4 bg-terracotta-500 dark:bg-terracotta-400 hover:bg-terracotta-600 dark:hover:bg-terracotta-500 text-white"
              >
                Clear Search
              </Button>
            </div>
          </div>
        )}

        {/* Bottom Trust Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cream-100 to-sage-100 dark:from-card dark:to-background rounded-2xl p-8 max-w-4xl mx-auto border border-sage-200 dark:border-sage-700">
            <h3 className="text-2xl font-bold text-earth-800 dark:text-earth-200 mb-4">
              Why Choose Our <span className="text-terracotta-600 dark:text-terracotta-400">Transparent</span> Pricing?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-terracotta-100 dark:bg-terracotta-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-terracotta-600 dark:text-terracotta-400" />
                </div>
                <h4 className="font-bold text-earth-700 dark:text-earth-300 mb-2">Fair Markup</h4>
                <p className="text-earth-600 dark:text-earth-400 text-sm">Only 6% above market price to ensure quality and sustainability</p>
              </div>
              <div>
                <div className="bg-sage-100 dark:bg-sage-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-sage-600 dark:text-sage-400" />
                </div>
                <h4 className="font-bold text-earth-700 dark:text-earth-300 mb-2">Farm Direct</h4>
                <p className="text-earth-600 dark:text-earth-400 text-sm">Sourced directly from partner farms, ensuring freshness and farmer welfare</p>
              </div>
              <div>
                <div className="bg-earth-100 dark:bg-earth-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="h-6 w-6 text-earth-600 dark:text-earth-400" />
                </div>
                <h4 className="font-bold text-earth-700 dark:text-earth-300 mb-2">Pure Quality</h4>
                <p className="text-earth-600 dark:text-earth-400 text-sm">No adulterants, no preservatives - just pure, organic dairy goodness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;