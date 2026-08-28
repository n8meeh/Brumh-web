import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';

const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const AdsPage = lazy(() => import('./pages/AdsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));

import heroImg2 from './assets/optimized/reparacion.webp';
import heroImg3 from './assets/optimized/appImage.webp';
import acuerdoImg from './assets/optimized/acuerdoImage.webp';
import carouselImg1 from './assets/optimized/primero.webp';
import carouselImg2 from './assets/optimized/segundo.webp';
import carouselImg3 from './assets/optimized/tercero.webp';
import carouselImg4 from './assets/optimized/cuarto.webp';
import carouselImg5 from './assets/optimized/quinto.webp';

const CAROUSEL_IMAGES = [carouselImg1, carouselImg2, carouselImg3, carouselImg4, carouselImg5];

import Reveal from './components/Reveal';

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
    window.addEventListener('scroll', handleScroll, { passive: true });
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
  const [carouselIdx, setCarouselIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIdx(i => (i + 1) % CAROUSEL_IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>

      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden bg-white pt-10 pb-24">
        {/* Fondo decorativo */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-900/3 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Texto */}
            <div className="text-center lg:text-left space-y-8">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold tracking-widest uppercase">
                La app automotriz de Chile
              </span>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tighter leading-[0.9]">
                Todo tu auto,<br /><span className="text-blue-600">en un solo lugar.</span>
              </h1>
              <p className="text-lg text-slate-500 font-medium max-w-lg mx-auto lg:mx-0">
                Conecta con talleres, encuentra repuestos, cotiza servicios y únete a la comunidad automotriz más grande del país.
              </p>

              {/* Botones de descarga */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* App Store */}
                <a
                  href="#"
                  aria-disabled="true"
                  onClick={e => e.preventDefault()}
                  className="flex items-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 opacity-60 cursor-not-allowed"
                  title="Próximamente en App Store"
                >
                  <svg className="w-7 h-7 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[9px] font-medium tracking-widest uppercase opacity-70">Próximamente</p>
                    <p className="text-sm font-bold">App Store</p>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.brumh.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20"
                >
                  <svg className="w-7 h-7 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.18 23.76c.3.17.64.24.99.2l12.75-7.37-2.77-2.78-10.97 9.95zM.49 1.1A1.5 1.5 0 000 2.27v19.46c0 .47.18.9.49 1.17l.06.06 10.9-10.9v-.26L.55 1.04.49 1.1zM22.47 10.2l-2.8-1.62-3.12 3.12 3.12 3.12 2.82-1.63c.8-.46.8-1.52-.02-1.99zM4.17.24L16.92 7.6l-2.77 2.78L3.18.24A1.2 1.2 0 014.17.24z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[9px] font-medium tracking-widest uppercase opacity-70">Disponible en</p>
                    <p className="text-sm font-bold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Carrusel */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/60">
                {CAROUSEL_IMAGES.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Brumh ${i + 1}`}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === carouselIdx ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {CAROUSEL_IMAGES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCarouselIdx(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === carouselIdx ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`}
                      aria-label={`Imagen ${i + 1}`}
                    />
                  ))}
                </div>
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════ CONFIANZA ═══════ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Imagen */}
            <Reveal>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/60">
                <img
                  src={acuerdoImg}
                  alt="Mecánica entregando llaves a cliente"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>
            </Reveal>

            {/* Texto */}
            <Reveal delay={200}>
              <div className="space-y-8">
                <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold tracking-widest uppercase">
                  Confianza verificada
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-[0.95]">
                  El taller correcto,<br /><span className="text-blue-600">a la primera.</span>
                </h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  Sabemos lo difícil que es encontrar un mecánico de confianza. Por eso en Brumh cada negocio es evaluado por la comunidad — reseñas reales de conductores reales.
                </p>
                <div className="space-y-4">
                  {[
                    { stat: 'Reseñas reales', desc: 'Solo clientes verificados pueden opinar sobre un negocio.' },
                    { stat: 'Cotización directa', desc: 'Escríbele al taller sin intermediarios y compara precios.' },
                    { stat: 'Comunidad activa', desc: 'Miles de dueños de vehículos resolviendo dudas juntos.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{item.stat}</p>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ═══════ FUNCIONAMIENTO ═══════ */}
      <section id="sobre" className="relative scroll-mt-24 py-24 overflow-hidden border-t border-slate-100">
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
          <Route path="/anuncios" element={<AdsPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

