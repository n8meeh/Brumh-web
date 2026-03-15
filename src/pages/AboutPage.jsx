import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function AboutPage() {
    return (
        <Layout>
            <div className="py-10 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="text-center mb-12">
                        <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-blue-100">
                            Conoce Brumh
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                            ¿Cómo funciona Brumh?
                        </h1>
                        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            Una plataforma que conecta a dueños de vehículos con los mejores talleres y servicios automotrices de su zona.
                        </p>
                    </header>

                    {/* Para Usuarios */}
                    <section className="mb-12">
                        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">Para Usuarios</h2>
                            </div>
                            <p className="text-slate-500 mb-6">
                                Si tienes un vehículo y necesitas un servicio automotriz, Brumh te facilita encontrar el taller ideal cerca de ti.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                <div className="relative">
                                    <div className="bg-slate-50 rounded-2xl p-5">
                                        <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-lg mb-3">1</span>
                                        <h3 className="font-bold text-slate-800 mb-1.5">Descarga la App</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            Descarga Brumh gratis en tu dispositivo y crea tu cuenta en segundos.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="bg-slate-50 rounded-2xl p-5">
                                        <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-lg mb-3">2</span>
                                        <h3 className="font-bold text-slate-800 mb-1.5">Busca servicios</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            Activa tu ubicación y descubre talleres, mecánicos y servicios cercanos a ti.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="bg-slate-50 rounded-2xl p-5">
                                        <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-lg mb-3">3</span>
                                        <h3 className="font-bold text-slate-800 mb-1.5">Contacta directo</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            Comunícate por WhatsApp, teléfono o redes sociales sin intermediarios.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 bg-blue-50 rounded-2xl p-5 border border-blue-100">
                                <h3 className="font-bold text-blue-900 mb-2">Funciones destacadas</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    <li className="flex items-center gap-2 text-sm text-blue-800">
                                        <svg className="w-4 h-4 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        Geolocalización en tiempo real
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-blue-800">
                                        <svg className="w-4 h-4 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        Reseñas verificadas de la comunidad
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-blue-800">
                                        <svg className="w-4 h-4 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        Mapa interactivo con talleres
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-blue-800">
                                        <svg className="w-4 h-4 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        Comunidad automotriz activa
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-blue-800">
                                        <svg className="w-4 h-4 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        100% gratis para usuarios
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-blue-800">
                                        <svg className="w-4 h-4 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                        Solicitudes de servicio directas
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Para Negocios */}
                    <section className="mb-12">
                        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">Para Negocios</h2>
                            </div>
                            <p className="text-slate-500 mb-6">
                                Si tienes un taller, servicio técnico o negocio automotriz, Brumh te ayuda a llegar a más clientes en tu zona.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                <div className="relative">
                                    <div className="bg-slate-50 rounded-2xl p-5">
                                        <span className="inline-flex items-center justify-center w-8 h-8 bg-slate-800 text-white text-sm font-bold rounded-lg mb-3">1</span>
                                        <h3 className="font-bold text-slate-800 mb-1.5">Registra tu negocio</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            Crea tu cuenta y registra tu taller con logo, portada, ubicación y datos de contacto.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="bg-slate-50 rounded-2xl p-5">
                                        <span className="inline-flex items-center justify-center w-8 h-8 bg-slate-800 text-white text-sm font-bold rounded-lg mb-3">2</span>
                                        <h3 className="font-bold text-slate-800 mb-1.5">Aparece en el mapa</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            Tu negocio se muestra a usuarios cercanos que buscan servicios como los tuyos.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="bg-slate-50 rounded-2xl p-5">
                                        <span className="inline-flex items-center justify-center w-8 h-8 bg-slate-800 text-white text-sm font-bold rounded-lg mb-3">3</span>
                                        <h3 className="font-bold text-slate-800 mb-1.5">Recibe clientes</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            Los usuarios te contactan directamente por WhatsApp, teléfono o redes sociales.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-blue-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">Premium</span>
                                    <h3 className="font-bold">Potencia tu negocio</h3>
                                </div>
                                <p className="text-slate-300 text-sm mb-4">
                                    Con el plan Premium obtienes visibilidad destacada, propuestas ilimitadas y el badge verificado. Prueba gratis por 30 días.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <Link
                                        to="/premium"
                                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all"
                                    >
                                        Ver planes Premium
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Comparación gratuito vs premium */}
                    <section className="mb-12">
                        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200">
                            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Gratuito vs Premium</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                    <h3 className="font-bold text-slate-800 mb-1">Plan Gratuito</h3>
                                    <p className="text-xs text-slate-400 mb-4">Para empezar</p>
                                    <ul className="space-y-2.5">
                                        <li className="flex items-center gap-2 text-sm text-slate-600">
                                            <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                            Perfil de negocio visible
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-slate-600">
                                            <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                            Aparecer en el mapa
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-slate-600">
                                            <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                            Recibir reseñas
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-slate-400">
                                            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/></svg>
                                            Propuestas limitadas
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-slate-400">
                                            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/></svg>
                                            Sin badge verificado
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white relative overflow-hidden">
                                    <div className="absolute top-3 right-3 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                                        Recomendado
                                    </div>
                                    <h3 className="font-bold mb-1">Plan Premium</h3>
                                    <p className="text-xs text-blue-200 mb-4">$9.990/mes CLP</p>
                                    <ul className="space-y-2.5">
                                        <li className="flex items-center gap-2 text-sm">
                                            <svg className="w-4 h-4 text-blue-200 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                            Todo lo del plan gratuito
                                        </li>
                                        <li className="flex items-center gap-2 text-sm">
                                            <svg className="w-4 h-4 text-blue-200 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                            Propuestas ilimitadas
                                        </li>
                                        <li className="flex items-center gap-2 text-sm">
                                            <svg className="w-4 h-4 text-blue-200 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                            Visibilidad destacada
                                        </li>
                                        <li className="flex items-center gap-2 text-sm">
                                            <svg className="w-4 h-4 text-blue-200 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                            Badge Premium verificado
                                        </li>
                                        <li className="flex items-center gap-2 text-sm">
                                            <svg className="w-4 h-4 text-blue-200 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                            30 días gratis de prueba
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="text-center">
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),_transparent_50%)]"></div>
                            <div className="relative">
                                <h2 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">
                                    Descarga Brumh
                                </h2>
                                <p className="text-slate-400 text-base max-w-lg mx-auto mb-6">
                                    Disponible gratis para usuarios. Si tienes un taller, regístrate y prueba Premium por 30 días sin costo.
                                </p>
                                <Link
                                    to="/premium"
                                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-2xl font-bold text-base hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-0.5"
                                >
                                    Ver planes Premium
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
}
