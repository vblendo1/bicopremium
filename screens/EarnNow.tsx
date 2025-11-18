
import React, { useState } from 'react';
import { useUser } from '../hooks/useUser';
import { earnNowTips, jobLinks } from '../services/mockData';
import { JobLink, JobLinkCategory, EarnNowTip } from '../types';
// Fix: Imported UnlockIcon to resolve component not found error.
import { LockIcon, BoltIcon, CheckCircleIcon, XIcon, BanknotesIcon, LinkIcon, UnlockIcon } from '../utils/icons';

const ModalPaywall: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const { purchaseSubscription } = useUser();

    const handlePurchase = () => {
        purchaseSubscription();
        onClose();
    }

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-brand-gray rounded-xl border-2 border-brand-yellow/50 p-8 text-center max-w-lg w-full relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">
                    <XIcon className="w-6 h-6" />
                </button>
                <h2 className="text-3xl font-extrabold text-brand-yellow mb-4">Quer mudar de vida ou continuar se lamentando?</h2>
                <p className="text-gray-300 mb-6 text-lg">Desbloqueie <span className="font-bold">TODOS</span> os métodos, dicas e atalhos pra fazer grana <span className="font-bold text-brand-yellow">HOJE.</span></p>
                <button
                    onClick={handlePurchase}
                    className="w-full bg-brand-yellow text-brand-dark font-bold py-4 px-6 rounded-lg text-xl hover:bg-yellow-300 transition-transform transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg shadow-brand-yellow/30"
                >
                    <UnlockIcon className="w-6 h-6" />
                    <span>Liberar acesso por R$ 9,90/mês</span>
                </button>
            </div>
        </div>
    )
}

const TipDetailModal: React.FC<{ tip: EarnNowTip, onClose: () => void }> = ({ tip, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-brand-gray rounded-xl border border-brand-yellow/30 p-8 max-w-2xl w-full relative">
                 <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">
                    <XIcon className="w-6 h-6" />
                </button>
                <h3 className="text-2xl font-bold text-brand-yellow mb-4">{tip.title}</h3>
                <div className="space-y-3">
                    {tip.steps.map((step, index) => (
                        <p key={index} className="text-gray-300 flex items-start gap-2">
                            <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-1"/>
                            <span>{step}</span>
                        </p>
                    ))}
                </div>
                {tip.resource && (
                    <a href={tip.resource.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 bg-brand-yellow/20 text-brand-yellow font-bold py-2 px-4 rounded-lg hover:bg-brand-yellow/30">
                        Ver Recurso: {tip.resource.name}
                    </a>
                )}
            </div>
        </div>
    )
}


export const EarnNow: React.FC = () => {
    const { isVip } = useUser();
    const [showPaywall, setShowPaywall] = useState(false);
    const [selectedTip, setSelectedTip] = useState<EarnNowTip | null>(null);

    const handleTipClick = (tip: EarnNowTip) => {
        if (isVip) {
            setSelectedTip(tip);
        } else {
            setShowPaywall(true);
        }
    }

    return (
        <div className="space-y-12">
            {showPaywall && <ModalPaywall onClose={() => setShowPaywall(false)} />}
            {selectedTip && <TipDetailModal tip={selectedTip} onClose={() => setSelectedTip(null)} />}
            
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-brand-yellow">Ganhe Agora</h1>
                <p className="mt-2 text-gray-400 max-w-2xl mx-auto">Dicas diretas e links úteis pra você parar de dar desculpas e começar a fazer dinheiro.</p>
            </div>

            {/* Dicas de Ganhos Imediatos */}
            <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3"><BoltIcon className="w-8 h-8 text-brand-yellow" /> Dicas de Ganhos Imediatos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {earnNowTips.map(tip => (
                        <div key={tip.id} onClick={() => handleTipClick(tip)} className="bg-brand-gray p-6 rounded-lg cursor-pointer border-2 border-transparent hover:border-brand-yellow/80 transition-all transform hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-white">{tip.title}</h3>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-gray-400">Passos simples para executar hoje</span>
                                {!isVip && <LockIcon className="w-5 h-5 text-red-500" />}
                                {isVip && <span className="text-brand-yellow font-bold">Ver agora &rarr;</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Central de Links */}
            <section>
                 <h2 className="text-3xl font-bold mb-6 flex items-center gap-3"><LinkIcon className="w-8 h-8 text-brand-yellow" /> Central de Links de Trabalho</h2>
                 <div className="space-y-8">
                    {jobLinks.map(category => (
                        <div key={category.category}>
                            <h3 className="text-2xl font-semibold mb-4 border-b-2 border-brand-yellow/20 pb-2">{category.category}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {category.links.map((link, index) => {
                                    const isLocked = !isVip && index > 0;
                                    if (isLocked) {
                                        return (
                                            <div key={link.name} onClick={() => setShowPaywall(true)} className="bg-brand-gray p-4 rounded-lg flex items-center gap-3 cursor-pointer relative opacity-50 hover:opacity-100 transition-opacity">
                                                 <LockIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-brand-yellow/50" />
                                                 <div className="blur-sm w-full">
                                                    <p className="font-bold text-white">{link.name}</p>
                                                    <p className="text-sm text-gray-400">{link.description}</p>
                                                 </div>
                                            </div>
                                        )
                                    }
                                    return (
                                        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-brand-gray p-4 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
                                            <BanknotesIcon className="w-6 h-6 text-brand-yellow flex-shrink-0"/>
                                            <div>
                                                <p className="font-bold text-white">{link.name}</p>
                                                <p className="text-sm text-gray-400">{link.description}</p>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                 </div>
            </section>

        </div>
    )
}
