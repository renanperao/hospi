"use client"

import { motion } from "framer-motion"
import { Mic, Play, Volume2, WifiIcon, Clock, CalendarCheck } from "lucide-react"
import Image from "next/image"

// Respect OS reduced-motion preference without triggering Framer Motion's dev warning
function useReducedMotion() {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function IPhoneMockup() {
  const prefersReducedMotion = useReducedMotion()
  const BAR_COUNT = 12

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
      {/* iPhone Frame */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative w-[280px] sm:w-[320px] shrink-0"
      >
        <div className="relative rounded-[3rem] bg-foreground/90 p-3 shadow-2xl shadow-foreground/20">
          {/* Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-foreground rounded-full z-20" />
          
          {/* Screen */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-card aspect-[9/19]">
            {/* Status Bar */}
            <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-foreground/10 to-transparent z-10 flex items-center justify-between px-8 pt-2">
              <span className="text-[10px] font-medium text-foreground/60">9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-foreground/40 rounded-sm">
                  <div className="w-3/4 h-full bg-foreground/40 rounded-sm" />
                </div>
              </div>
            </div>

            {/* Video Preview Area */}
            <div className="absolute inset-0 pt-12">
              <div className="relative h-[55%] overflow-hidden">
                <Image
                  src="/images/guest-relaxing.jpg"
                  alt="Hóspede assistindo vídeo de orientação da propriedade"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Play Button Overlay */}
                <motion.div
                  animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/90 backdrop-blur-xl flex items-center justify-center shadow-lg shadow-accent/30">
                    <Play className="w-6 h-6 text-accent-foreground ml-1" />
                  </div>
                </motion.div>

                {/* Video Duration */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-foreground/70 backdrop-blur-sm">
                  <span className="text-[10px] font-medium text-background">0:42</span>
                </div>
              </div>

              {/* App Interface */}
              <div className="p-4 space-y-4">
                {/* Title */}
                <div>
                  <p className="text-xs text-muted-foreground">Villa Azure · Concierge ESTYA</p>
                  <p className="text-sm font-semibold text-foreground">Como usar a sauna</p>
                </div>

                {/* Voice Wave */}
                <div 
                  className="rounded-xl bg-secondary/50 p-3 flex items-center gap-3"
                  style={{ border: '0.5px solid var(--border)' }}
                >
                  <Volume2 className="w-4 h-4 text-accent" />
                  <div className="flex-1 flex items-center gap-0.5">
                    {[...Array(BAR_COUNT)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={prefersReducedMotion ? {} : { scaleY: [0.3, 1, 0.3] }}
                        transition={{ 
                          duration: 0.8, 
                          repeat: Infinity, 
                          delay: i * 0.07,
                          ease: "easeInOut"
                        }}
                        className="w-1 h-4 bg-accent/60 rounded-full"
                      />
                    ))}
                  </div>
                </div>

                {/* Mic Button */}
                <motion.button
                  animate={prefersReducedMotion ? {} : { 
                    boxShadow: [
                      "0 0 0 0 rgba(180, 140, 100, 0)",
                      "0 0 0 12px rgba(180, 140, 100, 0.15)",
                      "0 0 0 0 rgba(180, 140, 100, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full rounded-2xl bg-accent text-accent-foreground py-4 flex items-center justify-center gap-3 shadow-lg shadow-accent/20"
                >
                  <motion.div
                    animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Mic className="w-5 h-5" />
                  </motion.div>
                  <span className="text-sm font-medium">Como ligo a sauna?</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-gradient-to-b from-foreground/5 to-transparent rounded-full blur-xl" />
      </motion.div>

      {/* Context chips — o que o anfitrião precisa saber */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-row lg:flex-col gap-4 flex-wrap justify-center"
      >
        {[
          {
            icon: WifiIcon,
            title: "Sem download",
            desc: "O hóspede acessa direto pelo navegador do celular"
          },
          {
            icon: Clock,
            title: "Responde em < 2s",
            desc: "IA disponível 24h, sem você precisar estar online"
          },
          {
            icon: Mic,
            title: "Sua voz clonada por IA",
            desc: "O hóspede ouve você, mesmo quando está longe"
          },
          {
            icon: CalendarCheck,
            title: "Serviços com 1 toque",
            desc: "Extras solicitados e pagos via PIX automaticamente"
          },
        ].map((chip, i) => (
          <motion.div
            key={chip.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            className="flex items-start gap-3 rounded-2xl bg-card/60 backdrop-blur-xl p-4 max-w-[220px]"
            style={{ border: '0.5px solid var(--border)' }}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/20">
              <chip.icon className="h-4 w-4 text-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{chip.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{chip.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
