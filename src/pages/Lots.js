import React from 'react';
import LotsList from '../components/LotsList';
import { FaWhatsapp } from 'react-icons/fa';

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
       <a
              href="https://wa.me/573184792991"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
            >
              <FaWhatsapp className="text-3xl" />
            </a>
    </div>
  );
};

export default Lots;
