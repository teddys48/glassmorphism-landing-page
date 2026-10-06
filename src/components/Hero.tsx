import React, { useState } from 'react'
import { Sparkles, ArrowRight, Play, Pause, Activity, ShieldCheck, Cpu, Sliders } from 'lucide-react'

export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  return (
    <section 
      className="relative min-h-[100dvh] pt-24 pb-16 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Lumina Hero Section"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Focused Value Proposition (Anti-Slop Disciplined) */}
        <div className="lg:col-span-6 flex flex-col items-start z-10 text-left">
          
          {/* Eyebrow - Single allowed element */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6 border-cyan-400/30 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono font-medium tracking-wide text-cyan-200 uppercase">
              Optical Glass Component Architecture
            </span>
          </div>

          {/* Headline - Max 2 lines on desktop */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Extreme Glassmorphic Engineering for Web Apps
          </h1>

          {/* Subtext - Under 20 words strictly */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-[50ch] mb-8 font-normal">
            Build ultra-responsive spatial interfaces with GPU-accelerated specular caustics, multi-layer blurs, and full WCAG AA contrast compliance.
          </p>

          {/* CTAs - 1 Primary + 1 Secondary */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#lab"
              className="glass-button-primary px-7 py-3.5 rounded-2xl text-base font-semibold text-white flex items-center justify-center gap-2.5 shadow-xl group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 w-full sm:w-auto"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Explore Glass Lab</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#architecture"
              className="glass-button-secondary px-7 py-3.5 rounded-2xl text-base font-semibold text-slate-200 hover:text-white flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 w-full sm:w-auto"
            >
              <span>View Architecture</span>
            </a>
          </div>

          {/* System Spec Micro-Pills */}
          <div className="mt-8 flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Bun 1.3 Ready
            </span>
            <span>•</span>
            <span>Tailwind v4</span>
            <span>•</span>
            <span>Zero JS Overhead</span>
          </div>
        </div>

        {/* Right Column: Interactive Extreme Glass Canvas Showcase */}
        <div 
          className="lg:col-span-6 relative flex items-center justify-center perspective-[1200px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main 3D Floating Glass Stage Container */}
          <div 
            className="w-full max-w-lg transition-transform duration-300 ease-out relative"
            style={{
              transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Ambient Refraction Glow Behind Primary Glass */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />

            {/* Master Glass Panel */}
            <div className="glass-surface-elevated rounded-3xl p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border-white/20 relative overflow-hidden">
              
              {/* Specular Glare Diagonal Sheen */}
              <div className="absolute -top-24 -left-24 w-96 h-24 bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-45 pointer-events-none blur-sm" />

              {/* Window Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-300/40" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-300/40" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-300/40" />
                  <span className="ml-2 text-xs font-mono text-slate-300 font-medium">lumina-engine.glass</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-pill text-[11px] font-mono text-cyan-300">
                  <Cpu className="w-3 h-3 text-cyan-400" />
                  GPU Caustics
                </div>
              </div>

              {/* Nested Floating Glass Widgets */}
              <div className="space-y-4">
                
                {/* Widget 1: Interactive Audio Synthesizer */}
                <div className="glass-card rounded-2xl p-4 flex items-center justify-between border-white/15">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-10 h-10 rounded-xl glass-button-primary flex items-center justify-center text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                      aria-label={isPlaying ? "Pause ambient sound" : "Play ambient sound"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                    </button>
                    <div>
                      <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                        Prism Wave Harmonic
                      </div>
                      <div className="text-xs text-slate-400 font-mono">48kHz • 24-bit Spatial Blur</div>
                    </div>
                  </div>

                  {/* Equalizer Waveform Bars */}
                  <div className="flex items-end gap-1 h-7 px-2">
                    {[45, 80, 60, 95, 40, 75, 55, 90, 65, 50].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 rounded-full bg-gradient-to-t from-cyan-400 to-sky-200 transition-all duration-300"
                        style={{
                          height: isPlaying ? `${h}%` : '20%',
                          opacity: isPlaying ? 0.9 : 0.4,
                          animation: isPlaying ? `pulseGlow ${0.8 + (i % 3) * 0.4}s ease-in-out infinite` : 'none',
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Widget 2: Dual Telemetry Tiles */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="glass-card rounded-2xl p-3.5 border-white/10">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="font-mono">Blur Latency</span>
                      <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-bold font-mono text-white tracking-tight">
                      0.32<span className="text-xs text-cyan-400 font-normal ml-0.5">ms</span>
                    </div>
                    <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-mono">
                      <span>↑ 120 FPS Lock</span>
                    </div>
                  </div>

                  <div className="glass-card rounded-2xl p-3.5 border-white/10">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="font-mono">Optic Saturation</span>
                      <Sliders className="w-3.5 h-3.5 text-violet-400" />
                    </div>
                    <div className="text-2xl font-bold font-mono text-white tracking-tight">
                      190<span className="text-xs text-violet-300 font-normal ml-0.5">%</span>
                    </div>
                    <div className="text-[11px] text-violet-300 mt-1 font-mono">
                      Sub-pixel Specular
                    </div>
                  </div>
                </div>

                {/* Widget 3: Optical Contrast Status */}
                <div className="glass-card rounded-2xl p-3.5 border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg glass-badge flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-cyan-300" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">WCAG AAA Certified Contrast</div>
                      <div className="text-[11px] text-slate-400">Ratio 7.8:1 on frosted translucent plane</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-400/15 text-emerald-300 border border-emerald-400/30">
                    PASS
                  </span>
                </div>

              </div>
            </div>

            {/* Overlapping Floating Sub-Badge (Layered Z-Depth) */}
            <div 
              className="absolute -bottom-5 -right-5 glass-surface-elevated rounded-2xl p-3.5 border-white/30 shadow-2xl hidden sm:flex items-center gap-3 backdrop-blur-3xl"
              style={{ transform: 'translateZ(35px)' }}
            >
              <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#38bdf8]" />
              <div className="text-xs font-mono font-medium text-white">
                Physical Edge Caustics Active
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
