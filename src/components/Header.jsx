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
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.03)] supports-[backdrop-filter]:bg-white/60">
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
                  className={`px-6 py-2.5 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-500 border border-white/10 ${
                    isActive
                      ? 'premium-gradient text-white shadow-2xl shadow-blue-900/40'
                      : 'premium-gradient text-white hover:shadow-2xl hover:shadow-blue-900/40 hover:-translate-y-1 active:scale-95'
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
                  className={`block px-4 py-4 rounded-2xl text-sm font-black tracking-widest uppercase transition-all ${
                    highlight
                      ? 'premium-gradient text-white text-center shadow-xl shadow-blue-900/30 border border-white/10 mt-4'
                      : isActive
                        ? 'text-blue-600 bg-blue-50/50 backdrop-blur-sm'
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
