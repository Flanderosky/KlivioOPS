import React from 'react';
import { X, CalendarPlus } from 'lucide-react';

export default function MantenimientoModal({ isOpen, onClose, equipo }) {
  if (!isOpen || !equipo) return null;

  return (
    <div className="modal-overlay open" style={{ zIndex: 1050 }} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" style={{ borderTop: '4px solid var(--green)' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: 'rgba(16,185,129,0.1)', color: 'var(--green)', padding: '6px', borderRadius: '8px' }}>
              <CalendarPlus size={20} />
            </div>
            <div>
              <span className="modal-title">Agendar Mantenimiento Preventivo</span>
              <div style={{ fontSize: '12px', color: 'var(--text2)', marginTop: '2px' }}>
                Programación para {equipo.id} ({equipo.cliente})
              </div>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}><X size={16} /></button>
        </div>
        
        <div className="modal-body">
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Fecha Programada</label>
              <input className="form-input" type="date" />
            </div>
            <div className="form-group">
              <label className="form-label">Hora (Aprox)</label>
              <input className="form-input" type="time" defaultValue="09:00" />
            </div>

            <div className="form-group full">
              <label className="form-label">Tipo de Rutina</label>
              <select className="form-select">
                <option>Preventivo Estándar (Limpieza y Lubricación)</option>
                <option>Actualización de Software / Firmware</option>
                <option>Auditoría de Seguridad / CCTV</option>
              </select>
            </div>

            <div className="form-group full">
              <label className="form-label">Técnico Asignado (Opcional)</label>
              <select className="form-select">
                <option value="">-- Dejar sin asignar para bolsa de trabajo --</option>
                <option>Carlos Martínez</option>
                <option>Ana Rodríguez</option>
                <option>Luis Pérez</option>
              </select>
            </div>

            <div className="form-group full">
              <label className="form-label">Instrucciones Especiales</label>
              <textarea 
                className="form-textarea" 
                placeholder="Ej. Solicitar llaves con el gerente de sucursal antes de abrir la fascia..."
              ></textarea>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-ghost" onClick={onClose}>Cancelar</button>
          <button className="btn" style={{ background: 'var(--green)', color: '#fff', fontWeight: 'bold' }}>
            Agendar Rutina
          </button>
        </div>
      </div>
    </div>
  );
}