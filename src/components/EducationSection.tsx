import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";
import educationData from "../data/educationData";

// Icon map
const iconMap = {
  GraduationCap: <GraduationCap className="text-blue-400" size={24} />,
  BookOpen: <BookOpen className="text-green-400" size={24} />,
  School: <School className="text-yellow-300" size={24} />,
};

export default function EducationSection() {
  return (
    <section
      id="education"
      className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-[#1B2440] text-white scroll-mt-20"
    >
      <motion.h2
        className="text-3xl sm:text-3xl md:text-5xl font-bold mb-4 text-center font-serif"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
          Education
        </span>
      </motion.h2>

      <motion.div
        className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      <div className="relative py-6 sm:py-10 border-l-2 sm:border-l-4 border-cyan-400 ml-2 sm:ml-4 space-y-12 sm:space-y-16 max-w-xl sm:max-w-3xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-10 sm:pl-12"
          >
            <div
              className="absolute -left-[24px] sm:-left-[30px] top-2 p-1.5 sm:p-2 rounded-full bg-white border-2 sm:border-4 border-cyan-400 shadow-xl 
                         animate-pulse hover:animate-none transition-transform duration-500 
                         hover:rotate-[20deg] hover:scale-110 hover:border-blue-500 group"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-400 group-hover:text-blue-500 drop-shadow-[0_0_6px_rgba(0,255,255,0.6)]">
                  {iconMap[edu.icon]}
                </div>
              </motion.div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-2xl shadow-xl transform transition duration-500 hover:scale-[1.04] hover:-rotate-1 hover:shadow-cyan-500/50">
              <h3 className="text-xl sm:text-2xl font-semibold text-cyan-300">{edu.title}</h3>
              <p className="text-sm text-cyan-100">
                {edu.institution}, {edu.location}
              </p>
              <p className="text-sm text-cyan-200 italic">{edu.duration}</p>
              {edu.score && (
                <p className="text-sm mt-1 text-cyan-50 font-semibold">
                  Score: {edu.score}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
