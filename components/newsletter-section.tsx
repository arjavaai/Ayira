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
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#C3C9CD] to-[#EFF0F1]" id="cta">
      <div className="absolute inset-0 z-0">
        <Image src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Modern hotel interior" fill className="object-cover opacity-100" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 container-custom">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform <span className="italic font-bold bg-gradient-to-r from-[#3B82F6] to-[#097abe] bg-clip-text text-transparent">Your Business?</span>
            </h2>
            <p className="text-lg sm:text-xl text-white mb-3 sm:mb-4 font-semibold">Ready to Meet Aiyra?</p>
            <p className="text-base sm:text-lg text-white mb-8 sm:mb-12 leading-relaxed">
              Join the revolution in hotel management. See how Aiyra can help your business achieve unprecedented levels
              of efficiency, profitability, and guest satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <motion.a
                href="#experience"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#3B82F6] to-[#097abe] text-white rounded-full font-medium hover:from-[#097abe] hover:to-[#3B82F6] transition-all duration-300 text-base sm:text-lg text-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Experience Aiyra Today
              </motion.a>
              <motion.a
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium border-2 border-white/30 hover:bg-white/30 transition-colors text-base sm:text-lg text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Quote
              </motion.a>
            </div>

            <p className="text-xs sm:text-sm text-white">
              Trusted by luxury hotels worldwide • Enterprise-grade security • 24/7 expert support
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
