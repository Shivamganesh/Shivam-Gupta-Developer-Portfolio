
import React from 'react';
import { motion } from 'framer-motion';
import GalleryImage from './GalleryImage';
import { GalleryImageType } from './types';

interface IsometricGridProps {
  images: GalleryImageType[];
  rotateX: number;
  rotateZ: number;
  reversed?: boolean;
}

const IsometricGrid = ({ 
  images, 
  rotateX, 
  rotateZ, 
  reversed = false 
}: IsometricGridProps) => {
  const imagesToRender = reversed ? [...images].reverse() : images;
  
  return (
    <div className="mb-20">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-10 perspective-effect"
        style={{ 
          transformStyle: "preserve-3d", 
          transform: `rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`
        }}
      >
        {imagesToRender.map((image, index) => (
          <GalleryImage 
            key={`iso-${image.id}-${reversed ? 'rev' : 'std'}`}
            image={image}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default IsometricGrid;
