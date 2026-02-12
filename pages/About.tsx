
import React from 'react';
import { Target, Eye, ShieldCheck, Award, Zap } from 'lucide-react';
import global from "../global.png"
import plant from "../plant.png"
import { TEAM } from '../constants';


const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-sky-200/30 to-teal-200/30 rounded-full blur-[100px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-teal-600 text-xs font-black uppercase tracking-[0.3em]">Our Story</h2>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
            Legacy of <span className="text-water-gradient">Engineering</span> Excellence.
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Mineral Water Business by Krupashindu has been the cornerstone of industrial water treatment and beverage production since 2005.
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
                  alt="Engineering Team"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-10">
              <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full glass-water border-sky-100 shadow-sm">
                <Award size={18} className="text-teal-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Established 2005</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Experienced Technocrats at Your Service
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
              <div key={i} className="bg-white/80 backdrop-blur-md p-12 rounded-[2.5rem] border border-white hover-float shadow-lg shadow-sky-900/5">
                <div className={`w-16 h-16 ${v.bg} rounded-2xl flex items-center justify-center mb-10 ${v.color}`}>
                  {v.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6">{v.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{v.desc}</p>
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
              alt="Global Reach"
              className="w-full h-auto opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/50 to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
