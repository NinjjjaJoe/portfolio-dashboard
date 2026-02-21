import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Web3 dApp Portfolio | NinjjjaBot',
  description: 'Bespoke Smart Contract Consulting - Production-ready Web3 applications for real-world problems',
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
