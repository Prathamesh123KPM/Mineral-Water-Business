import React, { useState } from 'react';
import { Youtube, Play } from 'lucide-react';

const YoutubeSection: React.FC = () => {
    const [playingMap, setPlayingMap] = useState<{[key: number]: boolean}>({});

    const VIDEOS = [
        { 
            id: "OtFAZRQ32pU", 
            title: "Fruit Juice Business & Factory Tour", 
            desc: "An inside look at a real, low-cost, high-profit fruit juice factory and a guide on setting up your own juice business.",
            uploadDate: "2025-02-10T10:00:00+05:30"
        },
        { 
            id: "Iu4wXtPgueI", 
            title: "Low Budget Mineral Water Plant Setup", 
            desc: "Complete business guide and cost breakdown for starting a packaged drinking water plant on a low budget.",
            uploadDate: "2025-03-12T14:30:00+05:30"
        },
        { 
            id: "VQy6xMufrVU", 
            title: "Natural & Alkaline Mineral Water Plant Cost", 
            desc: "A detailed guide on setup costs, machinery, and filtration systems for natural mineral water and alkaline water plants in India.",
            uploadDate: "2025-01-20T09:15:00+05:30"
        },
        { 
            id: "Rhf1YL6-NBA", 
            title: "How to Start a Packaged Mineral Water Plant", 
            desc: "Step-by-step guidance on starting a mineral water plant business, covering manufacturing, licensing, and bottle production.",
            uploadDate: "2024-11-05T11:45:00+05:30"
        }
    ];

    const videoSchema = {
        "@context": "https://schema.org",
        "@graph": VIDEOS.map(v => ({
            "@type": "VideoObject",
            "name": v.title,
            "description": v.desc,
            "thumbnailUrl": `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`,
            "uploadDate": v.uploadDate,
            "embedUrl": `https://www.youtube.com/embed/${v.id}`,
            "contentUrl": `https://www.youtube.com/watch?v=${v.id}`,
            "publisher": {
                "@type": "Organization",
                "name": "Krupashindu Consulting Engineer",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://mineralwaterbusiness.com/waterlogo.png"
                }
            }
        }))
    };

    return (
        <section className="py-24 relative overflow-hidden bg-slate-50">
            <script type="application/ld+json">
                {JSON.stringify(videoSchema)}
            </script>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl -z-10 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl -z-10 opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-2xl mb-4">
                        <Youtube className="text-red-600" size={32} />
                    </div>
                    <h2 className="text-teal-500 text-xs font-black uppercase tracking-[0.3em]">Watch Us In Action</h2>
                    <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Our Latest Technology.</p>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        See how our advanced water treatment plants and bottling machines are manufactured and installed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
                    {VIDEOS.map((video, index) => (
                        <div key={index} className="bg-white rounded-[2.5rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="relative rounded-[2rem] overflow-hidden mb-6 bg-slate-900">
                                <div className="aspect-w-16 aspect-h-9 relative pb-[56.25%]">
                                    {playingMap[index] ? (
                                        <iframe
                                            className="absolute top-0 left-0 w-full h-full"
                                            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <button
                                            onClick={() => setPlayingMap(prev => ({ ...prev, [index]: true }))}
                                            className="absolute top-0 left-0 w-full h-full group/btn focus:outline-none cursor-pointer"
                                        >
                                            <img
                                                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                                alt={video.title}
                                                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 group-hover/btn:scale-105"
                                                loading="lazy"
                                            />
                                            {/* Play Button Overlay */}
                                            <div className="absolute inset-0 bg-slate-950/20 group-hover/btn:bg-slate-950/40 transition-colors flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl shadow-red-900/30 transform group-hover/btn:scale-110 transition-all duration-300">
                                                    <Play fill="white" size={24} className="ml-1" />
                                                </div>
                                            </div>
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="px-4 pb-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-sky-600 transition-colors leading-tight">
                                        {video.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                        {video.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 backdrop-blur-md rounded-full z-10 hidden md:block"></div>
            </div>
        </section>
    );
};

export default YoutubeSection;
