import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet Landing Page',
  description: 'Group chat for everyone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
