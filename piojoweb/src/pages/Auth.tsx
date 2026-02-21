import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { User, Mail, Lock, Phone, ArrowRight, Loader2 } from "lucide-react";

// --- 1. ESQUEMAS DE VALIDACIÓN (REGLAS) ---

const loginSchema = z.object({
  email: z.string().email("Correo inválido"),
  password: z.string().min(1, "Ingresa tu contraseña"),
});

const registerSchema = z.object({
  nombre: z.string().min(3, "Tu nombre es muy corto"),
  email: z.string().email("Debe ser un correo válido"),
  telefono: z.string().min(10, "El teléfono debe tener 10 dígitos").max(10, "Máximo 10 dígitos"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);

  // --- FORMULARIO LOGIN ---
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  // --- FORMULARIO REGISTRO ---
  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: { nombre: "", email: "", telefono: "", password: "", confirmPassword: "" },
  });

  // --- LÓGICA DE ENVÍO (MOCK) ---
  
  function onLogin(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);
    // AQUÍ IRÁ LA LLAMADA A TU PHP LOGIN
    console.log("LOGIN:", values);
    
    setTimeout(() => {
      setIsLoading(false);
      alert("¡Bienvenido de nuevo!");
      window.location.href = "/";
    }, 1500);
  }

  function onRegister(values: z.infer<typeof registerSchema>) {
    setIsLoading(true);
    // Guardaremos nombre, email, telefono y password
    console.log("REGISTRO:", values);

    setTimeout(() => {
      setIsLoading(false);
      alert("¡Cuenta creada con éxito! Ahora inicia sesión.");
      // Recargar o cambiar a tab de login podría ser una opción
      window.location.reload(); 
    }, 2000);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Tabs defaultValue="login" className="w-[400px] shadow-lg rounded-xl bg-white">
        
        <TabsList className="grid w-full grid-cols-2 rounded-t-xl">
          <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
          <TabsTrigger value="register">Crear Cuenta</TabsTrigger>
        </TabsList>

        {/* --- PESTAÑA DE LOGIN --- */}
        <TabsContent value="login" className="p-0">
          <Card className="border-0 shadow-none">
            <CardHeader>
              <CardTitle>Acceder</CardTitle>
              <CardDescription>Entra para gestionar tus ventas y compras.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
                  
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            <FormControl>
                                <Input placeholder="ejemplo@utvt.edu.mx" className="pl-10" {...field} />
                            </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                            <FormLabel>Contraseña</FormLabel>
                            <a href="#" className="text-xs text-blue-600 hover:underline">¿Olvidaste tu pass?</a>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            <FormControl>
                                <Input type="password" placeholder="••••••" className="pl-10" {...field} />
                            </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                    {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : "Entrar"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* --- PESTAÑA DE REGISTRO --- */}
        <TabsContent value="register" className="p-0">
          <Card className="border-0 shadow-none">
            <CardHeader>
              <CardTitle>Nuevo Usuario</CardTitle>
              <CardDescription>Únete a la comunidad de El Piojo.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...registerForm}>
                <form onSubmit={registerForm.handleSubmit(onRegister)} className="space-y-3">
                  
                  {/* Nombre */}
                  <FormField
                    control={registerForm.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre Completo</FormLabel>
                        <div className="relative">
                            <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            <FormControl>
                                <Input placeholder="Juan Pérez" className="pl-10" {...field} />
                            </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo</FormLabel>
                        <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            <FormControl>
                                <Input placeholder="tu@correo.com" className="pl-10" {...field} />
                            </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Teléfono  */}
                  <FormField
                    control={registerForm.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono (WhatsApp)</FormLabel>
                        <div className="relative">
                            <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            <FormControl>
                                <Input type="number" placeholder="722 123 4567" className="pl-10" {...field} />
                            </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Password */}
                  <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contraseña</FormLabel>
                        <div className="relative">
                            <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            <FormControl>
                                <Input type="password" placeholder="••••••" className="pl-10" {...field} />
                            </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Confirmar Password */}
                  <FormField
                    control={registerForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirmar Contraseña</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 mt-2" disabled={isLoading}>
                    {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : "Registrarme"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}