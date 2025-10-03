"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Shield, Zap, Globe } from "lucide-react"
import { Reveal } from "./reveal"
import { BlurPanel } from "./blur-panel"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
      <span>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.03,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    )
  }

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-gradient-to-br from-neutral-light to-neutral-medium">
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070&auto=format&fit=crop"
          alt="Modern minimalist hotel lobby with gray tones"
          fill
          className="object-cover opacity-100"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Black overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-5" />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="container-custom text-center">
          <Reveal>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/20 backdrop-blur-sm border border-brand-secondary/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Zap className="w-4 h-4 text-brand-secondary" />
              <span className="text-sm font-medium text-white">The Future of Hotel Management</span>
            </motion.div>
          </Reveal>

          <Reveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-none tracking-tight mb-6">
              <span className="text-white">
                <AnimatedText text="Meet " delay={0.5} />
              </span>
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                <AnimatedText text="Aiyra" delay={0.7} />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              The complete hospitality platform that helps you deliver exceptional guest experiences, maximize revenue,
              and streamline operations - all while reducing costs and saving time.
            </motion.p>
          </Reveal>

          <Reveal delay={0.3}>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.a
                href="#experience"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-brand-secondary to-brand-primary text-white rounded-full font-medium hover:from-brand-primary hover:to-brand-secondary transition-all duration-300 text-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Experience Aiyra →
              </motion.a>
              <motion.a
                href="#features"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-neutral-medium/10 backdrop-blur-sm text-white rounded-full font-medium border-2 border-neutral-medium/30 hover:bg-neutral-medium/20 transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Features
              </motion.a>
            </motion.div>
          </Reveal>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <BlurPanel className="mx-4 sm:mx-6 mb-4 sm:mb-6 px-4 sm:px-6 py-3 sm:py-4 bg-neutral-medium/80 backdrop-blur-md border-neutral-light/30">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-secondary" />
              <span className="text-xs sm:text-sm">Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-brand-secondary" />
              <span className="text-xs sm:text-sm">Real-time Intelligence</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-brand-secondary" />
              <span className="text-xs sm:text-sm">Global Support</span>
            </div>
          </div>
        </BlurPanel>
      </motion.div>
    </section>
  )
}
