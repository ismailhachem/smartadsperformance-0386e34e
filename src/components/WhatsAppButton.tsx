import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5538998820001?text=Olá! Quero saber mais sobre os serviços da Smart Ads Performance!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 gradient-cta w-14 h-14 rounded-full flex items-center justify-center shadow-cta hover:scale-110 transition-transform animate-bounce"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-accent-foreground" />
    </a>
  );
};

export default WhatsAppButton;
