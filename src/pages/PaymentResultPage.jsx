import { useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';

const RESULTS = {
    exito: {
        icon: '✅',
        iconBg: 'bg-green-100',
        title: '¡Pago exitoso!',
        description: 'Tu suscripción Premium ha sido activada. Ya puedes disfrutar de todas las funciones avanzadas de Brumh.',
        hint: 'Abre la app de Brumh para ver los cambios reflejados en tu cuenta.',
        color: 'text-green-700',
    },
    error: {
        icon: '❌',
        iconBg: 'bg-red-100',
        title: 'Pago no procesado',
        description: 'Hubo un problema con tu pago. No se realizó ningún cargo a tu cuenta.',
        hint: 'Puedes intentarlo nuevamente desde la app o contactar a soporte.',
        color: 'text-red-700',
    },
    pendiente: {
        icon: '⏳',
        iconBg: 'bg-yellow-100',
        title: 'Pago pendiente',
        description: 'Tu pago está siendo procesado. Recibirás una notificación cuando se confirme.',
        hint: 'Esto puede demorar unos minutos. Tu plan se activará automáticamente al confirmarse.',
        color: 'text-yellow-700',
    },
};

export default function PaymentResultPage({ status }) {
    const [searchParams] = useSearchParams();
    const result = RESULTS[status] || RESULTS.error;

    return (
        <Layout>
            <div className="py-16 px-6">
                <div className="max-w-lg mx-auto text-center">
                    <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200">
                        <div className={`w-20 h-20 ${result.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                            <span className="text-4xl">{result.icon}</span>
                        </div>

                        <h1 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
                            {result.title}
                        </h1>

                        <p className="text-slate-500 leading-relaxed mb-6">
                            {result.description}
                        </p>

                        <div className="bg-slate-50 rounded-2xl p-4 mb-6">
                            <p className="text-sm text-slate-600">{result.hint}</p>
                        </div>

                        <a
                            href="mailto:soporte@brumh.cl"
                            className="text-blue-600 text-sm font-medium hover:underline"
                        >
                            ¿Necesitas ayuda? Contacta soporte
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
