// import {
//     motion,
//     useScroll,
//     useTransform,
//     AnimatePresence,
// } from "framer-motion";

// import {
//     FiArrowLeft,
//     FiExternalLink,
//     FiGithub,
//     FiDownload,
//     FiArrowDown,
// } from "react-icons/fi";

// import { useNavigate, useParams } from "react-router-dom";
// import { useRef } from "react";

// import { projects } from "../constants/projectData";

// const ProjectDetail = () => {

//     // ==========================================
//     // ROUTER
//     // ==========================================

//     const { projectId } = useParams();
//     const navigate = useNavigate();

//     const project = projects.find(
//         (p) => String(p.id) === String(projectId)
//     );

//     if (!project) return null;

//     // ==========================================
//     // REFS
//     // ==========================================

//     const containerRef = useRef(null);

//     // ==========================================
//     // SCROLL
//     // ==========================================

//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start start", "end end"],
//     });

//     const heroY = useTransform(
//         scrollYProgress,
//         [0, 1],
//         ["0%", "20%"]
//     );

//     const heroScale = useTransform(
//         scrollYProgress,
//         [0, 1],
//         [1, 1.12]
//     );

//     const heroOpacity = useTransform(
//         scrollYProgress,
//         [0, .4],
//         [1, .2]
//     );

//     // ==========================================
//     // ANIMATION VARIANTS
//     // ==========================================

//     const fadeUp = {
//         hidden: {
//             opacity: 0,
//             y: 40,
//         },

//         show: {
//             opacity: 1,
//             y: 0,

//             transition: {
//                 duration: .7,
//                 ease: [0.22, 1, 0.36, 1],
//             },
//         },
//     };

//     const stagger = {
//         hidden: {},

//         show: {
//             transition: {
//                 staggerChildren: .12,
//             },
//         },
//     };

//     const imageReveal = {
//         hidden: {
//             opacity: 0,
//             scale: .96,
//         },

//         show: {
//             opacity: 1,
//             scale: 1,

//             transition: {
//                 duration: .8,
//                 ease: [0.22, 1, 0.36, 1],
//             },
//         },
//     };

//     // ==========================================
//     // REUSABLE STYLES
//     // ==========================================

//     const section =
//         "max-w-7xl mx-auto px-6 lg:px-10";

//     const card =
//         "rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,.08)]";

//     const label =
//         "uppercase tracking-[0.3em] text-xs font-semibold text-emerald-600";

//     const heading =
//         "text-4xl md:text-5xl xl:text-6xl font-black tracking-tight text-slate-900";

//     return (

//         <motion.main
//             ref={containerRef}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="bg-[#fafafa] text-slate-800 overflow-x-hidden"
//         >
//                     {/* ======================================
//                     FLOATING NAVBAR
//             ======================================= */}

//             <nav className="fixed top-0 left-0 right-0 z-50">

//                 <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">

//                     {/* Back */}

//                     <motion.button

//                         whileHover={{
//                             x: -4,
//                         }}

//                         whileTap={{
//                             scale: .96,
//                         }}

//                         onClick={() => navigate("/")}

//                         className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200 shadow-lg"
//                     >

//                         <FiArrowLeft />

//                         <span className="font-medium">
//                             Back
//                         </span>

//                     </motion.button>

//                     {/* Actions */}

//                     <div className="flex items-center gap-3">

//                         {project.links?.github && (

//                             <motion.a

//                                 whileHover={{
//                                     y: -2,
//                                 }}

//                                 href={project.links.github}

//                                 target="_blank"

//                                 rel="noreferrer"

//                                 className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-lg"

//                             >

//                                 <FiGithub />

//                                 Source

//                             </motion.a>

//                         )}

//                         {project.type === "web" ? (

//                             <motion.a

//                                 whileHover={{
//                                     y: -2,
//                                 }}

//                                 href={project.links?.live}

//                                 target="_blank"

//                                 rel="noreferrer"

//                                 className="rounded-full bg-emerald-500 px-6 py-3 text-white font-semibold shadow-xl flex items-center gap-2"

//                             >

//                                 Live Demo

//                                 <FiExternalLink />

//                             </motion.a>

//                         ) : (

//                             <motion.a

//                                 whileHover={{
//                                     y: -2,
//                                 }}

//                                 href={project.links?.apk}

//                                 target="_blank"

//                                 rel="noreferrer"

//                                 className="rounded-full bg-emerald-500 px-6 py-3 text-white font-semibold shadow-xl flex items-center gap-2"

//                             >

//                                 Download APK

//                                 <FiDownload />

//                             </motion.a>

//                         )}

//                     </div>

//                 </div>

//             </nav>

//                         {/* ======================================
//                         HERO
//             ======================================= */}

//             <section className="relative min-h-screen flex items-center overflow-hidden">

//                 {/* Background */}

//                 <div className="absolute inset-0">

//                     <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

//                     <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-100 blur-[140px] opacity-40" />

//                     <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-100 blur-[140px] opacity-40" />

//                 </div>

//                 <div className={`${section} relative grid lg:grid-cols-2 gap-20 items-center`}>

//                     {/* Left */}

//                     <motion.div

//                         variants={stagger}

//                         initial="hidden"

//                         animate="show"

//                         className="space-y-8"

//                     >

//                         <motion.p

//                             variants={fadeUp}

//                             className={label}

//                         >

//                             Featured Project

//                         </motion.p>

//                         <motion.h1

//                             variants={fadeUp}

//                             className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-none"

//                         >

//                             {project.title}

//                         </motion.h1>

//                         <motion.p

//                             variants={fadeUp}

//                             className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed"

//                         >

//                             Lorem ipsum dolor sit amet, consectetur
//                             adipiscing elit. Sed do eiusmod tempor
//                             incididunt ut labore et dolore magna aliqua.

//                         </motion.p>

//                         <motion.div

//                             variants={fadeUp}

//                             className="flex flex-wrap gap-3"

//                         >

//                             {project.tags?.map((tag) => (

//                                 <span

//                                     key={tag}

//                                     className="rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-medium"

//                                 >

//                                     {tag}

//                                 </span>

//                             ))}

//                         </motion.div>

//                     </motion.div>
//                                         {/* Right */}

//                     <motion.div
//                         variants={imageReveal}
//                         initial="hidden"
//                         animate="show"
//                         className="relative"
//                     >

//                         {/* Floating Decoration */}

//                         <motion.div
//                             animate={{
//                                 y: [-10, 10, -10],
//                             }}
//                             transition={{
//                                 repeat: Infinity,
//                                 duration: 8,
//                                 ease: "easeInOut",
//                             }}
//                             className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-emerald-200 blur-3xl opacity-40"
//                         />

