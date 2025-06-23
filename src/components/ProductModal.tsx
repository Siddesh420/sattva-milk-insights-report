
import React from 'react';
import { X, QrCode, MapPin, Clock, Droplets } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface ProductModalProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-cream-50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-earth-800 flex items-center gap-2">
            <product.icon className="h-6 w-6 text-terracotta-600" />
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-xl overflow-hidden border border-sage-200">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.slice(1).map((img: string, idx: number) => (
                <div key={idx} className="aspect-square bg-white rounded-lg overflow-hidden border border-sage-100">
                  <img src={img} alt={`${product.name} ${idx + 2}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right - Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-earth-800">{product.name}</h3>
              <p className="text-sage-600">{product.hindi}</p>
              <p className="text-earth-600 mt-2">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-bold text-earth-800 mb-3">Key Benefits</h4>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature: string, idx: number) => (
                  <span key={idx} className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm font-medium">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Nutrition */}
            <div className="bg-white rounded-xl p-4 border border-sage-200">
              <h4 className="font-bold text-earth-800 mb-3">Nutrition Facts</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-earth-600">Fat Content:</span>
                  <span className="font-medium text-earth-800">{product.nutrition?.fat || '4.2%'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-earth-600">Protein:</span>
                  <span className="font-medium text-earth-800">{product.nutrition?.protein || '3.8%'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-earth-600">Calcium:</span>
                  <span className="font-medium text-earth-800">{product.nutrition?.calcium || '120mg'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-earth-600">Vitamins:</span>
                  <span className="font-medium text-earth-800">{product.nutrition?.vitamins || 'A, D, B12'}</span>
                </div>
              </div>
            </div>

            {/* Farm Details */}
            <div className="bg-gradient-to-r from-terracotta-50 to-sage-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <QrCode className="h-5 w-5 text-terracotta-600" />
                <h4 className="font-bold text-earth-800">Farm to Table Traceability</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-sage-600" />
                  <span className="text-earth-600">Farm: {product.farmDetails?.name || 'Jaipur Organic Farm'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-sage-600" />
                  <span className="text-earth-600">Harvested: {product.farmDetails?.time || 'Today, 5:30 AM'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-sage-600" />
                  <span className="text-earth-600">Cow: {product.farmDetails?.cow || 'Ganga (Gir A2 Desi)'}</span>
                </div>
              </div>
              <p className="text-earth-600 text-xs mt-3 italic">
                "{product.farmDetails?.message || 'हमारी गाय माता खुश और स्वस्थ हैं। उनका दूध प्राकृतिक रूप से मिठास से भरपूर है।'}"
              </p>
            </div>

            {/* Price and Action */}
            <div className="bg-white rounded-xl p-4 border border-sage-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-terracotta-600">{product.price}</span>
                    <span className="text-lg text-earth-500 line-through">{product.originalPrice}</span>
                  </div>
                  <p className="text-sm text-earth-500">per {product.size}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-sage-600">Fresh Today</p>
                  <p className="text-xs text-sage-600">Delivery in 2-3 hours</p>
                </div>
              </div>
              <button className="w-full bg-terracotta-500 text-white py-3 rounded-xl hover:bg-terracotta-600 transition-colors font-medium shadow-lg">
                Add to Cart - {product.price}
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
