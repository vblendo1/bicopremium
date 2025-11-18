import React from 'react';
import { useUser } from '../hooks/useUser';
import { LockIcon, BanknotesIcon, CreditCardIcon } from '../utils/icons';

interface PaywallProps {
  featureName: string;
  onUnlockAttempt?: () => void; // Optional: for credit-based unlocks
}

export const Paywall: React.FC<PaywallProps> = ({ featureName, onUnlockAttempt }) => {
  const { purchaseSubscription, purchaseCredits } = useUser();

  return (
    <div className="bg-brand-gray rounded-lg border-2 border-brand-yellow/30 p-8 text-center flex flex-col items-center justify-center h-full">
      <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-4 border-2 border-brand-yellow/50">
        <LockIcon className="w-8 h-8 text-brand-yellow" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">Conteúdo para Membros de Elite</h3>
      <p className="text-gray-400 mb-6">
        Você está a um passo de destravar <span className="font-bold text-brand-yellow">{featureName}</span>. Quem faz dinheiro de verdade está aqui.
      </p>
      <div className="w-full max-w-md space-y-4">
        <button
          onClick={purchaseSubscription}
          className="w-full bg-brand-yellow text-brand-dark font-bold py-4 px-6 rounded-lg text-lg hover:bg-yellow-300 transition-transform transform hover:scale-105 flex items-center justify-center gap-3"
        >
          <BanknotesIcon className="w-6 h-6" />
          <span>🔥 Liberar Acesso VIP AGORA (R$ 9,90/mês)</span>
        </button>
        {onUnlockAttempt && (
            <button
                onClick={onUnlockAttempt}
                className="w-full bg-transparent border-2 border-brand-yellow text-brand-yellow font-bold py-3 px-6 rounded-lg hover:bg-brand-yellow/10 transition-colors flex items-center justify-center gap-3"
            >
                <CreditCardIcon className="w-6 h-6" />
                <span>Usar 10 Créditos para Acesso Imediato</span>
            </button>
        )}
         <button
          onClick={() => purchaseCredits(20)}
          className="text-sm text-gray-500 hover:text-brand-yellow"
        >
          Ou comprar créditos avulsos
        </button>
      </div>
    </div>
  );
};
