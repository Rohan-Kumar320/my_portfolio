// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';

// const Hero = () => {
//   const containerRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const smoothProgress = useSpring(scrollYProgress, { 
//     stiffness: 30, // Very liquid feel
//     damping: 20,   
//     mass: 0.5 
//   });
  
//   const zoomScale = useTransform(smoothProgress, [0, 1], [1, 1.8]);
//   const contentOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
//   const contentY = useTransform(smoothProgress, [0, 0.4], [0, -80]);

//   // Typewriter logic
//   const words = ["Creative Designer", "Full Stack Developer", "Dedicated Individual"];
//   const [index, setIndex] = useState(0);
//   const [displayText, setDisplayText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentWord = words[index % words.length];
//     const timeout = setTimeout(() => {
//       if (!isDeleting) {
//         setDisplayText(currentWord.slice(0, displayText.length + 1));
//         if (displayText.length === currentWord.length) setTimeout(() => setIsDeleting(true), 2000);
//       } else {
//         setDisplayText(currentWord.slice(0, displayText.length - 1));
//         if (displayText.length === 0) { setIsDeleting(false); setIndex(index + 1); }
//       }
//     }, isDeleting ? 40 : 80);
//     return () => clearTimeout(timeout);
//   }, [displayText, isDeleting, index]);

//   return (
//     <section id='hero' ref={containerRef} className="relative h-[300vh] bg-[#000000]">
//       <div className="sticky top-0 h-screen w-full overflow-hidden">
        
//         {/* BG: Minimal & Clean */}
//         <motion.div style={{ scale: zoomScale }} className="absolute inset-0 z-0">
//           <img 
//             src="/src/assets/hero-page.jpg" 
//             className="w-full h-full object-contain opacity-40 grayscale" 
//             alt="Hero Bg" 
//           />
//         </motion.div>

//         {/* CONTENT: Minimalist Grid */}
//         <motion.div 
//           style={{ opacity: contentOpacity, y: contentY }} 
//           className="relative z-10 h-full w-full flex flex-col justify-center px-[8vw]"
//         >
//           <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-20">
//             {/* Name - Sharp Typography */}
//             <div className="border-l-2 border-white/10 pl-8 md:pl-12">
//               <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-neutral-200 tracking-tighter uppercase leading-[0.9]">
//                 ROHAN<br/>
//                 <span className='text-6xl sm:text-8xl md:text-9xl font-bold text-slate-600 tracking-tighter uppercase leading-[0.9]'>
//                   KUMAR
//                 </span>
//               </h1>
//             </div>

//             {/* Typewriter - Clean & Direct */}
//             <div className="max-w-md">
//               <p className="text-white/40 font-mono text-xs uppercase tracking-[0.5em] mb-4">
//                 My Professional Profile
//               </p>
//               <h2 className="text-xl md:text-3xl text-white font-light tracking-tight leading-tight">
//                 I build digital interfaces as a <br/>
//                 <span className="text-white font-medium italic underline underline-offset-8 decoration-white/20">
//                   {displayText}
//                 </span>
//               </h2>
//             </div>
//           </div>

//           {/* Bottom Nav Helper */}
//           <div className="absolute bottom-12 left-[8vw] flex items-center gap-6">
//              <div className="w-12 h-px bg-white/20" />
//              <span className="text-[10px] text-white/30 font-mono uppercase tracking-[0.3em]">
//                Scroll down
//              </span>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;

//commented previous 

// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { useRef, useState, useEffect } from 'react';

// const Hero = () => {
//   const containerRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"]
//   });

//   const smoothProgress = useSpring(scrollYProgress, { 
//     stiffness: 40,
//     damping: 25,   
//     mass: 0.5 
//   });
  
//   const zoomScale = useTransform(smoothProgress, [0, 1], [1, 1.4]);
//   const contentOpacity = useTransform(smoothProgress, [0, 0.45], [1, 0]);
//   const contentY = useTransform(smoothProgress, [0, 0.45], [0, -60]);

