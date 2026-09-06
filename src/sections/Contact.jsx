import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import HangingBulb from '../components/HangingBulb';
import { FiArrowUpRight, FiCheckCircle, FiLinkedin, FiGithub, FiMail, FiAlertCircle } from 'react-icons/fi';

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'
    const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: '' }

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Make sure to replace these with your actual EmailJS credentials
        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
        .then(() => {
            setStatus('success');
            setToast({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
            
            setTimeout(() => {
                setStatus('idle');
                setToast(null);
            }, 4000);
            
            e.target.reset();
        }, (error) => {
            console.error(error.text);
            setStatus('idle');
            setToast({ type: 'error', message: 'Failed to send message. Please check your credentials.' });
            
            setTimeout(() => {
                setToast(null);
            }, 5000);
        });
    };

    return (
        <section id="contact" className="relative min-h-screen bg-[#293653] py-32 overflow-hidden flex items-center">
            
            {/* Custom Animated Toast Notification */}
            <div className="fixed bottom-8 right-8 z-50 pointer-events-none">
                <AnimatePresence>
                    {toast && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            className={`px-6 py-4 rounded-2xl shadow-2xl border flex items-center gap-3 backdrop-blur-xl ${
                                toast.type === 'success' 
                                ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' 
                                : 'bg-red-500/10 border-red-500/20 text-red-400'
                            }`}
                        >
                            {toast.type === 'success' ? <FiCheckCircle className="text-xl" /> : <FiAlertCircle className="text-xl" />}
                            <p className="font-medium font-mono text-sm">{toast.message}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* The Hanging Bulb - Logic is in the separate component */}
            <HangingBulb />

            <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                
                {/* Left Side: Professional Text */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-cyan-500 font-mono tracking-[0.3em] uppercase text-sm mb-4">Start a Conversation</h2>
                        <h1 className="text-6xl md:text-8xl font-bold text-slate-100 tracking-tighter leading-tight">
                            Got a <span className="text-slate-500">Bright</span> <br /> 
                            Idea?
                        </h1>
                    </motion.div>

                    <div className="flex flex-col gap-6 text-slate-400">
                        <a href="mailto:rohankumar21545@gmail.com" className="flex items-center gap-4 text-xl hover:text-cyan-400 transition-colors group w-fit">
                            <FiMail className="group-hover:scale-110 transition-transform" /> Get in touch Via Email 
                        </a>
                        <div className="flex gap-5">
                            {[
                                { Icon: FiLinkedin, href: "www.linkedin.com/in/rohankumar2005" },
                                { Icon: FiGithub, href: "https://github.com/Rohan-Kumar320" }
                            ].map((item, i) => (
                                <a 
                                    key={i} 
                                    href={item.href} 
                                    target="_blank"             // Opens in new tab
                                    rel="noopener noreferrer"    // Security best practice
                                    className="text-2xl hover:text-emerald-500 transition-colors text-slate-400"
                                >
                                    <item.Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: The Form */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-slate-900/50 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl relative group"
                >
                    {/* Subtle Glow Effect triggered by group hover */}
                    <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <form ref={formRef} onSubmit={sendEmail} className="relative space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold">Your Name</label>
                                <input required name="user_name" type="text" className="bg-white/5 border-b border-white/10 py-3 px-1 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Steve Jobs" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold">Email Address</label>
                                <input required name="user_email" type="email" className="bg-white/5 border-b border-white/10 py-3 px-1 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="steve@apple.com" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold">Message</label>
                            <textarea required name="message" rows="4" className="bg-white/5 border-b border-white/10 py-3 px-1 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="Let's build something great..." />
                        </div>

                        <button 
                            disabled={status !== 'idle'}
                            className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold rounded-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                            <AnimatePresence mode="wait">
                                {status === 'idle' ? (
                                    <motion.span key="1" className="flex items-center gap-2">SEND MESSAGE <FiArrowUpRight /></motion.span>
                                ) : status === 'sending' ? (
                                    <motion.span key="2">TRANSMITTING...</motion.span>
                                ) : (
                                    <motion.span key="3" className="flex items-center gap-2 text-white">SUCCESS <FiCheckCircle /></motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;