import {
  HeroSection,
  TrustSection,
  CapabilitiesSection,
  StatsSection,
  CTASection,
} from './home.sections'

export default function Home() {
  return (
    <main className="bg-surface-50 text-surface-800 overflow-x-hidden">
      <HeroSection />
      <TrustSection />
      <CapabilitiesSection />
      <StatsSection />
      <CTASection />
    </main>
  )
}
