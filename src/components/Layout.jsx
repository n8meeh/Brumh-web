import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import logo from '../assets/geminiLogo.png';

export default function Layout({ children, className = '' }) {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSobre = (e) => {
    e.preventDefault();
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-slate-50/50 to-white">
      <Header />

      <main className={`flex-1 ${className}`}>
        {children}
      </main>

      <footer className="border-t border-slate-200/60 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/" className="group">
              <img src={logo} alt="Brumh" className="h-11 opacity-70 group-hover:opacity-100 transition-opacity" />
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="/#sobre" onClick={scrollToSobre} className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors cursor-pointer">
                Saber más
              </a>
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
