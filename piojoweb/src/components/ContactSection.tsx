import { motion } from "framer-motion";
import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Listo para <span className="text-gradient-hero">empezar</span>?
        </motion.h2>
        <p className="mt-3 text-muted-foreground font-body text-lg">
          Ya sea que quieras comprar, vender o donar, escríbenos y te ayudamos al instante 📩
        </p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-mint text-primary-foreground font-display font-bold px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity shadow-card"
          >
            <MessageCircle size={24} /> WhatsApp
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gradient-warm text-primary-foreground font-display font-bold px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity shadow-card"
          >
            <Instagram size={24} /> Instagram
          </a>
          <a
            href="mailto:hola@piojo.com"
            className="inline-flex items-center justify-center gap-3 bg-gradient-hero text-primary-foreground font-display font-bold px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity shadow-card"
          >
            <Mail size={24} /> Email
          </a>
        </motion.div>

        <motion.div
          className="mt-10 inline-flex items-center gap-2 text-muted-foreground font-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <MapPin size={18} className="text-primary" />
          Presente en universidades de tu ciudad
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
