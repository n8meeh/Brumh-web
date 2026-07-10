import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import logo from '../assets/LogoClaroLogin.png';

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
    <div className="min-h-screen flex flex-col bg-slate-50/30 selection:bg-blue-600/10 selection:text-blue-600">
      <Header />

      <main className={`flex-1 ${className}`}>
        {children}
      </main>

      <footer className="relative z-10 border-t border-slate-200/60 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 md:px-12 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link to="/" className="group">
                <img src={logo} alt="Brumh" className="h-12 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              <Link to="/" className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-blue-600 transition-all">
                Inicio
              </Link>
              <Link to="/nosotros" className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-blue-600 transition-all">
                ¿Qué es Brumh?
              </Link>
              <Link to="/anuncios" className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-blue-600 transition-all">
                Anuncios
              </Link>
              <Link to="/contacto" className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-blue-600 transition-all">
                Contacto
              </Link>
              <Link to="/faq" className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-blue-600 transition-all">
                FAQ
              </Link>
              <Link to="/terminos" className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-blue-600 transition-all">
                Legal
              </Link>
              <Link to="/privacidad" className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-blue-600 transition-all">
                Privacidad
              </Link>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
              <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase opacity-60">
                © {new Date().getFullYear()} BRUMH SPA.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

