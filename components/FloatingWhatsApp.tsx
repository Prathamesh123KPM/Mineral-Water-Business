import React from 'react';
import whatsappIcon from '../whatsappicon.png';

const FloatingWhatsApp: React.FC = () => {
    return (
        <a
            href="https://web.whatsapp.com/send?phone=919821022367&text="
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-110 group flex items-center justify-center"
            aria-label="Chat on WhatsApp"
        >
            <img src={whatsappIcon} alt="Chat on WhatsApp" className="w-16 h-16 drop-shadow-lg" />
            <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-sm pointer-events-none">
                Chat with us
            </span>
        </a>
    );
};

export default FloatingWhatsApp;
