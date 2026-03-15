import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/brumh_logo.png';

const NAV_LINKS = [
  { to: '/sobre', label: 'Saber más' },
  { to: '/premium', label: 'Premium', highlight: true },
  { to: '/terminos', label: 'Legal' },
  { to: '/privacidad', label: 'Privacidad' },
];

export default function Header() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100">
      <div className="flex items-center justify-between px-6 md:px-8 py-3 max-w-7xl mx-auto">
        <Link to="/" className="group">
          <img src={logo} alt="Brumh" className="h-8 group-hover:opacity-80 transition-opacity" />
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {NAV_LINKS.map(({ to, label, highlight }) => {
            const isActive = location.pathname === to;

            if (highlight) {
              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {label}
                </Link>
              );
            }

            return (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors hidden sm:block ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-500 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
