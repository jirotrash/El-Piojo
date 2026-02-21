import { createContext, useContext, useState, ReactNode } from "react";

// Definimos cómo se ve un producto en el carrito
type CartItem = {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  limpiarCarrito: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (newItem: CartItem) => {
    // 1. Verificamos si ya está en el carrito
    const existe = items.find((i) => i.id === newItem.id);
    
    if (existe) {
      alert("⚠️ ¡Epa! Este producto es único y ya lo tienes en tu carrito.");
      return;
    }

    setItems([...items, newItem]);
    alert("✅ Agregado. ¡Cómpralo antes de que te lo ganen!");
  };

  const removeFromCart = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const limpiarCarrito = () => setItems([]);

  // Calcular total automático
  const total = items.reduce((sum, item) => sum + item.precio, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, limpiarCarrito, total }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar el carrito fácil en cualquier lado
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de un CartProvider");
  return context;
}