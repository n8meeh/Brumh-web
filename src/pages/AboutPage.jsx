import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function AboutPage() {
    return (
        <Layout>
            <div className="py-10 px-6">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-16 relative overflow-hidden py-10 rounded-[3rem] premium-gradient text-white shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10">
                            <span className="inline-block bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-blue-500/20">
                                Guía del Ecosistema
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                                ¿Cómo funciona <span className="text-blue-400 underline decoration-blue-400/30">Brumh</span>?
                            </h1>
                            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-lg font-medium">
                                Una plataforma tecnológica de alto rendimiento que conecta a dueños de vehículos con los líderes del servicio automotriz.
                            </p>
                        </div>
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

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                {[
                                    { n: '1', t: 'Descarga y Perfil', d: 'Regístrate y añade tu vehículo para llevar un control detallado y encontrar servicios a medida.' },
                                    { n: '2', t: 'Busca y Contacta', d: 'Explora el mapa, descubre negocios cercanos y contáctalos por la app o redes sociales.' },
                                    { n: '3', t: 'Bitácora de Vida', d: 'Registra cada mantención y repuesto automáticamente. ¡Tu auto siempre al día!' },
                                    { n: '4', t: 'Comunidad Activa', d: 'Resuelve dudas, comparte consejos y ayuda a otros para ganar reputación de experto.' },
                                ].map((s) => (
                                    <div key={s.n} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-blue-200 transition-colors">
                                        <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-lg mb-3">{s.n}</span>
                                        <h3 className="font-bold text-slate-800 mb-1.5">{s.t}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            {s.d}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 bg-blue-50 rounded-2xl p-5 border border-blue-100">
                                <h3 className="font-bold text-blue-900 mb-2">Funciones destacadas</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                    {[
                                        'Geolocalización en tiempo real',
                                        'Bitácora de vida automática',
                                        'Mapa interactivo',
                                        'Comunidad y Foros',
                                        '100% gratis para usuarios',
                                        'Reseñas y Calificaciones'
                                    ].map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-blue-800">
                                            <svg className="w-4 h-4 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                            {f}
                                        </li>
                                    ))}
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

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                {[
                                    { n: '1', t: 'Crea tu Vitrina', d: 'Registra tu negocio con logo y ubicación para ser visible ante miles de usuarios locales.' },
                                    { n: '2', t: 'Capta Clientes', d: 'Recibe consultas directas o busca proactivamente en los posts de la comunidad.' },
                                    { n: '3', t: 'Gestiona tu Equipo', d: 'Organiza a tus empleados y mejora la experiencia de atención para fidelizar clientes.' },
                                    { n: '4', t: 'Fama y Confianza', d: 'Gana reseñas reales y ofrece soluciones técnicas para destacar como experto.' },
                                ].map((s) => (
                                    <div key={s.n} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-slate-300 transition-colors">
                                        <span className="inline-flex items-center justify-center w-8 h-8 bg-slate-800 text-white text-sm font-bold rounded-lg mb-3">{s.n}</span>
                                        <h3 className="font-bold text-slate-800 mb-1.5">{s.t}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">
                                            {s.d}
                                        </p>
                                    </div>
                                ))}
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
                                            <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                            Perfil y Reseñas
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-slate-600">
                                            <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                            3 posts y 5 comentarios
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-slate-600">
                                            <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                            2 propuestas de trabajo
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-slate-600">
                                            <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                            7 servicios y 10 productos
                                        </li>
                                        <li className="flex items-center gap-3 text-sm font-semibold text-slate-400"><CrossIcon />Gestión de equipo y Dashboard</li>
                                    </ul>
                                </div>

                                <div className="relative overflow-hidden premium-gradient rounded-[2rem] p-8 text-white shadow-2xl shadow-blue-900/40 border border-white/10 group transition-all">
                                    <div className="absolute top-0 right-3 bg-white/20 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl border-l border-b border-white/10 tracking-widest uppercase">
                                        Recomendado
                                    </div>
                                    <div className="mb-6">
                                      <h3 className="text-xl font-black mb-1 tracking-wider uppercase">Plan Premium</h3>
                                      <p className="text-xs text-blue-300 font-bold">$9.990 / mes CLP</p>
                                    </div>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 text-sm font-semibold">
                                            <CheckIcon /> Todo Ilimitado
                                        </li>
                                        <li className="flex items-center gap-3 text-sm font-semibold">
                                            <CheckIcon /> Gestión de Equipo
                                        </li>
                                        <li className="flex items-center gap-3 text-sm font-semibold">
                                            <CheckIcon /> Dashboard Avanzado
                                        </li>
                                        <li className="flex items-center gap-3 text-sm font-semibold">
                                            <CheckIcon /> Visibilidad destacada
                                        </li>
                                        <li className="flex items-center gap-3 text-sm font-semibold">
                                            <CheckIcon /> Badge Premium verificado
                                        </li>
                                        <li className="flex items-center gap-3 text-sm font-semibold">
                                            <CheckIcon /> 30 días gratis de prueba
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
