import { Heart, Recycle } from "lucide-react";
import piojoLogo from "@/assets/piojo-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={piojoLogo} alt="Piojo" className="w-10 h-10 rounded-full" />
            <div>
              <span className="font-display font-bold text-primary text-lg">PIOJO</span>
              <p className="text-muted-foreground font-body text-xs">Ropa de 2da mano universitaria</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm font-body text-muted-foreground">
            <a href="#como-funciona" className="hover:text-primary transition-colors">Cómo Funciona</a>
            <a href="#catalogo" className="hover:text-primary transition-colors">Catálogo</a>
            <a href="#sostenibilidad" className="hover:text-primary transition-colors">Sostenibilidad</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </div>

          <p className="text-muted-foreground font-body text-xs flex items-center gap-1">
            <Recycle size={14} className="text-primary" />
            Hecho con <Heart size={12} className="text-coral" /> © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
