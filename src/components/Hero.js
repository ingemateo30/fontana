import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Residencial Ensueño</h1>
        <h2>Un nuevo concepto de vida</h2>
        <p>Lotes exclusivos en una comunidad planificada con la mejor ubicación y servicios</p>
        <div className="hero-buttons">
          <Link to="/lots" className="btn btn-primary">Ver Lotes Disponibles</Link>
          <Link to="/contact" className="btn btn-secondary">Contáctanos</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;