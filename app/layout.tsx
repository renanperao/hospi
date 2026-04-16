import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'HOSPI | Pare de responder mensagens de hóspede às 23h',
  description: 'Placa física com QR Code + IA com a sua voz. Seu hóspede escaneia e é atendido na hora — sem app, sem você precisar responder. Para Airbnbs, villas e casas de temporada.',
  keywords: [
    'automatizar airbnb',
    'concierge digital airbnb',
    'app para hóspedes airbnb',
    'QR Code imóvel temporada',
    'automação anfitrião airbnb',
    'responder hóspede automaticamente',
    'concierge IA aluguel temporada',
    'reduzir mensagens airbnb',
  ],
  authors: [{ name: 'HOSPI' }],
  alternates: {
    canonical: 'https://hospi.com.br',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://hospi.com.br',
    title: 'HOSPI | Pare de responder mensagens de hóspede às 23h',
    description: 'Placa física com QR Code + IA com a sua voz. Seu hóspede escaneia e é atendido na hora — sem app, sem você precisar responder.',
    siteName: 'HOSPI',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HOSPI — Concierge de IA para anfitriões de imóveis de temporada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOSPI | Pare de responder mensagens de hóspede às 23h',
    description: 'Placa física com QR Code + IA com a sua voz. Seu hóspede escaneia e é atendido na hora — sem app, sem você precisar responder.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f0e8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "HOSPI",
              "description": "Concierge físico + digital para anfitriões de imóveis de temporada. Placa com QR Code + IA com a voz do anfitrião.",
              "brand": { "@type": "Brand", "name": "HOSPI" },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Plano Essencial",
                  "price": "97.00",
                  "priceCurrency": "BRL",
                  "priceSpecification": {
                    "@type": "RecurringChargeSpecification",
                    "billingDuration": 1,
                    "billingIncrement": "P1M"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Plano Premium",
                  "price": "197.00",
                  "priceCurrency": "BRL",
                  "priceSpecification": {
                    "@type": "RecurringChargeSpecification",
                    "billingDuration": 1,
                    "billingIncrement": "P1M"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
