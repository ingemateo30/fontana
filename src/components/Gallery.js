import React, { useState } from 'react';

const images = [
  { id: 1, src: '/images/gallery1.jpg', alt: 'Imagen 1' },
  { id: 2, src: '/images/gallery2.jpg', alt: 'Imagen 2' },
  { id: 3, src: '/images/gallery3.jpg', alt: 'Imagen 3' },
  { id: 4, src: '/images/gallery4.jpg', alt: 'Imagen 4' },
  { id: 5, src: '/images/gallery5.jpg', alt: 'Imagen 5' },
  { id: 6, src: '/images/gallery6.jpg', alt: 'Imagen 6' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">Galería</h2>
      <p className="text-gray-600 text-lg text-center max-w-lg mb-6">Explora nuestras imágenes destacadas.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative cursor-pointer rounded-lg overflow-hidden group"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition">
              Ver imagen
            </div>
          </div>
        ))}
      </div>

      {/* Modal de imagen en grande */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2 hover:bg-red-500"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img src={selectedImage} alt="Imagen ampliada" className="max-w-full max-h-screen rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;


