import { useState } from 'react'
import type { AuraTheme } from './types'
import { BackgroundAura } from './components/BackgroundAura'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustWall } from './components/TrustWall'
import { InteractiveGlassLab } from './components/InteractiveGlassLab'
import { BentoFeatures } from './components/BentoFeatures'
import { GlassShowcase } from './components/GlassShowcase'
import { PricingSection } from './components/PricingSection'
import { FAQSection } from './components/FAQSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'

export function App() {
  const [currentTheme, setCurrentTheme] = useState<AuraTheme>('nebula')

  return (
    <div className="min-h-screen text-slate-100 relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Ambient Refraction Background */}
      <BackgroundAura theme={currentTheme} />

      {/* Floating Glass Navigation */}
      <Navbar currentTheme={currentTheme} onThemeChange={setCurrentTheme} />

      {/* Primary Main Content Flow */}
      <main id="main-content">
        <Hero />
        <TrustWall />
        <InteractiveGlassLab />
        <BentoFeatures />
        <GlassShowcase />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>

      {/* Glass Footer */}
      <Footer />
    </div>
  )
}

export default App
