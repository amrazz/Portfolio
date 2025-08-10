import React, { useEffect, useState, useRef, useCallback } from "react";
import Nav from "./pages/Nav";
import { motion, useMotionValue, useSpring, useScroll } from "motion/react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Galaxy from "./UIComponents/Galaxy";
import Projects from "./pages/Projects";
import Connect from "./pages/Connect";
import { ToastContainer } from "react-toastify";

const App = () => {
  const barRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [barHeight, setBarHeight] = useState(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const measure = () => setBarHeight(el.clientHeight);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const mouseMove = (e) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      };

      window.addEventListener("mousemove", mouseMove);
      document.body.style.cursor = "none";

      return () => {
        window.removeEventListener("mousemove", mouseMove);
        document.body.style.cursor = "auto";
      };
    } else {
      document.body.style.cursor = "auto";
    }
  }, [cursorX, cursorY, isMobile]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ToastContainer />
      {/* Right-side vertical progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-50 hidden sm:block"
      >
        <div
          ref={barRef}
          className="relative w-1 h-32 md:h-40 lg:h-48 bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-700/30"
        >
          {/* Progress fill */}
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#00f050] to-[#00f050]/70 rounded-full shadow-lg shadow-[#00f050]/20"
            style={{
              scaleY: scaleY,
              transformOrigin: "top",
              height: "100%",
            }}
          />
        </div>
      </motion.div>

      {/* Mobile progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 sm:hidden"
      >
        <motion.div
          className="h-1 bg-gradient-to-r from-[#00f050] to-[#00f050]/70 shadow-lg shadow-[#00f050]/20 origin-left"
          style={{ scaleX: scaleY }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: -4 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
        className="fixed left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 hidden sm:block"
      >
        <div className="writing-mode-vertical-rl text-orientation-mixed">
          <motion.a
            href="mailto:amrazrafeek2020@gmail.com"
            className="text-gray-400 hover:text-pista font-montserrat text-sm md:text-base tracking-widest transition-colors duration-300 cursor-pointer"
            whileHover={{
              scale: 1.05,
              color: "#00f050",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            amrazrafeek2020@gmail.com
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 sm:hidden font-montserrat"
      >
        <motion.a
          href="mailto:amrazrafeek2020@gmail.com"
          className="text-gray-400 hover:text-pista font-montserrat text-xs tracking-wide transition-colors duration-300 cursor-pointer px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-gray-700/50"
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(0, 240, 80, 0.1)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          amrazrafeek2020@gmail.com
        </motion.a>
      </motion.div>

      {/* Background Galaxy - Optional */}
      {/* <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Galaxy 
          mouseRepulsion={false}
          mouseInteraction={!isMobile}
          density={isMobile ? 0.5 : 1}
          glowIntensity={0.1}
        />
      </div> */}

      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div style={{ transform: "translate(-50%, -50%)" }}>
            <motion.svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="drop-shadow-lg"
              animate={{
                filter:
                  "drop-shadow(0 0 8px rgba(0, 240, 80, 0.8)) brightness(1.2)",
              }}
              transition={{ duration: 0.2 }}
            >
              <path
                fill="#00F050"
                stroke="#000000"
                strokeWidth="2"
                d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="w-full">
        <Nav />

        <main className="w-full">
          <section id="home" className="min-h-screen">
            <Hero />
          </section>

          <section id="about" className="min-h-screen py-10 sm:py-16 ">
            <About />
          </section>

          <section id="skills" className="min-h-screen py-10 sm:py-16 md:py-20">
            <Skills />
          </section>

          <section
            id="projects"
            className="min-h-screen py-10 sm:py-16 md:py-20"
          >
            <Projects />
          </section>

          <section
            id="connect"
            className="min-h-screen py-10 sm:py-16 md:py-20"
          >
            <Connect />
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
