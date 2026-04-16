"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, Minus, Plus } from "lucide-react"

interface ScreenServiceProps {
  onConfirm: () => void
  onBack: () => void
}

type Item = { name: string; price: number; qty: number }

const initialItems: Item[] = [
  { name: "Café com leite", price: 12, qty: 1 },
  { name: "Pão de queijo (3 un.)", price: 15, qty: 1 },
  { name: "Suco de laranja", price: 10, qty: 1 },
  { name: "Mix de frutas frescas", price: 18, qty: 0 },
]

export function ScreenService({ onConfirm, onBack }: ScreenServiceProps) {
  const [items, setItems] = useState<Item[]>(initialItems)

  function change(index: number, delta: number) {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, qty: Math.max(0, item.qty + delta) } : item
      )
    )
  }

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)

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
        <div>
          <p className="text-[11px] font-semibold text-foreground leading-none">
            Café da Manhã
          </p>
          <p className="text-[9px] text-muted-foreground mt-0.5">Disponível até 10h30</p>
        </div>
      </div>

      {/* Items */}
      <div className="flex-1 px-3 py-2.5 space-y-1.5 overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground mb-1.5">
          Monte o seu pedido
        </p>
        {items.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center gap-2 rounded-xl bg-secondary/40 px-3 py-2"
            style={{ border: "0.5px solid var(--border)" }}
          >
            <div className="flex-1 min-w-0">
              <p className="text-[10.5px] font-medium text-foreground leading-tight truncate">
                {item.name}
              </p>
              <p className="text-[9.5px] text-accent mt-0.5">R$ {item.price},00</p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => change(index, -1)}
                className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center active:bg-secondary/80"
              >
                <Minus className="w-2.5 h-2.5 text-muted-foreground" />
              </button>
              <span className="text-[11px] font-semibold text-foreground w-3 text-center">
                {item.qty}
              </span>
              <button
                onClick={() => change(index, +1)}
                className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center active:bg-accent/30"
              >
                <Plus className="w-2.5 h-2.5 text-accent" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-3 pb-4 space-y-2 shrink-0">
        <div className="flex justify-between items-baseline px-0.5">
          <p className="text-[10px] text-muted-foreground">Total do pedido</p>
          <p className="text-sm font-bold text-foreground">R$ {total},00</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={total > 0 ? onConfirm : undefined}
          className={`w-full rounded-xl py-3 flex items-center justify-center gap-2 ${
            total > 0
              ? "bg-accent shadow-md shadow-accent/20"
              : "bg-secondary/60 cursor-not-allowed"
          }`}
        >
          <span
            className={`text-[12px] font-semibold ${
              total > 0 ? "text-accent-foreground" : "text-muted-foreground"
            }`}
          >
            {total > 0 ? `Pagar via PIX · R$ ${total},00` : "Adicione itens ao pedido"}
          </span>
        </motion.button>
      </div>
    </div>
  )
}
