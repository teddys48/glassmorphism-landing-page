export type AuraTheme = 'nebula' | 'cyber' | 'emerald' | 'sunset'

export interface AuraConfig {
  id: AuraTheme
  label: string
  primaryOrb: string
  secondaryOrb: string
  accentOrb: string
  glowColor: string
}

export interface FeatureItem {
  id: string
  title: string
  description: string
  icon: string
  badge?: string
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  annualPrice: number
  features: string[]
  isPopular?: boolean
  ctaLabel: string
}

export interface FAQItem {
  question: string
  answer: string
}
