import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Friends of the Bay Community Library',
    template: '%s | FBCL'
  },
  description: 'Supporting literacy and community engagement through the Bay Community Library. Join us in fostering a love for reading and learning.',
  keywords: ['library', 'community', 'literacy', 'reading', 'education', 'volunteer'],
  authors: [{ name: 'Friends of the Bay Community Library' }],
  creator: 'FBCL',
  publisher: 'Friends of the Bay Community Library',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fbcl.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Friends of the Bay Community Library',
    description: 'Supporting literacy and community engagement through the Bay Community Library.',
    url: 'https://fbcl.org',
    siteName: 'FBCL',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Friends of the Bay Community Library',
    description: 'Supporting literacy and community engagement through the Bay Community Library.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 