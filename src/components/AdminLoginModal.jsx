import React, { useState } from 'react';
import { isValidAdminPin } from '../services/newsService';

export default function AdminLoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidAdminPin(pin)) {
      setError('⚠️ Contraseña incorrecta. Acceso exclusivo para el administrador.');
      return;
    }
    setPin('');
    setError('');
    onLoginSuccess();
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container"
        style={{ maxWidth: '420px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Cerrar acceso admin"
        >
          ✕
        </button>

        <div className="modal-body">
          <div className="section-title-group" style={{ marginBottom: '0.5rem' }}>
            <span className="neon-bar" />
            <h2 className="section-heading">🔒 ACCESO ADMINISTRADOR</h2>
          </div>
          <p className="create-modal-subtitle">
            Área restringida para la administración de <strong>Tec&amp;gamer RD</strong>.
          </p>

          <form onSubmit={handleSubmit} className="create-article-form">
            <div className="form-group">
              <label>Contraseña de Administrador</label>
              <input
                type="password"
                required
                autoFocus
                placeholder="Ingresa tu clave secreta..."
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setError('');
                }}
              />
              {error && (
                <span style={{ color: '#fda4af', fontSize: '0.8rem', fontWeight: 600 }}>
                  {error}
                </span>
              )}
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="btn-publish">
                Entrar como Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
