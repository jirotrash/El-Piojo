import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Sparkles className="mx-auto text-primary-foreground mb-4" size={36} />
          <h2 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground">
            Tu clóset puede hacer la diferencia
          </h2>
          <p className="mt-3 text-primary-foreground/80 font-body text-lg max-w-xl mx-auto">
            Únete a la comunidad PIOJO y dale una segunda vida a tu ropa. Es bueno para ti, para otros y para el planeta.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#como-funciona"
              className="bg-card text-primary font-display font-bold px-8 py-3 rounded-full text-lg hover:bg-card/90 transition-colors shadow-card"
            >
              Quiero Vender
            </a>
            <a
              href="#catalogo"
              className="bg-primary-foreground/20 text-primary-foreground border-2 border-primary-foreground/40 font-display font-bold px-8 py-3 rounded-full text-lg hover:bg-primary-foreground/30 transition-colors"
            >
              Quiero Comprar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
