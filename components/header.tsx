"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown, Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open and handle keyboard events
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      
      // Close menu on Escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false)
        }
      }
      
      document.addEventListener('keydown', handleEscape)
      
      return () => {
        document.removeEventListener('keydown', handleEscape)
      }
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>

          {/* CTA Button - Hidden on mobile */}
          <motion.a
            href="#experience"
            className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience Aiyra
          </motion.a>
        </div>
      </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="mobile-menu-overlay md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div 
                  className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <motion.div
                  className="mobile-menu-panel"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                >
            <div className="p-4 sm:p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-teal-500 p-0.5 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-sm sm:text-lg font-bold text-blue-600">LA</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wider font-medium text-neutral-500">LUVERA</span>
                    <span className="text-lg sm:text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text">Aiyra</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-700" />
                </button>
              </div>

              <nav className="flex-1 space-y-2 sm:space-y-4">
                <a
                  href="#features"
                  className="block py-3 px-4 text-neutral-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="block py-3 px-4 text-neutral-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#resources"
                  className="block py-3 px-4 text-neutral-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resources
                </a>
                <a
                  href="#contact"
                  className="block py-3 px-4 text-neutral-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <motion.a
                    href="#experience"
                    className="block w-full bg-blue-600 text-white px-6 py-3 rounded-full font-medium text-center hover:bg-blue-700 transition-colors text-sm sm:text-base"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Experience Aiyra
                  </motion.a>
                </div>
              </nav>
            </div>
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
