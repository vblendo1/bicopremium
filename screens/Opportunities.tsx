
import React, { useState } from 'react';
import { mockOpportunities } from '../services/mockData';
import { useUser } from '../hooks/useUser';
import { Opportunity } from '../types';
import { LockIcon, UnlockIcon, BanknotesIcon, CreditCardIcon } from '../utils/icons';

export const Opportunities: React.FC = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>(mockOpportunities);
  const { isVip, spendCredits } = useUser();

  const handleUnlock = (id: number) => {
    if (isVip || spendCredits(10)) {
      setOpportunities(prev =>
        prev.map(op => (op.id === id ? { ...op, unlocked: true } : op))
      );
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-brand-yellow">Central de Oportunidades Premium</h1>
        <p className="mt-2 text-gray-400">Aqui você encontra os melhores bicos e formas de renda extra. Desbloqueie para ver os detalhes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {opportunities.map(op => (
          <OpportunityCard key={op.id} opportunity={op} onUnlock={handleUnlock} />
        ))}
      </div>
    </div>
  );
};

interface OpportunityCardProps {
  opportunity: Opportunity;
  onUnlock: (id: number) => void;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity, onUnlock }) => {
  const { isVip } = useUser();

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${opportunity.unlocked ? 'bg-brand-gray border-2 border-brand-yellow/50' : 'bg-brand-gray border-2 border-transparent hover:border-brand-yellow/50'}`}>
        <div className="p-6">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-semibold text-brand-yellow">{opportunity.category}</p>
                    <h3 className="text-xl font-bold text-white mt-1">{opportunity.title}</h3>
                </div>
                <div className={`text-sm font-bold px-3 py-1 rounded-full ${opportunity.unlocked ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {opportunity.unlocked ? 'Aberto' : 'Fechado'}
                </div>
            </div>
            <p className="text-gray-400 mt-2">{opportunity.description}</p>
            <p className="mt-4 text-lg font-bold text-white">Potencial: <span className="text-brand-yellow">{opportunity.potential}</span></p>

            {opportunity.unlocked ? (
                <div className="mt-6 p-4 bg-black/30 rounded-lg">
                    <h4 className="font-bold text-brand-yellow flex items-center gap-2"><UnlockIcon className="w-5 h-5"/> Detalhes Desbloqueados:</h4>
                    <p className="text-gray-300 mt-2 text-sm">{opportunity.details}</p>
                </div>
            ) : (
                <div className="mt-6">
                    <button 
                        onClick={() => onUnlock(opportunity.id)}
                        className="w-full bg-brand-yellow text-brand-dark font-bold py-3 px-4 rounded-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
                    >
                        {isVip ? <BanknotesIcon className="w-5 h-5" /> : <CreditCardIcon className="w-5 h-5" />}
                        <span>{isVip ? 'Ver Detalhes (VIP)' : 'Desbloquear (10 créditos)'}</span>
                    </button>
                </div>
            )}
        </div>
    </div>
  );
};
