'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'

const projects = [
  {
    title: 'AI-Based Plant Disease Detection',
    description: 'Developed an AI model using TensorFlow/Keras to detect and classify plant diseases from leaf images. The system helps farmers identify crop diseases early for better yield management.',
    tags: ['TensorFlow', 'Keras', 'LabVIEW', 'AI'],
    image: '/plant_disease.png',
    github: 'https://github.com/Sakhile-N',
    demo: null,
  },
  {
    title: 'Sentiment Analysis',
    description: 'An interactive web application that analyzes the sentiment of text input using natural language processing. Features real-time analysis and visualization of emotional tone.',
    tags: ['NLP', 'React', 'Web App', 'AI'],
    image: '/sentiment_project.png',
    github: 'https://github.com/Sakhile-N',
    demo: 'https://interactive-sentimen-uvnd.bolt.host/',
  },
  {
    title: 'AI Resume Builder',
    description: 'Create professional, ATS-friendly resumes with AI-enhanced content powered by Google Gemini. Features intelligent suggestions, multiple export formats, and real-time preview.',
    tags: ['AI', 'React', 'Next.js', 'Google Gemini'],
    image: '/resumeAI.png',
    github: 'https://github.com/Sakhile-N',
    demo: 'https://remote2-theta.vercel.app/',
  },
  {
    title: 'DHCP Server Configuration for Small LAN',
    description: 'Designed and configured a Cisco Router as a DHCP server for automatic IP address allocation in a small network. Demonstrated dynamic IP assignment, network connectivity verification, and DHCP pool management.',
    tags: ['Cisco', 'Networking', 'DHCP', 'Router Configuration', 'In Progress'],
    image: '/systemAdmin.png',
    github: 'https://github.com/Sakhile-N',
    demo: null,
  },
]

export default function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-blue">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of the key projects I have worked on...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="holographic-card group cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
              onClick={() => {
                if (project.demo) {
                  window.open(project.demo, '_blank', 'noopener,noreferrer')
                } else if (project.github) {
                  window.open(project.github, '_blank', 'noopener,noreferrer')
                }
              }}
            >
              <Card className="h-full flex flex-col relative overflow-hidden bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-2 border-primary/30 backdrop-blur-sm transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-2xl group-hover:shadow-primary/20 hover:scale-105">
                {/* Holographic overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Glowing corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="p-0 relative">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    {/* Holographic grid pattern overlay */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-10"
                         style={{
                           backgroundImage: `
                             linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                           `,
                           backgroundSize: '20px 20px'
                         }} />
                    
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                    />
                    
                    {/* Floating particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 2) * 40}%`,
                          }}
                          animate={{
                            y: [-10, 10, -10],
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 p-6 relative z-10">
                  <CardTitle className="mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mb-4 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="text-xs bg-primary/20 text-primary border border-primary/30 group-hover:bg-primary/30 group-hover:border-primary/50 transition-all duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0 flex gap-2 relative z-10">
                  {project.github && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="border-primary/50 text-primary hover:bg-primary/20 hover:border-primary transition-all duration-300"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button 
                      size="sm" 
                      asChild
                      className="bg-primary/80 hover:bg-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}