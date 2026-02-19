import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { Toaster } from "@/components/ui/sonner"
import { ScrollToTop } from '@/components/scroll-to-top'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'SDK Solutions | Innovating Your Future | Best Software Agency in Sri Lanka',
    template: '%s | SDK Solutions'
  },
  description: 'SDK Solutions is a premier software development agency in Sri Lanka specializing in modern web development, mobile apps, UI/UX design, and cloud solutions. We turn complex challenges into seamless digital experiences.',
  keywords: [
    'SDK Solutions',
    'Software Development Sri Lanka',
    'Web Development Colombo',
    'Mobile App Development',
    'UI/UX Design Agency',
    'Cloud Solutions',
    'Custom Software Development',
    'React Developers Sri Lanka',
    'Next.js Agency',
    'Tech Solutions Sri Lanka'
  ],
  authors: [{ name: 'SDK Solutions' }],
  creator: 'SDK Solutions',
  publisher: 'SDK Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sdk-solutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SDK Solutions | Innovating Your Future',
    description: 'Premier software development agency specializing in modern web, mobile, and custom solutions.',
    url: 'https://sdk-solutions.com',
    siteName: 'SDK Solutions',
    images: [
      {
        url: '/sdklogo.png',
        width: 800,
        height: 600,
        alt: 'SDK Solutions Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDK Solutions | Innovating Your Future',
    description: 'Modern web, mobile and custom software solutions for growing businesses.',
    images: ['/sdklogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-slate-900 bg-white`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SDK Solutions",
              "url": "https://sdk-solutions.com",
              "logo": "https://sdk-solutions.com/sdklogo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+94-74-2216-579",
                "contactType": "customer service",
                "areaServed": "LK",
                "availableLanguage": ["en", "si"]
              },
              "sameAs": [
                "https://www.facebook.com/share/17hZxJtcym/?mibextid=wwXIfr",
                "https://www.linkedin.com/company/sdk-solutions01/posts/?feedView=all"
              ]
            })
          }}
        />
        {children}
        <Toaster />
        <ScrollToTop />
      </body>
    </html>
  )
}
