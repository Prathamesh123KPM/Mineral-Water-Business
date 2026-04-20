import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Global Projects | Mineral Water Plant Installations 2026</title>
        <meta name="description" content="View our successful turnkey mineral water and beverage plant installations across Southeast Asia, Africa, and beyond. Proven engineering excellence worldwide." />
        <link rel="canonical" href="https://krupashindu.co.in/projects" />
      </Helmet>
      <section className="bg-emerald-800 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-6">Our Installed Excellence</h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-lg">
            A visual showcase of our turnkey projects across diverse global landscapes.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative rounded-3xl overflow-hidden shadow-lg h-96">
                <img
                  src={project.image}
                  alt={`${project.title} - Mineral Water Plant Installation Project`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
            {/* Extended gallery placeholders */}
            {[1, 2, 3].map((i) => (
              <div key={`extra-${i}`} className="group relative rounded-3xl overflow-hidden shadow-lg h-96 bg-gray-100">
                <img
                  src={`https://picsum.photos/seed/${i + 10}/800/1200`}
                  alt="Krupashindu Turnkey Plant Installation Project Gallery"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-bold border-2 border-white px-6 py-2 rounded-full uppercase tracking-widest text-xs">View Project</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Want to see a plant in operation?</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-12">Contact us to arrange a visit to one of our successfully commissioned plant locations near you.</p>
          <a href="#/contact" className="bg-blue-800 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-900 shadow-xl transition-all">
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
