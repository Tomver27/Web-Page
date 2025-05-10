import React from 'react';
import SidebarSocial from './components/SidebarSocial';
import Cursor from './components/Cursor';
import Button from './components/Button';
import './index.css';

function App() {
  return (
    <>
      <Cursor />
      <SidebarSocial />
      <main className="content">
        <h2>Bienvenido a mi Landing</h2>
        <p>Ejemplo de botones interactivos:</p>
        <Button onClick={() => alert('¡Click!')}>Haz clic aquí</Button>
      </main>
    </>
  );
}

export default App;
