import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-[#F4E8DC] py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo y redes sociales */}
        <div>
          <h3 className="text-3xl font-bold text-[#F4E8DC]">Fontana</h3>
          <p className="mt-2 text-sm">
            Un nuevo concepto de vida para ti y tu familia en un entorno exclusivo y seguro.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#A5C663] hover:text-[#D07A3B] text-2xl">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#A5C663] hover:text-[#D07A3B] text-2xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-[#A5C663] hover:text-[#D07A3B] text-2xl">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h3 className="text-xl font-semibold text-[#F4E8DC]">Enlaces Rápidos</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="hover:text-[#D07A3B]">Inicio</Link></li>
            <li><Link to="/lots" className="hover:text-[#D07A3B]">Lotes Disponibles</Link></li>
            <li><Link to="/about" className="hover:text-[#D07A3B]">Acerca del Proyecto</Link></li>
            <li><Link to="/contact" className="hover:text-[#D07A3B]">Contacto</Link></li>
            <li><Link to="/financing" className="hover:text-[#D07A3B]">Opciones de Financiamiento</Link></li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div>
          <h3 className="text-xl font-semibold text-[#F4E8DC]">Contacto</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Calle 1era Sur # 24 - 35, San Gil, Colombia</span>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+573184792991" className="hover:text-[#D07A3B]">318 4792991</a>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:gustavobenitez1284@gmail.com" className="hover:text-[#D07A3B]">gustavobenitez1284@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Horario de Atención */}
        <div>
          <h3 className="text-xl font-semibold text-[#F4E8DC]">Horario de Atención</h3>
          <ul className="mt-2 text-sm space-y-2">
            <li><strong>Lunes a Viernes:</strong> 9:00 AM - 5:00 PM</li>
            <li><strong>Sábados:</strong> 10:00 AM - 3:00 PM</li>
            <li><strong>Domingos:</strong> Previa cita</li>
          </ul>
          <Link to="/contact" className="mt-4 inline-block bg-[#D07A3B] hover:bg-[#A5C663] text-white px-4 py-2 rounded-lg text-sm font-semibold">
            Agendar Visita
          </Link>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#A5C663] mt-8 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Fontana. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

