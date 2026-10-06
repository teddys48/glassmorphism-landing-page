import type { FC } from 'react'
import { Layers } from 'lucide-react'

const CURRENT_YEAR = 2026

export const Footer: FC = () => {
  return (
    <footer className="border-t border-white/10 glass-surface relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl glass-surface-elevated flex items-center justify-center border-cyan-400/40">
                <Layers className="w-4 h-4 text-cyan-300" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">LUMINA UI</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              Next-generation extreme glassmorphic design architecture. Engineered for high performance, spatial clarity, and WCAG AA accessibility.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Optics Engines Operational (120 FPS)</span>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
                Architecture
              </div>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#lab" className="hover:text-cyan-300 transition-colors">Optical Shaders</a></li>
                <li><a href="#features" className="hover:text-cyan-300 transition-colors">Specular Edges</a></li>
                <li><a href="#architecture" className="hover:text-cyan-300 transition-colors">Spatial Canvas</a></li>
                <li><a href="#features" className="hover:text-cyan-300 transition-colors">GPU Compositing</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
                Resources
              </div>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#lab" className="hover:text-cyan-300 transition-colors">Interactive Studio</a></li>
                <li><a href="#pricing" className="hover:text-cyan-300 transition-colors">Commercial Plans</a></li>
                <li><a href="#faq" className="hover:text-cyan-300 transition-colors">Engineering FAQ</a></li>
                <li><a href="#features" className="hover:text-cyan-300 transition-colors">Accessibility Spec</a></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
                Ecosystem
              </div>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><span className="text-slate-300">Bun 1.3</span></li>
                <li><span className="text-slate-300">React 19</span></li>
                <li><span className="text-slate-300">Vite 8</span></li>
                <li><span className="text-slate-300">Docker Alpine</span></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {CURRENT_YEAR} Lumina Glass UI Architecture. Released under MIT.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Security Protocol</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
