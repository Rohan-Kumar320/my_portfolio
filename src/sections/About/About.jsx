    // import { motion, useScroll, useTransform } from 'framer-motion';
    // import { useRef } from 'react';
    // import { stats, services, hobbies } from '../constants/projectData';

    // const About = () => {
    // const containerRef = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: containerRef,
    //     offset: ["start start", "end end"]
    // });

    // // Parallax offsets for different layers
    // const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    // const imgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    // const hobbiesX = useTransform(scrollYProgress, [0.6, 1], ["20%", "-20%"]);

    // return (
    //     <div ref={containerRef} id="about" className="relative h-[450vh] bg-[#050505] text-white">
        
    //     {/* PHASE 1: THE BIO (STICKY IMAGE, SLIDING TEXT) */}
    //     <section className="sticky top-0 h-screen flex items-center overflow-hidden">
    //         <div className="container mx-auto px-[7vw] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
    //         <motion.div style={{ scale: imgScale }} className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 hidden lg:block">
    //             <img 
    //             src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000" 
    //             className="w-full h-full object-cover opacity-80" 
    //             alt="Profile" 
    //             />
    //         </motion.div>

    //         <motion.div style={{ y: textY }} className="space-y-8">
    //             <h2 className="text-emerald-500 font-mono text-xs uppercase tracking-[0.5em]">The Storyteller</h2>
    //             <h3 className="text-6xl md:text-8xl font-black tracking-tighter">WHO IS <br/> JOHN?</h3>
    //             <p className="text-slate-400 text-xl leading-relaxed font-light max-w-xl">
    //             I am a digital architect based in the heart of modern tech. I specialize in turning 
    //             complex logic into beautiful, fluid experiences. My work is defined by 
    //             <span className="text-white"> precision, performance, and purpose.</span>
    //             </p>
                
    //             <div className="grid grid-cols-2 gap-10 pt-10">
    //             {stats.map(stat => (
    //                 <div key={stat.id}>
    //                 <p className="text-4xl font-bold mb-2">{stat.count}</p>
    //                 <p className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</p>
    //                 </div>
    //             ))}
    //             </div>
    //         </motion.div>
    //         </div>
    //     </section>

    //     {/* PHASE 2: SERVICES (OVERLAPPING STACK) */}
    //     <section className="relative h-screen bg-[#0a0a0a] z-10 flex items-center shadow-[0_-50px_100px_rgba(0,0,0,0.9)]">
    //         <div className="container mx-auto px-[7vw]">
    //         <h3 className="text-4xl font-bold mb-16 text-center lg:text-left">Core Expertise</h3>
    //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //             {services.map((service, i) => (
    //             <motion.div 
    //                 key={service.id}
    //                 initial={{ opacity: 0, y: 50 }}
    //                 whileInView={{ opacity: 1, y: 0 }}
    //                 transition={{ delay: i * 0.2 }}
    //                 className="p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:border-emerald-500/50 transition-all group"
    //             >
    //                 <div className="w-12 h-12 bg-emerald-500/10 rounded-xl mb-6 flex items-center justify-center text-emerald-500 font-mono">0{i+1}</div>
    //                 <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
    //                 <p className="text-slate-500 leading-relaxed">{service.desc}</p>
    //             </motion.div>
    //             ))}
    //         </div>
    //         </div>
    //     </section>

    //     {/* PHASE 3: HOBBIES (HORIZONTAL PARALLAX) */}
    //     <section className="sticky top-0 h-screen flex items-center overflow-hidden bg-[#050505]">
    //         <div className="absolute top-20 left-[7vw]">
    //         <h3 className="text-8xl font-black text-white/5 uppercase tracking-tighter italic">Beyond the Code</h3>
    //         </div>
            
    //         <motion.div style={{ x: hobbiesX }} className="flex gap-10 px-[10vw]">
    //         {hobbies.map((hobby) => (
    //             <div key={hobby.id} className="min-w-[300px] md:min-w-[450px] space-y-4">
    //             <div className="aspect-video rounded-3xl overflow-hidden border border-white/10">
    //                 <img src={hobby.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt={hobby.title} />
    //             </div>
    //             <p className="text-center font-mono text-xs uppercase tracking-widest text-slate-500">{hobby.title}</p>
    //             </div>
    //         ))}
    //         </motion.div>
    //     </section>

    //     </div>
    // );
    // };

    // export default About;

    import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import AboutBio from './AboutBio';
import AboutServices from './AboutServices';
import AboutHobbies from './AboutHobbies';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} id="about" className="relative">
      <AboutBio progress={scrollYProgress} />
      <AboutServices />
      <AboutHobbies progress={scrollYProgress} />
    </div>
  );
};

export default About;

