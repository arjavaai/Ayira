"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-md border-b border-white/[0.02]",
        isScrolled ? "bg-white/[0.02]" : "bg-white/[0.02]",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <a href="#" className="flex items-center gap-3" aria-label="Luvera Aiyra Home">
              {/* Circular Logo with LA initials */}
              <motion.div 
                className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-teal-500 p-0.5 flex items-center justify-center"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Inner circle with gradient border */}
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                  {/* Gradient background for the letters */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 rounded-full" />
                  
                  {/* LA Letters */}
                  <div className="relative z-10 flex items-center justify-center">
                    <span className="text-lg lg:text-xl font-bold text-blue-600 leading-none">L</span>
                    <span className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-500 to-teal-600 bg-clip-text text-transparent leading-none">A</span>
                  </div>
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                </div>
              </motion.div>

              {/* Text Logo */}
              <div className="flex flex-col">
                <span
                  className={cn(
                    "text-xs uppercase tracking-wider font-medium transition-colors leading-none",
                    isScrolled ? "text-neutral-500" : "text-white/70",
                  )}
                >
                  LUVERA
                </span>
                <span
                  className={cn(
                    "text-xl lg:text-2xl font-bold tracking-tight transition-colors leading-none",
                    isScrolled ? "text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text hover:from-blue-700 hover:to-teal-700" : "text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text hover:from-blue-300 hover:to-teal-300",
                  )}
                >
                  Aiyra
                </span>
              </div>
            </a>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 transition-colors",
                  isScrolled ? "text-neutral-700 hover:text-neutral-900" : "text-white/90 hover:text-white",
                )}
              >
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a
              href="#features"
              className={cn(
                "transition-colors",
                isScrolled ? "text-neutral-700 hover:text-neutral-900" : "text-white/90 hover:text-white",
              )}
            >
              Features
            </a>
            <a
              href="#pricing"
              className={cn(
                "transition-colors",
                isScrolled ? "text-neutral-700 hover:text-neutral-900" : "text-white/90 hover:text-white",
              )}
            >
              Pricing
            </a>
            <a
              href="#resources"
              className={cn(
                "transition-colors",
                isScrolled ? "text-neutral-700 hover:text-neutral-900" : "text-white/90 hover:text-white",
              )}
            >
              Resources
            </a>
            <a
              href="#contact"
              className={cn(
                "transition-colors",
                isScrolled ? "text-neutral-700 hover:text-neutral-900" : "text-white/90 hover:text-white",
              )}
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <motion.a
            href="#experience"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience Aiyra
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}
