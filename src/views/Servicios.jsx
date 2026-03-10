import React, { useState } from 'react';
import { Search, Plus, X } from 'lucide-react';
import { services } from '../data/mockData.js';

export default function Servicios() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderBadge = (tipo) => {
    const map = {
      corr: 'badge-corr',
      prev: 'badge-prev',
      inst: 'badge-inst',
      ref: 'badge-ref',
    };
    const label = {
      corr: 'Correctivo',
      prev: 'Preventivo',
      inst: 'Instalación',
      ref: 'Refacción',
    };
    return <span className={`badge ${map[tipo]}`}>{label[tipo]}</span>;
  };

  const renderEstado = (estado) => {
    const map = {
      proceso: 'dot-yellow',
      completo: 'dot-green',
      asignado: 'dot-blue',
      ruta: 'dot-blue',
      pendiente: 'dot-yellow',
    };
    const label = {
      proceso: 'En proceso',
      completo: 'Completado',
      asignado: 'Asignado',
      ruta: 'En ruta',
      pendiente: 'Pendiente',
    };
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div className={`dot ${map[estado] || 'dot-blue'}`}></div>
        {label[estado] || estado}
      </div>
    );
  };

  return (
    <div className="view active">
      <div className="section-header">
        <div>
          <div className="section-title">Mesa de Servicio</div>
          <div
            style={{
              fontSize: '12px',
              color: 'var(--text2)',
              marginTop: '2px',
            }}
          >
            {services.length} tickets abiertos
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-ghost">
            <Search size={14} /> Filtrar
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus size={14} strokeWidth={2.5} /> Nuevo ticket
          </button>
        </div>
      </div>

      {/* HOMOLOGADO CON DASH.JSX: Uso de kpi-row y kpi-card */}
      <div className="kpi-row" style={{ marginBottom: '24px' }}>
        <div className="kpi-card" style={{ '--kpi-color': 'var(--red)' }}>
          <div
            className="kpi-icon"
            style={{ background: 'rgba(239,68,68,0.08)' }}
          >
            <span style={{ fontSize: '18px' }}>🚨</span>
          </div>
          <div className="kpi-value" style={{ color: 'var(--red)' }}>5</div>
          <div className="kpi-label">Correctivos</div>
        </div>
        
        <div className="kpi-card" style={{ '--kpi-color': 'var(--green)' }}>
          <div
            className="kpi-icon"
            style={{ background: 'rgba(16,185,129,0.08)' }}
          >
            <span style={{ fontSize: '18px' }}>🔧</span>
          </div>
          <div className="kpi-value" style={{ color: 'var(--green)' }}>8</div>
          <div className="kpi-label">Preventivos</div>
        </div>
        
        <div className="kpi-card" style={{ '--kpi-color': 'var(--accent)' }}>
          <div
            className="kpi-icon"
            style={{ background: 'rgba(124,58,237,0.08)' }}
          >
            <span style={{ fontSize: '18px' }}>📦</span>
          </div>
          <div className="kpi-value" style={{ color: 'var(--accent)' }}>3</div>
          <div className="kpi-label">Instalaciones</div>
        </div>
        
        <div className="kpi-card" style={{ '--kpi-color': 'var(--yellow)' }}>
          <div
            className="kpi-icon"
            style={{ background: 'rgba(245,158,11,0.08)' }}
          >
            <span style={{ fontSize: '18px' }}>🔩</span>
          </div>
          <div className="kpi-value" style={{ color: 'var(--yellow)' }}>2</div>
          <div className="kpi-label">Refacciones</div>
        </div>
      </div>

      <div id="servicesList">
        {services.map((s) => (
          <div className="service-card" key={s.id}>
            <div className="service-card-top">
              <div>
                <div className="service-card-id">#{s.id}</div>
                <div className="service-card-title">
                  {s.modelo} — {s.desc}
                </div>
              </div>
              {renderBadge(s.tipo)}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '8px',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <div className="service-card-meta">
                <span>🏢 {s.cliente}</span>
                <span>👷 {s.tecnico}</span>
                <span>
                  ⏱ SLA:{' '}
                  <span
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '11px',
                      color: s.sla === 'OK' ? 'var(--green)' : 'var(--yellow)',
                    }}
                  >
                    {s.sla}
                  </span>
                </span>
              </div>
              {renderEstado(s.estado)}
            </div>
          </div>
        ))}
      </div>

      {/* ── MODAL HOMOLOGADO ── */}
      <div
        className={`modal-overlay ${isModalOpen ? 'open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsModalOpen(false);
        }}
      >
        <div className="modal">
          <div className="modal-header">
            <span className="modal-title">Nuevo ticket de servicio</span>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              <X size={16} />
            </button>
          </div>
          <div className="modal-body">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Tipo de servicio</label>
                <select className="form-select">
                  <option>🚨 Correctivo</option>
                  <option>🔧 Preventivo</option>
                  <option>📦 Instalación nueva</option>
                  <option>🔩 Cambio de refacción</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Prioridad</label>
                <select className="form-select">
                  <option>Alta</option>
                  <option>Media</option>
                  <option>Baja</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Equipo (ID)</label>
                <input className="form-input" placeholder="ATM-CDMX-047" />
              </div>
              <div className="form-group">
                <label className="form-label">Técnico asignado</label>
                <select className="form-select">
                  <option>Carlos M.</option>
                  <option>Ana R.</option>
                  <option>Luis P.</option>
                  <option>Marco V.</option>
                </select>
              </div>
              <div className="form-group full">
                <label className="form-label">
                  Descripción del problema / trabajo
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="Describe el síntoma, falla o trabajo a realizar..."
                ></textarea>
              </div>
              <div className="form-group">
                <label className="form-label">SLA (horas)</label>
                <input className="form-input" type="number" placeholder="4" />
              </div>
              <div className="form-group">
                <label className="form-label">Fecha / hora programada</label>
                <input className="form-input" type="datetime-local" />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-ghost"
              onClick={() => setIsModalOpen(false)}
            >
              Cancelar
            </button>
            <button
              className="btn btn-primary"
              onClick={() => alert('Esto luego lo conectaremos a la DB')}
            >
              Crear ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}