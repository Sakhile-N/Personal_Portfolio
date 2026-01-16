'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Home, User, FolderOpen, Award, Code, FileText, Mail } from 'lucide-react'

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'projects', icon: FolderOpen, label: 'Projects' },
  { id: 'certificates', icon: Award, label: 'Certificates' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'documents', icon: FileText, label: 'Documents' },
  { id: 'contact', icon: Mail, label: 'Contact' },
]

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(true)

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const sections = navItems.map(item => document.getElementById(item.id))
    const scrollPosition = window.scrollY + window.innerHeight / 3

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i]
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(navItems[i].id)
        break
      }
    }
  }, [])

  // Click handler to toggle navigation visibility only
  const handleGlobalClick = useCallback((e: MouseEvent) => {
    // Don't hide if clicking on the navigation itself
    const nav = document.querySelector('[data-floating-nav]')
    if (nav && nav.contains(e.target as Node)) {
      return
    }
    
    // Just toggle visibility - keep position fixed on right
    setIsVisible(prev => !prev)
  }, [])

  // Throttled scroll event listener for performance
  useEffect(() => {
    let ticking = false

    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    // Initial call to set active section
    handleScroll()

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [handleScroll])

  // Global click listener for toggle functionality
  useEffect(() => {
    document.addEventListener('click', handleGlobalClick)
    
    return () => {
      document.removeEventListener('click', handleGlobalClick)
    }
  }, [handleGlobalClick])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Visual indicator when nav is hidden */}
      {!isVisible && (
        <motion.div
          className="fixed right-4 top-1/2 -translate-y-1/2 z-[9998] hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-primary/20 backdrop-blur-sm rounded-full p-2 border border-primary/30 animate-pulse">
            <div className="w-3 h-3 bg-primary rounded-full animate-ping" />
          </div>
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-80 whitespace-nowrap">
            Click anywhere to show nav
          </div>
        </motion.div>
      )}

      <motion.nav 
        className="fixed right-2 top-1/3 -translate-y-1/2 z-[9999] hidden md:block"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          x: isVisible ? 0 : 20
        }}
        transition={{ 
          duration: 0.4, 
          ease: "easeInOut",
          opacity: { duration: 0.3 },
          scale: { duration: 0.3 },
          x: { duration: 0.4 }
        }}
      >
      <div 
        className="bg-card/95 backdrop-blur-lg rounded-2xl p-2 shadow-2xl border border-primary/30 ring-1 ring-primary/10"
        data-floating-nav
      >
        <div className="flex flex-col items-center space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-3 rounded-xl transition-all duration-300 group relative ${
                  isActive 
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110' 
                    : 'hover:bg-accent hover:text-accent-foreground hover:scale-105'
                }`}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Navigate to ${item.label}`}
              >
                <Icon className="w-5 h-5" />
                
                {/* Left-side Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-popover text-popover-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-lg border transform translate-x-2 group-hover:translate-x-0">
                  {item.label}
                  {/* Arrow pointing to button */}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-popover"></div>
                </div>
                
                {/* Active indicator line */}
                {isActive && (
                  <motion.div
                    className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-full shadow-lg shadow-primary/50"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                
                {/* Glow effect for active item */}
                {isActive && (
                  <div className="absolute inset-0 rounded-xl bg-primary/20 animate-pulse" />
                )}
              </motion.button>
            )
          })}
        </div>
        
        {/* Progress indicator */}
        <div className="mt-4 pt-3 border-t border-primary/20">
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
              style={{
                width: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%`
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.nav>
    </>
  )
}