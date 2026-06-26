import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 bg-water-theme relative overflow-hidden">
      {/* Native React 19 SEO Metadata Hoisting */}
      <title>404 - Page Not Found | Krupashindu Consulting Engineers</title>
      <meta name="robots" content="noindex, follow" />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-md w-full bg-white/70 backdrop-blur-md p-10 rounded-[2.5rem] shadow-2xl shadow-sky-900/5 border border-white/80 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sky-400 to-teal-400 text-white rounded-3xl shadow-xl shadow-sky-500/20 mb-8 animate-bounce-slow">
          <span className="text-3xl font-black tracking-tighter">404</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">Page Not Found</h1>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-sky-600 to-teal-500 text-white rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl shadow-sky-500/20 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            <Home size={14} className="mr-2" />
            Go to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-slate-700 hover:text-sky-600 border border-slate-200 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-slate-50 active:scale-95 transition-all shadow-sm"
          >
            <ArrowLeft size={14} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
