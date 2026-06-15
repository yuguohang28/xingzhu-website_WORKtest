import {
  HeroSection,
  TrustSection,
  CapabilitiesSection,
  StatsSection,
  CTASection,
} from './home.sections'

export default function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-x-hidden">
      <HeroSection />
      <TrustSection />
      <CapabilitiesSection />
      <StatsSection />
      <CTASection />
    </main>
  )
}
