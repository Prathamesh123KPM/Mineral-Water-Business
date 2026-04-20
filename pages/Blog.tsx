
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Calendar,
    Clock,
    User,
    ArrowRight,
    ChevronRight,
    BookOpen
} from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
    const featuredPost = BLOG_POSTS[0];
    const regularPosts = BLOG_POSTS.slice(1);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Spacer for Fixed Navbar */}
            <div className="h-24 md:h-32"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
                {/* Header Section */}
                <header className="mb-20 space-y-4">
                    <div className="flex items-center space-x-2 text-sky-600 font-black text-xs uppercase tracking-widest">
                        <div className="w-8 h-[2px] bg-sky-600"></div>
                        <span>Knowledge Hub</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
                        Mineral Water Business <span className="text-sky-600">Insights & Innovation.</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">
                        Exploring the intersection of engineering excellence and successful mineral water plant setup in the modern industry.
                    </p>
                </header>

                {/* Featured Post */}
                {featuredPost && (
                    <div className="mb-24">
                        <div className="group bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 flex flex-col lg:flex-row min-h-[500px]">
                            <div className="lg:w-1/2 overflow-hidden relative">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute top-8 left-8">
                                    <span className="px-4 py-2 bg-sky-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg">Featured</span>
                                </div>
                            </div>
                            <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center space-y-8">
                                <div className="flex items-center gap-4 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-sky-500" /> {featuredPost.date}</span>
                                    <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-teal-500" /> {featuredPost.readTime}</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight group-hover:text-sky-600 transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="pt-4">
                                    <Link
                                        to={`/blog/${featuredPost.id}`}
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-sky-600 transition-all shadow-xl shadow-slate-900/10"
                                    >
                                        Read Article <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Regular Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {regularPosts.map((post) => (
                        <article key={post.id} className="group bg-white rounded-[3rem] p-6 shadow-2xl shadow-slate-200/60 border border-slate-100 flex flex-col mb-5">
                            <Link
                                to={`/blog/${post.id}`}
                                className="block relative h-64 md:h-80 rounded-[2.5rem] overflow-hidden shadow-lg"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-xl shadow-sm border border-white/50">
                                        {post.category}
                                    </span>
                                </div>
                            </Link>
                            <div className="space-y-6 pt-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                    <span className="flex items-center gap-1.5"><Calendar size={12} className="text-sky-500" /> {post.date}</span>
                                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-teal-500" /> {post.readTime}</span>
                                </div>
                                <Link to={`/blog/${post.id}`} className="block">
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight group-hover:text-sky-600 transition-colors">
                                        {post.title}
                                    </h3>
                                </Link>
                                <p className="text-slate-500 font-medium leading-relaxed line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="pt-8 flex justify-between items-center border-t border-slate-100 mt-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-sky-50 rounded-full flex items-center justify-center text-sky-600">
                                            <User size={14} />
                                        </div>
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{post.author}</span>
                                    </div>
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-sky-600 transition-all shadow-lg shadow-slate-900/10 group/btn"
                                    >
                                        Read More
                                        <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter / CTA */}
                <div className="mt-48 p-12 md:p-20 bg-gradient-to-br from-sky-600 to-blue-700 rounded-[3.5rem] text-white text-center shadow-2xl shadow-sky-900/20 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
                    <div className="max-w-2xl mx-auto space-y-8 relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 backdrop-blur-md">
                            <BookOpen size={32} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Never miss an update.</h2>
                        <p className="text-sky-100 font-medium text-lg">
                            Get the latest industry reports and engineering tips delivered straight to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all font-medium text-white placeholder:text-sky-200"
                            />
                            <button className="px-8 py-4 bg-white text-sky-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-sky-50 transition-all shadow-xl">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
