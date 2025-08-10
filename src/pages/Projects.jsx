import React, { useState, useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Github, ExternalLink, Code, Database, Palette, Globe, LinkIcon } from 'lucide-react';
import {projects} from "../info/index"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const getTagIcon = (tag) => {
  const tagLower = tag.toLowerCase();
  if (tagLower.includes('react') || tagLower.includes('jsx')) return <Code className="w-3 h-3" />;
  if (tagLower.includes('django') || tagLower.includes('python')) return <Database className="w-3 h-3" />;
  if (tagLower.includes('css') || tagLower.includes('tailwind')) return <Palette className="w-3 h-3" />;
  if (tagLower.includes('html') || tagLower.includes('js')) return <Globe className="w-3 h-3" />;
  return <Code className="w-3 h-3" />;
};

const getTagColor = (tag) => {
  const tagLower = tag.toLowerCase();
  if (tagLower.includes('react')) return "bg-blue-500/10 text-blue-400 border-blue-500/20";
  if (tagLower.includes('django') || tagLower.includes('python')) return "bg-green-500/10 text-green-400 border-green-500/20";
  if (tagLower.includes('postgres')) return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
  if (tagLower.includes('tailwind')) return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
  if (tagLower.includes('firebase')) return "bg-orange-500/10 text-orange-400 border-orange-500/20";
  return "bg-gray-500/10 text-gray-400 border-gray-500/20";
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;

    // Hover animations only
    const handleMouseEnter = () => {
      gsap.to(card, {
        // y: -15,
        // scale: 1.03,
        boxShadow: "0 25px 50px -12px rgba(0, 240, 80, 0.3)",
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(image, {
        scale: 1.15,
        duration: 0.8,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(image, {
        scale: 1,
        duration: 0.8,
        ease: "power2.out"
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "project-card group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50",
        "will-change-transform"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img 
          ref={imageRef}
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover will-change-transform"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent",
          "transition-opacity duration-300",
          isHovered ? "opacity-60" : "opacity-40"
        )} />
        
        {/* Action Buttons */}
        <div className={cn(
          "absolute top-4 right-4 flex gap-2 transition-all duration-300",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        )}>
          <a 
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-600/50 hover:bg-gray-800/80 transition-colors"
          >
            <Github className="w-4 h-4 text-white" />
          </a>
          {project.live_link && (<a 
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-600/50 hover:bg-gray-800/80 transition-colors"
          >
            <LinkIcon className="w-4 h-4 text-white" />
          </a>)}
         
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
          {project.name}
        </h3>
        
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200",
                "hover:scale-105",
                getTagColor(tag)
              )}
            >
              {getTagIcon(tag)}
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const lineRef = useRef(null);
  const ctaRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const line = lineRef.current;
    const cta = ctaRef.current;
    const grid = gridRef.current;

    // Get all project cards
    const projectCards = gsap.utils.toArray('.project-card');

    // Set initial states for header elements
    gsap.set([title, subtitle, line, cta], { 
      y: 100, 
      opacity: 0,
      scale: 0.9
    });

    // Set initial states for project cards - entire cards hidden
    gsap.set(projectCards, {
      opacity: 0,
      rotationX: 20,
      rotationY: 10
    });

    // Header animation with scrub effect
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "top 50%",
        scrub: 1,
        toggleActions: "play reverse play reverse"
      }
    });

    headerTl
      .to(title, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power3.out"
      })
      .to(subtitle, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out"
      }, "-=1.2")
      .to(line, {
        scaleX: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
      }, "-=0.8");

    // Enhanced staggered project cards animation with scrub
    projectCards.forEach((card, index) => {
      gsap.to(card, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        rotationY: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 60%",
          scrub: 0.5,
          toggleActions: "play reverse play reverse"
        },
        delay: index * 0.1 // Stagger delay
      });

      // Additional parallax effect for each card
      gsap.to(card, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        }
      });
    });

    // Enhanced batch animation for smoother staggering
    // ScrollTrigger.batch(projectCards, {
    //   onEnter: (elements) => {
    //     gsap.fromTo(elements, {
    //       opacity: 0,
    //       filter: "blur(10px)"
    //     }, {
    //       y: 0,
    //       opacity: 1,
    //       filter: "blur(0px)",
    //       duration: 1.2,
    //       stagger: {
    //         amount: 0.8,
    //         from: "start",
    //         ease: "power2.out"
    //       },
    //       ease: "power3.out"
    //     });
    //   },
      // onLeave: (elements) => {
      //   gsap.to(elements, {
      //     opacity: 0.6,
      //     y: -20,
      //     duration: 0.4,
      //     stagger: 0.1,
      //     ease: "power2.inOut"
      //   });
      // },
      // onEnterBack: (elements) => {
      //   gsap.to(elements, {
      //     opacity: 1,
      //     y: 0,
      //     duration: 0.6,
      //     stagger: 0.1,
      //     ease: "power2.out"
      //   });
      // },
    //   start: "top 90%",
    //   end: "bottom 10%",
    // });

    // CTA animation with scrub
    gsap.to(cta, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cta,
        start: "top 95%",
        end: "top 70%",
        scrub: 0.8,
        toggleActions: "play reverse play reverse"
      }
    });

    // Enhanced parallax effect for the entire section
    // gsap.to(section, {
    //   y: -80,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: section,
    //     start: "top bottom",
    //     end: "bottom top",
    //     scrub: 1.5
    //   }
    // });

    // Grid container animation
    // gsap.to(grid, {
    //   y: -40,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: grid,
    //     start: "top bottom",
    //     end: "bottom top",
    //     scrub: 1
    //   }
    // });

    // Cleanup function
  //   return () => {
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full min-h-screen py-20 px-4 md:px-8 will-change-transform"
    >
      <div className="max-w-7xl mx-4 md:mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-6xl text-pista font-montserrat-extrabold mb-6 will-change-transform"
          >
            Featured Projects
          </h2>
          <p 
            ref={subtitleRef}
            className="text-white text-lg md:text-xl max-w-3xl font-montserrat mx-auto leading-relaxed will-change-transform"
          >
            Discover my latest work showcasing full-stack development with Django, DRF, React, and modern web technologies
          </p>
          
          {/* Decorative Line */}
          <div className="mt-8 flex justify-center">
            <div 
              ref={lineRef}
              className="h-px w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent origin-center will-change-transform"
            ></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 will-change-transform mx-14 md:mx-auto"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div ref={ctaRef} className="will-change-transform">
            <p className="text-gray-400 mb-6">Want to see more of my work?</p>
            <a 
              href="https://github.com/amrazz" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-600 text-white font-medium rounded-full hover:from-green-500 hover:to-green-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              <Github className="w-5 h-5" />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;