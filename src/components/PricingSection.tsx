import { useState, type FC } from 'react'
import { Check, Sparkles, ArrowRight } from 'lucide-react'
import confetti from 'canvas-confetti'

export const PricingSection: FC = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const handleSelectPlan = (_planName: string) => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#818cf8', '#c084fc', '#34d399'],
    })
  }

  const plans = [
    {
      id: 'starter',
      name: 'Starter Glass',
      description: 'Ideal for indie developers and single applications testing extreme glass aesthetics.',
      price: isAnnual ? 19 : 24,
      features: [
        'Complete Glassmorphism Component Kit',
        'Tailwind v4 & CSS Shaders',
        'Sub-pixel specular edge refraction',
        'WCAG AA accessible contrast presets',
        'Community Discord access',
      ],
      isPopular: false,
    },
    {
      id: 'pro',
      name: 'Pro Prismatic',
      description: 'Full spatial suite for engineering teams shipping next-generation web apps.',
      price: isAnnual ? 49 : 59,
      features: [
        'Everything in Starter Glass',
        'GPU hardware accelerated caustics',
        'Multi-Z spatial layer stack engine',
        'Dynamic ambient chroma aura controllers',
        'Figma token & component synchronizer',
        'Direct priority engineering support',
      ],
      isPopular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise Core',
      description: 'Custom optical architecture, SLA guarantees, and tailored shader consulting.',
      price: isAnnual ? 149 : 179,
      features: [
        'Everything in Pro Prismatic',
        'Dedicated WebGL & CSS shader engineering',
        'Custom brand refractive index profiling',
        'Air-gapped on-premise Docker deployment',
        '99.99% uptime SLA guarantee',
        '24/7 dedicated engineering channel',
      ],
      isPopular: false,
    },
  ]

  return (
    <section 
      id="pricing" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-20"
      aria-label="Transparent Glass Pricing Plans"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Transparent, Predictable Plans
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Choose the glassmorphic architecture scale that matches your product ambition.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white font-semibold' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 rounded-full glass-surface-elevated p-1 cursor-pointer transition-colors border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Toggle annual billing with 20% discount"
            >
              <div
                className={`w-6 h-6 rounded-full bg-cyan-400 shadow-md transition-transform duration-300 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-1.5 ${isAnnual ? 'text-white font-semibold' : 'text-slate-400'}`}>
              Annual
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? 'glass-surface-elevated border-cyan-400/50 shadow-[0_20px_50px_rgba(56,189,248,0.2)] md:-translate-y-2'
                  : 'glass-card border-white/10'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full glass-button-primary text-[11px] font-mono font-bold uppercase tracking-wider text-white shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-cyan-200" />
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                </div>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed min-h-[36px]">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
                    ${plan.price}
                  </span>
                  <span className="text-xs font-mono text-slate-400">/ user / mo</span>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    Included Capabilities:
                  </div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleSelectPlan(plan.name)}
                className={`w-full py-3.5 rounded-2xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  plan.isPopular
                    ? 'glass-button-primary text-white shadow-xl'
                    : 'glass-button-secondary text-slate-200 hover:text-white'
                }`}
              >
                <span>Select {plan.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
