import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import PremiumPage from './pages/PremiumPage';
import AboutPage from './pages/AboutPage';
import PaymentResultPage from './pages/PaymentResultPage';
import heroImg from './assets/hero.png';

function Landing() {
  return (
    <Layout>
      {/* ─── Hero Section ─── */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 py-10 md:py-16">
          {/* Left: Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border border-blue-100">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
              Próximamente en Chile
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-[1.1]">
              El motor de tu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                tranquilidad.
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-500 max-w-xl mb-8 leading-relaxed">
              Conectamos dueños de vehículos con los mejores talleres y servicios automotrices.
              Transparencia, cercanía y calidad en un solo lugar.
            </p>

            {/* Trust badges */}
            <div className="flex items-center gap-5 mt-6 justify-center lg:justify-start">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Gratis para usuarios
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                30 días gratis para talleres
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-3xl blur-2xl"></div>
              <img
                src={heroImg}
                alt="Brumh App"
                className="relative w-full max-w-sm lg:max-w-md rounded-3xl shadow-2xl shadow-slate-900/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── Features Section ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">
            ¿Por qué Brumh?
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Diseñado para simplificar la relación entre vehículos y servicios automotrices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1.5">Encuentra lo más cercano</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Localiza talleres y servicios automotrices cerca de ti con geolocalización en tiempo real.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1.5">Reseñas verificadas</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Toma decisiones informadas con valoraciones reales de otros usuarios de la comunidad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1.5">Rápido y directo</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Contacta directamente con el taller por WhatsApp, teléfono o redes sociales sin intermediarios.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),_transparent_50%)]"></div>
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">
              ¿Tienes un taller?
            </h2>
            <p className="text-slate-400 text-base max-w-lg mx-auto mb-6">
              Únete a Brumh y conecta con miles de conductores que buscan servicios como los tuyos. Prueba Premium gratis por 30 días.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3.5 rounded-2xl font-bold text-base hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-0.5">
                Registrarme ahora
              </button>
              <Link
                to="/premium"
                className="bg-white/10 text-white border border-white/20 px-6 py-3.5 rounded-2xl font-bold text-base hover:bg-white/20 transition-all hover:-translate-y-0.5"
              >
                Ver planes Premium
              </Link>
            </div>
          </div>
        </div>
      </section>
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
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/premium/exito" element={<PaymentResultPage status="exito" />} />
        <Route path="/premium/error" element={<PaymentResultPage status="error" />} />
        <Route path="/premium/pendiente" element={<PaymentResultPage status="pendiente" />} />
      </Routes>
    </Router>
  );
}

export default App;
