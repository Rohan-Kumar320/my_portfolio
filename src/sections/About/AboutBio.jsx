    import { motion, useTransform } from 'framer-motion';
    import mypic from "/src/assets/my-pic.jpeg"

const AboutBio = ({ progress }) => {
  const opacity = useTransform(progress, [0, 0.2, 0.3], [1, 1, 0]);
  const y = useTransform(progress, [0, 0.3], [0, -50]);

  return (
    <motion.section 
      style={{ opacity, y }}
      className="sticky top-0 min-h-screen h-auto py-12 lg:py-0 flex items-center px-4 sm:px-8 md:px-[7vw] overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#020617] to-black"
    >
      {/* Decorative Cyan Glow */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center z-10">
        
        {/* Text Content Column */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6 md:space-y-8 text-left">
          <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5">
            <span className="text-cyan-400 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em]">
              01. Profile
            </span>
          </div>

          <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-200 leading-[1.05] tracking-tight">
            THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-slate-400">
              VISION
            </span>{" "}
            <br className="hidden sm:inline" />
            BEHIND.
          </h3>

          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-xl font-light leading-relaxed">
            I bridge the gap between abstract creative vision and rigid systems architecture. 
            As a Full Stack Developer, I don't just build interfaces; 
            I design ecosystems where fluid user experience meets high-performance engineering. 
            My goal is to transform complex business logic into seamless, invisible technology.
          </p>
        </div>
        
        {/* Image Container Column */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="relative group w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-full aspect-[4/5] mx-auto lg:ml-auto">
            
            {/* Ambient Backlight Accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-slate-800/20 rounded-2xl sm:rounded-3xl -rotate-2 sm:-rotate-3 group-hover:rotate-0 transition-transform duration-500 ease-out" />
            
            {/* Image Wrapper */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl bg-slate-900/50">
              <img 
                src={mypic} 
                className="w-full h-full object-cover object-center grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out"
                alt="Profile portrait"
              />
            </div>

          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default AboutBio;