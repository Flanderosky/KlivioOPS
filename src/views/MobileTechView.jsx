import React, { useState, useEffect } from 'react';

export default function MobileTechView() {
  const [seconds, setSeconds] = useState(2843); // 47 min 23 seg
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');

  const handleStop = () => {
    setRunning(false);
    setSeconds(0);
    alert('✅ Servicio cerrado. Se generará el reporte del ticket.');
  };

  return (
    <div className="view active">
      <div className="section-header">
        <div>
          <div className="section-title">Vista Técnico de Campo</div>
          <div style={{ fontSize: '12px', color: 'var(--text2)', marginTop: '2px' }}>
            Prototipo app móvil
          </div>
        </div>
      </div>

      <div className="mobile-frame">
        <div className="mobile-header">
          <div>
            <div
              style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: '16px',
                fontWeight: '800',
                color: 'var(--accent)',
                letterSpacing: '-0.5px'
              }}
            >
              FieldOps
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text2)', marginTop: '2px' }}>
              Carlos Martínez · Técnico
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="var(--text2)"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <div className="notif-dot"></div>
            </div>
            <div className="avatar" style={{ width: '32px', height: '32px', fontSize: '12px' }}>
              CM
            </div>
          </div>
        </div>

        <div className="mobile-content">
          {/* Tarjeta de Ticket Activo con efecto Glassmorphism */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(0,229,255,0.05))',
              border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
              }}
            >
              <span className="badge badge-corr">Correctivo</span>
              <span className="td-mono" style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: '600' }}>
                #SRV-1209
              </span>
            </div>
            <div
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: 'var(--text)',
                marginBottom: '6px',
              }}
            >
              NCR Selfserv 84
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text2)', marginBottom: '4px' }}>
              📍 OXXO Av. Insurgentes #2240, CDMX
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text2)', marginBottom: '16px' }}>
              🔧 Falla en lector de tarjetas
            </div>
            
            <div className="progress-bar" style={{ marginBottom: '8px', background: 'rgba(255,255,255,0.1)' }}>
              <div className="progress-fill" style={{ width: '60%' }}></div>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--accent3)', fontWeight: '500', textAlign: 'right' }}>
              60% completado
            </div>
          </div>

          <div className="timer-box">
            <div
              style={{
                fontSize: '11px',
                color: 'var(--text2)',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: '600'
              }}
            >
              Tiempo en sitio
            </div>
            <div className="timer-value">
              {h}:{m}:{s}
            </div>
            <div className="timer-label" style={{ color: 'var(--green)' }}>Ticket Activo</div>
            <div className="timer-controls">
              <button
                className={running ? 'btn btn-timer-pause' : 'btn btn-timer-start'}
                onClick={() => setRunning(!running)}
              >
                {running ? '⏸ Pausar' : '▶ Reanudar'}
              </button>
              <button className="btn btn-timer-stop" onClick={handleStop}>
                ⏹ Cerrar
              </button>
            </div>
          </div>

          <div
            style={{
              fontFamily: '"Syne", sans-serif',
              fontSize: '14px',
              fontWeight: '700',
              color: 'var(--text)',
              marginBottom: '12px',
            }}
          >
            Mis tickets hoy
          </div>
          <div className="service-card">
            <div className="service-card-top">
              <div>
                <div className="service-card-id">#SRV-1209</div>
                <div className="service-card-title">
                  NCR Selfserv 84 — Correctivo
                </div>
              </div>
              <span className="badge badge-corr">Activo</span>
            </div>
            <div className="service-card-meta">
              <span>📍 CDMX</span>
              <span>⏱ Activo</span>
              <span>🏢 OXXO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}