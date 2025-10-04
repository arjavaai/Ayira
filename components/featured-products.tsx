"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { Building2, Bot, BarChart3, Calendar, DollarSign, Wifi, Shield, Users, Zap } from "lucide-react"
import { AnimatedTabs } from "@/components/ui/animated-tabs"

const hotelTabs = [
  {
    id: "operations",
    label: "Operations",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070&auto=format&fit=crop"
          alt="Hotel Operations Dashboard"
          className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-lg border border-neutral-light/30"
        />
        <div className="flex flex-col gap-y-3 md:gap-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-secondary/20 rounded-xl flex items-center justify-center">
              <Building2 className="w-5 h-5 md:w-6 md:h-6 text-brand-secondary" />
            </div>
            <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
              End-to-End Operations
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white mt-0 leading-relaxed">
            Aiyra consolidates all your hotel operations into one sophisticated dashboard, giving you unprecedented control over multiple properties. Monitor occupancy rates, staff performance, and guest satisfaction scores in real-time across your entire portfolio.
          </p>
          <div className="flex items-center gap-2 text-brand-secondary text-xs md:text-sm font-medium">
            <Zap className="w-3 h-3 md:w-4 md:h-4" />
            Real-time monitoring & analytics
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "revenue",
    label: "Revenue",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
          alt="Revenue Analytics Dashboard"
          className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-lg border border-neutral-light/30"
        />
        <div className="flex flex-col gap-y-3 md:gap-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-secondary/20 rounded-xl flex items-center justify-center">
              <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-brand-secondary" />
            </div>
            <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
              Intelligent Revenue Optimization
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white mt-0 leading-relaxed">
            Experience the power of Aiyra's AI-driven pricing engine that analyzes market conditions, competitor rates, and demand patterns 24/7. Our advanced algorithms automatically adjust your room rates to maximize revenue while maintaining optimal occupancy levels.
          </p>
          <div className="flex items-center gap-2 text-brand-secondary text-xs md:text-sm font-medium">
            <BarChart3 className="w-3 h-3 md:w-4 md:h-4" />
            AI-powered dynamic pricing
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "distribution",
    label: "Distribution",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Global Distribution Network"
          className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-lg border border-neutral-light/30"
        />
        <div className="flex flex-col gap-y-3 md:gap-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-secondary/20 rounded-xl flex items-center justify-center">
              <Wifi className="w-5 h-5 md:w-6 md:h-6 text-brand-secondary" />
            </div>
            <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
              Global Distribution Network
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white mt-0 leading-relaxed">
            Aiyra seamlessly connects your properties to 50+ premium OTA channels including Booking.com, Expedia, and Airbnb. Our sophisticated channel management ensures real-time synchronization, eliminating overbookings and maximizing your online presence.
          </p>
          <div className="flex items-center gap-2 text-brand-secondary text-xs md:text-sm font-medium">
            <Calendar className="w-3 h-3 md:w-4 md:h-4" />
            50+ booking channels integrated
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "ai",
    label: "AI Support",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
          alt="AI Chatbot Interface"
          className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-lg border border-neutral-light/30"
        />
        <div className="flex flex-col gap-y-3 md:gap-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-secondary/20 rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 md:w-6 md:h-6 text-brand-secondary" />
            </div>
            <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
              AI-Powered Guest Concierge
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white mt-0 leading-relaxed">
            Let Aiyra's intelligent virtual assistant handle guest inquiries, provide personalized recommendations, and manage routine requests. Our AI learns from every interaction to deliver increasingly sophisticated and human-like service.
          </p>
          <div className="flex items-center gap-2 text-brand-secondary text-xs md:text-sm font-medium">
            <Users className="w-3 h-3 md:w-4 md:h-4" />
            24/7 intelligent guest support
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "analytics",
    label: "Analytics",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          alt="Analytics Dashboard"
          className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-lg border border-neutral-light/30"
        />
        <div className="flex flex-col gap-y-3 md:gap-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-secondary/20 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 md:w-6 md:h-6 text-brand-secondary" />
            </div>
            <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
              Advanced Analytics Suite
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white mt-0 leading-relaxed">
            Aiyra transforms raw data into actionable insights with beautiful, real-time dashboards. Track RevPAR, ADR, occupancy trends, and forecasting models that help you make informed strategic decisions for sustainable growth.
          </p>
          <div className="flex items-center gap-2 text-brand-secondary text-xs md:text-sm font-medium">
            <BarChart3 className="w-3 h-3 md:w-4 md:h-4" />
            Predictive analytics & forecasting
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "support",
    label: "Support",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop"
          alt="Premium Support Team"
          className="rounded-lg w-full h-48 md:h-60 object-cover mt-0 !m-0 shadow-lg border border-neutral-light/30"
        />
        <div className="flex flex-col gap-y-3 md:gap-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-destructive/20 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-destructive" />
            </div>
            <h2 className="text-lg md:text-2xl font-bold mb-0 text-white mt-0 !m-0">
              Premium Support Experience
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white mt-0 leading-relaxed">
            Access Aiyra's dedicated hospitality experts who understand your industry challenges. Our 24/7 premium support includes phone, chat, and priority assistance to ensure your operations never miss a beat.
          </p>
          <div className="flex items-center gap-2 text-destructive text-xs md:text-sm font-medium">
            <Shield className="w-3 h-3 md:w-4 md:h-4" />
            Enterprise-grade support & security
          </div>
        </div>
      </div>
    ),
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-32 bg-white" id="features">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4 lg:text-6xl font-bold break-words">
              Why Hotels Choose <span className="italic font-light text-blue-500">Aiyra</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how Aiyra revolutionizes hospitality management with cutting-edge technology and unparalleled
              intelligence that transforms your operations into a luxury experience
            </p>
          </div>
        </Reveal>

        <div className="flex justify-center">
          <Reveal delay={0.2}>
            <AnimatedTabs
              tabs={hotelTabs}
              defaultTab="operations"
              className="max-w-4xl w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
