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

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('success');
        // Aquí se integraría la lógica real de envío
    };

    return (
        <Layout>
            <div className="relative min-h-screen py-20 px-6 md:px-10 overflow-hidden bg-slate-50/50">
                {/* Elementos decorativos abstractos */}
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-900/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Lado Izquierdo: Info de Contacto */}
                        <div className="space-y-12">
                            <Reveal>
                                <div className="space-y-6 text-center lg:text-left">
                                    <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-4">
                                        Canales de Soporte
                                    </span>
                                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-[0.9]">
                                        Estamos aquí para <span className="text-blue-600">ayudarte.</span>
                                    </h1>
                                    <p className="text-lg text-slate-500 font-medium max-w-lg mx-auto lg:mx-0">
                                        ¿Tienes dudas sobre Brumh app, necesitas soporte técnico o quieres una alianza comercial? Nuestro equipo te responderá en la brevedad.
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* Lado Derecho: Acciones de Contacto Directo */}
                        <Reveal delay={400}>
                            <div className="bg-white p-6 sm:p-12 md:p-16 rounded-[3rem] sm:rounded-[4rem] shadow-2xl shadow-slate-200/60 border border-slate-100 text-center space-y-10 w-full overflow-hidden">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">Contáctanos mediante correo electrónico</p>
                                    <a 
                                        href="mailto:contactobrumh@gmail.com" 
                                        className="inline-block text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 hover:text-blue-600 transition-colors break-all sm:break-normal tracking-tighter"
                                    >
                                        contactobrumh@gmail.com
                                    </a>
                                </div>

                                <div className="h-px w-20 bg-slate-100 mx-auto"></div>

                                <div className="space-y-6">
                                    <p className="text-sm font-medium text-slate-500">O mediante nuestro Instagram</p>
                                    <a 
                                        href="https://www.instagram.com/brumh_app" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full sm:w-auto gap-2 sm:gap-3 px-4 sm:px-10 py-4 sm:py-5 bg-gradient-to-tr from-purple-600 via-red-500 to-yellow-500 text-white font-bold rounded-2xl hover:scale-105 hover:rotate-1 active:scale-95 transition-all shadow-xl shadow-red-500/20 uppercase tracking-widest text-[10px] sm:text-xs"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        Brumh App en Instagram
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