//                         <motion.div
//                             animate={{
//                                 y: [12, -12, 12],
//                             }}
//                             transition={{
//                                 repeat: Infinity,
//                                 duration: 7,
//                                 ease: "easeInOut",
//                             }}
//                             className="absolute -bottom-12 -right-12 w-52 h-52 rounded-full bg-cyan-200 blur-3xl opacity-40"
//                         />

//                         {/* Browser */}

//                         <motion.div

//                             style={{
//                                 y: heroY,
//                                 scale: heroScale,
//                                 opacity: heroOpacity,
//                             }}

//                             whileHover={{
//                                 y: -8,
//                             }}

//                             className={`${card} overflow-hidden`}

//                         >

//                             {/* Browser Header */}

//                             <div className="flex items-center gap-2 px-6 py-5 border-b border-slate-200 bg-slate-50">

//                                 <span className="w-3 h-3 rounded-full bg-red-400" />
//                                 <span className="w-3 h-3 rounded-full bg-yellow-400" />
//                                 <span className="w-3 h-3 rounded-full bg-green-400" />

//                             </div>

//                             <img
//                                 src={project.image}
//                                 alt={project.title}
//                                 className="w-full object-cover"
//                             />

//                         </motion.div>

//                     </motion.div>

//                 </div>

//                 {/* Scroll Indicator */}

//                 <motion.div

//                     animate={{
//                         y: [0, 10, 0],
//                     }}

//                     transition={{
//                         repeat: Infinity,
//                         duration: 2,
//                     }}

//                     className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400"

//                 >

//                     <span className="text-xs uppercase tracking-[0.25em] mb-3">
//                         Scroll
//                     </span>

//                     <FiArrowDown size={18} />

//                 </motion.div>

//             </section>

//             {/* ======================================
//                     PROJECT OVERVIEW
//             ======================================= */}

//             <section className="py-32">

//                 <div className={section}>

//                     <motion.div

//                         variants={fadeUp}
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}

//                         className="grid lg:grid-cols-12 gap-20"

//                     >

//                         {/* Left */}

//                         <div className="lg:col-span-7">

//                             <p className={label}>
//                                 Overview
//                             </p>

//                             <h2 className={`${heading} mt-6 mb-8`}>
//                                 Crafted to deliver a
//                                 seamless user experience.
//                             </h2>

//                             <p className="text-lg leading-9 text-slate-500">

//                                 {project.desc}

//                             </p>

//                             <p className="text-lg leading-9 text-slate-500 mt-8">

//                                 Lorem ipsum dolor sit amet,
//                                 consectetur adipiscing elit.
//                                 Integer finibus, massa vel
//                                 tincidunt posuere, lacus
//                                 tortor consequat lorem,
//                                 sed vestibulum lorem risus
//                                 sit amet justo.

//                             </p>

//                         </div>

//                         {/* Right */}

//                         <div className="lg:col-span-5">

//                             <div className={`${card} p-8`}>

//                                 <div className="space-y-8">

//                                     <div>

//                                         <p className={label}>
//                                             Role
//                                         </p>

//                                         <h3 className="text-xl font-semibold mt-2">
//                                             Full Stack Developer
//                                         </h3>

//                                     </div>

//                                     <div className="border-t border-slate-200" />

//                                     <div>

//                                         <p className={label}>
//                                             Duration
//                                         </p>

//                                         <h3 className="text-xl font-semibold mt-2">
//                                             6 Weeks
//                                         </h3>

//                                     </div>

//                                     <div className="border-t border-slate-200" />

//                                     <div>

//                                         <p className={label}>
//                                             Platform
//                                         </p>

//                                         <h3 className="text-xl font-semibold mt-2">
//                                             {project.type === "web"
//                                                 ? "Web Application"
//                                                 : "Android Application"}
//                                         </h3>

//                                     </div>

//                                     <div className="border-t border-slate-200" />

//                                     <div>

//                                         <p className={label}>
//                                             Technologies
//                                         </p>

//                                         <div className="flex flex-wrap gap-2 mt-4">

//                                             {project.tags?.map((tag) => (

//                                                 <span
//                                                     key={tag}
//                                                     className="px-3 py-2 rounded-full bg-slate-100 text-sm font-medium"
//                                                 >
//                                                     {tag}
//                                                 </span>

//                                             ))}

//                                         </div>

//                                     </div>

//                                 </div>

//                             </div>

//                         </div>

//                     </motion.div>

//                 </div>

//             </section>
//                         {/* ======================================
//                     PROJECT GALLERY
//             ======================================= */}

//             <section className="py-32">

//                 <div className={section}>

//                     <motion.div

//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}
//                         variants={stagger}

//                     >

//                         <motion.div variants={fadeUp} className="mb-16">

//                             <p className={label}>
//                                 Project Gallery
//                             </p>

//                             <h2 className={`${heading} mt-5`}>
//                                 A closer look at the product.
//                             </h2>

//                         </motion.div>

//                         <div className="grid lg:grid-cols-3 gap-6 auto-rows-[280px]">

//                             {/* ==========================
//                                 LARGE IMAGE
//                             ========================== */}

//                             <motion.div

//                                 variants={imageReveal}

//                                 whileHover={{
//                                     y: -10,
//                                 }}

//                                 className={`${card} lg:col-span-2 lg:row-span-2 overflow-hidden group relative`}

//                             >

//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 z-10"/>

//                                 <img
//                                     src={project.image}
//                                     alt={project.title}
//                                     className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
//                                 />

//                                 <div className="absolute bottom-8 left-8 z-20 text-white">

//                                     <p className="uppercase tracking-[0.25em] text-xs opacity-80">
//                                         Desktop Experience
//                                     </p>

//                                     <h3 className="text-2xl font-bold mt-2">
//                                         Main Interface
//                                     </h3>

//                                 </div>

//                             </motion.div>

//                             {/* ==========================
//                                 SCREENSHOT 1
//                             ========================== */}

//                             <motion.div

//                                 variants={imageReveal}

//                                 whileHover={{
//                                     y: -10,
//                                 }}

//                                 className={`${card} overflow-hidden group relative`}

//                             >

//                                 <img

//                                     src={project.screenshots?.[0] || project.image}

//                                     className="w-full h-full object-cover transition duration-700 group-hover:scale-110"

//                                     alt=""

//                                 />

//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent"/>

//                                 <div className="absolute bottom-6 left-6 text-white">

//                                     <p className="uppercase text-xs tracking-[0.25em]">
//                                         Mobile
//                                     </p>

//                                 </div>

//                             </motion.div>

//                             {/* ==========================
//                                 SCREENSHOT 2
//                             ========================== */}

//                             <motion.div

