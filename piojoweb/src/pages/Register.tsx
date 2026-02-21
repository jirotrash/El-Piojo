import React, { useState } from 'react';
import { User, Mail, Lock, Phone, CreditCard, Camera, Users, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nombre_completo: '',
    email_institucional: '',
    password: '',
    confirmPassword: '',
    telefono: '',
    tipo_usuario: '',
    matricula: '',
    foto_perfil: null as File | null
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, foto_perfil: file });
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    if (formData.password.length < 6) {
      setError('La contraseña es muy corta (mínimo 6 caracteres)');
      return;
    }
    if (!formData.tipo_usuario) {
      setError('Selecciona tu tipo de usuario');
      return;
    }

    console.log('Enviando datos...', formData);
    alert('¡Registro exitoso! (Mira la consola)');
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-green-800">Crea tu cuenta</h2>
          <p className="text-gray-500 mt-2">Completa tu perfil para El Piojo UTVT</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 flex items-center gap-2">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* --- CAMBIO IMPORTANTE AQUÍ --- */}
          {/* Ahora TODO el contenedor es un "label" clicable */}
          <div className="md:col-span-2 flex flex-col items-center justify-center mb-4">
            <label className="relative group cursor-pointer">
              
              {/* El Input está oculto pero funciona para todo el label */}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />

              {/* Círculo de la imagen */}
              <div className="w-24 h-24 rounded-full border-4 border-green-100 overflow-hidden bg-gray-100 flex items-center justify-center shadow-sm group-hover:border-green-300 transition">
                {previewUrl ? (
                  <img src={previewUrl} alt="Vista previa" className="w-full h-full object-cover" />
                ) : (
                  <User size={40} className="text-gray-400 group-hover:text-green-600 transition" />
                )}
              </div>
              
              {/* Icono de cámara (Adorno visual) */}
              <div className="absolute bottom-0 right-0 bg-green-700 text-white p-2 rounded-full shadow-md group-hover:bg-green-800 transition">
                <Camera size={16} />
              </div>
            </label>
            <p className="text-xs text-gray-500 mt-2">Toca la imagen para subir tu foto</p>
          </div>
          {/* ----------------------------- */}

          {/* Matrícula */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Matrícula</label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-2.5 text-gray-400" size={20} />
              <input
                type="text"
                name="matricula"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Ej: 2219100..."
                value={formData.matricula}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Nombre Completo */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 text-gray-400" size={20} />
              <input
                type="text"
                name="nombre_completo"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Juan Pérez"
                value={formData.nombre_completo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Teléfono */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
            <div className="relative">
              <Phone className="absolute left-3 top-2.5 text-gray-400" size={20} />
              <input
                type="tel"
                name="telefono"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="722 000 0000"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email Institucional */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Institucional</label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 text-gray-400" size={20} />
              <input
                type="email"
                name="email_institucional"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="al000000@utvt.edu.mx"
                value={formData.email_institucional}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Tipo de Usuario */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Usuario</label>
            <div className="relative">
              <Users className="absolute left-3 top-2.5 text-gray-400" size={20} />
              <select
                name="tipo_usuario"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
                value={formData.tipo_usuario}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar...</option>
                <option value="alumno">Alumno</option>
                <option value="docente">Docente</option>
                <option value="administrativo">Administrativo</option>
              </select>
            </div>
          </div>

          {/* Contraseñas */}
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
              <input
                type="password"
                name="password"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
              <input
                type="password"
                name="confirmPassword"
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          {/* Relleno visual para desktop */}
          <div className="hidden md:block md:col-span-1"></div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg font-bold hover:bg-green-800 transition flex justify-center items-center gap-2 shadow-md"
            >
              Registrarme
              <ArrowRight size={20} />
            </button>
          </div>

        </form>

        <div className="mt-6 text-center pt-4 border-t border-gray-100">
          <p className="text-gray-600">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="text-green-700 font-bold hover:underline">
              Inicia Sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;