import React, { useState, useEffect } from 'react';
import { BREAKING_HEADLINES } from '../data/articles';

export default function BreakingTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % BREAKING_HEADLINES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="breaking-bar">
      <div className="container breaking-inner">
        <div className="breaking-badge">
          <span className="pulse-dot" />
          EN DIRECTO
        </div>
        <div className="breaking-text" key={index}>
          {BREAKING_HEADLINES[index]}
        </div>
        <div className="breaking-controls">
          <button
            type="button"
            className="ticker-btn"
            onClick={() =>
              setIndex((prev) => (prev - 1 + BREAKING_HEADLINES.length) % BREAKING_HEADLINES.length)
            }
            aria-label="Anterior noticia"
          >
            ‹
          </button>
          <button
            type="button"
            className="ticker-btn"
            onClick={() => setIndex((prev) => (prev + 1) % BREAKING_HEADLINES.length)}
            aria-label="Siguiente noticia"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
