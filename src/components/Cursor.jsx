import React, { useState, useEffect } from 'react';
import './Cursor.css';

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = e => setPos({ x: e.clientX, y: e.clientY });
    document.addEventListener('mousemove', move);
    // Opcional: detectar cuando entramos/salimos de elementos interactivos
    document.querySelectorAll('.interactive').forEach(el => {
      el.addEventListener('mouseenter', () => setHovering(true));
      el.addEventListener('mouseleave', () => setHovering(false));
    });
    return () => document.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className={`cursor-dot ${hovering ? 'cursor-dot--hover' : ''}`}
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
