import React, { useState } from 'react';
import { Target, Eye, ShieldCheck, Award, Zap, ChevronDown } from 'lucide-react';
import global from "../global.webp"
import plant from "../plant.webp"
import { TEAM } from '../constants';


const About: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const aboutFaqs = [
    {
      q: "How long has Krupashindu been manufacturing mineral water plants?",
      a: "Krupashindu Consulting Engineer was established in 2005 and has over 18 years of industry experience in designing, manufacturing, and commissioning mineral water plants, RO systems, and turnkey beverage production lines for clients across India and 30+ countries worldwide."
    },
    {
      q: "Is Krupashindu an ISO certified company?",
      a: "Yes, Krupashindu is an ISO 9001:2015 certified engineering company. Our manufacturing processes adhere to stringent international quality standards, ensuring every machine and plant we deliver meets global benchmarks for safety, efficiency, and durability."
    },
    {
      q: "How many countries has Krupashindu exported to?",
      a: "Krupashindu has successfully exported mineral water plant machinery and complete turnkey solutions to over 30 countries across 5 continents, including the United States, Dominican Republic, Oman, UAE, Ghana, Nigeria, Kenya, and several Southeast Asian nations."
    },
    {
      q: "What makes Krupashindu different from other mineral water plant manufacturers?",
      a: "Krupashindu stands out through its end-to-end approach: we don't just sell machines — we provide complete turnkey solutions from feasibility study, plant layout design, BIS/ISI licensing guidance, custom fabrication, on-site installation, operator training, and lifetime after-sales support including AMC contracts."
    },
    {
      q: "Who leads the engineering team at Krupashindu?",
      a: "Krupashindu is led by veteran water treatment technocrats with decades of combined experience in industrial RO systems, beverage engineering, and food-grade manufacturing. Our leadership team combines deep technical expertise with global project management capabilities."
    },
    {
      q: "Does Krupashindu provide after-sales support and spare parts?",
      a: "Absolutely. We maintain a dedicated after-sales division with a vast inventory of genuine spare parts for immediate global dispatch. Clients can reach our 24/7 support line for troubleshooting, remote diagnosis via video consulting, scheduled AMC visits, and emergency on-site repairs."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": aboutFaqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="pt-24 min-h-screen">
      <title>About Krupashindu | Beverage Engineering Excellence</title>
      <meta name="description" content="Learn about Krupashindu's 18+ years of expertise in manufacturing premium mineral water plants, bottling machinery, and turnkey beverage solutions." />
      <link rel="preload" href={plant} as="image" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mineralwaterbusiness.com/about" />
      <meta property="og:title" content="About Krupashindu | Beverage Engineering Excellence" />
      <meta property="og:description" content="Learn about Krupashindu's 18+ years of expertise in manufacturing premium mineral water plants, bottling machinery, and turnkey beverage solutions." />
      <meta property="og:image" content="https://mineralwaterbusiness.com/Homepage.webp" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://mineralwaterbusiness.com/about" />
      <meta name="twitter:title" content="About Krupashindu | Beverage Engineering Excellence" />
      <meta name="twitter:description" content="Learn about Krupashindu's 18+ years of expertise in manufacturing premium mineral water plants, bottling machinery, and turnkey beverage solutions." />
      <meta name="twitter:image" content="https://mineralwaterbusiness.com/Homepage.webp" />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-sky-200/30 to-teal-200/30 rounded-full blur-[100px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-teal-600 text-xs font-black uppercase tracking-[0.3em]">Our Story</h2>
          <h1 className="text-4xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
            Legacy of <span className="text-water-gradient">Mineral Water Plant</span> Excellence.
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Mineral Water, Soft Drink, Fruit Juice Plant & Machinery Manufacturing by Krupashindu has been the cornerstone of industrial water treatment and beverage production since 2005.
          </p>
        </div>
      </section>

      {/* History & Identity */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-sky-200 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-sky-900/10">
                <img
                  src={plant}
                  alt="Krupashindu Mineral Water Plant Engineering and Operations Team"
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="space-y-10">
              <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full glass-water border-sky-100 shadow-sm">
                <Award size={18} className="text-teal-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Established 2005</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Experienced <span className="text-sky-600">Water Business</span> Technocrats
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                Founded by veteran water treatment technocrats, Krupashindu was established with a singular mission: to bring high-quality, cost-effective mineral water plant solutions to India and global markets.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div className="space-y-2">
                  <div className="text-4xl font-black text-sky-700 tracking-tighter">18Y+</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Industry Leadership</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-teal-500 tracking-tighter">5+</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Continents Reached</div>
                </div>
              </div>
              <div className="p-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] text-white shadow-xl">
                <p className="font-medium italic text-slate-300 text-lg leading-relaxed">
                  "We don't just sell machines; we architect sustainable production ecosystems that empower entrepreneurs worldwide."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-teal-600 text-xs font-black uppercase tracking-[0.3em]">Leadership</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Visionary Guidance.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {TEAM.map((member) => (
              <div key={member.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-teal-100 rounded-[2.5rem] transform rotate-3 transition-transform group-hover:rotate-6"></div>
                <div className="relative bg-white p-2 rounded-[2.5rem] shadow-xl overflow-hidden glass-water border border-white">
                  <div className="aspect-[4/5] overflow-hidden rounded-[2rem] mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 opacity-80"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute bottom-6 left-6 z-20 text-white">
                      <h3 className="text-2xl font-black leading-tight mb-1">{member.name}</h3>
                      <p className="text-teal-300 font-bold uppercase tracking-widest text-xs">{member.role}</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 font-medium leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 glass-water border-y border-white/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Zap size={28} />, title: 'Our Mission', desc: 'Providing state-of-the-art turnkey solutions for beverage production while ensuring maximum efficiency.', color: 'text-sky-600', bg: 'bg-sky-50' },
              { icon: <Eye size={28} />, title: 'Our Vision', desc: 'To be the world\'s most trusted partner for mineral water machinery, recognized for technical innovation.', color: 'text-teal-600', bg: 'bg-teal-50' },
              { icon: <ShieldCheck size={28} />, title: 'Our Values', desc: 'Quality integrity, customer-centric support, and continuous technical improvement are our foundation.', color: 'text-slate-800', bg: 'bg-slate-50' }
            ].map((v, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white hover-float shadow-lg shadow-sky-900/5">
                <div className={`w-14 h-14 md:w-16 md:h-16 ${v.bg} rounded-2xl flex items-center justify-center mb-8 md:mb-10 ${v.color}`}>
                  {v.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 md:mb-6">{v.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-teal-600 text-xs font-black uppercase tracking-[0.3em]">About Krupashindu</h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</p>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">Learn more about our company, certifications, and global engineering capabilities.</p>
          </div>
          <div className="space-y-6">
            {aboutFaqs.map((faq, index) => (
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

      {/* Global Map CTA */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Global Footprint</h2>
            <p className="text-lg text-slate-600 font-medium">
              Our engineering solutions are currently powering businesses in Southeast Asia, Middle East, Africa, Latin America, and the Indian Subcontinent.
            </p>
          </div>
          <div className="relative rounded-[4rem] overflow-hidden shadow-2xl shadow-sky-900/20 border-8 border-white">
            <img
              src={global}
              alt="Krupashindu Global Export Destinations Map for Water Plants"
              className="w-full h-auto opacity-90"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/50 to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

