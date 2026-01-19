'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Theme = 'dark' | 'light'

export default function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark')

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setCurrentTheme(savedTheme)
      applyTheme(savedTheme)
    }
  }, [])

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement
    
    // Remove all theme classes
    root.classList.remove('theme-dark', 'theme-light')
    
    // Add new theme class
    root.classList.add(`theme-${theme}`)
    
    // Apply CSS custom properties based on theme
    if (theme === 'light') {
      root.style.setProperty('--background', '0 0% 100%')
      root.style.setProperty('--foreground', '222.2 84% 4.9%')
      root.style.setProperty('--card', '0 0% 100%')
      root.style.setProperty('--card-foreground', '222.2 84% 4.9%')
      root.style.setProperty('--popover', '0 0% 100%')
      root.style.setProperty('--popover-foreground', '222.2 84% 4.9%')
      root.style.setProperty('--primary', '221.2 83.2% 53.3%')
      root.style.setProperty('--primary-foreground', '210 40% 98%')
      root.style.setProperty('--secondary', '210 40% 96%')
      root.style.setProperty('--secondary-foreground', '222.2 84% 4.9%')
      root.style.setProperty('--muted', '210 40% 96%')
      root.style.setProperty('--muted-foreground', '215.4 16.3% 46.9%')
      root.style.setProperty('--accent', '210 40% 96%')
      root.style.setProperty('--accent-foreground', '222.2 84% 4.9%')
      root.style.setProperty('--destructive', '0 84.2% 60.2%')
      root.style.setProperty('--destructive-foreground', '210 40% 98%')
      root.style.setProperty('--border', '214.3 31.8% 91.4%')
      root.style.setProperty('--input', '214.3 31.8% 91.4%')
      root.style.setProperty('--ring', '221.2 83.2% 53.3%')
    } else {
      // Dark theme (default)
      root.style.setProperty('--background', '222.2 84% 4.9%')
      root.style.setProperty('--foreground', '210 40% 98%')
      root.style.setProperty('--card', '222.2 84% 4.9%')
      root.style.setProperty('--card-foreground', '210 40% 98%')
      root.style.setProperty('--popover', '222.2 84% 4.9%')
      root.style.setProperty('--popover-foreground', '210 40% 98%')
      root.style.setProperty('--primary', '217.2 91.2% 59.8%')
      root.style.setProperty('--primary-foreground', '222.2 84% 4.9%')
      root.style.setProperty('--secondary', '217.2 32.6% 17.5%')
      root.style.setProperty('--secondary-foreground', '210 40% 98%')
      root.style.setProperty('--muted', '217.2 32.6% 17.5%')
      root.style.setProperty('--muted-foreground', '215 20.2% 65.1%')
      root.style.setProperty('--accent', '217.2 32.6% 17.5%')
      root.style.setProperty('--accent-foreground', '210 40% 98%')
      root.style.setProperty('--destructive', '0 62.8% 30.6%')
      root.style.setProperty('--destructive-foreground', '210 40% 98%')
      root.style.setProperty('--border', '217.2 32.6% 17.5%')
      root.style.setProperty('--input', '217.2 32.6% 17.5%')
      root.style.setProperty('--ring', '224.3 76.3% 94.0%')
    }
  }

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    setCurrentTheme(newTheme)
    applyTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="p-2 hover:bg-primary/10 transition-colors"
      title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: currentTheme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {currentTheme === 'dark' ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </motion.div>
    </Button>
  )
}