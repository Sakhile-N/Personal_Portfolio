'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const timelineData = [
  {
    year: '2019',
    title: 'Matriculation',
    institution: 'High School',
    description: 'Completed Grade 12 with focus on Mathematics and Physical Sciences',
    type: 'education',
    icon: BookOpen,
  },
  {
    year: '2022-2024',
    title: 'BEng Tech Computer Engineering',
    institution: 'Cape Peninsula University of Technology',
    description: 'Specialized in computer systems, networking, and software development. Gained foundational knowledge in engineering principles and computer science.',
    type: 'education',
    icon: GraduationCap,
  },
  {
    year: '2024-Present',
    title: 'Honours in Computer Engineering',
    institution: 'Cape Peninsula University of Technology',
    description: 'Currently pursuing advanced studies in computer engineering, focusing on specialized areas of technology and research.',
    type: 'education',
    icon: GraduationCap,
  },
  {
    year: 'July 2025-Present',
    title: 'System Support Associate',
    institution: 'CAPACITI',
    description: 'Gaining practical experience in IT support, software configuration, and troubleshooting. Working with digital tools, automation platforms, and cloud-based systems while developing skills in networking, Python scripting, and system diagnostics.',
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
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <Badge variant="outline" className={getTypeColor(item.type)}>
                            {item.year}
                          </Badge>
                        </div>
                        <p className="text-primary font-medium">{item.institution}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
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