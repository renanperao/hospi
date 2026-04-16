"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

interface ScreenPaymentProps {
  onBack: () => void
}

export function ScreenPayment({ onBack }: ScreenPaymentProps) {
  return (
    <div className="h-full bg-card flex flex-col items-center justify-center gap-4 px-5 pb-8">
      {/* Success icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 11, stiffness: 220, delay: 0.1 }}
      >
        <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center"
          style={{ border: "1.5px solid #10b981" }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
          </motion.div>
        </div>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="text-center"
      >
        <p className="text-sm font-bold text-foreground">Pedido confirmado!</p>
        <p className="text-[10.5px] text-muted-foreground mt-0.5">
          Pagamento via PIX processado
        </p>
      </motion.div>

      {/* Details card */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full rounded-2xl bg-secondary/50 p-4 space-y-2.5"
        style={{ border: "0.5px solid var(--border)" }}
      >
        {[
          { label: "Pedido", value: "#HSP-4821", color: "text-foreground" },
          { label: "Valor pago", value: "R$ 37,00", color: "text-emerald-500" },
          { label: "Entrega estimada", value: "7h30 · amanhã", color: "text-foreground" },
        ].map(({ label, value, color }) => (
          <div key={label} className="flex justify-between items-baseline">
            <p className="text-[10px] text-muted-foreground">{label}</p>
            <p className={`text-[11px] font-semibold ${color}`}>{value}</p>
          </div>
        ))}

        <div className="pt-1" style={{ borderTop: "0.5px solid var(--border)" }}>
          <div className="flex items-start gap-2 mt-2">
            <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
            <p className="text-[9.5px] text-muted-foreground leading-relaxed">
              Você receberá uma notificação quando seu pedido estiver a caminho.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileTap={{ scale: 0.97 }}
        onClick={onBack}
        className="w-full rounded-xl bg-accent/10 py-3 text-[11px] font-semibold text-accent"
        style={{ border: "0.5px solid var(--border)" }}
      >
        Voltar ao menu principal
      </motion.button>
    </div>
  )
}
