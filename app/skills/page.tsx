import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/scroll-reveal'
import { SectionHeader } from '@/components/section-header'
import { SkillGroup } from '@/components/skill-group'
import { TechMarquee } from '@/components/tech-marquee'
import { skillCategories } from '@/data/skills'
import { PenTool, Calculator, Monitor, HardHat } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills',
}

const getIconForCategory = (title: string) => {
  if (title.includes('Drafting')) return PenTool
  if (title.includes('Quantity & Cost')) return Calculator
  if (title.includes('Digital Engineering')) return Monitor
  if (title.includes('Construction')) return HardHat
  return PenTool
}

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeader 
              number="04" 
              label="Skills" 
            />
          </ScrollReveal>
        </div>

        <div className="mt-16">
          <TechMarquee />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {skillCategories.map((category, index) => {
              const Icon = getIconForCategory(category.title)
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <SkillGroup
                    title={category.title}
                    skills={category.skills}
                    icon={<Icon className="w-5 h-5" />}
                  />
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
