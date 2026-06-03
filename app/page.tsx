'use client'

import Link from 'next/link'
import { CheckCircle2, Code2, Zap, Shield, Bell, ArrowRight } from 'lucide-react'

export default function Home() {
  const appUrl = 'https://app.getflarely.dev'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Flarely
          </div>
          <div className="flex gap-6 items-center">
            <a href="#features" className="hover:text-red-400 transition">Features</a>
            <a href="#pricing" className="hover:text-red-400 transition">Pricing</a>
            <a href="https://github.com/flarely/flarely" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">GitHub</a>
            <a href={`${appUrl}/auth/github`} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition">
              Sign In
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Error Notifications<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Made Simple
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Webhook-based error and event notifications. Send errors from anywhere, route to Slack, Discord, Telegram, Email, or webhooks. Self-hosted open source or managed cloud.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`${appUrl}/auth/github`}
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition"
            >
              Get Started Free <ArrowRight size={20} />
            </a>
            <a
              href="https://github.com/flarely/flarely"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 hover:border-slate-500 px-8 py-3 rounded-lg font-semibold transition"
            >
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-orange-500" size={32} />,
                title: 'Fast & Simple API',
                desc: 'Send errors in 2 lines of code. Generate API keys in seconds.'
              },
              {
                icon: <Bell className="text-red-500" size={32} />,
                title: '5 Destinations',
                desc: 'Route to Slack, Discord, Telegram, Email, or custom webhooks.'
              },
              {
                icon: <Code2 className="text-blue-500" size={32} />,
                title: 'Deduplication',
                desc: 'Configurable duplicate detection per project. Stop notification spam.'
              },
              {
                icon: <Shield className="text-green-500" size={32} />,
                title: 'Open Source',
                desc: 'Full source on GitHub. Deploy privately. No vendor lock-in.'
              },
              {
                icon: <CheckCircle2 className="text-purple-500" size={32} />,
                title: 'Flexible Rate Limits',
                desc: '100 req/min per API key. Free tier: 500 events/month.'
              },
              {
                icon: <Zap className="text-yellow-500" size={32} />,
                title: 'Real-Time Dashboard',
                desc: 'View events, track stats, manage projects and integrations.'
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 border border-slate-700 rounded-lg hover:border-red-500 transition bg-slate-900/50">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Simple Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Tier */}
            <div className="p-8 border border-slate-700 rounded-lg bg-slate-900/50">
              <h3 className="text-2xl font-bold mb-2">Self-Hosted</h3>
              <p className="text-4xl font-bold text-red-500 mb-6">Free</p>
              <p className="text-slate-400 mb-6">Deploy anywhere. Fully open source.</p>
              <ul className="space-y-4 mb-8">
                {['Unlimited events', 'All 5 destinations', 'Deduplication', 'Open source (AGPL)', 'Self-hosted'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://github.com/flarely/flarely"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-slate-600 hover:border-slate-500 py-3 rounded-lg text-center font-semibold transition"
              >
                Deploy Now
              </a>
            </div>

            {/* Pro Tier */}
            <div className="p-8 border border-red-500 rounded-lg bg-red-500/10 ring-2 ring-red-500/50">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold">Cloud Pro</h3>
                <span className="bg-red-500 px-3 py-1 rounded-full text-sm font-semibold">Popular</span>
              </div>
              <p className="text-4xl font-bold mb-2">$5<span className="text-lg text-slate-400">/month</span></p>
              <p className="text-slate-400 mb-6">Managed. No setup. Pay as you go.</p>
              <ul className="space-y-4 mb-8">
                {['Unlimited events', 'All 5 destinations', 'Deduplication', 'Real-time dashboard', 'Premium support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={`${appUrl}/auth/github`}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 py-3 rounded-lg text-center font-semibold transition"
              >
                Sign Up Free
              </a>
            </div>
          </div>
          <p className="text-center text-slate-400 mt-8">
            Cloud Pro: 500 free events/month, then unlimited. No credit card required.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600/20 to-orange-600/20 border-t border-b border-slate-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to ship error notifications?</h2>
          <p className="text-slate-400 mb-8">Start free. Upgrade anytime. Cancel anytime.</p>
          <a
            href={`${appUrl}/auth/github`}
            className="inline-block bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition"
          >
            Get Started <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
          <div className="space-y-6">
            {[
              {
                q: "What's the difference between self-hosted and Cloud Pro?",
                a: "Self-hosted is free, open source, and you manage the infrastructure. Cloud Pro is $5/month — we handle everything, no setup required."
              },
              {
                q: "Can I send events from my own servers?",
                a: "Yes! Use the ingest API (POST /v1/ingest). Send JSON with event data, we route to your configured destinations."
              },
              {
                q: "Is there a free trial for Cloud Pro?",
                a: "Yes. Cloud Pro includes 500 free events/month. After that, unlimited events for $5/mo."
              },
              {
                q: "What if I need more help?",
                a: "GitHub issues and discussions are free. Cloud Pro includes priority support."
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-slate-700 pb-6">
                <h3 className="text-lg font-semibold mb-3 text-red-400">{item.q}</h3>
                <p className="text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8 text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-red-500 mb-4 md:mb-0">Flarely</div>
          <div className="flex gap-8">
            <a href="https://github.com/flarely/flarely" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
            <a href="https://github.com/flarely/flarely" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Docs</a>
            <a href={appUrl} className="hover:text-white transition">Dashboard</a>
          </div>
          <div className="text-sm mt-4 md:mt-0">© 2026 Flarely. Licensed under AGPL-3.0.</div>
        </div>
      </footer>
    </div>
  )
}
