import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Award } from "lucide-react";

const results = [
  {
    icon: DollarSign,
    metric: "478%",
    label: "ROI para e-commerce local",
    desc: "Loja de roupas em Montes Claros",
  },
  {
    icon: Users,
    metric: "3.200+",
    label: "Leads gerados em 30 dias",
    desc: "Clínica odontológica",
  },
  {
    icon: TrendingUp,
    metric: "12x",
    label: "Aumento em faturamento",
    desc: "Restaurante delivery",
  },
  {
    icon: Award,
    metric: "R$850K",
    label: "Vendas em 90 dias",
    desc: "Imobiliária regional",
  },
];

const ResultsSection = () => {
  return (
    <section id="resultados" className="py-24 gradient-purple-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-foreground rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-accent">Resultados Reais</span>
          <h2 className="text-3xl md:text-5xl font-black text-primary-foreground mt-3 mb-4">
            Números que falam por si
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Nossos clientes em Montes Claros e região já comprovam: investir em marketing digital com a Smart Ads gera resultado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 text-center hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 gradient-cta rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="text-4xl font-black text-accent mb-2">{item.metric}</div>
              <div className="text-primary-foreground font-semibold mb-1">{item.label}</div>
              <div className="text-primary-foreground/50 text-sm">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
