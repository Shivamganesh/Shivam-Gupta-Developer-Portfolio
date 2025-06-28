import React, { useRef, useEffect, useState } from "react";
import { Code, Layers, Sparkles, Globe, Phone, Laptop } from "lucide-react";
 import { motion } from "framer-motion";

 
const About = () => {
  const profileImgRef = useRef<HTMLImageElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Parallax effect on profile image
    const handleMouseMove = (e: MouseEvent) => {
      if (!profileImgRef.current || !orbsRef.current) return;

      const { clientX, clientY } = e;
      const rect = profileImgRef.current.getBoundingClientRect();

      // Calculate mouse position relative to the center of the image
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate the distance from center (normalized)
      const distX = (clientX - centerX) / window.innerWidth;
      const distY = (clientY - centerY) / window.innerHeight;

      // Apply subtle movement to the image
      profileImgRef.current.style.transform = `translate(${distX * 10}px, ${
        distY * 10
      }px) scale(1.03)`;

      // Move orbs in the opposite direction for depth effect
      if (orbsRef.current) {
        orbsRef.current.style.transform = `translate(${-distX * 20}px, ${
          -distY * 20
        }px)`;
      }
    };

    // Text reveal animation on scroll
    const handleScroll = () => {
      if (!textContentRef.current) return;

      const textContent = textContentRef.current;
      const textPosition = textContent.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (textPosition < screenPosition) {
        textContent.classList.add("animate-fade-in");
      }
    };

    // Magnetic effect for the image container
    const handleContainerMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !profileImgRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });
      setIsHovering(true);
    };

    const handleContainerMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener("mousemove", handleContainerMouseMove);
      currentContainer.addEventListener(
        "mouseleave",
        handleContainerMouseLeave
      );
    }

    // Trigger initial check
    handleScroll();

    // Glitch effect interval
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.8 && profileImgRef.current) {
        profileImgRef.current.style.filter = `hue-rotate(${
          Math.random() * 360
        }deg) brightness(1.2)`;

        setTimeout(() => {
          if (profileImgRef.current) {
            profileImgRef.current.style.filter = "none";
          }
        }, 100);
      }
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);

      if (currentContainer) {
        currentContainer.removeEventListener(
          "mousemove",
          handleContainerMouseMove
        );
        currentContainer.removeEventListener(
          "mouseleave",
          handleContainerMouseLeave
        );
      }

      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#0B132B] to-[#1C2541] overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={orbsRef} className="absolute inset-0">
          {/* Remove pink-specific orb */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-10 blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-10 blur-3xl animate-pulse-slow"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-2/3 left-1/3 w-40 h-40 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 opacity-10 blur-3xl animate-pulse-slow"
            style={{ animationDelay: "0.8s" }}
          ></div>
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-300"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Animated grid pattern for depth */}
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
       

<motion.div 
  className="text-center mb-16"
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white font-serif">
    About Me
  </h2>

  <motion.div
    className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"
    initial={{ width: 0 }}
    whileInView={{ width: 96 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: true }}
  />
</motion.div>

        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Left column - Image with animations */}
          <div className="md:col-span-5 space-y-6">
            <div
              ref={containerRef}
              className="relative rounded-xl overflow-hidden group perspective-effect"
              style={{
                transform: isHovering
                  ? `perspective(1000px) rotateY(${
                      (mousePosition.x / 300 - 0.5) * 10
                    }deg) rotateX(${(mousePosition.y / 300 - 0.5) * -10}deg)`
                  : "perspective(1000px) rotateY(0deg) rotateX(0deg)",
                transition: isHovering ? "transform 0.1s" : "transform 0.5s",
              }}
            >
              {/* Animated scanner effect */}
              <div className="absolute inset-0 z-30 scanner-effect rounded-xl overflow-hidden"></div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/30 z-20 animate-pulse-slow"></div>

              {/* Animated overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-xl"></div>

              <div className="relative  h-[550px] overflow-hidden rounded-xl">
                {/* Image with parallax effect */}
                <img
                  ref={profileImgRef}
                  src="/lovable-uploads/eab698c7-b0e9-46c5-8514-3a11a01f12fc.png"
                  alt="Profile"
                  className="w-full h-[600px] object-cover transition-transform duration-300 rounded-xl "
                />

                {/* Animated spotlight effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 mix-blend-overlay group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Interactive dots overlay */}
                <div className="absolute inset-0 dots-overlay opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>

              {/* Animated corner accents with neon effect */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-xl shadow-[0_0_5px_1px_rgba(34,211,238,0.5)] animate-pulse-slow"></div>
              <div
                className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-xl shadow-[0_0_5px_1px_rgba(34,211,238,0.5)] animate-pulse-slow"
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-xl shadow-[0_0_5px_1px_rgba(34,211,238,0.5)] animate-pulse-slow"
                style={{ animationDelay: "0.6s" }}
              ></div>
              <div
                className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-cyan-400/50 rounded-br-xl shadow-[0_0_5px_1px_rgba(34,211,238,0.5)] animate-pulse-slow"
                style={{ animationDelay: "0.9s" }}
              ></div>
            </div>
          </div>

          {/* Right column - Content with reveal animations */}
          <div className="md:col-span-7 space-y-8" ref={textContentRef}>
            <div
              className="opacity-0 transition-all duration-700 delay-100"
              style={{ transform: "translateY(20px)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gradient-blue font-serif">
                  Full-Stack and Mobile App Developer
                </h3>
              </div>

              <div className="space-y-4 text-blue-100 text-justify px-1 md:px-2">
                <p className="leading-relaxed">
                  I'm a{" "}
                  <span className="font-semibold text-cyan-300">
                    B.Tech graduate in Computer Science
                  </span>
                  , completed in{" "}
                  <span className="font-semibold text-cyan-400">2024</span>,
                  with a strong drive to build impactful and modern digital
                  experiences. Though I'm a{" "}
                  <span className="text-indigo-300 font-medium">fresher</span>,
                  I’ve worked on several real-world projects that mirror
                  industry-level standards.
                </p>

                <p className="leading-relaxed">
                  My core expertise lies in the{" "}
                  <span className="text-purple-300 font-semibold">
                    MERN stack
                  </span>{" "}
                  (MongoDB, Express.js, React.js, Node.js) for web applications
                  and
                  <span className="text-teal-300 font-semibold">
                    {" "}
                    React Native
                  </span>{" "}
                  for cross-platform mobile apps. I love crafting responsive
                  UIs, building efficient backends, and deploying scalable
                  systems.
                </p>

                <p className="leading-relaxed">
                  Notable projects include:
                  <span className="font-semibold text-blue-300">
                    {" "}
                    Elegant Booking
                  </span>{" "}
                  – a full-stack online venue booking platform,
                  <span className="font-semibold text-blue-300">
                    {" "}
                    GrocyGo
                  </span>{" "}
                  – a grocery delivery app, and
                  <span className="font-semibold text-blue-300">
                    {" "}
                    ShareIt
                  </span>{" "}
                  – a real-time file sharing app. These projects highlight my
                  ability to deliver polished solutions from UI to backend APIs.
                </p>

                <p className="leading-relaxed">
                  I'm looking forward to joining a forward-thinking team as a
                  <span className="text-cyan-400 font-medium">
                    {" "}
                    Full Stack Developer
                  </span>{" "}
                  or
                  <span className="text-teal-400 font-medium">
                    {" "}
                    Mobile App Developer
                  </span>
                  , where I can grow, contribute, and build innovative digital
                  products.
                </p>
              </div>
            </div>

            {/* Skills badges with animations */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-0 transition-all duration-700 delay-300"
              style={{ transform: "translateY(20px)" }}
            >
              {[
                {
                  icon: <Code className="mr-2" size={18} />,
                  label: "Web Development",
                },
                {
                  icon: <Layers className="mr-2" size={18} />,
                  label: "UI/UX Design",
                },
                {
                  icon: <Laptop className="mr-2" size={18} />,
                  label: "Mobile App Dev",
                },
                {
                  icon: <Globe className="mr-2" size={18} />,
                  label: "Api & Backend",
                },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-blue-500/20 flex items-center justify-center text-sm text-blue-200 hover:scale-105 transition-transform hover:shadow-blue-500/5 hover:shadow-lg hover:border-blue-400/40 group"
                >
                  <span className="group-hover:animate-spin-slow transition-all mr-2">
                    {skill.icon}
                  </span>
                  {skill.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Adding animation styles directly through CSS instead of the JSX style tag */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
          
          .animate-fade-in > div {
            opacity: 1;
            transform: translateY(0);
          }
          
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          .group:hover .group-hover\\:animate-spin-slow {
            animation: spin-slow 3s linear infinite;
          }
          
          .scanner-effect {
            position: relative;
            overflow: hidden;
          }
          
          .scanner-effect::after {
            content: '';
            position: absolute;
            top: -150%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(to bottom, transparent, rgba(56, 189, 248, 0.2), transparent);
            transform: rotate(45deg);
            animation: scan 4s linear infinite;
          }
          
          @keyframes scan {
            0% {
              top: -150%;
            }
            100% {
              top: 150%;
            }
          }
          
          .grid-pattern {
            background-image: 
              linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px);
            background-size: 40px 40px;
          }
          
          .dots-overlay {
            background-image: radial-gradient(rgba(56, 189, 248, 0.4) 1px, transparent 1px);
            background-size: 10px 10px;
          }
          
          // .typewriter-text {
          //   overflow: hidden;
          //   border-right: 2px solid transparent;
          //   white-space: normal;
          //   animation: typewriter 3s steps(40) 1s forwards, blinkCursor 0.75s step-end infinite alternate;
          // }
          
          // @keyframes typewriter {
          //   from {
          //     width: 0;
          //   }
          //   to {
          //     width: 100%;
          //   }
          // }
          
          @keyframes blinkCursor {
            50% {
              border-color: rgba(56, 189, 248, 0.7);
            }
          }
        `}
      </style>
    </section>
  );
};

export default About;
