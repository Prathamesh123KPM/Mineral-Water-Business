
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Building2, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
      // TODO: Replace with your actual EmailJS Service ID, Template ID, and Public Key
      await emailjs.send(
        'service_cyr60lp',
        'template_zpz4obb',
        {
          from_name: formData.name,
          company: formData.company,
          from_email: formData.email,
          phone: formData.phone,
          country: formData.country,
          message: formData.requirements,
          to_email: 'krupashinduce@gmail.com'
        },
        'BTJk73cCsqV7C7SVl'
      );
      setSubmitStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', country: '', requirements: '' });
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">Get in <span className="text-water-gradient">Touch</span>.</h1>
            <p className="text-slate-600 text-xl font-medium max-w-xl mx-auto leading-relaxed">
              Connect with our technocrats for a free consultation on your next bottling project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 glass-water p-12 md:p-16 rounded-[3rem] shadow-2xl shadow-sky-900/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sky-100 to-teal-100 rounded-bl-[10rem] opacity-50 -z-10"></div>
              <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Technical Inquiry Form</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                {submitStatus === 'success' && (
                  <div className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center mb-6">
                    <CheckCircle className="mr-3" size={24} />
                    <div>
                      <p className="font-bold">Message sent successfully!</p>
                      <p className="text-sm">We'll get back to you shortly.</p>
                    </div>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-xl flex items-center mb-6">
                    <AlertCircle className="mr-3" size={24} />
                    <div>
                      <p className="font-bold">Failed to send message.</p>
                      <p className="text-sm">Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/60 border border-white rounded-2xl focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all font-medium"
                      placeholder="Ex: Rahul Sharma"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/60 border border-white rounded-2xl focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all font-medium"
                      placeholder="Ex: Aqua Life Pvt Ltd"
                    />
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="space-y-3 text-left">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-white/60 border border-white rounded-2xl focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all font-medium"
                      placeholder="rahul@company.com"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/60 border border-white rounded-2xl focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all font-medium"
                        placeholder="+91 0000 000000"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/60 border border-white rounded-2xl focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all font-medium"
                        placeholder="Ex: United States"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Plant Requirements *</label>
                  <textarea
                    rows={4}
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/60 border border-white rounded-2xl focus:ring-2 focus:ring-sky-500/20 focus:bg-white transition-all font-medium"
                    placeholder="Describe your project capacity and location..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gradient-to-r from-sky-600 to-teal-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-sky-500/30 transition-all flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Sending... <Loader2 size={16} className="ml-3 animate-spin" /></>
                  ) : (
                    <>Send Project Specs <Send size={16} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </button>
              </form>
            </div>

            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-6 glass-water p-6 rounded-3xl hover-float">
                  <div className="w-14 h-14 bg-sky-100 rounded-[1.25rem] flex items-center justify-center text-sky-700 shrink-0 shadow-sm">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-lg mb-2">Corporate Office</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      Office No 1008, 10th Floor, Kamdhenu 23 MIDC Thane Belapur Rd Kopar Khairane, Navi Mumbai - 400709
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 glass-water p-6 rounded-3xl hover-float">
                  <div className="w-14 h-14 bg-teal-100 rounded-[1.25rem] flex items-center justify-center text-teal-700 shrink-0 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-lg mb-2">Manufacturing Hub</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      Plot No. PAP-R-191, MIDC Rabale, Navi Mumbai – 400706
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white space-y-8 shadow-2xl">
                <h3 className="text-xl font-black tracking-tight">Direct Channels</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="text-teal-400 shrink-0 mt-1" size={20} />
                    <div className="flex flex-col space-y-2">
                      <span className="font-bold text-sm tracking-widest hover:text-teal-400 transition-colors cursor-pointer">+91 98210 22367</span>
                      <span className="font-bold text-sm tracking-widest hover:text-teal-400 transition-colors cursor-pointer">+91 80809 78282</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-teal-400 shrink-0" size={20} />
                    <span className="font-bold text-sm tracking-widest">krupashinduce@gmail.com</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 mt-8">
                  <h3 className="text-xl font-black tracking-tight mb-6 text-teal-400">For Export Division</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Phone className="text-white/60 shrink-0" size={20} />
                      <span className="font-bold text-sm tracking-widest">+91 82008 48122</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="text-white/60 shrink-0" size={20} />
                      <span className="font-bold text-sm tracking-widest">kceexport@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Contact;
