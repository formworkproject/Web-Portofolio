'use client'

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'professional' | 'academic' | 'freelance';
  responsibilities: string[];
  tools: string[];
}

export interface ExperienceTimelineProps {
  experiences: Experience[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

export function ExperienceTimeline({ experiences, className }: ExperienceTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-[15px] sm:left-[23px] top-4 bottom-0 w-[1px] bg-[#1E1E1E]" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        {experiences.map((exp) => (
          <motion.div 
            key={exp.id} 
            variants={itemVariants}
            className="relative pl-12 sm:pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-[10px] sm:left-[18px] top-5 w-3 h-3 rounded-full bg-[#E8652D] ring-4 ring-[#0A0A0A] z-10" />
            
            {/* Connecting horizontal line */}
            <div className="absolute left-[20px] sm:left-[28px] top-[25px] w-6 sm:w-10 h-[1px] bg-[#1E1E1E]" />

            {/* Timeline Card */}
            <div className="bg-[#141414] border border-[#1E1E1E] rounded-2xl p-6 transition-colors hover:border-[#E8652D]/30 shadow-sm shadow-black/50">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#6B6B6B] mb-2">{exp.period}</div>
                  <h3 className="text-xl font-semibold text-[#F0EDE8]">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-base text-[#E8652D]">{exp.company}</span>
                    <span className="text-[#6B6B6B] text-sm">•</span>
                    <span className="text-sm text-[#6B6B6B]">{exp.location}</span>
                  </div>
                </div>
                {exp.type === 'academic' && (
                  <span className="inline-flex shrink-0 px-3 py-1 bg-white/5 border border-white/10 text-xs text-[#F0EDE8] rounded-full whitespace-nowrap">
                    Academic
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm text-[#6B6B6B] flex items-start gap-3 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E8652D]/50 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {exp.tools && exp.tools.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1E1E1E]/50">
                  {exp.tools.map((tool, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-[#F0EDE8] border border-white/5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
