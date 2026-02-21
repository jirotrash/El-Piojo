import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Upload, DollarSign,  Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// 1. ESQUEMA DE VALIDACIÓN (REQ 4)
const formSchema = z.object({
  titulo: z.string().min(5, "El título debe tener al menos 5 letras.").max(50, "Máximo 50 caracteres."),
  precio: z.coerce.number().min(1, "El precio debe ser mayor a $0."),
  categoria: z.string({ required_error: "Selecciona una categoría." }),
  condicion: z.string({ required_error: "Selecciona la condición." }),
  descripcion: z.string().min(20, "Cuéntanos más detalles (mínimo 20 letras)."),
  // La imagen la validamos manual para este ejemplo simple
});

export default function Vender() {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // 2. CONFIGURACIÓN DEL FORMULARIO
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      titulo: "",
      precio: 0,
      descripcion: "",
    },
  });

  // 3. MANEJO DE LA IMAGEN (REQ 11)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // 4. ENVÍO DEL FORMULARIO
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!preview) {
      alert("⚠️ ¡Falta la foto! Es obligatorio subir una imagen.");
      return;
    }

    setLoading(true);
    console.log("Datos listos para enviar a PHP:", { ...values, imagen: preview });
    
    // SIMULACIÓN DE SUBIDA A BASE DE DATOS
    setTimeout(() => {
      setLoading(false);
      alert("✅ ¡Producto publicado con éxito!");
      window.location.href = "/"; // Redirigir al inicio
    }, 2000);
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Vender un Artículo</CardTitle>
          <CardDescription>
            Completa los datos para publicar tu producto en El Piojo Web.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              {/* --- CARGA DE IMAGEN (REQ 11) --- */}
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:bg-gray-50 transition-colors cursor-pointer relative">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                {preview ? (
                  <div className="relative w-full h-64">
                     <img src={preview} alt="Vista previa" className="w-full h-full object-contain rounded-md" />
                     <p className="text-xs text-center text-gray-400 mt-2">Clic para cambiar foto</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600 font-medium">Sube una foto de tu producto</p>
                    <p className="text-xs text-gray-500">PNG, JPG hasta 5MB</p>
                  </div>
                )}
              </div>

              {/* TÍTULO */}
              <FormField
                control={form.control}
                name="titulo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título de la publicación</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Tenis Nike Air Force 1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                {/* PRECIO */}
                <FormField
                  control={form.control}
                  name="precio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Precio</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <DollarSign className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                          <Input type="number" className="pl-8" placeholder="0.00" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* CATEGORÍA */}
                <FormField
                  control={form.control}
                  name="categoria"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Categoría</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ropa">Ropa</SelectItem>
                          <SelectItem value="zapatos">Zapatos</SelectItem>
                          <SelectItem value="accesorios">Accesorios</SelectItem>
                          <SelectItem value="libros">Libros / Útiles</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* CONDICIÓN */}
              <FormField
                control={form.control}
                name="condicion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Condición del artículo</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="¿En qué estado está?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="nuevo">Nuevo (Con etiqueta)</SelectItem>
                        <SelectItem value="como-nuevo">Como nuevo (Sin detalles)</SelectItem>
                        <SelectItem value="bueno">Buen estado (Usado)</SelectItem>
                        <SelectItem value="detalles">Con detalles estéticos</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* DESCRIPCIÓN */}
              <FormField
                control={form.control}
                name="descripcion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción detallada</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Menciona talla, marca, defectos, o punto de entrega..." 
                        className="resize-none h-32" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg" disabled={loading}>
                {loading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Publicando...
                    </>
                ) : (
                    "Publicar Ahora"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}