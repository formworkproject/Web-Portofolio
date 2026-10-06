'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const techStack = [
  { name: 'AutoCAD', logo: '/images/logos/autocad.png' },
  { name: 'Revit', logo: '/images/logos/revit.png' },
  { name: 'SketchUp', logo: '/images/logos/sketchup.png' },
  { name: 'Microsoft Project', logo: '/images/logos/msproject.png' },
  { name: 'Tekla', logo: '/images/logos/tekla.png' },
  { name: 'Power BI', logo: '/images/logos/powerbi.png' },
  { name: 'Navisworks', logo: '/images/logos/navisworks.png' },
  { name: 'Excel', logo: '/images/logos/excel.png' }
];

export function TechMarquee() {
  // Duplicate the array twice to create a seamless infinite loop
  const duplicatedTechStack = [...techStack, ...techStack, ...techStack];

  return (
    <div className="w-full bg-transparent py-12 overflow-hidden flex border-y border-[#1E1E1E] relative">
      {/* Gradient masks for smooth edge fading */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"></div>

      <motion.div
        className="flex space-x-12 items-center"
        animate={{
          x: ['0%', '-33.333333%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 35, // Slower, more elegant speed
        }}
      >
        {duplicatedTechStack.map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center w-48 h-16 bg-[#F0EDE8] rounded-lg p-4 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex-shrink-0"
          >
            <Image 
              src={tech.logo} 
              alt={tech.name}
              fill
              className="object-contain p-3"
              sizes="192px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
