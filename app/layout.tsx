import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Luvera Aiyra — Hotel Management Solutions",
  description: "Comprehensive hotel management platform for modern hospitality businesses.",
  generator: "v0.app",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://luveraaiyra.com/",
  },
  openGraph: {
    siteName: "Luvera Aiyra",
    title: "Hotel Management Solutions | Luvera Aiyra",
    description: "Comprehensive hotel management platform for modern hospitality businesses.",
    type: "website",
    url: "https://luveraaiyra.com/",
    images: [
      {
        url: "https://luveraaiyra.com/og-image.jpg",
        alt: "Luvera Aiyra — Hotel Management Solutions",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Management Solutions | Luvera Aiyra",
    description: "Comprehensive hotel management platform for modern hospitality businesses.",
    images: [
      {
        url: "https://luveraaiyra.com/og-image.jpg",
        alt: "Luvera Aiyra — Hotel Management Solutions",
      },
    ],
    site: "@luveraaiyra",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-white text-neutral-dark overflow-x-hidden">{children}</body>
    </html>
  )
}
