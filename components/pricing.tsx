"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Check, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Essencial",
    badge: null,
    setup: "R$ 490",
    setupLabel: "setup único",
    monthly: "R$ 97",
    monthlyLabel: "/mês por imóvel",
    description: "Para anfitriões que querem começar rápido, sem visita presencial.",
    format: "100% remoto",
    features: [
      "Configuração remota da IA",
      "Clonagem de voz guiada (você mesmo grava)",
      "1 placa QR Code enviada pelos Correios",
      "Dashboard básico de perguntas e solicitações",
      "Suporte por e-mail",
    ],
    notIncluded: [
      "Visita presencial",
      "Produção de vídeos",
      "Múltiplas placas",
    ],
    cta: "Começar com o Essencial",
    ctaHref: "https://wa.me/5500000000000?text=Olá!%20Tenho%20interesse%20no%20plano%20Essencial%20do%20HOSPI.",
    highlight: false,
  },
  {
    name: "Premium",
    badge: "Mais escolhido",
    setup: "R$ 1.490",
    setupLabel: "setup único",
    monthly: "R$ 197",
    monthlyLabel: "/mês por imóvel",
    description: "Para imóveis que merecem uma experiência completa — com equipe no local.",
    format: "Equipe vai até você",
    features: [
      "Tudo do Essencial",
      "Visita presencial da equipe HOSPI",
      "Produção de fotos e vídeos profissionais",
      "Até 3 placas QR Code instaladas no local",
      "Onboarding dedicado",
      "Marketplace de serviços extras ativo",
      "Relatórios de perguntas frequentes",
      "Atualização de conteúdo incluída",
      "Suporte prioritário",
    ],
    notIncluded: [],
    cta: "Quero o Premium",
    ctaHref: "https://wa.me/5500000000000?text=Olá!%20Tenho%20interesse%20no%20plano%20Premium%20do%20HOSPI.",
    highlight: true,
  },
  {
    name: "Gestores",
    badge: null,
    setup: "Sob consulta",
    setupLabel: "desconto por volume",
    monthly: "R$ 147",
    monthlyLabel: "/mês por imóvel",
    description: "Para quem administra 3 ou mais imóveis e quer escalar sem aumentar equipe.",
    format: "Proposta personalizada",
    features: [
      "Tudo do Premium",
      "Painel unificado para múltiplos imóveis",
      "Desconto progressivo por volume",
      "Account manager dedicado",
      "SLA de suporte definido em contrato",
      "API e integrações (Airbnb, Booking, VRBO)",
    ],
    notIncluded: [],
    cta: "Falar com um especialista",
    ctaHref: "https://wa.me/5500000000000?text=Olá!%20Administro%20múltiplos%20imóveis%20e%20quero%20saber%20mais%20sobre%20o%20plano%20Gestores%20do%20HOSPI.",
    highlight: false,
  },
]

export function Pricing() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id="planos" className="py-24 md:py-32 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Planos e preços
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Simples de entender,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              fácil de começar
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Setup único por imóvel + assinatura mensal. Sem fidelidade mínima. Cancele quando quiser.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col gap-6 ${
                plan.highlight
                  ? "bg-accent/10 ring-1 ring-accent/40"
                  : "bg-card/40 backdrop-blur-xl"
              }`}
              style={plan.highlight ? {} : { border: '0.5px solid var(--border)' }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold shadow-lg shadow-accent/30">
                    <Star className="h-3 w-3 fill-current" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Name & Description */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-secondary/50" style={{ border: '0.5px solid var(--border)' }}>
                    {plan.format}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">{plan.monthly}</span>
                  <span className="text-sm text-muted-foreground">{plan.monthlyLabel}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  + <span className="font-medium text-foreground">{plan.setup}</span>{" "}
                  <span className="text-xs">{plan.setupLabel}</span>
                </p>
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className={`w-full h-12 gap-2 transition-all duration-300 hover:scale-[1.02] ${
                  plan.highlight
                    ? "btn-glow bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
                    : "bg-card/60 hover:bg-card/80 text-foreground"
                }`}
                style={plan.highlight ? {} : { border: '0.5px solid var(--border)' }}
                asChild
              >
                <a href={plan.ctaHref} target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              {/* Divider */}
              <div className="h-px bg-border/50" />

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm opacity-40">
                    <span className="h-4 w-4 shrink-0 mt-0.5 flex items-center justify-center text-muted-foreground">—</span>
                    <span className="text-muted-foreground line-through">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Marketplace note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            O marketplace de serviços extras (café da manhã, limpeza, transfers...) é gratuito para o anfitrião.{" "}
            <span className="text-foreground font-medium">Os fornecedores pagam a comissão — você pode até receber parte dela.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
