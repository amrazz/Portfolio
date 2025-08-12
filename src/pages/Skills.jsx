import React, { useRef } from "react";
import IconCloud from "@/components/magicui/icon-cloud";
import { slugs } from "../info";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SkillCards from "./SkillCards";

const Skills = () => {
  const skillRef = useRef();

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: skillRef.current,
            scroller: "body",
            start: "top 85%",
            scrub: 3,
          },
        });
        tl.from(".skill-heading", {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skill-heading",
            scroller: "body",
            start: "top 85%",
            scrub: 3,
          },
        });

        // HR animation
        tl.from(".skill-hr", {
          scaleX: 0,
          opacity: 0,
          delay : 1,
          transformOrigin: "left center",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skill-hr",
            scroller: "body",
            start: "top 85%",
            scrub: 3,
          },
        });

        const words = gsap.utils.toArray(".skill-text span");
        tl.from(words, {
          opacity: 0,
          y: 20,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skill-text",
            scroller: "body",
            start: "top 85%",
            end: "top 20%",
            scrub: 3,
          },
        });
      });

      return () => ctx.revert();
    },
    { scope: skillRef.current }
  );
  return (
    <section className=" relative z-10">
      <h1 className="skill-heading text-5xl md:text-6xl font-extrabold text-[#00f050] tracking-wide text-center">
        SKILLS
      </h1>
      <hr className="skill-hr border-[#00f050] border-t-2 w-24 my-6 mx-auto" />


      <div>
        <SkillCards />
      </div>
      <div className="h-24" />
    </section>
  );
};

export default Skills;

{/* <div className="flex items-center justify-center">
  <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20  bg-transparent">
    <IconCloud iconSlugs={slugs} />
  </div>
</div> */}