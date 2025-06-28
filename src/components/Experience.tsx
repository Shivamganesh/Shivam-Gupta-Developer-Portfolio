import React from 'react';
import { Calendar, Briefcase, GraduationCap, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import experienceData from "../data/experienceData";


const Experience = () => {
  

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white font-serif"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p 
            className="text-lg text-blue-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            My professional journey and training experiences
          </motion.p>
        </div>

        <motion.div 
          className="grid gap-8 md:grid-cols-1 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="h-full"
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="h-full overflow-hidden bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 relative group">
                {/* Glowing hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardContent className="p-6 relative h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    {/* Animated Icon */}
                    <motion.div 
                      className="bg-slate-900/60 p-3 rounded-lg"
                      whileHover={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <Briefcase className="h-6 w-6 text-cyan-400" />
                    </motion.div>
                    <Badge variant="outline" className="bg-blue-900/20 text-cyan-300 border-cyan-700/50">
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                  <p className="text-cyan-300 mb-4">{exp.company}</p>
                  
                  <ul className="space-y-2 mb-4 flex-grow">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-300 flex items-start">
                        <span className="mr-2 text-cyan-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-slate-700/60 text-cyan-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {exp.link && (
                    <motion.a 
                      href={exp.link}
                      whileHover={{ scale: 1.1 }}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center text-sm mt-auto"
                    >
                      View details <ExternalLink size={14} className="ml-1" />
                    </motion.a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
