import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollVideoSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const translateXLeft = useTransform(scrollYProgress, [0, 1], [-350, 0]);
  const translateXRight = useTransform(scrollYProgress, [0, 1], [350, 0]);

  return (
    <section
      id="video"
      ref={containerRef}
      className="hidden md:block relative h-[250vh] bg-black"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.video
          src="public/Projectimage/flowvideo.webm"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          style={{ scale }}
        />

        {/* Optional text overlay */}
        {/* 
        <div className="absolute top-1/2 left-1/2 w-full flex justify-center items-center text-white font-bold text-[clamp(2rem,10cqi,10rem)] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.h2 className="px-4 text-blue-600" style={{ x: translateXLeft }}>
            SHOW
          </motion.h2>
          <motion.h2 className="px-4 text-blue-600" style={{ x: translateXRight }}>
            CASE
          </motion.h2>
        </div> 
        */}
      </div>
    </section>
  );
}
