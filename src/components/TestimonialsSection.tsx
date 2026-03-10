import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcos Oliveira",
    role: "Dono de Restaurante",
    text: "Antes da Smart Ads, meu delivery mal cobria os custos. Hoje faturo 4x mais e tenho fila de espera! Melhor investimento que fiz.",
    stars: 5,
  },
  {
    name: "Dra. Camila Santos",
    role: "Dentista",
    text: "Em 30 dias geraram mais de 500 leads qualificados para minha clínica. Minha agenda nunca esteve tão cheia. Equipe sensacional!",
    stars: 5,
  },
  {
    name: "Rafael Mendes",
    role: "Loja de Roupas",
    text: "O ROI de 478% não é exagero. A equipe da Smart Ads entende de verdade o mercado de Montes Claros. Recomendo de olhos fechados.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Depoimentos</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground mt-3 mb-4">
            Quem já <span className="text-gradient">escalou com a gente</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border relative"
            >
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/20 absolute top-5 right-5 md:top-6 md:right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-5 md:mb-6 italic text-sm md:text-base">"{t.text}"</p>
              <div>
                <div className="font-bold text-foreground text-sm md:text-base">{t.name}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{t.role} — Montes Claros/MG</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
