    // import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
    // import { useRef } from 'react';
    // import { FiArrowRight } from 'react-icons/fi';
    // import { projects } from '../constants/projectData';
    // import { useNavigate } from 'react-router-dom';

    // const Projects = () => {
    // const containerRef = useRef(null);
    // const navigate = useNavigate();
    
    // const { scrollYProgress } = useScroll({
    //     target: containerRef,
    //     offset: ["start start", "end end"]
    // });

    // const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    
    // // Horizontal movement logic
    // const xTranslate = useTransform(smoothProgress, [0, 1], ["0%", "-70%"]);

    // return (
    //     <section id="projects" ref={containerRef} className="relative h-[400vh] bg-[#293653] scroll-mt-0">
    //     <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
    //         <div className="flex items-center">
    //         <div className="hidden md:flex w-[20vw] h-full flex-col justify-center px-16 border-r border-slate-700 shrink-0">
    //             <span className="text-blue-400 font-mono text-xs uppercase tracking-[0.4em] mb-4">Portfolio</span>
    //             <h2 className="text-4xl font-bold text-white">Selected <br/>Works</h2>
    //         </div>

    //         <motion.div style={{ x: xTranslate }} className="flex gap-8 md:gap-12 px-[5vw]">
    //             {projects.map((project) => (
    //                 <ProjectCard key={project.id} project={project} navigate={navigate} />
    //             ))}
    //             <div className="min-w-[40vw] flex items-center">
    //                 <h3 className="text-6xl md:text-2xl font-bold text-slate-500/30">2026©</h3>
    //             </div>
    //         </motion.div>
    //         </div>
    //     </div>
    //     </section>
    // );
    // };

    // // Internal ProjectCard (Keep UI exactly as is)
    // const ProjectCard = ({ project, navigate }) => (
    // <motion.div
    //     layoutId={`card-${project.id}`}
    //     onClick={() => navigate(`/project/${project.id}`)}
    //     whileHover={{ y: -15 }}
    //     className="min-w-[320px] md:min-w-160 aspect-16/10 bg-white rounded-[3rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all"
    // >
    //     <div className="h-full w-full relative">
    //     <img src={project.image} alt={project.title} className="w-full h-full object-fill" />
    //     <div className="absolute inset-0 bg-linear-to-t from-[#223242] via-transparent to-transparent p-10 flex flex-col justify-end">
    //         <div className="flex gap-2 mb-3">
    //         {project.tags.map(t => <span key={t} className="text-[10px] text-blue-800 font-bold uppercase tracking-wider bg-white/60 px-3 py-1 rounded-full">{t}</span>)}
    //         </div>
    //         <div className="flex justify-between items-center">
    //             <h3 className="text-3xl font-bold text-white/70">{project.title}</h3>
    //             <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
    //                 <FiArrowRight />
    //             </div>
    //         </div>
    //     </div>
    //     </div>
    // </motion.div>
    // );

    // export default Projects;


import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { projects } from "../constants/projectData";
import { useNavigate } from "react-router-dom";


const Projects = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // ==========================================
  // PROJECT SECTION SCROLL
  // ==========================================

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // ==========================================
  // HORIZONTAL MOVEMENT
  // ==========================================

  const xTranslate = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "-70%"]
  );


  return (
    <section
      id="projects"
      ref={containerRef}
      style={{
        position: "relative",
      }}
      className="
     
        h-[400vh]
        bg-[#293653]
        scroll-mt-0
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
          flex-col
          justify-center
        "
      >

        {/* ====================================
            HORIZONTAL CONTENT
        ==================================== */}

        <div className="flex items-center">

          {/* ==================================
              LEFT LABEL
          ================================== */}

          <div
            className="
              hidden
              md:flex
              w-[20vw]
              h-full
              flex-col
              justify-center
              px-16
              border-r
              border-slate-700
              shrink-0
            "
          >

            <span
              className="
                text-blue-400
                font-mono
                text-xs
                uppercase
                tracking-[0.4em]
                mb-4
              "
            >
              Portfolio
            </span>

            <h2
              className="
                text-4xl
                font-bold
                text-white
              "
            >
              Selected
              <br />
              Works
            </h2>

          </div>


          {/* ==================================
              HORIZONTAL PROJECT TRACK
          ================================== */}

          <motion.div
            style={{
              x: xTranslate,
              position: "relative",
            }}
            className="
              flex
              gap-8
              md:gap-12
              px-[5vw]
              overflow-visible
            "
          >

            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                navigate={navigate}
              />
            ))}


            {/* ==================================
                END MARKER
            ================================== */}

            <div
              className="
                min-w-[40vw]
                flex
                items-center
              "
            >
              <h3
                className="
                  text-6xl
                  md:text-2xl
                  font-bold
                  text-slate-500/30
                "
              >
                2026©
              </h3>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};


// ==========================================
// PROJECT CARD
// ==========================================

const ProjectCard = ({ project, navigate }) => {

  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={() => navigate(`/project/${project.id}`)}
      whileHover={{
        y: -15,
      }}
      style={{
        position: "relative",
      }}
      className="
        min-w-[320px]
        md:min-w-160
        aspect-16/10
        bg-white
        rounded-[3rem]
        overflow-hidden
        group
        cursor-pointer
        shadow-sm
        hover:shadow-2xl
        transition-all
      "
    >

      <div
        className="
          h-full
          w-full
          relative
        "
      >

        {/* ==================================
            PROJECT IMAGE
        ================================== */}

        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-full
            object-fill
          "
        />


        {/* ==================================
            GRADIENT OVERLAY
        ================================== */}

        <div
          className="
            absolute
            inset-0
            bg-linear-to-t
            from-[#223242]
            via-transparent
            to-transparent
            p-10
            flex
            flex-col
            justify-end
          "
        >

          {/* =================================
              TAGS
          ================================= */}

          {/* <div className="flex gap-2 mb-3">

            {project.tags.map((tag) => (
              <span
                key={tag}
                className="
                  text-[10px]
                  text-blue-800
                  font-bold
                  uppercase
                  tracking-wider
                  bg-white/60
                  px-3
                  py-1
                  rounded-full
                "
              >
                {tag}
              </span>
            ))}

          </div> */}

{/* TAGS */}
<div className="flex flex-wrap gap-1.5 mb-3 max-w-full">
  {project.tags.map((tag) => (
    <span
      key={tag}
      className="text-[10px] text-blue-800 font-bold uppercase tracking-wider bg-white/60 px-2.5 py-0.5 rounded-full backdrop-blur-sm max-w-[150px] truncate"
    >
      {tag}
    </span>
  ))}
</div>


          {/* =================================
              TITLE + ARROW
          ================================= */}

          <div
            className="
              flex
              justify-between
              items-center
            "
          >

            <h3
              className="
                text-3xl
                font-bold
                text-white/70
              "
            >
              {project.title}
            </h3>


            <div
              className="
                w-12
                h-12
                rounded-full
                bg-slate-900
                text-white
                flex
                items-center
                justify-center
                opacity-0
                group-hover:opacity-100
                transition-all
              "
            >
              <FiArrowRight />
            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
};


export default Projects;
