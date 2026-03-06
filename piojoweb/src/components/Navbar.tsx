import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Recycle } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import piojoLogo from "@/assets/piojo-logo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Cómo Funciona", href: "#como-funciona" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Sostenibilidad", href: "#sostenibilidad" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border transition-colors">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={piojoLogo} alt="Piojo logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-xl font-bold text-primary">PIOJO</span>
          <span className="hidden sm:inline-block text-xs font-body text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
            2da mano
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-body font-semibold text-sm text-foreground/80 hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Cambiar tema"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a
            href="#contacto"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-hero text-primary-foreground font-display font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity text-sm"
          >
            <Recycle size={16} />
            Únete
          </a>

          <button className="lg:hidden text-foreground p-2" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-body font-semibold text-foreground/80 hover:text-primary transition-colors text-lg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 bg-gradient-hero text-primary-foreground font-display font-semibold px-5 py-2 rounded-full"
                >
                  <Recycle size={16} />
                  Únete
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
