import Layout from '../components/Layout';
import { useRef, useState, useEffect } from 'react';

/* ── Scroll Reveal wrapper ── */
function Reveal({ children, className = '', delay = 0 }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
            { threshold: 0.15 },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

export default function AboutPage() {
    return (
        <Layout>
            <div className="py-24 bg-slate-50/30 min-h-screen">
                <div className="max-w-4xl mx-auto px-6">
                    <Reveal>
                        <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden">
                            {/* Decoración sutil */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>

                            <div className="relative z-10 space-y-12">
                                {/* Encabezado del Manifiesto */}
                                <div className="space-y-4">
                                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-[0.9]">
                                        La Visión detrás de <span className="text-blue-600">Brumh.</span>
                                    </h1>
                                    <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
                                </div>

                                {/* Bloque de Texto Amplio */}
                                <div className="space-y-10">
                                    <p className="text-2xl md:text-3xl text-slate-600 leading-tight font-medium italic tracking-tight">
                                        "Brumh no es solo una herramienta, es el ecosistema donde el conocimiento técnico y la necesidad comercial se encuentran para simplificar la vida de cada conductor."
                                    </p>

                                    <div className="space-y-8 text-slate-500 text-lg md:text-xl leading-relaxed font-medium text-justify">
                                        <p>
                                            Brumh nace para eliminar la incertidumbre del mundo automotriz. Es el puente definitivo entre el
                                            dueño de un vehículo y el experto que tiene la solución. No somos un simple directorio;
                                            somos una plataforma de <span className="font-bold text-slate-700">confianza verificada</span>.
                                        </p>

                                        <p>
                                            Para quienes conducen, ofrecemos el poder de la información: la capacidad de cotizar repuestos o servicios
                                            con un clic y elegir basándose en <span className="font-bold text-slate-700">reseñas reales</span>. Para los negocios, somos el motor de
                                            crecimiento digital, dándoles las herramientas para captar clientes y profesionalizar su presencia
                                            en el mercado sin barreras de entrada.
                                        </p>

                                        <p>
                                            Y en el corazón de todo, está nuestra <span className="font-bold text-slate-700">Comunidad</span>. Un foro dinámico donde expertos comparten su sabiduría
                                            y novatos encuentran respuestas. Brumh es, en esencia, la unión de la tecnología con la solidaridad
                                            automotriz, asegurando que nadie tenga que enfrentar un problema mecánico en soledad.
                                        </p>
                                    </div>

                                    {/* Cierre con fuerza */}
                                    <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                                        <p className="text-slate-900 font-bold uppercase tracking-[0.3em] text-xs">
                                            Conexión • Confianza • Comunidad
                                        </p>
                                        <div className="flex gap-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                            <div className="w-2 h-2 rounded-full bg-blue-200"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Layout>
    );
}

