import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faShieldAlt, faWater, faRoad, faLeaf, faHome } from '@fortawesome/free-solid-svg-icons';
import '../styles/Features.css';

const Features = () => {
  const features = [
    {
      icon: faTree,
      title: 'Áreas Verdes',
      description: 'Amplios espacios verdes y zonas recreativas para toda la familia.'
    },
    {
      icon: faShieldAlt,
      title: 'Seguridad 24/7',
      description: 'Acceso controlado y vigilancia las 24 horas para tu tranquilidad.'
    },
    {
      icon: faWater,
      title: 'Servicios Básicos',
      description: 'Agua, electricidad y drenaje ya instalados en todos los lotes.'
    },
    {
      icon: faRoad,
      title: 'Vías Pavimentadas',
      description: 'Calles amplias y bien planificadas con iluminación completa.'
    },
    {
      icon: faLeaf,
      title: 'Sostenibilidad',
      description: 'Proyecto desarrollado con criterios de sostenibilidad y bajo impacto ambiental.'
    },
    {
      icon: faHome,
      title: 'Diseño Exclusivo',
      description: 'Normativa arquitectónica que garantiza armonía visual y valorización.'
    }
  ];

  return (
    <section className="features-section">
      <div className="section-heading">
        <h2>Características del Proyecto</h2>
        <p>Residencial Ensueño está diseñado pensando en la calidad de vida de sus residentes</p>
      </div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              <FontAwesomeIcon icon={feature.icon} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;