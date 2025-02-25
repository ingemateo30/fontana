import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>Residencial Ensueño</h1>
          </Link>
        </div>
        
        <div className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</Link></li>
            <li><Link to="/lots" className={location.pathname === '/lots' ? 'active' : ''}>Lotes</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Acerca de</Link></li>
            <li><Link to="/contact" className={location.pathname.includes('/contact') ? 'active' : ''}>Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;