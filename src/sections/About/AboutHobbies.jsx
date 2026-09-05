import { motion, useTransform } from 'framer-motion';
import { hobbies } from '../../constants/projectData';
import { FiArrowUpRight, FiMinus } from 'react-icons/fi';

const AboutHobbies = ({ progress }) => {
    const y = useTransform(progress, [0.7, 1], [100, 0]);

    return (
        <section className="relative min-h-screen bg-[#020617] py-24 md:py-32 px-[7vw] overflow-hidden">
            {/* 1. HEADER - Left Aligned with Accent */}
            <header className="relative z-10 mb-20 md:mb-32">   
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-px w-12 bg-cyan-500" />
                    <span className="text-cyan-500 font-mono text-xs uppercase tracking-[0.4em]">
                        Section 03 / Lifestyle
                    </span>
                </div>
                <h3 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85]">
                    Beyond <br />
                    <span className="text-slate-800">The Screen</span>
                </h3>
            </header>

            {/* 2. THE GRID - 2 Columns with Vertical Offset */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 relative z-10 max-w-7xl mx-auto">
                {hobbies.map((hobby, index) => (
                    <motion.div
    key={hobby.id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className={`relative group ${index % 2 !== 0 ? "md:mt-32" : ""}`}
>
    
                        <div className="relative overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-slate-900 aspect-4/5">
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 z-10 transition-opacity group-hover:opacity-40" />
                            
                            <img 
                                src={hobby.img} 
                                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                                alt={hobby.title} 
                            />

                            {/* Corner Index */}
                            <div className="absolute top-6 left-6 z-20 h-10 w-10 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white font-mono text-xs">
                                0{hobby.id}
                            </div>

                            {/* Content Block */}
                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                                <h4 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-2 group-hover:text-cyan-400 transition-colors">
                                    {hobby.title}
                                </h4>
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="h-px w-0 group-hover:w-8 bg-cyan-500 transition-all duration-500" />
                                    <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                        
                                    </p>
                                </div>
                            </div>
                            
                            {/* Hover Arrow Button
                            <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="bg-cyan-500 p-4 rounded-full text-white shadow-xl rotate-45 group-hover:rotate-0 transition-transform duration-500">
                                    <FiArrowUpRight size={24} />
                                </div>
                            </div> */}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* 3. THE CENTERED QUOTE - High End Style */}
            <motion.div 
                style={{ y }}
                className="mt-40 md:mt-64 relative z-10 text-center max-w-4xl mx-auto"
            >
                <div className="flex justify-center mb-10 text-cyan-500">
                    <FiMinus size={40} className="rotate-90" />
                </div>
                
                <h2 className="text-2xl md:text-5xl font-light text-white leading-snug md:leading-tight tracking-tight">
                    "I believe that a great engineer is fueled by the <span className="text-slate-500">world outside the screen</span>. 
                    Whether it's the rhythm of <span className="text-cyan-500 italic font-serif">creativity</span> or the 
                    discipline of <span className="text-white border-b border-cyan-500/30 pb-1">exploration</span>, every hobby 
                    shapes my logic."
                </h2>

                <div className="mt-12 inline-block">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.5em]">
                        Creative Philosophy
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutHobbies;