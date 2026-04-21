import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';

const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const PremiumPage = lazy(() => import('./pages/PremiumPage'));
const PaymentResultPage = lazy(() => import('./pages/PaymentResultPage'));
const AdsPage = lazy(() => import('./pages/AdsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

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
      className={`transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── Check icon reutilizable ── */
const Check = ({ color = 'text-blue-600' }) => (
  <svg className={`w-4 h-4 ${color} shrink-0`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
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
      className={`fixed bottom-8 right-8 w-14 h-14 premium-gradient text-white rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 z-50 hover:shadow-blue-600/20 hover:-translate-y-2 active:scale-90 border border-white/10 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
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
  const [activeTab, setActiveTab] = useState('usuarios');

  return (
    <Layout>



      {/* ═══════ FUNCIONAMIENTO ═══════ */}
      <section className="relative scroll-mt-24 py-24 overflow-hidden border-t border-slate-100">
        {/* Fondo decorativo sutil */}
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 -z-10 pointer-events-none"></div>


        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Título de Sección */}
          <Reveal>
            <div className="flex flex-col items-center text-center mb-20">
              {/* Etiqueta superior sutil */}
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-4">
                Sobre Brumh
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tighter">
                Tu taller, lavado, grua y/o tienda de repuestos de confianza, <br /> <span className="text-blue-600">en la palma de tu mano.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-4">
                {/* Columna 1: Conexión y Cotización */}
                <div className="flex flex-col items-center p-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Cotiza al Instante</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Conectamos dueños con especialistas en reparación y repuestos. Pregunta precios y servicios de forma sencilla y directa.
                  </p>
                </div>

                {/* Columna 2: Reputación */}
                <div className="flex flex-col items-center p-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Decisiones Seguras</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Encuentra los mejores negocios cerca de ti basándote en reseñas reales y calificaciones de la comunidad.
                  </p>
                </div>

                {/* Columna 3: Foro/Comunidad */}
                <div className="flex flex-col items-center p-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Comunidad Experta</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Aprende y resuelve dudas en nuestro foro. Un espacio donde novatos y expertos comparten conocimientos sobre sus vehículos.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Selector de Experiencia (Usuarios / Negocios) */}
          <Reveal>
            <div className="flex justify-center mb-16">
              <div className="p-1.5 bg-slate-200/50 backdrop-blur-md rounded-[2.5rem] flex gap-2 border border-slate-200 shadow-inner">
                <button
                  onClick={() => setActiveTab('usuarios')}
                  className={`px-10 py-5 rounded-[2rem] text-xs font-bold tracking-widest transition-all duration-500 uppercase ${activeTab === 'usuarios'
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/40'
                    : 'text-slate-600 hover:bg-white/50'
                    }`}
                >
                  Modo Usuario
                </button>
                <button
                  onClick={() => setActiveTab('negocios')}
                  className={`px-10 py-5 rounded-[2rem] text-xs font-bold tracking-widest transition-all duration-500 uppercase ${activeTab === 'negocios'
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/40'
                    : 'text-slate-600 hover:bg-white/50'
                    }`}
                >
                  Modo Negocio
                </button>
              </div>
            </div>
          </Reveal>

          {/* Contenido Dinámico con Glassmorphism */}
          <div className="relative">
            <div className={`transition-all duration-700 ${activeTab === 'usuarios' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 absolute inset-0 pointer-events-none'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/40 backdrop-blur-sm p-10 md:p-16 rounded-[4rem] border border-white shadow-2xl">
                <div>
                  <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Personal</span>
                  <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">Control total de tu inversión.</h3>
                  <div className="space-y-6">
                    {[
                      { t: "Crea tu Garage", d: "Registra tus vehículos y mantén sus datos técnicos siempre a mano." },
                      { t: "Encuentra Expertos", d: "Accede a una red curada de negocios con reputación verificada." },
                      { t: "Comunidad 24/7", d: "Pregunta, responde y ayuda a otros entusiastas del motor." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">{item.t}</h4>
                          <p className="text-slate-500 text-sm">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-100 rounded-[3rem] aspect-square flex items-center justify-center border border-slate-200 overflow-hidden shadow-inner">
                  {/* Aquí iría una imagen o ilustración de la app para usuarios */}
                  <img src={heroImg3} className="w-3/4 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" alt="App Usuario" loading="lazy" />
                </div>
              </div>
            </div>

            {/* El mismo bloque pero para Negocios (ajusta colores a slate-900) */}
            <div className={`transition-all duration-700 ${activeTab === 'negocios' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 absolute inset-0 pointer-events-none'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-900 p-10 md:p-16 rounded-[4rem] border border-slate-800 shadow-2xl">
                <div className="order-2 lg:order-1 bg-slate-800 rounded-[3rem] aspect-square flex items-center justify-center border border-slate-700 overflow-hidden shadow-inner">
                  <img src={heroImg2} className="w-3/4 object-contain drop-shadow-2xl hover:rotate-2 transition-transform duration-500" alt="App Negocio" loading="lazy" />
                </div>
                <div className="order-1 lg:order-2">
                  <span className="text-blue-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Profesional</span>
                  <h3 className="text-4xl font-bold text-white mb-6 leading-tight">Tu negocio, digitalizado.</h3>
                  <div className="space-y-6">
                    {[
                      { t: "Vitrina Global", d: "Sé visible para miles de clientes potenciales en tu zona geográfica." },
                      { t: "Captación Proactiva", d: "Contacta directamente a usuarios que necesitan tus servicios específicos." },
                      { t: "Reputación de Oro", d: "Destaca por tu conocimiento técnico y gana reseñas de clientes reales." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{item.t}</h4>
                          <p className="text-slate-400 text-sm">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacidad" element={<PrivacyPage />} />
          <Route path="/terminos" element={<TermsPage />} />
          <Route path="/premium" element={<PremiumPage />} />
          <Route path="/premium/exito" element={<PaymentResultPage status="exito" />} />
          <Route path="/anuncios" element={<AdsPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/premium/error" element={<PaymentResultPage status="error" />} />
          <Route path="/premium/pendiente" element={<PaymentResultPage status="pendiente" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

