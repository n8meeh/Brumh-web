import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import Layout from '../components/Layout';

const mpPublicKey = import.meta.env.VITE_MP_PUBLIC_KEY;
if (mpPublicKey) {
    initMercadoPago(mpPublicKey, { locale: 'es-CL' });
}

const API_URL = import.meta.env.VITE_API_URL || 'https://brumh.cl/api';

/* ── Componentes de Iconos ── */
const CheckIcon = ({ color = 'text-blue-500' }) => (
    <div className={`w-5 h-5 ${color} bg-current/10 rounded-full flex items-center justify-center shrink-0`}>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    </div>
);

const CrossIcon = () => (
    <div className="w-5 h-5 text-slate-300 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
    </div>
);

/* ── Modal de Login (Sin cambios en lógica) ── */
function LoginModal({ isOpen, onClose, onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const backdropRef = useRef(null);

    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        if (isOpen) window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Error al iniciar sesión');
            onLoginSuccess(data.access_token, data.user, data.provider);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div ref={backdropRef} onClick={(e) => e.target === backdropRef.current && onClose()} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
            <div className="bg-white w-full max-w-md rounded-[3rem] shadow-2xl p-10 relative animate-in fade-in zoom-in duration-300">
                <button onClick={onClose} className="absolute top-8 right-8 text-slate-300 hover:text-slate-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-blue-600/20">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tighter">Acceso Negocio</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 font-medium focus:border-blue-600 focus:bg-white outline-none transition-all" />
                    <div className="relative">
                        <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required maxLength={10} className="w-full pl-6 pr-14 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 font-medium focus:border-blue-600 focus:bg-white outline-none transition-all" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-4 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors">
                            {showPassword ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            )}
                        </button>
                    </div>
                    {error && <p className="text-red-500 text-xs font-bold text-center bg-red-50 py-2 rounded-lg">{error}</p>}
                    <button type="submit" disabled={loading} className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all uppercase tracking-widest text-xs shadow-xl">
                        {loading ? 'Verificando...' : 'Entrar y Pagar'}
                    </button>
                </form>
            </div>
        </div>
    );
}

