'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { metrics } from '@/data/metrics';

export function Metrics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-[#0A0A0A] py-12 border-t border-[#1E1E1E]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={cn(
                "bg-[#141414] p-8 border border-[#1E1E1E] relative",
                index > 0 && "md:border-l-0" // Remove left border on desktop for consecutive items
              )}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#E8652D] opacity-70"></div>
              
              <div className="flex flex-col h-full justify-center">
                <span className="text-3xl font-bold text-[#F0EDE8] mb-2">{metric.value}</span>
                <span className="text-xs tracking-widest text-[#6B6B6B] uppercase">{metric.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
