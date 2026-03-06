import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María G.",
    role: "Estudiante de Diseño",
    text: "Encontré una chamarra vintage increíble por $100. En tienda costaría más de $500. ¡PIOJO es lo mejor!",
    stars: 5,
  },
  {
    name: "Carlos R.",
    role: "Ing. en Sistemas",
    text: "Vendí toda la ropa que ya no me quedaba y gané para mis libros del semestre. Súper fácil el proceso.",
    stars: 5,
  },
  {
    name: "Ana L.",
    role: "Estudiante de Medicina",
    text: "Me encanta donar aquí porque sé que la ropa llega a compañeros que de verdad la necesitan. 💕",
    stars: 5,
  },
  {
    name: "Diego M.",
    role: "Comunicación",
    text: "La calidad de las prendas es buenísima. Siempre encuentro cosas únicas que nadie más tiene.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 bg-muted/40 transition-colors">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Lo que dicen <span className="text-gradient-hero">nuestros usuarios</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mt-3 font-body max-w-lg mx-auto">
          Historias reales de universitarios como tú 💬
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Quote className="text-primary/20 absolute top-4 right-4" size={32} />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} className="fill-sunshine text-sunshine" />
                ))}
              </div>
              <p className="text-foreground font-body text-sm leading-relaxed">{t.text}</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground font-body text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
