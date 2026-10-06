'use client'

import React from 'react';
import { cn } from '@/lib/utils';

export interface Skill {
  name: string;
  level: 'Core' | 'Working Knowledge' | 'Developing';
}

export interface SkillGroupProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  className?: string;
}

export function SkillGroup({ title, icon, skills, className }: SkillGroupProps) {
  return (
    <div className={cn("rounded-2xl bg-[#141414] border border-[#1E1E1E] p-6 transition-colors hover:border-[#E8652D]/30 flex flex-col h-full", className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className="text-[#E8652D]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#F0EDE8]">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-8 flex-1">
        {skills.map((skill, index) => {
          let styles = "";
          let dotColor = "";
          
          switch (skill.level) {
            case 'Core':
              styles = "bg-[#E8652D]/10 border-[#E8652D]/30 text-[#E8652D]";
              dotColor = "bg-[#E8652D]";
              break;
            case 'Working Knowledge':
              styles = "bg-white/5 border-white/10 text-[#F0EDE8]";
              dotColor = "bg-[#F0EDE8]";
              break;
            case 'Developing':
              styles = "bg-white/5 border-white/5 text-[#6B6B6B]";
              dotColor = "bg-[#6B6B6B]";
              break;
          }

          return (
            <div 
              key={index}
              className={cn("flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-colors", styles)}
            >
              <span className={cn("w-1.5 h-1.5 rounded-full", dotColor)} />
              {skill.name}
            </div>
          );
        })}
      </div>
      
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#6B6B6B] mt-auto pt-4 border-t border-[#1E1E1E]/50">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8652D]" />
          Core
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0EDE8]" />
          Working Knowledge
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6B6B6B]" />
          Developing
        </div>
      </div>
    </div>
  );
}
