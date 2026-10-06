import { useState, type FC } from 'react'
import { ChevronDown } from 'lucide-react'

export const FAQSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How does extreme glassmorphism preserve accessibility and legibility?',
      a: 'Lumina enforces strict contrast thresholds by calculating background luminescence behind every translucent card. When contrast dips below WCAG AA (4.5:1 for regular text, 3:1 for display), the engine automatically increases substrate opacity or injects a subtle scrim. Additionally, it provides native fallback styles for users who set "prefers-reduced-transparency".',
    },
    {
      q: 'Does heavy backdrop blur cause rendering jank or battery drain on mobile?',
      a: 'No. Traditional poor implementations recompute filters on continuous scroll events using JavaScript. Lumina uses pure hardware-accelerated CSS compositor layers (translate3d and will-change: transform) that GPU pipeline chips can cache in texture memory, running smoothly at 120 FPS on iOS Safari and modern Android devices.',
    },
    {
      q: 'Why use Bun, Vite, and React 19 for this stack?',
      a: 'Bun delivers blazing fast dependency resolution, instant cold starts, and lightning compilation. Vite provides instant hot module replacement (HMR), while React 19 brings concurrent rendering and lightweight state mechanics, enabling extreme performance with minimal bundle footprints.',
    },
    {
      q: 'How do I deploy this with Docker in production?',
      a: 'The project includes a multi-stage Dockerfile that builds the application using official oven/bun:alpine and serves the optimized static assets with nginx:alpine. The container weighs less than 35MB, includes gzip compression, security headers, and a dedicated health check endpoint.',
    },
    {
      q: 'Can I customize the chromatic aura and refractive light colors?',
      a: 'Yes. All refraction highlights and ambient light orbs are driven by CSS custom properties and Tailwind tokens. You can switch themes via the palette controller or configure your own brand hex codes in seconds.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      id="faq" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Everything you need to know about optical glass engineering, performance, and deployment.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-2xl glass-card border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="text-base sm:text-lg font-semibold text-white tracking-tight pr-4">
                    {faq.q}
                  </span>
                  <div className={`p-1 rounded-lg glass-pill transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-300' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-6 pb-6 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-200"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
