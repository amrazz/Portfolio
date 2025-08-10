import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef();

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutRef.current,
            scroller: "body",
            start: "top 85%",
            scrub: 3,
          },
        });
        tl.from(".about-heading", {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-heading",
            scroller: "body",
            start: "top 85%",
            scrub: 3,
          },
        });

        // HR animation
        tl.from(".about-hr", {
          scaleX: 0,
          opacity: 0,
          transformOrigin: "left center",
          duration: 1,
          delay : 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-hr",
            scroller: "body",
            start: "top 85%",
            scrub: 3,
          },
        });

        const words = gsap.utils.toArray(".about-text span");
        tl.from(words, {
          opacity: 0,
          y: 20,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-text",
            scroller: "body",
            start: "top 85%",
            end : "top 20%",
            scrub: 3,
          },
        });
      });

      return () => ctx.revert();
    },
    { scope: aboutRef.current }
  );

  const splitText = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="inline-block">
        {word}&nbsp;
      </span>
    ));

  return (
    <section ref={aboutRef}>
      <div className="max-w-4xl mx-auto px-4 text-center ">
        <h1 className="about-heading text-5xl md:text-6xl font-extrabold text-[#00f050] tracking-wide">
          About Me
        </h1>
        <hr className="about-hr border-[#00f050] border-t-2 w-24 my-6 mx-auto" />
        <p className="about-text text-xl md:text-2xl leading-relaxed text-gray-300 font-montserrat">
        {splitText(
            "I'm Amraz Rafeeque, a self-taught full stack web developer with expertise in Python Django and React JS. My passion lies in creating modern, efficient, and user-friendly web experiences that combine performance with stunning visuals. Every project I build is focused on clarity, speed, and delivering a smooth user experience."
          )}
        </p>
      </div>
    </section>
  );
};

export default About;
