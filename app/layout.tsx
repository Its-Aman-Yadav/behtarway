import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Behtar-Way',
  description: '',
  generator: '',
  icons: {
    icon: '/images/behtar-way-logo.png',          // this one shows up in browser tabs
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
