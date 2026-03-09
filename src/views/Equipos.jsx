import React, { useState } from 'react';
import { Download, Plus, X } from 'lucide-react';
import { equipos } from '../data/mockData.js';

export default function Equipos() {
  const [filtro, setFiltro] = useState('Todos');
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  const renderEstado = (estado) => {
    const map = { activo: 'dot-green', falla: 'dot-red', servicio: 'dot-blue' };
    const label = { activo: 'Activo', falla: 'Falla', servicio: 'En servicio' };
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div className={`dot ${map[estado] || 'dot-blue'}`}></div>
        {label[estado] || estado}
      </div>
    );
  };

  const equiposFiltrados = equipos.filter((e) => {
    if (filtro === 'Todos') return true;
    if (filtro === 'Activos' && e.estado === 'activo') return true;
    if (filtro === 'En servicio' && e.estado === 'servicio') return true;
    if (filtro === 'Inactivos' && e.estado === 'falla') return true;
    return false;
  });

  return (
    <div className="view active">
      <div className="section-header">
        <div>
          <div className="section-title">Base de Equipos</div>
          <div
            style={{
              fontSize: '12px',
              color: 'var(--text2)',
              marginTop: '2px',
            }}
          >
            {equipos.length} equipos registrados
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-ghost">
            <Download size={14} /> Exportar
          </button>
          {/* Botón que abre el modal */}
          <button
            className="btn btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus size={14} strokeWidth={2.5} /> Registrar equipo
          </button>
        </div>
      </div>

      <div className="tab-bar" style={{ marginBottom: '16px' }}>
        {['Todos', 'Activos', 'En servicio', 'Inactivos'].map((tab) => (
          <div
            key={tab}
            className={`tab ${filtro === tab ? 'active' : ''}`}
            onClick={() => setFiltro(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="panel">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Modelo</th>
                <th>Num. Serie</th>
                <th>Cliente</th>
                <th>Ubicación</th>
                <th>Mant. próximo</th>
                <th>Último serv.</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {equiposFiltrados.map((equipo) => (
                <tr key={equipo.id}>
                  <td className="td-mono">{equipo.id}</td>
                  <td className="td-main">{equipo.modelo}</td>
                  <td className="td-mono">{equipo.serie}</td>
                  <td>{equipo.cliente}</td>
                  <td>{equipo.ciudad}</td>
                  <td className="td-mono" style={{ color: 'var(--yellow)' }}>
                    {equipo.proximo}
                  </td>
                  <td className="td-mono">{equipo.ultimo}</td>
                  <td>{renderEstado(equipo.estado)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── MODAL: NUEVO EQUIPO ── */}
      {/* Al hacer clic en el fondo oscuro (overlay), también se cierra el modal */}
      <div
        className={`modal-overlay ${isModalOpen ? 'open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsModalOpen(false);
        }}
      >
        <div className="modal">
          <div className="modal-header">
            <span className="modal-title">Registrar nuevo equipo</span>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              <X size={16} />
            </button>
          </div>
          <div className="modal-body">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Fabricante</label>
                <select className="form-select">
                  <option>NCR</option>
                  <option>Diebold</option>
                  <option>Nautilus Hyosung</option>
                  <option>GRGBanking</option>
                  <option>Wincor Nixdorf</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Modelo</label>
                <input
                  className="form-input"
                  placeholder="ej. Selfserv 84, 5500, NH-2700..."
                />
              </div>
              <div className="form-group">
                <label className="form-label">Número de serie</label>
                <input
                  className="form-input"
                  placeholder="S/N único del equipo"
                />
              </div>
              <div className="form-group">
                <label className="form-label">ID interno</label>
                <input className="form-input" placeholder="ATM-CDMX-XXX" />
              </div>
              <div className="form-group">
                <label className="form-label">Cliente</label>
                <select className="form-select">
                  <option>OXXO</option>
                  <option>HSBC</option>
                  <option>Coppel</option>
                  <option>Soriana</option>
                  <option>Walmart</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Ciudad</label>
                <select className="form-select">
                  <option>Ciudad de México</option>
                  <option>Guadalajara</option>
                  <option>Monterrey</option>
                  <option>Cancún</option>
                  <option>Mérida</option>
                  <option>Veracruz</option>
                </select>
              </div>
              <div className="form-group full">
                <label className="form-label">Dirección exacta</label>
                <input
                  className="form-input"
                  placeholder="Calle, Número, Colonia, CP"
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  Frecuencia de mantenimiento
                </label>
                <select className="form-select">
                  <option>Mensual</option>
                  <option>Bimestral</option>
                  <option>Trimestral</option>
                  <option>Semestral</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Fecha de instalación</label>
                <input className="form-input" type="date" />
              </div>
              <div className="form-group full">
                <label className="form-label">Notas / observaciones</label>
                <textarea
                  className="form-textarea"
                  placeholder="Acceso, llaves, contacto en sitio..."
                ></textarea>
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
              Registrar equipo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
