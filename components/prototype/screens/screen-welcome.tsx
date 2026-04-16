"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

interface ScreenWelcomeProps {
  onNext: () => void
}

export function ScreenWelcome({ onNext }: ScreenWelcomeProps) {
  return (
    <div className="h-full bg-foreground/95 flex flex-col items-center justify-center gap-5 p-5 pb-8">
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.45, type: "spring", damping: 14 }}
        className="flex flex-col items-center gap-2"
      >
        <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shadow-lg shadow-accent/40">
          <span className="text-xl font-bold text-accent-foreground">H</span>
        </div>
        <div className="text-center">
          <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-background/40">
            Concierge Virtual
          </p>
          <p className="text-lg font-bold text-background leading-none mt-0.5">HOSPI</p>
        </div>
      </motion.div>

      {/* AI voice message */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        className="w-full rounded-2xl bg-white/10 p-3.5"
        style={{ border: "0.5px solid rgba(255,255,255,0.12)" }}
      >
        {/* Voice wave */}
        <div className="flex items-center gap-0.5 mb-2.5">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scaleY: [0.3, 1, 0.3] }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                delay: i * 0.07,
                ease: "easeInOut",
              }}
              className="flex-1 h-4 bg-accent/70 rounded-full origin-bottom"
            />
          ))}
        </div>
        <p className="text-[11px] text-background/75 italic leading-relaxed">
          "Bem-vindo ao Villa Azure. Sou seu concierge pessoal e estou aqui para tornar cada momento da sua estadia inesquecível."
        </p>
      </motion.div>

      {/* Property */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center"
      >
        <p className="text-[9px] text-background/35 uppercase tracking-widest">Propriedade</p>
        <p className="text-xs font-semibold text-background mt-0.5">Villa Azure · Florianópolis</p>
      </motion.div>

      {/* CTA */}
      <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        onClick={onNext}
        whileTap={{ scale: 0.97 }}
        className="w-full rounded-2xl bg-accent py-3.5 flex items-center justify-center gap-2 shadow-lg shadow-accent/30"
      >
        <span className="text-xs font-semibold text-accent-foreground">Explorar a propriedade</span>
        <ChevronRight className="w-3.5 h-3.5 text-accent-foreground" />
      </motion.button>
    </div>
  )
}
