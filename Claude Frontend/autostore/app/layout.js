import './globals.css'

export const metadata = {
  title: 'AutoStore - The Best Automotive Shop',
  description: 'Over 120,000 automotive and truck parts. Find wheels, tires, oils, lights, and more.',
  keywords: 'automotive parts, auto store, wheels, tires, car parts, truck parts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Rajdhani:wght@500;600;700&family=Montserrat:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
