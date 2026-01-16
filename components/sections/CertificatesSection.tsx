'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Calendar } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import Image from 'next/image'

const certificates = [
  {
    title: 'Supervised Machine Learning',
    issuer: 'DeepLearning.AI | Stanford Online',
    date: '2025',
    image: '/Supervised_c_l.png',
    credentialUrl: 'https://coursera.org/share/09ece9e880e4e34d1c10ee95294ea0be',
  },
  {
    title: 'AI Essentials',
    issuer: 'IBM',
    date: '2025',
    image: '/AI_essentials.png',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/records/ZHA4Q934GR1H',
  },
  {
    title: 'Generative AI with Large Language Models',
    issuer: 'DeepLearning.AI | AWS',
    date: '2025',
    image: '/LLMs.png',
    credentialUrl: 'https://coursera.org/share/63ff1e9cf42aeda512ab725a155c8b15',
  },
  {
    title: 'Technical Support Fundamentals',
    issuer: 'Google | Coursera',
    date: '2025',
    image: '/Technical.png',
    credentialUrl: 'https://coursera.org/share/cf35ef799622aeb4040d96f972de927f',
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    issuer: 'Google | Coursera',
    date: '2025',
    image: '/Bits.png',
    credentialUrl: 'https://coursera.org/share/b2187c736ae015ea9f4329fc2c58813a',
  },
  {
    title: 'Operating Systems and You: Becoming a Power User',
    issuer: 'Google | Coursera',
    date: '2025',
    image: '/OPS.png',
    credentialUrl: 'https://coursera.org/share/bb78b95f68102f3fc29ab98fcb8b0434',
  },
  {
    title: 'System Administration and IT Infrastructure Services',
    issuer: 'Google | Coursera',
    date: '2025',
    image: '/SystemAdmin.PNG',
    credentialUrl: 'https://coursera.org/share/f16286a5ed139327a46929ad5b1e3539',
  },
]

export default function CertificatesSection() {
  return (
    <AnimatedSection id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-blue">Certificates</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my professional certifications...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 p-6">
                  <CardTitle className="mb-2 text-lg">{cert.title}</CardTitle>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full" asChild>
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Credential
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}