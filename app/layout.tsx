import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DocIt',
  description: 'Turn videos into tutorials in seconds',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'shortcut icon', url: '/favicon.ico' }
  ],
  openGraph: {
    title: 'DocIt',
    description: 'Turn videos into tutorials in seconds',
    url: 'https://getdocit.com',
    siteName: 'DocIt',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://getdocit.com/og-image.png', // Changed to absolute URL
      width: 1200,
      height: 630,
      alt: 'DocIt - Turn videos into tutorials in seconds'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocIt',
    description: 'Turn videos into tutorials in seconds',
    images: ['https://getdocit.com/og-image.png'] // Changed to absolute URL
  },
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.className}>
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="slack-app-id" content="A08ECKML9AP" />
      </head>
      <body>{children}</body>
    </html>
  )
}
