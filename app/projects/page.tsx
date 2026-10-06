import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ProjectGrid } from '@/components/project-grid';
import { SectionHeader } from '@/components/section-header';
import { projects } from '@/data/projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects — Aditya Grimaldi',
  description: 'Selected engineering projects, research studies, and technical case studies by Aditya Grimaldi.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F0EDE8] flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeader 
            number="03" 
            label="Projects" 
          />
          
          <ProjectGrid projects={projects} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
