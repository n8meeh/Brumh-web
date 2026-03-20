import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import PremiumPage from './pages/PremiumPage';
import PaymentResultPage from './pages/PaymentResultPage';
import heroImg1 from './assets/acuerdoImage.png';
import heroImg2 from './assets/reparacion.png';
import heroImg3 from './assets/appImage.png';

const HERO_IMAGES = [heroImg1, heroImg2, heroImg3];

/* ── Scroll Reveal wrapper ── */
function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── Check icon reutilizable ── */
const Check = ({ color = 'text-blue-600' }) => (
  <svg className={`w-4 h-4 ${color} shrink-0`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
);

/* ── Botón Volver Arriba ── */
function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={goToTop}
      className={`fixed bottom-8 right-8 w-14 h-14 premium-gradient text-white rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 z-50 hover:shadow-blue-600/20 hover:-translate-y-2 active:scale-90 border border-white/10 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Volver arriba"
    >
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

function Landing() {
  const [currentImg, setCurrentImg] = useState(0);
  const [activeTab, setActiveTab] = useState('usuarios');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* ═══════ HERO ═══════ */}
        {/* ═══════ HERO ═══════ */}
        <div className="relative mt-10 md:mt-16 mb-16 overflow-hidden rounded-[2.5rem] premium-gradient shadow-2xl shadow-slate-900/40">
          {/* Luz de acento automotriz */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 px-8 py-20 md:px-20 md:py-28">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <span className="inline-block py-2 px-5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase mb-8 border border-blue-500/20">
                Ecosistema Automotriz Premium
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.95] drop-shadow-2xl">
                El motor de tu <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  tranquilidad.
                </span>
              </h1>
              <p className="text-lg text-slate-400 max-w-md mb-12 leading-relaxed font-medium text-justify lg:text-left">
                Conectamos dueños de vehículos con los mejores talleres y servicios. 
                Transparencia, eficiencia y tecnología para el cuidado de tu inversión.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <button 
                   onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                   className="btn-primary"
                >
                  Explorar Ecosistema
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
               <div className="relative w-full max-w-xl aspect-[4/3] min-h-[300px] md:min-h-[420px] rounded-[2.5rem] overflow-hidden group shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-white/5 bg-slate-900/40 p-2">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-50 z-10 pointer-events-none"></div>
                 <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                    {HERO_IMAGES.map((src, i) => (
                      <img key={i} src={src} alt={`Brumh ${i + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${i === currentImg ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                        loading="eager"
                      />
                    ))}
                 </div>
                 {/* Decorative Overlay dots */}
                 <div className="absolute top-8 left-8 flex gap-2 z-20">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ SABER MÁS ═══════ */}
      <div id="sobre" className="scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-14 md:py-20">

          {/* Título */}
          <Reveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                ¿Cómo funciona?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
                Brumh es el ecosistema integral donde dueños de vehículos, talleres y entusiastas conectan para simplificar el mundo automotriz.
              </p>
            </div>
          </Reveal>

          {/* Features cards */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Confianza y Reputación', desc: 'Resuelve dudas, comparte consejos y ayuda a otros para ganar reputación de experto en la materia.' },
                { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Historial Inteligente', desc: 'Lleva una bitácora de vida detallada de tu vehículo con cada servicio técnico y repuesto registrado.' },
                { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'Conexión Directa', desc: 'Contacta talleres o capta clientes de forma proactiva. Eficiencia pura sin intermediarios molestos.' },
              ].map((f, i) => (
                <div key={i} className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(37,99,235,0.12)] hover:-translate-y-3 transition-all duration-500 overflow-hidden flex flex-col items-start text-left">
                  {/* Decoración Hover Superior */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  {/* Icono con efecto */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:shadow-2xl group-hover:shadow-blue-600/30 group-hover:scale-110 transition-all duration-500">
                    <div className="text-blue-600 group-hover:text-white transition-colors duration-500">
                      {f.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                    {f.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed font-medium text-justify break-words">
                    {f.desc}
                  </p>

                  {/* Accento de fondo sutil */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/5 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Toggle Usuarios / Negocios */}
          <Reveal>
            <div className="mb-12">
              <div className="flex justify-center">
                <div className="inline-flex bg-slate-100/80 backdrop-blur-sm rounded-[2rem] p-2 border border-slate-200/50 shadow-inner">
                  <button
                    onClick={() => setActiveTab('usuarios')}
                    className={`flex items-center gap-2 px-8 py-4 rounded-[1.5rem] text-sm font-black transition-all duration-500 ${
                      activeTab === 'usuarios'
                        ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30 ring-1 ring-blue-500'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    PARA USUARIOS
                  </button>
                  <button
                    onClick={() => setActiveTab('negocios')}
                    className={`flex items-center gap-2 px-8 py-4 rounded-[1.5rem] text-sm font-black transition-all duration-500 ${
                      activeTab === 'negocios'
                        ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/30 ring-1 ring-slate-800'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    PARA NEGOCIOS
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Tab content */}
          <div className="relative min-h-[400px] mt-12">
            {/* Usuarios */}
            <div className={`transition-all duration-700 ease-in-out ${activeTab === 'usuarios' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 absolute inset-0 pointer-events-none'}`}>
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/30">
                <div className="max-w-2xl mb-12">
                  <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] mb-3 block">Experiencia de Usuario</span>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Tu vehículo, bajo control absoluto.</h3>
                  <p className="text-slate-500 text-base leading-relaxed font-medium text-justify">
                    Gestiona el historial de tu vehículo, encuentra a los mejores aliados y conviértete en un referente de la comunidad Brumh. Todo en un solo lugar.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { n: '01', t: 'Descarga y Perfil', d: 'Regístrate y añade tu vehículo para llevar un control detallado y encontrar servicios a medida.' },
                    { n: '02', t: 'Busca y Contacta', d: 'Explora el mapa, descubre negocios cercanos y contáctalos por la app o redes sociales.' },
                    { n: '03', t: 'Bitácora de Vida', d: 'Registra cada mantención y repuesto automáticamente. ¡Tu auto siempre al día!' },
                    { n: '04', t: 'Comunidad Activa', d: 'Resuelve dudas, comparte consejos y ayuda a otros para ganar reputación de experto.' },
                  ].map((s) => (
                    <div key={s.n} className="relative bg-slate-50/40 backdrop-blur-sm rounded-[2rem] p-8 border border-slate-100/50 hover:border-blue-400 hover:bg-white transition-all duration-700 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.12)] group overflow-hidden flex flex-col items-start">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top"></div>
                      <span className="inline-flex items-center justify-center w-12 h-12 bg-white border border-slate-200 text-blue-600 text-lg font-black rounded-2xl mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 group-hover:rotate-[360deg] transition-all duration-1000">{s.n}</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300 tracking-tight">{s.t}</h4>
                      <p className="text-slate-500 leading-relaxed font-medium text-justify text-sm">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Negocios */}
            <div className={`transition-all duration-700 ease-in-out ${activeTab === 'negocios' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 absolute inset-0 pointer-events-none'}`}>
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/30">
                <div className="max-w-2xl mb-12">
                  <span className="text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] mb-3 block">Soluciones de Negocio</span>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Escala tu taller al siguiente nivel.</h3>
                  <p className="text-slate-500 text-base leading-relaxed font-medium text-justify">
                    Haz crecer tu negocio llegando directamente a quienes necesitan tus servicios. Participa proactivamente en la comunidad y destaca por tu conocimiento técnico.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { n: '01', t: 'Crea tu Vitrina', d: 'Registra tu negocio con logo y ubicación para ser visible ante miles de usuarios locales.' },
                    { n: '02', t: 'Capta Clientes', d: 'Recibe consultas directas o busca proactivamente en los posts de la comunidad.' },
                    { n: '03', t: 'Gestiona tu Equipo', d: 'Organiza a tus empleados y mejora la experiencia de atención para fidelizar clientes.' },
                    { n: '04', t: 'Fama y Confianza', d: 'Gana reseñas reales y ofrece soluciones técnicas para destacar como experto.' },
                  ].map((s) => (
                    <div key={s.n} className="relative bg-slate-50/40 backdrop-blur-sm rounded-[2rem] p-8 border border-slate-100/50 hover:border-slate-500 hover:bg-white transition-all duration-700 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.12)] group overflow-hidden flex flex-col items-start transition-all">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-900 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top"></div>
                      <span className="inline-flex items-center justify-center w-12 h-12 bg-white border border-slate-200 text-slate-900 text-lg font-black rounded-2xl mb-6 shadow-sm group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-800 group-hover:rotate-[360deg] transition-all duration-1000">{s.n}</span>
                      <h4 className="text-lg font-black text-slate-900 mb-3 leading-tight group-hover:text-slate-700 transition-colors duration-300 tracking-tight">{s.t}</h4>
                      <p className="text-slate-500 leading-relaxed font-medium text-justify text-sm">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacidad" element={<PrivacyPage />} />
        <Route path="/terminos" element={<TermsPage />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/premium/exito" element={<PaymentResultPage status="exito" />} />
        <Route path="/premium/error" element={<PaymentResultPage status="error" />} />
        <Route path="/premium/pendiente" element={<PaymentResultPage status="pendiente" />} />
      </Routes>
    </Router>
  );
}

export default App;
