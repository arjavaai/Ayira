"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    category: "Revenue Management",
    title: "10 Ways to Increase Hotel Revenue with Dynamic Pricing",
    excerpt: "Learn proven strategies to optimize your room rates and maximize profit margins using data-driven pricing techniques.",
    author: "Sarah Martinez",
    date: "9/25/2024",
    readTime: "8 min read",
    image: "/luxury-hotel-lobby-with-warm-lighting-modern-desig.jpg",
    link: "/resources/blog/dynamic-pricing"
  },
  {
    id: 2,
    category: "OTA Management",
    title: "The Ultimate Guide to OTA Channel Management",
    excerpt: "Master the art of managing multiple booking platforms while avoiding overbookings and maximizing visibility.",
    author: "Michael Chen",
    date: "9/20/2024",
    readTime: "12 min read",
    image: "/luxury-hotel-lobby-with-warm-lighting-modern-desig.jpg",
    link: "/resources/blog/ota-channel-management"
  },
  {
    id: 3,
    category: "Technology",
    title: "How AI is Transforming Guest Experience in Hotels",
    excerpt: "Discover how artificial intelligence and chatbots are revolutionizing customer service in the hospitality industry.",
    author: "Emma Thompson",
    date: "9/15/2024",
    readTime: "6 min read",
    image: "/luxury-hotel-lobby-with-warm-lighting-modern-desig.jpg",
    link: "/resources/blog/ai-guest-experience"
  },
  {
    id: 4,
    category: "Mobile Technology",
    title: "Mobile-First Hotel Management: Best Practices",
    excerpt: "Learn why mobile accessibility is crucial for modern hotel operations and how to implement mobile-first strategies.",
    author: "David Wilson",
    date: "9/10/2024",
    readTime: "10 min read",
    image: "/luxury-hotel-lobby-with-warm-lighting-modern-desig.jpg",
    link: "/resources/blog/mobile-first-management"
  }
]

export default function ResourcesPage() {
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
                <BookOpen className="w-4 h-4" />
                Knowledge Hub
              </motion.div>
              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Knowledge Hub for Hotel Success
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Expert insights, industry news, training resources, and support to help you maximize your hotel's potential.
              </motion.p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Expert Insights & Guides</h2>
              <p className="text-xl text-gray-600">
                Stay ahead with the latest strategies and best practices for hotel management.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Reveal key={post.id} delay={index * 0.1}>
                <a href={post.link}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 overflow-hidden group cursor-pointer">
                    <div className="relative h-64 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${post.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white hover:bg-blue-700">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span className="font-medium">{post.author}</span>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Help CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container-custom">
          <Reveal>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Need Personalized Help?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Our hospitality experts are here to answer your questions and help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
                  asChild
                >
                  <motion.a
                    href="/experience"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book a Demo
                  </motion.a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full"
                  asChild
                >
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2"
                  >
                    Contact Support
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
