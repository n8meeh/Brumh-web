import { Link } from 'react-router-dom';
import Header from './Header';
import logo from '../assets/brumh_logo.png';

export default function Layout({ children, className = '' }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-slate-50 to-white">
      <Header />

      <main className={`flex-1 ${className}`}>
        {children}
      </main>

      <footer className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={logo} alt="Brumh" className="h-6 opacity-60" />

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link to="/premium" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                Premium
              </Link>
              <Link to="/terminos" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
                Términos de Servicio
              </Link>
              <Link to="/privacidad" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
                Política de Privacidad
              </Link>
              <a href="mailto:soporte@brumh.cl" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
                soporte@brumh.cl
              </a>
            </div>

            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Brumh
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
