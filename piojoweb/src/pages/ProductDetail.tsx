import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, Heart, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";

export default function ProductDetail() {
  
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const producto = {
    id: id,
    nombre: "Chamarra de Mezclilla Vintage",
    precio: 350,
    precioOriginal: 500,
    descripcion: "Chamarra clásica de los 90s, marca Levi's original. Tiene un pequeño desgaste en el puño derecho que le da estilo. Ideal para el frío de Toluca.",
    estado: "Usado - Buen estado",
    talla: "M",
    marca: "Levi's",
    vendedor: {
      nombre: "Juan Pérez",
      calificacion: 4.8,
      zona: "San Mateo Atenco - Centro"
    },
    imagenes: ["https://placehold.co/600x600", "https://placehold.co/600x600/png"]
  };

  const handleAgregar = () => {
    addToCart({
      id: Number(id),
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagenes[0]
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      
      {/* Botón Regresar */}
      <Link to="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-6 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Volver a la tienda
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* COLUMNA IZQUIERDA: FOTOS */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
            <img 
              src={producto.imagenes[0]} 
              alt={producto.nombre} 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Miniaturas */}
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-md overflow-hidden cursor-pointer hover:ring-2 ring-blue-500">
                <img src={producto.imagenes[0]} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* COLUMNA DERECHA: INFO */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="secondary" className="text-sm">{producto.estado}</Badge>
            <Badge variant="outline" className="text-sm">Talla {producto.talla}</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {producto.nombre}
          </h1>

          <div className="flex items-end gap-3 mb-6">
            <span className="text-4xl font-bold text-green-600">${producto.precio}</span>
            <span className="text-lg text-gray-400 line-through mb-1">${producto.precioOriginal}</span>
            <span className="text-sm text-green-600 font-medium mb-1 bg-green-50 px-2 py-0.5 rounded">
              -30% Ahorro
            </span>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {producto.descripcion}
          </p>

          {/* --- BOTONES DE ACCIÓN --- */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button 
                size="lg" 
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-lg h-12"
                onClick={handleAgregar} 
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              ¡Lo quiero! (Agregar)
            </Button>
            
            <Button size="lg" variant="outline" className="h-12 w-12 px-0">
              <Heart className="h-6 w-6 text-gray-600" />
            </Button>
          </div>

          <Separator className="my-6" />

          {/* TARJETA DEL VENDEDOR */}
          <div className="bg-gray-50 p-4 rounded-lg border flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">{producto.vendedor.nombre}</h4>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="h-3 w-3 mr-1" />
                {producto.vendedor.zona}
              </div>
            </div>
            <Button variant="ghost" size="sm">Ver Perfil</Button>
          </div> 

          <Separator className="my-6" />

          {/* --- REQUERIMIENTO 13: MAPA DE PUNTOS DE VENTA --- */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <MapPin className="text-red-500" /> 
              Punto de Entrega Sugerido
            </h3>
            <p className="text-sm text-gray-500">
              El vendedor sugiere realizar la entrega en un lugar seguro y público.
            </p>
            
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
              {/* Mapa embebido */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.246426466275!2d-99.53987042478523!3d19.27142498197415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8bd77799017f%3A0x6331908d17277860!2sUniversidad%20Tecnol%C3%B3gica%20del%20Valle%20de%20Toluca!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="text-xs text-center text-gray-400">
              *Acuerda siempre un punto medio seguro como la entrada de la Universidad.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}