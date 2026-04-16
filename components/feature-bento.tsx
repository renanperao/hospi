"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Zap, AudioLines, Package, QrCode } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Resposta em menos de 2 segundos",
    description: "O hóspede escaneia e já está sendo atendido. Sem esperar você acordar, sem esperar você terminar o jantar.",
    metric: "< 2s",
    metricLabel: "tempo de resposta"
  },
  {
    icon: AudioLines,
    title: "Sua voz. Não um robô.",
    description: "A IA clona sua voz com alta fidelidade. O hóspede ouve você — seu tom, seu jeito — mesmo quando você está do outro lado do mundo.",
    metric: "~10min",
    metricLabel: "para clonar sua voz"
  },
  {
    icon: Package,
    title: "Uma placa que combina com o imóvel",
    description: "Madeira nogueira, acrílico translúcido, metal escovado, mármore sintético. Não é um adesivo — é um objeto que pertence ao ambiente.",
    metric: "4",
    metricLabel: "acabamentos disponíveis"
  },
  {
    icon: QrCode,
    title: "Receita que entra enquanto você dorme",
    description: "Café da manhã, limpeza extra, transfer — o hóspede pede e paga via PIX direto pelo celular. Você recebe a notificação, não a pergunta.",
    metric: "PIX",
    metricLabel: "pagamento integrado"
  }
]

interface FeatureCardProps {
  feature: typeof features[0]
  index: number
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const featureRef = useRef(null)
  const featureInView = useInView(featureRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={featureRef}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={featureInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.98 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl bg-card/40 backdrop-blur-xl transition-all duration-500 hover:bg-card/60"
      style={{ border: '0.5px solid var(--border)' }}
    >
      {/* Glassmorphism overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6 md:p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div 
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 transition-all duration-300 group-hover:bg-accent/30 group-hover:scale-110"
            style={{ border: '0.5px solid var(--border)' }}
          >
            <feature.icon className="h-6 w-6 text-accent" />
          </div>
          
          {/* Metric Badge */}
          <div className="text-right">
            <p className="text-2xl md:text-3xl font-bold text-accent">{feature.metric}</p>
            <p className="text-xs text-muted-foreground">{feature.metricLabel}</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-foreground/[0.02] rounded-tl-full translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
      </div>
    </motion.div>
  )
}

export function FeatureBento() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id="recursos" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            O que está incluído
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Hardware, software e IA.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              Tudo junto.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
