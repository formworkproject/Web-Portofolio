'use client';

import { cn } from '@/lib/utils';
import { Ruler, Calculator, Layers } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';
import { SectionHeader } from './section-header';

const services = [
  {
    title: 'Technical Drafting',
    description: 'Pembuatan Shop Drawing, As-Built Drawing, dan dokumentasi konstruksi 2D secara akurat dan mendetail untuk kebutuhan proyek.',
    icon: Ruler,
  },
  {
    title: 'Quantity Surveying',
    description: 'Perhitungan volume pekerjaan (Takeoff), analisis harga satuan, dan penyusunan Rencana Anggaran Biaya (RAB) yang presisi.',
    icon: Calculator,
  },
  {
    title: 'BIM Integration',
    description: 'Pemodelan 3D struktur bangunan, clash detection, serta koordinasi antar-disiplin menggunakan Autodesk Revit & Navisworks.',
    icon: Layers,
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-[#0A0A0A] relative border-t border-[#1E1E1E]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader 
          number="02" 
          label="What I Do" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group relative h-full flex flex-col rounded-lg border border-[#1E1E1E] bg-[#141414] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#E8652D] hover:shadow-[0_0_30px_rgba(232,101,45,0.1)] overflow-hidden">
                  
                  {/* Subtle background glow effect on hover */}
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#E8652D] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#0A0A0A] border border-[#1E1E1E] text-[#F0EDE8] group-hover:text-[#E8652D] group-hover:border-[#E8652D] transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="mb-4 text-xl font-bold text-[#F0EDE8] group-hover:text-[#E8652D] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-[#6B6B6B] group-hover:text-[#F0EDE8] transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
