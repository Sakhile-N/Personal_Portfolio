'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'
import { useState } from 'react'

const aiBootcampProjects = [
  {
    title: 'AI-Based Plant Disease Detection',
    description: 'Developed an AI model using TensorFlow/Keras to detect and classify plant diseases from leaf images. The system helps farmers identify crop diseases early for better yield management.',
    tags: ['TensorFlow', 'Keras', 'LabVIEW', 'AI', 'Computer Vision'],
    image: '/plant_disease.png',
    github: 'https://github.com/Sakhile-N',
    demo: null,
  },
  {
    title: 'Sentiment Analysis',
    description: 'An interactive web application that analyzes the sentiment of text input using natural language processing. Features real-time analysis and visualization of emotional tone.',
    tags: ['NLP', 'React', 'Web App', 'AI', 'Python'],
    image: '/sentiment_project.png',
    github: 'https://github.com/Sakhile-N',
    demo: 'https://interactive-sentimen-uvnd.bolt.host/',
  },
]

const schoolProjects = [
  {
    title: 'AI Resume Builder',
    description: 'Create professional, ATS-friendly resumes with AI-enhanced content powered by Google Gemini. Features intelligent suggestions, multiple export formats, and real-time preview.',
    tags: ['AI', 'React', 'Next.js', 'Google Gemini', 'Web Development'],
    image: '/resumeAI.png',
    github: 'https://github.com/Sakhile-N',
    demo: 'https://remote2-theta.vercel.app/',
  },
]

const networkProjects = [
  {
    title: 'DHCP Server Configuration for Small LAN',
    description: 'Designed and configured a Cisco Router as a DHCP server for automatic IP address allocation in a small network. Demonstrated dynamic IP assignment, network connectivity verification, and DHCP pool management.',
    tags: ['Cisco', 'Networking', 'DHCP', 'Router Configuration', 'Network Administration'],
    image: '/systemAdmin.png',
    github: 'https://github.com/Sakhile-N',
    demo: null,
  },
]

const projectSections = [
  {
    title: 'AI Bootcamp Projects',
    description: 'Machine Learning and AI projects developed during specialized training',
    projects: aiBootcampProjects,
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
  },
  {
    title: 'School Projects',
    description: 'Academic projects and coursework demonstrations',
    projects: schoolProjects,
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    title: 'Network Projects',
    description: 'Networking and infrastructure configuration projects',
    projects: networkProjects,
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
  },
]

export default function ProjectsSection() {
  const [expandedSections, setExpandedSections] = useState<number[]>([0]) // First section expanded by default

  const toggleSection = (index: number) => {
    setExpandedSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <AnimatedSection id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-blue">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my work across AI/ML, academic projects, and network infrastructure
          </p>
        </motion.div>

        <div className="space-y-12">
          {projectSections.map((section, sectionIndex) => {
            const isExpanded = expandedSections.includes(sectionIndex)
            
            return (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: false }}
                className="space-y-6"
              >
                {/* Section Header */}
                <div 
                  className={`bg-gradient-to-r ${section.color} backdrop-blur-sm rounded-lg p-6 border ${section.borderColor} cursor-pointer transition-all duration-300 hover:shadow-lg`}
                  onClick={() => toggleSection(sectionIndex)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{section.title}</h3>
                      <p className="text-muted-foreground">{section.description}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-sm">
                        {section.projects.length} project{section.projects.length !== 1 ? 's' : ''}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Projects Grid */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {section.projects.map((project, projectIndex) => (
                        <motion.div
                          key={project.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: projectIndex * 0.1 }}
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
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}