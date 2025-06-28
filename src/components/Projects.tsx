import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Monitor, Sparkles, Globe, Smartphone, Database, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import projects from '../data/projectsData';

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const [activeFilter, setActiveFilter] = useState('all');
  const glowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filters = [
    { name: 'All Projects', value: 'all' },
    { name: 'Mobile', value: 'mobile' },
    { name: 'Web', value: 'web' },
    { name: 'Full Stack', value: 'fullstack' },
  ];

 

useEffect(() => {
  glowRefs.current = glowRefs.current.slice(0, filteredProjects.length);

  const handleMouseMove = (e: MouseEvent, index: number) => {
    const glowEl = glowRefs.current[index];
    if (!glowEl) return;
    const rect = glowEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowEl.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(56, 189, 248, 0.3) 0%, transparent 50%)`;
  };

  // Store listener references to remove properly later
  const listeners: { glowEl: HTMLDivElement, move: any, leave: any }[] = [];

  filteredProjects.slice(0, visibleCount).forEach((_, index) => {
    const glowEl = glowRefs.current[index];
    if (!glowEl) return;
    const move = (e: MouseEvent) => handleMouseMove(e, index);
    const leave = () => (glowEl.style.background = 'transparent');

    glowEl.addEventListener('mousemove', move);
    glowEl.addEventListener('mouseleave', leave);

    listeners.push({ glowEl, move, leave });
  });

  return () => {
    listeners.forEach(({ glowEl, move, leave }) => {
      glowEl.removeEventListener('mousemove', move);
      glowEl.removeEventListener('mouseleave', leave);
    });
  };
}, [visibleCount, activeFilter]);


 const filteredProjects = activeFilter === 'all' 
  ? projects 
  : projects.filter(project => project.tags.includes(activeFilter));

const visibleProjects = filteredProjects.slice(0, visibleCount);


  const getIconForProject = (tags: string[]) => {
    if (tags.includes('mobile')) return <Smartphone size={20} />;
    if (tags.includes('fullstack')) return <Database size={20} />;
    return <Globe size={20} />;
  };

  useEffect(() => {
  setVisibleCount(4);
}, [activeFilter]);


  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-serif">Personal Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Showcasing my skills through real-world applications
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.value)}
                className="rounded-full text-sm px-3 py-1"
              >
                {filter.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {visibleProjects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300"
              ref={el => glowRefs.current[index] = el}
            >
              <div className="relative aspect-video overflow-hidden">
                {project.image === 'video' && project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                <div className="absolute top-2 right-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  <Sparkles size={12} className="inline-block mr-1" />
                  {project.highlight}
                </div>
                <div className="absolute top-2 left-2 bg-slate-800/80 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {getIconForProject(project.tags)}
                  <span className="ml-1">{project.date}</span>
                </div>
              </div>
              <CardContent className="p-4 relative">
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors truncate">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-3 line-clamp-2">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-xs uppercase text-slate-400 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-center">
                        <span className="text-cyan-400 mr-1">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-0.5 rounded-full bg-slate-700/60 text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && 
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700/60 text-cyan-200">
                      +{project.technologies.length - 4} more
                    </span>
                  }
                </div>

                <div className="flex gap-2">
                  {project.github && (
                    <Button size="sm" variant="outline" className="flex-1 rounded-full text-xs" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={14} className="mr-1" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button size="sm" className="flex-1 rounded-full text-xs bg-gradient-to-r from-cyan-500 to-blue-500" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
       {visibleCount < filteredProjects.length && (
  <button id="book" onClick={() => setVisibleCount(prev => prev + 4)}>
    <div id="demo">
      <h3>View More</h3>
      <h4>View More</h4>
    </div>
    <div id="book1"></div>
  </button>
)}


      </div>
      {/* <button id="book">
                    <div id="demo">
                        <h3>View More</h3>
                        <h4>View More</h4>
                    </div>
                    <div id="book1"></div>
                </button> */}
    </section>
  );
};

export default Projects;