import React from 'react';
import { X, AlertOctagon } from 'lucide-react';

export default function CorrectivoModal({ isOpen, onClose, equipo }) {
  if (!isOpen || !equipo) return null;

  return (
    <div className="modal-overlay open" style={{ zIndex: 1050 }} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" style={{ borderTop: '4px solid var(--red)' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: 'rgba(239,68,68,0.1)', color: 'var(--red)', padding: '6px', borderRadius: '8px' }}>
              <AlertOctagon size={20} />
            </div>
            <div>
              <span className="modal-title">Generar Ticket Correctivo</span>
              <div style={{ fontSize: '12px', color: 'var(--text2)', marginTop: '2px' }}>
                Reporte de falla para {equipo.id}
              </div>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}><X size={16} /></button>
        </div>
        
        <div className="modal-body">
          <div className="form-grid">
            <div className="form-group full">
              <label className="form-label">Tipo de Falla Reportada</label>
              <select className="form-select">
                <option>Falla de Hardware (Lector, Dispensador, etc.)</option>
                <option>Falla de Software / Conectividad</option>
                <option>Vandalismo / Daño Físico</option>
                <option>Atasco de Efectivo / Tarjeta</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Prioridad</label>
              <select className="form-select" style={{ borderColor: 'rgba(239,68,68,0.3)' }}>
                <option>🚨 Alta (Equipo fuera de servicio)</option>
                <option>⚠️ Media (Falla parcial)</option>
                <option>🔵 Baja (Estético / Menor)</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">SLA Esperado (Horas)</label>
              <input className="form-input" type="number" defaultValue="4" />
            </div>

            <div className="form-group full">
              <label className="form-label">Descripción Detallada</label>
              <textarea 
                className="form-textarea" 
                placeholder="Describe los síntomas exactos que reporta el cliente o el sistema..."
                style={{ height: '100px' }}
              ></textarea>
            </div>

            <div className="form-group full">
              <label className="form-label">Evidencia Fotográfica (Opcional)</label>
              <div style={{ 
                border: '1px dashed var(--border)', 
                borderRadius: '8px', 
                padding: '20px', 
                textAlign: 'center',
                color: 'var(--text3)',
                fontSize: '13px',
                background: 'rgba(255,255,255,0.02)',
                cursor: 'pointer'
              }}>
                Haz clic para subir fotos de la falla o arrastra los archivos aquí
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-ghost" onClick={onClose}>Cancelar</button>
          <button className="btn" style={{ background: 'var(--red)', color: '#fff', fontWeight: 'bold' }}>
            Crear Ticket Correctivo
          </button>
        </div>
      </div>
    </div>
  );
}