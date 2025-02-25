import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/galeria-fontana.png";

const images = [
  { id: 1, src: logo, alt: "Imagen 1" },
  { id: 2, src: "/images/gallery2.jpg", alt: "Imagen 2" },
  { id: 3, src: "/images/gallery3.jpg", alt: "Imagen 3" },
  { id: 4, src: "/images/gallery4.jpg", alt: "Imagen 4" },
  { id: 5, src: "/images/gallery5.jpg", alt: "Imagen 5" },
  { id: 6, src: "/images/gallery6.jpg", alt: "Imagen 6" },
  { id: 7, src: "/images/gallery5.jpg", alt: "Imagen 7" },
  { id: 8, src: "/images/gallery6.jpg", alt: "Imagen 8" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Galería</h2>
        <p className="text-gray-600 text-lg text-center max-w-lg mx-auto mb-10">
          Explora nuestras imágenes destacadas.
        </p>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <motion.div
              key={image.id}
              className="relative cursor-pointer rounded-lg overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition">
                Ver imagen
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de imagen ampliada */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <button
                  className="absolute top-3 right-3 bg-white text-gray-800 rounded-full p-2 hover:bg-red-500"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
                <img src={selectedImage} alt="Imagen ampliada" className="max-w-full max-h-[90vh] rounded-lg shadow-lg" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;




