'use client'

import Link from 'next/link'
import { CheckCircle2, Code2, Zap, Shield, Bell, ArrowRight, MousePointerClick, CreditCard, Clock, GitCommit } from 'lucide-react'

function trackClick(label: string) {
  fetch('https://app.getflarely.dev/v1/ingest', {
    method: 'POST',
    keepalive: true,
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_FLARELY_API_KEY ?? ''}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: `Landing: ${label}`,
      message: `Someone clicked "${label}" on getflarely.dev`,
      level: 'info',
      source: 'flarely-landing',
      fingerprint: `click-${label}-${Math.floor(Date.now() / 60000)}`,
    }),
  }).catch(() => {})
}

export default function Home() {
  const appUrl = 'https://app.getflarely.dev'
  const signUpUrl = `${appUrl}/login`

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="navFlame" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f97316"/>
                  <stop offset="100%" stopColor="#dc2626"/>
                </linearGradient>
              </defs>
              <path d="M16 2C16 2 26 10 26 18C26 23.523 21.523 28 16 28C10.477 28 6 23.523 6 18C6 10 16 2 16 2Z" fill="url(#navFlame)" opacity="0.25"/>
              <path d="M16 8C16 8 22 13 22 18C22 21.314 19.314 24 16 24C12.686 24 10 21.314 10 18C10 13 16 8 16 8Z" fill="url(#navFlame)" opacity="0.6"/>
              <path d="M16 14C16 14 19 17 19 19.5C19 21.433 17.657 23 16 23C14.343 23 13 21.433 13 19.5C13 17 16 14 16 14Z" fill="url(#navFlame)"/>
            </svg>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Flarely
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#usecases" className="hover:text-red-400 transition">Use cases</a>
            <a href="#pricing" className="hover:text-red-400 transition">Pricing</a>
            <Link href="/docs" className="hover:text-red-400 transition">Docs</Link>
            <a href={signUpUrl} onClick={() => trackClick('Nav: Sign In')} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition">
              Sign In
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Know when anything<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              important happens
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            One HTTP endpoint. Send any event — an error, a signup, a payment, a button click — straight to Slack, Discord, Telegram, or email. No SDK. No setup. Just a curl.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={signUpUrl}
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition"
              onClick={() => trackClick('Hero: Start free')}
            >
              Start free — no credit card <ArrowRight size={20} />
            </a>
            <a
              href="https://github.com/flarely/flarely"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-500 hover:border-white hover:text-white px-8 py-3 rounded-lg font-semibold transition text-slate-300"
              onClick={() => trackClick('Hero: Star on GitHub')}
            >
              Star on GitHub
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            500 events/month free on the cloud · or self-host unlimited, free forever
          </p>

          {/* Code snippet */}
          <div className="mt-12 max-w-xl mx-auto text-left">
            <div className="bg-slate-950 border border-slate-700 rounded-xl p-5 font-mono text-sm">
              <p className="text-slate-500 text-xs mb-3 font-sans">Any event. Any language. Delivered in seconds.</p>
              <p className="text-slate-300"><span className="text-blue-400">curl</span> -X POST https://app.getflarely.dev/v1/ingest \</p>
              <p className="text-slate-300 pl-4"><span className="text-slate-500">-H </span><span className="text-green-400">"Authorization: Bearer sk_live_..."</span> \</p>
              <p className="text-slate-300 pl-4"><span className="text-slate-500">-d </span><span className="text-yellow-400">{'\'{"title":"New signup","level":"info","source":"my-app"}\''}</span></p>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="rounded-xl border border-slate-700 bg-slate-950 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <div className="ml-3 flex-1 max-w-xs text-xs text-slate-500 bg-slate-800 rounded px-3 py-1 text-left">
                  app.getflarely.dev/dashboard
                </div>
              </div>
              <div className="p-6 text-left">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold">Projects</h3>
                    <p className="text-xs text-slate-500">Each project has its own destination and API keys</p>
                  </div>
                  <span className="bg-red-600 text-white text-sm px-3 py-1.5 rounded-lg">+ New project</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[['Total Projects', '4'], ['Total Events', '3,847'], ['Active Destinations', '🔔']].map(([label, val]) => (
                    <div key={label} className="border border-slate-800 rounded-lg p-4 bg-slate-900/50">
                      <p className="text-xs text-slate-500 mb-1">{label}</p>
                      <p className="text-2xl font-bold">{val}</p>
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-4 gap-3">
                  {[
                    { name: 'Payments API', dest: 'Slack', color: 'from-purple-500/10 border-purple-500/20', events: '1,842' },
                    { name: 'Cron Jobs', dest: 'Discord', color: 'from-indigo-500/10 border-indigo-500/20', events: '901' },
                    { name: 'Landing Page', dest: 'Discord', color: 'from-orange-500/10 border-orange-500/20', events: '699' },
                    { name: 'User Signups', dest: 'Telegram', color: 'from-sky-500/10 border-sky-500/20', events: '405' },
                  ].map((p) => (
                    <div key={p.name} className={`bg-gradient-to-br ${p.color} border rounded-xl p-4`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xl">🔔</span>
                        <span className="text-[10px] text-slate-500 border border-slate-700 rounded px-1.5 py-0.5">Jun 2026</span>
                      </div>
                      <p className="font-semibold text-sm">{p.name}</p>
                      <p className="text-xs text-slate-500 mb-3">{p.dest}</p>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 border-t border-slate-800 pt-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                        {p.events} events
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="usecases" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Any event worth knowing about</h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Flarely isn&apos;t just for errors. If it matters, send it.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <CreditCard className="text-red-400" size={28} />,
                title: 'Payment failed',
                desc: 'Know the instant a charge fails — before your customer does.',
                code: '{"title":"Payment failed","level":"error"}',
              },
              {
                icon: <Bell className="text-green-400" size={28} />,
                title: 'New user signed up',
                desc: 'A ping every time someone joins. Stay close to growth.',
                code: '{"title":"New signup: jane@co.com","level":"info"}',
              },
              {
                icon: <Clock className="text-yellow-400" size={28} />,
                title: 'Cron job failed',
                desc: 'Silent cron failures are the worst bugs. Not anymore.',
                code: '{"title":"Daily backup failed","level":"critical"}',
              },
              {
                icon: <MousePointerClick className="text-orange-400" size={28} />,
                title: 'Landing page clicks',
                desc: (
                  <span>
                    This page uses Flarely to track every CTA click in real time.{' '}
                    <span className="text-orange-400 font-medium">Yes, really.</span>
                  </span>
                ),
                code: '{"title":"Hero: Start free clicked","level":"info"}',
                highlight: true,
              },
              {
                icon: <GitCommit className="text-blue-400" size={28} />,
                title: 'Deploy completed',
                desc: 'Confirm every production deploy landed — or didn\'t.',
                code: '{"title":"Deployed v2.4.1 to prod","level":"info"}',
              },
              {
                icon: <Zap className="text-purple-400" size={28} />,
                title: 'Threshold crossed',
                desc: 'CPU spike, queue depth, API quota — alert on any metric.',
                code: '{"title":"Queue depth > 1000","level":"warn"}',
              },
            ].map((uc, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl border bg-slate-900/50 flex flex-col gap-3 ${uc.highlight ? 'border-orange-500/50 bg-orange-500/5 ring-1 ring-orange-500/20' : 'border-slate-700'}`}
              >
                <div className="flex items-center gap-3">
                  {uc.icon}
                  <h3 className="font-semibold text-lg">{uc.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{uc.desc}</p>
                <div className="mt-auto pt-3 border-t border-slate-800">
                  <code className="text-xs text-slate-500 font-mono">{uc.code}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Built for simplicity</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-orange-500" size={32} />,
                title: 'One HTTP endpoint',
                desc: 'POST JSON to /v1/ingest. Works from any language, any stack, any CI script.'
              },
              {
                icon: <Bell className="text-red-500" size={32} />,
                title: '5 Destinations',
                desc: 'Route to Slack, Discord, Telegram, Email, or any custom webhook.'
              },
              {
                icon: <Code2 className="text-blue-500" size={32} />,
                title: 'Deduplication',
                desc: 'Configurable dedup window per project. One alert per issue, not one per request.'
              },
              {
                icon: <Shield className="text-green-500" size={32} />,
                title: 'Open Source',
                desc: 'Full source on GitHub. Self-host for free, no vendor lock-in, ever.'
              },
              {
                icon: <CheckCircle2 className="text-purple-500" size={32} />,
                title: 'Multiple projects',
                desc: 'Separate API keys per project. Route payments to Slack, deploys to Discord.'
              },
              {
                icon: <Zap className="text-yellow-500" size={32} />,
                title: 'Event dashboard',
                desc: 'Browse event history, see stats, manage projects and keys — all in one place.'
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

      {/* Why Flarely */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Why not just use…?</h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Flarely is the boring, reliable middle ground between heavyweight platforms and hand-rolled webhook scripts.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'A full observability platform',
                body: 'Powerful, but heavy: an SDK per language, agents, dashboards, and a bill that scales with volume. Overkill when you just want a ping when something happens.',
              },
              {
                title: 'A raw Discord/Slack webhook',
                body: 'Free, but you re-build the same plumbing every time — dedup so you\'re not spammed, multiple destinations, retries, rate limits. Flarely is that plumbing, done once.',
              },
              {
                title: 'Flarely',
                body: 'One HTTP endpoint, any language. Built-in deduplication, 5 destinations, and a dashboard. Free to start, $5/mo managed, or self-host for free.',
                highlight: true,
              },
            ].map((c, i) => (
              <div
                key={i}
                className={`p-6 rounded-lg border ${c.highlight ? 'border-red-500 bg-red-500/10 ring-2 ring-red-500/40' : 'border-slate-700 bg-slate-900/50'}`}
              >
                <h3 className={`text-lg font-semibold mb-3 ${c.highlight ? 'text-red-400' : 'text-slate-200'}`}>{c.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.body}</p>
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
            <div className="p-8 border border-red-500 rounded-lg bg-red-500/10 ring-2 ring-red-500/50 flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most popular
              </span>
              <h3 className="text-2xl font-bold mb-2">Cloud</h3>
              <p className="text-4xl font-bold mb-2">
                Free<span className="text-lg text-slate-400 font-normal"> to start</span>
              </p>
              <p className="text-slate-400 mb-6">Managed. No setup. No credit card.</p>
              <ul className="space-y-4 mb-8 flex-1">
                {['500 events/month free', 'All 5 destinations', 'Deduplication', 'Event dashboard', 'Unlimited events on Pro — $5/mo', 'Cancel anytime'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={signUpUrl}
                className="block w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 py-3 px-6 rounded-lg text-center font-semibold transition mt-auto"
                onClick={() => trackClick('Pricing: Start free cloud')}
              >
                Start free — no credit card
              </a>
            </div>

            <div className="p-8 border border-slate-700 rounded-lg bg-slate-900/50 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Self-Hosted</h3>
              <p className="text-4xl font-bold text-slate-200 mb-2">
                Free<span className="text-lg text-slate-400 font-normal"> forever</span>
              </p>
              <p className="text-slate-400 mb-6">Own your infra. Fully open source.</p>
              <ul className="space-y-4 mb-8 flex-1">
                {['Unlimited events', 'All 5 destinations', 'Deduplication', 'Open source (AGPL)', 'Deploy anywhere'].map((item, i) => (
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
                className="block w-full border border-slate-500 hover:border-white hover:text-white py-3 px-6 rounded-lg text-center font-semibold transition text-slate-300 mt-auto"
                onClick={() => trackClick('Pricing: Deploy Now self-host')}
              >
                Deploy Now
              </a>
            </div>
          </div>
          <p className="text-center text-slate-400 mt-8">
            Don&apos;t want to manage servers? Start free on the cloud · 500 events/month, no card required
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600/20 to-orange-600/20 border-t border-b border-slate-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stop finding out too late.</h2>
          <p className="text-slate-400 mb-8">Start free. Upgrade anytime. Cancel anytime.</p>
          <a
            href={signUpUrl}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-8 py-3 rounded-lg font-semibold transition"
            onClick={() => trackClick('CTA: Get Started')}
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
                q: "Is this only for errors?",
                a: "Not at all. Flarely works for any discrete event worth knowing about — errors, signups, payments, deploys, cron jobs, form submissions, button clicks. If it matters, send it."
              },
              {
                q: "What's the difference between self-hosted and Cloud?",
                a: "Self-hosted is free, open source, and you manage the infrastructure. Cloud is managed — 500 events/month free, unlimited on Pro at $5/month. No setup required."
              },
              {
                q: "How do I send an event?",
                a: "POST JSON to /v1/ingest with your API key. Works from any language, any CI script, any shell. No SDK needed."
              },
              {
                q: "What if I get spammed with duplicate alerts?",
                a: "Each project has a configurable deduplication window. Set it to 10 minutes and you'll get one alert per issue per 10 minutes, no matter how many times the event fires."
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
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="footerFlame" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f97316"/>
                  <stop offset="100%" stopColor="#dc2626"/>
                </linearGradient>
              </defs>
              <path d="M16 2C16 2 26 10 26 18C26 23.523 21.523 28 16 28C10.477 28 6 23.523 6 18C6 10 16 2 16 2Z" fill="url(#footerFlame)" opacity="0.25"/>
              <path d="M16 8C16 8 22 13 22 18C22 21.314 19.314 24 16 24C12.686 24 10 21.314 10 18C10 13 16 8 16 8Z" fill="url(#footerFlame)" opacity="0.6"/>
              <path d="M16 14C16 14 19 17 19 19.5C19 21.433 17.657 23 16 23C14.343 23 13 21.433 13 19.5C13 17 16 14 16 14Z" fill="url(#footerFlame)"/>
            </svg>
            <span className="text-xl font-bold text-red-500">Flarely</span>
          </div>
          <div className="flex gap-8">
            <a href="https://github.com/flarely/flarely" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
            <Link href="/docs" className="hover:text-white transition">Docs</Link>
            <a href={appUrl} className="hover:text-white transition">Dashboard</a>
          </div>
          <div className="text-sm mt-4 md:mt-0">© 2026 Flarely. Licensed under AGPL-3.0.</div>
        </div>
      </footer>
    </div>
  )
}
