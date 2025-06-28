import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import skillCategories from '../data/skillsData';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Code,
  Database,
  Smartphone,
  Layers,
  Braces,
  Server,
  Search,
  Cpu,
  FileCode,
  Sparkles,
  LayoutGrid,
  Laptop,
  PenTool,
  ScrollText,
  Monitor,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Skills = () => {
  const containerRef = useRef(null);
  const hexagonsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hexagonsRef.current) {
        const hexagons = hexagonsRef.current.querySelectorAll('.hexagon');
        hexagons.forEach((hex) => {
          const hexEl = hex;
          hexEl.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
        });
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-24 relative bg-gradient-to-b from-[#0B132B] to-[#1C2541] overflow-hidden">
      <div ref={hexagonsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className={`hexagon absolute w-20 h-20 opacity-10 transition-transform duration-[${1500 + i * 500}ms]`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: `hsl(${180 + i * 10}, 70%, 60%)`,
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              transform: "scale(0.8)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
       

<motion.div 
  className="text-center mb-16"
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white font-serif">
    <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
      My Tech Stack
    </span>
  </h2>

  <motion.div
    className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"
    initial={{ width: 0 }}
    whileInView={{ width: 96 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: true }}
  />

  <motion.p
    className="text-lg text-blue-200 max-w-2xl mx-auto"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
  >
    Specialized in MERN Stack development with expertise across frontend, backend, and mobile technologies
  </motion.p>
</motion.div>

        <motion.div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} className="relative group" variants={itemVariants}>
              <Collapsible className="w-full">
                <div className="bg-[#1C2541]/80 rounded-lg border border-cyan-600/20 hover:border-cyan-500/40 overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                  <CollapsibleTrigger className="w-full p-6 flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#3A506B]/70 p-3 rounded-lg group-hover:bg-gradient-to-br from-cyan-600/30 to-purple-600/30 transition-colors">
                        <category.icon size={24} className={category.iconColor} />
                      </div>
                      <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                        {category.name}
                      </h3>
                    </div>
                    <div className="text-blue-300 transition-transform group-hover:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-6 pt-0 border-t border-cyan-600/10 animate-accordion-down">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                      {category.skills.map((skill, index) => (
                        <div 
                          key={index} 
                          className="flex items-center p-3 gap-2 rounded-md bg-[#0B132B]/70 hover:bg-[#0B132B] border border-cyan-600/10 hover:border-cyan-500/30 transition-all duration-300 group-hover:translate-y-0"
                          style={{
                            transform: "translateY(10px)",
                            opacity: 0.8,
                            transition: `transform 0.3s ease ${index * 0.05}s, opacity 0.3s ease ${index * 0.05}s`
                          }}
                        >
                          <div className="text-cyan-400">
                            <skill.icon size={18} />
                          </div>
                          <span className="text-blue-100">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </motion.div>
          ))}
        </motion.div>
        {/* Full Stack Developer badge */}
        <section className="container mx-auto px-4 py-16">
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-center relative gap-8 md:gap-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Full Stack Developer Card */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-full md:w-1/2 p-6 group"
        >
          <motion.div
            className="bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-blue-600/20 p-1 rounded-xl transition-shadow duration-500"
            whileHover={{ boxShadow: "0 0 30px rgba(0, 255, 255, 0.3), 0 0 60px rgba(0, 0, 255, 0.2)" }}
          >
            <div className="bg-[#0B132B]/90 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                {/* Icon with floating animation */}
                <motion.div 
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-3"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Laptop size={32} className="text-[#0B132B]" />
                </motion.div>
              </div>
              <motion.h3 
  className="text-2xl font-bold text-gradient-blue mb-2 hover:animate-wave cursor-pointer inline-block"
  whileHover={{ scale: 1.05 }}
>
  Full Stack Developer
</motion.h3>
              <p className="text-blue-200">
                Specializing in the MERN stack (MongoDB, Express, React, Node.js) with expertise in mobile development using React Native.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px h-64 bg-gradient-to-b from-cyan-400 via-purple-400 to-blue-400 mx-6" />

        {/* Mobile App Developer Card */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-full md:w-1/2 p-6 group"
        >
          <motion.div
            className="bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-blue-600/20 p-1 rounded-xl transition-shadow duration-500"
            whileHover={{ boxShadow: "0 0 30px rgba(0, 255, 255, 0.3), 0 0 60px rgba(0, 0, 255, 0.2)" }}
          >
            <div className="bg-[#0B132B]/90 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                {/* Icon with floating animation */}
                <motion.div 
                  className="rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-3"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Smartphone size={32} className="text-[#0B132B]" />
                </motion.div>
              </div>
              <motion.h3 
  className="text-2xl font-bold text-gradient-blue mb-2 hover:animate-wave cursor-pointer inline-block"
  whileHover={{ scale: 1.05 }}
>
  Mobile App Developer
</motion.h3>
              <p className="text-blue-200">
                Building modern mobile applications with React Native, Expo, and advanced animations to deliver seamless cross-platform experiences.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
      </div>
      <style>
        {`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-30px) translateX(15px);
          }
          50% {
            transform: translateY(-15px) translateX(30px);
          }
          75% {
            transform: translateY(-30px) translateX(15px);
          }
        }
        .group:hover .group-hover\\:translate-y-0 {
          transform: translateY(0) !important;
          opacity: 1 !important;
        }
        `}
      </style>
    </section>
  );
};

export default Skills;
