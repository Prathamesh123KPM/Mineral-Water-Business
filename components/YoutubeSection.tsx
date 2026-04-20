import React from 'react';
import { Youtube, Play } from 'lucide-react';

const YoutubeSection: React.FC = () => {
    // Array of video IDs - currently using placeholder duplicates
    // User can replace these IDs with unique videos
    const VIDEOS = [
        { id: "Rhf1YL6-NBA", title: "Mineral Water Bussiness" },
        { id: "OtFAZRQ32pU", title: "Fruit Juice Plant" },
        { id: "Iu4wXtPgueI", title: "Low Budget Mineral Water Plant" },
        { id: "VQy6xMufrVU", title: "Natural/Mineral Water Plant" }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-slate-50">
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
                        See how our advanced water treatment plants are manufactured and installed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {VIDEOS.map((video, index) => (
                        <div key={index} className="space-y-4 group">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-sky-900/10 border-4 border-white transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="aspect-w-16 aspect-h-9 relative pb-[56.25%] bg-slate-900">
                                    <iframe
                                        className="absolute top-0 left-0 w-full h-full"
                                        src={`https://www.youtube.com/embed/${video.id}`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        loading="lazy"
                                    ></iframe>
                                </div>
                                {/* Overlay gradient for better integration */}
                                <div className="absolute inset-0 border-[6px] border-white/10 rounded-[2rem] pointer-events-none"></div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 text-center group-hover:text-sky-600 transition-colors">
                                {video.title}
                            </h3>
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
