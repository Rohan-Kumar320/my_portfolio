// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Home from './sections/Home';
// import ProjectDetail from './sections/ProjectDetails';
// import Footer from './components/Footer';

// const ScrollToTop = () => {
//   const { pathname } = useLocation();
//   useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
//   return null;
// };

// const AppContent = () => {
//   const location = useLocation();
//   const isProjectPage = location.pathname.startsWith('/project/');
//   const isHome = location.pathname === "/";
  
//   const { scrollYProgress } = useScroll();
//   const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

//   const bgColor = useTransform(
//     smoothProgress,
//     [0, 0.3, 0.6, 1], 
//     ["#f8f9fa", "#1e1b4b", "#064e3b", "#111827"] 
//   );

//   return (
//     <div className="relative">
//       <ScrollToTop />
      
//       {/* Scroll Progress Bar */}
//       <motion.div 
//         className="fixed top-0 left-0 right-0 h-[4px] bg-blue-600 origin-left z-[1000]" 
//         style={{ scaleX: smoothProgress }} 
//       />

//       {!isProjectPage && <Navbar />}

//       {/* MAIN CONTENT LAYER:
//           z-20 keeps this above the footer.
//           mb-[100vh] creates the gap to see the footer underneath.
//       */}
//       <motion.div 
//         style={{ backgroundColor: isHome ? bgColor : "#f8f9fa" }} 
//         className={`relative z-20 transition-colors duration-700 ${isHome ? 'mb-[100vh] shadow-[0_20px_50px_rgba(0,0,0,0.2)]' : ''}`}
//       >
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/project/:projectId" element={<ProjectDetail />} />
//         </Routes>
//       </motion.div>

//       {/* REVEAL FOOTER:
//           Only visible on Home. Sits fixed at z-10.
//       */}
//       {isHome && <Footer />}
//     </div>
//   );
// };

// const App = () => (
//   <Router><AppContent /></Router>
// );

// export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import ProjectDetail from "./sections/ProjectDetails";
import Footer from "./components/Footer";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const AppContent = () => {
  const location = useLocation();

  const isProjectPage = location.pathname.startsWith("/project/");
  const isHome = location.pathname === "/";

  // Scroll progress for the top progress bar only
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="relative min-h-screen">

      <ScrollToTop />

      {/* Scroll Progress Bar */}
      <motion.div
        className="
          fixed
          top-0
          left-0
          right-0
          h-1
          bg-blue-600
          origin-left
          z-[1000]
        "
        style={{
          scaleX: smoothProgress,
        }}
      />

      {!isProjectPage && <Navbar />}

      {/* Main Content */}
      <div
        className={`
          relative
          z-20
          ${
            isHome
              ? "mb-[100vh] shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
              : ""
          }
        `}
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/project/:projectId"
            element={<ProjectDetail />}
          />
        </Routes>
      </div>

      {/* Footer */}
      {isHome && <Footer />}

    </div>
  );
};


const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};


export default App;