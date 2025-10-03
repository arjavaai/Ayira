"use client"

import { useRef, useState, useEffect, ReactNode } from "react"
import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { Activity, DollarSign, Users, Bot, BarChart3, Headphones, CheckCircle2, Calendar, ArrowRight, TrendingUp, Zap, Monitor, CreditCard, MessageSquare, Settings, Shield, Building, TreePine, Home, MapPin, Star, Users2, MessageCircle, BarChart, Brain, Globe, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

// CardSwap Component
export interface CardProps {
  children: ReactNode
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 bg-[#626E7C] rounded-3xl shadow-2xl backdrop-blur-md border border-[#BDC3C8]/30">
        <div className="relative h-full p-8">
          {children}
        </div>
      </div>
    </div>
  )
}

interface CardSwapProps {
  children: ReactNode[]
  cardDistance?: number
  verticalDistance?: number
  delay?: number
  pauseOnHover?: boolean
}

export const CardSwap: React.FC<CardSwapProps> = ({
  children,
  cardDistance = 40,
  verticalDistance = 50,
  delay = 4000,
  pauseOnHover = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % children.length)
    }, delay)

    return () => clearInterval(interval)
  }, [children.length, delay, isPaused])

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true)
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false)
    }
  }

  return (
    <div 
      className="relative w-full h-full perspective-1000"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children.map((child, index) => {
        const offset = index - currentIndex
        const zIndex = children.length - Math.abs(offset)
        const isActive = index === currentIndex
        const isNext = index === (currentIndex + 1) % children.length
        const isPrev = index === (currentIndex - 1 + children.length) % children.length
        
        // Calculate transform based on position
        let transform = ''
        let opacity = 0.3
        let scale = 0.9
        
        if (isActive) {
          transform = 'translateZ(0px) rotateY(0deg) rotateX(0deg)'
          opacity = 1
          scale = 1
        } else if (isNext) {
          transform = `translateX(${cardDistance}px) translateY(${verticalDistance}px) rotateY(-12deg) rotateX(3deg) translateZ(-30px)`
          opacity = 0.8
          scale = 0.95
        } else if (isPrev) {
          transform = `translateX(-${cardDistance * 0.4}px) translateY(-${verticalDistance * 0.4}px) rotateY(12deg) rotateX(-3deg) translateZ(-60px)`
          opacity = 0.6
          scale = 0.9
        } else {
          transform = `translateX(${cardDistance * (offset > 0 ? 1.5 : -1)}px) translateY(${verticalDistance * offset}px) rotateY(${offset * 10}deg) rotateX(${offset * 2}deg) translateZ(${-90 * Math.abs(offset)}px)`
          opacity = 0.3
          scale = 0.85
        }
        
        const style = {
          position: 'absolute' as const,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex,
          opacity,
          scale,
          transform,
          transformStyle: 'preserve-3d' as const,
          transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          pointerEvents: isActive ? 'auto' : 'none' as const
        }

        return (
          <div key={index} style={style}>
            {child}
          </div>
        )
      })}
    </div>
  )
}

const platformFeatures = [
  {
    id: "property-management",
    title: "Property Management System",
    subtitle: "Complete PMS with reservations, check-ins, housekeeping, and operations management for all property types.",
    icon: Building,
    color: "from-[#097abe] to-[#076198]",
    features: [
      { icon: Calendar, label: "Reservations & Channel Management", description: "Seamless booking across all channels" },
      { icon: Settings, label: "Housekeeping & Maintenance", description: "Streamlined operations management" },
      { icon: MessageCircle, label: "Guest Communication", description: "Centralized messaging system" }
    ]
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot & Automation",
    subtitle: "Built-in AI chatbot that handles guest inquiries, automates responses, and provides 24/7 customer support.",
    icon: Bot,
    color: "from-[#076198] to-[#054972]",
    features: [
      { icon: Headphones, label: "24/7 Automated Guest Support", description: "Always available customer service" },
      { icon: Globe, label: "Multi-language Capabilities", description: "Support guests in their language" },
      { icon: Brain, label: "Smart Recommendations", description: "Personalized suggestions and offers" }
    ]
  },
  {
    id: "analytics-bi",
    title: "Analytics & Business Intelligence",
    subtitle: "Advanced BI platform with real-time dashboards, predictive analytics, and actionable insights for data-driven decisions.",
    icon: BarChart,
    color: "from-[#054972] to-[#03304c]",
    features: [
      { icon: Monitor, label: "Real-time Performance Dashboards", description: "Live insights into your business" },
      { icon: TrendingUp, label: "Predictive Revenue Analytics", description: "Forecast and optimize revenue" },
      { icon: Target, label: "Custom KPI Tracking", description: "Monitor what matters most" }
    ]
  }
]

