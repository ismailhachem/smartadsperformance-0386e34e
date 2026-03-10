import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-sap.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 py-4 md:py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src={logo} alt="Smart Ads Performance" className="h-10 md:h-12 w-auto" />

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-primary-foreground p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 font-medium text-primary-foreground/80">
            <a href="#servicos" className="hover:text-primary-foreground transition-colors">Serviços</a>
            <a href="#resultados" className="hover:text-primary-foreground transition-colors">Resultados</a>
            <a href="#depoimentos" className="hover:text-primary-foreground transition-colors">Depoimentos</a>
            <a
              href="https://wa.me/5538998820001?text=Olá! Quero escalar meu negócio com a Smart Ads Performance!"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-cta text-accent-foreground px-6 py-2.5 rounded-full font-bold shadow-cta hover:scale-105 transition-transform"
            >
              Falar com Especialista
            </a>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-primary/90 backdrop-blur-md rounded-2xl p-6 flex flex-col gap-4 border border-primary-foreground/10"
          >
            <a href="#servicos" onClick={() => setMenuOpen(false)} className="text-primary-foreground font-medium py-2">Serviços</a>
            <a href="#resultados" onClick={() => setMenuOpen(false)} className="text-primary-foreground font-medium py-2">Resultados</a>
            <a href="#depoimentos" onClick={() => setMenuOpen(false)} className="text-primary-foreground font-medium py-2">Depoimentos</a>
            <a
              href="https://wa.me/5538998820001?text=Olá! Quero escalar meu negócio com a Smart Ads Performance!"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-cta text-accent-foreground px-6 py-3 rounded-full font-bold text-center shadow-cta"
            >
              Falar com Especialista
            </a>
          </motion.div>
        )}
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-16 md:pb-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 md:mb-8"
          >
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium text-primary-foreground">Agência #1 em Performance de Montes Claros</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] mb-5 md:mb-6"
          >
            Transforme cliques em{" "}
            <span className="text-accent">clientes reais</span>{" "}
            para o seu negócio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 md:mb-10 max-w-xl leading-relaxed"
          >
            Estratégias de tráfego pago e marketing digital que geram vendas previsíveis.
            Resultados comprovados em Montes Claros e região.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="https://wa.me/5538998820001?text=Olá! Quero escalar meu negócio com a Smart Ads Performance!"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-cta text-accent-foreground px-8 py-4 rounded-full font-bold text-base md:text-lg shadow-cta hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Quero Mais Clientes
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#resultados"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-primary-foreground/10 transition-colors flex items-center justify-center gap-2"
            >
              <TrendingUp className="w-5 h-5" />
              Ver Resultados
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
        >
          {[
            { number: "+200", label: "Clientes Atendidos" },
            { number: "R$5M+", label: "Em Vendas Geradas" },
            { number: "+350%", label: "ROI Médio" },
            { number: "7 anos", label: "De Experiência" },
          ].map((stat, i) => (
            <div key={i} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 border border-primary-foreground/10">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-accent">{stat.number}</div>
              <div className="text-xs sm:text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
