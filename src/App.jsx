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
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 py-10 md:py-14">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-5 tracking-tight leading-[1.05]">
              El motor de tu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
                tranquilidad.
              </span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl mb-6 leading-relaxed">
              Conectamos dueños de vehículos con los mejores talleres y servicios automotrices.
              Transparencia, cercanía y calidad en un solo lugar.
            </p>
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </div>
                Gratis para usuarios
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </div>
                30 días gratis para talleres
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[85vw] sm:max-w-sm md:max-w-md lg:max-w-lg">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-blue-400/10 rounded-[2rem] blur-2xl"></div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/15">
                {HERO_IMAGES.map((src, i) => (
                  <img key={i} src={src} alt={`Brumh ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${i === currentImg ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-3">
                {HERO_IMAGES.map((_, i) => (
                  <button key={i} onClick={() => setCurrentImg(i)}
                    className={`rounded-full transition-all duration-300 ${i === currentImg ? 'w-6 h-2 bg-blue-600' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'}`}
                    aria-label={`Imagen ${i + 1}`}
                  />
                ))}
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
              <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Una plataforma que conecta a dueños de vehículos con los mejores talleres y servicios automotrices de su zona.
              </p>
            </div>
          </Reveal>

          {/* Features cards */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {[
                { icon: <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: 'Encuentra lo más cercano', desc: 'Talleres y servicios cerca de ti con geolocalización.' },
                { icon: <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Reseñas verificadas', desc: 'Valoraciones reales de la comunidad automotriz.' },
                { icon: <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'Rápido y directo', desc: 'Contacta por WhatsApp o teléfono sin intermediarios.' },
              ].map((f, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 mb-1">{f.title}</h3>
                  <p className="text-slate-500 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Toggle Usuarios / Negocios */}
          <Reveal>
            <div className="mb-8">
              <div className="flex justify-center">
                <div className="inline-flex bg-slate-100 rounded-2xl p-1.5">
                  <button
                    onClick={() => setActiveTab('usuarios')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                      activeTab === 'usuarios'
                        ? 'bg-white text-blue-600 shadow-md'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    Para Usuarios
                  </button>
                  <button
                    onClick={() => setActiveTab('negocios')}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                      activeTab === 'negocios'
                        ? 'bg-white text-slate-900 shadow-md'
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    Para Negocios
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Tab content */}
          <div className="relative min-h-[400px]">
            {/* Usuarios */}
            <div className={`transition-all duration-500 ease-in-out ${activeTab === 'usuarios' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'}`}>
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/80">
                <p className="text-slate-500 mb-5">
                  Si tienes un vehículo y necesitas un servicio automotriz, Brumh te facilita encontrar el taller ideal cerca de ti.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { n: '1', t: 'Descarga la App', d: 'Descarga Brumh gratis y crea tu cuenta en segundos.' },
                    { n: '2', t: 'Busca servicios', d: 'Activa tu ubicación y descubre talleres cercanos.' },
                    { n: '3', t: 'Contacta directo', d: 'Comunícate por WhatsApp, teléfono o redes sociales.' },
                  ].map((s) => (
                    <div key={s.n} className="bg-slate-50 rounded-2xl p-5">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-lg mb-3">{s.n}</span>
                      <h4 className="font-bold text-slate-800 mb-1">{s.t}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{s.d}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 bg-blue-50 rounded-2xl p-5 border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Funciones destacadas</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {['Geolocalización en tiempo real', 'Reseñas verificadas', 'Mapa interactivo', 'Comunidad automotriz', '100% gratis para usuarios', 'Solicitudes directas'].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-blue-800"><Check />{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Negocios */}
            <div className={`transition-all duration-500 ease-in-out ${activeTab === 'negocios' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'}`}>
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/80">
                <p className="text-slate-500 mb-5">
                  Si tienes un taller, servicio técnico o negocio automotriz, Brumh te ayuda a llegar a más clientes en tu zona.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { n: '1', t: 'Registra tu negocio', d: 'Crea tu cuenta con logo, portada, ubicación y contacto.' },
                    { n: '2', t: 'Aparece en el mapa', d: 'Tu negocio se muestra a usuarios cercanos.' },
                    { n: '3', t: 'Recibe clientes', d: 'Te contactan directamente por WhatsApp o teléfono.' },
                  ].map((s) => (
                    <div key={s.n} className="bg-slate-50 rounded-2xl p-5">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-slate-800 text-white text-sm font-bold rounded-lg mb-3">{s.n}</span>
                      <h4 className="font-bold text-slate-800 mb-1">{s.t}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{s.d}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">Premium</span>
                    <h4 className="font-bold">Potencia tu negocio</h4>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">
                    Visibilidad destacada, propuestas ilimitadas y badge verificado. Prueba gratis por 30 días.
                  </p>
                  <Link to="/premium" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all">
                    Ver planes Premium
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
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
