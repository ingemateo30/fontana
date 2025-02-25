import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      
      <section className="intro-section">
        <div className="container">
          <h2>Bienvenido a Fontana conjunto residencial</h2>
          <p>Descubre un espacio exclusivo donde tus sueños de vida se hacen realidad. Un desarrollo residencial de primer nivel con todas las comodidades para ti y tu familia.</p>
        </div>
      </section>
      
      <Features />
      
      <section className="cta-section">
        <div className="container">
          <h2>Descubre los Lotes Disponibles</h2>
          <p>Contamos con lotes desde 250m² hasta 500m² en las mejores ubicaciones del residencial.</p>
          <a href="/lots" className="btn btn-large">Ver Disponibilidad</a>
        </div>
      </section>
      
      <About />
      
      <Gallery />
      
      <Map />
      
      <Testimonials />
      
      <section className="contact-section">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;