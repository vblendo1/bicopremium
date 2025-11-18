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
        <h1 className="text-4xl font-extrabold text-brand-yellow">Oportunidades que Pagam de Verdade</h1>
        <p className="mt-2 text-gray-400">Deixe os bicos de R$5 para os outros. Aqui estão os esquemas que realmente colocam dinheiro no seu bolso.</p>
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
    <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col ${opportunity.unlocked ? 'bg-brand-gray border-2 border-brand-yellow/50' : 'bg-brand-gray border-2 border-transparent hover:border-brand-yellow/50'}`}>
        <div className="p-6 flex-grow">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-semibold text-brand-yellow">{opportunity.category}</p>
                    <h3 className="text-xl font-bold text-white mt-1">{opportunity.title}</h3>
                </div>
                <div className={`text-sm font-bold px-3 py-1 rounded-full flex-shrink-0 ${opportunity.unlocked ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {opportunity.unlocked ? 'Revelado' : 'Secreto'}
                </div>
            </div>
            <p className="text-gray-400 mt-2">{opportunity.description}</p>
            <p className="mt-4 text-lg font-bold text-white">Potencial: <span className="text-brand-yellow">{opportunity.potential}</span></p>
        </div>

        {opportunity.unlocked ? (
            <div className="p-6 bg-black/30">
                <h4 className="font-bold text-brand-yellow flex items-center gap-2 mb-2"><UnlockIcon className="w-5 h-5"/> O Segredo Revelado:</h4>
                <div className="text-gray-300 text-sm whitespace-pre-wrap">{opportunity.details}</div>
            </div>
        ) : (
            <div className="p-6 pt-0 mt-auto">
                <button 
                    onClick={() => onUnlock(opportunity.id)}
                    className="w-full bg-brand-yellow text-brand-dark font-bold py-3 px-4 rounded-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
                >
                    {isVip ? <BanknotesIcon className="w-5 h-5" /> : <CreditCardIcon className="w-5 h-5" />}
                    <span>{isVip ? 'Ver o Segredo (VIP)' : 'Revelar Agora (10 créditos)'}</span>
                </button>
            </div>
        )}
    </div>
  );
};
