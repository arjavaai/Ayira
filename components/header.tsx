"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown, Menu, X, Building, Star, Home, Users2, MapPin, ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const pathname = usePathname()
  
  // Since we're using a consistent dark theme, always use light text
  const shouldUseDarkText = false

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
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="flex justify-center px-4 py-3">
        <div className={cn(
          "flex items-center justify-between w-full max-w-7xl",
          "bg-black/50 border border-white/10 backdrop-blur-lg",
          "py-3 px-4 lg:px-6 rounded-full shadow-lg transition-all duration-300"
        )}>
          <div className="flex items-center flex-1">
            {/* Logo */}
            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <a href="/" className="flex items-center gap-2 lg:gap-3" aria-label="Luvera Aiyra Home">
                {/* Circular Logo with LA initials */}
                <motion.div
                  className="relative w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-transparent bg-gradient-to-r from-[#097abe] via-[#076198] to-[#054972] p-0.5 flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Inner circle with gradient border */}
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                    {/* Gradient background for the letters */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#097abe]/10 to-[#054972]/10 rounded-full" />

                    {/* LA Letters */}
                    <div className="relative z-10 flex items-center justify-center">
                      <span className="text-sm lg:text-base font-bold text-[#097abe] leading-none">L</span>
                      <span className="text-sm lg:text-base font-bold bg-gradient-to-r from-[#097abe] to-[#054972] bg-clip-text text-transparent leading-none">A</span>
                    </div>

                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                  </div>
                </motion.div>

                {/* Text Logo */}
                <div className="hidden sm:flex flex-col">
                  <span className="text-xs uppercase tracking-wider font-medium text-white/70 leading-none">
                    LUVERA
                  </span>
                  <span className="text-lg lg:text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-[#097abe] to-[#054972] bg-clip-text leading-none">
                    Aiyra
                  </span>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3 mx-auto">
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <motion.button
                className="flex items-center gap-1 text-sm font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-full transition-all duration-300 text-white/70 hover:text-white relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    />
                  )}
                </AnimatePresence>
                Products
                <ChevronDown className={cn("w-4 h-4 transition-transform", isProductsOpen && "rotate-180")} />
              </motion.button>
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[52rem] bg-black/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden z-50"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-3 gap-3">
                        <a
                          href="/products/independent-hotels"
                          className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                          <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Building className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-white text-sm mb-1">Independent Hotels</div>
                            <div className="text-xs text-white/70 leading-relaxed">Professional management tools to compete with major hotel chains.</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                        </a>

                        <a
                          href="/products/resorts-luxury"
                          className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                          <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Star className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-white text-sm mb-1">Resorts & Luxury Properties</div>
                            <div className="text-xs text-white/70 leading-relaxed">Sophisticated tools for delivering exceptional luxury guest experiences.</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                        </a>

                      <a
                        href="/products/vacation-rentals"
                          className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Home className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-white text-sm mb-1">Airbnb & Vacation Rentals</div>
                            <div className="text-xs text-white/70 leading-relaxed">Streamlined management for vacation rental property owners.</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-green-400 transition-colors flex-shrink-0" />
                        </a>

                      <a
                        href="/products/hotel-chains"
                          className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                          <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Building className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-white text-sm mb-1">Hotel Chains</div>
                            <div className="text-xs text-white/70 leading-relaxed">Centralized management solutions for multi-property hospitality groups.</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-indigo-400 transition-colors flex-shrink-0" />
                        </a>

                      <a
                        href="/products/hostels"
                          className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                          <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Users2 className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-white text-sm mb-1">Hostels</div>
                            <div className="text-xs text-white/70 leading-relaxed">Community-focused solutions for hostels and budget accommodations.</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-orange-400 transition-colors flex-shrink-0" />
                        </a>

                      <a
                        href="/products/apartments"
                          className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                          <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-white text-sm mb-1">Apartment Communities</div>
                            <div className="text-xs text-white/70 leading-relaxed">Modern solutions for residential property and community management.</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-teal-400 transition-colors flex-shrink-0" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.a
              href="/features"
              className="text-sm font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-full transition-all duration-300 text-white/70 hover:text-white relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-full -z-10 opacity-0 hover:opacity-100 transition-opacity"
              />
              Features
            </motion.a>
            <motion.a
              href="/pricing"
              className="text-sm font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-full transition-all duration-300 text-white/70 hover:text-white relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-full -z-10 opacity-0 hover:opacity-100 transition-opacity"
              />
              Pricing
            </motion.a>
            <motion.a
              href="/resources"
              className="text-sm font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-full transition-all duration-300 text-white/70 hover:text-white relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-full -z-10 opacity-0 hover:opacity-100 transition-opacity"
              />
              Resources
            </motion.a>
            <motion.a
              href="/contact"
              className="text-sm font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-full transition-all duration-300 text-white/70 hover:text-white relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-full -z-10 opacity-0 hover:opacity-100 transition-opacity"
              />
              Contact
            </motion.a>
          </nav>

          {/* Right side - CTA and Mobile Menu */}
          <div className="flex items-center gap-2 lg:gap-3 flex-1 justify-end">
            {/* CTA Button */}
            <motion.a
              href="/experience"
              className="hidden md:block bg-gradient-to-r from-[#097abe] to-[#076198] text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full text-sm font-semibold hover:from-[#076198] hover:to-[#054972] transition-all duration-300 shadow-lg shadow-[#097abe]/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Experience Aiyra
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </motion.button>
          </div>
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
                <div className="space-y-2">
                  <button
                    className="flex items-center justify-between w-full py-3 px-4 text-neutral-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm sm:text-base"
                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  >
                    <span>Products</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", isMobileProductsOpen && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {isMobileProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-1">
                          <a
                            href="/products/independent-hotels"
                            className="block py-2 px-4 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Independent Hotels
                          </a>
                          <a
                            href="/products/hotel-chains"
                            className="block py-2 px-4 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Hotel Chains
                          </a>
                          <a
                            href="/products/resorts-luxury"
                            className="block py-2 px-4 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Resorts & Luxury Properties
                          </a>
                          <a
                            href="/products/hostels"
                            className="block py-2 px-4 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Hostels
                          </a>
                          <a
                            href="/products/vacation-rentals"
                            className="block py-2 px-4 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Airbnb & Vacation Rentals
                          </a>
                          <a
                            href="/products/apartments"
                            className="block py-2 px-4 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Apartment Communities
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <a
                  href="/features"
                  className="block py-3 px-4 text-neutral-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="/pricing"
                  className="block py-3 px-4 text-neutral-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="/resources"
                  className="block py-3 px-4 text-neutral-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resources
                </a>
                <a
                  href="/contact"
                  className="block py-3 px-4 text-neutral-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <motion.a
                    href="/experience"
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
