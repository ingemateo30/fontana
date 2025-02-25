import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/fontana-logo1.png";

const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center text-center bg-gray-100 px-6 relative overflow-hidden">
      {/* Fondo con textura sutil */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      <div className="max-w-4xl relative z-10">
        {/* Logo */}
        <div className="mb-0 flex justify-center">
          <img 
            src={logo}
            alt="Fontana Conjunto Residencial" 
            className="h-74 md:h-60 w-auto"
          />
        </div>
        
        {/* Contenido */}
        <h2 className="text-3xl font-semibold text-brown-700 mt-[-20px] mb-2">Un nuevo concepto de vida</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Lotes exclusivos en una comunidad planificada con áreas verdes, 
          la mejor ubicación y todos los servicios para construir su hogar ideal.
        </p>
        
        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/lots"
            className="px-8 py-3 text-white bg-orange-600 hover:bg-orange-700 transition rounded-lg font-semibold shadow-md"
          >
            Ver Lotes Disponibles
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition rounded-lg font-semibold"
          >
            Contáctanos
          </Link>
        </div>
      </div>
      
      {/* Elementos decorativos que evocan el logo */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-green-50 to-transparent opacity-70"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-orange-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-green-500 opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;

