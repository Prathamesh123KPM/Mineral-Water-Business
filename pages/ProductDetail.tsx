
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight, Send, ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../constants';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Fallback to single image if images array is not present
  const images = product?.images || (product?.image ? [product.image] : []);

  useEffect(() => {
    // Reset index when product changes
    setActiveImageIndex(0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-black text-slate-900 mb-4">Product Not Found</h2>
        <p className="text-slate-500 mb-8">The product you are looking for does not exist.</p>
        <Link to="/products" className="px-8 py-3 bg-sky-600 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-sky-700">
          Back to Products
        </Link>
      </div>
    );
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="pt-24 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb / Back */}
        <div className="py-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-slate-500 hover:text-sky-600 font-bold text-sm uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Catalog
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Image Carousel */}
          <div className="lg:col-span-7">
            <div className="space-y-6 sticky top-32">
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sky-900/10 group bg-white">
                <div className="absolute inset-0 bg-slate-100 animate-pulse -z-10"></div>
                <img
                  src={images[activeImageIndex]}
                  alt={`${product.name} - High-Efficiency Machine View ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover transition-all duration-500"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all opacity-0 group-hover:opacity-100 transform translate-x-[20px] group-hover:translate-x-0"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-sky-700 shadow-sm">
                  {product.category}
                </div>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-300 ${activeImageIndex === idx
                        ? 'ring-4 ring-sky-500 ring-offset-2 opacity-100 scale-105'
                        : 'opacity-60 hover:opacity-100 hover:scale-105'
                        }`}
                    >
                      <img src={img} alt={`${product.name} Image Thumbnail ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                {product.name}
              </h1>
            </div>

            <div className="text-lg text-slate-600 font-medium leading-relaxed">
              {product.longDescription ? (
                <div
                  className="prose prose-slate prose-lg max-w-none text-slate-600 font-medium leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.longDescription }}
                />
              ) : (
                <p>{product.description}</p>
              )}
            </div>

            <div className="p-8 rounded-[2rem] bg-sky-50 border border-sky-100">
              <h3 className="text-teal-600 text-xs font-black uppercase tracking-[0.2em] mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 size={20} className="text-sky-500 mr-4 shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between text-sm font-bold text-slate-500">
                <span>Availability</span>
                <span className="text-green-600 flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> In Stock / Built to Order</span>
              </div>
              <Link
                to="/contact"
                className="w-full py-5 bg-gradient-to-r from-sky-600 to-teal-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:shadow-xl hover:shadow-sky-500/30 transition-all active:scale-95 flex items-center justify-center group"
              >
                Request Quotation <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <p className="text-center text-xs text-slate-400 font-medium">
                Get a custom proposal within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
