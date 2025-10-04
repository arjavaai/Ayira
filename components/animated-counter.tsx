"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: string | number
  duration?: number
  className?: string
}

export function AnimatedCounter({ 
  value, 
  duration = 2000, 
  className = ""
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  // Extract numeric value from string
  const getNumericValue = (val: string | number): number => {
    if (typeof val === 'number') return val
    const numStr = val.toString().replace(/[^\d.]/g, '')
    return parseFloat(numStr) || 0
  }

  // Format the display value
  const formatValue = (num: number, originalValue: string | number): string => {
    const originalStr = originalValue.toString()
    
    // Handle percentage
    if (originalStr.includes('%')) {
      return `${Math.round(num)}%`
    }
    
    // Handle time values (like 15min)
    if (originalStr.includes('min')) {
      return `${Math.round(num)}min`
    }
    
    // Handle decimal values (like 99.9%)
    if (originalStr.includes('.')) {
      return `${num.toFixed(1)}%`
    }
    
    // Handle large numbers with commas
    if (num >= 1000) {
      return `${Math.round(num).toLocaleString()}+`
    }
    
    return Math.round(num).toString()
  }

  useEffect(() => {
    if (isInView) {
      const targetValue = getNumericValue(value)
      
      const startTime = Date.now()
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = targetValue * easeOutQuart
        
        setCount(currentCount)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(targetValue)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration])

  // Show target value if not in view
  const displayValue = isInView ? count : getNumericValue(value)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {formatValue(displayValue, value)}
    </motion.div>
  )
}
