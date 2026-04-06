
import React from 'react';

// B70 Series
import b70_1_jpeg from '../pages/bottle/b70 (1).webp';
import b70_2_jpeg from '../pages/bottle/b70 (2).webp';
import b70_3_jpeg from '../pages/bottle/b70 (3).webp';
import b70_4_jpeg from '../pages/bottle/b70 (4).webp';
import b70_6_jpeg from '../pages/bottle/b70 (6).webp';
import b70_7_jpeg from '../pages/bottle/b70 (7).webp';
import b70_8_jpeg from '../pages/bottle/b70 (8).webp';
import b70_9_jpeg from '../pages/bottle/b70 (9).webp';
import b70_13_jpeg from '../pages/bottle/b70 (13).webp';

// B1 Series
import b1_2_jpeg from '../pages/bottle/b1 (2).webp';
import b1_5_jpeg from '../pages/bottle/b1 (5).webp';
import b1_10_jpeg from '../pages/bottle/b1 (10).webp';
import b1_15_jpeg from '../pages/bottle/b1 (15).webp';
import b1_20_jpeg from '../pages/bottle/b1 (20).webp';
import b1_25_jpeg from '../pages/bottle/b1 (25).webp';
import b1_30_jpeg from '../pages/bottle/b1 (30).webp';
import b1_35_jpeg from '../pages/bottle/b1 (35).webp';
import b1_40_jpeg from '../pages/bottle/b1 (40).webp';
import b1_45_jpeg from '../pages/bottle/b1 (45).webp';
import b1_50_jpeg from '../pages/bottle/b1 (40).webp'; // Reusing 40 as placeholder if 50 missing, wait, let me check list_dir
import b1_60_jpeg from '../pages/bottle/b1 (60).webp';


const CLIENT_IMAGES = [
    { src: b70_1_jpeg, alt: 'B70 (1)' },
    { src: b70_2_jpeg, alt: 'B70 (2)' },
    { src: b70_3_jpeg, alt: 'B70 (3)' },
    { src: b70_4_jpeg, alt: 'B70 (4)' },
    { src: b70_6_jpeg, alt: 'B70 (6)' },
    { src: b70_7_jpeg, alt: 'B70 (7)' },
    { src: b70_8_jpeg, alt: 'B70 (8)' },
    { src: b70_9_jpeg, alt: 'B70 (9)' },
    { src: b70_13_jpeg, alt: 'B70 (13)' },

    { src: b1_2_jpeg, alt: 'B1 (2)' },
    { src: b1_5_jpeg, alt: 'B1 (5)' },
    { src: b1_10_jpeg, alt: 'B1 (10)' },
    { src: b1_15_jpeg, alt: 'B1 (15)' },
    { src: b1_20_jpeg, alt: 'B1 (20)' },
    { src: b1_25_jpeg, alt: 'B1 (25)' },
    { src: b1_30_jpeg, alt: 'B1 (30)' },
    { src: b1_35_jpeg, alt: 'B1 (35)' },
    { src: b1_40_jpeg, alt: 'B1 (40)' },
    { src: b1_45_jpeg, alt: 'B1 (45)' },
    { src: b1_60_jpeg, alt: 'B1 (60)' },
];

const ImageCarousel: React.FC = () => {
    return (
        <div className="w-full overflow-hidden bg-[#f8fafc] py-12 border-y border-slate-100">
            <div className="relative">
                {/* Gradient Overlays for smooth fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                {/* Marquee Container */}
                <div className="flex animate-marquee hover:pause-animation">
                    {/* First set of images */}
                    <div className="flex shrink-0 items-center">
                        {CLIENT_IMAGES.map((img, idx) => (
                            <div
                                key={`client-1-${idx}`}
                                className="flex items-center justify-center w-[50vw] md:w-[33.33vw] lg:w-[33.33vw] px-2 md:px-4"
                            >
                                <div className="w-[95%] aspect-square border-2 border-slate-100 rounded-[2rem] flex items-center justify-center overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-teal-400 group bg-white relative p-2 md:p-6">
                                    <img
                                        src={img.src}
                                        alt={`${img.alt} - Krupashindu Mineral Water Plant Installation`}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-sky-900/5 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="flex shrink-0 items-center">
                        {CLIENT_IMAGES.map((img, idx) => (
                            <div
                                key={`client-2-${idx}`}
                                className="flex items-center justify-center w-[50vw] md:w-[33.33vw] lg:w-[33.33vw] px-2 md:px-4"
                            >
                                <div className="w-[95%] aspect-square border-2 border-slate-100 rounded-[2rem] flex items-center justify-center overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-teal-400 group bg-white relative p-2 md:p-6">
                                    <img
                                        src={img.src}
                                        alt={`${img.alt} - Turnkey Beverage Machinery Setup`}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-sky-900/5 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 180s linear infinite;
          width: max-content;
        }
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default ImageCarousel;
