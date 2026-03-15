import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import Layout from '../components/Layout';

// Inicializar Mercado Pago con la llave pública
const mpPublicKey = import.meta.env.VITE_MP_PUBLIC_KEY;
if (mpPublicKey) {
    initMercadoPago(mpPublicKey, { locale: 'es-CL' });
}

export default function PremiumPage() {
    const [searchParams] = useSearchParams();
    const providerId = searchParams.get('providerId');
    const [preferenceId, setPreferenceId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_URL = import.meta.env.VITE_API_URL || 'https://brumh.cl/api';

    // Si viene con providerId desde el email, crear preferencia automáticamente
    useEffect(() => {
        if (providerId) {
            handleCreatePreference();
        }
    }, [providerId]);

    const handleCreatePreference = async () => {
        if (!providerId) return;
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_URL}/payments/create-preference`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ providerId: parseInt(providerId) }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error al crear la preferencia de pago');
            }

            setPreferenceId(data.preferenceId);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="py-10 px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white p-10 md:p-16 shadow-xl shadow-slate-200 rounded-3xl border border-slate-100">
                        {/* Header */}
                        <header className="text-center mb-10">
                            <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-blue-100">
                                Brumh Premium
                            </span>
                            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
                                Potencia tu negocio
                            </h1>
                            <p className="text-slate-500 leading-relaxed max-w-md mx-auto">
                                Desbloquea todas las herramientas para hacer crecer tu taller en Brumh.
                            </p>
                        </header>

                        {/* Benefits */}
                        <div className="space-y-4 mb-10">
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

                        {/* Pricing */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl text-center mb-8">
                            <p className="text-blue-200 text-sm font-semibold mb-2">Plan Mensual</p>
                            <div className="flex items-baseline justify-center gap-1 mb-2">
                                <span className="text-5xl font-black text-white">$9.990</span>
                                <span className="text-blue-200 font-medium">/mes</span>
                            </div>
                            <p className="text-blue-200 text-sm">CLP · Sin compromiso, cancela cuando quieras</p>
                        </div>

                        {/* Payment Section */}
                        <div className="space-y-4">
                            {/* Si viene con providerId → mostrar Checkout de Mercado Pago */}
                            {providerId ? (
                                <div className="text-center space-y-4">
                                    {loading && (
                                        <div className="flex items-center justify-center gap-3 py-6">
                                            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                            <p className="text-slate-500 text-sm">Preparando el pago...</p>
                                        </div>
                                    )}

                                    {error && (
                                        <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                                            <p className="text-red-700 text-sm font-medium">{error}</p>
                                            <button
                                                onClick={handleCreatePreference}
                                                className="mt-3 text-red-600 text-sm underline hover:text-red-800"
                                            >
                                                Reintentar
                                            </button>
                                        </div>
                                    )}

                                    {preferenceId && (
                                        <div>
                                            <p className="text-slate-500 text-sm mb-4">
                                                Completa tu pago de forma segura con Mercado Pago:
                                            </p>
                                            <Wallet
                                                initialization={{ preferenceId }}
                                                customization={{ texts: { valueProp: 'smart_option' } }}
                                            />
                                        </div>
                                    )}

                                    <p className="text-slate-400 text-xs pt-2">
                                        Pago procesado de forma segura por Mercado Pago
                                    </p>
                                </div>
                            ) : (
                                /* Sin providerId → mostrar contacto directo */
                                <div className="text-center space-y-4">
                                    <p className="text-slate-500 text-sm">
                                        Para activar Premium, solicítalo desde la app de Brumh y recibirás un enlace de pago en tu correo. También puedes contactarnos directamente:
                                    </p>

                                    <a
                                        href="mailto:soporte@brumh.cl?subject=Activar%20Brumh%20Premium"
                                        className="block w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 text-center"
                                    >
                                        Contactar para activar
                                    </a>

                                    <a
                                        href="https://wa.me/56912345678?text=Hola%2C%20quiero%20activar%20Brumh%20Premium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-green-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-500 transition-all text-center"
                                    >
                                        Escribir por WhatsApp
                                    </a>

                                    <p className="text-slate-400 text-xs pt-4">
                                        Métodos de pago: Transferencia bancaria · WebPay · Mercado Pago
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* FAQ */}
                        <div className="mt-12 pt-8 border-t border-slate-100 space-y-6">
                            <h2 className="text-lg font-bold text-slate-800">Preguntas Frecuentes</h2>

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
                                <p className="text-sm text-slate-500">Al solicitar Premium desde la app, recibes un correo con un enlace seguro de Mercado Pago. El pago se procesa al instante y tu plan se activa automáticamente.</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-slate-700 mb-1">¿Puedo cancelar en cualquier momento?</h3>
                                <p className="text-sm text-slate-500">Sí, puedes cancelar tu suscripción Premium cuando quieras sin penalización.</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                            <p className="text-slate-400 text-xs">
                                Al contratar Premium aceptas nuestros <a href="/terminos" className="text-blue-600 hover:underline">Términos de Servicio</a> y <a href="/privacidad" className="text-blue-600 hover:underline">Política de Privacidad</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
