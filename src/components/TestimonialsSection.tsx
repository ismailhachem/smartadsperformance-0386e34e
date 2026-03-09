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
    text: "Em 30 dias geraram mais de 3.000 leads qualificados para minha clínica. Minha agenda nunca esteve tão cheia. Equipe sensacional!",
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
    <section id="depoimentos" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Depoimentos</span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mt-3 mb-4">
            Quem já <span className="text-gradient">escalou com a gente</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <div>
                <div className="font-bold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role} — Montes Claros/MG</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
