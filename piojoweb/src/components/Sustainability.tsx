import { motion } from "framer-motion";
import { Leaf, Recycle, TrendingDown, Users } from "lucide-react";

const stats = [
  { icon: Recycle, value: "500+", label: "Prendas rescatadas", color: "text-primary" },
  { icon: Users, value: "200+", label: "Universitarios activos", color: "text-coral" },
  { icon: TrendingDown, value: "70%", label: "Ahorro promedio", color: "text-sunshine" },
  { icon: Leaf, value: "100%", label: "Moda sustentable", color: "text-mint" },
];

const benefits = [
  {
    title: "Cuida tu bolsillo 💰",
    desc: "Ropa de calidad a precios que sí puedes pagar como estudiante.",
  },
  {
    title: "Cuida el planeta 🌍",
    desc: "Cada prenda reutilizada reduce la huella ambiental de la industria textil.",
  },
  {
    title: "Estilo único ✨",
    desc: "Encuentra piezas vintage y originales que nadie más tendrá.",
  },
  {
    title: "Comunidad 🤝",
    desc: "Conecta con otros estudiantes que comparten tu visión sustentable.",
  },
];

const Sustainability = () => {
  return (
    <section id="sostenibilidad" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Moda <span className="text-gradient-hero">Consciente</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mt-3 font-body max-w-lg mx-auto">
          Cada prenda que compras, vendes o donas tiene un impacto positivo 🌱
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="bg-card rounded-2xl p-6 shadow-card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <s.icon className={`mx-auto mb-2 ${s.color}`} size={32} />
              <p className="font-display text-3xl font-bold text-foreground">{s.value}</p>
              <p className="text-muted-foreground font-body text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-display text-xl font-bold text-foreground">{b.title}</h3>
              <p className="mt-2 text-muted-foreground font-body">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
