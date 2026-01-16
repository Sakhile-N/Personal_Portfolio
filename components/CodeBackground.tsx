'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const codeSnippets = [
  'import React from "react"',
  'const [state, setState] = useState()',
  'function handleClick() {',
  'return <div className="container">',
  'useEffect(() => {',
  'const data = await fetch("/api")',
  'export default function App() {',
  'if (condition) {',
  'map((item, index) => (',
  'onClick={() => setActive(true)}',
  'className="flex items-center"',
  'transition-all duration-300',
  'bg-gradient-to-r from-blue-500',
  'hover:scale-105 transform',
  'const result = data.filter(item =>',
  'async function getData() {',
  'try { ... } catch (error) {',
  'return response.json()',
  'console.log("Hello World")',
  'npm install react',
  'git commit -m "feat: add new feature"',
  'docker run -p 3000:3000',
  'SELECT * FROM users WHERE',
  'CREATE TABLE projects (',
  'INSERT INTO skills VALUES',
  'UPDATE portfolio SET',
  'DELETE FROM cache WHERE',
  'ALTER TABLE users ADD',
  'JOIN certificates ON',
  'GROUP BY category',
  'ORDER BY created_at DESC',
  'LIMIT 10 OFFSET 0',
  'def train_model():',
  'import tensorflow as tf',
  'model.compile(optimizer="adam")',
  'model.fit(X_train, y_train)',
  'accuracy = model.evaluate()',
  'predictions = model.predict()',
  'from sklearn import metrics',
  'import pandas as pd',
  'df = pd.read_csv("data.csv")',
  'X_train, X_test = train_test_split()',
  'scaler = StandardScaler()',
  'pipeline = Pipeline([',
  'cross_val_score(model, X, y)',
  'GridSearchCV(estimator=model)',
  'joblib.dump(model, "model.pkl")',
]

interface FloatingCode {
  id: number
  text: string
  x: number
  y: number
  duration: number
  delay: number
  opacity: number
}

export default function CodeBackground() {
  const [floatingCodes, setFloatingCodes] = useState<FloatingCode[]>([])

  useEffect(() => {
    const generateFloatingCodes = () => {
      const codes: FloatingCode[] = []
      
      for (let i = 0; i < 15; i++) {
        codes.push({
          id: i,
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: 20 + Math.random() * 30, // 20-50 seconds
          delay: Math.random() * 10, // 0-10 seconds delay
          opacity: 0.1 + Math.random() * 0.2, // 0.1-0.3 opacity
        })
      }
      
      setFloatingCodes(codes)
    }

    generateFloatingCodes()
    
    // Regenerate codes periodically
    const interval = setInterval(generateFloatingCodes, 60000) // Every minute
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {floatingCodes.map((code) => (
        <motion.div
          key={code.id}
          initial={{ 
            x: `${code.x}vw`, 
            y: `${code.y}vh`,
            opacity: 0 
          }}
          animate={{
            x: [`${code.x}vw`, `${(code.x + 20) % 100}vw`, `${(code.x + 40) % 100}vw`],
            y: [`${code.y}vh`, `${(code.y - 30) % 100}vh`, `${(code.y - 60) % 100}vh`],
            opacity: [0, code.opacity, code.opacity, 0],
          }}
          transition={{
            duration: code.duration,
            delay: code.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-primary/30 text-sm font-mono whitespace-nowrap select-none"
          style={{
            filter: 'blur(0.5px)',
            textShadow: '0 0 10px rgba(59, 130, 246, 0.3)',
          }}
        >
          {code.text}
        </motion.div>
      ))}
      
      {/* Additional floating elements for variety */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`symbol-${i}`}
          initial={{ 
            x: `${Math.random() * 100}vw`, 
            y: `${Math.random() * 100}vh`,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            x: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
            y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
            opacity: [0, 0.1, 0.1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 25 + Math.random() * 20,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-primary/20 text-2xl font-mono select-none"
        >
          {['{ }', '< >', '[ ]', '( )', '=> ', '...', '&&', '||'][i]}
        </motion.div>
      ))}
    </div>
  )
}