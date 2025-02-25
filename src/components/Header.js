import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-semibold text-orange-500 tracking-wide">
          Residencia+
        </Link>

        {/* Menú de Navegación */}
        <nav className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>Inicio</Link>
            </li>
            <li>
              <Link to="/lots" className={location.pathname === "/lots" ? "active" : ""}>Lotes</Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>Acerca de</Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname.includes("/contact") ? "active" : ""}>Contacto</Link>
            </li>
          </ul>
        </nav>

        {/* Botón de Menú Móvil */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú Móvil */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white transform ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-6 text-xl font-medium shadow-lg`}
        >
          <ul>
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/lots" className={location.pathname === "/lots" ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
                Lotes
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
                Acerca de
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname.includes("/contact") ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;


