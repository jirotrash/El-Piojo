import React, { useState } from 'react';
import { Upload, DollarSign, Tag, FileText, MapPin, CheckCircle, Shirt } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sell = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    titulo: '',
    precio: '',
    descripcion: '',
    categoria: '',
    talla: '',      
    marca: '',      
    condicion: 'usado',
    ubicacion: 'Cafetería',
    imagen: null as File | null
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, imagen: file });
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Publicando prenda:', formData);
    alert('¡Prenda publicada con éxito!');
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-800">Vender Ropa</h1>
        <p className="text-gray-600">Dale una segunda vida a tu estilo.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6">
        
        {/* FOTO */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Foto de la Prenda</label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-green-300 border-dashed rounded-xl cursor-pointer bg-green-50 hover:bg-green-100 transition relative overflow-hidden group">
              {previewUrl ? (
                <img src={previewUrl} alt="Vista previa" className="w-full h-full object-contain p-2" />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-green-700">
                  <Upload size={40} className="mb-2 group-hover:scale-110 transition" />
                  <p className="text-sm font-semibold">Sube una foto clara</p>
                </div>
              )}
              <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} required />
            </label>
          </div>
        </div>

        {/* DATOS DE LA PRENDA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Título */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">¿Qué vendes?</label>
            <div className="relative">
              <Shirt className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                type="text" 
                name="titulo"
                placeholder="Ej: Sudadera GAP gris, Vestido de noche..." 
                className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                value={formData.titulo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Categoría (SOLO ROPA) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Prenda</label>
            <select 
              name="categoria" 
              className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
              value={formData.categoria}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona...</option>
              <option value="tops">Playeras / Tops / Blusas</option>
              <option value="hoodies">Sudaderas / Chamarras</option>
              <option value="pantalones">Pantalones / Jeans</option>
              <option value="vestidos">Vestidos / Faldas</option>
              <option value="zapatos">Zapatos / Tenis</option>
              <option value="uniformes">Uniforme UTVT / Batas</option>
              <option value="accesorios">Accesorios (Gorras, Bolsas)</option>
            </select>
          </div>

          {/* Talla */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Talla</label>
            <select 
              name="talla" 
              className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
              value={formData.talla}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona...</option>
              <option value="XS">XS (Extra Chica)</option>
              <option value="S">S (Chica)</option>
              <option value="M">M (Mediana)</option>
              <option value="L">L (Grande)</option>
              <option value="XL">XL (Extra Grande)</option>
              <option value="Unica">Unitalla</option>
              <option value="Calzado">Número (Calzado)</option>
            </select>
          </div>

          {/* Marca */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Marca (Opcional)</label>
            <input 
              type="text" 
              name="marca"
              placeholder="Zara, Nike, Shein..." 
              className="w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              value={formData.marca}
              onChange={handleChange}
            />
          </div>

          {/* Precio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Precio</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                type="number" 
                name="precio"
                placeholder="0.00" 
                className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                value={formData.precio}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Detalles de la prenda</label>
          <div className="relative">
            <FileText className="absolute left-3 top-3 text-gray-400" size={18} />
            <textarea 
              name="descripcion"
              rows={3}
              placeholder="¿Tiene algún detalle? ¿Viene reducida? Descríbelo aquí."
              className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              value={formData.descripcion}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Punto de Entrega */}
        <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">¿Dónde entregas en UTVT?</label>
           <div className="relative">
             <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
             <select 
               name="ubicacion" 
               className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
               value={formData.ubicacion}
               onChange={handleChange}
             >
               <option value="Cafetería">Cafetería</option>
               <option value="Edificio K">Edificio K</option>
               <option value="Biblioteca">Biblioteca</option>
               <option value="Entrada Principal">Entrada Principal</option>
               <option value="Torniquetes">Torniquetes</option>
             </select>
           </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-green-700 text-white font-bold py-3.5 rounded-xl hover:bg-green-800 transition shadow-lg flex items-center justify-center gap-2 mt-4"
        >
          <CheckCircle size={20} />
          Publicar Ropa
        </button>

      </form>
    </div>
  );
};

export default Sell;