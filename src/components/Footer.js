import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Residencial Ensueño</h3>
          <p>Un nuevo concepto de vida para ti y tu familia en un entorno exclusivo y seguro.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/lots">Lotes Disponibles</Link></li>
            <li><Link to="/about">Acerca del Proyecto</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/financing">Opciones de Financiamiento</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul className="contact-info">
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Km 5 Vía Principal, Ciudad</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <span><a href="tel:+123456789">+123 456 789</a></span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <span><a href="mailto:info@residencialensueno.com">info@residencialensueno.com</a></span>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Horario de Atención</h3>
          <ul className="schedule">
            <li><strong>Lunes a Viernes:</strong> 9:00 AM - 6:00 PM</li>
            <li><strong>Sábados:</strong> 10:00 AM - 3:00 PM</li>
            <li><strong>Domingos:</strong> Previa cita</li>
          </ul>
          <Link to="/contact" className="btn btn-outline">Agendar Visita</Link>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Residencial Ensueño. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;