import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  MonitorSmartphone,
  Wrench,
  MapPin,
  Smartphone,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className={`sidebar ${expanded ? 'expanded' : ''}`} id="sidebar">
      {/* ── LOGO REBRANDING: KLIVIO OPS ── */}
      <div
        className="logo-wrap"
        style={{
          justifyContent: expanded ? 'flex-start' : 'center',
          padding: expanded ? '0 16px' : '0',
          marginTop: '10px',
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', height: '40px' }}>
          {expanded ? (
            <span
              style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: '22px',
                fontWeight: '800',
                letterSpacing: '-0.5px',
                color: '#fff',
              }}
            >
              KLIV<span style={{ color: 'var(--accent)' }}>IO</span>
            </span>
          ) : (
            <span
              style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: '18px',
                fontWeight: '800',
                color: 'var(--accent)',
              }}
            >
              IO
            </span>
          )}
        </div>
      </div>

      {/* ── NAVEGACIÓN ── */}
      <NavLink
        to="/dashboard"
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <LayoutDashboard size={18} />
        <span className="nav-label">Dashboard</span>
      </NavLink>

      <NavLink
        to="/equipos"
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <MonitorSmartphone size={18} />
        <span className="nav-label">Equipos</span>
      </NavLink>

      <NavLink
        to="/servicios"
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <Wrench size={18} color="var(--green)" />
        <span className="nav-label">Servicios</span>
        <span className="nav-badge">5</span>
      </NavLink>

      <NavLink
        to="/ubicaciones"
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <MapPin size={18} />
        <span className="nav-label">Ubicaciones</span>
      </NavLink>

      <NavLink
        to="/tecnico"
        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
      >
        <Smartphone size={18} />
        <span className="nav-label">Técnico Móvil</span>
      </NavLink>

      <div className="sidebar-spacer"></div>

      {/* ── BOTÓN COLAPSAR ── */}
      <div className="toggle-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </div>
    </nav>
  );
}