//                                 variants={imageReveal}

//                                 whileHover={{
//                                     y:-10
//                                 }}

//                                 className={`${card} overflow-hidden group relative`}

//                             >

//                                 <img

//                                     src={project.screenshots?.[1] || project.image}

//                                     className="w-full h-full object-cover transition duration-700 group-hover:scale-110"

//                                     alt=""

//                                 />

//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent"/>

//                                 <div className="absolute bottom-6 left-6 text-white">

//                                     <p className="uppercase text-xs tracking-[0.25em]">
//                                         Dashboard
//                                     </p>

//                                 </div>

//                             </motion.div>

//                             {/* ==========================
//                                 WIDE IMAGE
//                             ========================== */}

//                             <motion.div

//                                 variants={imageReveal}

//                                 whileHover={{
//                                     y:-10
//                                 }}

//                                 className={`${card} lg:col-span-2 overflow-hidden group relative`}

//                             >

//                                 <img

//                                     src={project.screenshots?.[2] || project.image}

//                                     className="w-full h-full object-cover transition duration-700 group-hover:scale-105"

//                                     alt=""

//                                 />

//                                 <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent"/>

//                                 <div className="absolute left-8 bottom-8 text-white">

//                                     <p className="uppercase text-xs tracking-[0.25em]">
//                                         User Journey
//                                     </p>

//                                     <h3 className="text-2xl font-bold mt-2">
//                                         Designed for speed.
//                                     </h3>

//                                 </div>

//                             </motion.div>

//                         </div>

//                     </motion.div>

//                 </div>

//             </section>
//                         {/* ======================================
//                     ABOUT PROJECT
//             ======================================= */}

//             <section className="py-32 bg-white">

//                 <div className={`${section} grid lg:grid-cols-2 gap-24 items-center`}>

//                     {/* LEFT */}

//                     <motion.div

//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once:true }}

//                         variants={fadeUp}

//                     >

//                         <p className={label}>
//                             About
//                         </p>

//                         <h2 className={`${heading} mt-5 mb-8`}>

//                             Designed with users,
//                             built for businesses.

//                         </h2>

//                         <p className="text-lg leading-9 text-slate-500">

//                             Lorem ipsum dolor sit amet,
//                             consectetur adipiscing elit.
//                             Curabitur interdum lacus
//                             vitae velit suscipit
//                             facilisis.

//                         </p>

//                         <p className="text-lg leading-9 text-slate-500 mt-8">

//                             Pellentesque habitant morbi
//                             tristique senectus et netus
//                             et malesuada fames ac turpis
//                             egestas.

//                         </p>

//                     </motion.div>

//                     {/* RIGHT */}

//                     <motion.div

//                         variants={imageReveal}

//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once:true }}

//                         whileHover={{
//                             y:-10
//                         }}

//                         className={`${card} overflow-hidden`}

//                     >

//                         <img

//                             src={project.image}

//                             className="w-full h-full object-cover"

//                             alt=""

//                         />

//                     </motion.div>

//                 </div>

//             </section>

//             {/* ======================================
//                     CHALLENGE & SOLUTION
//             ======================================= */}

//             <section className="py-32">

//                 <div className={section}>

//                     <div className="grid lg:grid-cols-2 gap-10">

//                         <motion.div

//                             initial="hidden"
//                             whileInView="show"
//                             viewport={{ once:true }}

//                             variants={fadeUp}

//                             className={`${card} p-10`}

//                         >

//                             <span className={label}>
//                                 Challenge
//                             </span>

//                             <h3 className="text-3xl font-bold mt-5 mb-6">

//                                 Creating an intuitive
//                                 workflow without
//                                 overwhelming users.

//                             </h3>

//                             <p className="text-slate-500 leading-8">

//                                 Lorem ipsum dolor sit amet,
//                                 consectetur adipiscing elit.
//                                 Sed do eiusmod tempor
//                                 incididunt ut labore et
//                                 dolore magna aliqua.

//                             </p>

//                         </motion.div>

//                         <motion.div

//                             initial="hidden"
//                             whileInView="show"
//                             viewport={{ once:true }}

//                             variants={fadeUp}

//                             className={`${card} p-10 bg-slate-900 text-white border-0`}

//                         >

//                             <span className="uppercase tracking-[0.25em] text-xs text-emerald-400">

//                                 Solution

//                             </span>

//                             <h3 className="text-3xl font-bold mt-5 mb-6">

//                                 A clean interface
//                                 supported by powerful
//                                 backend architecture.

//                             </h3>

//                             <p className="leading-8 text-slate-300">

//                                 Lorem ipsum dolor sit amet,
//                                 consectetur adipiscing elit.
//                                 Duis aute irure dolor in
//                                 reprehenderit in voluptate
//                                 velit esse cillum dolore.

//                             </p>

//                         </motion.div>

//                     </div>

//                 </div>

//             </section>
//                         {/* ======================================
//                     FEATURE HIGHLIGHTS
//             ======================================= */}

//             <section className="py-32 bg-white">

//                 <div className={section}>

//                     <motion.div
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}
//                         variants={stagger}
//                     >

//                         <motion.div
//                             variants={fadeUp}
//                             className="mb-16 text-center"
//                         >

//                             <p className={label}>
//                                 Highlights
//                             </p>

//                             <h2 className={`${heading} mt-5`}>
//                                 Built with attention to
//                                 every detail.
//                             </h2>

//                         </motion.div>

//                         <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

//                             {[
//                                 {
//                                     number: "01",
//                                     title: "Modern UI",
//                                     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
//                                 },
//                                 {
//                                     number: "02",
//                                     title: "Responsive",
//                                     desc: "Works beautifully on desktop, tablet and mobile."
//                                 },
//                                 {
//                                     number: "03",
//                                     title: "Performance",
//                                     desc: "Fast loading experience with optimized assets."
//                                 },
//                                 {
//                                     number: "04",
//                                     title: "Scalable",
//                                     desc: "Built using reusable components and clean architecture."
//                                 }
//                             ].map((item) => (

//                                 <motion.div

//                                     key={item.number}

//                                     variants={fadeUp}

//                                     whileHover={{
//                                         y: -10,
//                                         scale: 1.02
//                                     }}

//                                     className={`${card} p-8 transition-all`}

//                                 >

//                                     <span className="text-5xl font-black text-slate-100">

//                                         {item.number}

//                                     </span>

//                                     <h3 className="text-2xl font-bold mt-8">

//                                         {item.title}

//                                     </h3>

//                                     <p className="mt-5 text-slate-500 leading-8">

//                                         {item.desc}

//                                     </p>

//                                 </motion.div>

//                             ))}

//                         </div>

//                     </motion.div>

