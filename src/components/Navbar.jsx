    // import { useState } from 'react';
    // import { motion, AnimatePresence } from 'framer-motion';
    // import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Install react-icons

    // const Navbar = () => {
    // const [active, setActive] = useState('hero');
    // const [isOpen, setIsOpen] = useState(false);

    // const navLinks = [
    //     { name: 'Home', id: 'hero' },
    //     { name: 'About', id: 'about' },
    //     { name: 'Projects', id: 'projects' },
    //     { name: 'Contact', id: 'contact' },
    // ];

    // const handleScroll = (id) => {
    //     const element = document.getElementById(id);
    //     if (element) {
    //     element.scrollIntoView({ behavior: 'smooth' });
    //     setActive(id);
    //     setIsOpen(false); // Close mobile menu on click
    //     }
    // };

    // return (
    //     <nav className="fixed top-0 w-full z-50 flex justify-center p-4 md:p-6">
    //     {/* Desktop Menu */}
    //     <motion.div 
    //         initial={{ y: -100 }}
    //         animate={{ y: 0 }}
    //         className="hidden md:flex items-center gap-8 px-10 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl"
    //     >
    //         {navLinks.map((link) => (
    //         <button
    //             key={link.id}
    //             onClick={() => handleScroll(link.id)}
    //             className="relative text-sm font-bold transition-colors  text-gray-800 hover:text-white px-2 py-1"
    //         >
    //             {link.name}
    //             {/* Sliding Underline Logic */}
    //             {active === link.id && (
    //             <motion.div
    //                 layoutId="underline"
    //                 className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-500"
    //                 transition={{ type: 'spring', stiffness: 380, damping: 30 }}
    //             />
    //             )}
    //         </button>
    //         ))}
            
    //         <a 
    //         href="/cv.pdf" 
    //         download 
    //         className="ml-4 text-xs font-bold bg-gray-600 hover:bg-blue-500 text-white px-5 py-2 rounded-xl transition-all"
    //         >
    //         Download CV
    //         </a>
    //     </motion.div>

    //     {/* Mobile Toggle Button */}
    //     <div className="md:hidden flex w-full justify-end px-4">
    //         <button 
    //         onClick={() => setIsOpen(!isOpen)}
    //         className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white"
    //         >
    //         {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} color='black'/>}
    //         </button>
    //     </div>

    //     {/* Mobile Fullscreen Menu */}
    //     <AnimatePresence>
    //         {isOpen && (
    //         <motion.div
    //             initial={{ opacity: 0, x: 100 }}
    //             animate={{ opacity: 1, x: 0 }}
    //             exit={{ opacity: 0, x: 100 }}
    //             className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 z-[-1]"
    //         >
    //             {navLinks.map((link) => (
    //             <button
    //                 key={link.id}
    //                 onClick={() => handleScroll(link.id)}
    //                 className={`text-2xl font-semibold ${active === link.id ? 'text-blue-400' : 'text-white'}`}
    //             >
    //                 {link.name}
    //             </button>
    //             ))}
    //             <a 
    //             href="/cv.pdf" 
    //             className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-full"
    //             >
    //             Download CV
    //             </a>
    //         </motion.div>
    //         )}
    //     </AnimatePresence>
    //     </nav>
    // );
    // };

    // export default Navbar;



import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [active, setActive] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  // ==========================================
  // DETECT ACTIVE SECTION
  // ==========================================

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);

          if (
            entry.target.id === 'about' ||
            entry.target.id === 'contact'
          ) {
            setIsDarkSection(true);
          } else {
            setIsDarkSection(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);

      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  // ==========================================
  // NAVIGATION
  // ==========================================

  const handleScroll = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });

      setIsOpen(false);
    }
  };

  // ==========================================
  // DYNAMIC STYLES
  // ==========================================

  const textColor = isDarkSection
    ? 'text-white'
    : 'text-slate-900';

  const borderColor = isDarkSection
    ? 'border-white/10'
    : 'border-slate-200';

  const bgColor = isDarkSection
    ? 'bg-black/20'
    : 'bg-white/40';


  return (
    <nav
      className="
        fixed
        -top-1
        w-full
        z-50
        flex
        justify-center
        p-4
        md:p-6
        transition-colors
        duration-500
      "
    >

      {/* ======================================
          DESKTOP MENU
      ======================================= */}

      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          hidden
          md:flex
          items-center
          gap-8
          px-10
          py-3
          ${bgColor}
          backdrop-blur-xl
          border
          ${borderColor}
          rounded-2xl
          shadow-2xl
          transition-all
          duration-500
        `}
      >

        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScroll(link.id)}
            className={`
              relative
              text-sm
              font-bold
              transition-colors
              px-2
              py-1
              ${
                active === link.id
                  ? 'text-white'
                  : textColor + ' hover:text-cyan-900'
              }
            `}
          >
            {link.name}

            {/* Sliding Underline */}
            {active === link.id && (
              <motion.div
                layoutId="underline"
                className="
                  absolute
                  left-0
                  bottom-0
                  h-0.5
                  w-full
                  bg-slate-700
                "
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </button>
        ))}

        {/* Desktop Resume */}
        <a
          href="/RohanKumar-Resume.pdf"
          download
          className={`
            ml-4
            text-xs
            font-bold
            px-5
            py-2
            rounded-xl
            transition-all
            ${
              isDarkSection
                ? 'bg-white text-black hover:bg-blue-500 hover:text-white'
                : 'bg-slate-900 text-white hover:bg-blue-600'
            }
          `}
        >
          Download Resume
        </a>

      </motion.div>


      {/* ======================================
          MOBILE NAVBAR
      ======================================= */}

      <div className="md:hidden flex w-full justify-end px-4">

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            p-2
            rounded-lg
            border
            backdrop-blur-md
            transition-all
            ${
              isDarkSection
                ? 'bg-black/20 border-white/20 text-white'
                : 'bg-white/20 border-slate-900/20 text-slate-900'
            }
          `}
        >
          {isOpen ? (
            <HiX size={28} />
          ) : (
            <HiMenuAlt3 size={28} />
          )}
        </button>

      </div>


      {/* ======================================
          MOBILE FULLSCREEN MENU
      ======================================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            className="
              fixed
              inset-0
              w-full
              h-screen
              bg-white/90
              dark:bg-black/90
              backdrop-blur-3xl
              flex
              flex-col
              items-center
              justify-center
              gap-8
              z-[-1]
            "
          >

            {/* Mobile Navigation Links */}

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`
                  text-4xl
                  font-black
                  tracking-tighter
                  ${
                    active === link.id
                      ? 'text-blue-800'
                      : 'text-slate-400'
                  }
                `}
              >
                {link.name}
              </button>
            ))}


            {/* ==================================
                MOBILE RESUME BUTTON
            =================================== */}

            <a
              href="/RohanKumar-Resume.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="
                mt-2
                px-7
                py-3
                rounded-xl
                bg-slate-900
                text-white
                text-sm
                font-bold
                uppercase
                tracking-wider
                shadow-lg
                hover:bg-blue-600
                transition-all
              "
            >
              Download Resume
            </a>

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
