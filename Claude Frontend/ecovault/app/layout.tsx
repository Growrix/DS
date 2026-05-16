import type { Metadata, Viewport } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import '@/app/globals.css'
import {
  SITE_NAME, SITE_DESCRIPTION, SITE_URL, META_DEFAULTS
} from '@/constants'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} — Sustainable Waste Management Solutions`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'waste management', 'waste pickup', 'recycling services', 'junk removal',
    'commercial waste', 'residential waste', 'eco-friendly disposal', 'EcoHaul',
    'hazardous waste disposal', 'bulk removal',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Sustainable Waste Management Solutions`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Sustainable Waste Management`,
    description: SITE_DESCRIPTION,
    creator: '@ecovaultco',
  },
}

export const viewport: Viewport = {
  themeColor: META_DEFAULTS.themeColor,
  width: 'device-width',
  initialScale: 1,
}

// ─── Root Layout ─────────────────────────────────────────────────────────────

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