//                 </div>

//             </section>
//                         {/* ======================================
//                     DEVELOPMENT PROCESS
//             ======================================= */}

//             <section className="py-32">

//                 <div className={`${section} max-w-5xl`}>

//                     <motion.div

//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}
//                         variants={stagger}

//                     >

//                         <motion.div variants={fadeUp}>

//                             <p className={label}>
//                                 Process
//                             </p>

//                             <h2 className={`${heading} mt-5 mb-20`}>

//                                 From concept
//                                 to deployment.

//                             </h2>

//                         </motion.div>

//                         {[
//                             "Research",
//                             "Wireframes",
//                             "UI Design",
//                             "Frontend Development",
//                             "Backend Development",
//                             "Testing",
//                             "Deployment"
//                         ].map((step, index) => (

//                             <motion.div

//                                 key={step}

//                                 variants={fadeUp}

//                                 className="flex gap-8"

//                             >

//                                 <div className="flex flex-col items-center">

//                                     <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">

//                                         {index + 1}

//                                     </div>

//                                     {index !== 6 && (

//                                         <div className="w-px flex-1 bg-slate-200 my-4" />

//                                     )}

//                                 </div>

//                                 <div className="pb-16">

//                                     <h3 className="text-2xl font-bold">

//                                         {step}

//                                     </h3>

//                                     <p className="mt-4 text-slate-500 leading-8 max-w-2xl">

//                                         Lorem ipsum dolor sit amet,
//                                         consectetur adipiscing elit.
//                                         Integer gravida nunc sed
//                                         risus porta, vitae dictum
//                                         erat ultricies.

//                                     </p>

//                                 </div>

//                             </motion.div>

//                         ))}

//                     </motion.div>

//                 </div>

//             </section>
//                         {/* ======================================
//                     SHOWCASE
//             ======================================= */}

//             <section className="py-32 bg-slate-950 text-white">

//                 <div className={section}>

//                     <div className="space-y-40">

//                         {(project.screenshots || [project.image]).map((image, index) => (

//                             <motion.div

//                                 key={index}

//                                 initial="hidden"
//                                 whileInView="show"
//                                 viewport={{ once: true }}
//                                 variants={fadeUp}

//                                 className={`grid lg:grid-cols-2 gap-16 items-center ${
//                                     index % 2 ? "lg:[&>*:first-child]:order-2" : ""
//                                 }`}

//                             >

//                                 <div>

//                                     <span className="uppercase tracking-[0.25em] text-xs text-emerald-400">

//                                         Screenshot {index + 1}

//                                     </span>

//                                     <h3 className="text-5xl font-black mt-6">

//                                         Beautifully crafted
//                                         interface.

//                                     </h3>

//                                     <p className="mt-8 text-slate-400 leading-9">

//                                         Lorem ipsum dolor sit amet,
//                                         consectetur adipiscing elit.
//                                         Sed do eiusmod tempor
//                                         incididunt ut labore et
//                                         dolore magna aliqua.

//                                     </p>

//                                 </div>

//                                 <motion.div

//                                     whileHover={{
//                                         y: -8
//                                     }}

//                                     className="rounded-[32px] overflow-hidden border border-slate-800"

//                                 >

//                                     <img

//                                         src={image}

//                                         className="w-full object-cover"

//                                         alt=""

//                                     />

//                                 </motion.div>

//                             </motion.div>

//                         ))}

//                     </div>

//                 </div>

//             </section>
//                         {/* ======================================
//                     TECH STACK
//             ======================================= */}

//             <section className="py-32">

//                 <div className={section}>

//                     <motion.div

//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}
//                         variants={stagger}

//                     >

//                         <motion.div variants={fadeUp}>

//                             <p className={label}>

//                                 Technologies

//                             </p>

//                             <h2 className={`${heading} mt-5 mb-16`}>

//                                 Built using modern
//                                 technologies.

//                             </h2>

//                         </motion.div>

//                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//                             {project.tags?.map((tech) => (

//                                 <motion.div

//                                     key={tech}

//                                     variants={fadeUp}

//                                     whileHover={{
//                                         y: -8,
//                                         scale: 1.02
//                                     }}

//                                     className={`${card} p-8 flex items-center justify-center text-center min-h-[150px]`}

//                                 >

//                                     <h3 className="text-xl font-bold">

//                                         {tech}

//                                     </h3>

//                                 </motion.div>

//                             ))}

//                         </div>

//                     </motion.div>

//                 </div>

//             </section>
//                         {/* ======================================
//                     PROJECT RESULTS
//             ======================================= */}

//             <section className="py-32 bg-white">

//                 <div className={section}>

//                     <motion.div
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: true }}
//                         variants={stagger}
//                     >

//                         <motion.div
//                             variants={fadeUp}
//                             className="text-center mb-20"
//                         >

//                             <p className={label}>
//                                 Results
//                             </p>

//                             <h2 className={`${heading} mt-5`}>
//                                 Built for performance.
//                             </h2>

//                         </motion.div>

//                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

//                             {[
//                                 {
//                                     value: "98",
//                                     label: "Lighthouse Score"
//                                 },
//                                 {
//                                     value: "99%",
//                                     label: "Performance"
//                                 },
//                                 {
//                                     value: "24/7",
//                                     label: "Availability"
//                                 },
//                                 {
//                                     value: "100%",
//                                     label: "Responsive"
//                                 }
//                             ].map((item) => (

//                                 <motion.div

//                                     key={item.label}

//                                     variants={fadeUp}

//                                     whileHover={{
//                                         y:-8
//                                     }}

//                                     className={`${card} p-10 text-center`}

//                                 >

//                                     <h3 className="text-6xl font-black text-emerald-500">

//                                         {item.value}

//                                     </h3>

//                                     <p className="mt-4 text-slate-500">

//                                         {item.label}

//                                     </p>

//                                 </motion.div>

//                             ))}

//                         </div>

//                     </motion.div>

//                 </div>

//             </section>
//                         {/* ======================================
//                     PROJECT NAVIGATION
//             ======================================= */}

//             <section className="py-32">

//                 <div className={section}>

//                     <div className="grid lg:grid-cols-2 gap-8">

//                         <motion.div

//                             whileHover={{
//                                 y:-8
//                             }}

//                             className={`${card} p-12 cursor-pointer`}

//                             onClick={() => navigate("/")}

//                         >

//                             <p className={label}>

//                                 Previous

//                             </p>

//                             <h2 className="text-4xl font-black mt-6">

//                                 ← Back to Portfolio

//                             </h2>

//                         </motion.div>

//                         <motion.div

//                             whileHover={{
//                                 y:-8
//                             }}

//                             className="rounded-[32px] bg-slate-900 text-white p-12 cursor-pointer"