/* ── Página Premium Principal ── */
export default function PremiumPage() {
    const [searchParams] = useSearchParams();
    const urlProviderId = searchParams.get('providerId');

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [authToken, setAuthToken] = useState(null);
    const [authUser, setAuthUser] = useState(null);
    const [authProvider, setAuthProvider] = useState(null);
    const [preferenceId, setPreferenceId] = useState(null);
    const [paymentLoading, setPaymentLoading] = useState(false);
    const [paymentError, setPaymentError] = useState(null);
    const [emailFlowReady, setEmailFlowReady] = useState(false);

    useEffect(() => {
        if (urlProviderId && !preferenceId && !paymentLoading && !emailFlowReady) {
            setEmailFlowReady(true);
            createPreferenceDirect(urlProviderId);
        }
    }, [urlProviderId]);

    const createPreferenceDirect = async (providerId) => {
        setPaymentLoading(true);
        try {
            const response = await fetch(`${API_URL}/payments/create-preference-direct`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ providerId: Number(providerId) }),
            });
            const data = await response.json();
            if (response.ok) setPreferenceId(data.preferenceId);
        } catch (err) { setPaymentError("Error de conexión"); }
        finally { setPaymentLoading(false); }
    };

    const handleLoginSuccess = async (token, user, provider) => {
        setAuthToken(token);
        setAuthUser(user);
        setAuthProvider(provider);
        setShowLoginModal(false);
        
        if (user.role === 'provider' || user.role === 'provider_admin') {
            await createPreferenceWithAuth(token);
        } else {
            setPaymentError("No posees un negocio o tu rol no te permite completar esta transacción.");
        }
    };

    const createPreferenceWithAuth = async (token) => {
        setPaymentLoading(true);
        try {
            const response = await fetch(`${API_URL}/payments/create-preference`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            });
            const data = await response.json();
            if (response.ok) setPreferenceId(data.preferenceId);
        } catch (err) { setPaymentError("Error al procesar"); }
        finally { setPaymentLoading(false); }
    };

    return (
        <Layout>
            <div className="relative min-h-screen py-16 px-6 md:px-10 overflow-hidden bg-slate-50/30">
                {/* Elementos decorativos de fondo */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-900/5 blur-[120px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 items-stretch">

                        {/* 1. SECCIÓN INFO (4/12) */}
                        <div className="w-full lg:w-4/12 flex flex-col gap-6 relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-bold px-6 py-2 rounded-full tracking-[0.2em] uppercase shadow-xl z-20">
                                Crecimiento Pro
                            </div>
                            <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex-1">
                                <h1 className="text-5xl font-bold text-slate-900 tracking-tighter leading-[0.95] mb-8">
                                    Lleva tu negocio al <span className="text-blue-600">siguiente nivel.</span>
                                </h1>
                                <p className="text-slate-500 font-medium leading-relaxed mb-10">
                                    Desbloquea las herramientas críticas para liderar el mercado automotriz local y conectar con miles de clientes.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { i: "🚀", t: "Sin límites", d: "Publicaciones, comentarios y propuestas infinitas." },
                                        { i: "📗", t: "Catálogo Ilimitado", d: "Servicios y productos ilimitados." },
                                        { i: "👥", t: "Equipo Pro", d: "Gestiona empleados y sus roles." },
                                        { i: "📈", t: "Analítica", d: "Estadísticas reales de tu éxito." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-5 group">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">{item.i}</div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-tight">{item.t}</h4>
                                                <p className="text-[11px] text-slate-400 font-bold uppercase">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 2. SECCIÓN PLAN Y PAGO (4/12) */}
                        <div className="w-full lg:w-4/12">
                            <div className="bg-white p-3 rounded-[4rem] border border-slate-100 shadow-2xl relative">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold px-6 py-2 rounded-full tracking-[0.2em] uppercase shadow-xl z-10">
                                    Suscripción Mensual
                                </div>

                                <div className="p-8 pb-4">
                                    <div className="premium-gradient rounded-[3rem] p-10 text-white shadow-2xl shadow-blue-900/40 relative overflow-hidden group">
                                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 blur-3xl rounded-full group-hover:bg-white/20 transition-all duration-700"></div>

                                        <div className="mb-10 relative">
                                            <h3 className="text-2xl font-bold italic tracking-tighter uppercase mb-1">Premium Pro</h3>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-5xl font-bold tracking-tighter">$9.990</span>
                                                <span className="text-blue-200 font-bold text-sm">/ mes</span>
                                            </div>
                                        </div>

                                        <ul className="space-y-5 mb-10 relative">
                                            {['Publicaciones ilimitadas', 'Comentarios ilimitados', 'Propuestas ilimitadas', 'Servicios y productos ilimitados', 'Gestión de equipo', 'Dashboard avanzado', 'Visibilidad destacada'].map((f, i) => (
                                                <li key={i} className="flex items-center gap-4 text-xs font-bold tracking-tight">
                                                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center border border-white/20 shadow-inner">
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={5}><path d="M5 13l4 4L19 7" /></svg>
                                                    </div>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="relative">
                                            {authProvider && (
                                                <div className="mb-6 flex flex-col items-center justify-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-inner group-hover:bg-white/10 transition-all">
                                                    {authProvider.logoUrl ? (
                                                        <img src={authProvider.logoUrl} alt={authProvider.businessName} className="w-16 h-16 rounded-full object-cover mb-3 shadow-lg border-2 border-white/20" />
                                                    ) : (
                                                        <div className="w-16 h-16 rounded-full bg-blue-600/50 flex items-center justify-center mb-3 text-white font-bold text-xl border-2 border-white/20">
                                                            {authProvider.businessName?.charAt(0)?.toUpperCase() || 'N'}
                                                        </div>
                                                    )}
                                                    <p className="text-white font-bold text-center tracking-wide">{authProvider.businessName}</p>
                                                    <span className="text-blue-300 text-[10px] uppercase font-bold tracking-widest mt-1">Sesión Iniciada</span>
                                                </div>
                                            )}

                                            {!(emailFlowReady || authToken) ? (
                                                <button onClick={() => setShowLoginModal(true)} className="w-full py-5 bg-white text-blue-900 font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl uppercase tracking-widest text-xs">
                                                    Activar Ahora
                                                </button>
                                            ) : (
                                                <div className="w-full">
                                                    {paymentLoading ? (
                                                        <div className="flex flex-col items-center py-4 gap-3">
                                                            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                                            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Sincronizando...</span>
                                                        </div>
                                                    ) : preferenceId ? (
                                                        <div className="w-full overflow-hidden rounded-xl">
                                                            <Wallet initialization={{ preferenceId }} customization={{ texts: { valueProp: 'smart_option' }, visual: { valuePropColor: 'white', borderRadius: '16px' } }} />
                                                        </div>
                                                    ) : (
                                                        <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-red-500/30">
                                                            <p className="text-[10px] font-bold text-red-200 uppercase tracking-widest leading-relaxed">
                                                                {paymentError || "Error técnico"}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-slate-400 font-bold text-center mt-10 tracking-[0.2em] uppercase">🔒 Transacción Encriptada</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. SECCIÓN FAQ (4/12) */}
                        <div className="w-full lg:w-4/12 flex flex-col gap-6 relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[8px] font-bold px-6 py-2 rounded-full tracking-[0.2em] uppercase shadow-xl z-20">
                                Preguntas Frecuentes
                            </div>
                            <div className="bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl text-white flex-1 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full"></div>
                                <h2 className="text-3xl font-bold mb-10 tracking-tighter italic">FAQ</h2>

                                <div className="space-y-10">
                                    {[
                                        { q: "¿Prueba gratis?", a: "Sí, activa 30 días de prueba sin tarjetas desde la App. (Aplica solo una vez)" },
                                        { q: "¿Tengo contrato?", a: "No. Puedes volver al plan gratuito cuando quieras." },
                                        {
                                            q: "¿Cómo pago?",
                                            a: "Inicia sesión con tu negocio y usa Mercado Pago.",
                                            b: "Mediante el correo electronico al solicitarlo mediante la App.",
                                        },
                                        { q: "¿Que pasa si acaba mi suscripción?", a: "Dejas de tener las funcionalidades premium y vuelves al plan gratuito." },
                                    ].map((f, i) => (
                                        <div key={i} className="group">
                                            <h3 className="font-bold text-blue-500 text-sm mb-3 tracking-tight group-hover:translate-x-2 transition-transform duration-300 italic">{f.q}</h3>
                                            <p className="text-xs text-slate-400 font-medium leading-relaxed">{f.a}</p>
                                            <p className="text-xs text-slate-400 font-medium leading-relaxed">{f.b}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-16 pt-8 border-t border-white/5">
                                    <p className="text-[10px] text-slate-500 font-bold leading-relaxed">
                                        Al contratar aceptas nuestros <a href="/terminos" className="text-blue-400 underline">Términos</a> y <a href="/privacidad" className="text-blue-400 underline">Privacidad</a>.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} onLoginSuccess={handleLoginSuccess} />
        </Layout>
    );
}
