import React from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '../../data/data';

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="px-4 py-20 bg-gradient-to-b  from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-white font-serif"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 bg-clip-text text-transparent">
            Creative Showcase
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
          className="text-lg text-blue-800 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          A glimpse of stunning UI and design visuals.
        </motion.p>
      </div>

      {/* Masonry-style Responsive Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryImages.map((img, index) => (
          <motion.div
            key={`${img.url}-${index}`}
            className="w-full overflow-hidden break-inside-avoid rounded-xl group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.015 }}
          >
            <img
              src={img.url}
              alt={img.alt}
              loading="lazy"
              className="w-full h-auto rounded-xl object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
