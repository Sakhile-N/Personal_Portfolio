'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
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
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-primary/20 rounded-full"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Name with neon blue effect */}
          <div className="text-6xl md:text-8xl font-bold mb-4 relative">
            <motion.span 
              className="neon-blue relative inline-block"
              animate={{
                textShadow: [
                  '0 0 20px #3b82f6, 0 0 40px #3b82f6, 0 0 60px #3b82f6',
                  '0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6',
                  '0 0 20px #3b82f6, 0 0 40px #3b82f6, 0 0 60px #3b82f6',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Sakhile Ntombela
              {/* Glitch effect overlay */}
              <motion.span
                className="absolute inset-0 text-cyan-400"
                animate={{
                  x: [0, 2, -2, 0],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 0.2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                Sakhile Ntombela
              </motion.span>
            </motion.span>
          </div>
          
          {/* Enhanced role title with typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-6 relative"
          >
            <motion.div
              className="inline-block border-r-2 border-primary"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Aspiring NetworK and ML Engineer
            </motion.div>
          </motion.div>
          
          {/* Enhanced description with gradient text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 bg-gradient-to-r from-slate-300 via-blue-200 to-slate-300 bg-clip-text text-transparent leading-relaxed"
          >
            I'm passionate about IT infrastructure, cloud systems, and AI automation. Currently working at CAPACITI while pursuing my honours degree, I enjoy solving technical challenges and exploring new technologies.
          </motion.p>
        </motion.div>

        {/* Enhanced buttons with holographic effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="text-lg px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/25 border border-blue-400/30 relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/25 relative overflow-hidden group"
              asChild
            >
              <a href="/Sakhile_Ntombela_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating tech icons */}
        <div className="absolute inset-0 pointer-events-none">
          {['⚡', '🤖', '💻', '🚀', '⚙️', '🔬'].map((icon, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-20"
              style={{
                left: `${15 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}