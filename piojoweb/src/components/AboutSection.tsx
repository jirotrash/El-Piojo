import { motion } from "framer-motion";
import { Heart, Truck, Star, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Hecho con amor",
    desc: "Cada producto es seleccionado con cariño para ti",
    color: "text-coral",
  },
  {
    icon: Truck,
    title: "Entrega en campus",
    desc: "Te llevamos tu pedido directo a tu universidad",
    color: "text-primary",
  },
  {
    icon: Star,
    title: "Calidad premium",
    desc: "Materiales de primera que duran todo el semestre y más",
    color: "text-sunshine",
  },
  {
    icon: Sparkles,
    title: "Diseños exclusivos",
    desc: "Estampados y diseños que no encontrarás en otro lado",
    color: "text-mint",
  },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Por qué <span className="text-gradient-hero">PIOJO</span>?
        </motion.h2>
        <p className="text-center text-muted-foreground mt-3 font-body max-w-lg mx-auto">
          Somos el punto de venta favorito de los universitarios 🎓
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-muted ${f.color} mb-4`}>
                <f.icon size={28} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-muted-foreground font-body text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
