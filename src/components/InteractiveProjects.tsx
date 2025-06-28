import React, { useState, useEffect, useRef } from 'react';
import projectShowcaseData from '../data/projectShowcaseData';
import { motion } from 'framer-motion';

const InteractiveProjects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [sectionBgColor, setSectionBgColor] = useState('#ffffff');
  const sectionRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let animationFrameId;

    const updatePosition = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      if (photoRef.current && isHovering && activeProject !== null) {
        photoRef.current.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px))`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e) => {
      targetX = (e.clientX - window.innerWidth / 2) * 0.65;
      targetY = (e.clientY - window.innerHeight / 2) * 0.65;
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering, activeProject]);

  useEffect(() => {
    if (activeProject !== null) {
      setSectionBgColor(projectShowcaseData[activeProject].bgColor);
    } else {
      setSectionBgColor('#ffffff');
    }
  }, [activeProject]);

  return (
    <section
      className="w-full py-24 text-black relative overflow-hidden transition-colors duration-1000"
      style={{ backgroundColor: sectionBgColor }}
      ref={sectionRef}
    >
      {/* 👇 Desktop Version */}
      <div className="hidden md:block">
        <div
          className="fixed top-1/2 left-1/2 w-[25vw] h-[30vw] overflow-hidden pointer-events-none z-[999]"
          style={{
            opacity: isHovering && activeProject !== null ? 1 : 0,
            visibility: isHovering && activeProject !== null ? 'visible' : 'hidden',
            transition: 'opacity 2s cubic-bezier(0.19, 1, 0.22, 1), visibility 2s cubic-bezier(0.19, 1, 0.22, 1)',
          }}
          ref={photoRef}
        >
          <div
            className="w-full h-[400%] flex flex-col"
            style={{
              transform: activeProject !== null ? `translateY(-${activeProject * 25}%)` : 'translateY(0%)',
              transition: 'transform 2s cubic-bezier(0.19, 1, 0.22, 1)',
            }}
          >
            {projectShowcaseData.map((project, index) => (
              <div
                key={index}
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              />
            ))}
          </div>
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-blue-600 flex justify-center items-center z-[9999999]">
            <h1 className="text-[0.5vw] font-normal tracking-[0.2vw] text-white">View</h1>
          </div> */}
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-[5vw]">
          <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setActiveProject(null);
            }}
          >
            {projectShowcaseData.map((project, index) => (
              <div key={project.id}>
                <div
                  className="flex items-center justify-between px-[10vw]"
                  onMouseEnter={() => setActiveProject(index)}
                >
                  <h1
                    className="text-[5vw] font-normal transition-colors duration-300 ease-in-out"
                    style={{
                      color: activeProject === index ? 'rgb(177, 177, 177)' : 'initial',
                      fontFamily: '"Neue", sans-serif',
                    }}
                  >
                    {project.title}
                  </h1>
                  <p className="text-lg font-normal" style={{ fontFamily: '"Neue", sans-serif' }}>
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center justify-center w-full">
                  <div className="w-[80%] h-[1px] bg-gray-200 my-[45px]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 👇 Mobile Version */}
      <div className="block md:hidden px-4 space-y-16">
        {projectShowcaseData.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-full overflow-hidden rounded-xl shadow-xl">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div className="mt-4 text-center max-w-sm mx-auto">
              <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InteractiveProjects;
