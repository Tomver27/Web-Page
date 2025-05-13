import React from 'react';
import Header from './components/Header';
import SidebarSocial from './components/SidebarSocial';
import Cursor from './components/Cursor';
import ScrollButton from './components/ScrollButton';
import './index.css';

function App() {
  return (
    <>
      {/* Cursor sólo en desktop */}
      <Cursor />

      {/* Header fijo con logo y nav */}
      <Header />

      {/* Redes sociales */}
      <SidebarSocial />

      {/* Botón “scroll down” al título de Sobre Mí */}
      <ScrollButton targetId="sobre-mi" direction="down" />

      <main>
        {/* Hero / Home */}
        <section id="home" className="section-home">
          <h2>Pronto grandes cosas verás aqui... En mantenimiento</h2>
        </section>

        {/* Sección Sobre Mí */}
        <section id="sobre-mi" className="section-about">
          <h2>Sobre Mí</h2>
          {/* Tu contenido... */}
        </section>

        {/* Sección Experiencia */}
        <section id="experiencia" className="section-exp">
          <h2>Experiencia</h2>
          {/* Tu contenido... */}
        </section>
      </main>

      {/* Botón “scroll up” */}
      <ScrollButton direction="up" />
    </>
  );
}

export default App;
