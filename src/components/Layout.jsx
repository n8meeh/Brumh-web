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
              <p className="text-xs text-slate-400 font-medium max-w-[200px] text-center md:text-left leading-relaxed">
                El ecosistema digital líder para el parque automotriz moderno.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              <a href="/#sobre" onClick={scrollToSobre} className="text-xs font-black tracking-widest uppercase text-slate-500 hover:text-blue-600 transition-all cursor-pointer">
                Ecosistema
              </a>
              <Link to="/premium" className="text-xs font-black tracking-widest uppercase text-slate-500 hover:text-blue-600 transition-all">
                Planes PRO
              </Link>
              <Link to="/terminos" className="text-xs font-black tracking-widest uppercase text-slate-500 hover:text-blue-600 transition-all">
                Legal
              </Link>
              <Link to="/privacidad" className="text-xs font-black tracking-widest uppercase text-slate-500 hover:text-blue-600 transition-all">
                Privacidad
              </Link>
              <a href="mailto:soporte@brumh.cl" className="text-xs font-black tracking-widest uppercase text-slate-500 hover:text-blue-600 transition-all">
                Contacto
              </a>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
               <p className="text-xs text-slate-400 font-bold">
                 © {new Date().getFullYear()} BRUMH SPA.
               </p>
               <div className="flex gap-4">
                 <div className="w-5 h-5 bg-slate-100 rounded-lg"></div>
                 <div className="w-5 h-5 bg-slate-100 rounded-lg"></div>
                 <div className="w-5 h-5 bg-slate-100 rounded-lg"></div>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
