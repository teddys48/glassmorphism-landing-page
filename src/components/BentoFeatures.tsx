import { useState, type FC } from 'react'
import { ShieldCheck, Eye } from 'lucide-react'

export const BentoFeatures: FC = () => {
  const [lightAngle, setLightAngle] = useState(45)
  const [a11yMode, setA11yMode] = useState(false)

  return (
    <section 
      id="features" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-20"
      aria-label="Engineered Glassmorphic Capabilities"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (Anti-Slop: Stacked header, clear focus, no repetitive eyebrow) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Optical Precision in Every Glass Layer
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Moving beyond simple blur overlays. Lumina renders physical light transmission, caustic dispersals, and accessible typography.
          </p>
        </div>

        {/* Bento Grid: 4 Asymmetric, High-Variety Cells */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Cell 1: Col-Span 7 - Specular Edge Refraction with interactive light angle */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden relative group">
            {/* Ambient Backlight */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                  Physical Edge Optics
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Angle: {lightAngle}°
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Sub-Pixel Specular Edge Glare
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-[55ch]">
                Simulates real-world bevel highlights using dual-layer inset shadows and directional linear borders that react to user perspective.
              </p>
            </div>

            {/* Interactive Light Angle Simulation Surface */}
            <div className="mt-8 relative rounded-2xl p-6 glass-surface border-white/20 overflow-hidden">
              <div 
                className="absolute inset-0 pointer-events-none transition-all duration-300"
                style={{
                  background: `linear-gradient(${lightAngle}deg, rgba(255,255,255,0.25) 0%, transparent 60%)`,
                }}
              />
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white">Dynamic Incident Ray</div>
                  <div className="text-xs text-slate-400">Drag to observe specular light refraction</div>
                </div>
                <div className="w-full sm:w-48">
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={lightAngle}
                    onChange={(e) => setLightAngle(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer bg-white/10 rounded-lg h-2"
                    aria-label="Light angle incident ray"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bento Cell 2: Col-Span 5 - Multi-Z Stacking Depth */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

            <div>
              <div className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-violet-400/10 text-violet-300 border border-violet-400/20 inline-block mb-4">
                Spatial Depth
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Multi-Z Glass Layering
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Compound blur stacking preserves legibility through up to four simultaneous translucent sheets.
              </p>
            </div>

            {/* 3D Visual Miniature Stacking Specimen */}
            <div className="mt-6 relative h-40 flex items-center justify-center">
              {/* Layer 1 (Bottom) */}
              <div className="absolute w-56 h-24 rounded-2xl bg-white/5 border border-white/10 -rotate-6 translate-y-3 shadow-lg flex items-center justify-center text-xs font-mono text-slate-500">
                Layer Z-1 (Base Blur)
              </div>
              {/* Layer 2 (Middle) */}
              <div className="absolute w-56 h-24 rounded-2xl glass-surface border-white/20 rotate-3 -translate-y-1 shadow-xl flex items-center justify-center text-xs font-mono text-slate-300 backdrop-blur-md">
                Layer Z-2 (Refraction)
              </div>
              {/* Layer 3 (Top) */}
              <div className="absolute w-56 h-24 rounded-2xl glass-surface-elevated border-white/30 -translate-y-4 shadow-2xl flex items-center justify-center text-xs font-mono text-white font-semibold backdrop-blur-xl">
                Layer Z-3 (Specular Focus)
              </div>
            </div>
          </div>

          {/* Bento Cell 3: Col-Span 5 - Accessibility & High Contrast Fallback */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                  WCAG AA / AAA
                </span>
                <button
                  type="button"
                  onClick={() => setA11yMode(!a11yMode)}
                  className="text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                  title="Toggle reduced transparency preview"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  {a11yMode ? 'Glass Mode' : 'Fallback Mode'}
                </button>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Certified Contrast Fallback
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Automatic graceful degradation for users with <code className="text-cyan-300 text-xs">prefers-reduced-transparency</code> enabled in their OS.
              </p>
            </div>

            {/* Live Contrast Meter Card */}
            <div 
              className={`rounded-2xl p-4 transition-all duration-300 border ${
                a11yMode 
                  ? 'bg-slate-900 border-slate-700 shadow-none' 
                  : 'glass-surface border-white/20'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-slate-300 font-medium">Text to Surface Ratio</span>
                <span className="text-emerald-400 font-mono font-bold">7.8 : 1 (Pass AAA)</span>
              </div>
              <div className="w-full bg-black/40 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-2 rounded-full w-[85%]" />
              </div>
              <div className="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Never compromises accessibility for aesthetics</span>
              </div>
            </div>
          </div>

          {/* Bento Cell 4: Col-Span 7 - Zero Runtime GPU Shaders */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-sky-500/15 blur-3xl pointer-events-none" />

            <div>
              <div className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-sky-400/10 text-sky-300 border border-sky-400/20 inline-block mb-4">
                Performance Engine
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                GPU-Accelerated Compositing
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-[55ch]">
                Leverages hardware CSS compositing pipelines so that even complex blur matrices render at a constant 120 FPS on modern displays.
              </p>
            </div>

            {/* Benchmark Stats Matrix */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl glass-surface p-4 border-white/10 text-center">
                <div className="text-2xl font-extrabold font-mono text-cyan-300">0 KB</div>
                <div className="text-[11px] text-slate-400 mt-0.5">JS Runtime Cost</div>
              </div>
              <div className="rounded-2xl glass-surface p-4 border-white/10 text-center">
                <div className="text-2xl font-extrabold font-mono text-emerald-300">120</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Target Display FPS</div>
              </div>
              <div className="rounded-2xl glass-surface p-4 border-white/10 text-center">
                <div className="text-2xl font-extrabold font-mono text-violet-300">0.2ms</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Frame Render Time</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
