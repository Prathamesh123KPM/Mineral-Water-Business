
import os
import re

directory = r'c:\Users\viju6\Downloads\krupa\pages\bottle'
files = os.listdir(directory)

b1_files = []
for f in files:
    match = re.match(r'b1 \((\d+)\)\.jpeg', f)
    if match:
        num = int(match.group(1))
        b1_files.append((num, f))

b1_files.sort()
selected_files = b1_files[:65]

output_file = r'c:\Users\viju6\Downloads\krupa\components\ImageCarousel.tsx'

with open(output_file, 'w', encoding='utf-8') as f_out:
    f_out.write("import React from 'react';\n\n")

    imports = []
    array_items = []

    for num, filename in selected_files:
        var_name = f"b1_{num}_jpeg"
        f_out.write(f"import {var_name} from '../pages/bottle/{filename}';\n")
        array_items.append(f"    {{ src: {var_name}, alt: 'B1 ({num})' }},")

    f_out.write("\nconst CLIENT_IMAGES = [\n")
    for item in array_items:
        f_out.write(item + "\n")
    f_out.write("];\n")

    f_out.write("""
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
                                className="flex items-center justify-center w-[50vw] md:w-[33.33vw] lg:w-[25vw] px-2 md:px-4"
                            >
                                <div className="w-[95%] md:w-[85%] aspect-square border-2 border-slate-100 rounded-[2rem] flex items-center justify-center overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-teal-400 group bg-white relative p-2 md:p-6">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
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
                                className="flex items-center justify-center w-[50vw] md:w-[33.33vw] lg:w-[25vw] px-2 md:px-4"
                            >
                                <div className="w-[95%] md:w-[85%] aspect-square border-2 border-slate-100 rounded-[2rem] flex items-center justify-center overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-teal-400 group bg-white relative p-2 md:p-6">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
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
        .hover\\\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default ImageCarousel;
""")
