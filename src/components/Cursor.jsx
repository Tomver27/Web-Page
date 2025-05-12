import React, { useState, useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  // posición real del ratón
  const mousePos = useRef({ x: 0, y: 0 });
  // posición “suavizada” del dot
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // actualiza mousePos en cada movimiento
    const handleMouseMove = e => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    document.addEventListener('mousemove', handleMouseMove);

    // animación por frame
    let animationFrame;
    const follow = () => {
      setPos(prev => {
        const dx = mousePos.current.x - prev.x;
        const dy = mousePos.current.y - prev.y;
        const smoothing = 0.05;
        return {
          x: prev.x + dx * smoothing,
          y: prev.y + dy * smoothing
        };
      });
      animationFrame = requestAnimationFrame(follow);
    };
    follow();

    // hover en interactivos
    const interactives = document.querySelectorAll('.interactive');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => setHovering(true));
      el.addEventListener('mouseleave', () => setHovering(false));
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      document.removeEventListener('mousemove', handleMouseMove);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', () => setHovering(true));
        el.removeEventListener('mouseleave', () => setHovering(false));
      });
    };
  }, []);

  return (
    <div
      className={`cursor-dot ${hovering ? 'cursor-dot--hover' : ''}`}
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
