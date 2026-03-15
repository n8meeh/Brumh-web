import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/geminiLogo.png';

const NAV_LINKS = [
  { to: '/#sobre', label: 'Saber más', anchor: true },
  { to: '/premium', label: 'Premium', highlight: true },
  { to: '/terminos', label: 'Legal' },
  { to: '/privacidad', label: 'Privacidad' },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleAnchorClick = (e, to) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-sm shadow-slate-100/50">
      <div className="flex items-center justify-between px-6 md:px-10 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <img src={logo} alt="Brumh" className="h-14 md:h-16 group-hover:scale-105 transition-transform duration-200" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map(({ to, label, highlight, anchor }) => {
            const isActive = !anchor && location.pathname === to;

            if (highlight) {
              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5'
                  }`}
                >
                  {label}
                </Link>
              );
            }

            if (anchor) {
              return (
                <a
                  key={to}
                  href={to}
                  onClick={(e) => handleAnchorClick(e, to)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 text-slate-600 hover:text-blue-600 hover:bg-slate-50 cursor-pointer"
                >
                  {label}
                </a>
              );
            }

            return (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Menú"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map(({ to, label, highlight, anchor }) => {
              const isActive = !anchor && location.pathname === to;

              if (anchor) {
                return (
                  <a
                    key={to}
                    href={to}
                    onClick={(e) => handleAnchorClick(e, to)}
                    className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                  >
                    {label}
                  </a>
                );
              }

              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    highlight
                      ? 'bg-blue-600 text-white text-center shadow-md shadow-blue-600/20'
                      : isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
