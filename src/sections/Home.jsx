    // import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
    // import About from './About/About';
    // import Contact from './Contact';
    // import Hero from './Hero'
    // import Projects from './Projects';

    // const Home = () => {
    // const { scrollYProgress } = useScroll();
    
    // const smoothProgress = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001
    // });

    // // Background color mapping specific to the Home sections
    // const bgColor = useTransform(
    //     smoothProgress,
    //     [0, 0.2, 0.5, 1], 
    //     ["#f8f9fa", "#050505", "#020617", "#0a0a0a"] 
    // );

    // return (
    //     <motion.main style={{ backgroundColor: bgColor }} className="transition-colors duration-700">
    //     <Hero/>
    //     <Projects />
    //     <About />
    //     <Contact />
    //     </motion.main>
    // );
    // };

    // export default Home;

    import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import About from "./About/About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";


const Home = () => {

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const bgColor = useTransform(
    smoothProgress,
    [0, 0.2, 0.5, 1],
    [
      "#f8f9fa",
      "#050505",
      "#020617",
      "#0a0a0a",
    ]
  );

  return (
    <motion.main
      style={{
        backgroundColor: bgColor,
      }}
      className="transition-colors duration-700"
    >
      <Hero />
      <Projects />
      <About />
      <Contact />
    </motion.main>
  );
};


export default Home;