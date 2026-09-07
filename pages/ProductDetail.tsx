import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight, Send, ArrowUpRight, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../constants';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Fallback to single image if images array is not present
  const images = product?.images || (product?.image ? [product.image] : []);

  useEffect(() => {
    // Reset index when product changes
    setActiveImageIndex(0);
    setOpenFaq(null);
  }, [id]);

  const productDetailFaqs = product ? [
    {
      q: `What is the price of ${product.name} in India?`,
      a: `The price of ${product.name} depends on capacity, automation level, and customization requirements. Krupashindu offers competitive pricing with flexible payment terms. Contact us for a detailed, no-obligation quotation tailored to your specific production needs.`
    },
    {
      q: `What is the production capacity of ${product.name}?`,
      a: `Our ${product.name} is available in multiple capacity configurations to suit small, medium, and large-scale operations. Specific capacity details are listed in the technical specifications above. We also offer custom capacity engineering for unique project requirements.`
    },
    {
      q: `Do you provide installation support for ${product.name}?`,
      a: `Yes, Krupashindu provides complete on-site installation, piping, electrical integration, commissioning, and trial production for every ${product.name} we sell — both domestically and internationally across 30+ countries.`
    },
    {
      q: `What warranty and after-sales support do you offer?`,
      a: `All our machinery comes with a standard manufacturer warranty. We also offer comprehensive Annual Maintenance Contracts (AMC), 24/7 technical support, genuine spare parts inventory, and remote troubleshooting via video consultation.`
    },
    {
      q: `Can this machine be customized for my specific requirements?`,
      a: `Absolutely. Krupashindu specializes in custom engineering solutions. Whether you need specific bottle sizes, production speeds, material grades (SS304/SS316), or integration with existing lines, our design team will tailor the ${product.name} to your exact specifications.`
    }
  ] : [];

  const faqSchema = product ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": productDetailFaqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  } : null;

  const productSchema = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image ? `https://mineralwaterbusiness.com${product.image}` : "https://mineralwaterbusiness.com/Homepage.webp",
    "description": product.description,
    "sku": `KS-${product.id.toUpperCase().replace(/-/g, '_')}`,
    "mpn": `KS-${product.id.toUpperCase().replace(/-/g, '_')}`,
    "url": `https://mineralwaterbusiness.com/products/${product.id}`,
    "brand": {
      "@type": "Brand",
      "name": "Krupashindu"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "24",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": "Stephen Coelo"
      },
      "reviewBody": `The ${product.name} turnkey plant provided by Krupashindu exceeded our expectations in terms of efficiency, build quality, and setup support.`
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "1500000",
      "highPrice": "10000000",
      "offerCount": "1",
      "priceRange": "INR 1,500,000 - 10,000,000",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "priceValidUntil": "2027-12-31",
      "url": `https://mineralwaterbusiness.com/products/${product.id}`,
      "seller": {
        "@type": "Organization",
        "name": "Krupashindu Consulting Engineers"
      }
    }
  } : null;

  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-center px-6">
        <title>Product Not Found | Krupashindu</title>
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
      <title>{`${product.name} Manufacturer & Machinery | Krupashindu`}</title>
      <meta name="description" content={product.description.length > 155 ? `${product.description.substring(0, 152)}...` : product.description} />
      {images.length > 0 && <link rel="preload" href={images[0]} as="image" fetchPriority="high" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://mineralwaterbusiness.com/products/${product.id}`} />
      <meta property="og:title" content={`${product.name} Manufacturer & Machinery | Krupashindu`} />
      <meta property="og:description" content={product.description.length > 155 ? `${product.description.substring(0, 152)}...` : product.description} />
      <meta property="og:image" content="https://mineralwaterbusiness.com/Homepage.webp" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={`https://mineralwaterbusiness.com/products/${product.id}`} />
      <meta name="twitter:title" content={`${product.name} Manufacturer & Machinery | Krupashindu`} />
      <meta name="twitter:description" content={product.description.length > 155 ? `${product.description.substring(0, 152)}...` : product.description} />
      <meta name="twitter:image" content="https://mineralwaterbusiness.com/Homepage.webp" />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema),
          }}
        />
      )}
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

        {(() => {
          const isDiagram = product.id === 'mineral-water-plant' || product.id === 'fruit-juice-plant' || product.id === 'soft-drink-plant';
          return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
              {/* Left Column: Image Carousel */}
              <div className="space-y-6">
                <div
                  className={
                    isDiagram
                      ? "aspect-square rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-white relative group shadow-2xl shadow-sky-900/10 p-4 flex items-center justify-center"
                      : "aspect-square rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-slate-100 relative group shadow-2xl shadow-sky-900/10"
                  }
                >
                  <div className="absolute inset-0 bg-slate-100 animate-pulse -z-10"></div>
                  <img
                    src={images[activeImageIndex]}
                    alt={`${product.name} - High-Efficiency Machine View ${activeImageIndex + 1}`}
                    className={
                      isDiagram
                        ? "w-full h-full object-contain transition-all duration-500"
                        : "w-full h-full object-cover transition-all duration-500"
                    }
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/50 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-slate-900 hover:text-white transition-all opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/50 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-slate-900 hover:text-white transition-all opacity-0 group-hover:opacity-100 transform translate-x-[20px] group-hover:translate-x-0"
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
                    className={`relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden bg-white p-1 border transition-all duration-300 ${activeImageIndex === idx
                      ? 'ring-4 ring-sky-500 ring-offset-2 opacity-100 scale-105'
                      : 'opacity-60 hover:opacity-100 hover:scale-105'
                      }`}
                  >
                    <img src={img} alt={`${product.name} Image Thumbnail ${idx + 1}`} className="w-full h-full object-contain" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Details */}
          <div className="space-y-8 md:space-y-12">
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 md:mb-6">
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
                <span className="text-green-600 flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>In Stock / Built to Order</span>
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
        );
        })()}

        {/* FAQ Section */}
        <section className="py-24 mt-16 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-teal-600 text-xs font-black uppercase tracking-[0.3em]">Product FAQ</h2>
              <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</p>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto">Common questions about the {product.name} and our support services.</p>
            </div>
            <div className="space-y-6">
              {productDetailFaqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-slate-50 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left font-bold text-lg md:text-xl text-slate-900 flex justify-between items-center gap-4 hover:text-sky-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180 bg-sky-50 text-sky-600' : ''}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>
                  <div className={`px-8 transition-all duration-300 overflow-hidden ${openFaq === index ? 'pb-6 max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-slate-600 font-medium leading-relaxed pt-2 border-t border-slate-200">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
