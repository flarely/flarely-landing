import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flarely — Webhook-based Error Notifications',
  description: 'Simple, powerful error and event notifications. Self-hosted open source or managed cloud.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
