import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Shield,
  Sparkles,
  Users,
  ArrowUpRight,
  Droplets,
  ClipboardList,
  Factory,
  Rocket,
  Award,
  Clock,
  Zap,
  Settings
} from 'lucide-react';
import { CLIENT_LOGOS, TESTIMONIALS, PRODUCTS, TEAM } from '../constants';
import Photo from '../water.webp';
import home from "../Homepage.webp"
import machines from "../Engineering for efficincy.webp"
const ImageCarousel = React.lazy(() => import('../components/ImageCarousel'));
const YoutubeSection = React.lazy(() => import('../components/YoutubeSection'));
import iso from '../iso.png';
import cert1 from '../certificate (1).webp';
import cert2 from '../certificate (2).webp';
import cert3 from '../certificate (3).webp';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-[#fafcfd]">
      <Helmet>
        <title>Krupashindu | Mineral Water Plant & Bottling Systems
        </title>
        <meta name="description" content="Leading manufacturer of mineral water bottling plants, RO systems & turnkey beverage solutions. Explore 2026 project reports & machinery.
" />
        <link rel="canonical" href="https://krupashindu.co.in/" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none hidden md:block">
          <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-sky-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-teal-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-[-10%] w-[600px] h-[600px] bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Animated Water Waves */}
        <div className="absolute bottom-0 left-0 w-full -z-10 leading-none hidden md:block">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" />
              <use xlinkHref="#gentle-wave" x="48" y="3" />
              <use xlinkHref="#gentle-wave" x="48" y="5" />
              <use xlinkHref="#gentle-wave" x="48" y="7" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-10 relative z-10">
              <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass-water border-sky-100 shadow-sm">
                <img src={iso} alt="ISO 9001:2015 Certified Manufacturing Water Plant" className="w-10 h-10 object-contain" loading="lazy" />
                <span className="text-xs font-bold uppercase tracking-widest text-sky-700">ISO 9001:2015 Certified Engineering</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 tracking-tight md:tracking-[-0.04em] leading-[0.95] mobile-heading-tight">
                Turnkey <span className="text-water-gradient">Mineral Water Plant</span> & <span className="text-water-gradient">Water Business</span> Solutions.
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                Pioneering the future of hydration. We design, manufacture, and export high-efficiency mineral water & beverage production plants globally.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  to="/contact"
                  className="px-10 py-5 bg-sky-600 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-sky-700 transition-all shadow-xl shadow-sky-600/30 hover:shadow-sky-600/40 active:scale-95 flex items-center justify-center group"
                >
                  Start Project
                  <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/products"
                  className="px-10 py-5 glass-water text-slate-700 border border-white/50 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center hover:shadow-lg"
                >
                  Browse Portfolio
                </Link>
              </div>

              <div className="flex items-center space-x-12 pt-6">
                <div className="space-y-1">
                  <div className="text-4xl font-black text-slate-900 tracking-tighter">18Y+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Experience</div>
                </div>
                <div className="w-px h-12 bg-slate-300/50"></div>
                <div className="space-y-1">
                  <div className="text-4xl font-black text-sky-600 tracking-tighter">500+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Plants</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative z-10">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-sky-900/10 border-8 border-white/50 rotate-3 hover:rotate-0 transition-transform duration-700">
                <img
                  src={home}
                  alt="High-Efficiency Industrial Mineral Water and Beverage Plant"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 glass-water p-6 rounded-[2rem] shadow-xl animate-bounce-slow border-t border-white/80 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-teal-400 to-sky-500 p-3.5 rounded-2xl text-white shadow-lg shadow-teal-500/30">
                    <Globe size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase leading-none mb-1">Exporting To</div>
                    <div className="text-2xl font-black text-slate-900">30+ Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Liquid Cards */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <h2 className="text-teal-500 text-xs font-black uppercase tracking-[0.3em]">Mineral Water Plant Engineering</h2>
            <p className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">Complete Production Lines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Mineral Water Plant', icon: <Droplets size={28} />, desc: 'Complete treatment and bottling solutions for safe drinking water.' },
              { title: 'Fruit Juice Plant', icon: <Shield size={28} />, desc: 'Turnkey processing and packaging solutions for fruit juices.' },
              { title: 'Carbonated Soft Drink Plant', icon: <Sparkles size={28} />, desc: 'Complete CSD lines with high-pressure carbonation and filling.' },
              { title: 'Glass Water Bottling Plant', icon: <Users size={28} />, desc: 'Premium bottling equipment for water in glass containers.' }
            ].map((s, idx) => (
              <div key={idx} className="glass-water p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] hover-float group relative overflow-hidden transition-all duration-300 hover:bg-white/60">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-full blur-3xl -z-10 group-hover:bg-teal-100 transition-colors hidden md:block"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 md:mb-10 shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4">{s.title}</h3>
                  <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6 md:mb-8">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center text-sky-700 font-bold text-xs uppercase tracking-widest hover:text-sky-500 transition-colors">
                    Explore <ArrowUpRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW Process Workflow Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-teal-500 text-xs font-black uppercase tracking-[0.3em] mb-4">Our Process</h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900">From Concept to Bottle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-sky-200 via-teal-200 to-sky-200 -z-10"></div>
            {[
              { step: '01', title: 'Consultation', desc: 'Requirement analysis & site feasibility study.', icon: <ClipboardList size={28} /> },
              { step: '02', title: 'Engineering', desc: 'Custom plant layout & machinery design.', icon: <Settings size={28} /> },
              { step: '03', title: 'Manufacturing', desc: 'Precision fabrication & quality testing.', icon: <Factory size={28} /> },
              { step: '04', title: 'Commissioning', desc: 'Installation, training & handover.', icon: <Rocket size={28} /> }
            ].map((item, i) => (
              <div key={i} className="relative pt-8 group text-center md:text-left">
                <div className="w-20 h-20 mx-auto md:mx-0 bg-white border-4 border-sky-50 rounded-full flex items-center justify-center text-sky-600 shadow-lg mb-6 group-hover:scale-110 group-hover:border-teal-100 transition-all z-10 relative">
                  {item.icon}
                </div>
                <div className="px-2">
                  <div className="text-xs font-black text-slate-300 mb-2 tracking-widest">STEP {item.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Deep Ocean Theme */}
      <section className="py-20 md:py-32 bg-slate-900 rounded-2xl md:rounded-[4rem] mx-4 md:mx-6 mb-20 md:mb-32 overflow-hidden relative shadow-2xl shadow-slate-900/30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#0ea5e933,transparent)] hidden md:block"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,#14b8a622,transparent)] hidden md:block"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8">
            <div className="space-y-4">
              <h2 className="text-teal-400 text-xs font-black uppercase tracking-[0.3em]">Our Portfolio</h2>
              <p className="text-3xl md:text-5xl font-black text-white tracking-tight">Featured Products.</p>
            </div>
            <Link to="/products" className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10 hover:border-white/30">
              View Entire Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PRODUCTS.slice(0, 3).map((p) => (
              <div key={p.id} className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/5 group hover:bg-white/10 transition-colors hover:border-white/20">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
                  <img src={p.image} alt={`${p.name} - Krupashindu High Performance Machinery`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" loading="lazy" decoding="async" />
                  {/* <div className="absolute top-6 left-6 z-20 bg-teal-500/20 backdrop-blur-md px-3 py-1 rounded-lg border border-teal-500/30">
                    <span className="text-[10px] font-black text-teal-300 uppercase tracking-widest">{p.category}</span>
                  </div> */}
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-black text-white mb-4 leading-tight">{p.name}</h3>
                  <p className="text-slate-400 text-sm mb-8 line-clamp-2">{p.description}</p>
                  <Link to={`/products/${p.id}`} className="w-full py-4 bg-sky-600 rounded-2xl text-white text-xs font-bold uppercase tracking-widest block text-center hover:bg-sky-500 transition-all shadow-lg shadow-sky-900/50">
                    Product Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW Why Choose Us Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-water rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 relative z-10">
                <h2 className="text-teal-600 text-xs font-black uppercase tracking-[0.3em]">The KCE Advantage</h2>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Engineered for <br />Efficiency.</h3>
                <div className="space-y-6">
                  {[
                    { title: 'Global Standards', desc: 'ISO 9001:2015 certified manufacturing processes ensure international quality.', icon: <Award size={20} /> },
                    { title: 'Rapid Execution', desc: 'Streamlined project management for faster turnaround and plant setup.', icon: <Clock size={20} /> },
                    { title: 'Energy Saving', desc: 'Advanced technology designed to reduce power and water consumption.', icon: <Zap size={20} /> }
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="bg-sky-100 p-3 rounded-xl text-sky-600 mt-1">
                        {feat.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">{feat.title}</h4>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed font-medium">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-600 to-teal-400 rounded-[2rem] rotate-3 opacity-20 blur-lg hidden md:block"></div>
                <img
                  src={machines}
                  alt="Precision Engineered Mineral Water Plant Machinery"
                  width={800}
                  height={600}
                  className="relative rounded-[2rem] shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500 border-4 border-white/50"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW Certifications Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-teal-600 text-xs font-black uppercase tracking-[0.3em]">Our Credentials</h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Accreditations & Certificates.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-items-center">
            {[cert1, cert2, cert3].map((cert, index) => (
              <div key={index} className="bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-slate-100">
                <img
                  src={cert}
                  alt={`Krupashindu Quality Certification ${index + 1}`}
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-teal-600 text-xs font-black uppercase tracking-[0.3em]">Leadership</h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Meet Our Leaders.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {TEAM.map((member) => (
              <div key={member.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-teal-100 rounded-[2.5rem] transform rotate-3 transition-transform group-hover:rotate-6"></div>
                <div className="relative bg-white p-2 rounded-[2.5rem] shadow-xl overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden rounded-[2rem] mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
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

      {/* YouTube Showcase Section */}
      <React.Suspense fallback={<div className="h-96 animate-pulse bg-slate-100 rounded-[4rem] mx-6"></div>}>
        <YoutubeSection />
      </React.Suspense>

      {/* Infrastructure Carousel */}
      <section className="py-20 bg-slate-50 mb-32">
        <div className="text-center mb-16 space-y-4 px-6">
          <h2 className="text-teal-600 text-xs font-black uppercase tracking-[0.3em]">Our Valued Clients</h2>
          <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Our Clients & Partners.</p>
        </div>
        <React.Suspense fallback={<div className="h-64 animate-pulse bg-white border-y border-slate-100"></div>}>
          <ImageCarousel />
        </React.Suspense>
      </section>

      {/* Testimonials */}
      <section className="pb-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass-water p-12 rounded-[2.5rem] hover-float relative group">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-sky-100 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"></div>
                <div className="text-teal-500 mb-8 font-black text-6xl leading-none opacity-50">“</div>
                <p className="text-slate-700 font-medium italic mb-10 text-lg leading-relaxed relative z-10">
                  {t.quote}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center font-black text-slate-400 shadow-inner">
                    {t.client.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-sm tracking-tight">{t.client}</div>
                    <div className="text-[10px] font-bold text-sky-600 uppercase tracking-widest">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW Call to Action Section */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">Ready to Start Your Plant?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">Get a customized project report and quotation from our expert engineering team today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link to="/contact" className="px-10 py-4 bg-teal-500 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/30">
                Get Free Quote
              </Link>
              <Link to="/products" className="px-10 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold uppercase tracking-widest hover:bg-white/20 transition-all">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
