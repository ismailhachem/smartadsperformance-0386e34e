import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Zap } from "lucide-react";
import logo from "@/assets/logo-sap.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src={logo} alt="Smart Ads Performance" className="h-12 w-auto" />
          <div className="hidden md:flex items-center gap-8 font-medium text-primary-foreground/80">
            <a href="#servicos" className="hover:text-primary-foreground transition-colors">Serviços</a>
            <a href="#resultados" className="hover:text-primary-foreground transition-colors">Resultados</a>
            <a href="#depoimentos" className="hover:text-primary-foreground transition-colors">Depoimentos</a>
            <a

              target="_blank"
              rel="noopener noreferrer"
              className="gradient-cta text-accent-foreground px-6 py-2.5 rounded-full font-bold shadow-cta hover:scale-105 transition-transform" href="https://wa.me/5538998820001?text=Ol\xE1! Quero escalar meu neg\xF3cio com a Smart Ads Performance!">
              
              Falar com Especialista
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8">
            
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Agência #1 em Performance de Montes Claros</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] mb-6">
            
            Transforme cliques em{" "}
            <span className="text-accent">clientes reais</span>{" "}
            para o seu negócio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl leading-relaxed">
            
            Estratégias de tráfego pago e marketing digital que geram vendas previsíveis.
            Resultados comprovados em Montes Claros e região.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4">
            
            <a

              target="_blank"
              rel="noopener noreferrer"
              className="gradient-cta text-accent-foreground px-8 py-4 rounded-full font-bold text-lg shadow-cta hover:scale-105 transition-transform flex items-center justify-center gap-2" href="https://wa.me/5538998820001?text=Ol\xE1! Quero escalar meu neg\xF3cio com a Smart Ads Performance!">
              
              Quero Mais Clientes
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#resultados"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-foreground/10 transition-colors flex items-center justify-center gap-2">
              
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
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {[
          { number: "+200", label: "Clientes Atendidos" },
          { number: "R$5M+", label: "Em Vendas Geradas" },
          { number: "+350%", label: "ROI Médio" },
          { number: "7 anos", label: "De Experiência" }].
          map((stat, i) =>
          <div key={i} className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 border border-primary-foreground/10">
              <div className="text-2xl md:text-3xl font-black text-accent">{stat.number}</div>
              <div className="text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
            </div>
          )}
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;