"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { X, Check, FileText, MessageSquare, Frown, Video, Mic, ShoppingCart } from "lucide-react"

const oldModel = [
  {
    icon: FileText,
    title: "São 23h de sexta. O hóspede chegou.",
    description: "Ele manda mensagem perguntando a senha do Wi-Fi. Você já respondeu isso 30 vezes esse mês."
  },
  {
    icon: MessageSquare,
    title: "Fim de semana? Esquece.",
    description: "Sábado de manhã, domingo à noite — as perguntas não param. Ar-condicionado, toalha extra, horário de checkout..."
  },
  {
    icon: Frown,
    title: "4 estrelas. Poderia ter sido 5.",
    description: "O hóspede adorou o imóvel, mas achou que a comunicação foi lenta. Uma avaliação que vai ficar para sempre."
  }
]

const vibeExperience = [
  {
    icon: Video,
    title: "Hóspede atendido. Você dormindo.",
    description: "A IA responde com a sua voz, na hora — Wi-Fi, checkout, regras da casa. Sem você precisar abrir o celular."
  },
  {
    icon: Mic,
    title: "Sua voz. Sua presença. Sem você estar lá.",
    description: "O hóspede sente que você se importa, mesmo quando você está em outro lugar. Vínculo real, criado pela IA."
  },
  {
    icon: ShoppingCart,
    title: "Café da manhã pedido às 7h. Você nem soube.",
    description: "Serviços extras solicitados e pagos via PIX direto pelo celular do hóspede. Receita que entra sozinha."
  }
]

interface AnimatedCardProps {
  children: React.ReactNode
  index: number
  isNegative?: boolean
}

function AnimatedCard({ children, index, isNegative = false }: AnimatedCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl p-6 transition-all duration-300 backdrop-blur-xl bg-card/40 hover:bg-card/60"
      style={{ border: '0.5px solid var(--border)' }}
    >
      {children}
    </motion.div>
  )
}

export function PainSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Antes e depois do ESTYA
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Você reconhece{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              essa cena?
            </span>
          </h2>
        </motion.div>

        {/* Product context */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="text-base text-muted-foreground leading-relaxed">
            O ESTYA é uma <span className="text-foreground font-medium">placa física com QR Code</span> instalada no seu imóvel. O hóspede escaneia e conversa com uma IA que fala com a sua voz — respondendo dúvidas, orientando sobre o imóvel e vendendo serviços extras. Tudo sem você precisar estar disponível.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Old Model */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20">
                <X className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold">Sem o ESTYA</h3>
            </motion.div>

            <div className="space-y-4">
              {oldModel.map((item, index) => (
                <AnimatedCard key={item.title} index={index} isNegative>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20">
                      <item.icon className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>

          {/* ESTYA Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <Check className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold">Com o ESTYA</h3>
            </motion.div>

            <div className="space-y-4">
              {vibeExperience.map((item, index) => (
                <AnimatedCard key={item.title} index={index}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <item.icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </div>
    </section>
  )
}
