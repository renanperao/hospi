"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const onboardingSteps = [
  { step: "1", label: "Grave sua voz" },
  { step: "2", label: "Receba a placa" },
  { step: "3", label: "Ative o concierge" },
]

export function FinalCTA() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section id="para-anfitrioes" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="relative text-center"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/[0.08] rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
              Pronto para recuperar suas noites e fins de semana?
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight mb-6 text-balance">
              Configure uma vez.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                Funciona para sempre.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
              Em menos de 24 horas, o ESTYA estará atendendo seus hóspedes com a sua voz — a qualquer hora, sem você precisar responder uma única mensagem.
            </p>

            {/* Onboarding Steps */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-10"
            >
              {onboardingSteps.map((item, i) => (
                <div key={item.step} className="flex items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 shrink-0" style={{ border: '0.5px solid var(--border)' }}>
                      <span className="text-xs font-bold text-accent">{item.step}</span>
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                  {i < onboardingSteps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 hidden sm:block" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-glow bg-accent text-accent-foreground hover:bg-accent/90 gap-2 h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg font-medium shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-[1.02]"
                asChild
              >
                <a href="https://wa.me/5500000000000?text=Olá!%20Quero%20entrar%20no%20beta%20do%20ESTYA.">
                  Quero entrar no beta
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 h-14 sm:h-16 px-8 sm:px-10 text-base sm:text-lg bg-card/50 backdrop-blur-xl hover:bg-card/80 transition-all duration-300 hover:scale-[1.02]"
                style={{ border: '0.5px solid var(--border)' }}
                asChild
              >
                <a href="#como-funciona">Ver como funciona</a>
              </Button>
            </div>

            {/* Trust Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
            >
              {[
                "Ativação em 24 horas",
                "Sem fidelidade mínima",
                "Suporte no onboarding",
                "Cancele quando quiser",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
