import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { skillSet } from "../info";

// Mock data for demonstration - replace with your actual imports


const Cards = ({ img, name }) => {
  return (
    <figure
      className={cn(
        "relative h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 cursor-pointer overflow-hidden rounded-xl border border-gray-700/50 p-4 md:p-5",
        " hover:bg-gray-800/60 transition-transform duration-200 will-change-transform",
        "shadow-lg hover:shadow-xl hover:scale-[1.02]"
      )}
    >
      <div className="flex flex-col items-center justify-center gap-3 h-full">
        <img
          className="rounded-lg object-contain"
          width="32"
          height="32"
          alt={`${name} logo`}
          src={img}
        />
        <figcaption className="text-sm font-medium text-white text-center leading-tight">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

const SkillCards = () => {
  const firstRow = skillSet.slice(0, skillSet.length / 2);
const secondRow = skillSet.slice(skillSet.length / 2);
  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* Full width container with 3D perspective */}
      <div className="relative flex h-screen w-full flex-row items-center justify-center overflow-hidden [perspective:800px]">
        {/* Main 3D transformed container */}
        <div
          className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-7xl"
          style={{
            transform:
              "translateZ(200px) rotateX(15deg) rotateY(5deg) rotateZ(-10deg)",
          }}
        >
          <div className="w-full">
            <Marquee
              reverse
              pauseOnHover={false}
              className="[--duration:30s] py-2"
              vertical={false}
            >
{firstRow.map((item) => (
                <Cards key={item.name} {...item} />
              ))}
            </Marquee>
          </div>
          {/* Frontend Row */}
          <div className="w-full">
            <Marquee
              pauseOnHover={false}
              vertical={false}
              className="[--duration:25s] py-2"
            >
              
               {secondRow.map((item) => (
                <Cards key={item.name} {...item} />
              ))}
            </Marquee>
          </div>

          {/* Backend Row */}
          
        </div>

        {/* Subtle edge gradients - much more transparent */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-transparent"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20  bg-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20  bg-transparent"></div>
      </div>
    </div>
  );
};

export default SkillCards;
