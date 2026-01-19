'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GraduationCap, Briefcase, Award, BookOpen, ChevronDown, ChevronUp } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { useState } from 'react'

const timelineData = [
  {
    year: '2019',
    title: 'Matriculation',
    institution: 'Muziwephahla Secondary School',
    description: 'Completed Grade 12 with focus on Mathematics and Physical Sciences',
    story: 'I completed my matric at Muziwephahla Secondary School in Nqutu, KwaZulu-Natal. During this pivotal time, I focused on core subjects including Mathematics, Physical Sciences, and Life Sciences. These subjects laid the foundation for my analytical thinking and problem-solving skills that would later prove invaluable in my engineering studies. The rigorous curriculum and dedicated teachers at Muziwephahla helped shape my academic discipline and passion for STEM fields.',
    type: 'education',
    icon: BookOpen,
  },
  {
    year: '2022-2024',
    title: 'BEng Tech Computer Engineering',
    institution: 'Cape Peninsula University of Technology',
    description: 'Specialized in computer systems, networking, and software development. Gained foundational knowledge in engineering principles and computer science.',
    story: 'The BEng Tech in Computer Engineering at CPUT focused on the integration of hardware and software systems, combining principles of electrical engineering, electronics, and computer science. The programme emphasized the design, implementation, and troubleshooting of embedded systems, digital systems, computer networks, and intelligent computing solutions. Core areas of focus included: Digital and Embedded Systems – working with microprocessors, microcontrollers, and embedded system design; Computer Networks – mastering networking fundamentals, routing, switching, and network security; Electronics & Electrical Fundamentals – circuit analysis, signals, and electronic devices; Programming & Software Development – both low-level and high-level programming for hardware control and system automation; Systems Integration – combining hardware, software, and communication technologies; Problem-Solving & Engineering Design – applying engineering methods to real-world technical challenges. This comprehensive degree developed my analytical, technical, and practical skills, preparing me for roles that bridge IT, electronics, and electrical engineering, while also setting the foundation for further study in areas such as smart systems, networking, and automation.',
    type: 'education',
    icon: GraduationCap,
  },
  {
    year: '2024-Present',
    title: 'Honours in Computer Engineering',
    institution: 'Cape Peninsula University of Technology',
    description: 'Currently pursuing advanced studies in computer engineering, focusing on specialized areas of technology and research.',
    story: 'Currently pursuing my Honours degree, I am diving deeper into advanced topics such as machine learning algorithms, cloud computing architectures, and advanced networking protocols. This program allows me to conduct independent research while building upon the solid foundation from my undergraduate studies. I am particularly interested in the intersection of AI and network optimization, which aligns perfectly with my career aspirations. My current coursework includes Advanced Physics with a focus on Quantum and Opto-electronics, exploring the fundamental principles that drive next-generation computing technologies. I am also studying Internetwork Security, learning advanced cybersecurity protocols and network protection strategies. A significant portion of my studies involves AI with Data Analytics using Python, where I develop machine learning models and analyze complex datasets. Additionally, I am engaged in Next Generation Network technologies, understanding the evolution of network infrastructures and emerging communication protocols. My Research Project focuses specifically on Machine Learning applications, where I am investigating innovative approaches to optimize network performance through intelligent algorithms and predictive analytics.',
    type: 'education',
    icon: GraduationCap,
  },
  {
    year: 'July 2025-Present',
    title: 'System Support Associate',
    institution: 'CAPACITI',
    description: 'Gaining practical experience in IT support, software configuration, and troubleshooting.',
    story: 'At CAPACITI, I have gained invaluable hands-on experience in IT support and system administration. My role involves working with digital tools, automation platforms, and cloud-based systems while developing practical skills in networking, Python scripting, and system diagnostics. This position has allowed me to bridge the gap between academic knowledge and industry practice, giving me real-world experience in troubleshooting complex technical issues and supporting enterprise-level systems.',
    type: 'work',
    icon: Briefcase,
  },
]

const getTypeColor = (type: string) => {
  switch (type) {
    case 'education':
      return 'bg-blue-500/10 text-blue-600 border-blue-500/20'
    case 'work':
      return 'bg-green-500/10 text-green-600 border-green-500/20'
    case 'certification':
      return 'bg-purple-500/10 text-purple-600 border-purple-500/20'
    default:
      return 'bg-gray-500/10 text-gray-600 border-gray-500/20'
  }
}

export default function TimelineSection() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <AnimatedSection id="timeline" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-blue">My Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From matriculation to becoming a System Support Associate & Honours Student
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary"></div>

          <div className="space-y-8">
            {timelineData.map((item, index) => {
              const Icon = item.icon
              const isExpanded = expandedItems.includes(index)
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-background border-4 border-primary rounded-full shadow-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 pb-8">
                    <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => toggleExpanded(index)}>
                      <CardHeader>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className={getTypeColor(item.type)}>
                              {item.year}
                            </Badge>
                            <Button variant="ghost" size="sm" className="p-1">
                              {isExpanded ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                        <p className="text-primary font-medium">{item.institution}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {item.description}
                        </p>
                        
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-border pt-4 mt-4">
                                <h4 className="font-semibold text-foreground mb-2">My Story</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                  {item.story}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}