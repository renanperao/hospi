"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function HardwareSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Wood Texture Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/wood-texture.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-widest text-accent mb-4">
                O objeto físico importa
              </p>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6 text-balance">
                Uma placa que o hóspede{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                  vai querer fotografar.
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                Fabricada sob medida em materiais nobres com gravação a laser. Chega pronta para instalar — em segundos, sem furar parede se você não quiser. É o primeiro contato do hóspede com o seu imóvel. Faz sentido ser bonita.
              </p>

              {/* Materials List */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { material: "Madeira Nogueira", description: "Tom quente, ideal para imóveis rústicos e de campo" },
                  { material: "Acrílico Translúcido", description: "Minimalismo contemporâneo para apartamentos urbanos" },
                  { material: "Metal Escovado", description: "Elegância industrial para lofts e espaços modernos" },
                  { material: "Mármore Sintético", description: "Sofisticação clássica para villas e imóveis de luxo" },
                ].map((item, index) => (
                  <motion.div
                    key={item.material}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-xl bg-card/60 backdrop-blur-xl p-4"
                    style={{ border: '0.5px solid var(--border)' }}
                  >
                    <p className="font-medium text-foreground mb-1">{item.material}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div 
              className="relative aspect-square rounded-3xl overflow-hidden bg-card/40 backdrop-blur-xl"
              style={{ border: '0.5px solid var(--border)' }}
            >
              <Image
                src="/images/qr-plaque.jpg"
                alt="Placa HOSPI em madeira nobre"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
              
              {/* Floating Label */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 right-6 rounded-2xl bg-card/80 backdrop-blur-2xl p-4"
                style={{ border: '0.5px solid var(--border)' }}
              >
                <p className="text-sm font-medium text-foreground mb-1">Placa Premium HOSPI</p>
                <p className="text-xs text-muted-foreground">Madeira Nogueira com QR Code gravado a laser</p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-accent/10 blur-3xl"
            />
            <motion.div
              animate={{ rotate: [0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-primary/10 blur-3xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
