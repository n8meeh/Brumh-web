import React from 'react';
import Layout from '../components/Layout';

const AD_LOCATIONS = [
    {
        title: 'Feed de Comunidad',
        desc: 'Tu marca aparece de forma nativa entre las publicaciones de los usuarios.',
        icon: '📱'
    },
    {
        title: 'Directorio de Negocios',
        desc: 'Aparece en los primeros resultados cuando alguien busca servicios técnicos.',
        icon: '🛠️'
    },
    {
        title: 'Explorador de Grupos',
        desc: 'Impacta a comunidades específicas según sus intereses automotrices.',
        icon: '👥'
    }
];

export default function AdsPage() {
    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tighter">
                        Impulsa tu marca en <span className="text-blue-600">Brumh</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                        Conecta con una comunidad activa de dueños de vehículos. Gestión total de impresiones, clics y duración de campaña.
                    </p>
                </div>

                {/* Visualización de beneficios basados en DB */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {AD_LOCATIONS.map((loc, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-blue-600/5 transition-all">
                            <div className="text-4xl mb-6">{loc.icon}</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{loc.title}</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{loc.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Llamado a la acción profesional */}
                <div className="bg-slate-900 rounded-[3rem] p-8 sm:p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10 w-full overflow-hidden">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6 italic tracking-tighter">¿Listo para un acuerdo comercial?</h2>
                        <div className="bg-white/10 backdrop-blur-md inline-flex flex-col items-center justify-center w-full max-w-sm mx-auto px-4 sm:px-8 py-6 rounded-3xl border border-white/10 mb-8">
                            <p className="text-blue-400 font-bold mb-2 uppercase tracking-widest text-[10px] sm:text-xs">Escríbenos directamente</p>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold break-all sm:break-normal">contactobrumh@gmail.com</h3>
                        </div>
                        <p className="text-slate-400 text-sm font-medium">Diseñamos propuestas personalizadas según los objetivos de tu empresa.</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
