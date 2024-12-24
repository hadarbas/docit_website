import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DocIt',
  description: 'From Video to Tutorial in Seconds',
   icons: {
    icon: 'favicon.ico',
   },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>{children}</body>
    </html>
  )
}
