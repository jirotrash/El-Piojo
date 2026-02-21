// src/data/products.ts

export interface Prenda {
  id: string;
  titulo: string;
  descripcion: string;
  precio: number;
  talla: string;
  condicion: 'nuevo' | 'seminuevo' | 'usado' | 'detalles';
  imagenes: string[];
  vendedorId: string;
  categoria: string; // Simplificamos a string para aceptar las nuevas categorías
  disponible: boolean;
  fechaPublicacion: Date;
  whatsapp?: string;
  marca?: string; // Agregamos marca opcional
}

export const PRODUCTOS: Prenda[] = [
  {
    id: '1',
    titulo: 'Sudadera UTVT Oficial',
    descripcion: 'Sudadera verde original, la compré en cuatrimestre pasado. Calientita.',
    precio: 250,
    talla: 'M',
    condicion: 'seminuevo',
    imagenes: ['https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=500'],
    vendedorId: 'user1',
    categoria: 'Uniformes',
    disponible: true,
    fechaPublicacion: new Date(),
    whatsapp: '527220000000'
  },
  {
    id: '2',
    titulo: 'Bata de Laboratorio',
    descripcion: 'Bata de algodón 100%, obligatoria para química. Tiene mi nombre bordado pequeño.',
    precio: 150,
    talla: 'L',
    condicion: 'usado',
    imagenes: ['https://images.unsplash.com/photo-1581093458791-9f302e6830d7?auto=format&fit=crop&q=80&w=500'],
    vendedorId: 'user2',
    categoria: 'Uniformes',
    disponible: true,
    fechaPublicacion: new Date()
  },
  {
    id: '3',
    titulo: 'Jeans Mom Jeans Zara',
    descripcion: 'Pantalones de mezclilla corte mom jeans, color claro. Me quedan grandes.',
    precio: 300,
    talla: '36',
    condicion: 'seminuevo',
    imagenes: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=500'],
    vendedorId: 'user3',
    categoria: 'Pantalones',
    disponible: true,
    fechaPublicacion: new Date(),
    marca: 'Zara'
  },
  {
    id: '4',
    titulo: 'Chamarra Puffer Negra',
    descripcion: 'Ideal para el frío de Toluca en la mañana. Muy combinable.',
    precio: 450,
    talla: 'S',
    condicion: 'nuevo',
    imagenes: ['https://images.unsplash.com/photo-1551488852-0801464c54c2?auto=format&fit=crop&q=80&w=500'],
    vendedorId: 'user4',
    categoria: 'Chamarras',
    disponible: true,
    fechaPublicacion: new Date()
  },
  {
    id: '5',
    titulo: 'Tenis Vans Old Skool',
    descripcion: 'Tienen poco uso, la suela está entera. Son talla 7 mexicano.',
    precio: 600,
    talla: '27 MX',
    condicion: 'seminuevo',
    imagenes: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=500'],
    vendedorId: 'user5',
    categoria: 'Zapatos',
    disponible: true,
    fechaPublicacion: new Date(),
    marca: 'Vans'
  }
];