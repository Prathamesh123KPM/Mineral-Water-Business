
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send, Loader2, CheckCircle, AlertCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showCount, setShowCount] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        requirements: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    useEffect(() => {
        // Initial popup on load
        const initialTimer = setTimeout(() => {
            if (!isFormSubmitted && showCount < 5) {
                setIsVisible(true);
                setShowCount(prev => prev + 1);
            }
        }, 1000); // Show after 1 second initially

        return () => clearTimeout(initialTimer);
    }, []);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (!isFormSubmitted && showCount < 5 && showCount > 0) {
            intervalId = setInterval(() => {
                if (!isVisible) {
                    setIsVisible(true);
                    setShowCount((prev) => prev + 1);
                }
            }, 10000); // 10 seconds interval
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [showCount, isVisible, isFormSubmitted]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        if (!formData.name || !formData.email || !formData.requirements) {
            alert('Please fill in all required fields');
            setIsSubmitting(false);
            return;
        }

        try {
            await emailjs.send(
                'service_y5vqpvq',
                'template_edzdbed',
                {
                    from_name: formData.name,
                    company: formData.company,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: formData.requirements,
                    to_email: 'krupashinduce@gmail.com'
                },
                'V0g1zF6hq8jPrcste'
            );
            setSubmitStatus('success');
            setIsFormSubmitted(true);
            setFormData({ name: '', company: '', email: '', phone: '', requirements: '' });
            setTimeout(() => setIsVisible(false), 3000); // Close after 3 seconds on success
        } catch (error) {
            console.error('Email error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isVisible && !isFormSubmitted) return null; // Don't render if not visible (unless you want it always there but hidden with CSS opacity/visibility for animations)
    // Actually better to render null if not visible regarding the interval logic to work purely on state? 
    // The logic above resets timer if component unmounts? No, interval is in UseEffect.
    // Let's keep it simple: if not visible, return null. The Interval in the App or a global context would be better but here it's fine.
    // Wait, if I return null, the component unmounts and the useEffect cleanup runs. The interval stops.
    // When does it mount again? It doesn't.
    // So I should ALWAYS render it but hide it with CSS or keep logic in parent. 
    // OR: The requirement is "popup ... when first reload ... and every 10sec interval".
    // If I close it, I want it to come back.
    // If I modify the component to just hide with CSS `display: none` or just return null, I lose the state.
    // CORRECTION: Logic needs to be robust. 
    // I will use a separate logic hook or just keep the component mounted but return nothing visible?
    // No, `return null` unmounts.

    // REVISED LOGIC: changing `isVisible` to false should NOT unmount the component causing the effect to stop tracking time.
    // I will render an empty div or use `display: none` or better yet, make the overlay conditional but keep the component mounted.

    if (isFormSubmitted) return null;

    return (
        <>
            {isVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
                    <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-10"
                        >
                            <X size={20} className="text-slate-600" />
                        </button>

                        <div className="p-8 max-h-[90vh] overflow-y-auto">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-black text-slate-900 leading-tight">Get a Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500">Consultation</span></h2>
                                <p className="text-slate-500 text-sm mt-2">Fill the form and our team will get back to you.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {submitStatus === 'success' && (
                                    <div className="bg-green-50 text-green-700 p-3 rounded-xl flex items-center text-sm">
                                        <CheckCircle className="mr-2 shrink-0" size={18} />
                                        <span>Message sent successfully!</span>
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="bg-red-50 text-red-700 p-3 rounded-xl flex items-center text-sm">
                                        <AlertCircle className="mr-2 shrink-0" size={18} />
                                        <span>Failed to send. Please try again.</span>
                                    </div>
                                )}

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all text-sm font-medium"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all text-sm font-medium"
                                            placeholder="Company"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all text-sm font-medium"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all text-sm font-medium"
                                            placeholder="Phone"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Requirements *</label>
                                    <textarea
                                        rows={3}
                                        name="requirements"
                                        value={formData.requirements}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all text-sm font-medium"
                                        placeholder="Describe your requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 bg-gradient-to-r from-sky-600 to-teal-500 text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-sky-500/30 transition-all flex items-center justify-center group disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <>Sending... <Loader2 size={16} className="ml-2 animate-spin" /></>
                                    ) : (
                                        <>Send Request <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" /></>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactPopup;
