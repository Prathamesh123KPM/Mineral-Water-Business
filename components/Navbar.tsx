
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';

import logo from '../waterlogo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2 glass-nav shadow-lg shadow-sky-100/50' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <img src={logo} alt="Krupashindu Mineral Water Plant and Machinery Manufacturer Logo" className="h-12 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-slate-800 leading-none tracking-tight group-hover:text-sky-700 transition-colors">Krupashindu</span>
                {/* <span className="text-[10px] uppercase tracking-[0.2em] text-sky-500 font-bold mt-0.5">Plant & Machinery</span> */}
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${isActive(link.path)
                  ? 'bg-sky-100 text-sky-700'
                  : 'text-slate-500 hover:text-sky-600 hover:bg-white/50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 bg-gradient-to-r from-sky-600 to-teal-500 text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-xl hover:shadow-sky-500/30 transition-all active:scale-95 transform hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2 hover:bg-sky-50 rounded-xl transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-water border-t border-white/50 shadow-2xl py-6 animate-in slide-in-from-top duration-300">
          <div className="px-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-lg font-bold tracking-tight transition-colors ${isActive(link.path) ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-white/50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-6 text-center bg-gradient-to-r from-sky-600 to-teal-500 text-white py-4 rounded-xl font-bold shadow-lg shadow-sky-500/20"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
