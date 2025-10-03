"use client"

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { ReactNode } from 'react'

interface ScrollAnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  duration?: number
  stagger?: number
}

export function ScrollAnimatedText({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  stagger = 0
}: ScrollAnimatedTextProps) {
  const { ref, isInView } = useScrollAnimation()

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    fade: { y: 0, x: 0 }
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        x: 0
      } : {}}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScrollAnimatedWordsProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function ScrollAnimatedWords({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  as = 'p'
}: ScrollAnimatedWordsProps) {
  const { ref, isInView } = useScrollAnimation()
  const words = text.split(' ')

  const renderContent = () => (
    <>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + index * staggerDelay,
            ease: [0.21, 0.47, 0.32, 0.98]
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </>
  )

  switch (as) {
    case 'h1':
      return <h1 ref={ref} className={className}>{renderContent()}</h1>
    case 'h2':
      return <h2 ref={ref} className={className}>{renderContent()}</h2>
    case 'h3':
      return <h3 ref={ref} className={className}>{renderContent()}</h3>
    case 'span':
      return <span ref={ref} className={className}>{renderContent()}</span>
    default:
      return <p ref={ref} className={className}>{renderContent()}</p>
  }
}

interface ScrollAnimatedCharsProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function ScrollAnimatedChars({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.02,
  as: Component = 'p'
}: ScrollAnimatedCharsProps) {
  const { ref, isInView } = useScrollAnimation()
  const chars = text.split('')

  return (
    <Component ref={ref} className={className}>
      {chars.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.3,
            delay: delay + index * staggerDelay,
            ease: [0.21, 0.47, 0.32, 0.98]
          }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </Component>
  )
}

interface ScrollFadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  scale?: boolean
}

export function ScrollFadeIn({
  children,
  className = '',
  delay = 0,
  scale = false
}: ScrollFadeInProps) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...(scale && { scale: 0.95 })
      }}
      animate={isInView ? {
        opacity: 1,
        ...(scale && { scale: 1 })
      } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ScrollSlideInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'left' | 'right' | 'up' | 'down'
}

export function ScrollSlideIn({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}: ScrollSlideInProps) {
  const { ref, isInView } = useScrollAnimation()

  const directions = {
    left: { x: -100 },
    right: { x: 100 },
    up: { y: 100 },
    down: { y: -100 }
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        y: 0
      } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
