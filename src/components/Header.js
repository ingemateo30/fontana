import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logos jelcom (1).png";

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

  // Colores de Fontana (extraídos del logo)
  const colors = {
    brown: "text-amber-800", // Color marrón del logo "FONTANA"
    orange: "text-orange-600", // Color naranja de la hoja
    green: "text-lime-500", // Color verde de la hoja
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-white bg-opacity-0 hover:bg-opacity-90 py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Fontana Conjunto Residencial"
            className="h-12 md:h-16 w-auto"
          />
        </Link>

        {/* Menú de Navegación */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-lg font-medium">
            <li>
              <Link 
                to="/" 
                className={`py-2 border-b-2 transition-colors ${
                  location.pathname === "/" 
                    ? `border-orange-600 ${colors.brown}` 
                    : "border-transparent text-gray-700 hover:text-amber-800 hover:border-lime-500"
                }`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                to="/lots" 
                className={`py-2 border-b-2 transition-colors ${
                  location.pathname === "/lots" 
                    ? `border-orange-600 ${colors.brown}` 
                    : "border-transparent text-gray-700 hover:text-amber-800 hover:border-lime-500"
                }`}
              >
                Lotes
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`py-2 border-b-2 transition-colors ${
                  location.pathname === "/about" 
                    ? `border-orange-600 ${colors.brown}` 
                    : "border-transparent text-gray-700 hover:text-amber-800 hover:border-lime-500"
                }`}
              >
                Acerca de
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`py-2 border-b-2 transition-colors ${
                  location.pathname.includes("/contact") 
                    ? `border-orange-600 ${colors.brown}` 
                    : "border-transparent text-gray-700 hover:text-amber-800 hover:border-lime-500"
                }`}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botón de contacto (visible en desktop) */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium shadow-sm"
          >
            Reserva tu lote
          </Link>
        </div>

        {/* Botón de Menú Móvil */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-amber-800 bg-lime-50 p-2 rounded-md hover:bg-lime-100 transition-colors"
          aria-label="Menú"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú Móvil */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white transform ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:hidden z-50`}
        >
          {/* Cabecera del menú móvil */}
          <div className="flex justify-between items-center p-4 border-b">
            <img 
              src="/images/fontana-logo.png" 
              alt="Fontana Conjunto Residencial"
              className="h-12 w-auto"
            />
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="text-amber-800 p-2"
              aria-label="Cerrar menú"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Enlaces del menú móvil */}
          <div className="flex flex-col items-center justify-center gap-6 text-xl font-medium p-8">
            <Link 
              to="/" 
              className={`py-3 w-full text-center ${
                location.pathname === "/" 
                  ? colors.brown 
                  : "text-gray-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/lots" 
              className={`py-3 w-full text-center ${
                location.pathname === "/lots" 
                  ? colors.brown 
                  : "text-gray-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Lotes
            </Link>
            <Link 
              to="/about" 
              className={`py-3 w-full text-center ${
                location.pathname === "/about" 
                  ? colors.brown 
                  : "text-gray-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Acerca de
            </Link>
            <Link 
              to="/contact" 
              className={`py-3 w-full text-center ${
                location.pathname.includes("/contact") 
                  ? colors.brown 
                  : "text-gray-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            
            {/* Botón de contacto en móvil */}
            <Link 
              to="/contact" 
              className="mt-4 px-6 py-3 bg-orange-600 text-white rounded-lg w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reserva tu lote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


