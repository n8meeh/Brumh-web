export default function TermsPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-16 px-6">
            <div className="max-w-3xl mx-auto">
                <a href="/" className="inline-flex items-center text-sm font-semibold text-blue-600 mb-8 hover:gap-2 transition-all">
                    <span>←</span> <span className="ml-2">Volver al inicio</span>
                </a>

                <div className="bg-white p-10 md:p-16 shadow-xl shadow-slate-200 rounded-3xl border border-slate-100">
                    <header className="border-b border-slate-100 pb-8 mb-10">
                        <h1 className="text-4xl font-black text-slate-900 mb-4">Términos de Servicio</h1>
                        <p className="text-slate-500 font-medium">Versión 1.0 — Actualizado el 12 de Marzo, 2026</p>
                    </header>

                    <article className="prose prose-slate lg:prose-lg max-w-none">
                        <section className="mb-10">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">1. Naturaleza del Servicio</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Brumh actúa exclusivamente como un marketplace tecnológico. Al utilizar nuestra plataforma, usted reconoce que los contratos de servicio se realizan directamente entre el Usuario y el Proveedor (Taller/Servicio), siendo Brumh un tercero facilitador de la conexión.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">2. Privacidad y Geolocalización</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Nuestra App requiere acceso a la ubicación del usuario para filtrar resultados relevantes. No rastreamos su ubicación en segundo plano ni compartimos coordenadas específicas con terceros con fines publicitarios.
                            </p>
                        </section>

                        <section className="mb-10 bg-blue-50 p-6 rounded-2xl border border-blue-100">
                            <h2 className="text-lg font-bold text-blue-900 mb-2">💡 Nota para Providers</h2>
                            <p className="text-blue-800 text-sm">
                                Al registrar su negocio, usted garantiza que cuenta con los permisos legales para operar en territorio chileno y que la información de contacto proporcionada es verídica.
                            </p>
                        </section>
                    </article>
                </div>
            </div>
        </div>
    );
}