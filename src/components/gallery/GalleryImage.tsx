
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { GalleryImageType } from './types';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface GalleryImageProps {
  image: GalleryImageType;
  index: number;
  className?: string;
}

const GalleryImage = ({ image, index, className = "" }: GalleryImageProps) => {
  // Determine aspect ratio value for the component
  const getAspectRatio = () => {
    switch (image.aspectRatio) {
      case 'landscape':
        return 16/9;
      case 'portrait':
        return 3/4;
      case 'square':
      default:
        return 1/1;
    }
  };
  return (
    <motion.div
      className="overflow-hidden rounded-xl shadow-lg group cursor-pointer"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.img
        src={image.url}
        alt={image.alt || `Gallery ${index}`}
        className="w-full h-auto transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
      />
    </motion.div>
  );
};

export default GalleryImage;
