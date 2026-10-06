import { useState, type FC } from 'react'
import { Layout, LineChart, Cpu, Palette, CheckCircle2, TrendingUp, Terminal } from 'lucide-react'

export const GlassShowcase: FC = () => {
  const [activeTab, setActiveTab] = useState<'spatial' | 'fintech' | 'ai' | 'studio'>('spatial')

  const tabs = [
    { id: 'spatial' as const, label: 'Spatial OS Canvas', icon: Layout },
    { id: 'fintech' as const, label: 'Fintech Terminal', icon: LineChart },
    { id: 'ai' as const, label: 'AI Intelligence Hub', icon: Cpu },
    { id: 'studio' as const, label: 'Creative Studio', icon: Palette },
  ]

  return (
    <section 
      id="architecture" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-20"
      aria-label="Glassmorphism Architecture Archetypes"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Architectural Archetypes
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            See how extreme glassmorphism transforms diverse application domains with tactile clarity and atmospheric depth.
          </p>

          {/* Interactive Tab Selectors */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl glass-surface-elevated max-w-fit mx-auto border-white/20">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'glass-button-primary text-white shadow-lg'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="glass-surface-elevated rounded-3xl p-6 sm:p-10 border-white/20 shadow-2xl relative overflow-hidden">
          
          {/* Spatial OS Canvas Tab */}
          {activeTab === 'spatial' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono font-medium text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                  Archetype 01 • Spatial Computing
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Zero-Distortion Multi-Window Canvas
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Engineered for spatial applications where interface panes float seamlessly above wallpapers, 3D scenes, or real-time camera feeds.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300 pt-2 font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Dynamic optical refraction behind active windows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Inertial momentum spring physics on drag</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Preserved text contrast with adaptive scrim</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[360px] rounded-2xl glass-card p-6 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">workspace.spatial</span>
                  <div className="w-4" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                  <div className="glass-surface rounded-xl p-4 border-white/15">
                    <div className="text-xs font-semibold text-white mb-1">Window A • Shader View</div>
                    <div className="text-[11px] text-slate-400">Backdrop: blur(32px)</div>
                    <div className="mt-3 h-1.5 bg-cyan-400/30 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 w-3/4 rounded-full" />
                    </div>
                  </div>
                  <div className="glass-surface-elevated rounded-xl p-4 border-white/20">
                    <div className="text-xs font-semibold text-white mb-1">Window B • Inspector</div>
                    <div className="text-[11px] text-slate-400">Z-Index: 40 • Specular Glare</div>
                    <div className="mt-3 flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                </div>

                {/* Floating Dock */}
                <div className="flex items-center justify-center gap-3 p-2 rounded-2xl glass-pill max-w-fit mx-auto border-white/20">
                  {['Apps', 'Render', 'Nodes', 'Terminal'].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-xl text-xs font-medium text-slate-200 hover:bg-white/15 cursor-pointer transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Fintech Terminal Tab */}
          {activeTab === 'fintech' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono font-medium text-emerald-300 px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                  Archetype 02 • High-Trust Finance
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Crystal Liquidity & Asset Telemetry
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Luminous data tiles communicate institutional security with pristine, optical frosted card elevation and crystalline accents.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300 pt-2 font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Real-time sparkline visualization on frosted cards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Instant slippage and price impact warnings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Hardware cryptographic key confirmation</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[360px] rounded-2xl glass-card p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-emerald-300 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    PORTFOLIO LIQUIDITY
                  </span>
                  <span className="text-xs font-mono text-slate-400">UPDATED LIVE</span>
                </div>

                <div className="my-6">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                    $1,489,240.80
                  </div>
                  <div className="text-xs text-emerald-400 font-mono mt-1 flex items-center gap-1">
                    <span>+$42,180.20 (+2.91%) today</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="glass-surface rounded-xl p-3 border-white/10">
                    <div className="text-[11px] text-slate-400 font-mono">ETH / USD Prism</div>
                    <div className="text-base font-bold font-mono text-white mt-1">$3,842.10</div>
                  </div>
                  <div className="glass-surface rounded-xl p-3 border-white/10">
                    <div className="text-[11px] text-slate-400 font-mono">Gas Velocity</div>
                    <div className="text-base font-bold font-mono text-cyan-300 mt-1">12 Gwei</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Hub Tab */}
          {activeTab === 'ai' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono font-medium text-violet-300 px-2.5 py-1 rounded-full bg-violet-400/10 border border-violet-400/20">
                  Archetype 03 • Autonomous Intelligence
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Neural Flow & Holographic Execution
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Floating neural model orchestrations with glowing state nodes and translucent reasoning step inspector panels.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300 pt-2 font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Sub-millisecond token streaming with specular highlights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Dynamic reasoning graph visualization</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7 rounded-2xl glass-card p-6 flex flex-col justify-between font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-cyan-300 flex items-center gap-1.5">
                    <Terminal className="w-4 h-4" />
                    agent-kernel.stream
                  </span>
                  <span className="text-emerald-400 text-[10px] px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/30">
                    STATUS: REASONING
                  </span>
                </div>
                <div className="space-y-3 my-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                    <span className="text-cyan-300 font-bold">&gt; Step 1:</span> Synthesize multi-layer glass backdrop tokens...
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                    <span className="text-cyan-300 font-bold">&gt; Step 2:</span> Compute specular highlights along top polygon rim...
                  </div>
                  <div className="p-3 rounded-xl glass-badge text-cyan-200">
                    <span className="text-cyan-300 font-bold">&gt; Output:</span> Render completed in 0.28ms at 120 FPS.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Creative Studio Tab */}
          {activeTab === 'studio' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono font-medium text-amber-300 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
                  Archetype 04 • Creative Tooling
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Prismatic Color & Optics Engine
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Designers and artists inspect complex color gamuts, glass refractive indexes, and dispersion shaders in real-time.
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300 pt-2 font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Real-time color wheel sampling with frosted magnifier</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Export to CSS, Figma, and WebGL shader code</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7 rounded-2xl glass-card p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono text-amber-300">PRISMATIC PALETTE</span>
                  <span className="text-xs font-mono text-slate-400">P3 COLOR GAMUT</span>
                </div>
                <div className="grid grid-cols-4 gap-3 my-6">
                  {['#38bdf8', '#818cf8', '#c084fc', '#f472b6'].map((hex) => (
                    <div key={hex} className="rounded-xl glass-surface p-3 border-white/15 flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full shadow-lg mb-2" style={{ backgroundColor: hex }} />
                      <span className="text-[10px] font-mono text-slate-300">{hex}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  )
}
