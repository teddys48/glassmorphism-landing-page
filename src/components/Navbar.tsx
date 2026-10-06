import { useState, useEffect, type FC } from 'react'
import { Sparkles, Palette, Layers, Menu, X, ArrowUpRight } from 'lucide-react'
import type { AuraTheme } from '../types'

interface NavbarProps {
  currentTheme: AuraTheme
  onThemeChange: (theme: AuraTheme) => void
}

export const Navbar: FC<NavbarProps> = ({ currentTheme, onThemeChange }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const themes: { id: AuraTheme; label: string; dotClass: string }[] = [
    { id: 'nebula', label: 'Nebula Cyan', dotClass: 'bg-cyan-400' },
    { id: 'cyber', label: 'Cyber Violet', dotClass: 'bg-fuchsia-400' },
    { id: 'emerald', label: 'Emerald Matrix', dotClass: 'bg-emerald-400' },
    { id: 'sunset', label: 'Solar Amber', dotClass: 'bg-amber-400' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300">
      <nav 
        aria-label="Main Navigation"
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
          scrolled 
            ? 'glass-surface-elevated shadow-[0_12px_40px_rgba(0,0,0,0.55)] border-white/20' 
            : 'glass-surface shadow-[0_8px_30px_rgba(0,0,0,0.3)]'
        }`}
      >
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
        >
          <div className="relative w-9 h-9 rounded-xl glass-surface-elevated flex items-center justify-center overflow-hidden border-cyan-400/40 group-hover:border-cyan-400/80 transition-colors shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            <Layers className="w-5 h-5 text-cyan-300 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-transparent pointer-events-none" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              LUMINA
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 font-normal">
                v3.0
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          <a 
            href="#features" 
            className="px-3.5 py-1.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Features
          </a>
          <a 
            href="#lab" 
            className="px-3.5 py-1.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Glass Lab
          </a>
          <a 
            href="#architecture" 
            className="px-3.5 py-1.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Architecture
          </a>
          <a 
            href="#pricing" 
            className="px-3.5 py-1.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Pricing
          </a>
          <a 
            href="#faq" 
            className="px-3.5 py-1.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            FAQ
          </a>
        </div>

        {/* Action Controls & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Ambient Chroma Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-pill text-xs font-medium text-slate-200 hover:text-white hover:border-white/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
              aria-label="Change aura theme"
              aria-expanded={themeDropdownOpen}
            >
              <Palette className="w-3.5 h-3.5 text-cyan-300" />
              <span className="capitalize">{currentTheme}</span>
            </button>

            {themeDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-48 rounded-2xl glass-surface-elevated p-2 shadow-2xl border-white/20 backdrop-blur-2xl z-50 flex flex-col gap-1"
                role="menu"
              >
                <div className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Ambient Hue Aura
                </div>
                {themes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      onThemeChange(t.id)
                      setThemeDropdownOpen(false)
                    }}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-left transition-all cursor-pointer ${
                      currentTheme === t.id
                        ? 'bg-white/15 text-white font-semibold shadow-inner'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                    role="menuitem"
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${t.dotClass} shadow-[0_0_8px_currentColor]`} />
                    {t.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary Glass CTA */}
          <a
            href="#lab"
            className="glass-button-primary px-4 py-2 rounded-xl text-sm font-semibold text-white tracking-wide flex items-center gap-2 shadow-lg group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Launch Studio</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
            className="p-2 rounded-xl glass-pill text-slate-300 hover:text-white cursor-pointer"
            aria-label="Toggle Aura Palette"
          >
            <Palette className="w-4 h-4 text-cyan-300" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl glass-pill text-slate-300 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Glass Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl glass-surface-elevated border-white/20 flex flex-col gap-3 shadow-2xl">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white transition-all"
          >
            Features
          </a>
          <a
            href="#lab"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white transition-all flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Glass Lab
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300">
              Interactive
            </span>
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white transition-all"
          >
            Architecture
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white transition-all"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white transition-all"
          >
            FAQ
          </a>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <span className="text-[11px] font-mono uppercase text-slate-400 px-1">
              Select Ambient Aura:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {themes.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    onThemeChange(t.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border border-white/10 ${
                    currentTheme === t.id ? 'bg-white/20 text-white font-bold' : 'glass-pill text-slate-300'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${t.dotClass}`} />
                  {t.label}
                </button>
              ))}
            </div>
            <a
              href="#lab"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 glass-button-primary py-2.5 rounded-xl text-sm font-semibold text-center text-white"
            >
              Launch Studio
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
