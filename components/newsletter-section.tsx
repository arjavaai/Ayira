"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import Image from "next/image"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isValid, setIsValid] = useState(true)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateEmail(email)) {
      setIsSubmitted(true)
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  return (
    <section className="relative py-32 overflow-hidden" id="cta">
      <div className="absolute inset-0 z-0">
        <Image src="/luxury-hotel-lobby-with-white-flowers-elegant-mode.jpg" alt="Luxury hotel lobby" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container-custom">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform <span className="italic font-light">Your Business?</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-3 sm:mb-4">Ready to Meet Aiyra?</p>
            <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-12 leading-relaxed">
              Join the revolution in hotel management. See how Aiyra can help your business achieve unprecedented levels
              of efficiency, profitability, and guest satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <motion.a
                href="#experience"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors text-base sm:text-lg text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Experience Aiyra Today
              </motion.a>
              <motion.a
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium border border-white/30 hover:bg-white/20 transition-colors text-base sm:text-lg text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Quote
              </motion.a>
            </div>

            <p className="text-xs sm:text-sm text-white/70">
              Trusted by luxury hotels worldwide • Enterprise-grade security • 24/7 expert support
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
