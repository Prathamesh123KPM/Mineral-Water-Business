
import React from 'react';
import { CheckCircle2, Search, ArrowUpRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen pb-24">
      <section className="py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-200/30 rounded-[100%] blur-[100px] -z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8">
            Our <span className="text-water-gradient">Products</span>.
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-xl font-medium">
            Explore our range of heavy-duty production machinery engineered for continuous performance and purity.
          </p>
        </div>
      </section>

      <section className="pb-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="glass-water rounded-[3rem] overflow-hidden hover-float group flex flex-col transition-all duration-300">
                <Link to={`/products/${p.id}`} className="h-72 overflow-hidden relative block">
                  <img src={p.image} alt={`${p.name} - Krupashindu Turnkey Beverage Solutions`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  {/* <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-sky-700 shadow-sm">
                    {p.category}
                  </div> */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-slate-900 flex items-center">
                      <Eye size={16} className="mr-2" /> View Details
                    </div>
                  </div>
                </Link>
                <div className="p-10 flex flex-col flex-grow">
                  <Link to={`/products/${p.id}`} className="block">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 hover:text-sky-600 transition-colors">{p.name}</h3>
                  </Link>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow line-clamp-2 overflow-hidden text-ellipsis">
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
            ))}
          </div>
        </div>
      </section>

      {/* SEO Keywords Section */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Popular Search Terms</h2>
          <div className="flex flex-wrap gap-x-4 gap-y-3">
            {[
              "mineral water bottling plant price", "mineral water machine price in india", "mineral water packaging",
              "mineral water plant machine price", "mineral water plant project", "small mineral water plant project report pdf",
              "small scale mineral water plant", "bottled water industry", "drinking water project", "how to start bisleri water business",
              "isi mark registration fees", "manufacturing cost of coca cola", "mineral water packing machine",
              "mineral water plant project report", "pani bottle business", "purified water business plan", "ro plant solutions",
              "ro setup", "ro water and mineral water", "ro water business", "ro water filter system installation",
              "water bottle manufacturing cost", "water bottle plant machine", "water bottle plant machinery",
              "water factory machine", "water packets machine", "water plant machine cost", "water plants in india",
              "water processing plant", "water softener plant manufacturer"
            ].map((tag, i) => (
              <span key={i} className="text-[11px] font-bold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm cursor-default hover:border-sky-300 hover:text-sky-600 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
