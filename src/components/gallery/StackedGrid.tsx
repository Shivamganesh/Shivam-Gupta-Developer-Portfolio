
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GalleryImageType } from './types';

interface StackedGridProps {
  images: GalleryImageType[];
  containerRef: React.RefObject<HTMLDivElement>;
}

const StackedGrid = ({ images, containerRef }: StackedGridProps) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  return (
    <motion.div 
      className="relative h-[400px] perspective-effect"
      style={{ 
        transformStyle: "preserve-3d", 
        perspective: "1500px"
      }}
    >
      {images.map((image, index) => {
        const zIndex = images.length - index;
        const offset = index * 10;
        
        // Dynamic scroll animations
        const x = useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          [offset, 0, -offset]
        );
        
        const y = useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          [offset * 2, 0, offset]
        );
        
        const rotateX = useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          [30, 45, 30]
        );
        
        const rotateZ = useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          [-5, -10, -5]
        );
        
        return (
          <motion.div
            key={`stack-${image.id}`}
            className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl"
            style={{ 
              transformStyle: "preserve-3d",
              x,
              y,
              rotateX,
              rotateZ,
              zIndex
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              transition: { 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 50
              }
            }}
            viewport={{ once: true, margin: "-150px" }}
            whileHover={{ 
              scale: 1.05,
              rotateX: 35,
              rotateZ: -15,
              zIndex: 100,
              boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.5)"
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.h3 
                className="text-white text-xl font-bold"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {image.alt}
              </motion.h3>
              <motion.div 
                className="h-1 w-20 bg-gradient-to-r from-cyan-300 to-blue-500 rounded mt-2"
                initial={{ width: 0 }}
                whileHover={{ width: 80 }}
                transition={{ delay: 0.2 }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default StackedGrid;
