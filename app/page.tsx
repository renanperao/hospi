import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { IPhoneMockup } from "@/components/iphone-mockup"
import { PainSection } from "@/components/pain-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeatureBento } from "@/components/feature-bento"
import { HardwareSection } from "@/components/hardware-section"
import { MarketResearch } from "@/components/market-research"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      {/* iPhone Simulator Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-background via-secondary/30 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Veja em ação
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              O que o hóspede vê ao escanear
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Sem baixar nada, sem cadastro. O hóspede aponta a câmera, escaneia e já está conversando com a IA — que responde com a sua voz, na hora.
            </p>
          </div>
          <IPhoneMockup />
        </div>
      </section>
      <PainSection />
      <HowItWorks />
      <FeatureBento />
      <HardwareSection />
      <MarketResearch />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
