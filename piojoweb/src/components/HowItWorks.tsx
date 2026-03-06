import { motion } from "framer-motion";
import { Camera, MessageCircle, Truck, Heart, Tag, ShoppingBag } from "lucide-react";
import sellImg from "@/assets/sell-clothes.png";
import buyImg from "@/assets/buy-clothes.png";
import donateImg from "@/assets/donate-clothes.png";

const flows = [
  {
    id: "vender",
    title: "Vende tu Ropa",
    subtitle: "Dale una segunda oportunidad a lo que ya no usas",
    image: sellImg,
    gradient: "bg-gradient-warm",
    steps: [
      { icon: Camera, text: "Toma fotos de tus prendas" },
      { icon: Tag, text: "Ponle precio o déjanos ayudarte" },
      { icon: MessageCircle, text: "Te contactamos y listo" },
    ],
  },
  {
    id: "comprar",
    title: "Compra con Estilo",
    subtitle: "Encuentra prendas únicas a precios increíbles",
    image: buyImg,
    gradient: "bg-gradient-hero",
    steps: [
      { icon: ShoppingBag, text: "Explora nuestro catálogo" },
      { icon: MessageCircle, text: "Aparta tu prenda favorita" },
      { icon: Truck, text: "Recógela en tu campus" },
    ],
  },
  {
    id: "donar",
    title: "Dona con Amor",
    subtitle: "Tu ropa puede cambiar la vida de alguien más",
    image: donateImg,
    gradient: "bg-gradient-donate",
    steps: [
      { icon: Heart, text: "Reúne la ropa que quieras donar" },
      { icon: MessageCircle, text: "Avísanos para coordinar" },
      { icon: Heart, text: "¡Haces feliz a alguien!" },
    ],
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Cómo <span className="text-gradient-hero">Funciona</span>?
        </motion.h2>
        <p className="text-center text-muted-foreground mt-3 font-body max-w-lg mx-auto">
          Es súper fácil. Elige lo que quieras hacer y nosotros te guiamos 🚀
        </p>

        <div className="mt-16 space-y-20">
          {flows.map((flow, idx) => (
            <motion.div
              key={flow.id}
              className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex-1 w-full max-w-md">
                <div className="rounded-3xl overflow-hidden shadow-card">
                  <img src={flow.image} alt={flow.title} className="w-full aspect-square object-cover" loading="lazy" />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <h3 className="text-2xl md:text-4xl font-display font-bold">{flow.title}</h3>
                <p className="text-muted-foreground font-body text-lg">{flow.subtitle}</p>

                <div className="space-y-4">
                  {flow.steps.map((step, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${flow.gradient} flex items-center justify-center text-primary-foreground`}>
                        <step.icon size={22} />
                      </div>
                      <p className="font-body font-semibold text-foreground">{step.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
