import Layout from '../components/Layout';

export default function PrivacyPage() {
    return (
        <Layout>
            <div className="py-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white p-10 md:p-16 shadow-xl shadow-slate-200 rounded-3xl border border-slate-100">
                        <header className="border-b border-slate-100 pb-8 mb-10">
                            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Política de Privacidad</h1>
                            <p className="text-slate-500 font-medium tracking-wide uppercase text-xs">Versión 1.1 — Actualizado Marzo 2026</p>
                        </header>

                        <article className="space-y-8">
                            <section>
                                <h2 className="text-xl font-bold text-slate-800 mb-4">1. Recolección de Información</h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    En Brumh, recolectamos información que tú nos proporcionas directamente al crear tu perfil, como nombre, correo electrónico y datos del negocio (teléfono, imágenes de logo y portada).
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    Adicionalmente, podemos recopilar de forma automática información técnica del dispositivo, como un identificador anónimo del equipo, con el único fin de prevenir el uso fraudulento de nuestros servicios gratuitos y garantizar una experiencia justa para todos los usuarios.
                                </p>
                            </section>

                            <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <h2 className="text-lg font-bold text-blue-900 mb-2">2. Uso de la Ubicación (GPS)</h2>
                                <p className="text-blue-800 text-sm leading-relaxed">
                                    Nuestra aplicación utiliza servicios de geolocalización en tiempo real. Esta información es <strong>imprescindible</strong> para conectar a los usuarios con los Proveedores más cercanos. No compartimos tus coordenadas exactas con terceros con fines publicitarios. No rastreamos tu ubicación en segundo plano.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-800 mb-4">3. Servicios de Terceros</h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Para garantizar un servicio de alta calidad, utilizamos los siguientes proveedores:
                                </p>
                                <ul className="list-disc ml-6 space-y-2 text-slate-600">
                                    <li><strong>Firebase:</strong> Para el almacenamiento de imágenes y notificaciones push.</li>
                                    <li><strong>Google Maps API:</strong> Para la visualización y selección de ubicación en el mapa.</li>
                                    <li><strong>AWS:</strong> Para el alojamiento seguro de nuestra base de datos y API.</li>
                                    <li><strong>Resend:</strong> Para el envío de correos electrónicos transaccionales (bienvenida, recuperación de contraseña, notificaciones de cuenta).</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-800 mb-4">4. Identificador del Dispositivo</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Recopilamos un identificador anónimo del dispositivo proporcionado por el sistema operativo (Android ID o ID de Vendor en iOS). Este dato se utiliza exclusivamente para prevenir el abuso de períodos de prueba gratuitos y no se comparte con terceros ni se utiliza con fines publicitarios.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-800 mb-4">5. Comunicaciones por Correo Electrónico</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Enviamos correos electrónicos en los siguientes casos: creación de cuenta, recuperación de contraseña, bienvenida al registrar un negocio, cierre de negocio y solicitudes relacionadas con suscripciones Premium. No enviamos correos promocionales sin tu consentimiento.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-800 mb-4">6. Control de tus Datos</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento desde los ajustes de la App. Para una eliminación definitiva de la cuenta y todos sus datos asociados, puedes escribirnos a <strong>soporte@brumh.cl</strong>.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-800 mb-4">7. Seguridad</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra acceso no autorizado, pérdida o alteración. Las contraseñas se almacenan de forma cifrada y las comunicaciones se realizan mediante conexiones seguras (HTTPS).
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-800 mb-4">8. Cambios a esta Política</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Nos reservamos el derecho de actualizar esta Política de Privacidad. Cualquier cambio será notificado a través de la aplicación o por correo electrónico. El uso continuado de Brumh después de los cambios implica la aceptación de la política actualizada.
                                </p>
                            </section>

                            <section className="pt-8 border-t border-slate-100">
                                <p className="text-slate-500 text-sm text-center">
                                    Al utilizar Brumh, aceptas las prácticas descritas en esta política.<br />
                                    ¿Preguntas? Escríbenos a <strong>soporte@brumh.cl</strong>
                                </p>
                            </section>
                        </article>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
