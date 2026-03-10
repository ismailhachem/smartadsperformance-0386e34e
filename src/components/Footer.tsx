import logo from "@/assets/logo-sap.png";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12 mb-12">
          <div>
            <img src={logo} alt="Smart Ads Performance" className="h-10 mb-4" />
            <p className="text-background/60 leading-relaxed text-left">
              Agência de marketing digital especializada em performance. Transformando negócios em Montes Claros desde 2025.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-background mb-4">Serviços</h4>
            <ul className="space-y-2 text-background/60">
              <li>Tráfego Pago</li>
              <li>Consultoria Estratégica de Growth</li>
              <li>Sites & Landing Pages</li>
              <li>Automação & CRM</li>
              <li>Identidade Visual</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-background mb-4">Contato</h4>
            <ul className="space-y-3 text-background/60">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 text-accent" />
                Montes Claros, Minas Gerais
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                (38) 99882-0001
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                smartadsperformance@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 flex-shrink-0 text-accent" />
                <a
                  href="https://instagram.com/smartads.performance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  @smartads.performance
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 pt-8 text-center text-background/40 text-sm">
          © {new Date().getFullYear()} Smart Ads Performance. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
