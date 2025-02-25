import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center text-center bg-gray-100 px-6">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4">Fontana</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Un nuevo concepto de vida</h2>
        <p className="text-lg text-gray-600 mb-6">
          Lotes exclusivos en una comunidad planificada con la mejor ubicación y servicios.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/lots"
            className="px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 transition rounded-lg font-semibold"
          >
            Ver Lotes Disponibles
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition rounded-lg font-semibold"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

