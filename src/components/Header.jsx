import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './Header.css';
import SidebarSocial from './SidebarSocial';
import { FaExternalLinkAlt, FaBars } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'exa', href: 'https://exacol.github.io/ExaPages/', external: true }
  ];

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(open => !open);

  // Función que renderiza un <a> slider/interactivo
  const renderSliderLink = ({ label, href, external }, isMenu) => (
    <a
      key={label}
      href={href}
      className="slider interactive"
      onClick={isMenu ? toggleMenu : undefined}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {/* Dos spans idénticos que se deslizan */}
      <span>
        {label} {external && <FaExternalLinkAlt className="icon-ext" />}
      </span>
      <span>
        {label} {external && <FaExternalLinkAlt className="icon-ext" />}
      </span>
    </a>
  );

  return (
    <>
      <header className="header">
        <img src={logo} alt="Mi Logo" className="header-logo" />

        {/* navegación desktop */}
        <nav className="nav-links">
          {/* [Menú] también como slider */}
          <a href="/" className="slider interactive">
            <span>[Menú]</span>
            <span>[Menú]</span>
          </a>

          {/* el resto de links */}
          {links.map(link => renderSliderLink(link, false))}
        </nav>

        {/* hamburguesa móvil */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <FaBars />
        </button>
      </header>

      {/* overlay full-screen */}
      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav-links">
            {/* [Menú] en el overlay */}
            <a href="/" className="slider interactive" onClick={toggleMenu}>
              <span>[Menú]</span>
              <span>[Menú]</span>
            </a>

            {/* links en el overlay */}
            {links.map(link => renderSliderLink(link, true))}
          </nav>

          {/* redes sociales dentro del menú */}
          <div className="mobile-social">
            <SidebarSocial />
          </div>
        </div>
      )}
    </>
  );
}
