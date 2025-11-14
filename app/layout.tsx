import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mariyamvilla.com'),
  title: 'Mariyam Villa - Luxury Beachfront Property | Book Your Escape',
  description: 'Experience luxury at Mariyam Villa - a stunning beachfront property with 5-star amenities, private beach access, infinity pool, and world-class concierge service. Perfect for family holidays and romantic getaways.',
  keywords: 'Mariyam Villa, luxury villa rental, beachfront property, vacation rental, beach house, luxury accommodation',
  authors: [{ name: 'Mariyam Villa' }],
  openGraph: {
    title: 'Mariyam Villa - Luxury Beachfront Property',
    description: 'Discover the ultimate luxury beachfront experience at Mariyam Villa. Stunning views, premium amenities, and unforgettable moments await.',
    type: 'website',
    url: 'https://mariyamvilla.com',
    siteName: 'Mariyam Villa',
    images: [
      {
        url: '/mariyam-villa-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Mariyam Villa Beachfront View',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mariyam Villa - Luxury Beachfront Property',
    description: 'Experience luxury at Mariyam Villa with private beach access and world-class amenities.',
    images: ['/mariyam-villa-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  icons: {
    icon: '/villa-icon.svg',
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <head>
        <meta name="theme-color" content="#b8860b" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
