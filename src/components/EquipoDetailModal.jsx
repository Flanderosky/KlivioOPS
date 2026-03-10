import React, { useState } from 'react';
import { X, CalendarPlus, AlertTriangle, Settings, Trash2 } from 'lucide-react';

// Importamos los nuevos sub-modales
import CorrectivoModal from './CorrectivoModal.jsx';
import MantenimientoModal from './MantenimientoModal.jsx';

export default function EquipoDetailModal({ isOpen, onClose, equipo }) {
  // Estados para controlar los sub-modales
  const [showCorrectivo, setShowCorrectivo] = useState(false);
  const [showMantenimiento, setShowMantenimiento] = useState(false);

  if (!isOpen || !equipo) return null;

  return (
    <>
      {/* Modal Principal de Detalle */}
      <div className="modal-overlay open" style={{ zIndex: 1000 }} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        <div className="modal">
          <div className="modal-header">
            <div>
              <span className="modal-title">Detalle de Equipo</span>
              <div style={{ fontSize: '12px', color: 'var(--accent)', fontFamily: '"JetBrains Mono", monospace' }}>
                {equipo.id}
              </div>
            </div>
            <button className="close-btn" onClick={onClose}><X size={16} /></button>
          </div>
          
          <div className="modal-body">
            {/* Ficha técnica usando los stat-pills de tu CSS */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              <div className="stat-pill">
                <span className="stat-pill-label">Modelo</span>
                <span className="stat-pill-value" style={{ fontSize: '16px' }}>{equipo.modelo}</span>
              </div>
              <div className="stat-pill">
                <span className="stat-pill-label">Número de Serie</span>
                <span className="stat-pill-value" style={{ fontSize: '16px', fontFamily: '"JetBrains Mono", monospace' }}>{equipo.serie}</span>
              </div>
              <div className="stat-pill">
                <span className="stat-pill-label">Ubicación / Sucursal</span>
                <span className="stat-pill-value" style={{ fontSize: '14px' }}>{equipo.cliente} - {equipo.ciudad}</span>
              </div>
              <div className="stat-pill">
                <span className="stat-pill-label">Estado Actual</span>
                <div style={{ marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600' }}>
                  <div className={`dot ${equipo.estado === 'activo' ? 'dot-green' : equipo.estado === 'falla' ? 'dot-red' : 'dot-blue'}`}></div>
                  <span style={{ textTransform: 'capitalize' }}>{equipo.estado}</span>
                </div>
              </div>
            </div>

            <div style={{ height: '1px', background: 'var(--border)', margin: '20px 0' }}></div>

            {/* Panel de Acciones Operativas */}
            <span style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: 'var(--text2)', textTransform: 'uppercase', marginBottom: '12px' }}>
              Acciones Operativas
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <button 
                className="btn" 
                style={{ background: 'rgba(16,185,129,0.1)', color: 'var(--green)', border: '1px solid rgba(16,185,129,0.2)' }}
                onClick={() => setShowMantenimiento(true)}
              >
                <CalendarPlus size={16} /> Agendar Mantenimiento
              </button>
              
              <button 
                className="btn" 
                style={{ background: 'rgba(239,68,68,0.1)', color: 'var(--red)', border: '1px solid rgba(239,68,68,0.2)' }}
                onClick={() => setShowCorrectivo(true)}
              >
                <AlertTriangle size={16} /> Generar Correctivo
              </button>
              
              <button className="btn" style={{ background: 'rgba(245,158,11,0.1)', color: 'var(--yellow)', border: '1px solid rgba(245,158,11,0.2)' }}>
                <Settings size={16} /> Cambio Refacciones
              </button>
              
              <button className="btn btn-ghost" style={{ color: 'var(--text3)' }} onClick={() => alert('Confirmar baja de equipo')}>
                <Trash2 size={16} /> Archivar / Baja
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SUB-MODALES (Se renderizan sobre el modal principal si están activos) */}
      <CorrectivoModal 
        isOpen={showCorrectivo} 
        equipo={equipo} 
        onClose={() => setShowCorrectivo(false)} 
      />
      
      <MantenimientoModal 
        isOpen={showMantenimiento} 
        equipo={equipo} 
        onClose={() => setShowMantenimiento(false)} 
      />
    </>
  );
}