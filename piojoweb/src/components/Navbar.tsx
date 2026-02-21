import { Link } from 'react-router-dom';
import { ShoppingBag, User, Menu } from 'lucide-react'; // Iconos

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white shadow-md"> 
      {/* Usamos verde UTVT (aprox) */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo / Nombre */}
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <ShoppingBag size={24} />
          El Piojo
        </Link>

        {/* Links de Navegación (Escritorio) */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-green-200 transition">Inicio</Link>
          <Link to="/vender" className="hover:text-green-200 transition">Vender Ropa</Link>
          <Link to="/categorias" className="hover:text-green-200 transition">Categorías</Link>
        </div>

        {/* Botón de Perfil / Login */}
        <div className="flex gap-4">
           <Link to="/login" className="flex items-center gap-1 bg-white text-green-700 px-3 py-1 rounded-full font-medium hover:bg-green-100 transition">
             <User size={18} />
             <span>Entrar</span>
           </Link>
           {/* Menú móvil (solo visible en pantallas chicas) */}
           <button className="md:hidden">
             <Menu size={24} />
           </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;