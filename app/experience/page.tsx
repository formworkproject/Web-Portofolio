import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/scroll-reveal'
import { SectionHeader } from '@/components/section-header'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { EducationCard } from '@/components/education-card'
import { CertificateCard } from '@/components/certificate-card'
import { experiences } from '@/data/experience'
import { education } from '@/data/education'
import { certificates } from '@/data/certificates'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience',
}

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeader 
              number="05" 
              label="Experiences" 
            />
          </ScrollReveal>

          <div className="mt-16">
            <ScrollReveal>
              <ExperienceTimeline experiences={experiences} />
            </ScrollReveal>
          </div>

          <div className="mt-20">
            <ScrollReveal>
              <h3 className="text-sm font-bold tracking-widest text-[#E8652D] uppercase mb-8">Education</h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <EducationCard {...item} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <ScrollReveal>
              <h3 className="text-sm font-bold tracking-widest text-[#E8652D] uppercase mb-8">Certifications</h3>
            </ScrollReveal>
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] -mx-6 px-6 md:mx-0 md:px-0 mt-8">
              {certificates.slice(0, 6).map((cert, index) => (
                <div key={index} className="w-[85vw] md:w-[450px] flex-shrink-0 snap-start">
                  <CertificateCard {...cert} className="h-full" />
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/certificates" className="inline-flex items-center justify-center px-6 py-3 border border-[#1E1E1E] hover:border-[#E8652D] hover:text-[#E8652D] transition-colors rounded-sm text-sm font-medium text-[#F0EDE8]">
                View All Certificates
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
