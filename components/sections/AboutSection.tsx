'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function AboutSection() {
  const [currentTheme, setCurrentTheme] = useState('dark')

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const htmlElement = document.documentElement
      if (htmlElement.classList.contains('theme-light')) {
        setCurrentTheme('light')
      } else {
        setCurrentTheme('dark')
      }
    }

    // Check theme on mount
    checkTheme()

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      checkTheme()
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  const stats = [
    { label: 'Years in Tech', value: '5+' },
    { label: 'BEng Tech Graduate', value: '2024' },
    { label: 'Current Role', value: 'System Support' },
  ]

  return (
    <AnimatedSection id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-blue">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hello, I'm Sakhile Siyabonga Ntombela, a tech enthusiast with a deep passion for IT infrastructure, 
                cloud systems, and AI automation. My journey began after completing matric in 2019, leading me to 
                pursue a Bachelor of Engineering Technology in Computer Engineering at Cape Peninsula University of 
                Technology, which I completed in 2024. 
                
                Currently, I'm working as a System Support Associate at CAPACITI 
                while pursuing my honours degree, gaining hands-on experience in IT support, software configuration, 
                and system troubleshooting. I thrive on working with hardware, diagnosing complex system issues, and 
                understanding how large-scale systems maintain secure and efficient data flow. From Python scripting 
                and network diagnostics to cloud automation and machine learning projects, I'm constantly exploring 
                new technologies and pushing the boundaries of what's possible. My world revolves around solving 
                technical challenges, building reliable high-performance environments, and contributing to innovative 
                solutions that make a meaningful impact in the tech industry.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src={currentTheme === 'light' ? '/graduate.png' : '/sakhile.png'}
                  alt={currentTheme === 'light' ? 'Sakhile Siyabonga Ntombela - Graduate' : 'Sakhile Siyabonga Ntombela'}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: false }}
                >
                  <Card className="text-center p-4">
                    <CardContent className="p-0">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label.replace(stat.value + ' ', '')}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}