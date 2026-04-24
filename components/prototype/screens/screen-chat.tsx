"use client"

import { motion } from "framer-motion"
import { ChevronLeft, Volume2 } from "lucide-react"

interface ScreenChatProps {
  onBack: () => void
}

export function ScreenChat({ onBack }: ScreenChatProps) {
  return (
    <div className="h-full bg-card flex flex-col">
      {/* Header */}
      <div
        className="flex items-center gap-2 px-3 py-2.5 shrink-0"
        style={{ borderBottom: "0.5px solid var(--border)" }}
      >
        <button
          onClick={onBack}
          className="p-1 rounded-lg hover:bg-secondary/50 active:bg-secondary"
        >
          <ChevronLeft className="w-4 h-4 text-foreground" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center">
            <span className="text-[9px] font-bold text-accent">IA</span>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-foreground leading-none">
              Concierge ESTYA
            </p>
            <p className="text-[8px] text-emerald-500 mt-0.5">online agora</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-3 py-3 space-y-3 overflow-y-auto">
        {/* User message 1 */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-end"
        >
          <div className="rounded-2xl rounded-br-sm bg-accent px-3 py-1.5 max-w-[78%]">
            <p className="text-[11px] text-accent-foreground">Qual é a senha do Wi-Fi?</p>
          </div>
        </motion.div>

        {/* AI response with voice */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-end gap-1.5"
        >
          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mb-0.5">
            <span className="text-[7px] font-bold text-accent">IA</span>
          </div>
          <div
            className="rounded-2xl rounded-bl-sm bg-secondary/60 p-2.5 flex-1"
            style={{ border: "0.5px solid var(--border)" }}
          >
            <div className="flex items-center gap-1.5 mb-1.5">
              <Volume2 className="w-2.5 h-2.5 text-accent shrink-0" />
              <div className="flex items-center gap-0.5">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scaleY: [0.25, 1, 0.25] }}
                    transition={{
                      duration: 0.65,
                      repeat: Infinity,
                      delay: i * 0.06,
                      ease: "easeInOut",
                    }}
                    className="w-0.5 h-3 bg-accent/55 rounded-full"
                  />
                ))}
              </div>
            </div>
            <p className="text-[10.5px] text-muted-foreground leading-relaxed">
              A rede é{" "}
              <span className="font-semibold text-foreground">Villa_Azure_5G</span> e a senha é{" "}
              <span className="font-semibold text-foreground">EstyaAzure2024</span>. Boa conexão! 😊
            </p>
          </div>
        </motion.div>

        {/* User message 2 */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-end"
        >
          <div className="rounded-2xl rounded-br-sm bg-accent px-3 py-1.5 max-w-[78%]">
            <p className="text-[11px] text-accent-foreground">Obrigado! 🙏</p>
          </div>
        </motion.div>

        {/* AI response 2 */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-end gap-1.5"
        >
          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mb-0.5">
            <span className="text-[7px] font-bold text-accent">IA</span>
          </div>
          <div
            className="rounded-2xl rounded-bl-sm bg-secondary/60 p-2.5 flex-1"
            style={{ border: "0.5px solid var(--border)" }}
          >
            <p className="text-[10.5px] text-muted-foreground">
              Disponha! Se precisar de mais alguma coisa, é só chamar. 🏡
            </p>
          </div>
        </motion.div>
      </div>

      {/* Back button */}
      <div className="px-3 pb-4 shrink-0">
        <button
          onClick={onBack}
          className="w-full rounded-xl bg-secondary/50 py-2.5 text-[11px] font-medium text-muted-foreground"
          style={{ border: "0.5px solid var(--border)" }}
        >
          ← Voltar ao menu principal
        </button>
      </div>
    </div>
  )
}
