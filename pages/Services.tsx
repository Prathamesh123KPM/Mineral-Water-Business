
import React from 'react';
import { Settings, Layout, ShieldCheck, HelpCircle, HardHat } from 'lucide-react';
import sales from "../sales.webp"
const Services: React.FC = () => {
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

  return (
    <div className="pt-20 min-h-screen">
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
      <section className="py-24 mx-4 md:mx-6 mb-12 bg-slate-900 text-white rounded-[4rem] overflow-hidden relative shadow-2xl">
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
    </div>
  );
};

export default Services;
