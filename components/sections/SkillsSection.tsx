'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      'Python (Pandas, Numpy, Matplotlib)',
      'C/C++',
      'Java',
      'JavaScript',
      'MySQL',
    ],
  },
  {
    title: 'Databases',
    skills: [
      'MySQL (queries, joins, CRUD)',
      'Handling data via Google Sheets API',
    ],
  },
  {
    title: 'IT & Networking',
    skills: [
      'TCP/IP',
      'DNS',
      'DHCP',
      'OS Configuration',
      'System Diagnostics',
      'Troubleshooting',
    ],
  },
  {
    title: 'Operating Systems & Tools',
    skills: [
      'Windows (System Configuration, PowerShell/CMD Basics)',
      'Linux (Logs, Shell Commands)',
    ],
  },
  {
    title: 'AI & Automation',
    skills: [
      'Workflow Automation with n8n',
      'Apify (Scraping)',
      'Google Cloud APIs',
    ],
  },
  {
    title: 'General Competencies',
    skills: [
      'Customer Support',
      'Teamwork',
      'Problem-Solving',
      'Report Writing',
    ],
  },
]

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-blue">Skills & Technologies</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: false }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 
                        }}
                        viewport={{ once: false }}
                        className="flex items-center gap-3"
                      >
                        <Star className="w-4 h-4 text-primary fill-current" />
                        <span className="text-muted-foreground">{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}