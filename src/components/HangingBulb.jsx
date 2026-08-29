    // import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

    // const HangingBulb = () => {
    // const mouseX = useMotionValue(0);
    // // Smooth out the movement so it feels heavy like a real bulb
    // const smoothX = useSpring(mouseX, { stiffness: 100, damping: 10 });
    // const rotate = useTransform(smoothX, [-200, 200], [-20, 20]);

    // return (
    //     <div 
    //     className="absolute left-1/2 top-0 -translate-x-1/2 z-20 flex flex-col items-center"
    //     onMouseMove={(e) => mouseX.set(e.clientX - window.innerWidth / 2)}
    //     onMouseLeave={() => mouseX.set(0)}
    //     >
    //     {/* The Wire */}
    //     <motion.div 
    //         style={{ rotate, originY: 0 }}
    //         className="w-[2px] h-40 bg-slate-700 relative flex flex-col items-center"
    //     >
    //         {/* The Bulb */}
    //         <motion.div 
    //         className="absolute bottom-0 translate-y-full w-10 h-14 rounded-b-full bg-slate-800 border-2 border-slate-600 flex flex-col items-center group cursor-pointer"
    //         whileHover={{ 
    //             backgroundColor: "#22d3ee", // Cyan-400
    //             boxShadow: "0px 0px 50px #22d3ee",
    //             borderColor: "#ecfeff" 
    //         }}
    //         >
    //         {/* Filament inside */}
    //         <div className="w-1 h-6 bg-slate-600 mt-2 rounded-full group-hover:bg-cyan-100 transition-colors" />
            
    //         {/* Glow Effect when hovered */}
    //         <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-cyan-400 blur-xl rounded-full transition-opacity" />
    //         </motion.div>
    //     </motion.div>
    //     </div>
    // );
    // };

    // export default HangingBulb;


import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';

const HangingBulb = () => {
    const [isOn, setIsOn] = useState(false);
    const mouseX = useMotionValue(0);
    
    // Spring physics for a "heavy" realistic swing
    const smoothX = useSpring(mouseX, { stiffness: 60, damping: 15 });
    const rotate = useTransform(smoothX, [-400, 400], [-10, 10]);

    return (
        <div 
            className="absolute left-0 right-15 top-0 h-125 z-50 flex flex-col items-center pointer-events-none"
            onMouseMove={(e) => mouseX.set(e.clientX - window.innerWidth / 2)}
            onMouseLeave={() => mouseX.set(0)}
        >
            {/* 1. THE WIRE & FIXTURE */}
            <motion.div 
                style={{ rotate, originY: 0 }}
                className="w-[1.5px] h-25 bg-gradient-to-b from-slate-900 to-slate-700 relative flex flex-col items-center pointer-events-auto"
            >
                {/* Ceiling Mount */}
                <div className="absolute top-0 -translate-y-1/2 w-4 h-1 bg-slate-800 rounded-full" />

                {/* Industrial Socket */}
                <div className="absolute bottom-0 translate-y-1 w-6 h-8 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-t-sm shadow-xl">
                    <div className="w-full h-1 bg-slate-900 absolute top-1" />
                    <div className="w-full h-1 bg-slate-900 absolute bottom-1" />
                </div>

                {/* 2. THE BULB */}
                <motion.div 
                    onClick={() => setIsOn(!isOn)}
                    className="absolute bottom-[-52px] w-12 h-16 cursor-pointer group"
                >
                    {/* Glass Shell */}
                    <motion.div 
                        animate={{ 
                            backgroundColor: isOn ? "rgba(34, 211, 238, 0.2)" : "rgba(255, 255, 255, 0.05)",
                            borderColor: isOn ? "#22d3ee" : "#475569",
                            boxShadow: isOn ? "0px 0px 80px 10px rgba(34, 211, 238, 0.4)" : "0px 0px 0px rgba(0,0,0,0)"
                        }}
                        className="w-full h-full rounded-b-full rounded-t-[40%] border-[1.5px] backdrop-blur-[2px] relative flex flex-col items-center justify-center transition-colors duration-3000"
                    >
                        {/* Filament (Pulsing when on) */}
                        <motion.div 
                            animate={isOn ? { 
                                opacity: [0.7, 1, 0.7],
                                scaleY: [1, 1.1, 1]
                            } : { opacity: 0.3 }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className={`w-[2px] h-8 rounded-full ${isOn ? "bg-cyan-300 shadow-[0_0_15px_#22d3ee]" : "bg-slate-600"}`}
                        >
                            {/* Inner Coil Detail */}
                            <div className="w-full h-full border-r border-white/20" />
                        </motion.div>

                        {/* Top Metal Cap inside glass */}
                        <div className="absolute top-0 w-4 h-2 bg-slate-700 rounded-b-md" />
                    </motion.div>

                    {/* 3. LIGHT THROW (The Cone of Light) */}
                    {isOn && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] h-[800px] pointer-events-none"
                            style={{
                                background: "radial-gradient(circle at top, rgba(34, 211, 238, 0.15) 0%, transparent 60%)",
                                clipPath: "polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)",
                                filter: "blur(40px)"
                            }}
                        />
                    )}
                </motion.div>
            </motion.div>
            
            {/* Interaction Hint */}
            <motion.p 
                animate={{ opacity: isOn ? 0 : 0.4 }}
                className="mt-4 text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]"
            >
                Click to illuminate
            </motion.p>
        </div>
    );
};

export default HangingBulb;