import React from 'react';

export default function PrivacyPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-16 px-6 font-sans">
            <div className="max-w-3xl mx-auto">
                <a href="/" className="inline-flex items-center text-sm font-semibold text-blue-600 mb-8 hover:translate-x-[-4px] transition-all">
                    <span>←</span> <span className="ml-2">Volver al inicio</span>
                </a>

                <div className="bg-white p-10 md:p-16 shadow-xl shadow-slate-200 rounded-3xl border border-slate-100">
                    <header className="border-b border-slate-100 pb-8 mb-10">
                        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Política de Privacidad</h1>
                        <p className="text-slate-500 font-medium tracking-wide uppercase text-xs">Versión 1.0 — Actualizado Marzo 2026</p>
                    </header>

                    <article className="space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">1. Recolección de Información</h2>
                            <p className="text-slate-600 leading-relaxed">
                                En Brumh, recolectamos información que tú nos proporcionas directamente al crear tu perfil, como nombre, correo electrónico y datos del negocio (teléfono, imágenes de logo y portada).
                            </p>
                        </section>

                        <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                            <h2 className="text-lg font-bold text-blue-900 mb-2">2. Uso de la Ubicación (GPS)</h2>
                            <p className="text-blue-800 text-sm leading-relaxed">
                                Nuestra aplicación utiliza servicios de geolocalización en tiempo real. Esta información es <strong>imprescindible</strong> para conectar a los usuarios con los "Providers" más cercanos. No compartimos tus coordenadas exactas con terceros con fines publicitarios.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">3. Servicios de Terceros</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Para garantizar un servicio de alta calidad, utilizamos los siguientes proveedores:
                            </p>
                            <ul className="list-disc ml-6 space-y-2 text-slate-600 italic">
                                <li><strong>Firebase:</strong> Para el almacenamiento de imágenes y notificaciones push.</li>
                                <li><strong>Google Maps API:</strong> Para la visualización y selección de ubicación en el mapa.</li>
                                <li><strong>AWS:</strong> Para el alojamiento seguro de nuestra base de datos y API.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4">4. Control de tus Datos</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento desde los ajustes de la App. Para una eliminación definitiva de la cuenta y todos sus datos asociados, puedes escribirnos a <strong>soporte@brumh.cl</strong>.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-slate-100">
                            <p className="text-slate-500 text-sm text-center">
                                Al utilizar Brumh, aceptas las prácticas descritas en esta política.
                            </p>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    );
}