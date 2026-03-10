import { motion } from "framer-motion";
import { Target, BarChart3, Globe, Smartphone, Palette } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Tráfego Pago",
    description: "Google Ads, Meta Ads e TikTok Ads com estratégias que convertem. Cada centavo investido gera retorno.",
  },
  {
    icon: BarChart3,
    title: "Consultoria Estratégica de Growth",
    description: "Desenvolvemos toda a estratégia para posicionar sua marca no digital com autoridade, desde o diagnóstico até a solução.",
  },
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description: "Páginas otimizadas para conversão que transformam visitantes em clientes pagantes.",
  },
  {
    icon: Smartphone,
    title: "Automação & CRM",
    description: "Funis de vendas automatizados e CRM integrado para não perder nenhuma oportunidade.",
  },
  {
    icon: Palette,
    title: "Identidade Visual",
    description: "Branding profissional que posiciona sua marca como referência no mercado.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary">O que fazemos</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground mt-3 mb-4">
            Soluções completas para{" "}
            <span className="text-gradient">escalar seu negócio</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-bold">
            Da estratégia à execução, cuidamos de tudo para você focar no que faz de melhor: atender seus clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 gradient-hero rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