//   // Typewriter logic
//   const words = ["Creative Designer", "Full Stack Developer", "Dedicated Individual"];
//   const [index, setIndex] = useState(0);
//   const [displayText, setDisplayText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentWord = words[index % words.length];
//     const timeout = setTimeout(() => {
//       if (!isDeleting) {
//         setDisplayText(currentWord.slice(0, displayText.length + 1));
//         if (displayText.length === currentWord.length) setTimeout(() => setIsDeleting(true), 2000);
//       } else {
//         setDisplayText(currentWord.slice(0, displayText.length - 1));
//         if (displayText.length === 0) { setIsDeleting(false); setIndex(index + 1); }
//       }
//     }, isDeleting ? 30 : 70);
//     return () => clearTimeout(timeout);
//   }, [displayText, isDeleting, index]);

//   return (
//     <section id='hero' ref={containerRef} className="relative h-[250vh] bg-[#08080a] selection:bg-indigo-500/30">
//       <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
//         {/* Modern Ambient Glows & Grid background */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
//         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />
//         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[250px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

//         {/* Background Image Container with Soft Gradient Overlay */}
//         <motion.div style={{ scale: zoomScale }} className="absolute inset-0 z-0">
//           <img 
//             src="/src/assets/hero-page.jpg" 
//             className="w-full h-full object-cover opacity-20 filter grayscale contrast-125" 
//             alt="Hero Background" 
//           />
//           <div className="absolute inset-0 bg-radial-vignette from-transparent via-[#08080a]/60 to-[#08080a]" />
//         </motion.div>

//         {/* Content Section */}
//         <motion.div 
//           style={{ opacity: contentOpacity, y: contentY }} 
//           className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col justify-between h-full py-16"
//         >
//           {/* Top Status Badge */}
//           <div className="flex items-center gap-3">
//             <span className="relative flex h-2.5 w-2.5">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
//             </span>
//             <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 bg-neutral-900/60 backdrop-blur-md border border-neutral-800/80 px-3.5 py-1.5 rounded-full">
//               Available to Work With You
//             </span>
//           </div>

//           {/* Main Hero Content */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
            
//             {/* Left: Typography Name Header */}
//             <div className="lg:col-span-7 flex flex-col space-y-2">
//               <span className="text-xs font-mono uppercase tracking-[0.4em] text-indigo-400 font-semibold ml-1">
//                 Portfolio '26
//               </span>
//               <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight uppercase leading-none">
//                 Rohan
//               </h1>
//               <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 via-neutral-300 to-neutral-600 tracking-tight uppercase leading-none">
//                 Kumar
//               </h1>
//             </div>

//             {/* Right: Glassmorphic Card with Dynamic Typewriter */}
//             <div className="lg:col-span-5">
//               <div className="p-6 md:p-8 rounded-2xl bg-neutral-900/40 backdrop-blur-xl border border-neutral-800/60 shadow-2xl space-y-6">
//                 <p className="text-neutral-400 font-mono text-xs uppercase tracking-[0.3em]">
//                   Specialization
//                 </p>
//                 <h2 className="text-xl sm:text-2xl text-neutral-200 font-light leading-relaxed">
//                   I craft modern digital experiences as a <br/>
//                   <span className="font-semibold text-gray-400 relative inline-block">
//                     {displayText}
//                     <span className="animate-pulse font-normal text-indigo-400">|</span>
//                   </span>
//                 </h2>
//                 <div className="pt-2 flex items-center gap-4">
//                   <a href="#projects" className="px-5 py-2.5 bg-white text-black font-medium text-xs uppercase tracking-wider rounded-lg hover:bg-neutral-200 transition-colors">
//                     View Work
//                   </a>
//                   <a href="#contact" className="px-5 py-2.5 bg-neutral-800/80 text-white font-medium text-xs uppercase tracking-wider rounded-lg border border-neutral-700/50 hover:bg-neutral-800 transition-colors">
//                     Contact Me
//                   </a>
//                 </div>
//               </div>
//             </div>

//           </div>

//           {/* Bottom Bar Indicator */}
//           <div className="flex items-center justify-between pt-8 border-t border-neutral-800/40">
//             <div className="flex items-center gap-4">
//               <div className="w-8 h-px bg-neutral-700" />
//               <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-[0.3em]">
//                 Scroll to discover
//               </span>
//             </div>

