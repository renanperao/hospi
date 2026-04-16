"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { ScanLine, MessageCircleQuestion, CreditCard, Mic, Package, LayoutDashboard } from "lucide-react"

const guestSteps = [
  {
    number: "01",
    icon: ScanLine,
    title: "Descobrir",
    description: "O hóspede aponta a câmera para a placa de design — em acrílico translúcido ou madeira nobre — e o ambiente se apresenta.",
    detail: "Nenhum download. Nenhum cadastro."
  },
  {
    number: "02",
    icon: MessageCircleQuestion,
    title: "Conversar",
    description: "A IA responde com a sua voz e exibe o vídeo correspondente em milissegundos. Como se você estivesse ali.",
    detail: "Atendimento personalizado, 24 horas."
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Solicitar",
    description: "Café da manhã especial, limpeza extra ou um arranjo surpresa — tudo requisitado com um toque, pago com dignidade via PIX.",
    detail: "Receita extra, sem esforço algum."
  }
]

const hostSteps = [
  {
    number: "01",
    icon: Mic,
    title: "Grave sua voz",
    description: "Em menos de 10 minutos, você grava algumas frases e nossa IA clona sua voz com 99% de fidelidade. Você nunca mais precisará gravar novamente.",
    detail: "Setup de 10 minutos."
  },
  {
    number: "02",
    icon: Package,
    title: "Receba a placa",
    description: "Enviamos a placa física em acrílico ou madeira nobre gravada a laser com o QR Code único da sua propriedade. Instalação em segundos.",
    detail: "Entrega em 3–5 dias úteis."
  },
  {
    number: "03",
    icon: LayoutDashboard,
    title: "Acompanhe pelo painel",
    description: "Visualize dúvidas frequentes, solicitações de serviço e pagamentos via PIX em um painel simples — tudo acontece sem você precisar responder.",
    detail: "Dashboard em tempo real."
  }
]

interface StepCardProps {
  step: typeof guestSteps[0]
  index: number
  isLast: boolean
}

function StepCard({ step, index, isLast }: StepCardProps) {
  const stepRef = useRef(null)
  const stepInView = useInView(stepRef, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={stepRef}
      initial={{ opacity: 0, y: 30 }}
      animate={stepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
    >
      {/* Card */}
      <div 
        className="relative rounded-3xl bg-card/40 backdrop-blur-xl p-8 transition-all duration-500 hover:bg-card/60"
        style={{ border: '0.5px solid var(--border)' }}
      >
        {/* Step Number */}
        <div className="absolute -top-4 left-8">
          <span className="text-7xl font-bold text-foreground/5 select-none">
            {step.number}
          </span>
        </div>

        {/* Icon */}
        <div className="relative mb-6">
          <div 
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 transition-all duration-300 group-hover:bg-accent/30"
            style={{ border: '0.5px solid var(--border)' }}
          >
            <step.icon className="h-7 w-7 text-accent" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {step.description}
        </p>

        {/* Detail Tag */}
        <div 
          className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10"
          style={{ border: '0.5px solid var(--border)' }}
        >
          <span className="text-xs font-medium text-accent">
            {step.detail}
          </span>
        </div>
      </div>

      {/* Arrow (Mobile) */}
      {!isLast && (
        <div className="md:hidden flex justify-center py-4">
          <div className="h-8 w-px bg-gradient-to-b from-border to-transparent" />
        </div>
      )}
    </motion.div>
  )
}

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"guest" | "host">("host")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const steps = activeTab === "guest" ? guestSteps : hostSteps

  return (
    <section id="como-funciona" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Como funciona
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            {activeTab === "host" ? (
              <>Setup simples,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                  resultado imediato
                </span>
              </>
            ) : (
              <>Uma jornada fluida,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                  do QR Code ao atendimento
                </span>
              </>
            )}
          </h2>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-14"
        >
          <div 
            className="inline-flex rounded-2xl bg-card/60 backdrop-blur-xl p-1.5 gap-1"
            style={{ border: '0.5px solid var(--border)' }}
          >
            <button
              id="tab-guest"
              onClick={() => setActiveTab("guest")}
              className={`relative px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === "guest"
                  ? "text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === "guest" && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-xl bg-accent"
                  transition={{ type: "spring", duration: 0.4 }}
                />
              )}
              <span className="relative z-10">Para o hóspede</span>
            </button>
            <button
              id="tab-host"
              onClick={() => setActiveTab("host")}
              className={`relative px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === "host"
                  ? "text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === "host" && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-xl bg-accent"
                  transition={{ type: "spring", duration: 0.4 }}
                />
              )}
              <span className="relative z-10">Para o anfitrião</span>
            </button>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-8 lg:gap-12"
            >
              {steps.map((step, index) => (
                <StepCard
                  key={step.number}
                  step={step}
                  index={index}
                  isLast={index === steps.length - 1}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
