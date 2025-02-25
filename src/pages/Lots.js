import React from 'react';
import LotsList from '../components/LotsList';

const Lots = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Encabezado */}
      <header className="bg-orange-500 text-white text-center py-12">
        <h1 className="text-3xl md:text-4xl font-bold">Explora nuestros Lotes</h1>
        <p className="text-lg md:text-xl mt-2">Encuentra el lote perfecto para construir tu hogar ideal.</p>
      </header>

      {/* Listado de lotes */}
      <div className="container mx-auto px-4 py-8">
        <LotsList />
      </div>
    </div>
  );
};

export default Lots;
