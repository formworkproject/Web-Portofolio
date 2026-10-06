'use client';

import { Project } from '@/data/projects';
import { motion } from 'framer-motion';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasValidImage = project.thumbnail && !project.thumbnail.startsWith('[');

  return (
    <Link href={`/projects/${project.slug}`} className="block group h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="flex flex-col h-full bg-[#141414] border border-[#1E1E1E] rounded-xl overflow-hidden relative"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#1E1E1E] to-[#0A0A0A] flex flex-col items-center justify-center">
          {hasValidImage ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full h-full relative"
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#0A0A0A]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-[#E8652D] text-[#F0EDE8] rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center text-[#6B6B6B] opacity-50 space-y-2">
              <ImageIcon className="w-8 h-8" />
              <span className="text-sm font-medium tracking-wider">PROJECT IMAGE</span>
              <span className="text-xs">ADD IMAGE HERE</span>
            </div>
          )}
          
          <div className="absolute top-4 right-4 bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#1E1E1E] px-3 py-1 rounded-full z-10">
            <span className="text-xs uppercase tracking-widest text-[#E8652D] font-medium">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow relative z-10">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-[#F0EDE8] mb-2 line-clamp-1 group-hover:text-[#E8652D] transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-[#6B6B6B] line-clamp-2">
              {project.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.tools.slice(0, 3).map((tool) => (
              <span
                key={tool}
                className="bg-[#0A0A0A] border border-[#1E1E1E] rounded-full px-3 py-1 text-xs text-[#F0EDE8]"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="bg-[#0A0A0A] border border-[#1E1E1E] rounded-full px-3 py-1 text-xs text-[#6B6B6B]">
                +{project.tools.length - 3}
              </span>
            )}
          </div>

          {project.isAcademic && (
            <div className="mb-4 inline-block px-3 py-1 bg-[#1E1E1E]/50 border border-[#1E1E1E] rounded text-xs text-[#F0EDE8]/80 w-fit">
              Academic Research
            </div>
          )}

          <div className="flex items-center text-[#F0EDE8] mt-2 group-hover:text-[#E8652D] transition-colors">
            <span className="text-sm font-medium">View Case Study</span>
            <motion.div
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-[#E8652D]"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </motion.div>
    </Link>
  );
}
