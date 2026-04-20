import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    Calendar,
    Clock,
    User,
    ArrowLeft,
    MessageCircle,
    Share2,
    Linkedin,
    Twitter,
    Facebook,
    Copy,
    Check
} from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = BLOG_POSTS.find(p => p.id === id);
    const [copied, setCopied] = React.useState(false);

    const shareUrl = window.location.href;

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post?.title,
                    text: post?.excerpt,
                    url: shareUrl,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!post) {
        return (
            <div className="min-h-screen pt-48 pb-24 text-center px-6">
                <h2 className="text-3xl font-black text-slate-900 mb-6">Post Not Found</h2>
                <Link to="/blog" className="text-sky-600 font-bold hover:underline inline-flex items-center">
                    <ArrowLeft size={18} className="mr-2" /> Back to Hub
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Spacer for Fixed Navbar */}
            <div className="h-24 md:h-32 bg-slate-50"></div>

            {/* Hero Header Section */}
            <section className="bg-slate-50 pt-16 pb-24 border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex items-center gap-4 text-sky-600 font-black text-[10px] uppercase tracking-[0.2em] mb-8">
                        <Link to="/blog" className="hover:text-sky-800 transition-colors">Blog Hub</Link>
                        <div className="w-4 h-[1px] bg-sky-200"></div>
                        <span>{post.category}</span>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                            {post.title}
                        </h1>
                    </div>

                    <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-slate-200">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400">
                                <User size={18} />
                            </div>
                            <div className="text-sm">
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Author</div>
                                <div className="font-extrabold text-slate-900 leading-none">{post.author}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400">
                                <Calendar size={18} />
                            </div>
                            <div className="text-sm">
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Date</div>
                                <div className="font-extrabold text-slate-900 leading-none">{post.date}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400">
                                <Clock size={18} />
                            </div>
                            <div className="text-sm">
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Reading Time</div>
                                <div className="font-extrabold text-slate-900 leading-none">{post.readTime}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Image */}
            <div className="max-w-5xl mx-auto px-6 -mt-12 md:-mt-20">
                <div className="aspect-square md:aspect-video rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </div>

            {/* Article Content */}
            <div className="max-w-4xl mx-auto px-6 pt-16 pb-32">
                <article className="space-y-12">
                    {/* We'll use custom-styled div instead of 'prose' to ensure compatibility */}
                    <div
                        className="text-slate-600 text-lg md:text-xl font-medium leading-[1.8]
                        [&>h2]:text-3xl [&>h2]:font-black [&>h2]:text-slate-900 [&>h2]:mt-12 [&>h2]:mb-6
                        [&>p]:mb-8
                        [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8
                        [&>li]:mb-4
                        [&>strong]:text-slate-900 [&>strong]:font-black
                      "
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Social Share & Back */}
                    <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Share Article</span>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={handleShare}
                                    className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all md:hidden"
                                >
                                    <Share2 size={16} />
                                </button>
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#0077b5] hover:text-white transition-all"
                                >
                                    <Linkedin size={16} />
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#1da1f2] hover:text-white transition-all"
                                >
                                    <Twitter size={16} />
                                </a>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#1877f2] hover:text-white transition-all"
                                >
                                    <Facebook size={16} />
                                </a>
                                <button
                                    onClick={copyToClipboard}
                                    className="h-10 px-4 rounded-xl bg-slate-50 flex items-center gap-2 text-slate-500 hover:bg-sky-600 hover:text-white transition-all text-[10px] font-black uppercase tracking-widest group"
                                >
                                    {copied ? <Check size={14} className="text-teal-400 group-hover:text-white" /> : <Copy size={14} className="group-hover:text-white" />}
                                    <span className="group-hover:text-white">{copied ? 'Copied' : 'Copy Link'}</span>
                                </button>
                            </div>
                        </div>
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-widest hover:text-sky-600 transition-colors"
                        >
                            <ArrowLeft size={16} /> Back to Hub
                        </Link>
                    </div>
                </article>
            </div>

            {/* Footer CTA Section */}
            <section className="bg-slate-900 py-32 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px]"></div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-10">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto flex items-center justify-center text-sky-400">
                        <MessageCircle size={32} />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Need expert advice?</h2>
                        <p className="text-slate-400 text-lg font-medium max-w-xl mx-auto leading-relaxed">
                            Our engineering team is ready to help you architect your next beverage production plant.
                        </p>
                    </div>
                    <div className="pt-4">
                        <Link
                            to="/contact"
                            className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-sky-400 hover:text-white transition-all shadow-2xl"
                        >
                            Start Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetail;
