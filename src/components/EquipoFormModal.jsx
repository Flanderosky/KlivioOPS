import React, { useState } from 'react';
import { X, Save } from 'lucide-react';

export default function EquipoFormModal({ isOpen, onClose }) {
  // Estados para la frecuencia dinámica (ej: "2" + "Meses")
  const [frecuenciaNum, setFrecuenciaNum] = useState('1');
  const [frecuenciaTipo, setFrecuenciaTipo] = useState('Meses');

  if (!isOpen) return null;

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div className="modal-header">
          <span className="modal-title">Registrar nuevo equipo</span>
          <button className="close-btn" onClick={onClose}><X size={16} /></button>
        </div>
        
        <div className="modal-body">
          <div className="form-grid">
            {/* Fila 1 */}
            <div className="form-group">
              <label className="form-label">Número de Serie</label>
              <input className="form-input" placeholder="Ej. S/N-982374" />
            </div>
            <div className="form-group">
              <label className="form-label">Modelo</label>
              <input className="form-input" placeholder="Ej. NCR Selfserv 84" />
            </div>

            {/* Fila 2 */}
            <div className="form-group">
              <label className="form-label">Cliente</label>
              <select className="form-select">
                <option>OXXO</option>
                <option>HSBC</option>
                <option>Banorte</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Sucursal</label>
              <input className="form-input" placeholder="Ej. Insurgentes Sur 2240" />
            </div>

            {/* Fila 3 */}
            <div className="form-group full">
              <label className="form-label">Dirección Completa (Para Mapa)</label>
              <input className="form-input" placeholder="Calle, Número, Colonia, C.P., Ciudad, Estado" />
            </div>

            {/* Fila 4 */}
            <div className="form-group">
              <label className="form-label">ETV / Responsable</label>
              <select className="form-select">
                <option>Cometra</option>
                <option>Panamericano</option>
                <option>Grinver</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Fecha de Alta</label>
              <input className="form-input" type="date" defaultValue={new Date().toISOString().split('T')} />
            </div>

            {/* Fila 5: Lógica de frecuencia combinada */}
            <div className="form-group full">
              <label className="form-label">Frecuencia de Mantenimiento</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--text2)', alignSelf: 'center', fontSize: '13px' }}>Cada</span>
                <input 
                  type="number" 
                  className="form-input" 
                  style={{ width: '80px' }} 
                  value={frecuenciaNum}
                  onChange={(e) => setFrecuenciaNum(e.target.value)}
                  min="1"
                />
                <select 
                  className="form-select" 
                  value={frecuenciaTipo}
                  onChange={(e) => setFrecuenciaTipo(e.target.value)}
                >
                  <option>Días</option>
                  <option>Semanas</option>
                  <option>Meses</option>
                  <option>Años</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-ghost" onClick={onClose}>Cancelar</button>
          <button className="btn btn-primary">
            <Save size={14} /> Guardar Equipo
          </button>
        </div>
      </div>
    </div>
  );
}