import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCart } from "@/context/CartContext";

export function Navbar() {
    const { items } = useCart();
  return (
    <nav className="border-b bg-white px-4 py-3 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between gap-4">
        
        {/* 1. LOGO */}
        <Link to="/" className="text-xl font-bold text-blue-600 hover:opacity-80 transition-opacity">
          El Piojo
        </Link>

        {/* 2. BUSCADOR (Oculto en celular, visible en PC) */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <Input 
            type="search" 
            placeholder="Buscar ropa, zapatos..." 
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        {/* 3. ACCIONES DERECHA */}
        <div className="flex items-center gap-2">
          
          {/* Botón Carrito */}
        <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            
            {/* Si hay items, mostramos la bolita roja */}
            {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {items.length}
                </span>
            )}
        </Button>

          {/* Menú de Usuario */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  {/* Aquí luego pondremos la foto real del usuario */}
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              {/* ENLACE AL LOGIN (Para probar) */}
              <Link to="/login">
                <DropdownMenuItem className="cursor-pointer">
                  👤 Iniciar Sesión / Registro
                </DropdownMenuItem>
              </Link>

              <DropdownMenuItem className="cursor-pointer">
                📦 Mis Pedidos
              </DropdownMenuItem>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuItem className="text-red-600 cursor-pointer">
                Cerrar Sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}