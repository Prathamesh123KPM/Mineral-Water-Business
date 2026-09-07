import React, { useState } from 'react';
import { CheckCircle2, Search, ArrowUpRight, Eye, ChevronDown, Sparkles, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { SEO_KEYWORD_CATEGORIES } from '../seoData';

const Products: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeKeywordCategory, setActiveKeywordCategory] = useState<string>('All');

  const productFaqs = [
    {
      q: "What is the price range for a mineral water plant machine in India?",
      a: "The price of a mineral water plant machine varies based on capacity and automation level. A semi-automatic 1000 BPH plant starts from approximately ₹8–12 Lakhs for machinery, while a fully automatic 4000–6000 BPH line ranges from ₹25 Lakhs to ₹60 Lakhs. Krupashindu provides customized quotations based on your specific production requirements."
    },
    {
      q: "Which type of mineral water plant is best for a small-scale water business?",
      a: "For a small-scale water business, we recommend starting with a 1000–2000 BPH semi-automatic or automatic packaged drinking water plant. This includes an RO system (1000–2000 LPH), a rinsing-filling-capping (RFC) machine, and basic labeling and packaging equipment. Total investment is typically ₹15–25 Lakhs including civil works."
    },
    {
      q: "What machines are needed for a complete mineral water bottling plant?",
      a: "A complete mineral water bottling plant requires: Raw Water Storage Tanks, Multi-Grade Sand Filter, Activated Carbon Filter, Water Softener, Antiscalant Dosing System, Industrial RO Plant, UV & Ozone Sterilization, Bottle Blowing Machine (PET), Rinsing-Filling-Capping Machine, Labeling Machine, Shrink Wrapping/Packaging Machine, and a Conveyance System."
    },
    {
      q: "Do you manufacture PET bottle blowing machines?",
      a: "Yes, Krupashindu manufactures both semi-automatic and fully automatic PET bottle blowing machines. Our semi-automatic models produce up to 1500 bottles/hour, while fully automatic stretch blow molding machines can produce 2000–8000 bottles/hour in sizes ranging from 200ml to 2 liters."
    },
    {
      q: "What is the difference between a mineral water plant and a packaged drinking water plant?",
      a: "A mineral water plant processes natural spring or mineral-rich water and requires specific mineral content per IS:13428 standards. A packaged drinking water plant treats any raw water (borewell, municipal, river) through RO and purification to meet IS:14543 (BIS) standards. Most entrepreneurs opt for a packaged drinking water plant as it allows using any water source."
    },
    {
      q: "Can your machines be exported and installed outside India?",
      a: "Yes, Krupashindu is a leading exporter of mineral water plant machinery to 30+ countries including the USA, Dominican Republic, Oman, Ghana, Nigeria, and across the Middle East and Africa. We provide complete export packaging, on-site installation, commissioning, and operator training worldwide."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": productFaqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="pt-24 min-h-screen pb-24">
      <title>Mineral Water Plant &amp; Bottling Plant Machinery | Packaged Drinking Water</title>
      <meta name="description" content="Explore high-capacity mineral water plant machinery, automatic bottling plants, and turnkey packaged drinking water plants from certified manufacturers." />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mineralwaterbusiness.com/products" />
      <meta property="og:title" content="Mineral Water Plant &amp; Bottling Plant Machinery | Packaged Drinking Water" />
      <meta property="og:description" content="Explore high-capacity mineral water plant machinery, automatic bottling plants, and turnkey packaged drinking water plants from certified manufacturers." />
      <meta property="og:image" content="https://mineralwaterbusiness.com/Homepage.webp" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://mineralwaterbusiness.com/products" />
      <meta name="twitter:title" content="Mineral Water Plant &amp; Bottling Plant Machinery | Packaged Drinking Water" />
      <meta name="twitter:description" content="Explore high-capacity mineral water plant machinery, automatic bottling plants, and turnkey packaged drinking water plants from certified manufacturers." />
      <meta name="twitter:image" content="https://mineralwaterbusiness.com/Homepage.webp" />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <section className="py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-200/30 rounded-[100%] blur-[100px] -z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8">
            <span className="text-water-gradient">Mineral Water Plant</span> & <span className="text-water-gradient">Bottling Plant</span> Machinery
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-xl font-medium">
            Explore our range of heavy-duty <strong>Mineral Water Plants</strong>, automatic <strong>Bottling Plants</strong>, and complete <strong>Packaged Drinking Water Plants</strong> engineered by trusted <strong>Mineral Water Plant Manufacturers</strong>.
          </p>
        </div>
      </section>

      <section className="pb-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PRODUCTS.map((p, index) => {
              const isDiagram = index < 3;
              return (
                <div key={p.id} className="glass-water rounded-2xl md:rounded-[3rem] overflow-hidden hover-float group flex flex-col transition-all duration-300">
                  <Link
                    to={`/products/${p.id}`}
                    className={
                      isDiagram
                        ? "aspect-square bg-white overflow-hidden relative block p-4 flex items-center justify-center"
                        : "h-64 md:h-72 overflow-hidden relative block"
                    }
                  >
                    <img
                      src={p.image}
                      alt={`${p.name} - Krupashindu Turnkey Beverage Solutions`}
                      className={
                        isDiagram
                          ? "w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                          : "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      }
                      loading="lazy"
                    />
                    {/* <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-sky-700 shadow-sm">
                      {p.category}
                    </div> */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center">
                        <Eye size={16} className="mr-2" /> View Details
                      </div>
                    </div>
                  </Link>
                  <div className="p-7 md:p-10 flex flex-col flex-grow">
                  <Link to={`/products/${p.id}`} className="block">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 hover:text-sky-600 transition-colors">{p.name}</h3>
                  </Link>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 md:mb-8 flex-grow line-clamp-2 overflow-hidden text-ellipsis">
                    {p.description}
                  </p>

                  <div className="space-y-3 mb-10">
                    {p.specs.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex items-center text-xs font-bold text-slate-700">
                        <CheckCircle2 size={16} className="text-teal-500 mr-3 shrink-0" />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/products/${p.id}`}
                    className="w-full py-5 bg-sky-50 text-sky-900 rounded-[1.5rem] font-bold text-xs uppercase tracking-widest hover:bg-sky-600 hover:text-white transition-all flex items-center justify-center group"
                  >
                    View Product <ArrowUpRight size={14} className="ml-2 opacity-50 group-hover:opacity-100" />
                  </Link>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-teal-600 text-xs font-black uppercase tracking-[0.3em]">Product Knowledge</h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</p>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">Everything you need to know about our mineral water plant machinery, pricing, and specifications.</p>
          </div>
          <div className="space-y-6">
            {productFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left font-bold text-lg md:text-xl text-slate-900 flex justify-between items-center gap-4 hover:text-sky-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180 bg-sky-50 text-sky-600' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <div className={`px-8 transition-all duration-300 overflow-hidden ${openFaq === index ? 'pb-6 max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 font-medium leading-relaxed pt-2 border-t border-slate-100">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive SEO Solutions & Search Directory */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-slate-100/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles size={14} className="text-sky-600" />
                Industry Search Directory
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Popular Turnkey Searches & Machinery Topics
              </h2>
              <p className="text-slate-600 text-sm mt-1 max-w-2xl">
                Quickly navigate our high-capacity mineral water plant solutions, packaging machinery, RO systems, and regulatory standards.
              </p>
            </div>
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {['All', ...SEO_KEYWORD_CATEGORIES.map(c => c.title.split(' ')[0])].map((catName) => (
                <button
                  key={catName}
                  onClick={() => setActiveKeywordCategory(catName)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    activeKeywordCategory === catName
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                      : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
                  }`}
                >
                  {catName === 'All' ? 'All Topics' : catName}
                </button>
              ))}
            </div>
          </div>

          {/* Keywords Grid / Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {SEO_KEYWORD_CATEGORIES.flatMap((cat) =>
              cat.keywords
                .filter(
                  () =>
                    activeKeywordCategory === 'All' ||
                    cat.title.toLowerCase().includes(activeKeywordCategory.toLowerCase())
                )
                .map((kw, i) => (
                  <Link
                    key={`${cat.title}-${i}`}
                    to={kw.link || '/products'}
                    className="group bg-white hover:bg-sky-50/50 p-4 rounded-xl border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-sky-100/70 text-sky-700 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                        <Tag size={14} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-800 group-hover:text-sky-700 transition-colors truncate">
                          {kw.name}
                        </p>
                        <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                          {cat.title}
                        </span>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-slate-300 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </Link>
                ))
            )}
          </div>

          {/* Project Feasibility CTA Card */}
          <div className="mt-10 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <p className="text-sky-400 text-xs font-black uppercase tracking-widest">Custom Engineering & Quotations</p>
              <h3 className="text-lg md:text-xl font-bold">Need a Detailed Project Report (DPR) or Custom Plant Cost?</h3>
              <p className="text-slate-400 text-xs md:text-sm">Get complete turnkey plant layout, machinery sizing, and ROI calculations customized to your source water.</p>
            </div>
            <Link
              to="/contact"
              className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-xl text-xs md:text-sm whitespace-nowrap shadow-lg shadow-sky-500/25 transition-all flex-shrink-0 flex items-center gap-2"
            >
              Request Free Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
