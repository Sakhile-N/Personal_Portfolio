'use client'

import TopNavigation from '@/components/TopNavigation'
import CodeBackground from '@/components/CodeBackground'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import TimelineSection from '@/components/sections/TimelineSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import CertificatesSection from '@/components/sections/CertificatesSection'
import SkillsSection from '@/components/sections/SkillsSection'
import DocumentsSection from '@/components/sections/DocumentsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
        <CodeBackground />
        <TopNavigation />
        
        <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      <CertificatesSection />
      <SkillsSection />
      <DocumentsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Sakhile Siyabonga Ntombela. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}