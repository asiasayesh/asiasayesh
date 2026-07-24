import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'AsiaSayesh | Premium Industrial Abrasive Products & Solutions',
  description: 'AsiaSayesh provides premium industrial abrasive products including grinding wheels, sandpaper, and polishing compounds. Professional-grade solutions for manufacturing and industrial applications.',
  keywords: ['abrasive products', 'grinding wheels', 'sandpaper', 'polishing compounds', 'industrial abrasives', 'surface finishing', 'industrial supplies'],
  metadataBase: new URL('https://www.asiasayesh.com'),
  alternates: {
    languages: {
      en: 'https://www.asiasayesh.com',
      fa: 'https://www.asiasayesh.com/fa',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.asiasayesh.com',
    title: 'AsiaSayesh | Premium Industrial Abrasive Products',
    description: 'Professional-grade abrasive solutions for industrial applications. Grinding wheels, sandpaper, and polishing compounds.',
    images: [
      {
        url: '/hero-abrasives.png',
        width: 1200,
        height: 630,
        alt: 'AsiaSayesh Industrial Abrasive Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AsiaSayesh | Premium Industrial Abrasive Products',
    description: 'Professional-grade abrasive solutions for industrial manufacturing.',
    images: ['/hero-abrasives.png'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      {
        url: '/icon-light-32x32.png',
        type: 'image/png',
        sizes: '32x32',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        type: 'image/png',
        sizes: '32x32',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1f1f1f' },
    { media: '(prefers-color-scheme: dark)', color: '#1f1f1f' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AsiaSayesh',
    url: 'https://www.asiasayesh.com',
    logo: 'https://www.asiasayesh.com/logo.png',
    description: 'Leading provider of industrial abrasive solutions.',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: '+1-800-555-0100',
      email: 'sales@asiasayesh.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IR',
    },
  }

  return (
    <html lang="en" className={`bg-background ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
