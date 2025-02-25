import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Juan Pérez",
    text: "¡Increíble servicio! Me ayudaron en todo momento y fueron muy profesionales.",
    image: "/images/person1.jpg",
  },
  {
    id: 2,
    name: "María Rodríguez",
    text: "Una experiencia maravillosa, totalmente recomendado.",
    image: "/images/person2.jpg",
  },
  {
    id: 3,
    name: "Carlos Gómez",
    text: "Nunca había recibido un trato tan personalizado, definitivamente volveré.",
    image: "/images/person3.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Cambio automático de testimonios
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Testimonios</h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
          Lo que dicen nuestros clientes sobre nuestros servicios.
        </p>

        {/* Testimonio con animación */}
        <div className="relative flex items-center justify-center h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 max-w-lg text-center"
            >
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <p className="text-gray-700 italic">"{testimonials[index].text}"</p>
              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                {testimonials[index].name}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


