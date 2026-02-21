import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Web3 Portfolio | King Z',
  description: 'Bespoke Smart Contract Consulting & dApp Development',
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