//                             onClick={() => navigate("/")}

//                         >

//                             <p className="uppercase tracking-[0.3em] text-xs text-emerald-400">

//                                 Next

//                             </p>

//                             <h2 className="text-4xl font-black mt-6">

//                                 Explore More Projects →

//                             </h2>
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>
//                         {/* ======================================
//                     CONTACT CTA
//             ======================================= */}

//             <section className="relative overflow-hidden py-40">

//                 <div className="absolute inset-0">

//                     <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-emerald-200 blur-[180px] opacity-30 rounded-full"/>

//                     <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-cyan-200 blur-[180px] opacity-30 rounded-full"/>

//                 </div>

//                 <div className={`${section} relative text-center`}>

//                     <motion.div

//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once:true }}
//                         variants={stagger}

//                     >

//                         <motion.p

//                             variants={fadeUp}

//                             className={label}

//                         >

//                             Let's Work Together

//                         </motion.p>

//                         <motion.h2

//                             variants={fadeUp}

//                             className="text-5xl md:text-7xl font-black tracking-tight mt-6"

//                         >

//                             Have an idea?

//                             <br/>

//                             Let's build it.

//                         </motion.h2>

//                         <motion.p

//                             variants={fadeUp}

//                             className="max-w-2xl mx-auto mt-8 text-lg leading-9 text-slate-500"

//                         >

//                             Lorem ipsum dolor sit amet,
//                             consectetur adipiscing elit.
//                             Vestibulum ante ipsum primis
//                             in faucibus orci luctus et
//                             ultrices posuere cubilia.

//                         </motion.p>

//                         <motion.div

//                             variants={fadeUp}

//                             className="mt-14"

//                         >

//                             <motion.button

//                                 whileHover={{
//                                     scale:1.05
//                                 }}

//                                 whileTap={{
//                                     scale:.96
//                                 }}

//                                 className="px-10 py-5 rounded-full bg-slate-900 text-white text-lg font-semibold shadow-2xl"

//                             >

//                                 Start a Conversation

//                             </motion.button>

//                         </motion.div>

//                     </motion.div>

//                 </div>

//             </section>
//                     </motion.main>

//     );

// };

// export default ProjectDetail;

import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

import {
    FiArrowLeft,
    FiExternalLink,
    FiGithub,
    FiDownload,
    FiArrowUpRight,
} from "react-icons/fi";

import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";

import { projects } from "../constants/projectData";


// ==========================================================
// PROJECT DETAIL
// ==========================================================

