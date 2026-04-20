import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, Globe } from 'lucide-react';
import logo from '../waterlogo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Bio */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Krupashindu Turnkey Beverage and Mineral Water Solutions Logo" className="h-14 w-auto object-contain bg-white rounded-lg p-1" />
              <span className="text-xl font-bold text-white">Krupashindu</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Leading manufacturer and exporter of mineral water plants and beverage machinery since 2005. Providing global turnkey solutions for modern production.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/krupashindu.mineralla/" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/krupashindu_/" className="hover:text-blue-400 transition-colors"><Instagram size={20} /></a>
              <a href="https://in.linkedin.com/in/krupashindu" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.youtube.com/@KrupashinduConsultingEngineer" className="hover:text-blue-400 transition-colors"><Youtube size={20} /></a>
              <a href="https://share.google/7nJWw4odkiG5QBt9L" className="hover:text-blue-400 transition-colors" title="Google My Business"><Globe size={20} /></a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Our Story</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Our Product Range</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Turnkey Services</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Global Projects</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-500 mt-1 shrink-0" />
                <address className="not-italic">
                  <a href="tel:+919821022367" className="hover:underline">+91 98210 22367</a><br />
                  <a href="tel:+918080978282" className="hover:underline">+91 80809 78282</a>
                </address>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-500 mt-1 shrink-0" />
                <span>krupashinduce [at] gmail [dot] com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-500 mt-1 shrink-0" />
                <address className="not-italic">Office No 1008 10th Floor, Kamdhenu 23 MIDC Thane Belapur Rd Kopar Khairane Navi Mumbai - 400709</address>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-white font-bold mb-6">Business Hours</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 2:00 PM</p>
              <p>Sun: Closed</p>
            </div>
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest font-bold text-emerald-500 mb-2">Quality Assurance</p>
              <p className="text-sm">ISO 9001:2015 Certified Company</p>
            </div>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="border-t border-gray-800 pt-8 pb-8 mb-8">
          <p className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-widest">Popular Industry Searches</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-gray-600">
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
              <span key={i} className="hover:text-blue-400 transition-colors cursor-default">{tag} {i !== 29 && "•"}</span>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Krupashindu Consulting Engineers. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
