'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, FileText, GraduationCap, ScrollText } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const documents = [
  {
    title: 'Resume',
    description: 'A complete professional CV showcasing my experience, skills, and achievements in network engineering and machine learning.',
    icon: FileText,
    downloadUrl: '/Sakhile_resume.pdf',
    available: true,
  },
  {
    title: 'Qualification',
    description: 'The official letter of completion for my BEng Tech Computer Engineering degree from the university.',
    icon: GraduationCap,
    downloadUrl: '/Completion_Letter.pdf',
    available: true,
  },
  {
    title: 'Academic Transcript',
    description: 'Official academic records showing detailed course grades and academic performance throughout my studies.',
    icon: ScrollText,
    downloadUrl: null,
    available: false,
  },
]

export default function DocumentsSection() {
  return (
    <AnimatedSection id="documents" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-blue">Documents</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => {
            const Icon = doc.icon
            
            return (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{doc.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <CardDescription className="text-center leading-relaxed">
                      {doc.description}
                    </CardDescription>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    {doc.available ? (
                      <Button className="w-full" asChild>
                        <a href={doc.downloadUrl!} download>
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    ) : (
                      <Button className="w-full" disabled>
                        Not Available
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}