import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Flarely — Real-time event notifications for developers'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />

        {/* Glow */}
        <div style={{
          position: 'absolute',
          width: 500, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
        }} />

        {/* Flame icon */}
        <div style={{ fontSize: 80, marginBottom: 24 }}>🔥</div>

        {/* Title */}
        <div style={{
          fontSize: 72,
          fontWeight: 800,
          background: 'linear-gradient(90deg, #f97316, #dc2626)',
          backgroundClip: 'text',
          color: 'transparent',
          marginBottom: 16,
          letterSpacing: '-2px',
        }}>
          Flarely
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: 28,
          color: '#94a3b8',
          textAlign: 'center',
          maxWidth: 700,
          lineHeight: 1.4,
        }}>
          Know when anything important happens in your app
        </div>

        {/* Pills */}
        <div style={{ display: 'flex', gap: 16, marginTop: 40 }}>
          {['Discord', 'Slack', 'Any event', 'Free tier'].map((tag) => (
            <div key={tag} style={{
              background: 'rgba(249,115,22,0.1)',
              border: '1px solid rgba(249,115,22,0.3)',
              color: '#fb923c',
              borderRadius: 100,
              padding: '8px 20px',
              fontSize: 18,
              fontWeight: 600,
            }}>
              {tag}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div style={{ position: 'absolute', bottom: 40, color: '#475569', fontSize: 20 }}>
          getflarely.dev
        </div>
      </div>
    ),
    { ...size }
  )
}
