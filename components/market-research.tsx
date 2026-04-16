"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp } from "lucide-react"
import Image from "next/image"

export function MarketResearch() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section id="pesquisa" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-card/40 backdrop-blur-2xl"
          style={{ border: '0.5px solid var(--border)' }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/guest-relaxing.jpg"
              alt="Hóspede relaxando em propriedade de luxo"
              fill
              className="object-cover opacity-20"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card/80" />
          </div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 mb-6"
                  style={{ border: '0.5px solid var(--border)' }}
                >
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span className="text-xs font-medium text-muted-foreground">O problema real do anfitrião</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
                  O hóspede de hoje{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">não espera.</span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ele chega, escaneia o QR Code e quer saber a senha do Wi-Fi agora. Não amanhã. Não depois que você acordar. Propriedades que respondem na hora são as que ficam na memória — e nas avaliações.
                </p>
              </div>

              {/* Stats */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  {/* Main Stat Card */}
                  <div 
                    className="rounded-3xl bg-card/60 backdrop-blur-2xl p-8 text-center"
                    style={{ border: '0.5px solid var(--border)' }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      <p className="text-7xl md:text-8xl font-bold text-accent mb-2">
                        3–5h
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-sm mx-auto">
                        é o tempo médio que um anfitrião gasta por semana{" "}
                        <span className="text-foreground font-medium">respondendo as mesmas perguntas</span>{" "}
                        de hóspedes diferentes.
                      </p>
                    </motion.div>

                    {/* Supporting Stats */}
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {[
                        { value: "5–10", label: "Perguntas repetitivas por estadia" },
                        { value: "23h", label: "Pico de mensagens — noites e fins de semana" },
                        { value: "∞", label: "Vezes que você já respondeu sobre o Wi-Fi" }
                      ].map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                          className="text-center"
                        >
                          <p className="text-2xl font-bold text-accent">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>

                    <p className="mt-6 text-xs text-muted-foreground/60">
                      Estimativas baseadas em comportamento típico de anfitriões Airbnb. Dados reais em coleta.
                    </p>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
