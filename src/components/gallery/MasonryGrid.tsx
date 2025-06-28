// MasonryGrid.tsx
import React from 'react';
import { motion } from 'framer-motion';
import GalleryImage from './GalleryImage';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const MasonryGrid = ({ images, containerRef }) => {
  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="columns-2 md:columns-3 gap-4 space-y-4"
    >
      {images.map((image:any, index:any) => (
        <motion.div key={image.id} variants={itemVariants} className="break-inside-avoid">
          <GalleryImage image={image} index={index} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MasonryGrid;
