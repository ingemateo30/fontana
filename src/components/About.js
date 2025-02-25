const About = () => {
    return (
      <div className="bg-white text-gray-800 py-12 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">Sobre Fontana Conjunto Residencial</h2>
          <p className="text-lg text-gray-700 mb-6">
            Bienvenido a <span className="font-semibold">Fontana Conjunto Residencial</span>, un desarrollo exclusivo diseñado para quienes buscan tranquilidad, naturaleza y una inversión segura. Aquí, no solo adquieres un lote, sino la oportunidad de construir el hogar de tus sueños en un entorno privilegiado.
          </p>
        </div>
  
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-10">
          {/* Imagen Izquierda */}
          <div className="flex justify-center">
            <img 
              src="/images/fontana-lotes.jpg" 
              alt="Lotes en Fontana Conjunto Residencial" 
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
  
          {/* Texto Derecha */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-orange-500 mb-3">Lotes Disponibles</h3>
            <p className="text-gray-700 text-lg">
              Disponemos de lotes urbanizados con amplias áreas verdes, listos para construir. Cada lote cuenta con acceso a servicios públicos, vías internas y una ubicación privilegiada para una vida en armonía con la naturaleza.
            </p>
          </div>
        </div>
  
        {/* Beneficios */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-semibold text-orange-500 text-center mb-6">Beneficios del Proyecto</h3>
          <ul className="text-lg text-gray-700 grid md:grid-cols-2 gap-6">
            <li className="flex items-center">
              ✅ Ubicación estratégica y de alta valorización.
            </li>
            <li className="flex items-center">
              ✅ Lotes con acceso a servicios básicos.
            </li>
            <li className="flex items-center">
              ✅ Espacios amplios rodeados de naturaleza.
            </li>
            <li className="flex items-center">
              ✅ Proyecto ideal para inversión o vivienda.
            </li>
          </ul>
        </div>
  
        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-orange-500 mb-3">¡Adquiere tu Lote Hoy!</h3>
          <p className="text-lg text-gray-700 mb-6">
            Contáctanos y agenda una visita para conocer más sobre este exclusivo proyecto residencial.
          </p>
          <a 
            href="/contacto"
            className="bg-orange-500 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-orange-600 transition"
          >
            Contáctanos
          </a>
        </div>
      </div>
    );
  };
  
  export default About;
  