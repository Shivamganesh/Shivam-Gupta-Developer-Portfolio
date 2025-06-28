import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { X } from "lucide-react";
import { certificates, Certificate } from "../data/certificatesData";

export default function CertificateSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % certificates.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleHover = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveIndex(index);
  };

  return (
    <section
      id="certifications"
      className="relative min-h-screen px-4 md:px-8 py-24 bg-[#1B2440] text-white overflow-hidden"
    >
      {/* 🌟 Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-serif relative  text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent text-center z-20"
      >
        Certificates
        <motion.div
          className="w-24 h-1 mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.h2>

      {/* ✨ Background Particles */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        init={async (main) => {
          await loadStarsPreset(main);
        }}
        options={{
          preset: "stars",
          background: { color: "#1B2440" },
          fullScreen: false,
        }}
      />

      {/* 🌐 Desktop View */}
      <div className="hidden md:flex gap-12 items-center justify-center relative z-10 mt-10">
        {/* Left: Titles */}
        <div className="w-1/2 flex flex-col gap-6 text-xl font-medium">
          {certificates.map((cert: Certificate, index: number) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className={`cursor-pointer px-4 py-4 border-l-4 transition-all duration-300 rounded-r-md ${
                  activeIndex === index
                    ? "border-cyan-400 text-cyan-200 bg-white/5 shadow-md scale-[1.02]"
                    : "border-transparent hover:border-cyan-600 hover:text-cyan-100"
                }`}
                onMouseEnter={() => handleHover(index)}
              >
                <div className="flex items-center gap-3 text-2xl font-semibold">
                  <Icon className={`${cert.iconColor} ${cert.iconSize}`} />
                  {cert.title}
                </div>
                <p className="mt-1 text-sm text-cyan-100/70">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right: Image */}
        <div className="w-1/2 h-[400px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {activeIndex !== null && (
              <motion.div
                key={certificates[activeIndex].image}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <img
                  src={certificates[activeIndex].image}
                  alt={certificates[activeIndex].title}
                  onClick={() => setModalImage(certificates[activeIndex].image)}
                  className="w-full max-w-md h-auto rounded-xl shadow-xl shadow-cyan-500/20 cursor-pointer hover:scale-[1.03] transition-transform duration-300"
                />
                <a
                  href={certificates[activeIndex].download}
                  download
                  className="mt-4 px-5 py-2 rounded-full bg-cyan-600 hover:bg-cyan-400 text-white text-sm shadow-lg transition-all duration-300"
                >
                  Download Certificate
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 📱 Mobile View: Horizontal Scroll */}
     {/* 📱 Mobile View: Horizontal Scroll */}
<div className="flex md:hidden overflow-x-auto mt-12 space-x-4 px-4 pb-4 no-scrollbar z-10 relative">
  {certificates.map((cert: Certificate, index: number) => (
    <div
      key={index}
      className="min-w-[75%] max-w-xs bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-md flex-shrink-0 cursor-pointer"
      onClick={() => setModalImage(cert.image)}
    >
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-auto rounded-xl mb-3 shadow-lg"
      />
      <div className="flex items-center gap-2 text-cyan-200 text-base font-semibold">
        <cert.icon className={`${cert.iconColor} ${cert.iconSize}`} />
        {cert.title}
      </div>
      <p className="text-cyan-100/70 text-sm mt-1">{cert.description}</p>
      <a
        href={cert.download}
        download
        className="mt-3 inline-block px-4 py-1 bg-cyan-600 hover:bg-cyan-400 text-white rounded-full text-xs shadow"
      >
        Download
      </a>
    </div>
  ))}
</div>


      {/* 🔍 Modal Preview */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img
                src={modalImage}
                alt="Certificate Zoom"
                className="max-w-3xl w-[90vw] max-h-[80vh] rounded-2xl shadow-2xl border-2 border-white"
              />
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-2 right-2 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
