import React from 'react';
import { Plus } from 'lucide-react';

export default function Ubicaciones() {
  return (
    <div className="view active">
      <div className="section-header">
        <div className="section-title">Mapa de cobertura nacional</div>
        <button className="btn btn-primary">
          <Plus size={14} strokeWidth={2.5} /> Nueva ubicación
        </button>
      </div>

      <div className="map-panel" style={{ marginBottom: '20px' }}>
        <div className="panel-header">
          <span className="panel-title">Cajeros por región</span>
        </div>
        <div className="map-area" style={{ height: '320px' }}>
          <div className="map-grid"></div>
          <div
            className="map-pin"
            style={{ left: '22%', top: '25%', '--pin-color': 'var(--green)' }}
          >
            <div className="map-pin-dot"></div>
            <div className="map-pin-label">Tijuana ×12</div>
          </div>
          <div
            className="map-pin"
            style={{ left: '28%', top: '45%', '--pin-color': 'var(--accent)' }}
          >
            <div className="map-pin-dot"></div>
            <div className="map-pin-label">Guadalajara ×38</div>
          </div>
          <div
            className="map-pin"
            style={{ left: '52%', top: '38%', '--pin-color': 'var(--accent)' }}
          >
            <div className="map-pin-dot"></div>
            <div className="map-pin-label">Ciudad de México ×87</div>
          </div>
          <div
            className="map-pin"
            style={{ left: '38%', top: '28%', '--pin-color': 'var(--yellow)' }}
          >
            <div className="map-pin-dot"></div>
            <div className="map-pin-label">Monterrey ×31</div>
          </div>
          <div
            className="map-pin"
            style={{ left: '65%', top: '34%', '--pin-color': 'var(--yellow)' }}
          >
            <div className="map-pin-dot"></div>
            <div className="map-pin-label">Veracruz ×19</div>
          </div>
          <div
            className="map-pin"
            style={{ left: '42%', top: '58%', '--pin-color': 'var(--accent2)' }}
          >
            <div
              className="map-pin-dot"
              style={{ '--pin-color': 'var(--accent2)' }}
            ></div>
            <div className="map-pin-label">Oaxaca ×14</div>
          </div>
          <div
            className="map-pin"
            style={{ left: '75%', top: '55%', '--pin-color': 'var(--red)' }}
          >
            <div
              className="map-pin-dot"
              style={{ '--pin-color': 'var(--red)' }}
            ></div>
            <div className="map-pin-label">Mérida ×22</div>
          </div>
          <div
            className="map-pin"
            style={{ left: '78%', top: '68%', '--pin-color': 'var(--accent3)' }}
          >
            <div
              className="map-pin-dot"
              style={{ '--pin-color': 'var(--accent3)' }}
            ></div>
            <div className="map-pin-label">Cancún ×37</div>
          </div>
          <div
            className="map-pin"
            style={{ left: '48%', top: '25%', '--pin-color': 'var(--green)' }}
          >
            <div className="map-pin-dot"></div>
            <div className="map-pin-label">SLP ×18</div>
          </div>
        </div>
        <div className="map-legend">
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
            <div className="dot" style={{ background: 'var(--accent2)' }}></div>{' '}
            Reciente instalación
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
              <tr>
                <td className="td-main">Ciudad de México</td>
                <td>CDMX</td>
                <td>87</td>
                <td>OXXO, HSBC, Walmart</td>
                <td className="td-mono">2025-03-01</td>
                <td className="td-mono">2025-04-01</td>
                <td>
                  <span
                    style={{
                      color: 'var(--yellow)',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '12px',
                    }}
                  >
                    2
                  </span>
                </td>
              </tr>
              <tr>
                <td className="td-main">Cancún</td>
                <td>Q. Roo</td>
                <td>37</td>
                <td>OXXO, Coppel</td>
                <td className="td-mono">2025-02-20</td>
                <td className="td-mono">2025-03-20</td>
                <td>
                  <span
                    style={{
                      color: 'var(--green)',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '12px',
                    }}
                  >
                    0
                  </span>
                </td>
              </tr>
              <tr>
                <td className="td-main">Guadalajara</td>
                <td>Jalisco</td>
                <td>38</td>
                <td>HSBC, Soriana</td>
                <td className="td-mono">2025-02-28</td>
                <td className="td-mono">2025-03-28</td>
                <td>
                  <span
                    style={{
                      color: 'var(--red)',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '12px',
                    }}
                  >
                    3
                  </span>
                </td>
              </tr>
              <tr>
                <td className="td-main">Monterrey</td>
                <td>N. León</td>
                <td>31</td>
                <td>OXXO, Walmart</td>
                <td className="td-mono">2025-03-05</td>
                <td className="td-mono">2025-04-05</td>
                <td>
                  <span
                    style={{
                      color: 'var(--green)',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '12px',
                    }}
                  >
                    0
                  </span>
                </td>
              </tr>
              <tr>
                <td className="td-main">Mérida</td>
                <td>Yucatán</td>
                <td>22</td>
                <td>Coppel</td>
                <td className="td-mono">2025-01-15</td>
                <td className="td-mono">2025-03-15</td>
                <td>
                  <span
                    style={{
                      color: 'var(--red)',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '12px',
                    }}
                  >
                    1
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
