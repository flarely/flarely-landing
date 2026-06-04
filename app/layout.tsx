import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flarely — Error & Event Notifications for Developers',
  description: 'Send real-time alerts from your app to Discord, Slack, or any webhook. Free tier, open source, self-hostable. No more missing critical errors.',
  metadataBase: new URL('https://getflarely.dev'),
  keywords: ['error notifications', 'discord alerts', 'slack notifications', 'webhook alerting', 'self-hosted monitoring', 'event notifications', 'developer tools'],
  authors: [{ name: 'Flarely' }],
  openGraph: {
    title: 'Flarely — Error & Event Notifications for Developers',
    description: 'Send real-time alerts from your app to Discord, Slack, or any webhook. Free tier included. Self-hostable open source.',
    url: 'https://getflarely.dev',
    siteName: 'Flarely',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Flarely — Error & Event Notifications',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flarely — Error & Event Notifications for Developers',
    description: 'Send real-time alerts from your app to Discord or Slack. Free tier, open source.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://getflarely.dev',
  },
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
