import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo y redes sociales */}
        <div>
          <h3 className="text-2xl font-bold text-white">Fontana</h3>
          <p className="mt-2 text-sm">Un nuevo concepto de vida para ti y tu familia en un entorno exclusivo y seguro.</p>
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-2xl">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 text-2xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 text-2xl">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h3 className="text-xl font-semibold text-white">Enlaces Rápidos</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="hover:text-orange-400">Inicio</Link></li>
            <li><Link to="/lots" className="hover:text-orange-400">Lotes Disponibles</Link></li>
            <li><Link to="/about" className="hover:text-orange-400">Acerca del Proyecto</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400">Contacto</Link></li>
            <li><Link to="/financing" className="hover:text-orange-400">Opciones de Financiamiento</Link></li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div>
          <h3 className="text-xl font-semibold text-white">Contacto</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Km 5 Vía Principal, Ciudad</span>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+123456789" className="hover:text-orange-400">+123 456 789</a>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:info@fontana.com" className="hover:text-orange-400">info@fontana.com</a>
            </li>
          </ul>
        </div>

        {/* Horario de Atención */}
        <div>
          <h3 className="text-xl font-semibold text-white">Horario de Atención</h3>
          <ul className="mt-2 text-sm space-y-2">
            <li><strong>Lunes a Viernes:</strong> 9:00 AM - 5:00 PM</li>
            <li><strong>Sábados:</strong> 10:00 AM - 3:00 PM</li>
            <li><strong>Domingos:</strong> Previa cita</li>
          </ul>
          <Link to="/contact" className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
            Agendar Visita
          </Link>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Fontana. Todos los derechos reservados.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:text-orange-400">Política de Privacidad</a>
          <a href="#" className="hover:text-orange-400">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