const ProjectDetail = () => {

    const { projectId } = useParams();

    const navigate = useNavigate();

    const containerRef = useRef(null);


    // ==========================================================
    // FIND PROJECT
    // ==========================================================

    const project = projects.find(
        (item) => String(item.id) === String(projectId)
    );


    if (!project) {

        return (

            <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">

                <div className="text-center">

                    <h1 className="text-4xl font-black text-slate-900">
                        Project Not Found
                    </h1>

                    <button
                        onClick={() => navigate("/")}
                        className="
                            mt-6
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-slate-900
                            px-6
                            py-3
                            text-white
                            font-semibold
                        "
                    >

                        <FiArrowLeft />

                        Back to Portfolio

                    </button>

                </div>

            </div>

        );
    }


    // ==========================================================
    // SCROLL
    // ==========================================================

    const { scrollYProgress } = useScroll({

        target: containerRef,

        offset: ["start start", "end end"],

    });


    const heroImageY = useTransform(

        scrollYProgress,

        [0, 1],

        [0, 80]

    );


    const heroImageScale = useTransform(

        scrollYProgress,

        [0, 0.5],

        [1, 1.06]

    );


    // ==========================================================
    // ANIMATIONS
    // ==========================================================

    const fadeUp = {

        hidden: {
            opacity: 0,
            y: 30,
        },

        show: {

            opacity: 1,

            y: 0,

            transition: {

                duration: 0.7,

                ease: [0.22, 1, 0.36, 1],

            },

        },

    };


    const stagger = {

        hidden: {},

        show: {

            transition: {

                staggerChildren: 0.1,

            },

        },

    };


    // ==========================================================
    // STYLES
    // ==========================================================

    const container =
        "max-w-7xl mx-auto px-6 lg:px-10";

    const label =
        "text-xs uppercase tracking-[0.3em] font-semibold text-emerald-600";

    const heading =
        "text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-950";

    const card =
        "rounded-[28px] border border-slate-200 bg-white shadow-[0_15px_60px_rgba(15,23,42,0.06)]";


    // ==========================================================
    // DATA HELPERS
    // ==========================================================

    const screenshots =
        project.screenshots?.filter(Boolean) || [];


    const features =
        project.features?.filter(Boolean) || [];


    const isWeb =
        project.type === "web";


    const platform =
        project.platform ||
        project.category ||
        (isWeb
            ? "Web Application"
            : "Android Application");


    return (

        <motion.main
    ref={containerRef}
    initial={{
        opacity: 0,
    }}
    animate={{
        opacity: 1,
    }}
    className="
        relative
        min-h-screen
        bg-[#fafafa]
        text-slate-800
        overflow-x-hidden
    "
>


            {/* =====================================================
                NAVBAR
            ===================================================== */}

            <header className="fixed top-0 left-0 right-0 z-50">

                <div className={`${container} pt-5`}>

                    <nav
                        className="
                            flex
                            items-center
                            justify-between
                            rounded-full
                            border
                            border-slate-200/80
                            bg-white/80
                            backdrop-blur-xl
                            px-3
                            py-3
                            shadow-lg
                            shadow-slate-900/5
                        "
                    >


                        {/* BACK */}

                        <motion.button

                            whileHover={{
                                x: -3,
                            }}

                            whileTap={{
                                scale: 0.96,
                            }}

                            onClick={() => navigate("/")}

                            className="
                                flex
                                items-center
                                gap-2
                                rounded-full
                                px-4
                                py-2.5
                                text-sm
                                font-medium
                                text-slate-700
                                hover:bg-slate-100
                                transition
                            "
                        >

                            <FiArrowLeft size={16} />

                            <span className="hidden sm:block">
                                Back to Projects
                            </span>

                            <span className="sm:hidden">
                                Back
                            </span>

                        </motion.button>


                        {/* ACTIONS */}

                        <div className="flex items-center gap-2">


                            {project.links?.github && (

                                <motion.a

                                    whileHover={{
                                        y: -2,
                                    }}

                                    whileTap={{
                                        scale: 0.96,
                                    }}

                                    href={project.links.github}

                                    target="_blank"

                                    rel="noreferrer"

                                    className="
                                        hidden
                                        sm:flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        border-slate-200
                                        px-4
                                        py-2.5
                                        text-sm
                                        font-medium
                                        text-slate-700
                                        hover:bg-slate-100
                                        transition
                                    "
                                >

                                    <FiGithub size={16} />

                                    GitHub

                                </motion.a>

                            )}


                            {isWeb && project.links?.live && (

                                <ProjectLink
                                    href={project.links.live}
                                    icon={<FiExternalLink size={15} />}
                                >
                                    View Live
                                </ProjectLink>

                            )}


                            {!isWeb && project.links?.apk && (

                                <ProjectLink
                                    href={project.links.apk}
                                    icon={<FiDownload size={15} />}
                                >
                                    Download APK
                                </ProjectLink>

                            )}

                        </div>

                    </nav>

                </div>

            </header>



            {/* =====================================================
                HERO
            ===================================================== */}

            <section
                className="
                    relative
                    pt-36
                    pb-20
                    lg:pt-44
                    lg:pb-28
                    overflow-hidden
                "
            >


                {/* BACKGROUND */}

                <div className="absolute inset-0 pointer-events-none">

                    <div
                        className="
                            absolute
                            -top-40
                            -left-40
                            w-[500px]
                            h-[500px]
                            rounded-full
                            bg-emerald-200/30
                            blur-[130px]
                        "
                    />

                    <div
                        className="
                            absolute
                            top-40
                            -right-40
                            w-[500px]
                            h-[500px]
                            rounded-full
                            bg-cyan-200/30
                            blur-[130px]
                        "
                    />

                </div>


                <div className={`${container} relative`}>

                    <div
                        className="
                            grid
                            lg:grid-cols-[0.85fr_1.15fr]
                            gap-14
                            lg:gap-20
                            items-center
                        "
                    >


                        {/* HERO CONTENT */}

                        <motion.div

                            variants={stagger}

                            initial="hidden"

                            animate="show"
                        >


                            {/* CATEGORY */}

                            <motion.div
                                variants={fadeUp}
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-emerald-200
                                    bg-emerald-50
                                    px-4
                                    py-2
                                    mb-7
                                "
                            >

                                <span
                                    className="
                                        w-2
                                        h-2
                                        rounded-full
                                        bg-emerald-500
                                    "
                                />

                                <span
                                    className="
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-[0.2em]
                                        text-emerald-700
                                    "
                                >

                                    {project.category ||
                                        (isWeb
                                            ? "Web Project"
                                            : "Mobile Project")}

                                </span>

                            </motion.div>


                            {/* TITLE */}

                            <motion.h1

                                variants={fadeUp}

                                className="
                                    text-6xl
                                    md:text-7xl
                                    lg:text-[76px]
                                    font-black
                                    leading-[0.95]
                                    tracking-[-0.04em]
                                    text-slate-950
                                "
                            >

                                {project.title}

                            </motion.h1>


                            {/* DESCRIPTION */}

                            <motion.p

                                variants={fadeUp}

                                className="
                                    mt-7
                                    max-w-xl
                                    text-lg
                                    md:text-xl
                                    leading-8
                                    text-slate-500
                                "
                            >

                                {project.shortDescription ||
                                    project.desc}

                            </motion.p>


                            {/* TAGS */}

                            {project.tags?.length > 0 && (

                                <motion.div

                                    variants={fadeUp}

                                    className="
                                        flex
                                        flex-wrap
                                        gap-2
                                        mt-8
                                    "
                                >

                                    {project.tags.map((tag) => (

                                        <span

                                            key={tag}

                                            className="
                                                rounded-full
                                                border
                                                border-slate-200
                                                bg-white
                                                px-4
                                                py-2
                                                text-sm
                                                font-medium
                                                text-slate-600
                                            "
                                        >

                                            {tag}

                                        </span>

                                    ))}

                                </motion.div>

                            )}


                            {/* HERO ACTIONS */}

                            <motion.div

                                variants={fadeUp}

                                className="
                                    flex
                                    flex-wrap
                                    gap-3
                                    mt-9
                                "
                            >

                                {isWeb &&
                                    project.links?.live && (

                                        <ProjectPrimaryButton
                                            href={project.links.live}
                                            icon={<FiArrowUpRight />}
                                        >
                                            Visit Live Project
                                        </ProjectPrimaryButton>

                                    )}


                                {!isWeb &&
                                    project.links?.apk && (

                                        <ProjectPrimaryButton
                                            href={project.links.apk}
                                            icon={<FiDownload />}
                                        >
                                            Download APK
                                        </ProjectPrimaryButton>

                                    )}


                                {project.links?.github && (

                                    <ProjectSecondaryButton
                                        href={project.links.github}
                                        icon={<FiGithub />}
                                    >
                                        View Source
                                    </ProjectSecondaryButton>

                                )}

                            </motion.div>

                        </motion.div>



                        {/* HERO IMAGE */}

                        <motion.div

                            initial={{
                                opacity: 0,
                                scale: 0.96,
                            }}

                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}

                            transition={{
                                duration: 0.8,
                            }}

                            className="relative"
                        >

                            <div
                                className="
                                    absolute
                                    -inset-10
                                    rounded-[50px]
                                    bg-emerald-200/20
                                    blur-[70px]
                                "
                            />


                            <motion.div

                                style={{
                                    y: heroImageY,
                                    scale: heroImageScale,
                                }}

                                className="
                                    relative
                                    overflow-hidden
                                    rounded-[30px]
                                    border
                                    border-slate-200
                                    bg-white
                                    shadow-[0_30px_100px_rgba(15,23,42,0.12)]
                                "
                            >


                                {/* BROWSER HEADER */}

                                {isWeb && (

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            border-b
                                            border-slate-200
                                            bg-slate-50
                                            px-5
                                            py-4
                                        "
                                    >

                                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />

                                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />

                                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />

                                        <div
                                            className="
                                                ml-4
                                                flex-1
                                                h-7
                                                rounded-full
                                                bg-white
                                                border
                                                border-slate-200
                                            "
                                        />

                                    </div>

                                )}


                                <img

                                    src={project.image}

                                    alt={project.title}

                                    className="
                                        block
                                        w-full
                                        max-h-[650px]
                                        object-cover
                                    "
                                />

                            </motion.div>

                        </motion.div>

                    </div>

                </div>

            </section>



            {/* =====================================================
                QUICK INFO
            ===================================================== */}

            {(project.role ||
                project.duration ||
                platform) && (

                <section className="pb-24">

                    <div className={container}>

                        <motion.div

                            initial="hidden"

                            whileInView="show"

                            viewport={{
                                once: true,
                                margin: "-100px",
                            }}

                            variants={fadeUp}

                            className="
                                grid
                                sm:grid-cols-2
                                lg:grid-cols-3
                                divide-y
                                sm:divide-y-0
                                sm:divide-x
                                divide-slate-200
                                rounded-[28px]
                                border
                                border-slate-200
                                bg-white
                                shadow-[0_15px_60px_rgba(15,23,42,0.05)]
                            "
                        >

                            {project.role && (

                                <Info
                                    title="Role"
                                    value={project.role}
                                />

                            )}


                            {project.duration && (

                                <Info
                                    title="Duration"
                                    value={project.duration}
                                />

                            )}


                            {platform && (

                                <Info
                                    title="Platform"
                                    value={platform}
                                />

                            )}

                        </motion.div>

                    </div>

                </section>

            )}



            {/* =====================================================
                OVERVIEW
            ===================================================== */}

            {project.description && (

                <section className="py-24 lg:py-32 bg-white">

                    <div className={container}>

                        <div
                            className="
                                grid
                                lg:grid-cols-[0.7fr_1.3fr]
                                gap-16
                            "
                        >

                            <div>

                                <p className={label}>
                                    Overview
                                </p>

                                <h2
                                    className={`${heading} mt-5`}
                                >
                                    About the project.
                                </h2>

                            </div>


                            <motion.div

                                initial="hidden"

                                whileInView="show"

                                viewport={{
                                    once: true,
                                }}

                                variants={fadeUp}

                                className="max-w-3xl"
                            >

                                <p
                                    className="
                                        text-xl
                                        md:text-2xl
                                        leading-9
                                        text-slate-600
                                    "
                                >

                                    {project.description}

                                </p>

                            </motion.div>

                        </div>

                    </div>

                </section>

            )}



            {/* =====================================================
                FEATURES
            ===================================================== */}

            {features.length > 0 && (

                <section className="py-24 lg:py-32">

                    <div className={container}>

                        <motion.div

                            initial="hidden"

                            whileInView="show"

                            viewport={{
                                once: true,
                            }}

                            variants={stagger}
                        >

                            <motion.div variants={fadeUp}>

                                <p className={label}>
                                    Key Features
                                </p>

                                <h2
                                    className={`${heading} mt-5`}
                                >
                                    What I built.
                                </h2>

                            </motion.div>


                            <div
                                className="
                                    grid
                                    md:grid-cols-2
                                    gap-5
                                    mt-14
                                "
                            >

                                {features.map(
                                    (feature, index) => (

                                        <motion.div

                                            key={`${feature.title}-${index}`}

                                            variants={fadeUp}

                                            whileHover={{
                                                y: -6,
                                            }}

                                            className={`
                                                ${card}
                                                p-7
                                                md:p-9
                                                group
                                            `}
                                        >

                                            <div
                                                className="
                                                    flex
                                                    items-start
                                                    justify-between
                                                    gap-5
                                                "
                                            >

                                                <span
                                                    className="
                                                        flex
                                                        items-center
                                                        justify-center
                                                        w-11
                                                        h-11
                                                        rounded-xl
                                                        bg-emerald-50
                                                        text-emerald-600
                                                        font-bold
                                                    "
                                                >

                                                    {String(
                                                        index + 1
                                                    ).padStart(
                                                        2,
                                                        "0"
                                                    )}

                                                </span>


                                                <FiArrowUpRight
                                                    className="
                                                        text-slate-300
                                                        group-hover:text-emerald-500
                                                        transition
                                                    "
                                                />

                                            </div>


                                            <h3
                                                className="
                                                    mt-8
                                                    text-2xl
                                                    font-bold
                                                    text-slate-900
                                                "
                                            >

                                                {feature.title}

                                            </h3>


                                            <p
                                                className="
                                                    mt-3
                                                    leading-7
                                                    text-slate-500
                                                "
                                            >

                                                {feature.description}

                                            </p>

                                        </motion.div>

                                    )
                                )}

                            </div>

                        </motion.div>

                    </div>

                </section>

            )}



            {/* =====================================================
                SCREENSHOTS
            ===================================================== */}

            {screenshots.length > 0 && (

                <section className="py-24 lg:py-32 bg-slate-950">

                    <div className={container}>

                        <motion.div

                            initial="hidden"

                            whileInView="show"

                            viewport={{
                                once: true,
                            }}

                            variants={fadeUp}
                        >

                            <p
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.3em]
                                    font-semibold
                                    text-emerald-400
                                "
                            >
                                Screenshots
                            </p>

                            <h2
                                className="
                                    mt-5
                                    text-4xl
                                    md:text-5xl
                                    lg:text-6xl
                                    font-black
                                    tracking-tight
                                    text-white
                                "
                            >
                                See it in action.
                            </h2>

                        </motion.div>


                        <div
                            className="
                                grid
                                md:grid-cols-2
                                gap-6
                                mt-14
                            "
                        >

                            {screenshots.map(
                                (image, index) => (

                                    <motion.div

                                        key={image + index}

                                        initial={{
                                            opacity: 0,
                                            y: 30,
                                        }}

                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}

                                        viewport={{
                                            once: true,
                                            margin: "-80px",
                                        }}

                                        transition={{
                                            duration: 0.7,
                                            delay: index * 0.08,
                                        }}

                                        whileHover={{
                                            y: -6,
                                        }}

                                        className={`
                                            overflow-hidden
                                            rounded-[28px]
                                            border
                                            border-slate-800
                                            bg-slate-900
                                            ${
                                                index === 0
                                                    ? "md:col-span-2"
                                                    : ""
                                            }
                                        `}
                                    >

                                        <img

                                            src={image}

                                            alt={`${project.title} screenshot ${index + 1}`}

                                            className="
                                                block
                                                w-full
                                                object-cover
                                                transition-transform
                                                duration-700
                                                hover:scale-[1.025]
                                            "
                                        />

                                    </motion.div>

                                )
                            )}

                        </div>

                    </div>

                </section>

            )}



            {/* =====================================================
                CHALLENGE / SOLUTION
            ===================================================== */}

            {(project.challenge ||
                project.solution) && (

                <section className="py-24 lg:py-32 bg-white">

                    <div className={container}>

                        <div
                            className="
                                grid
                                lg:grid-cols-2
                                gap-6
                            "
                        >


                            {/* CHALLENGE */}

                            {project.challenge && (

                                <motion.div

                                    initial="hidden"

                                    whileInView="show"

                                    viewport={{
                                        once: true,
                                    }}

                                    variants={fadeUp}

                                    className={`
                                        ${card}
                                        p-8
                                        md:p-10
                                    `}
                                >

                                    <p className={label}>
                                        Challenge
                                    </p>

                                    <p
                                        className="
                                            mt-6
                                            text-xl
                                            md:text-2xl
                                            font-semibold
                                            leading-9
                                            text-slate-800
                                        "
                                    >

                                        {project.challenge}

                                    </p>

                                </motion.div>

                            )}


                            {/* SOLUTION */}

                            {project.solution && (

                                <motion.div

                                    initial="hidden"

                                    whileInView="show"

                                    viewport={{
                                        once: true,
                                    }}

                                    variants={fadeUp}

                                    className="
                                        rounded-[28px]
                                        bg-slate-900
                                        p-8
                                        md:p-10
                                        text-white
                                    "
                                >

                                    <p
                                        className="
                                            text-xs
                                            uppercase
                                            tracking-[0.3em]
                                            font-semibold
                                            text-emerald-400
                                        "
                                    >
                                        Solution
                                    </p>

                                    <p
                                        className="
                                            mt-6
                                            text-xl
                                            md:text-2xl
                                            font-semibold
                                            leading-9
                                            text-white
                                        "
                                    >

                                        {project.solution}

                                    </p>

                                </motion.div>

                            )}

                        </div>

                    </div>

                </section>

            )}



            {/* =====================================================
                TECH STACK
            ===================================================== */}

            {project.tags?.length > 0 && (

                <section className="py-24 lg:py-32">

                    <div className={container}>

                        <div
                            className="
                                grid
                                lg:grid-cols-[0.7fr_1.3fr]
                                gap-14
                                items-start
                            "
                        >

                            <div>

                                <p className={label}>
                                    Technologies
                                </p>

                                <h2
                                    className={`${heading} mt-5`}
                                >
                                    Built with.
                                </h2>

                            </div>


                            <motion.div

                                initial="hidden"

                                whileInView="show"

                                viewport={{
                                    once: true,
                                }}

                                variants={stagger}

                                className="
                                    flex
                                    flex-wrap
                                    gap-3
                                "
                            >

                                {project.tags.map(
                                    (tech) => (

                                        <motion.span

                                            key={tech}

                                            variants={fadeUp}

                                            whileHover={{
                                                y: -4,
                                            }}

                                            className="
                                                rounded-2xl
                                                border
                                                border-slate-200
                                                bg-white
                                                px-5
                                                py-4
                                                text-sm
                                                font-semibold
                                                text-slate-700
                                                shadow-sm
                                            "
                                        >

                                            {tech}

                                        </motion.span>

                                    )
                                )}

                            </motion.div>

                        </div>

                    </div>

                </section>

            )}



            {/* =====================================================
                FINAL CTA
            ===================================================== */}

            <section className="px-6 pb-16">

                <div
                    className="
                        max-w-7xl
                        mx-auto
                        relative
                        overflow-hidden
                        rounded-[36px]
                        bg-slate-900
                        px-7
                        py-20
                        md:px-16
                        text-center
                    "
                >

                    <div
                        className="
                            absolute
                            -top-40
                            left-1/2
                            -translate-x-1/2
                            w-[500px]
                            h-[300px]
                            rounded-full
                            bg-emerald-500/20
                            blur-[100px]
                        "
                    />


                    <motion.div

                        initial="hidden"

                        whileInView="show"

                        viewport={{
                            once: true,
                        }}

                        variants={stagger}

                        className="relative"
                    >

                        <motion.p
                            variants={fadeUp}
                            className="
                                text-xs
                                uppercase
                                tracking-[0.3em]
                                font-semibold
                                text-emerald-400
                            "
                        >
                            More Projects
                        </motion.p>


                        <motion.h2

                            variants={fadeUp}

                            className="
                                mt-5
                                text-4xl
                                md:text-6xl
                                font-black
                                tracking-tight
                                text-white
                            "
                        >

                            Want to see more?

                        </motion.h2>


                        <motion.p

                            variants={fadeUp}

                            className="
                                max-w-xl
                                mx-auto
                                mt-6
                                text-lg
                                leading-8
                                text-slate-400
                            "
                        >

                            Explore more of my work and
                            see what I have been building.

                        </motion.p>


                        <motion.button

                            variants={fadeUp}

                            whileHover={{
                                scale: 1.04,
                            }}

                            whileTap={{
                                scale: 0.96,
                            }}

                            onClick={() => navigate("/")}

                            className="
                                mt-9
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-white
                                px-7
                                py-4
                                font-semibold
                                text-slate-900
                            "
                        >

                            Explore Portfolio

                            <FiArrowUpRight />

                        </motion.button>

                    </motion.div>

                </div>

            </section>

        </motion.main>

    );
};


