import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { lots } from '../data/lots';

const LotsList = () => {
  const [filters, setFilters] = useState({
    minSize: '',
    maxSize: '',
    minPrice: '',
    maxPrice: '',
    onlyAvailable: true
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const filteredLots = lots.filter(lot => {
    if (filters.onlyAvailable && !lot.available) return false;
    if (filters.minSize && lot.size < parseInt(filters.minSize)) return false;
    if (filters.maxSize && lot.size > parseInt(filters.maxSize)) return false;
    if (filters.minPrice && lot.price < parseInt(filters.minPrice)) return false;
    if (filters.maxPrice && lot.price > parseInt(filters.maxPrice)) return false;
    return true;
  });

  return (
    <section className="p-8 bg-gray-100">
      {/* Filtros */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold text-orange-500 mb-4">Filtrar Lotes</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Tamaño */}
          <div>
            <label className="block text-gray-700 font-medium">Tamaño (m²)</label>
            <div className="flex gap-2">
              <input 
                type="number" 
                placeholder="Mín" 
                name="minSize" 
                value={filters.minSize} 
                onChange={handleFilterChange} 
                className="w-full border rounded-lg p-2"
              />
              <input 
                type="number" 
                placeholder="Máx" 
                name="maxSize" 
                value={filters.maxSize} 
                onChange={handleFilterChange} 
                className="w-full border rounded-lg p-2"
              />
            </div>
          </div>

          {/* Precio */}
          <div>
            <label className="block text-gray-700 font-medium">Precio ($)</label>
            <div className="flex gap-2">
              <input 
                type="number" 
                placeholder="Mín" 
                name="minPrice" 
                value={filters.minPrice} 
                onChange={handleFilterChange} 
                className="w-full border rounded-lg p-2"
              />
              <input 
                type="number" 
                placeholder="Máx" 
                name="maxPrice" 
                value={filters.maxPrice} 
                onChange={handleFilterChange} 
                className="w-full border rounded-lg p-2"
              />
            </div>
          </div>

          {/* Disponibilidad */}
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="onlyAvailable" 
              name="onlyAvailable" 
              checked={filters.onlyAvailable} 
              onChange={handleFilterChange} 
              className="mr-2"
            />
            <label htmlFor="onlyAvailable" className="text-gray-700 font-medium">Solo disponibles</label>
          </div>
        </div>
      </div>

      {/* Lista de Lotes */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredLots.length > 0 ? (
          filteredLots.map(lot => (
            <div 
              key={lot.id} 
              className={`bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 ${
                !lot.available ? 'opacity-75' : ''
              }`}
            >
              {/* Imagen */}
              <div className="relative">
                <img 
                  src={lot.image} 
                  alt={`Lote ${lot.number}`} 
                  className="w-full h-48 object-cover"
                />
                {!lot.available && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold">
                    Vendido
                  </div>
                )}
                {lot.featured && (
                  <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 rounded">
                    Destacado
                  </div>
                )}
              </div>

              {/* Información */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">Lote {lot.number}</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li><strong>Tamaño:</strong> {lot.size} m²</li>
                  <li><strong>Precio:</strong> ${lot.price.toLocaleString()}</li>
                  <li><strong>Ubicación:</strong> {lot.location}</li>
                </ul>
                <Link 
                  to={`/lots/${lot.id}`} 
                  className="block mt-4 text-center bg-orange-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-600 text-lg">
            No se encontraron lotes con los filtros seleccionados.
          </div>
        )}
      </div>
    </section>
  );
};

export default LotsList;
