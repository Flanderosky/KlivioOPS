import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Lock, Mail } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Syne:wght@600;700;800&display=swap');

        .login-wrapper {
          position: fixed; inset: 0; z-index: 1000; display: flex;
          background: #05030A; color: #fff; font-family: 'DM Sans', sans-serif;
        }
        
        .login-left {
          display: none;
          flex: 1; position: relative; flex-direction: column; padding: 60px; overflow: hidden;
          border-right: 1px solid rgba(124, 58, 237, 0.2);
        }
        @media (min-width: 768px) {
          .login-left { display: flex; }
        }

        .login-right {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; justify-content: center; padding: 40px;
          background: #0A0612;
        }

        .font-syne { font-family: 'Syne', sans-serif; }

        .input-glass {
          width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px; padding: 16px 16px 16px 46px; color: #fff; font-size: 15px;
          outline: none; transition: all 0.3s ease; font-family: 'DM Sans', sans-serif;
        }
        .input-glass:focus {
          border-color: #7C3AED; box-shadow: 0 0 0 4px rgba(124,58,237,0.15); background: rgba(255,255,255,0.05);
        }

        .btn-premium {
          width: 100%; background: linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%);
          color: #fff; border: none; border-radius: 12px; padding: 16px; font-size: 16px; font-weight: 700;
          margin-top: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
          font-family: 'DM Sans', sans-serif;
        }
        .btn-premium:hover {
          transform: translateY(-2px); box-shadow: 0 6px 25px rgba(124, 58, 237, 0.6);
        }

        .bg-grid {
          position: absolute; inset: 0; z-index: 0; opacity: 0.3;
          background-image: linear-gradient(rgba(124, 58, 237, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.15) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <div className="login-wrapper">
        {/* LADO IZQUIERDO - Branding Klivio */}
        <div className="login-left">
          <div className="bg-grid"></div>

          <div
            style={{
              position: 'absolute',
              top: '-10%',
              left: '-10%',
              width: '500px',
              height: '500px',
              background:
                'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
              zIndex: 0,
            }}
          ></div>

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              className="font-syne"
              style={{
                fontSize: '32px',
                fontWeight: '800',
                letterSpacing: '-0.5px',
              }}
            >
              KLIV<span style={{ color: '#7C3AED' }}>IO</span>
            </span>
          </div>

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              marginTop: 'auto',
              marginBottom: 'auto',
              maxWidth: '500px',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                borderRadius: '20px',
                background: 'rgba(124,58,237,0.1)',
                border: '1px solid rgba(124,58,237,0.3)',
                color: '#A78BFA',
                fontSize: '13px',
                fontWeight: '700',
                marginBottom: '24px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              Klivio Ops Enterprise
            </div>
            <h1
              className="font-syne"
              style={{
                fontSize: '64px',
                fontWeight: '800',
                lineHeight: '1.05',
                marginBottom: '24px',
                letterSpacing: '-2px',
              }}
            >
              Tu operativa,
              <br />
              <span style={{ color: '#9F7AEA' }}>
                funcionando
                <br />
                al 100.
              </span>
            </h1>
            <p
              style={{
                color: '#9CA3AF',
                fontSize: '18px',
                lineHeight: '1.6',
                maxWidth: '420px',
                fontWeight: '400',
              }}
            >
              El sistema exclusivo para la gestión de servicios en campo.
              Supervisa, asigna y resuelve sin fricciones técnicas.
            </p>
          </div>
        </div>

        {/* LADO DERECHO - Formulario de Login */}
        <div className="login-right">
          <div style={{ width: '100%', maxWidth: '400px' }}>
            {/* Logo tipográfico */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '40px',
              }}
            >
              <span
                className="font-syne"
                style={{ fontSize: '24px', fontWeight: '800' }}
              >
                KLIV<span style={{ color: '#7C3AED' }}>IO</span> OPS
              </span>
            </div>

            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
              <h2
                className="font-syne"
                style={{
                  fontSize: '32px',
                  fontWeight: '800',
                  marginBottom: '8px',
                  letterSpacing: '-0.5px',
                }}
              >
                Iniciar sesión
              </h2>
              <p style={{ color: '#9CA3AF', fontSize: '15px' }}>
                Ingresa tus credenciales de acceso.
              </p>
            </div>

            <form
              onSubmit={handleLogin}
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#9CA3AF',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  Correo Electrónico
                </label>
                <div style={{ position: 'relative' }}>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#6B7280',
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@klivio.net"
                    className="input-glass"
                    required
                  />
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <label
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      color: '#9CA3AF',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Contraseña
                  </label>
                  <a
                    href="#"
                    style={{
                      fontSize: '13px',
                      color: '#9F7AEA',
                      textDecoration: 'none',
                      fontWeight: '600',
                    }}
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <div style={{ position: 'relative' }}>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#6B7280',
                    }}
                  >
                    <Lock size={18} />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="input-glass"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-premium">
                Entrar al sistema <ArrowRight size={18} />
              </button>
            </form>

            <div
              style={{
                marginTop: '40px',
                textAlign: 'center',
                color: '#4B5563',
                fontSize: '13px',
                fontWeight: '500',
              }}
            >
              &copy; {new Date().getFullYear()} Klivio Consulting.
              <br />
              Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
