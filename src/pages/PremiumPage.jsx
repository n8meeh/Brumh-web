import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import Layout from '../components/Layout';

// Inicializar Mercado Pago con la llave pública
const mpPublicKey = import.meta.env.VITE_MP_PUBLIC_KEY;
if (mpPublicKey) {
    initMercadoPago(mpPublicKey, { locale: 'es-CL' });
}

const API_URL = import.meta.env.VITE_API_URL || 'https://brumh.cl/api';

const CheckIcon = ({ color = 'text-green-500' }) => (
    <svg className={`w-4 h-4 ${color} shrink-0`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
);
const CrossIcon = () => (
    <svg className="w-4 h-4 text-slate-400 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/></svg>
);

/* ── Modal de Login ── */
function LoginModal({ isOpen, onClose, onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const backdropRef = useRef(null);

    // Cerrar con Escape
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        if (isOpen) window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose]);

    // Bloquear scroll del body cuando el modal está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const handleBackdropClick = (e) => {
        if (e.target === backdropRef.current) onClose();
    };

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

            if (!response.ok) {
                throw new Error(data.message || 'Correo o contraseña incorrectos');
            }

            // Validar que sea un provider
            const userRole = data.user?.role;
            if (!['provider', 'provider_admin'].includes(userRole)) {
                throw new Error('Solo los proveedores pueden activar Premium. Inicia sesión con tu cuenta de negocio.');
            }

            onLoginSuccess(data.access_token, data.user, data.provider);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            ref={backdropRef}
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
        >
            <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl shadow-slate-900/20 p-8 relative animate-scaleIn">
                {/* Botón cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-all"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Header */}
                <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/30">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 mb-1">Inicia sesión</h2>
                    <p className="text-slate-500 text-sm">Ingresa con tu cuenta de negocio para completar el pago</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Correo electrónico</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoFocus
                            placeholder="tu@correo.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Contraseña</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Tu contraseña"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                {showPassword ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" /></svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-3 animate-shake">
                            <p className="text-red-700 text-sm font-medium flex items-start gap-2">
                                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                                {error}
                            </p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2 text-sm shadow-lg shadow-blue-600/25"
                    >
                        {loading ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Verificando...
                            </>
                        ) : (
                            <>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
                                Iniciar sesión y pagar
                            </>
                        )}
                    </button>
                </form>

                <p className="text-center text-slate-400 text-xs mt-5">
                    Pago procesado de forma segura por Mercado Pago
                </p>
            </div>

            {/* CSS animations */}
            <style>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes scaleIn { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
                @keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-4px); } 40%, 80% { transform: translateX(4px); } }
                .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
                .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
                .animate-shake { animation: shake 0.4s ease-out; }
            `}</style>
        </div>
    );
}

/* ── Página Premium Principal ── */
export default function PremiumPage() {
    const [searchParams] = useSearchParams();
    const urlProviderId = searchParams.get('providerId'); // Viene del email

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [authToken, setAuthToken] = useState(null);
    const [authUser, setAuthUser] = useState(null);
    const [authProvider, setAuthProvider] = useState(null); // Datos del negocio
    const [preferenceId, setPreferenceId] = useState(null);
    const [paymentLoading, setPaymentLoading] = useState(false);
    const [paymentError, setPaymentError] = useState(null);
    const [emailFlowReady, setEmailFlowReady] = useState(false); // Flujo desde email activo

    // Flujo EMAIL: si viene providerId en la URL, crear preferencia directamente sin login
    useEffect(() => {
        if (urlProviderId && !preferenceId && !paymentLoading && !emailFlowReady) {
            setEmailFlowReady(true);
            createPreferenceDirect(urlProviderId);
        }
    }, [urlProviderId]);

    // Crear preferencia SIN login (flujo email con providerId en URL)
    const createPreferenceDirect = async (providerId) => {
        setPaymentLoading(true);
        setPaymentError(null);

        try {
            const response = await fetch(`${API_URL}/payments/create-preference-direct`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ providerId: Number(providerId) }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error al crear la preferencia de pago');
            }

            setPreferenceId(data.preferenceId);
        } catch (err) {
            setPaymentError(err.message);
        } finally {
            setPaymentLoading(false);
        }
    };

    // Tras login exitoso: cerrar modal y crear preferencia con JWT
    const handleLoginSuccess = async (token, user, provider) => {
        setAuthToken(token);
        setAuthUser(user);
        setAuthProvider(provider);
        setShowLoginModal(false);
        await createPreferenceWithAuth(token);
    };

    // Crear preferencia CON login (flujo web con JWT)
    const createPreferenceWithAuth = async (token) => {
        setPaymentLoading(true);
        setPaymentError(null);

        try {
            const response = await fetch(`${API_URL}/payments/create-preference`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error al crear la preferencia de pago');
            }

            setPreferenceId(data.preferenceId);
        } catch (err) {
            setPaymentError(err.message);
        } finally {
            setPaymentLoading(false);
        }
    };

    const handleLogout = () => {
        setAuthToken(null);
        setAuthUser(null);
        setAuthProvider(null);
        setPreferenceId(null);
        setPaymentError(null);
    };

    // Botón CTA: si ya logueado abre pago, si no abre modal
    const handlePayClick = () => {
        if (authToken) {
            createPreferenceWithAuth(authToken);
        } else {
            setShowLoginModal(true);
        }
    };

    // Determinar si mostrar el Wallet directamente (flujo email o ya autenticado)
    const showWalletDirect = emailFlowReady || authToken;

    return (
        <Layout>
            <div className="py-10 px-6 md:px-10">
                <div className="max-w-7xl mx-auto">

                    {/* Grid de 3 columnas */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

                        {/* -- Columna 1: Header + Benefits -- */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/80">
                            <h1 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">
                                Potencia tu negocio
                            </h1>
                            <p className="text-slate-500 leading-relaxed text-sm mb-8">
                                Desbloquea todas las herramientas para hacer crecer tu taller en Brumh.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl">
                                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                                        <span className="text-blue-600 text-lg">✦</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 mb-1">Propuestas ilimitadas</h3>
                                        <p className="text-sm text-slate-500">Responde a todas las solicitudes de servicio sin restricciones.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl">
                                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                                        <span className="text-blue-600 text-lg">📊</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 mb-1">Visibilidad destacada</h3>
                                        <p className="text-sm text-slate-500">Tu negocio aparece primero en los resultados de búsqueda.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl">
                                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                                        <span className="text-blue-600 text-lg">⭐</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 mb-1">Badge Premium</h3>
                                        <p className="text-sm text-slate-500">Genera más confianza con el sello verificado Premium.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* -- Columna 2: Planes + CTA / Pago -- */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/80">
                            <h2 className="text-2xl font-black text-slate-900 mb-5 text-center">Gratuito vs Premium</h2>

                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {/* Plan Freemium */}
                                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                                    <h4 className="font-bold text-slate-800 text-sm mb-0.5">Plan Freemium</h4>
                                    <p className="text-[10px] text-slate-400 mb-2">Para empezar</p>
                                    <ul className="space-y-1.5">
                                        <li className="flex items-center gap-1.5 text-xs text-slate-600"><CheckIcon />Perfil visible</li>
                                        <li className="flex items-center gap-1.5 text-xs text-slate-600"><CheckIcon />Aparecer en el mapa</li>
                                        <li className="flex items-center gap-1.5 text-xs text-slate-600"><CheckIcon />Recibir reseñas</li>
                                        <li className="flex items-center gap-1.5 text-xs text-slate-400"><CrossIcon />Propuestas limitadas</li>
                                        <li className="flex items-center gap-1.5 text-xs text-slate-400"><CrossIcon />Sin badge verificado</li>
                                    </ul>
                                </div>

                                {/* Plan Premium */}
                                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-4 text-white">
                                    <h4 className="font-bold text-sm mb-0.5">Plan Premium</h4>
                                    <p className="text-[10px] text-blue-200 mb-2">$9.990/mes CLP</p>
                                    <ul className="space-y-1.5">
                                        <li className="flex items-center gap-1.5 text-xs"><CheckIcon color="text-blue-200" />Todo lo gratuito</li>
                                        <li className="flex items-center gap-1.5 text-xs"><CheckIcon color="text-blue-200" />Propuestas ilimitadas</li>
                                        <li className="flex items-center gap-1.5 text-xs"><CheckIcon color="text-blue-200" />Visibilidad destacada</li>
                                        <li className="flex items-center gap-1.5 text-xs"><CheckIcon color="text-blue-200" />Badge verificado</li>
                                        <li className="flex items-center gap-1.5 text-xs"><CheckIcon color="text-blue-200" />30 días gratis</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Sección de pago / CTA */}
                            {!showWalletDirect ? (
                                <>
                                    {/* Botón Pagar — abre modal de login */}
                                    <button
                                        onClick={handlePayClick}
                                        className="group w-full relative overflow-hidden py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-blue-800 hover:shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-1 active:translate-y-0 active:shadow-lg transition-all duration-300 text-base shadow-lg shadow-blue-600/25"
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></span>
                                        <span className="relative flex items-center justify-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                                            Pagar $9.990/mes
                                        </span>
                                    </button>
                                    <p className="text-slate-400 text-xs text-center mt-3">Sin compromiso, cancela cuando quieras</p>
                                </>
                            ) : (
                                <div>
                                    {/* Info de sesión: si vino por login muestra negocio, si vino por email muestra badge */}
                                    {authToken ? (
                                        <div className="flex items-center gap-3 mb-4 p-3 bg-green-50 border border-green-200 rounded-xl">
                                            {authProvider?.logoUrl ? (
                                                <img
                                                    src={authProvider.logoUrl}
                                                    alt={authProvider.businessName}
                                                    className="w-10 h-10 rounded-xl object-cover border border-green-200 shrink-0"
                                                />
                                            ) : (
                                                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                                                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                                </div>
                                            )}
                                            <div className="min-w-0 flex-1">
                                                <p className="text-green-800 text-sm font-semibold truncate">
                                                    {authProvider?.businessName || authUser?.fullName || authUser?.email}
                                                </p>
                                                <p className="text-green-600 text-xs flex items-center gap-1">
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                                                    Sesión verificada
                                                </p>
                                            </div>
                                            <button
                                                onClick={handleLogout}
                                                className="text-green-400 hover:text-green-600 transition-colors shrink-0"
                                                title="Cambiar cuenta"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                            </button>
                                        </div>
                                    ) : emailFlowReady && (
                                        <div className="flex items-center gap-3 mb-4 p-3 bg-blue-50 border border-blue-200 rounded-xl">
                                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-blue-800 text-sm font-semibold">Pago desde correo electrónico</p>
                                                <p className="text-blue-600 text-xs">Enlace verificado automáticamente</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Estado del pago */}
                                    {paymentLoading && (
                                        <div className="flex items-center justify-center gap-3 py-6">
                                            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                            <p className="text-slate-500 text-sm">Preparando el pago...</p>
                                        </div>
                                    )}

                                    {paymentError && (
                                        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center mb-4">
                                            <p className="text-red-700 text-sm font-medium mb-2">{paymentError}</p>
                                            <button
                                                onClick={() => emailFlowReady ? createPreferenceDirect(urlProviderId) : createPreferenceWithAuth(authToken)}
                                                className="text-red-600 text-sm font-semibold underline hover:text-red-800 transition-colors"
                                            >
                                                Reintentar
                                            </button>
                                        </div>
                                    )}

                                    {preferenceId && (
                                        <div className="text-center">
                                            <p className="text-slate-500 text-sm mb-3">Completa tu pago de forma segura:</p>
                                            <Wallet
                                                initialization={{ preferenceId }}
                                                customization={{ texts: { valueProp: 'smart_option' } }}
                                            />
                                        </div>
                                    )}

                                    <p className="text-slate-400 text-xs text-center mt-3">
                                        Pago procesado de forma segura por Mercado Pago
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* -- Columna 3: FAQ -- */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/80">
                            <h2 className="text-2xl font-black text-slate-900 mb-6">Preguntas Frecuentes</h2>

                            <div className="space-y-5">
                                <div>
                                    <h3 className="font-semibold text-slate-700 mb-1">¿Puedo probar Premium gratis?</h3>
                                    <p className="text-sm text-slate-500">Sí, desde la app puedes activar un período de prueba gratuito de 30 días sin necesidad de ingresar datos de pago.</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-700 mb-1">¿Qué pasa al terminar el trial?</h3>
                                    <p className="text-sm text-slate-500">Tu plan vuelve al modo gratuito automáticamente. No se realiza ningún cobro.</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-700 mb-1">¿Cómo funciona el pago?</h3>
                                    <p className="text-sm text-slate-500">Haz clic en pagar, inicia sesión con tu cuenta de negocio y completa el proceso seguro con Mercado Pago. Tu plan se activa al instante.</p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-700 mb-1">¿Puedo cancelar en cualquier momento?</h3>
                                    <p className="text-sm text-slate-500">Sí, puedes cancelar tu suscripción Premium cuando quieras sin penalización.</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <p className="text-slate-400 text-xs">
                                    Al contratar Premium aceptas nuestros <a href="/terminos" className="text-blue-600 hover:underline">Términos de Servicio</a> y <a href="/privacidad" className="text-blue-600 hover:underline">Política de Privacidad</a>.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal de Login */}
            <LoginModal
                isOpen={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                onLoginSuccess={handleLoginSuccess}
            />
        </Layout>
    );
}
