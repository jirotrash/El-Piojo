import { motion } from "framer-motion";
import { ArrowDown, ShoppingBag, Tag, Heart } from "lucide-react";
import piojoLogo from "@/assets/piojo-logo.png";
import heroSwap from "@/assets/hero-swap.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={heroSwap} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.img
          src={piojoLogo}
          alt="Piojo - Ropa de segunda mano universitaria"
          className="mx-auto w-36 h-36 md:w-48 md:h-48 rounded-full shadow-card-hover animate-float"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        />

        <motion.h1
          className="mt-6 text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-hero leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Ropa con nueva vida
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Compra, vende y dona ropa de segunda mano en tu universidad. Moda sustentable, accesible y con onda. ♻️
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a href="#catalogo" className="inline-flex items-center gap-2 bg-gradient-hero text-primary-foreground font-display font-bold px-7 py-3 rounded-full text-lg hover:opacity-90 transition-opacity shadow-card">
            <ShoppingBag size={20} /> Comprar
          </a>
          <a href="#como-funciona" className="inline-flex items-center gap-2 bg-gradient-warm text-primary-foreground font-display font-bold px-7 py-3 rounded-full text-lg hover:opacity-90 transition-opacity shadow-card">
            <Tag size={20} /> Vender
          </a>
          <a href="#como-funciona" className="inline-flex items-center gap-2 bg-gradient-donate text-primary-foreground font-display font-bold px-7 py-3 rounded-full text-lg hover:opacity-90 transition-opacity shadow-card">
            <Heart size={20} /> Donar
          </a>
        </motion.div>

        <motion.div className="mt-14" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="mx-auto text-primary" size={28} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
