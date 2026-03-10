import React, { useState } from 'react';
import { Download, Plus } from 'lucide-react';
import { equipos } from '../data/mockData.js';
import EquipoFormModal from '../components/EquipoFormModal.jsx';
import EquipoDetailModal from '../components/EquipoDetailModal.jsx';

export default function Equipos() {
  const [filtro, setFiltro] = useState('Todos');
  
  // Estados para controlar los modales modulares
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedEquipo, setSelectedEquipo] = useState(null); // Si tiene un equipo, abre el modal de detalle

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
          <div style={{ fontSize: '12px', color: 'var(--text2)', marginTop: '2px' }}>
            {equipos.length} equipos registrados
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-ghost">
            <Download size={14} /> Exportar
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setIsFormOpen(true)}
          >
            <Plus size={14} strokeWidth={2.5} /> Alta de equipo
          </button>
        </div>
      </div>

      <div className="tab-bar" style={{ marginBottom: '24px' }}>
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
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {equiposFiltrados.map((equipo) => (
                <tr 
                  key={equipo.id} 
                  onClick={() => setSelectedEquipo(equipo)}
                  style={{ cursor: 'pointer' }}
                >
                  <td className="td-mono" style={{ color: 'var(--accent)' }}>{equipo.id}</td>
                  <td className="td-main">{equipo.modelo}</td>
                  <td className="td-mono">{equipo.serie}</td>
                  <td>{equipo.cliente}</td>
                  <td>{equipo.ciudad}</td>
                  <td>{renderEstado(equipo.estado)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Componentes inyectados limpiamente */}
      <EquipoFormModal 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />

      <EquipoDetailModal 
        isOpen={!!selectedEquipo} 
        equipo={selectedEquipo} 
        onClose={() => setSelectedEquipo(null)} 
      />
    </div>
  );
}