import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './Header.css';
import { FaExternalLinkAlt, FaBars } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'exa', href: 'https://exacol.github.io/ExaPages/', external: true }
  ];

  return (
    <header className="header">
      <img src={logo} alt="Mi Logo" className="header-logo" />

      {/* navegación de escritorio */}
      <nav className="nav-links">
        <a href="/">[menú]</a>
        {links.map(({label, href, external}) => (
          <a
            key={label}
            href={href}
            {...(external ? { target:'_blank', rel:'noopener noreferrer' } : {})}
          >
            {label}{external && <FaExternalLinkAlt className="icon-ext"/>}
          </a>
        ))}
      </nav>

      {/* botón hamburguesa móvil */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(open => !open)}
        aria-label="Abrir menú"
      >
        <FaBars />
      </button>

      {/* menú desplegable móvil */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="/">[menú]</a>
          {links.map(({label, href, external}) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              {...(external ? { target:'_blank', rel:'noopener noreferrer' } : {})}
            >
              {label}{external && <FaExternalLinkAlt className="icon-ext"/>}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
