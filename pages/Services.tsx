import React, { useState } from 'react';
import { Settings, Layout, ShieldCheck, HelpCircle, HardHat, ChevronDown } from 'lucide-react';
import sales from "../sales.webp"

const Services: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const mainServices = [
    {
      title: 'Turnkey Plant Setup',
      icon: <Layout className="h-8 w-8" />,
      desc: 'Complete end-to-end consulting and execution for your mineral water or beverage plant. We take care of everything from licensing to final testing.',
      details: ['Plant Layout & Design', 'ISI/ISO Compliance', 'Machinery Sourcing', 'Erection & Commissioning']
    },
    {
      title: 'Technical Support',
      icon: <HelpCircle className="h-8 w-8" />,
      desc: 'Expert technical assistance for all types of water treatment systems. Our team is available for troubleshooting and operational training.',
      details: ['Staff Training', 'Operational Support', 'Emergency Repairs', 'Documentation']
    },
    {
      title: 'Installation & Commissioning',
      icon: <HardHat className="h-8 w-8" />,
      desc: 'Precision engineering for the installation of heavy machinery and complex RO systems to ensure optimal efficiency from day one.',
      details: ['On-site Assembly', 'System Integration', 'Trial Production', 'Quality Testing']
    },
    {
      title: 'Annual Maintenance (AMC)',
      icon: <Settings className="h-8 w-8" />,
      desc: 'Regular preventative maintenance to ensure zero downtime and long life for your bottling and purification equipment.',
      details: ['Predictive Maintenance', 'Genuine Spare Parts', 'Efficiency Audits', 'Periodic Servicing']
    }
  ];

  const serviceFaqs = [
    {
      q: "What is included in your Turnkey Plant Setup service?",
      a: "Our turnkey service includes plant layout design, ISI/ISO compliance consulting, machinery sourcing and fabrication, complete on-site piping, erection, commissioning, and trial production."
    },
    {
      q: "Do you provide operational training for plant staff?",
      a: "Yes, during the commissioning phase, our expert engineers conduct thorough hands-on training for your operators on system controls, CIP chemical washing, daily maintenance, and quality lab testing."
    },
    {
      q: "What does your Annual Maintenance Contract (AMC) cover?",
      a: "Our AMC covers regular predictive maintenance visits, efficiency audits, valve and pump servicing, sensor calibration, and priority supply of genuine spare parts to ensure zero unplanned downtime."
    },
    {
      q: "Can you assist with upgrading or expanding an existing water bottling facility?",
      a: "Absolutely. We offer modernization services including adding automated RFC blocks, robotic packaging, energy-recovery RO systems, and capacity expansion from 2,000 BPH up to 20,000 BPH."
    },
    {
      q: "How do I request emergency technical support or spare parts?",
      a: "Clients can reach our dedicated export and domestic service division 24/7 via phone (+91 98210 22367) or email (krupashinduce@gmail.com). We maintain a vast inventory of genuine components for immediate global dispatch."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceFaqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="pt-20 min-h-screen">
      <title>Turnkey Water & Bottling Plant Services | Krupashindu</title>
      <meta name="description" content="Complete turnkey consulting, technical support, AMC, and plant commissioning for mineral water bottling plants & RO systems globally." />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mineralwaterbusiness.com/services" />
      <meta property="og:title" content="Turnkey Water & Bottling Plant Services | Krupashindu" />
      <meta property="og:description" content="Complete turnkey consulting, technical support, AMC, and plant commissioning for mineral water bottling plants & RO systems globally." />
      <meta property="og:image" content="https://mineralwaterbusiness.com/Homepage.webp" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://mineralwaterbusiness.com/services" />
      <meta name="twitter:title" content="Turnkey Water & Bottling Plant Services | Krupashindu" />
      <meta name="twitter:description" content="Complete turnkey consulting, technical support, AMC, and plant commissioning for mineral water bottling plants & RO systems globally." />
      <meta name="twitter:image" content="https://mineralwaterbusiness.com/Homepage.webp" />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <section className="bg-sky-900 py-32 text-white rounded-b-[4rem] relative overflow-hidden mx-2 mt-2 shadow-2xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[100px] -z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-[100px] -z-0"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight">Turnkey <span className="text-teal-400">Water Business</span> & <span className="text-sky-400">Plant Setup</span> Services</h1>
          <p className="text-sky-100 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-medium">
            Beyond manufacturing, we provide the consulting and support necessary to launch and scale a successful **mineral water plant** or **water business** globally.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {mainServices.map((service, idx) => (
              <div key={idx} className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] glass-water hover-float transition-all duration-300 group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-sky-100 to-white text-sky-600 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 md:mb-6">{service.title}</h3>
                <p className="text-slate-600 mb-8 md:mb-10 leading-relaxed font-medium">{service.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-center space-x-3 text-sm font-bold text-slate-700">
                      <div className="h-2 w-2 rounded-full bg-teal-400"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Excellence */}
      <section className="py-24 mx-4 md:mx-6 mb-24 bg-slate-900 text-white rounded-[4rem] overflow-hidden relative shadow-2xl">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${sales})` }}
        ></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl font-black tracking-tight">Comprehensive After-Sales & Maintenance</h2>
              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                We believe our relationship with a client truly begins after the sale. Our dedicated export and domestic service divisions ensure that distance is never a barrier to quality support.
              </p>
              <div className="space-y-8">
                {[
                  { title: 'Global Spare Parts Inventory', desc: 'Fast shipping of genuine components worldwide.' },
                  { title: 'Remote Diagnosis', desc: 'Expert troubleshooting via video consulting and sensors.' },
                  { title: 'On-Site Training', desc: 'Empowering your staff to manage the plant effectively.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-6">
                    <div className="bg-sky-500/10 p-3 rounded-2xl text-sky-400 h-fit border border-sky-500/20">
                      <ShieldCheck size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{item.title}</h4>
                      <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-[3rem] border border-white/10 shadow-2xl">
              <img
                src={sales}
                alt="Krupashindu After-Sales Service and Maintenance Support for Mineral Water Plants"
                className="rounded-[2rem] shadow-lg border border-white/50 h-auto w-full"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 rounded-[4rem] mx-4 md:mx-6 mb-16 shadow-xl border border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-teal-600 text-xs font-black uppercase tracking-[0.3em]">Service Details</h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</p>
          </div>
          <div className="space-y-6">
            {serviceFaqs.map((faq, index) => (
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
    </div>
  );
};

export default Services;
