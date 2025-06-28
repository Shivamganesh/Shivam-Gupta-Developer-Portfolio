
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GalleryImageType } from './types';

interface ScatteredGridProps {
  images: GalleryImageType[];
  containerRef: React.RefObject<HTMLDivElement>;
}

const ScatteredGrid = ({ images, containerRef }: ScatteredGridProps) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  return (
    <div className="relative h-[600px] mb-20">
      {images.map((image, index) => {
        // Different transform values for each image to create isometric scattered effect
        const positions = [
          { x: '10%', y: '10%', z: 20, scale: 1.2 },
          { x: '60%', y: '20%', z: 0, scale: 0.8 },
          { x: '30%', y: '50%', z: 40, scale: 1 },
          { x: '70%', y: '60%', z: 10, scale: 0.9 },
          { x: '20%', y: '70%', z: 30, scale: 1.1 },
        ];
        
        const pos = positions[index % positions.length];
        
        // Custom scroll-based animations
        const rotateX = useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          [10, 25, 15]
        );
        
        const rotateY = useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          [index % 2 === 0 ? -5 : 5, 0, index % 2 === 0 ? 5 : -5]
        );
        
        const rotateZ = useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          [0, index % 2 === 0 ? 5 : -5, 0]
        );
        
        const translateZ = useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          [0, index * 10, 0]
        );
        
        return (
          <motion.div
            key={`scatter-${image.id}`}
            className="absolute rounded-lg overflow-hidden shadow-2xl"
            style={{ 
              width: '200px',
              height: '200px',
              left: pos.x,
              top: pos.y,
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
              scale: pos.scale,
              rotateX,
              rotateY,
              rotateZ,
              translateZ,
              zIndex: Math.round(pos.z)
            }}
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { 
                duration: 1, 
                delay: index * 0.2,
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ 
              scale: pos.scale * 1.15, 
              zIndex: 100,
              boxShadow: "0 0 50px 10px rgba(59, 130, 246, 0.3)"
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-full h-full"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.8 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                className="absolute w-full h-full backface-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="absolute w-full h-full backface-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4 text-white"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <p className="text-center font-medium">{image.alt}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ScatteredGrid;
