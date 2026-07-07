import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// Asegúrate de que la ruta del logo sea la correcta con el nuevo diseño
import logo from '../assets/LogoClaroLogin-removebg-preview.png';

const NAV_LINKS = [
  { to: '/#top', label: 'Inicio', anchor: true },
  { to: '/nosotros', label: '¿Qué es Brumh?' },
  { to: '/anuncios', label: 'Anuncios' },
  { to: '/contacto', label: 'Contacto' },
  { to: '/terminos', label: 'Legal' },
  { to: '/privacidad', label: 'Privacidad' },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para cambiar el estilo al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e, to) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = to.split('#')[1];

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (id === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
      ? 'bg-white/70 backdrop-blur-lg border-b border-slate-200/50 shadow-sm'
      : 'bg-transparent py-2'
      }`}>
      <div className="flex items-center justify-between px-6 md:px-10 py-3 max-w-7xl mx-auto">

        {/* Logo con Animación */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Brumh App"
            className="h-20 md:h-24 hover:opacity-80 transition-all duration-300 active:scale-95"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map(({ to, label, anchor }) => {
              const isActive = !anchor && location.pathname === to;
              return (
                <div key={to} className="relative group">
                  {anchor ? (
                    <a
                      href={to}
                      onClick={(e) => handleAnchorClick(e, to)}
                      className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      to={to}
                      className={`text-sm font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                        }`}
                    >
                      {label}
                    </Link>
                  )}
                  {/* Línea animada inferior */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </div>
              );
            })}
          </div>

        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-600 active:scale-90 transition-transform"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Animado */}
      <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="px-6 py-8 flex flex-col gap-4">
          {NAV_LINKS.map(({ to, label, anchor }) => (
            anchor ? (
              <a
                key={to}
                href={to}
                onClick={(e) => handleAnchorClick(e, to)}
                className="text-lg font-semibold text-slate-700 p-2"
              >
                {label}
              </a>
            ) : (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={`text-lg font-semibold p-2 ${location.pathname === to ? 'text-blue-600' : 'text-slate-700'}`}
              >
                {label}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
}
