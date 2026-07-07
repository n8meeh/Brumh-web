import Layout from '../components/Layout';

export default function TermsPage() {
    return (
        <Layout>
            <div className="py-10 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white p-10 md:p-16 shadow-xl shadow-slate-200 rounded-3xl border border-slate-100">
                        <header className="border-b border-slate-100 pb-8 mb-10">
                            <h1 className="text-4xl font-bold text-slate-900 mb-4">Términos de Servicio</h1>
                            <p className="text-slate-500 font-medium tracking-wide uppercase text-xs">Versión 1.1 — Actualizado Mayo 2026</p>
                        </header>

                        <article className="space-y-8">
                            <section>
                                <h2 className="text-xl font-bold text-slate-800 mb-4">1. Naturaleza del Servicio</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Brumh actúa exclusivamente como un marketplace tecnológico. Al utilizar nuestra plataforma, usted reconoce que los contratos de servicio se realizan directamente entre el Usuario y el Proveedor (Negocios), siendo Brumh un tercero facilitador de la conexión.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-800 mb-4">2. Registro y Cuenta</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Al registrarte en Brumh, te comprometes a proporcionar información veraz y actualizada. Eres responsable de mantener la confidencialidad de tu contraseña y de todas las actividades realizadas bajo tu cuenta. Brumh se reserva el derecho de suspender o eliminar cuentas que infrinjan estos términos.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-800 mb-4">3. Privacidad y Geolocalización</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Nuestra App requiere acceso a la ubicación del usuario para filtrar resultados relevantes. No rastreamos su ubicación en segundo plano ni compartimos coordenadas específicas con terceros con fines publicitarios. Para más detalles, consulte nuestra <a href="/privacidad" className="text-blue-600 font-semibold hover:underline">Política de Privacidad</a>.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-800 mb-4">4. Conducta del Usuario</h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Al utilizar Brumh, te comprometes a:
                                </p>
                                <ul className="list-disc ml-6 space-y-2 text-slate-600">
                                    <li>No publicar contenido ofensivo, fraudulento, difamatorio o que infrinja derechos de terceros.</li>
                                    <li>No utilizar la plataforma para spam, estafas o actividades ilegales.</li>
                                    <li>Respetar a otros usuarios y proveedores en todas las interacciones.</li>
                                    <li>No intentar vulnerar la seguridad de la plataforma ni manipular sus sistemas.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-800 mb-4">5. Sistema de Moderación</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Brumh cuenta con un sistema de moderación para garantizar la calidad de la comunidad. Los usuarios pueden reportar contenido inapropiado. Las infracciones pueden resultar en advertencias (strikes), suspensiones temporales o la inhabilitación permanente de la cuenta, según la gravedad y reincidencia.
                                </p>
                            </section>

                            <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <h2 className="text-lg font-bold text-blue-900 mb-2">6. Nota para Proveedores</h2>
                                <p className="text-blue-800 text-sm leading-relaxed">
                                    Al registrar su negocio, usted garantiza que cuenta con los permisos legales para operar en territorio chileno y que la información de contacto proporcionada es verídica. Los proveedores son responsables de la calidad de los servicios ofrecidos a través de la plataforma.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-800 mb-4">7. Limitación de Responsabilidad</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Brumh no se hace responsable de la calidad, cumplimiento o resultado de los servicios contratados entre usuarios y proveedores. Actuamos como facilitador tecnológico y no somos parte en las transacciones realizadas entre las partes.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-800 mb-4">8. Modificaciones</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Brumh se reserva el derecho de modificar estos Términos de Servicio en cualquier momento. Los cambios serán notificados a través de la aplicación o por correo electrónico. El uso continuado de la plataforma tras la notificación implica la aceptación de los términos actualizados.
                                </p>
                            </section>

                            <section className="pt-8 border-t border-slate-100">
                                <p className="text-slate-500 text-sm text-center">
                                    Al utilizar Brumh, aceptas estos Términos de Servicio en su totalidad.<br />
                                    ¿Preguntas? Escríbenos a <strong>contactobrumh@gmail.com</strong>
                                </p>
                            </section>
                        </article>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

