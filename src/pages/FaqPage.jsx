import Layout from '../components/Layout';
import Reveal from '../components/Reveal';
import { useState } from 'react';

const FAQS = [
    {
        q: '¿Cómo elimino mi cuenta?',
        a: (
            <div className="space-y-2">
                <p>Tienes dos opciones para eliminar tu cuenta:</p>
                <ol className="list-decimal ml-4 space-y-1">
                    <li><strong>Desde la app:</strong> Ve a tu perfil → Ajustes → Eliminar cuenta. Tus datos personales serán anonimizados de inmediato.</li>
                    <li><strong>Por correo:</strong> Escríbenos a <strong>contactobrumh@gmail.com</strong> con el asunto "Eliminar cuenta" indicando el email de tu cuenta.</li>
                </ol>
                <p className="text-xs text-slate-400 mt-2">Al eliminar tu cuenta, tu nombre, email y foto de perfil son anonimizados inmediatamente. El registro técnico puede conservarse para mantener la integridad de la plataforma y prevenir abusos.</p>
            </div>
        ),
        id: 'eliminar-cuenta'
    },
    {
        q: '¿Cómo registro mi negocio en Brumh?',
        a: (
            <ol className="list-decimal ml-4 space-y-1">
                <li>Crea una cuenta de usuario en la app.</li>
                <li>Ve a tu perfil y selecciona "Registrar negocio".</li>
                <li>Completa la información de tu negocio: nombre, categoría, dirección y datos de contacto.</li>
                <li>Sube tu logo y foto de portada.</li>
                <li>Tu negocio quedará visible para la comunidad de inmediato.</li>
            </ol>
        )
    },
    {
        q: '¿Cómo cierro o doy de baja mi negocio?',
        a: (
            <div className="space-y-2">
                <p>Tienes dos opciones:</p>
                <ol className="list-decimal ml-4 space-y-1">
                    <li><strong>Desde la app:</strong> Ve al panel de tu negocio → Ajustes → Cerrar negocio. Tu negocio dejará de ser visible para los usuarios.</li>
                    <li><strong>Por correo:</strong> Escríbenos a <strong>contactobrumh@gmail.com</strong> con el asunto "Cerrar negocio" indicando el nombre y email asociado.</li>
                </ol>
            </div>
        )
    },
];

function FaqItem({ item }) {
    const [open, setOpen] = useState(false);

    return (
        <div id={item.id || undefined} className="border border-slate-100 rounded-2xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-slate-50 transition-colors text-left"
            >
                <span className="font-semibold text-slate-800">{item.q}</span>
                <svg className={`w-4 h-4 text-slate-400 shrink-0 ml-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 pt-2 text-sm text-slate-500 leading-relaxed bg-white border-t border-slate-100">
                    {item.a}
                </div>
            </div>
        </div>
    );
}

export default function FaqPage() {
    return (
        <Layout>
            <div className="py-24 bg-slate-50/30 min-h-screen">
                <div className="max-w-3xl mx-auto px-6">
                    <Reveal>
                        <div className="text-center mb-16">
                            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-4">
                                Ayuda
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter">
                                Preguntas frecuentes
                            </h1>
                        </div>
                    </Reveal>

                    <Reveal delay={150}>
                        <div className="space-y-3">
                            {FAQS.map((item, i) => (
                                <FaqItem key={i} item={item} />
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-slate-500 text-sm">¿No encontraste lo que buscabas?</p>
                            <a href="mailto:contactobrumh@gmail.com" className="text-blue-600 font-semibold text-sm hover:underline">
                                contactobrumh@gmail.com
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Layout>
    );
}
