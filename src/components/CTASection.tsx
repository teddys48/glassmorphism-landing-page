import React, { useState } from 'react'
import { Sparkles, ArrowRight, CheckCircle2, Mail } from 'lucide-react'
import confetti from 'canvas-confetti'

export const CTASection: React.FC = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setSubmitted(true)
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#38bdf8', '#818cf8', '#c084fc', '#34d399', '#f472b6'],
    })
  }

  return (
    <section 
      className="py-24 px-4 sm:px-6 lg:px-8 relative z-10"
      aria-label="Join Lumina Glass Architecture"
    >
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl glass-surface-elevated p-8 sm:p-14 border-white/20 shadow-2xl overflow-hidden text-center">
          
          {/* Intense Prismatic Ambient Glow within Card */}
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-cyan-500/25 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-purple-500/25 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6 border-cyan-400/30">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-mono font-medium tracking-wide text-cyan-200 uppercase">
                Early Access Cohort
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Bring Extreme Glassmorphism to Your Interface
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Join visionary engineering teams creating tactile, spatial web experiences with production-grade performance.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl glass-card border-emerald-400/30 max-w-md mx-auto flex items-center justify-center gap-3 text-emerald-300 animate-in zoom-in-95 duration-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold">Access invite sent! Check your inbox shortly.</span>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
              >
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    aria-label="Work email address"
                    className="w-full pl-10 pr-4 py-3.5 rounded-2xl bg-black/40 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto glass-button-primary px-7 py-3.5 rounded-2xl text-sm font-semibold text-white whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span>Request Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <p className="mt-4 text-xs font-mono text-slate-400">
              Instant Bun + Vite starter repository included • No credit card required
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