// ==========================================================
// PROJECT LINK
// ==========================================================

const ProjectLink = ({
    href,
    icon,
    children,
}) => {

    return (

        <motion.a

            whileHover={{
                y: -2,
                scale: 1.02,
            }}

            whileTap={{
                scale: 0.96,
            }}

            href={href}

            target="_blank"

            rel="noreferrer"

            className="
                flex
                items-center
                gap-2
                rounded-full
                bg-slate-900
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-slate-900/20
            "
        >

            {children}

            {icon}

        </motion.a>

    );
};


// ==========================================================
// PRIMARY BUTTON
// ==========================================================

const ProjectPrimaryButton = ({
    href,
    icon,
    children,
}) => {

    return (

        <motion.a

            whileHover={{
                y: -2,
                scale: 1.02,
            }}

            whileTap={{
                scale: 0.97,
            }}

            href={href}

            target="_blank"

            rel="noreferrer"

            className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-emerald-500
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-emerald-500/20
                hover:bg-emerald-600
                transition
            "
        >

            {children}

            {icon}

        </motion.a>

    );
};


// ==========================================================
// SECONDARY BUTTON
// ==========================================================

const ProjectSecondaryButton = ({
    href,
    icon,
    children,
}) => {

    return (

        <motion.a

            whileHover={{
                y: -2,
            }}

            whileTap={{
                scale: 0.97,
            }}

            href={href}

            target="_blank"

            rel="noreferrer"

            className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white
                px-6
                py-3.5
                text-sm
                font-semibold
                text-slate-700
                hover:bg-slate-100
                transition
            "
        >

            {icon}

            {children}

        </motion.a>

    );
};


// ==========================================================
// INFO
// ==========================================================

const Info = ({
    title,
    value,
}) => {

    return (

        <div className="p-6 md:p-8">

            <p
                className="
                    text-[11px]
                    uppercase
                    tracking-[0.25em]
                    font-semibold
                    text-slate-400
                "
            >

                {title}

            </p>


            <p
                className="
                    mt-2
                    text-base
                    font-semibold
                    text-slate-900
                "
            >

                {value}

            </p>

        </div>

    );

};


export default ProjectDetail;