//             <motion.div 
//               animate={{ y: [0, 8, 0] }}
//               transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//               className="w-5 h-9 rounded-full border-2 border-neutral-700/60 flex items-start justify-center p-1"
//             >
//               <div className="w-1 h-2 bg-indigo-400 rounded-full" />
//             </motion.div>
//           </div>

//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import { useRef, useState, useEffect } from "react";

import heroImage from "../assets/hero-page.jpg";


const Hero = () => {
  const containerRef = useRef(null);

  // ==========================================
  // HERO SCROLL PROGRESS
  // ==========================================

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    mass: 0.5,
  });

  // ==========================================
  // SCROLL ANIMATIONS
  // ==========================================

  const zoomScale = useTransform(
    smoothProgress,
    [0, 1],
    [1, 1.4]
  );

  const contentOpacity = useTransform(
    smoothProgress,
    [0, 0.45],
    [1, 0]
  );

  const contentY = useTransform(
    smoothProgress,
    [0, 0.45],
    [0, -60]
  );

  // ==========================================
  // TYPEWRITER
  // ==========================================

  const words = [
    "Creative Designer",
    "Full Stack Developer",
    "Dedicated Individual",
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(
            currentWord.slice(0, displayText.length + 1)
          );

          if (displayText.length === currentWord.length) {
            setTimeout(() => {
              setIsDeleting(true);
            }, 2000);
          }
        } else {
          setDisplayText(
            currentWord.slice(0, displayText.length - 1)
          );

          if (displayText.length === 0) {
            setIsDeleting(false);
            setIndex((prevIndex) => prevIndex + 1);
          }
        }
      },
      isDeleting ? 30 : 70
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);


  // ==========================================
  // RENDER
  // ==========================================

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: "relative",
      }}
      className="
        h-[250vh]
        bg-[#08080a]
        selection:bg-indigo-500/30
      "
    >

      {/* ======================================
          STICKY VIEWPORT
      ======================================= */}

      <div
        style={{
          position: "sticky",
          top: 0,
        }}
        className="
          h-screen
          w-full
          overflow-hidden
          flex
          items-center
          justify-center
        "
      >

        {/* ====================================
            AMBIENT GRID
        ==================================== */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]
            bg-[size:4rem_4rem]
            [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]
            pointer-events-none
          "
        />

        {/* ====================================
            AMBIENT INDIGO GLOW
        ==================================== */}

        <div
          className="
            absolute
            top-1/4
            left-1/2
            -translate-x-1/2
            w-[500px]
            h-[300px]
            bg-indigo-600/15
            blur-[120px]
            rounded-full
            pointer-events-none
          "
        />

        {/* ====================================
            AMBIENT PURPLE GLOW
        ==================================== */}

        <div
          className="
            absolute
            bottom-1/4
            right-1/4
            w-[400px]
            h-[250px]
            bg-purple-600/10
            blur-[100px]
            rounded-full
            pointer-events-none
          "
        />


        {/* ====================================
            BACKGROUND IMAGE
        ==================================== */}

        <motion.div
          style={{
            scale: zoomScale,
            position: "absolute",
          }}
          className="
            inset-0
            z-0
          "
        >
          <img
            src={heroImage}
            alt="Hero Background"
            className="
              w-full
              h-full
              object-cover
              opacity-20
              grayscale
              contrast-125
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-radial-vignette
              from-transparent
              via-[#08080a]/60
              to-[#08080a]
            "
          />
        </motion.div>


        {/* ====================================
            MAIN CONTENT
        ==================================== */}

        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
          className="
            relative
            z-10
            w-full
            max-w-7xl
            px-6
            md:px-12
            flex
            flex-col
            justify-between
            h-full
            py-16
          "
        >

          {/* ==================================
              TOP STATUS BADGE
          ================================== */}

          <div className="flex items-center gap-3">

            <span className="relative flex h-2.5 w-2.5">

              <span
                className="
                  animate-ping
                  absolute
                  inline-flex
                  h-full
                  w-full
                  rounded-full
                  bg-emerald-400
                  opacity-75
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  rounded-full
                  h-2.5
                  w-2.5
                  bg-emerald-500
                "
              />

            </span>

            <span
              className="
                text-xs
                font-mono
                uppercase
                tracking-widest
                text-neutral-400
                bg-neutral-900/60
                backdrop-blur-md
                border
                border-neutral-800/80
                px-3.5
                py-1.5
                rounded-full
              "
            >
              Available to Work With You
            </span>

          </div>


          {/* ==================================
              MAIN HERO CONTENT
          ================================== */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-12
              gap-12
              lg:gap-8
              items-center
              my-auto
            "
          >

            {/* ================================
                LEFT — NAME
            ================================= */}

            <div
              className="
                lg:col-span-7
                flex
                flex-col
                space-y-2
              "
            >

              <span
                className="
                  text-xs
                  font-mono
                  uppercase
                  tracking-[0.4em]
                  text-indigo-400
                  font-semibold
                  ml-1
                "
              >
                Portfolio '26
              </span>

              <h1
                className="
                  text-5xl
                  sm:text-7xl
                  md:text-8xl
                  lg:text-9xl
                  font-black
                  text-white
                  tracking-tight
                  uppercase
                  leading-none
                "
              >
                Rohan
              </h1>

              <h1
                className="
                  text-5xl
                  sm:text-7xl
                  md:text-8xl
                  lg:text-9xl
                  font-black
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-neutral-500
                  via-neutral-300
                  to-neutral-600
                  tracking-tight
                  uppercase
                  leading-none
                "
              >
                Kumar
              </h1>

            </div>


            {/* ================================
                RIGHT — SPECIALIZATION CARD
            ================================= */}

            <div className="lg:col-span-5">

              <div
                className="
                  p-6
                  md:p-8
                  rounded-2xl
                  bg-neutral-900/40
                  backdrop-blur-xl
                  border
                  border-neutral-800/60
                  shadow-2xl
                  space-y-6
                "
              >

                <p
                  className="
                    text-neutral-400
                    font-mono
                    text-xs
                    uppercase
                    tracking-[0.3em]
                  "
                >
                  Specialization
                </p>


                <h2
                  className="
                    text-xl
                    sm:text-2xl
                    text-neutral-200
                    font-light
                    leading-relaxed
                  "
                >
                  I craft modern digital experiences as a{" "}
                  <br />

                  <span
                    className="
                      font-semibold
                      text-gray-400
                      relative
                      inline-block
                    "
                  >
                    {displayText}

                    <span
                      className="
                        animate-pulse
                        font-normal
                        text-indigo-400
                      "
                    >
                      |
                    </span>

                  </span>

                </h2>


                {/* BUTTONS */}

                <div className="pt-2 flex items-center gap-4">

                  <a
                    href="#projects"
                    className="
                      px-5
                      py-2.5
                      bg-white
                      text-black
                      font-medium
                      text-xs
                      uppercase
                      tracking-wider
                      rounded-lg
                      hover:bg-neutral-200
                      transition-colors
                    "
                  >
                    View Work
                  </a>

                  <a
                    href="#contact"
                    className="
                      px-5
                      py-2.5
                      bg-neutral-800/80
                      text-white
                      font-medium
                      text-xs
                      uppercase
                      tracking-wider
                      rounded-lg
                      border
                      border-neutral-700/50
                      hover:bg-neutral-800
                      transition-colors
                    "
                  >
                    Contact Me
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* ==================================
              BOTTOM SCROLL INDICATOR
          ================================== */}

          <div
            className="
              flex
              items-center
              justify-between
              pt-8
              border-t
              border-neutral-800/40
            "
          >

            <div className="flex items-center gap-4">

              <div className="w-8 h-px bg-neutral-700" />

              <span
                className="
                  text-[10px]
                  text-neutral-500
                  font-mono
                  uppercase
                  tracking-[0.3em]
                "
              >
                Scroll to discover
              </span>

            </div>


            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="
                w-5
                h-9
                rounded-full
                border-2
                border-neutral-700/60
                flex
                items-start
                justify-center
                p-1
              "
            >
              <div
                className="
                  w-1
                  h-2
                  bg-indigo-400
                  rounded-full
                "
              />
            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};


export default Hero;

