import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import { FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-page relative">
      <Hero />

      {/* Sección de introducción */}
      <section className="bg-white py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">Bienvenido a Fontana Conjunto Residencial</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Descubre un espacio exclusivo donde tus sueños de vida se hacen realidad. Un desarrollo residencial de primer nivel con todas las comodidades para ti y tu familia.
          </p>
        </div>
      </section>

      <Features />

      {/* Sección de Call-To-Action (CTA) */}
      <section className="bg-[#F28500] text-white py-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Descubre los Lotes Disponibles</h2>
          <p className="mt-4 text-lg">Contamos con lotes desde 250m² hasta 500m² en las mejores ubicaciones del residencial.</p>
          <a href="/lots" className="mt-6 inline-block bg-white text-[#F28500] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">
            Ver Disponibilidad
          </a>
        </div>
      </section>

      <Gallery />

      <Map />

      <Testimonials />

      {/* Sección de contacto */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contáctanos</h2>
          <ContactForm />
        </div>
      </section>

      {/* Botón flotante de WhatsApp */}
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

export default Home;




