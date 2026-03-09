import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="view active">
      <div className="kpi-row">
        <div className="kpi-card" style={{ '--kpi-color': 'var(--accent)' }}>
          <div className="kpi-icon">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="6" width="20" height="14" rx="2" />
              <path d="M8 6V4h8v2" />
            </svg>
          </div>
          <div className="kpi-value">247</div>
          <div className="kpi-label">Equipos registrados</div>
          <div className="kpi-trend trend-up">↑ 12 este mes</div>
        </div>
        <div className="kpi-card" style={{ '--kpi-color': 'var(--yellow)' }}>
          <div
            className="kpi-icon"
            style={{ background: 'rgba(245,158,11,0.08)' }}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="kpi-value">18</div>
          <div className="kpi-label">Tickets abiertos</div>
          <div className="kpi-trend trend-down">↓ 3 vs semana pasada</div>
        </div>
        <div className="kpi-card" style={{ '--kpi-color': 'var(--green)' }}>
          <div
            className="kpi-icon"
            style={{ background: 'rgba(16,185,129,0.08)' }}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="kpi-value">94.2%</div>
          <div className="kpi-label">SLA cumplido</div>
          <div className="kpi-trend trend-up">↑ 2.1% este mes</div>
        </div>
        <div className="kpi-card" style={{ '--kpi-color': 'var(--accent2)' }}>
          <div
            className="kpi-icon"
            style={{ background: 'rgba(255,107,53,0.08)' }}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div className="kpi-value">2.4h</div>
          <div className="kpi-label">Tiempo de respuesta avg</div>
          <div className="kpi-trend trend-up">↑ Mejor en 30d</div>
        </div>
      </div>

      <div className="dash-grid">
        <div className="map-panel panel">
          <div className="panel-header">
            <span className="panel-title">Cobertura Nacional</span>
            <span style={{ fontSize: '12px', color: 'var(--text2)' }}>
              247 cajeros activos
            </span>
          </div>
          <div className="map-area">
            <div className="map-grid"></div>
            <div
              className="map-pin"
              style={{ left: '22%', top: '30%', '--pin-color': 'var(--green)' }}
            >
              <div className="map-pin-dot"></div>
              <div className="map-pin-label">TIJ ×12</div>
            </div>
            <div
              className="map-pin"
              style={{
                left: '30%',
                top: '50%',
                '--pin-color': 'var(--accent)',
              }}
            >
              <div className="map-pin-dot"></div>
              <div className="map-pin-label">GDL ×38</div>
            </div>
            <div
              className="map-pin"
              style={{
                left: '52%',
                top: '42%',
                '--pin-color': 'var(--accent)',
              }}
            >
              <div className="map-pin-dot"></div>
              <div className="map-pin-label">CDMX ×87</div>
            </div>
            <div
              className="map-pin"
              style={{
                left: '65%',
                top: '38%',
                '--pin-color': 'var(--yellow)',
              }}
            >
              <div className="map-pin-dot"></div>
              <div className="map-pin-label">VER ×19</div>
            </div>
          </div>
          <div className="map-legend">
            <div className="map-legend-item">
              <div className="dot dot-green"></div> Normal
            </div>
            <div className="map-legend-item">
              <div className="dot dot-yellow"></div> Mant. pendiente
            </div>
            <div className="map-legend-item">
              <div className="dot dot-red"></div> Falla activa
            </div>
            <div className="map-legend-item">
              <div className="dot dot-blue"></div> En servicio
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <span className="panel-title">Actividad reciente</span>
          </div>
          <div className="panel-body">
            <div className="activity-item">
              <div
                className="activity-icon"
                style={{ background: 'rgba(16,185,129,0.1)' }}
              >
                🔧
              </div>
              <div className="activity-text">
                <div className="activity-title">Preventivo completado</div>
                <div className="activity-sub">
                  ATM-CDMX-047 · NCR Selfserv 84
                </div>
              </div>
              <div className="activity-time">hace 12m</div>
            </div>
            <div className="activity-item">
              <div
                className="activity-icon"
                style={{ background: 'rgba(239,68,68,0.1)' }}
              >
                🚨
              </div>
              <div className="activity-text">
                <div className="activity-title">Falla reportada</div>
                <div className="activity-sub">
                  ATM-MID-003 · Lectora de tarjetas
                </div>
              </div>
              <div className="activity-time">hace 28m</div>
            </div>
            <div className="activity-item">
              <div
                className="activity-icon"
                style={{ background: 'rgba(0,229,255,0.1)' }}
              >
                📦
              </div>
              <div className="activity-text">
                <div className="activity-title">Instalación nueva</div>
                <div className="activity-sub">OXXO Sucursal Querétaro #4</div>
              </div>
              <div className="activity-time">hace 1h</div>
            </div>
          </div>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <span className="panel-title">Tickets recientes</span>
          <NavLink
            to="/servicios"
            className="btn btn-ghost"
            style={{ fontSize: '12px', padding: '5px 10px' }}
          >
            Ver todos →
          </NavLink>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Ticket</th>
                <th>Equipo</th>
                <th>Cliente</th>
                <th>Tipo</th>
                <th>Técnico</th>
                <th>Estado</th>
                <th>SLA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-mono">#SRV-1209</td>
                <td className="td-main">NCR Selfserv 84</td>
                <td>OXXO / CDMX Norte</td>
                <td>
                  <span className="badge badge-corr">Correctivo</span>
                </td>
                <td>Carlos M.</td>
                <td>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <div className="dot dot-yellow"></div> En proceso
                  </div>
                </td>
                <td
                  style={{
                    color: 'var(--yellow)',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '12px',
                  }}
                >
                  1h 40m
                </td>
              </tr>
              <tr>
                <td className="td-mono">#SRV-1208</td>
                <td className="td-main">Nautilus Hyosung</td>
                <td>HSBC / GDL Sur</td>
                <td>
                  <span className="badge badge-prev">Preventivo</span>
                </td>
                <td>Ana R.</td>
                <td>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <div className="dot dot-green"></div> Completado
                  </div>
                </td>
                <td
                  style={{
                    color: 'var(--green)',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '12px',
                  }}
                >
                  OK
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
