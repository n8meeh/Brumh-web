import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Simple */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-black text-xl">B</span>
          </div>
          <span className="text-2xl font-bold text-slate-800 tracking-tight">Brumh</span>
        </div>
        <a href="/terminos" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
          Legal
        </a>
        <a href="/privacidad" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
          Privacidad
        </a>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-20 flex flex-col items-center text-center">
        <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          Próximamente en Chile
        </span>
        <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
          El motor de tu <br />
          <span className="text-blue-600">tranquilidad.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mb-12 leading-relaxed">
          Conectamos dueños de vehículos con los mejores talleres y servicios automotrices.
          Transparencia, cercanía y calidad en un solo lugar.
        </p>

        <div className="flex flex-col sm:row gap-4 w-full justify-center">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
            Registrar mi Taller
          </button>
          <button className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all">
            Saber más
          </button>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacidad" element={<PrivacyPage />} />
        <Route path="/terminos" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}

export default App;