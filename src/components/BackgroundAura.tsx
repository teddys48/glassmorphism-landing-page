import type { FC } from 'react'
import type { AuraTheme } from '../types'

interface BackgroundAuraProps {
  theme: AuraTheme
}

export const BackgroundAura: FC<BackgroundAuraProps> = ({ theme }) => {
  // Theme orb configurations
  const themeGradients = {
    nebula: {
      orb1: 'from-cyan-500/35 via-blue-600/25 to-transparent',
      orb2: 'from-violet-600/30 via-indigo-500/20 to-transparent',
      orb3: 'from-sky-400/25 via-teal-500/15 to-transparent',
      orb4: 'from-blue-500/20 via-purple-600/15 to-transparent',
    },
    cyber: {
      orb1: 'from-fuchsia-500/35 via-pink-600/25 to-transparent',
      orb2: 'from-purple-600/30 via-violet-700/20 to-transparent',
      orb3: 'from-indigo-500/25 via-cyan-500/15 to-transparent',
      orb4: 'from-pink-500/20 via-rose-600/15 to-transparent',
    },
    emerald: {
      orb1: 'from-emerald-500/35 via-teal-600/25 to-transparent',
      orb2: 'from-cyan-600/30 via-emerald-700/20 to-transparent',
      orb3: 'from-teal-400/25 via-green-500/15 to-transparent',
      orb4: 'from-emerald-400/20 via-sky-600/15 to-transparent',
    },
    sunset: {
      orb1: 'from-amber-500/35 via-orange-600/25 to-transparent',
      orb2: 'from-rose-600/30 via-red-600/20 to-transparent',
      orb3: 'from-orange-400/25 via-yellow-500/15 to-transparent',
      orb4: 'from-amber-400/20 via-rose-700/15 to-transparent',
    },
  }[theme]

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* Deep Space Background Canvas */}
      <div className="absolute inset-0 bg-[#030712] transition-colors duration-700" />

      {/* Floating Refractive Glow Orbs */}
      <div
        className={`absolute -top-40 -left-40 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-br ${themeGradients.orb1} blur-[120px] animate-float-slow`}
      />

      <div
        className={`absolute top-1/4 -right-40 w-[500px] h-[500px] md:w-[750px] md:h-[750px] rounded-full bg-gradient-to-bl ${themeGradients.orb2} blur-[130px] animate-float-reverse`}
      />

      <div
        className={`absolute bottom-1/3 left-1/4 w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full bg-gradient-to-tr ${themeGradients.orb3} blur-[110px] animate-pulse-glow`}
      />

      <div
        className={`absolute -bottom-40 right-1/4 w-[550px] h-[550px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-tl ${themeGradients.orb4} blur-[140px] animate-float-slow`}
      />

      {/* Optical Matrix Grid Overlay to accentuate glass blur and refraction */}
      <div 
        className="absolute inset-0 opacity-[0.14] mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Vignette Lighting Radial Mask */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,7,18,0.75)_100%)]" 
      />
    </div>
  )
}
