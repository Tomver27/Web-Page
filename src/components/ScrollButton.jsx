import React, { useState, useEffect } from 'react';
import './ScrollButton.css';

export default function ScrollButton({ targetId, direction }) {
  const [visible, setVisible] = useState(direction === 'down');

  useEffect(() => {
    const onScroll = () => {
      const atTop = window.scrollY === 0;
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (direction === 'down') setVisible(atTop);
      else setVisible(atBottom);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [direction]);

  const handleClick = () => {
    if (direction === 'down') {
      const el = document.getElementById(targetId);
      window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return visible ? (
    <button className={`scroll-btn scroll-btn--${direction}`} onClick={handleClick}>
      {direction === 'down' ? 'SCROLL ↓' : '↑ TOP'}
    </button>
  ) : null;
}
