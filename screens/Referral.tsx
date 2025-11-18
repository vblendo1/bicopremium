import React from 'react';
import { GiftIcon, UsersIcon, CheckCircleIcon } from '../utils/icons';

export const Referral: React.FC = () => {
    const referralLink = "https://bico.premium/ref/SEUCODIGO123";

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-brand-yellow">Ganhe Dinheiro Indicando</h1>
                <p className="mt-2 text-gray-400">Traga seus amigos para o lado lucrativo da força e ganhe acesso VIP de graça. Simples e direto.</p>
            </div>

            <div className="bg-brand-gray p-8 rounded-xl shadow-2xl shadow-black/40 border border-brand-yellow/20 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Seu Link Mágico de Indicação</h2>
                <div className="bg-black/50 p-4 rounded-lg flex items-center justify-between gap-4">
                    <span className="text-lg text-gray-300 font-mono break-all text-left">{referralLink}</span>
                    <button 
                        onClick={() => navigator.clipboard.writeText(referralLink).then(() => alert('Link copiado! Espalhe a palavra.'))}
                        className="bg-brand-yellow text-brand-dark font-bold py-2 px-4 rounded-lg hover:bg-yellow-300 transition-colors flex-shrink-0"
                    >
                        Copiar
                    </button>
                </div>
            </div>

            <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">A Regra é Clara:</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Step
                        icon={<UsersIcon className="w-10 h-10 text-brand-yellow"/>}
                        title="1. Espalhe o Link"
                        description="Mande seu link para todo mundo que você conhece que precisa de grana."
                    />
                     <Step
                        icon={<CheckCircleIcon className="w-10 h-10 text-brand-yellow"/>}
                        title="2. Eles Entram"
                        description="Seus amigos se cadastram usando seu link. Eles ganham acesso, você também."
                    />
                     <Step
                        icon={<GiftIcon className="w-10 h-10 text-brand-yellow"/>}
                        title="3. Você Lucra!"
                        description="A cada 3 amigos cadastrados, você ganha 1 semana VIP. Sem pegadinhas."
                    />
                </div>
            </div>
        </div>
    );
};

interface StepProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const Step: React.FC<StepProps> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center">
        <div className="bg-brand-gray p-4 rounded-full mb-4 border-2 border-brand-yellow/30">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);
