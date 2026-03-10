import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent rounded-full blur-[200px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-5 md:mb-6 leading-tight">
            Pronto para parar de perder dinheiro e começar a{" "}
            <span className="text-accent">vender de verdade?</span>
          </h2>
          <p className="text-base sm:text-xl text-primary-foreground/80 mb-8 md:mb-10 max-w-2xl mx-auto">
            Agende uma consultoria gratuita e descubra como podemos escalar o seu negócio em Montes Claros.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5538998820001?text=Olá! Quero uma consultoria gratuita com a Smart Ads Performance!"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-cta text-accent-foreground px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-base md:text-lg shadow-cta hover:scale-105 transition-transform flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              Consultoria Gratuita via WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="text-primary-foreground/50 text-xs sm:text-sm mt-6">
            Sem compromisso • Resposta em até 2 horas • 100% personalizado
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
