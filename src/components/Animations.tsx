import React from 'react';
import {
 Box,
  Film,
  Sparkles,
  ScrollText,
  Palette,
  Cpu,
  Zap,
  MousePointerClick,
  SunDim,
  LineChart,
  EyeOff,
  Shapes,
  LucideIcon
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { animationCardsData } from '../data/animationCardsData';


const iconMap: Record<string, LucideIcon> = {
   Box,
  Film,
  Sparkles,
  ScrollText,
  Palette,
  Cpu,
  Zap,
  MousePointerClick,
  SunDim,
  LineChart,
  EyeOff,
  Shapes,
};

const Animations = () => {
  return (
    <section
      id="animations"
      className="py-24 relative bg-gradient-to-b from-[#1C2541] to-[#0B132B] overflow-hidden"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white font-serif">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Interactive Animations
            </span>
          </h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-lg text-blue-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore the intersection of art and technology through immersive interactive experiences
          </motion.p>
        </motion.div>

        <div className="mb-20">
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {animationCardsData.map((card, index) => {
                const IconComponent = iconMap[card.icon];
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Card className="bg-[#1C2541]/70 border-cyan-600/20 h-64 overflow-hidden group hover:border-cyan-400/40 transition-all duration-300 card-3d">
                        <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                          <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            <IconComponent size={card.size} className={card.color} />
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-cyan-300 group-hover:text-glow transition-all">
                            {card.title}
                          </h3>
                          <p className="text-blue-200 text-center">{card.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="bg-cyan-500/10 border-cyan-500/30 hover:bg-cyan-500/20 text-white" />
            <CarouselNext className="bg-cyan-500/10 border-cyan-500/30 hover:bg-cyan-500/20 text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Animations;
