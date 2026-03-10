import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function Ubicaciones() {
  // Coordenadas calculadas geográficamente para anclarse al mapa fijo
  const ubicacionesData = [
    { id: 'tij', ciudad: 'Tijuana', equipos: 12, left: '17%', top: '19%', color: 'var(--green)' },
    { id: 'mty', ciudad: 'Monterrey', equipos: 31, left: '55%', top: '43%', color: 'var(--yellow)' },
    { id: 'gdl', ciudad: 'Guadalajara', equipos: 38, left: '48%', top: '59%', color: 'var(--accent)' },
    { id: 'slp', ciudad: 'SLP', equipos: 18, left: '53%', top: '54%', color: 'var(--green)' },
    { id: 'cdmx', ciudad: 'CDMX', equipos: 87, left: '57%', top: '63%', color: 'var(--accent)' },
    { id: 'ver', ciudad: 'Veracruz', equipos: 19, left: '64%', top: '64%', color: 'var(--yellow)' },
    { id: 'oax', ciudad: 'Oaxaca', equipos: 14, left: '63%', top: '71%', color: 'var(--accent2)' },
    { id: 'mid', ciudad: 'Mérida', equipos: 22, left: '79%', top: '58%', color: 'var(--red)' },
    { id: 'cun', ciudad: 'Cancún', equipos: 37, left: '85%', top: '58%', color: 'var(--accent3)' },
  ];

  const [ubicacionActiva, setUbicacionActiva] = useState(null);

  const handlePinClick = (ciudad) => {
    setUbicacionActiva(ciudad);
    console.log(`Preparando zoom para: ${ciudad}`);
  };

  return (
    <div className="view active">
      <div className="section-header">
        <div>
          <div className="section-title">Mapa de Cobertura Nacional</div>
          <div style={{ fontSize: '12px', color: 'var(--text2)', marginTop: '2px' }}>
            Distribución estratégica de equipos y monitoreo en tiempo real
          </div>
        </div>
        <button className="btn btn-primary">
          <Plus size={14} strokeWidth={2.5} /> Nueva ubicación
        </button>
      </div>

      <div className="map-panel" style={{ marginBottom: '24px' }}>
        <div className="panel-header">
          <span className="panel-title">Cajeros por región {ubicacionActiva && `> ${ubicacionActiva}`}</span>
          {ubicacionActiva && (
             <button 
                className="btn btn-ghost" 
                style={{ padding: '2px 8px', fontSize: '11px', height: 'auto' }}
                onClick={() => setUbicacionActiva(null)}
             >
               Ver todo
             </button>
          )}
        </div>
        
        <div className="map-area" style={{ height: '500px', position: 'relative', overflow: 'hidden', background: '#05030A' }}>
          
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '1000px',
            height: '750px',
            transform: 'translate(-50%, -50%)',
          }}>
            
            {/* GOOGLE MAPS ESTÁTICO FIJADO EN MÉXICO (z=5) */}
            <iframe
              title="Google Maps Mexico"
              src="https://maps.google.com/maps?q=Mexico&t=&z=5&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{
                filter: 'invert(100%) hue-rotate(210deg) brightness(85%) contrast(110%) grayscale(20%)',
                pointerEvents: 'none', 
                border: 0,
              }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />

            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(5, 3, 10, 0.4) 100%)',
              pointerEvents: 'none',
              boxShadow: 'inset 0 0 50px #05030A'
            }}></div>

            {/* PINES RENDERIZADOS */}
            {ubicacionesData.map((ubi) => (
              <div 
                key={ubi.id}
                className="map-pin" 
                onClick={() => handlePinClick(ubi.ciudad)}
                style={{ 
                  left: ubi.left, 
                  top: ubi.top, 
                  '--pin-color': ubi.color,
                  cursor: 'pointer',
                  transform: ubicacionActiva === ubi.ciudad ? 'translate(-50%, -100%) scale(1.2)' : 'translate(-50%, -100%) scale(1)',
                  transition: 'transform 0.2s ease',
                  opacity: ubicacionActiva && ubicacionActiva !== ubi.ciudad ? 0.3 : 1,
                  zIndex: ubicacionActiva === ubi.ciudad ? 10 : 1
                }}
              >
                <div className="map-pin-dot"></div>
                <div className="map-pin-label" style={{ 
                  background: 'rgba(0,0,0,0.7)', 
                  padding: '2px 6px', 
                  borderRadius: '4px',
                  backdropFilter: 'blur(4px)'
                }}>
                  {ubi.ciudad} ×{ubi.equipos}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="map-legend" style={{ background: 'var(--surface)' }}>
          <div className="map-legend-item">
            <div className="dot dot-green"></div> Operación normal
          </div>
          <div className="map-legend-item">
            <div className="dot dot-yellow"></div> Mant. programado
          </div>
          <div className="map-legend-item">
            <div className="dot dot-red"></div> Falla activa
          </div>
          <div className="map-legend-item">
            <div className="dot" style={{ background: 'var(--accent2)' }}></div> Reciente instalación
          </div>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <span className="panel-title">Detalle por ubicación</span>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Ciudad</th>
                <th>Estado</th>
                <th>Equipos</th>
                <th>Clientes</th>
                <th>Último mant.</th>
                <th>Próximo mant.</th>
                <th>Fallas activas</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ display: ubicacionActiva && ubicacionActiva !== 'CDMX' ? 'none' : 'table-row' }}>
                <td className="td-main">CDMX</td>
                <td>CDMX</td>
                <td>87</td>
                <td>OXXO, HSBC, Walmart</td>
                <td className="td-mono" style={{ color: 'var(--text2)' }}>2025-03-01</td>
                <td className="td-mono" style={{ color: 'var(--text2)' }}>2025-04-01</td>
                <td><span style={{ color: 'var(--yellow)', fontFamily: '"JetBrains Mono", monospace', fontSize: '12px' }}>2</span></td>
              </tr>
              <tr style={{ display: ubicacionActiva && ubicacionActiva !== 'Cancún' ? 'none' : 'table-row' }}>
                <td className="td-main">Cancún</td>
                <td>Q. Roo</td>
                <td>37</td>
                <td>OXXO, Coppel</td>
                <td className="td-mono" style={{ color: 'var(--text2)' }}>2025-02-20</td>
                <td className="td-mono" style={{ color: 'var(--text2)' }}>2025-03-20</td>
                <td><span style={{ color: 'var(--green)', fontFamily: '"JetBrains Mono", monospace', fontSize: '12px' }}>0</span></td>
              </tr>
              <tr style={{ display: ubicacionActiva && ubicacionActiva !== 'Guadalajara' ? 'none' : 'table-row' }}>
                <td className="td-main">Guadalajara</td>
                <td>Jalisco</td>
                <td>38</td>
                <td>HSBC, Soriana</td>
                <td className="td-mono" style={{ color: 'var(--text2)' }}>2025-02-28</td>
                <td className="td-mono" style={{ color: 'var(--text2)' }}>2025-03-28</td>
                <td><span style={{ color: 'var(--red)', fontFamily: '"JetBrains Mono", monospace', fontSize: '12px' }}>3</span></td>
              </tr>
              <tr style={{ display: ubicacionActiva && ubicacionActiva !== 'Monterrey' ? 'none' : 'table-row' }}>
                <td className="td-main">Monterrey</td>
                <td>N. León</td>
                <td>31</td>
                <td>OXXO, Walmart</td>
                <td className="td-mono" style={{ color: 'var(--text2)' }}>2025-03-05</td>
                <td className="td-mono" style={{ color: 'var(--text2)' }}>2025-04-05</td>
                <td><span style={{ color: 'var(--green)', fontFamily: '"JetBrains Mono", monospace', fontSize: '12px' }}>0</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}