import { Project } from '@/data/projects';
import { cn } from '@/lib/utils';
import { ProjectCard } from './project-card';
import { ScrollReveal } from './scroll-reveal';

interface ProjectGridProps {
  projects: Project[];
  className?: string;
}

export function ProjectGrid({ projects, className }: ProjectGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8", className)}>
      {projects.map((project, index) => (
        <ScrollReveal key={project.id} delay={index * 0.1}>
          <ProjectCard project={project} index={index} />
        </ScrollReveal>
      ))}
    </div>
  );
}
