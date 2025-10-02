"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, TrendingUp, Zap, Shield, ArrowRight } from "lucide-react"

const plans = [
  {
    id: 1,
    name: "Essential",
    subtitle: "Perfect for small and independent hotels",
    price: "Custom Pricing",
    priceSubtext: "Tailored to your business goals",
    popular: false,
    outcomes: [
      "Higher occupancy rates",
      "Better profit margins",
      "More positive guest reviews",
      "Less time spent on admin tasks",
      "Competitive advantage over other hotels",
      "Peace of mind with reliable operations",
      "Ability to focus on guest experience"
    ]
  },
  {
    id: 2,
    name: "Professional",
    subtitle: "For growing properties and hotel groups",
    price: "Custom Pricing",
    priceSubtext: "Tailored to your business goals",
    popular: true,
    outcomes: [
      "Consistent revenue growth",
      "Lower operating expenses",
      "Loyal, returning guests",
      "More time for strategic decisions",
      "Always competitive room rates",
      "Clear visibility into business performance",
      "Easier management of multiple locations",
      "Faster problem resolution",
      "Happier, more productive staff",
      "Confident business planning"
    ]
  },
  {
    id: 3,
    name: "Enterprise",
    subtitle: "For hotel chains and custom requirements",
    price: "Custom Pricing",
    priceSubtext: "Tailored to your business goals",
    popular: false,
    outcomes: [
      "Industry-leading profitability",
      "Minimal operational overhead",
      "Premium brand reputation",
      "Hands-off daily operations",
      "Unique competitive advantages",
      "Complete business protection",
      "Personal business partner",
      "Seamless workflow integration",
      "Your own branded solutions",
      "Market leadership position",
      "Immediate expert assistance",
      "Smooth team transition",
      "Unlimited growth potential"
    ]
  }
]

const whyChoose = [
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Measurable return on investment with clear business results"
  },
  {
    icon: Zap,
    title: "Guest Satisfaction",
    description: "Consistently improve guest ratings and reviews"
  },
  {
    icon: Shield,
    title: "Operational Efficiency",
    description: "Significantly reduce staff workload through intelligent automation"
  }
]

const faqs = [
  {
    question: "How quickly will I see ROI?",
    answer: "Most hotels see positive ROI quickly, with meaningful results typically achieved within the first year. Revenue increases and cost savings vary depending on your current operations and plan level."
  },
  {
    question: "What does implementation involve?",
    answer: "Our dedicated success team handles everything - from system setup to staff training. Most hotels are fully operational quickly with zero disruption to guest services."
  },
  {
    question: "How is pricing determined?",
    answer: "Pricing is based on your property size, operational complexity, and growth goals. We create a custom package that ensures maximum ROI for your specific business needs."
  },
  {
    question: "Can I start small and scale up?",
    answer: "Absolutely. Luvera Aiyra grows with your business. Start with essential features and add capabilities as your operation expands. No penalties for upgrading."
  }
]

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="container-custom">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <TrendingUp className="w-4 h-4" />
                Invest in Your Success
              </motion.div>
              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                ROI-Focused Investment Plans
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Choose the Luvera Aiyra solution that transforms your hotel business. Every plan is designed to deliver measurable ROI and exceptional guest experiences.
              </motion.p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Reveal key={plan.id} delay={index * 0.1}>
                <Card className={`relative h-full ${plan.popular ? 'border-2 border-blue-500 shadow-2xl scale-105' : 'border-2 hover:border-blue-200'} transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8 pt-8">
                    <h3 className="text-3xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.subtitle}</p>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</div>
                      <p className="text-sm text-gray-500">{plan.priceSubtext}</p>
                    </div>
                    <Button
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-full py-6`}
                      asChild
                    >
                      <a href="/experience">{plan.id === 3 ? 'Request Quote' : 'Request Demo'}</a>
                    </Button>
                  </CardHeader>
                  <CardContent className="pb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Business Outcomes:</h4>
                    <div className="space-y-3">
                      {plan.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                Why Hotel Owners Choose Luvera Aiyra
              </h2>
              <p className="text-xl text-gray-600">
                Every plan includes our complete hospitality platform with measurable business results
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-blue-50">
        <div className="container-custom max-w-4xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                Investment Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about investing in Luvera Aiyra
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border-2 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Ready to Transform Your Hotel Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join hundreds of successful hotels that trust Luvera Aiyra to maximize revenue and deliver exceptional guest experiences.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
                  asChild
                >
                  <motion.a
                    href="/experience"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Your Demo
                  </motion.a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full"
                  asChild
                >
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2"
                  >
                    Speak with Expert
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
