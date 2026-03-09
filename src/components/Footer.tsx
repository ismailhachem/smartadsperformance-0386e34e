import logo from "@/assets/logo-sap.png";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={logo} alt="Smart Ads Performance" className="h-10 mb-4" />
            <p className="text-background/60 leading-relaxed text-left">Agência de marketing digital especializada 
em performance. Transformando negócios em 
Montes Claros desde 2025.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-background mb-4">Serviços</h4>
            <ul className="space-y-2 text-background/60">
              <li>Tráfego Pago</li>
              <li>Social Media</li>
              <li>Sites & Landing Pages</li>
              <li>Automação & CRM</li>
              <li>Identidade Visual</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-background mb-4">Contato</h4>
            <ul className="space-y-3 text-background/60">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Montes Claros, Minas Gerais
              </li>
              <li className="flex items-center gap-2">(38) 99882-0001
(38) 99999-9999<Phone className="w-4 h-4 text-accent" />
                (38) 99999-9999
              </li>
              <li className="flex items-center gap-2">smartadsperformance@gmail.com
                <Mail className="w-4 h-4 text-accent" />
                contato@smartadsperformance.com.br
              </li>
              <li className="flex items-center gap-2">@smartads.performance
                <Instagram className="w-4 h-4 text-accent" />
                @smartadsperformance
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 pt-8 text-center text-background/40 text-sm">
          © {new Date().getFullYear()} Smart Ads Performance. Todos os direitos reservados.
        </div>
      </div>
    </footer>);

};

export default Footer;