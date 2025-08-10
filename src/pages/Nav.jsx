import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navigationLinks } from "../info/index.js";
import menu3 from "react-useanimations/lib/menu3";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import UseAnimations from "react-useanimations";

const Nav = () => {
  const [mobileView, setMobileView] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();
  const widthValue = useTransform(scrollY, [0, 200], ["50%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center px-4 md:px-6"
      >
        <motion.div
          style={{ width: widthValue }}
          animate={{
            backdropFilter: isScrolled ? "blur(20px)" : "blur(8px)",
            backgroundColor: isScrolled
              ? "rgba(0, 0, 0, 0.2)"
              : "rgba(0, 0, 0, 0.1)",
            borderColor: isScrolled
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(255, 255, 255, 0.1)",
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          className="inline-flex items-center justify-between font-montserrat py-3 md:py-4 rounded-4xl px-6 md:px-8 border"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <img
              className="object-contain"
              src={logo}
              width={60}
              height={60}
              alt="logo"
            />
          </motion.div>

          <motion.ul
            className="hidden md:flex items-center gap-8 lg:gap-12 text-white flex-1 justify-center"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {navigationLinks.map((link) => (
              <motion.li
                key={link.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                onClick={() => handleScroll(link.id)}
              >
                <span className="relative z-10 text-sm lg:text-base font-medium transition-colors duration-300 group-hover:text-pista">
                  {link.title}
                </span>
                <motion.div
                  className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-pista to-blue-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            className="md:hidden flex-shrink-0"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileView(!mobileView)}
              className="p-2 rounded-full bg-black/10 backdrop-blur-sm border border-white/20 hover:bg-pista transition-all duration-300"
            >
              <UseAnimations
                animation={menu3}
                size={24}
                strokeColor="#FFFFFF"
                reverse={mobileView}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {mobileView && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileView(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-24 left-4 right-4 z-50 md:hidden"
            >
              <div className="bg-black/90 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl">
                <motion.ul className="space-y-4" variants={mobileMenuVariants}>
                  {navigationLinks.map((link, index) => (
                    <motion.li
                      key={link.id}
                      variants={mobileItemVariants}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setMobileView(false);
                        handleScroll(link.id);
                      }}
                      className="group "
                    >
                      <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                        <div className="w-2 h-2 rounded-full bg-pista group-hover:scale-125 transition-transform" />
                        <span className="text-white text-lg font-medium group-hover:text-pista transition-colors">
                          {link.title}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <div className="h-24"></div>
    </>
  );
};

export default Nav;
