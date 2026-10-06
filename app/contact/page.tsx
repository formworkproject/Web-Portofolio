import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/scroll-reveal'
import { SectionHeader } from '@/components/section-header'
import { ContactCard } from '@/components/contact-card'
import { Mail, ExternalLink, Phone, FileText } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeader 
              number="07" 
              label="Contact" 
            />
            <p className="text-lg text-[#6B6B6B] mb-12 mt-6">
              Untuk peluang proyek, posisi engineering, kolaborasi, atau pekerjaan teknis.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ScrollReveal delay={0.1}>
              <ContactCard
                icon={Mail}
                label="Email"
                value="sanjayaaditya195@gmail.com"
                href="mailto:sanjayaaditya195@gmail.com"
                isPlaceholder={false}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <ContactCard
                icon={ExternalLink}
                label="LinkedIn"
                value="sanjayaadityaaa"
                href="https://www.linkedin.com/in/sanjayaadityaaa"
                isPlaceholder={false}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <ContactCard
                icon={Phone}
                label="WhatsApp"
                value="[ADD NUMBER]"
                href="[ADD LINK]"
                isPlaceholder={true}
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <ContactCard
                icon={FileText}
                label="View CV"
                value="Aditya-Grimaldi-CV.pdf"
                href="/files/Aditya-Grimaldi-CV.pdf"
                isPlaceholder={false}
              />
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
