import React, { useState, useEffect } from 'react';
import { BREAKING_HEADLINES } from '../data/articles';

export default function BreakingTicker({ headlines }) {
  const list = headlines?.length > 0 ? headlines : BREAKING_HEADLINES;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [list.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % list.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [list.length]);

  return (
    <div className="breaking-bar">
      <div className="container breaking-inner">
        <div className="breaking-badge">
          <span className="pulse-dot" />
          EN DIRECTO
        </div>
        <div className="breaking-text" key={index}>
          {list[index] || list[0]}
        </div>
        <div className="breaking-controls">
          <button
            type="button"
            className="ticker-btn"
            onClick={() => setIndex((prev) => (prev - 1 + list.length) % list.length)}
            aria-label="Anterior noticia"
          >
            ‹
          </button>
          <button
            type="button"
            className="ticker-btn"
            onClick={() => setIndex((prev) => (prev + 1) % list.length)}
            aria-label="Siguiente noticia"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
