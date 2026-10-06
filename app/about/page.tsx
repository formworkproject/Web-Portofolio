import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/scroll-reveal'
import { SectionHeader } from '@/components/section-header'
import { EducationCard } from '@/components/education-card'
import { education } from '@/data/education'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeader 
              number="01" 
              label="About" 
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-base md:text-lg text-[#6B6B6B] leading-relaxed space-y-6 mt-12">
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
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-6 mt-12 max-w-md">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[#1E1E1E]">
                <Image 
                  src="/images/profile.jpg"
                  alt="Aditya Grimaldi"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              <div className="bg-[#141414] border border-[#1E1E1E] rounded-2xl p-6">
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-[#1E1E1E] pb-3">
                  <span className="text-[#6B6B6B]">Location</span>
                  <span className="text-[#F0EDE8]">Indonesia</span>
                </div>
                <div className="flex justify-between border-b border-[#1E1E1E] pb-3">
                  <span className="text-[#6B6B6B]">Field</span>
                  <span className="text-[#F0EDE8]">Civil Engineering</span>
                </div>
                <div className="flex justify-between border-b border-[#1E1E1E] pb-3">
                  <span className="text-[#6B6B6B]">Focus</span>
                  <span className="text-[#F0EDE8]">QS / Estimation / Technical Drawing</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#6B6B6B]">Status</span>
                  <span className="text-[#E8652D]">Open to professional opportunities</span>
                </div>
              </div>
              </div>
            </div>
          </ScrollReveal>

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
        </div>
      </main>
      <Footer />
    </>
  )
}
