"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Play, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRef } from "react"

export function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" style={{ position: 'relative' }}>
      {/* Hero Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src="/images/hero-luxury-home.jpg"
          alt="Casa de luxo moderna ao entardecer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: textY }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-xl mb-8 shadow-sm"
              style={{ border: '0.5px solid var(--border)' }}
            >
              <Home className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-medium text-muted-foreground">Para anfitriões de imóveis de temporada</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-balance text-foreground">
              Pare de responder{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
                hóspede às 23h.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              Uma placa com QR Code instalada no seu imóvel. O hóspede escaneia e é atendido por uma IA com a sua voz —{" "}
              <span className="text-foreground font-medium">sem app, sem cadastro, sem você precisar responder.</span>
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="btn-glow bg-accent text-accent-foreground hover:bg-accent/90 gap-2 h-14 px-8 text-base sm:text-lg shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-[1.02]"
                asChild
              >
                <a href="#planos">
                  Ver planos e preços
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 h-14 px-8 text-base sm:text-lg bg-card/50 backdrop-blur-xl hover:bg-card/80 transition-all duration-300 hover:scale-[1.02]"
                style={{ border: '0.5px solid var(--border)' }}
                asChild
              >
                <a href="#como-funciona">
                  <Play className="h-4 w-4" />
                  Como funciona
                </a>
              </Button>
            </div>

            {/* Social Proof — early adopter honesto */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10" style={{ border: '0.5px solid var(--border)' }}>
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Vagas abertas para o beta</span>{" "}
                  — primeiros anfitriões com condições especiais
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content — O que o hóspede vê */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex flex-col items-center gap-3"
          >
            {/* Label contextual */}
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Interface vista pelo hóspede
            </p>

            {/* Main Card with QR Plaque Image */}
            <div 
              className="relative w-full max-w-md overflow-hidden rounded-3xl bg-card/60 backdrop-blur-2xl shadow-2xl"
              style={{ border: '0.5px solid var(--border)' }}
            >
              {/* QR Plaque Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/qr-plaque.jpg"
                  alt="Placa premium com QR Code sendo escaneada"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-accent/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-accent">IA</span>
                  </div>
                  <div>
                  <p className="text-sm font-semibold text-foreground">Concierge HOSPI</p>
                  <p className="text-xs text-muted-foreground">Atendimento instantâneo · pagamento via PIX</p>
                </div>
              </div>
              
              {/* Fake Message */}
              <div 
                className="rounded-xl bg-secondary/50 backdrop-blur-sm p-4"
                style={{ border: '0.5px solid var(--border)' }}
              >
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  {`"Bem-vindo ao Villa Azure. Estou aqui para tornar sua estadia inesquecível."`}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2">
                {["Wi-Fi", "Check-out", "Café da manhã"].map((action) => (
                    <button
                      key={action}
                      className="flex-1 rounded-lg bg-secondary/50 py-2.5 px-3 text-xs font-medium text-muted-foreground hover:bg-secondary transition-colors"
                      style={{ border: '0.5px solid var(--border)' }}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 rounded-2xl bg-card/80 backdrop-blur-2xl p-4 shadow-xl"
              style={{ border: '0.5px solid var(--border)' }}
            >
              <p className="text-xs font-medium text-muted-foreground">Carregamento</p>
              <p className="text-2xl font-bold text-foreground">{`< 2s`}</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 rounded-2xl bg-card/80 backdrop-blur-2xl p-4 shadow-xl"
              style={{ border: '0.5px solid var(--border)' }}
            >
              <p className="text-xs font-medium text-muted-foreground">Voz IA clonada</p>
              <div className="flex items-center gap-1 mt-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scaleY: [1, 1.8, 1] }}
                    transition={{ 
                      duration: 0.6, 
                      repeat: Infinity, 
                      delay: i * 0.1 
                    }}
                    className="w-1.5 h-5 bg-accent rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full flex items-start justify-center p-2 bg-card/50 backdrop-blur-xl"
          style={{ border: '0.5px solid var(--border)' }}
        >
          <motion.div 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-accent rounded-full" 
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
