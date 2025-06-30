import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, Code } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import ThreeModel from "./FbxModel";
import { cn } from "@/lib/utils";


const Hero = () => {
  const containerRef = useRef(null);
  const circlesRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!containerRef.current || !circlesRef.current) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      const moveX = (xPercent - 0.5) * 40;
      const moveY = (yPercent - 0.5) * 40;

      circlesRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const currentContainer = containerRef.current;
    currentContainer.addEventListener("mousemove", handleMouseMove);
    return () => currentContainer.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 overflow-hidden"
    >
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={circlesRef} className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-20 blur-3xl"></div>
        </div>

        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="text-left mb-20">
            <motion.div
              className="mb-8 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-blue-200 text-sm font-medium">
                Full Stack & Mobile App Developer
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-white font-serif"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Shivam Gupta
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-blue-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Crafting modern, high-performance web & mobile experiences with precision and passion.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
                  <a
  href="/ai-analyzer"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 group"
  >
    <Sparkles className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
    AI Analyzer
  </Button>
</a>
              <a
                href="https://www.linkedin.com/in/shivam-gupta-63a991241/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-full bg-white/10 text-blue-100 border border-white/20 backdrop-blur-md hover:shadow-md hover:shadow-pink-400/20 hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <Zap className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                  Connect
                </Button>
              </a>
            </motion.div>
          </div>

          
<motion.div
  className={cn(
    "w-3/4 aspect-[4/3] mb-6  ml-8 rounded-2xl overflow-hidden border-white/20 shadow-xl",
    !isMobile && "float-animation" 
  )}
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  <ThreeModel />
</motion.div>

        </div>
      </div>

      {/* Down arrow scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-blue-300 hover:text-blue-100 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
