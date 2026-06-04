import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Docs — Flarely',
  description: 'Flarely documentation — API reference, quick start, destinations, and deduplication.',
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-slate-700">{title}</h2>
      {children}
    </section>
  )
}

function Code({ children, lang = '' }: { children: string; lang?: string }) {
  return (
    <pre className="bg-slate-950 border border-slate-700 rounded-xl p-5 overflow-x-auto text-sm text-slate-300 font-mono leading-relaxed">
      <code>{children.trim()}</code>
    </pre>
  )
}

function Table({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-700">
      <table className="w-full text-sm">
        <thead className="bg-slate-800">
          <tr>
            {headers.map((h) => (
              <th key={h} className="text-left px-4 py-3 text-slate-300 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-slate-700 hover:bg-slate-800/40 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-slate-400">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Badge({ children, color = 'slate' }: { children: string; color?: string }) {
  const colors: Record<string, string> = {
    green: 'bg-green-500/10 text-green-400 border-green-500/20',
    red: 'bg-red-500/10 text-red-400 border-red-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    slate: 'bg-slate-700 text-slate-300 border-slate-600',
  }
  return (
    <span className={`inline-block border rounded px-2 py-0.5 text-xs font-mono ${colors[color] ?? colors.slate}`}>
      {children}
    </span>
  )
}

const navItems = [
  { id: 'quickstart', label: 'Quick Start' },
  { id: 'api', label: 'API Reference' },
  { id: 'destinations', label: 'Destinations' },
  { id: 'deduplication', label: 'Deduplication' },
  { id: 'examples', label: 'Code Examples' },
  { id: 'selfhosting', label: 'Self-hosting' },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

      {/* Top nav */}
      <nav className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Flarely</span>
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-300 font-medium">Docs</span>
          </div>
          <a
            href="https://app.getflarely.dev/login"
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 px-4 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition"
          >
            Get Started <ArrowRight size={14} />
          </a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex gap-12">

        {/* Sidebar */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-slate-700">
              <a
                href="https://github.com/flarely/flarely"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-lg text-sm text-slate-500 hover:text-white hover:bg-slate-800 transition-colors"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">

          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-slate-400 text-lg">
              Everything you need to send notifications from your app to Discord, Slack, and more.
            </p>
          </div>

          {/* Quick Start */}
          <Section id="quickstart" title="Quick Start">
            <p className="text-slate-400 mb-6">Get your first alert delivered in under 2 minutes.</p>

            <div className="space-y-6">
              <div>
                <p className="text-slate-300 font-semibold mb-3">1. Create an account</p>
                <p className="text-slate-400 mb-3">
                  Sign up at <a href="https://app.getflarely.dev/login" className="text-orange-400 hover:text-orange-300">app.getflarely.dev</a> with GitHub. Free tier includes 500 events/month — no credit card required.
                </p>
              </div>

              <div>
                <p className="text-slate-300 font-semibold mb-3">2. Create a project and add a destination</p>
                <p className="text-slate-400 mb-3">
                  In the dashboard, click <strong className="text-slate-300">New Project</strong>, give it a name, paste your Discord or Slack webhook URL, and save.
                </p>
              </div>

              <div>
                <p className="text-slate-300 font-semibold mb-3">3. Send your first event</p>
                <Code lang="bash">{`curl -X POST https://app.getflarely.dev/v1/ingest \\
  -H "Authorization: Bearer sk_live_your_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Payment failed",
    "message": "Stripe charge declined: insufficient funds",
    "level": "error",
    "source": "billing-service"
  }'`}</Code>
                <p className="text-slate-500 text-sm mt-3">You should see the alert in your Discord or Slack channel within seconds.</p>
              </div>
            </div>
          </Section>

          {/* API Reference */}
          <Section id="api" title="API Reference">

            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Badge color="green">POST</Badge>
                <code className="text-slate-300 font-mono text-sm">/v1/ingest</code>
              </div>
              <p className="text-slate-400 mb-6">Send an event. Returns immediately — delivery is asynchronous via a background queue.</p>

              <p className="text-slate-300 font-semibold mb-3">Request body</p>
              <Table
                headers={['Field', 'Type', 'Required', 'Description']}
                rows={[
                  ['title', <code className="text-orange-400 font-mono text-xs">string</code>, '✅', 'Short alert title (max 255 chars)'],
                  ['level', <code className="text-orange-400 font-mono text-xs">info | warn | error | critical</code>, '✅', 'Severity level'],
                  ['source', <code className="text-orange-400 font-mono text-xs">string</code>, '✅', 'Service or component name (max 100 chars)'],
                  ['message', <code className="text-orange-400 font-mono text-xs">string</code>, 'No', 'Detail, stack trace, or context (max 5000 chars)'],
                  ['fingerprint', <code className="text-orange-400 font-mono text-xs">string</code>, 'No', 'Custom dedup key. Auto-generated if omitted'],
                ]}
              />

              <p className="text-slate-300 font-semibold mt-6 mb-3">Responses</p>
              <Table
                headers={['Status', 'Meaning']}
                rows={[
                  [<Badge color="green">202</Badge>, 'Queued — event accepted and queued for delivery'],
                  [<Badge>200</Badge>, 'Suppressed — duplicate within the dedup window, not delivered'],
                  [<Badge color="red">400</Badge>, 'Invalid request body'],
                  [<Badge color="red">401</Badge>, 'Missing or invalid API key'],
                  [<Badge color="red">429</Badge>, 'Rate limited — 100 req/min per API key'],
                ]}
              />
            </div>

            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Badge color="orange">GET</Badge>
                <code className="text-slate-300 font-mono text-sm">/v1/events</code>
              </div>
              <p className="text-slate-400 mb-6">Query event history for the project associated with your API key.</p>

              <p className="text-slate-300 font-semibold mb-3">Query parameters</p>
              <Table
                headers={['Param', 'Type', 'Default', 'Description']}
                rows={[
                  ['status', <code className="text-orange-400 font-mono text-xs">queued | delivered | suppressed | failed</code>, '—', 'Filter by delivery status'],
                  ['level', <code className="text-orange-400 font-mono text-xs">info | warn | error | critical</code>, '—', 'Filter by severity'],
                  ['limit', <code className="text-orange-400 font-mono text-xs">number</code>, '50', 'Results per page (max 100)'],
                  ['offset', <code className="text-orange-400 font-mono text-xs">number</code>, '0', 'Pagination offset'],
                ]}
              />

              <Code lang="bash">{`# All recent events
curl https://app.getflarely.dev/v1/events \\
  -H "Authorization: Bearer sk_live_your_key_here"

# Only failed deliveries
curl "https://app.getflarely.dev/v1/events?status=failed&limit=10" \\
  -H "Authorization: Bearer sk_live_your_key_here"`}</Code>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge color="orange">GET</Badge>
                <code className="text-slate-300 font-mono text-sm">/health</code>
              </div>
              <p className="text-slate-400 mb-4">Health check — returns <code className="text-orange-400 font-mono text-xs">200</code> when healthy, <code className="text-orange-400 font-mono text-xs">503</code> when degraded. No auth required.</p>
              <Code lang="json">{`{
  "status": "ok",
  "checks": { "db": "ok", "redis": "ok" },
  "timestamp": "2026-01-01T00:00:00.000Z"
}`}</Code>
            </div>
          </Section>

          {/* Destinations */}
          <Section id="destinations" title="Destinations">
            <p className="text-slate-400 mb-6">Each project routes to exactly one destination. Configure it when creating a project in the dashboard.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  name: 'Discord',
                  icon: '💬',
                  config: 'Webhook URL',
                  how: 'Server Settings → Integrations → Webhooks → New Webhook → Copy Webhook URL',
                },
                {
                  name: 'Slack',
                  icon: '💼',
                  config: 'Incoming Webhook URL',
                  how: 'api.slack.com/apps → Create App → Incoming Webhooks → Activate → Add to workspace',
                },
                {
                  name: 'Email',
                  icon: '✉️',
                  config: 'Resend API key + to + from address',
                  how: 'Self-hosted only. Requires a Resend account and RESEND_API_KEY env var.',
                },
                {
                  name: 'Telegram',
                  icon: '✈️',
                  config: 'Bot token + Chat ID',
                  how: 'Create a bot via @BotFather, get the token, and find your chat ID.',
                },
                {
                  name: 'Webhook',
                  icon: '🔗',
                  config: 'Any HTTPS URL',
                  how: 'Posts a structured JSON payload to any URL you provide.',
                },
              ].map((d) => (
                <div key={d.name} className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{d.icon}</span>
                    <span className="font-semibold text-white">{d.name}</span>
                  </div>
                  <p className="text-xs text-orange-400 font-mono mb-2">{d.config}</p>
                  <p className="text-slate-400 text-sm">{d.how}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Deduplication */}
          <Section id="deduplication" title="Deduplication">
            <p className="text-slate-400 mb-6">
              Flarely suppresses repeated alerts within a configurable time window so you don't get spammed when an error fires hundreds of times.
            </p>

            <div className="space-y-6">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                <p className="font-semibold text-white mb-2">Auto-fingerprint</p>
                <p className="text-slate-400 text-sm">
                  If you don't pass a <code className="text-orange-400 font-mono text-xs">fingerprint</code>, one is generated from{' '}
                  <code className="text-orange-400 font-mono text-xs">projectId + title + source + level</code>.
                  The <code className="text-orange-400 font-mono text-xs">message</code> field is intentionally excluded — so the same error with a slightly different stack trace still deduplicates.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                <p className="font-semibold text-white mb-2">Custom fingerprint</p>
                <p className="text-slate-400 text-sm mb-3">
                  Pass your own <code className="text-orange-400 font-mono text-xs">fingerprint</code> to control exactly what counts as a duplicate — useful for per-user or per-resource deduplication.
                </p>
                <Code lang="json">{`{
  "title": "Payment failed",
  "level": "error",
  "source": "billing",
  "fingerprint": "payment-fail-user-42"
}`}</Code>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                <p className="font-semibold text-white mb-2">Window behaviour</p>
                <p className="text-slate-400 text-sm">
                  The default dedup window is <strong className="text-slate-300">10 minutes</strong>. The window resets after it expires — so if the same error fires again 15 minutes later, it will be delivered again. Configure the window per project in the dashboard.
                </p>
              </div>
            </div>
          </Section>

          {/* Code Examples */}
          <Section id="examples" title="Code Examples">

            <div className="space-y-8">
              <div>
                <p className="text-slate-300 font-semibold mb-3">curl</p>
                <Code lang="bash">{`curl -X POST https://app.getflarely.dev/v1/ingest \\
  -H "Authorization: Bearer sk_live_your_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Payment failed",
    "message": "Stripe charge declined: insufficient funds",
    "level": "error",
    "source": "billing-service",
    "fingerprint": "payment-fail-user-42"
  }'`}</Code>
              </div>

              <div>
                <p className="text-slate-300 font-semibold mb-3">JavaScript / TypeScript</p>
                <Code lang="ts">{`await fetch("https://app.getflarely.dev/v1/ingest", {
  method: "POST",
  headers: {
    "Authorization": "Bearer sk_live_your_key_here",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Payment failed",
    message: error.message,
    level: "error",
    source: "billing-service",
    fingerprint: \`payment-fail-\${userId}\`,
  }),
});`}</Code>
              </div>

              <div>
                <p className="text-slate-300 font-semibold mb-3">Python</p>
                <Code lang="python">{`import requests

requests.post(
  "https://app.getflarely.dev/v1/ingest",
  headers={"Authorization": "Bearer sk_live_your_key_here"},
  json={
    "title": "Payment failed",
    "message": str(e),
    "level": "error",
    "source": "billing-service",
  }
)`}</Code>
              </div>

              <div>
                <p className="text-slate-300 font-semibold mb-3">Go</p>
                <Code lang="go">{`payload := map[string]string{
  "title":  "Payment failed",
  "level":  "error",
  "source": "billing-service",
  "message": err.Error(),
}
body, _ := json.Marshal(payload)

req, _ := http.NewRequest("POST", "https://app.getflarely.dev/v1/ingest", bytes.NewBuffer(body))
req.Header.Set("Authorization", "Bearer sk_live_your_key_here")
req.Header.Set("Content-Type", "application/json")
http.DefaultClient.Do(req)`}</Code>
              </div>
            </div>
          </Section>

          {/* Self-hosting */}
          <Section id="selfhosting" title="Self-hosting">
            <p className="text-slate-400 mb-6">
              Flarely is fully open source (AGPL-3.0). Self-host on any server with Node.js 20+ and Redis.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-slate-300 font-semibold mb-3">Requirements</p>
                <ul className="text-slate-400 text-sm space-y-1 list-disc list-inside">
                  <li>Node.js 20+</li>
                  <li>Redis (local, Docker, or <a href="https://upstash.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Upstash</a> free tier)</li>
                </ul>
              </div>

              <div>
                <p className="text-slate-300 font-semibold mb-3">Install</p>
                <Code lang="bash">{`git clone https://github.com/flarely/flarely.git
cd flarely
npm install
cp .env.example .env
# Edit .env with your Redis URL and other settings
npm run setup    # interactive wizard — creates project + API key
npm run build && npm start`}</Code>
              </div>

              <div>
                <p className="text-slate-300 font-semibold mb-3">Environment variables</p>
                <Table
                  headers={['Variable', 'Required', 'Default', 'Description']}
                  rows={[
                    ['PORT', 'No', '3000', 'HTTP server port'],
                    ['DATABASE_PATH', 'No', './data/flarely.db', 'SQLite file path'],
                    ['REDIS_URL', 'No', 'redis://localhost:6379', 'Redis connection URL'],
                    ['RESEND_API_KEY', 'Email only', '—', 'Resend API key for email delivery'],
                    ['DEFAULT_DEDUP_WINDOW', 'No', '600', 'Default dedup window in seconds'],
                    ['BULLBOARD_USER', 'No', '—', 'Username for queue dashboard'],
                    ['BULLBOARD_PASS', 'No', '—', 'Password for queue dashboard'],
                  ]}
                />
              </div>

              <div>
                <p className="text-slate-300 font-semibold mb-3">Deploy to Fly.io</p>
                <Code lang="bash">{`cp fly.toml.example fly.toml
fly apps create <your-app-name>
fly volumes create flarely_data --size 1 --app <your-app-name>

fly secrets set \\
  REDIS_URL=<your-redis-url> \\
  BULLBOARD_USER=admin \\
  BULLBOARD_PASS=<strong-password>

fly deploy

# First-time setup
fly ssh console -C "node dist/cli/setup.js"`}</Code>
              </div>
            </div>

            <div className="mt-8 p-5 bg-orange-500/5 border border-orange-500/20 rounded-xl">
              <p className="text-orange-400 font-semibold mb-1">Prefer managed?</p>
              <p className="text-slate-400 text-sm">
                Skip the ops overhead.{' '}
                <a href="https://app.getflarely.dev/login" className="text-orange-400 hover:text-orange-300 underline">
                  Flarely Cloud
                </a>{' '}
                is free for 500 events/month and $5/mo for unlimited.
              </p>
            </div>
          </Section>

        </main>
      </div>
    </div>
  )
}
