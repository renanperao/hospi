"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "E se o hóspede não souber escanear QR Code?",
    answer:
      "A grande maioria dos smartphones modernos lê QR Code nativamente pela câmera — sem precisar de app. Para os casos raros, a placa também exibe uma URL curta que o hóspede pode digitar. Na prática, é mais simples do que parece.",
  },
  {
    question: "A IA pode dar informações erradas sobre minha propriedade?",
    answer:
      "Não. A IA só responde com base no conteúdo que você mesmo configurou — regras da casa, instruções, serviços disponíveis. Ela não inventa respostas. Se uma pergunta estiver fora do escopo configurado, ela informa que vai encaminhar para o anfitrião.",
  },
  {
    question: "O que acontece se a internet cair no imóvel?",
    answer:
      "O QR Code precisa de internet para funcionar — assim como qualquer site. Para imóveis com conexão instável, recomendamos deixar o número de WhatsApp do anfitrião como fallback visível na placa. Isso é raro, mas é bom ter um plano B.",
  },
  {
    question: "Preciso de técnico para instalar a placa?",
    answer:
      "No plano Essencial, a placa chega pelos Correios com instruções simples — é só fixar na parede com fita dupla-face ou parafuso. No plano Premium, nossa equipe vai até o imóvel e instala tudo. Leva menos de 30 minutos.",
  },
  {
    question: "Funciona com Airbnb, Booking e VRBO?",
    answer:
      "Sim. O ESTYA funciona de forma independente das plataformas — é uma placa física no imóvel, não um plugin. O hóspede acessa pelo QR Code, independente de onde reservou. Integrações de API com plataformas estão disponíveis no plano Gestores.",
  },
  {
    question: "Posso personalizar o que a IA responde?",
    answer:
      "Completamente. Você define as regras da casa, os horários, os serviços disponíveis, as instruções de cada cômodo. No plano Premium, nossa equipe te ajuda a estruturar todo o conteúdo durante o onboarding.",
  },
  {
    question: "Como funciona a clonagem de voz?",
    answer:
      "No plano Essencial, você grava algumas frases seguindo um roteiro guiado — leva cerca de 10 minutos. No plano Premium, nossa equipe faz a gravação presencialmente com equipamento profissional. A IA usa essa voz para responder os hóspedes com naturalidade.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim. Não há fidelidade mínima. Você pode cancelar a assinatura a qualquer momento. O setup é um custo único e não é reembolsável — ele cobre a produção da placa e a configuração inicial.",
  },
]

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-2xl bg-card/40 backdrop-blur-xl overflow-hidden"
      style={{ border: '0.5px solid var(--border)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-medium text-foreground leading-snug">{faq.question}</span>
        <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-accent/10" style={{ border: '0.5px solid var(--border)' }}>
          {open ? (
            <Minus className="h-3.5 w-3.5 text-accent" />
          ) : (
            <Plus className="h-3.5 w-3.5 text-accent" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id="faq" className="py-24 md:py-32 relative" ref={sectionRef}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Dúvidas frequentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Perguntas que você{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              provavelmente tem
            </span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FaqItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
