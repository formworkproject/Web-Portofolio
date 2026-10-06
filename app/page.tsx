import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Metrics } from '@/components/metrics';
import { SectionHeader } from '@/components/section-header';
import { ProjectGrid } from '@/components/project-grid';
import { SkillGroup } from '@/components/skill-group';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { EducationCard } from '@/components/education-card';
import { CertificateCard } from '@/components/certificate-card';
import { ContactCard } from '@/components/contact-card';
import { Footer } from '@/components/footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { EngineeringGrid } from '@/components/engineering-grid';

import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import { experiences } from '@/data/experience';
import { education } from '@/data/education';
import { certificates } from '@/data/certificates';

import { TechMarquee } from '@/components/tech-marquee';
import { ServicesSection } from '@/components/services';
import { PenTool, Calculator, Monitor, HardHat, Mail, ExternalLink, Phone, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);
  
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Drafting': return PenTool;
      case 'Quantity & Cost': return Calculator;
      case 'Digital Engineering': return Monitor;
      case 'Construction': return HardHat;
      default: return PenTool;
    }
  };

  return (
    <main className="relative min-h-screen">
      <EngineeringGrid />
      <Navbar />
      
      {/* Hero */}
      <Hero />
      
      {/* Metrics */}
      <Metrics />
      
      {/* About */}
      <section id="about" className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader 
            number="01" 
            label="About" 
          />
          <ScrollReveal>
            <div className="lg:grid lg:grid-cols-[2fr_1fr] gap-12 mt-12">
              <div className="text-base md:text-lg text-text-secondary leading-relaxed space-y-6">
                <p>
                  Lulusan D3 Teknik Sipil dari Universitas Riau dengan fokus pada pekerjaan konstruksi praktis. Saat ini melanjutkan pendidikan S1 Teknik Sipil di Universitas Abdurrab untuk memperdalam kompetensi di bidang teknik sipil.
                </p>
                <p>
                  Berpengalaman dalam pembuatan gambar teknis menggunakan AutoCAD, dokumentasi konstruksi, shop drawing, as-built drawing, serta memiliki pemahaman dasar quantity takeoff dan estimasi biaya. Familiar dengan Autodesk Revit untuk pemodelan BIM.
                </p>
                <p>
                  Fokus utama pada Quantity Surveying, Estimasi, Drafting, dan Dokumentasi Teknik — dengan komitmen untuk terus mengembangkan kemampuan di bidang digital engineering dan manajemen konstruksi.
                </p>
              </div>
              <div className="mt-12 lg:mt-0">
                <div className="mb-8 relative aspect-square w-full max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-xl border border-[#1E1E1E]">
                  <Image 
                    src="/images/profile.jpg"
                    alt="Aditya Grimaldi"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="bg-surface border border-border p-6 rounded-lg max-w-sm mx-auto lg:mx-0">
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-border pb-4">
                      <span className="text-sm text-text-secondary">Location</span>
                      <span className="text-sm text-text-primary">Indonesia</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-4">
                      <span className="text-sm text-text-secondary">Field</span>
                      <span className="text-sm text-text-primary">Civil Engineering</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-4">
                      <span className="text-sm text-text-secondary">Focus</span>
                      <span className="text-sm text-text-primary">QS / Estimation / Technical Drawing</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-sm text-text-secondary">Status</span>
                      <span className="text-sm text-accent">Open to professional opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services / What I Do */}
      <ServicesSection />

      {/* Projects */}
      <section id="projects" className="py-20 md:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader 
            number="03" 
            label="Projects" 
          />
          <ScrollReveal>
            <div className="mt-12">
              <ProjectGrid projects={featuredProjects} />
              <div className="mt-12 text-center">
                <Link href="/projects" className="inline-flex items-center justify-center px-6 py-3 border border-border hover:border-accent hover:text-accent transition-colors rounded-md text-sm font-medium">
                  View All Projects
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader 
            number="04" 
            label="Skills" 
          />
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-16">
              {skillCategories.map((category) => {
                const Icon = getCategoryIcon(category.title);
                return (
                  <SkillGroup 
                    key={category.title}
                    title={category.title}
                    skills={category.skills}
                    icon={<Icon className="w-5 h-5" />}
                  />
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Full width marquee — after cards */}
        <div className="mt-16">
          <TechMarquee />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 md:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader 
            number="05" 
            label="Experiences" 
          />
          <ScrollReveal>
            <div className="mt-12">
              <ExperienceTimeline experiences={experiences} />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-24">
              <h3 className="text-sm font-bold tracking-widest text-[#E8652D] uppercase mb-8">Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, i) => (
                  <EducationCard 
                    key={i} 
                    degree={edu.degree}
                    institution={edu.institution}
                    period={edu.period}
                    status={edu.status}
                    gpa={edu.gpa}
                    thesis={edu.thesis}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-24">
              <SectionHeader 
                number="06" 
                label="Certifications" 
              />
              <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] -mx-6 px-6 md:mx-0 md:px-0">
                {certificates.slice(0, 6).map((cert, i) => (
                  <div key={i} className="w-[85vw] md:w-[450px] flex-shrink-0 snap-start">
                    <CertificateCard 
                      title={cert.title}
                      issuer={cert.issuer}
                      year={cert.year}
                      credentialId={cert.credentialId}
                      verificationLink={cert.verificationLink}
                      image={cert.image}
                      className="h-full"
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Link href="/certificates" className="inline-flex items-center justify-center px-6 py-3 border border-[#1E1E1E] hover:border-[#E8652D] hover:text-[#E8652D] transition-colors rounded-sm text-sm font-medium text-[#F0EDE8]">
                  View All Certificates
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader 
            number="07" 
            label="Contact" 
          />
          <ScrollReveal>
            <div className="mt-12 space-y-12">
              <p className="text-lg text-text-secondary max-w-2xl">
                Untuk peluang proyek, posisi engineering, kolaborasi, atau pekerjaan teknis.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <ContactCard 
                  icon={Mail} 
                  label="Email" 
                  value="sanjayaaditya195@gmail.com" 
                  href="mailto:sanjayaaditya195@gmail.com" 
                  isPlaceholder={false} 
                />
                <ContactCard 
                  icon={ExternalLink} 
                  label="LinkedIn" 
                  value="sanjayaadityaaa" 
                  href="https://www.linkedin.com/in/sanjayaadityaaa" 
                  isPlaceholder={false} 
                />
                <ContactCard 
                  icon={Phone} 
                  label="WhatsApp" 
                  value="[ADD NUMBER]" 
                  href="[ADD LINK]" 
                  isPlaceholder={true} 
                />
                <ContactCard 
                  icon={FileText} 
                  label="View CV" 
                  value="Aditya-Grimaldi-CV.pdf" 
                  href="/files/Aditya-Grimaldi-CV.pdf" 
                  isPlaceholder={false} 
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
