import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const poppins = Poppins({ subsets: ['latin'], weight: ['600','700','800'], variable: '--font-poppins', display: 'swap' })

export const metadata: Metadata = {
  title: 'SolarTech Australia | Professional Solar & Electrical Services',
  description: 'Leading solar panel installation and electrical services across Australia. CEC accredited, 25-year warranties, save up to 80% on electricity bills.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://solar-electrical-au.example.com'),
  keywords: 'solar panels, solar installation, battery storage, electrical services, Australia, Brisbane',
  openGraph: { title: 'SolarTech Australia', description: 'Save up to 80% on electricity bills.', type: 'website', locale: 'en_AU' },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={inter.variable + ' ' + poppins.variable}>
      <body>{children}</body>
    </html>
  )
}