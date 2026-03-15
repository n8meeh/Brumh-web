import { useSearchParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';

/* ── Iconos SVG animados ── */
const SuccessIcon = () => (
    <div className="relative">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-scaleIn">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                <svg className="w-9 h-9 text-white animate-checkDraw" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
        </div>
        {/* Confetti dots */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-32 h-32 pointer-events-none">
            <span className="absolute top-0 left-2 w-2 h-2 bg-green-400 rounded-full animate-confetti1"></span>
            <span className="absolute top-1 right-3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-confetti2"></span>
            <span className="absolute top-4 left-0 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-confetti3"></span>
            <span className="absolute top-2 right-0 w-2 h-2 bg-purple-400 rounded-full animate-confetti4"></span>
            <span className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-confetti5"></span>
            <span className="absolute bottom-2 right-5 w-2 h-2 bg-green-300 rounded-full animate-confetti6"></span>
        </div>
    </div>
);

const ErrorIcon = () => (
    <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto animate-scaleIn">
        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    </div>
);

const PendingIcon = () => (
    <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto animate-scaleIn">
        <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 animate-pulse">
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    </div>
);

/* ── Configuración por estado ── */
const RESULTS = {
    exito: {
        Icon: SuccessIcon,
        title: '¡Pago exitoso!',
        subtitle: 'Tu plan Premium ya está activo',
        description: 'La transacción fue procesada correctamente. Todas las funciones Premium están habilitadas en tu cuenta.',
        gradient: 'from-green-50 to-emerald-50',
        borderColor: 'border-green-200',
        accentColor: 'text-green-600',
        accentBg: 'bg-green-50',
        steps: [
            { icon: '1', text: 'Abre la app de Brumh en tu teléfono' },
            { icon: '2', text: 'Verás el badge Premium en tu perfil' },
            { icon: '3', text: 'Disfruta de propuestas ilimitadas y visibilidad destacada' },
        ],
        details: [
            { label: 'Plan', value: 'Premium Mensual' },
            { label: 'Monto', value: '$9.990 CLP' },
            { label: 'Método', value: 'Mercado Pago' },
            { label: 'Duración', value: '30 días' },
        ],
    },
    error: {
        Icon: ErrorIcon,
        title: 'Pago no procesado',
        subtitle: 'La transacción no pudo completarse',
        description: 'Hubo un problema al procesar tu pago. No se realizó ningún cargo a tu cuenta ni a tu método de pago.',
        gradient: 'from-red-50 to-rose-50',
        borderColor: 'border-red-200',
        accentColor: 'text-red-600',
        accentBg: 'bg-red-50',
        reasons: [
            'Fondos insuficientes en la cuenta o tarjeta',
            'Datos de pago ingresados incorrectamente',
            'Tu banco rechazó la transacción por seguridad',
            'Problema temporal con el procesador de pago',
        ],
    },
    pendiente: {
        Icon: PendingIcon,
        title: 'Pago en revisión',
        subtitle: 'Tu transacción está siendo procesada',
        description: 'Mercado Pago está verificando tu pago. Este proceso puede demorar unos minutos. Tu plan se activará automáticamente cuando se confirme.',
        gradient: 'from-amber-50 to-yellow-50',
        borderColor: 'border-amber-200',
        accentColor: 'text-amber-600',
        accentBg: 'bg-amber-50',
        tips: [
            'No es necesario volver a pagar',
            'Recibirás un email cuando se confirme',
            'El proceso suele completarse en minutos',
        ],
    },
};

export default function PaymentResultPage({ status }) {
    const [searchParams] = useSearchParams();
    const paymentId = searchParams.get('payment_id');
    const externalRef = searchParams.get('external_reference');
    const result = RESULTS[status] || RESULTS.error;
    const { Icon } = result;

    return (
        <Layout>
            <div className="min-h-[70vh] flex items-center justify-center py-12 px-6">
                <div className="w-full max-w-lg">

                    {/* Card principal */}
                    <div className={`bg-gradient-to-br ${result.gradient} p-8 md:p-10 rounded-3xl border ${result.borderColor} shadow-xl`}>

                        {/* Icono */}
                        <div className="mb-6">
                            <Icon />
                        </div>

                        {/* Título */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
                                {result.title}
                            </h1>
                            <p className={`text-sm font-semibold ${result.accentColor}`}>
                                {result.subtitle}
                            </p>
                            <p className="text-slate-500 mt-3 leading-relaxed text-sm">
                                {result.description}
                            </p>
                        </div>

                        {/* ── Contenido específico por estado ── */}

                        {/* ÉXITO: Detalles + Pasos siguientes */}
                        {status === 'exito' && (
                            <>
                                {/* Detalles de la transacción */}
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 mb-5 border border-green-100">
                                    <h3 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        Detalle de la transacción
                                    </h3>
                                    <div className="space-y-2">
                                        {result.details.map((d, i) => (
                                            <div key={i} className="flex justify-between items-center text-sm">
                                                <span className="text-slate-500">{d.label}</span>
                                                <span className="font-semibold text-slate-800">{d.value}</span>
                                            </div>
                                        ))}
                                        {paymentId && (
                                            <div className="flex justify-between items-center text-sm pt-2 border-t border-green-100">
                                                <span className="text-slate-500">ID Pago</span>
                                                <span className="font-mono text-xs text-slate-600">{paymentId}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Pasos siguientes */}
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 mb-6 border border-green-100">
                                    <h3 className="text-sm font-bold text-slate-700 mb-3">Próximos pasos</h3>
                                    <div className="space-y-3">
                                        {result.steps.map((s, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <span className="w-7 h-7 bg-green-500 text-white text-xs font-bold rounded-lg flex items-center justify-center shrink-0">{s.icon}</span>
                                                <p className="text-sm text-slate-600">{s.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {/* ERROR: Razones + Reintentar */}
                        {status === 'error' && (
                            <>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 mb-5 border border-red-100">
                                    <h3 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        Posibles causas
                                    </h3>
                                    <ul className="space-y-2">
                                        {result.reasons.map((r, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                <span className="text-red-400 mt-0.5 shrink-0">&#8226;</span>
                                                {r}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Botón reintentar */}
                                <Link
                                    to="/premium"
                                    className="group w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-sm shadow-lg shadow-blue-600/25 mb-4"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                    Intentar nuevamente
                                </Link>
                            </>
                        )}

                        {/* PENDIENTE: Tips */}
                        {status === 'pendiente' && (
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 mb-6 border border-amber-100">
                                <h3 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    Ten en cuenta
                                </h3>
                                <ul className="space-y-2">
                                    {result.tips.map((t, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                            <svg className="w-4 h-4 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                                {paymentId && (
                                    <div className="mt-3 pt-3 border-t border-amber-100 flex justify-between text-xs">
                                        <span className="text-slate-500">ID Pago</span>
                                        <span className="font-mono text-slate-600">{paymentId}</span>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Acciones comunes */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                                to="/"
                                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all text-sm"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" /></svg>
                                Ir al inicio
                            </Link>
                            <a
                                href="mailto:soporte@brumh.cl"
                                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all text-sm"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                Contactar soporte
                            </a>
                        </div>
                    </div>

                    {/* Texto legal */}
                    <p className="text-center text-slate-400 text-xs mt-6">
                        Pago procesado de forma segura por Mercado Pago.
                        {paymentId && <><br />Referencia: {paymentId}</>}
                    </p>
                </div>
            </div>

            {/* CSS animations */}
            <style>{`
                @keyframes scaleIn {
                    0% { opacity: 0; transform: scale(0.5); }
                    60% { transform: scale(1.1); }
                    100% { opacity: 1; transform: scale(1); }
                }
                @keyframes checkDraw {
                    0% { stroke-dasharray: 30; stroke-dashoffset: 30; }
                    100% { stroke-dashoffset: 0; }
                }
                @keyframes confetti1 { 0% { opacity:1; transform: translate(0,0) scale(1); } 100% { opacity:0; transform: translate(-12px,-20px) scale(0); } }
                @keyframes confetti2 { 0% { opacity:1; transform: translate(0,0) scale(1); } 100% { opacity:0; transform: translate(14px,-22px) scale(0); } }
                @keyframes confetti3 { 0% { opacity:1; transform: translate(0,0) scale(1); } 100% { opacity:0; transform: translate(-18px,-10px) scale(0); } }
                @keyframes confetti4 { 0% { opacity:1; transform: translate(0,0) scale(1); } 100% { opacity:0; transform: translate(16px,-14px) scale(0); } }
                @keyframes confetti5 { 0% { opacity:1; transform: translate(0,0) scale(1); } 100% { opacity:0; transform: translate(-10px,15px) scale(0); } }
                @keyframes confetti6 { 0% { opacity:1; transform: translate(0,0) scale(1); } 100% { opacity:0; transform: translate(12px,12px) scale(0); } }
                .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }
                .animate-checkDraw { animation: checkDraw 0.5s ease-out 0.4s forwards; stroke-dasharray: 30; stroke-dashoffset: 30; }
                .animate-confetti1 { animation: confetti1 0.8s ease-out 0.5s forwards; }
                .animate-confetti2 { animation: confetti2 0.9s ease-out 0.6s forwards; }
                .animate-confetti3 { animation: confetti3 0.7s ease-out 0.55s forwards; }
                .animate-confetti4 { animation: confetti4 0.85s ease-out 0.65s forwards; }
                .animate-confetti5 { animation: confetti5 0.75s ease-out 0.7s forwards; }
                .animate-confetti6 { animation: confetti6 0.8s ease-out 0.6s forwards; }
            `}</style>
        </Layout>
    );
}
