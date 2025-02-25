import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />

      <Features />

      {/* Sección de Call-To-Action (CTA) - Mantenemos en naranja */}
      <section className="bg-orange-600 text-white py-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Descubre los Lotes Disponibles</h2>
          <p className="mt-4 text-lg">
            Contamos con lotes desde <span className="font-semibold">250m² hasta 500m²</span> en las mejores ubicaciones del residencial.
          </p>
          <a 
            href="/lots" 
            className="mt-6 inline-block bg-white text-[#F97316] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Ver Disponibilidad
          </a>
        </div>
      </section>

      <Gallery />

      <Map />

      <Testimonials />

      {/* Sección de contacto - Fondo blanco, contenido refinado */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Contáctanos</h2>
          <p className="text-gray-600 mt-2 text-lg leading-relaxed">
            ¿Tienes dudas? Escríbenos y te responderemos a la brevedad.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;



