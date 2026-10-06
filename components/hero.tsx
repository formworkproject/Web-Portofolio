'use client';

import { motion } from 'framer-motion';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.95] as [number, number, number, number] }
    }
  };

  const svgVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.2,
      transition: { duration: 2, ease: "easeOut" as const, delay: 0.5 }
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Decorative Technical Drawing */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden md:block opacity-60">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Subtle Grid */}
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#6B6B6B" strokeWidth="0.1" opacity="0.2"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
          
          {/* Accent Lines */}
          <motion.path 
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            d="M 20 80 L 80 80 M 80 80 L 80 20" 
            fill="none" 
            stroke="#E8652D" 
            strokeWidth="0.3"
          />
          
          {/* Origin Marker */}
          <g opacity="0.3">
            <circle cx="80" cy="80" r="1" fill="none" stroke="#E8652D" strokeWidth="0.2" />
            <path d="M 78 80 L 82 80 M 80 78 L 80 82" stroke="#E8652D" strokeWidth="0.2" />
          </g>
          
          {/* Dimension Arrows */}
          <g opacity="0.3">
            <path d="M 20 78 L 22 77 L 22 79 Z" fill="#6B6B6B" />
            <path d="M 78 78 L 76 77 L 76 79 Z" fill="#6B6B6B" />
            <path d="M 20 78 L 80 78" stroke="#6B6B6B" strokeWidth="0.2" strokeDasharray="1,1" />
          </g>

          {/* Coordinates */}
          <text x="75" y="85" fill="#6B6B6B" fontSize="2" opacity="0.5">X: 80.00 Y: 20.00</text>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Label */}
          <motion.div variants={itemVariants} className="flex items-center mb-6">
            <span className="w-6 h-px bg-[#E8652D] mr-4 block"></span>
            <span className="text-xs tracking-widest text-[#6B6B6B] uppercase font-medium">
              CIVIL ENGINEERING PORTFOLIO
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F0EDE8] mb-4"
          >
            ADITYA GRIMALDI SANJAYA
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            variants={itemVariants}
            className="text-lg md:text-xl text-[#6B6B6B] mb-8 font-light"
          >
            Civil Engineering • Drafter • Quantity Surveying • Estimation
          </motion.h2>

          {/* Tagline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-[#6B6B6B] max-w-2xl mb-12 leading-relaxed"
          >
            Mengubah gambar teknis, quantity, dan data konstruksi menjadi deliverable teknik yang jelas dan akurat.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12">
            <a 
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-[#E8652D] text-[#0A0A0A] font-medium tracking-wide text-sm hover:bg-opacity-90 transition-all rounded-sm"
            >
              View Projects
            </a>
            <a 
              href="/files/Aditya-Grimaldi-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border border-[#1E1E1E] text-[#F0EDE8] font-medium tracking-wide text-sm hover:border-[#E8652D] hover:text-[#E8652D] transition-all rounded-sm"
            >
              View CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <a 
              href="https://www.linkedin.com/in/sanjayaadityaaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-[#6B6B6B] hover:text-[#E8652D] uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              LinkedIn <span className="text-[#1E1E1E]">/</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
