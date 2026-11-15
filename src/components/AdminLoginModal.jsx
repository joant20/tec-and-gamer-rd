import React, { useState } from 'react';
import { isValidAdminPin } from '../services/newsService';

const VALID_ADMIN_USERS = [
  'joan',
  'joant20',
  'joan torres',
  'admin',
  'admin@tecgamer.do',
  'tecgamer',
];

export default function AdminLoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanUser = username.trim().toLowerCase();
    const userOk = !cleanUser || VALID_ADMIN_USERS.includes(cleanUser);

    if (!userOk || !isValidAdminPin(pin)) {
      setError('⚠️ Usuario o contraseña incorrectos. Acceso exclusivo para el administrador.');
      return;
    }
    setUsername('');
    setPin('');
    setError('');
    onLoginSuccess();
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container"
        style={{ maxWidth: '430px' }}
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
            <h2 className="section-heading">🔒 INICIAR SESIÓN ADMIN</h2>
          </div>
          <p className="create-modal-subtitle">
            Ingresa con tu cuenta de fundador de <strong>Tec&amp;gamer RD</strong>.
          </p>

          <form onSubmit={handleSubmit} className="create-article-form">
            <div className="form-group">
              <label>Usuario Administrador</label>
              <input
                type="text"
                required
                autoFocus
                placeholder="Ej. joant20"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError('');
                }}
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                required
                placeholder="Ingresa tu contraseña..."
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
                Entrar al Panel Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
