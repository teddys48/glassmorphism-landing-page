import { useState, type FC } from 'react'
import { Sliders, Copy, Check, RefreshCw, Code, Zap } from 'lucide-react'

export const InteractiveGlassLab: FC = () => {
  const [blur, setBlur] = useState(24)
  const [opacity, setOpacity] = useState(12)
  const [specular, setSpecular] = useState(0.4)
  const [saturation, setSaturation] = useState(180)
  const [tint, setTint] = useState<'cyan' | 'purple' | 'emerald' | 'amber'>('cyan')
  const [copied, setCopied] = useState(false)

  const tintColors = {
    cyan: { bg: '56, 189, 248', hex: '#38bdf8', label: 'Cyan Prism' },
    purple: { bg: '192, 132, 252', hex: '#c084fc', label: 'Amethyst' },
    emerald: { bg: '52, 211, 153', hex: '#34d399', label: 'Emerald' },
    amber: { bg: '251, 191, 36', hex: '#fbbf24', label: 'Amber Sol' },
  }

  const activeTint = tintColors[tint]

  const generatedCSS = `.glass-custom-specimen {
  background: rgba(${activeTint.bg}, ${opacity / 100});
  backdrop-filter: blur(${blur}px) saturate(${saturation}%);
  -webkit-backdrop-filter: blur(${blur}px) saturate(${saturation}%);
  border: 1px solid rgba(255, 255, 255, ${specular});
  border-top: 1px solid rgba(255, 255, 255, ${Math.min(1, specular + 0.35).toFixed(2)});
  box-shadow: 
    0 20px 50px rgba(0, 0, 0, 0.4),
    inset 0 1px 1px rgba(255, 255, 255, ${Math.min(1, specular + 0.2).toFixed(2)});
}`

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCSS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleReset = () => {
    setBlur(24)
    setOpacity(12)
    setSpecular(0.4)
    setSaturation(180)
    setTint('cyan')
  }

  return (
    <section 
      id="lab" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-20"
      aria-label="Interactive Glassmorphism Studio"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-4 border-cyan-400/30">
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono font-medium tracking-wide text-cyan-200 uppercase">
              Real-time Optical Shader Lab
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Interactive Extreme Glass Studio
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Manipulate optical refraction, specular highlights, and sub-pixel caustics in real-time. Export production CSS instantly.
          </p>
        </div>

        {/* Studio Grid: Controls & Live Specimen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-5 glass-surface-elevated rounded-3xl p-6 sm:p-7 border-white/20 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-sm font-semibold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-400" />
                Optical Parameters
              </span>
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Reset to recommended baseline"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>

            <div className="space-y-6">
              {/* Blur Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-300 font-medium">Backdrop Blur</span>
                  <span className="text-cyan-300 font-bold">{blur}px</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="48"
                  value={blur}
                  onChange={(e) => setBlur(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer bg-white/10 rounded-lg h-2"
                  aria-label="Backdrop blur slider"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                  <span>4px (Subtle)</span>
                  <span>24px (Balanced)</span>
                  <span>48px (Deep Frost)</span>
                </div>
              </div>

              {/* Opacity Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-300 font-medium">Surface Translucency</span>
                  <span className="text-cyan-300 font-bold">{opacity}%</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  value={opacity}
                  onChange={(e) => setOpacity(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer bg-white/10 rounded-lg h-2"
                  aria-label="Surface translucency slider"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                  <span>2% (Gossamer)</span>
                  <span>12% (Specular Glass)</span>
                  <span>40% (Heavy Frosted)</span>
                </div>
              </div>

              {/* Specular Highlight Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-300 font-medium">Specular Edge Refraction</span>
                  <span className="text-cyan-300 font-bold">{Math.round(specular * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="0.8"
                  step="0.05"
                  value={specular}
                  onChange={(e) => setSpecular(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer bg-white/10 rounded-lg h-2"
                  aria-label="Specular highlight slider"
                />
              </div>

              {/* Saturation Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-300 font-medium">Color Saturation Boost</span>
                  <span className="text-cyan-300 font-bold">{saturation}%</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="220"
                  step="10"
                  value={saturation}
                  onChange={(e) => setSaturation(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer bg-white/10 rounded-lg h-2"
                  aria-label="Saturation boost slider"
                />
              </div>

              {/* Tint Selection */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2">
                  Prismatic Hue Infusion
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(tintColors) as Array<keyof typeof tintColors>).map((key) => {
                    const item = tintColors[key]
                    const isSelected = tint === key
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setTint(key)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white/20 border-white/50 text-white shadow-md'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-full shadow-[0_0_8px_currentColor]"
                          style={{ backgroundColor: item.hex }}
                        />
                        <span>{item.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Live Preview Specimen & Code Output */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Live Visual Specimen Canvas */}
            <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden border border-white/15 min-h-[380px] flex items-center justify-center bg-slate-950/60 shadow-2xl">
              
              {/* High Intensity Background Light Burst for refraction testing */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-[80px] opacity-70 animate-pulse-glow" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500 blur-[90px] opacity-60 animate-float-slow" />
              
              {/* Pattern underneath to reveal glass optical distortion */}
              <div 
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `linear-gradient(45deg, #ffffff 25%, transparent 25%), linear-gradient(-45deg, #ffffff 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ffffff 75%), linear-gradient(-45deg, transparent 75%, #ffffff 75%)`,
                  backgroundSize: '24px 24px',
                  backgroundPosition: '0 0, 0 12px, 12px -12px, -12px 0px',
                }}
              />

              {/* THE SPECIMEN CARD - Dynamically Styled */}
              <div
                className="relative z-10 w-full max-w-md rounded-3xl p-6 sm:p-8 transition-all duration-200"
                style={{
                  background: `rgba(${activeTint.bg}, ${opacity / 100})`,
                  backdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
                  WebkitBackdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
                  border: `1px solid rgba(255, 255, 255, ${specular})`,
                  borderTop: `1px solid rgba(255, 255, 255, ${Math.min(1, specular + 0.35)})`,
                  boxShadow: `0 24px 60px -12px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, ${Math.min(1, specular + 0.25)})`,
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-3 h-3 rounded-full animate-ping"
                      style={{ backgroundColor: activeTint.hex }}
                    />
                    <span className="text-xs font-mono font-semibold tracking-wider uppercase text-white">
                      Live Specimen #{activeTint.label}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-white/80 px-2 py-0.5 rounded-full bg-white/10 border border-white/20">
                    {blur}px Blur
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  Optical Caustic Plane
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed mb-6 font-normal">
                  Notice the sharp top-edge bevel and how background chromatic lights disperse cleanly through the frosted translucent substrate.
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/15 text-xs text-white/90 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-300" />
                    GPU Accelerated
                  </span>
                  <span>Opacity {opacity}%</span>
                </div>
              </div>
            </div>

            {/* Generated Code Card with Copy Action */}
            <div className="glass-surface-elevated rounded-3xl p-5 border-white/20 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-300 flex items-center gap-2">
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  Generated CSS Code
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="glass-button-primary px-3 py-1.5 rounded-xl text-xs font-semibold text-white flex items-center gap-1.5 cursor-pointer"
                  aria-label="Copy generated CSS"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy CSS</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-2xl bg-black/50 border border-white/10 font-mono text-xs text-cyan-200/90 overflow-x-auto leading-relaxed">
                <code>{generatedCSS}</code>
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
