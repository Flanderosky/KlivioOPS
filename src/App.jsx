import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Componentes
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';

// Vistas
import Login from './views/Login.jsx';
import Dashboard from './views/Dash.jsx';
import Equipos from './views/Equipos.jsx';
import Servicios from './views/Servicios.jsx';
import Ubicaciones from './views/Ubicaciones.jsx';
import MobileTechView from './views/MobileTechView.jsx';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    // Si estamos en login, quitamos la clase 'shell' para que el login ocupe toda la pantalla libremente
    <div className={isLoginPage ? '' : 'shell'}>
      {/* Ocultamos el Sidebar en la pantalla de Login */}
      {!isLoginPage && <Sidebar />}

      <div className={isLoginPage ? '' : 'main'}>
        {/* Ocultamos el Topbar en la pantalla de Login */}
        {!isLoginPage && <Topbar />}

        <div className={isLoginPage ? '' : 'content'}>
          <Routes>
            {/* Ahora la ruta inicial te manda al login */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/equipos" element={<Equipos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/ubicaciones" element={<Ubicaciones />} />
            <Route path="/tecnico" element={<MobileTechView />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
