import { useLocation } from 'react-router-dom';
import { Search, Plus } from 'lucide-react';

const titles = {
  '/dashboard': 'Dashboard',
  '/equipos': 'Base de Equipos',
  '/servicios': 'Mesa de Servicio',
  '/ubicaciones': 'Cobertura Nacional',
  '/tecnico': 'Vista Técnico Móvil',
};

export default function Topbar() {
  const location = useLocation();
  const pageTitle = titles[location.pathname] || 'FieldOps';

  return (
    <header className="topbar">
      <span className="page-title">{pageTitle}</span>
      <div className="topbar-spacer"></div>

      <div className="search-box">
        <Search size={14} />
        <input type="text" placeholder="Buscar equipo, ticket, cliente..." />
      </div>

      <button className="btn btn-primary">
        <Plus size={14} strokeWidth={2.5} />
        Nuevo
      </button>

      <div className="avatar">IR</div>
    </header>
  );
}
