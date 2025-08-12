import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "../UIComponents/ProfileCard";
import myimg from "../assets/myimg.png";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  // Text animation for typewriter effect
  const text1 = "IT'S ME AMRAZ!!";
  const text2 = ["A", "FULLSTACK", "DEVELOPER"];
  return (
    <section className="px-8 md:px-28 py-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-between gap-10"
      >
        {/* Profile Card - First on mobile, second on desktop */}
        <motion.div
          initial={{ x: 100, opacity: 0, rotateY: 360 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.4,
          }}
          whileHover={{
            scale: 1.02,
            rotateY: 5,
            transition: { duration: 0.3 },
          }}
          className="flex-shrink-0 order-1 md:order-2 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ProfileCard
              name="AMRAZ RAFEEQUE"
              title="Software Engineer"
              avatarUrl={myimg}
              showBehindGradient={true}
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={true}
            />
          </motion.div>
        </motion.div>

        {/* Text - Second on mobile, first on desktop */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center md:text-left space-y-6 order-2 md:order-1"
        >
          <motion.h1
            variants={titleVariants}
            className="text-pista text-4xl md:text-5xl font-montserrat-extrabold tracking-wider whitespace-nowrap"
          >
            {text1.split(" ").map((word, wIndex) => (
              <span key={wIndex} className="inline-block mr-2">
                {word.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: (wIndex * 6 + index) * 0.05,
                      ease: [0.6, -0.05, 0.01, 0.99],
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.h2
            className="text-white text-3xl md:text-4xl font-montserrat-extrabold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            {text2.map((word, wIndex) => (
              <span key={wIndex} className="inline-block mr-2">
                {word.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.8 + (wIndex * 8 + index) * 0.03,
                      ease: "easeOut",
                    }}
                    className="inline-block tracking-wider"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 max-w-lg leading-relaxed font-montserrat"
          >
            Building interactive and scalable web applications using modern
            technologies like{" "}
            <motion.span
              className="text-pista font-bold"
              whileHover={{ scale: 1.1, color: "#10b981" }}
              transition={{ duration: 0.2 }}
            >
              Django
            </motion.span>{" "}
            and{" "}
            <motion.span
              className="text-pista font-bold"
              whileHover={{ scale: 1.1, color: "#10b981" }}
              transition={{ duration: 0.2 }}
            >
              React JS
            </motion.span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex gap-10 justify-center md:justify-start items-center"
          >
            <motion.a
              href="/Amraz.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Amraz_Rafeeque_Resume.pdf"
              className="bg-pista text-black px-8 py-3 rounded-lg font-bold"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              GET RESUME
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="h-32" />
    </section>
  );
};

export default Hero;
