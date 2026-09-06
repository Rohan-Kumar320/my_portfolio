    // import { motion } from 'framer-motion';
    // import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiArrowUp, FiArrowUpRight } from 'react-icons/fi';

    // const Footer = () => {
    // const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // return (
    //     <footer className="fixed bottom-0 left-0 w-full h-screen bg-[#e7e5e4] text-[#292524] flex flex-col justify-center p-[7vw] z-10">
        
    //     {/* Top Section: CTA & Socials */}
    //     <div className="flex flex-col lg:flex-row justify-between items-start pt-24 gap-16">
    //         <div className="max-w-3xl">
    //         <p className="text-[#c2410c] font-mono text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">
    //             Project Inquiries
    //         </p>
    //         <h2 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-[0.85] mb-10 italic">
    //             Let's Shape <br /> <span className="text-[#a8a29e]">Reality.</span>
    //         </h2>
    //         <a 
    //             href="mailto:contact@studio.com" 
    //             className="group text-2xl md:text-5xl font-light flex items-center gap-4 hover:text-[#c2410c] transition-colors border-b border-[#d6d3d1] pb-4"
    //         >
    //             hello@yourstudio.com 
    //             <FiArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
    //         </a>
    //         </div>

    //         {/* PROMINENT SOCIAL CONNECTIONS */}
    //         <div className="flex flex-col gap-6 w-full lg:w-auto">
    //             <p className="text-[#78716c] font-mono text-[10px] uppercase tracking-widest">Connect with me</p>
    //             <div className="grid grid-cols-2 gap-4">
    //                 {[
    //                     { icon: <FiGithub />, label: "Github", link: "#" },
    //                     { icon: <FiLinkedin />, label: "LinkedIn", link: "#" },
    //                     { icon: <FiInstagram />, label: "Instagram", link: "#" },
    //                     { icon: <FiTwitter />, label: "Twitter", link: "#" }
    //                 ].map((social, i) => (
    //                     <motion.a 
    //                         key={i}
    //                         href={social.link}
    //                         whileHover={{ scale: 1.05 }}
    //                         className="flex items-center gap-3 px-6 py-4 bg-[#d6d3d1]/50 border border-[#d6d3d1] rounded-2xl font-bold uppercase text-[10px] tracking-widest hover:bg-[#c2410c] hover:text-white transition-all duration-300"
    //                     >
    //                         {social.icon} {social.label}
    //                     </motion.a>
    //                 ))}
    //             </div>
    //         </div>
    //     </div>

    //     {/* Bottom Section: Info & Back to Top */}
    //     <div className="border-t border-[#d6d3d1] pt-12 pb-8 flex flex-col md:flex-row justify-between items-end gap-10">
    //         <div className="space-y-4">
    //             <div className="flex gap-12 text-[10px] font-mono font-bold uppercase tracking-widest text-[#78716c]">
    //                 <span className="hover:text-[#c2410c] cursor-pointer transition-colors">Works</span>
    //                 <span className="hover:text-[#c2410c] cursor-pointer transition-colors">Services</span>
    //                 <span className="hover:text-[#c2410c] cursor-pointer transition-colors">About</span>
    //             </div>
    //             <p className="text-[#a8a29e] text-[10px] font-mono uppercase tracking-widest">
    //                 © 2025 Architecture of Code — All Rights Reserved.
    //             </p>
    //         </div>

    //         <div className="flex items-center gap-8">
    //             <div className="text-right hidden sm:block">
    //                 <p className="text-[10px] font-mono text-[#a8a29e] uppercase tracking-widest mb-1">Local Time</p>
    //                 <p className="font-bold text-sm uppercase">Karachi, PK / 20:34</p>
    //             </div>
                
    //             {/* BACK TO TOP BUTTON */}
    //             <button 
    //                 onClick={scrollToTop}
    //                 className="group relative w-20 h-20 rounded-full border border-[#d6d3d1] flex flex-col items-center justify-center overflow-hidden hover:border-[#c2410c] transition-colors"
    //             >
    //                 <motion.div 
    //                     animate={{ y: [0, -4, 0] }}
    //                     transition={{ repeat: Infinity, duration: 2 }}
    //                     className="flex flex-col items-center group-hover:text-[#c2410c]"
    //                 >
    //                     <FiArrowUp size={20} />
    //                     <span className="text-[8px] font-black uppercase mt-1 tracking-tighter">Top</span>
    //                 </motion.div>
                    
    //                 {/* Background Hover Fill */}
    //                 <div className="absolute inset-0 bg-[#c2410c] translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10" />
    //             </button>
    //         </div>
    //     </div>
    //     </footer>
    // );
    // };

    // export default Footer;

    import { motion } from 'framer-motion';
    import { FiArrowUp, FiArrowUpRight, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

    const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="fixed bottom-0 left-0 w-full h-screen bg-[#0d556b] text-slate-300 -z-10 flex flex-col">
        
        {/* 1. The Social Ribbon (Large, Bold, Striking) */}
        <div className="w-full border-y border-white/5 py-10 overflow-hidden bg-white/1">
            <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex whitespace-nowrap gap-20"
            >
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-20 items-end text-5xl md:text-7xl py-10 font-black uppercase tracking-tighter opacity-20 hover:opacity-100 transition-opacity cursor-default">
                <span>Connect</span> <span className="text-cyan-500">•</span>
                <span>Collaborate</span> <span className="text-cyan-500">•</span>
                <span>Create</span> <span className="text-cyan-500">•</span>
                </div>
            ))}
            </motion.div>
        </div>

        {/* 2. Main Content Grid */}
        <div className="flex-1 max-w-7xl mx-auto w-full px-8 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            
            <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white tracking-tight italic">
                I’m always open to new <br /> 
                <span className="text-cyan-400">digital adventures.</span>
                </h2>
                <p className="max-w-xs text-slate-400 font-medium">
                Based in Karachi, Focused on building  <br/>high-performance React and Flutter applications.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold">Inquiries</p>
                <a href="mailto:rohankumar21545@gmail.com" className="text-lg hover:text-white transition-colors block">Get in touch Via Email </a>
                <a href="/RohanKumar-Resume.pdf" download className="text-lg hover:text-white transition-colors block">Download Resume</a>
                </div>
                <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold">Socials</p>
                <div className="flex gap-4">
                    {[
                        { Icon: FiGithub, url: "https://github.com/Rohan-Kumar320/" },


                        { Icon: FiLinkedin, url: "www.linkedin.com/in/rohankumar2005" },

                        
                    ].map((item, i) => (
                        <motion.a 
                            key={i} 
                            href={item.url} 
                            target="_blank"             // Opens in new tab
                            rel="noopener noreferrer"    // Security best practice
                            whileHover={{ y: -5, color: '#10b981' }} // Changed to emerald to match your new palette
                            className="text-2xl text-slate-400 transition-colors"
                        >
                            <item.Icon />
                        </motion.a>
                    ))}
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* 3. The Minimalist Bottom Bar */}
        <div className="px-8 py-10 flex justify-between items-end">
            <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-950">
                Design & Code by <span className="text-slate-200">Rohan Kumar</span>
            </p>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-950 mt-1">
                Built with React + Vite + Tailwind
            </p>
            </div>

            <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2"
            >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-500">
                <FiArrowUp className="text-white group-hover:-translate-y-1 transition-transform" />
            </div>
            <span className="text-[8px] uppercase tracking-widest font-bold opacity-40 group-hover:opacity-100 transition-opacity">
                Scroll Top
            </span>
            </button>
        </div>
        </footer>
    );
    };

    export default Footer;