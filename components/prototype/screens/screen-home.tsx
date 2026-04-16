"use client"

import { motion } from "framer-motion"
import { Wifi, Clock, Coffee, Sparkles, MessageCircle, ChevronRight } from "lucide-react"

interface ScreenHomeProps {
  onChat: () => void
  onService: () => void
}

const services = [
  { icon: Wifi, label: "Wi-Fi", desc: "Ver senha", action: null },
  { icon: Clock, label: "Check-out", desc: "12h · Amanhã", action: null },
  { icon: Coffee, label: "Café da manhã", desc: "Solicitar ↗", action: "service" as const },
  { icon: Sparkles, label: "Limpeza extra", desc: "Agendar", action: null },
]

export function ScreenHome({ onChat, onService }: ScreenHomeProps) {
  return (
    <div className="h-full bg-card flex flex-col">
      {/* Header */}
      <div className="px-4 pt-3 pb-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
            <span className="text-[10px] font-bold text-accent">IA</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold text-foreground leading-none">Villa Azure</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              <p className="text-[9px] text-muted-foreground">Concierge disponível</p>
            </div>
          </div>
        </div>

        {/* AI bubble */}
        <div
          className="mt-2.5 rounded-2xl rounded-tl-sm bg-secondary/60 px-3 py-2"
          style={{ border: "0.5px solid var(--border)" }}
        >
          <p className="text-[11px] text-muted-foreground leading-snug">
            Olá! Como posso ajudá-lo hoje? 😊
          </p>
        </div>
      </div>

      {/* Service grid */}
      <div className="px-4 pb-3">
        <p className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground mb-2">
          Serviços rápidos
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          {services.map((svc) => (
            <motion.button
              key={svc.label}
              whileTap={{ scale: 0.96 }}
              onClick={svc.action === "service" ? onService : undefined}
              className="rounded-xl bg-secondary/40 p-2.5 text-left active:bg-secondary/70"
              style={{ border: "0.5px solid var(--border)" }}
            >
              <svc.icon className="w-3.5 h-3.5 text-accent mb-1.5" />
              <p className="text-[10px] font-semibold text-foreground leading-tight">{svc.label}</p>
              <p className="text-[9px] text-muted-foreground mt-0.5">{svc.desc}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Chat input trigger */}
      <div className="px-4 pb-4">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={onChat}
          className="w-full rounded-xl bg-accent/10 px-3 py-2.5 flex items-center gap-2"
          style={{ border: "0.5px solid var(--border)" }}
        >
          <MessageCircle className="w-3.5 h-3.5 text-accent shrink-0" />
          <span className="text-[11px] text-muted-foreground flex-1 text-left">
            Tirar uma dúvida...
          </span>
          <ChevronRight className="w-3 h-3 text-muted-foreground/40" />
        </motion.button>
      </div>
    </div>
  )
}