export function CollectionStrip() {
  const containerRef = useRef<HTMLDivElement>(null)

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
    <section ref={containerRef} className="py-20 lg:py-32 bg-gradient-to-b from-[#EFF0F1] to-[#626E7C]" id="dashboard">
      <div className="container-custom">
        {/* Main Content Section */}
        <div className="mb-20">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Text Content */}
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#097abe] text-white rounded-full text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  All-In-One Platform
                </div>
                <h2 className="text-black text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  <AnimatedText text="More Than Just PMS Software" delay={0.2} />
                </h2>
                <p className="text-xl lg:text-2xl font-semibold text-[#626E7C] mb-4">
                  Three Platforms in One Solution
                </p>
                <p className="text-lg text-black leading-relaxed">
                  Unlike traditional PMS systems, Aiyra combines property management, AI intelligence, and business analytics in one integrated platform.
                </p>
              </div>

              {/* Right Side - CardSwap */}
              <div className="relative" style={{ height: '600px' }}>
                <CardSwap
                  cardDistance={40}
                  verticalDistance={50}
                  delay={4000}
                  pauseOnHover={true}
                >
                  {platformFeatures.map((platform, index) => (
                    <Card key={platform.id}>
                      <div className="h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-start gap-6 mb-8">
                          <div className={`w-20 h-20 bg-gradient-to-br ${platform.color} rounded-3xl flex items-center justify-center shadow-xl flex-shrink-0`}>
                            <platform.icon className="w-10 h-10 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                              {platform.title}
                  </h3>
                            <p className="text-[#E0E3E5] text-base leading-relaxed">
                              {platform.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-6 flex-1 mb-8">
                          {platform.features.map((feature, featureIndex) => (
                          <motion.div
                              key={featureIndex}
                              className="flex items-start gap-5 p-5 rounded-2xl hover:bg-[#3B82F6]/20 transition-all duration-300 group"
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="w-12 h-12 bg-[#3B82F6]/30 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#3B82F6]/50 transition-colors">
                                <feature.icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-white text-base mb-2">
                                  {feature.label}
                                </h4>
                                <p className="text-sm text-[#E0E3E5] leading-relaxed">
                                  {feature.description}
                                </p>
                              </div>
                          </motion.div>
                      ))}
                  </div>

                        {/* Learn More Button */}
                        <div className="mt-auto pt-6 border-t border-[#3B82F6]/30">
                          <Button 
                            variant="outline" 
                            className="w-full h-12 border-2 border-[#3B82F6]/50 text-white hover:bg-[#3B82F6]/20 hover:border-[#3B82F6] font-semibold text-base rounded-2xl backdrop-blur-sm transition-all duration-300"
                    >
                      Learn More
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
                </div>
            </Reveal>
        </div>

        {/* CTA Section */}
        <Reveal delay={0.4}>
          <div className="text-center mb-20 mt-20">
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#3B82F6] to-[#097abe] hover:from-[#097abe] hover:to-[#3B82F6] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <motion.a
                  href="#experience"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#626E7C] text-[#626E7C] hover:bg-[#626E7C] hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-colors"
                asChild
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.a>
              </Button>
            </motion.div>
          </div>
        </Reveal>

        {/* Support Statement */}
        <Reveal delay={0.6}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#3B82F6]/20 backdrop-blur-sm rounded-full border border-[#3B82F6]/30">
              <div className="w-8 h-8 bg-gradient-to-r from-[#3B82F6] to-[#097abe] rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              <span className="text-black font-medium">
                All solutions include 24/7 support, training & implementation
              </span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
