'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download, ChevronDown, Code, Database, Cloud } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

export default function HeroSection() {

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatedSection id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(var(--primary) / 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Hi, there!</span>
              <br />
              <span className="text-foreground">I am</span>
              <br />
              <span className="neon-blue">Sakhile Ntombela</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
          >
            Aspiring Network & ML Engineer from South Africa who is passionate about 
            IT infrastructure, cloud systems, and AI automation while pursuing my honours degree.
          </motion.p>

          {/* Connect button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="pt-4"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
                <span className="text-sm font-medium">Let's</span>
              </div>
              <span className="text-lg font-medium">Connect</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right side - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Main illustration container */}
          <div className="relative w-full max-w-md">
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-8 bg-primary/20 backdrop-blur-sm rounded-lg p-3 border border-primary/30"
            >
              <Code className="w-6 h-6 text-primary" />
              <div className="text-xs text-primary mt-1">HTML</div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-12 bg-primary/20 backdrop-blur-sm rounded-lg p-3 border border-primary/30"
            >
              <Database className="w-6 h-6 text-primary" />
              <div className="text-xs text-primary mt-1">ML</div>
            </motion.div>

            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-8 -left-12 bg-primary/20 backdrop-blur-sm rounded-lg p-3 border border-primary/30"
            >
              <Cloud className="w-6 h-6 text-primary" />
              <div className="text-xs text-primary mt-1">Cloud</div>
            </motion.div>

            {/* Central developer figure */}
            <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20 backdrop-blur-sm">
              {/* Desk */}
              <div className="relative">
                {/* Monitor */}
                <div className="bg-slate-800 rounded-lg p-4 mb-4 border-2 border-primary/30">
                  <div className="bg-primary/20 rounded p-2 text-xs font-mono text-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-primary">{'<div className="portfolio">'}</div>
                      <div className="text-primary ml-4">{'<h1>Sakhile Ntombela</h1>'}</div>
                      <div className="text-primary ml-4">{'<p>Network & ML Engineer</p>'}</div>
                      <div className="text-primary">{'</div>'}</div>
                    </div>
                  </div>
                </div>

                {/* Keyboard */}
                <div className="bg-slate-700 rounded p-2 mb-4">
                  <div className="grid grid-cols-12 gap-1">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={i} className="bg-slate-600 rounded-sm h-2"></div>
                    ))}
                  </div>
                </div>

                {/* Person silhouette */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-20 bg-gradient-to-b from-primary/40 to-primary/20 rounded-t-full relative">
                    {/* Head */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary/30 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/40 rounded-full"
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${30 + (i % 3) * 20}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-muted-foreground/60 cursor-pointer"
          onClick={scrollToProjects}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </AnimatedSection>
  )
}