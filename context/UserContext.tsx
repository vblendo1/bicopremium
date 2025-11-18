
import React, { createContext, useState, ReactNode } from 'react';
import { UserContextType } from '../types';

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isVip, setIsVip] = useState(false);
  const [credits, setCredits] = useState(5);

  const purchaseSubscription = () => {
    alert('Assinatura VIP ativada! Acesso total liberado.');
    setIsVip(true);
    // Simulate upsell
    setTimeout(() => {
      if (confirm('OFERTA ÚNICA: Que tal acesso VITALÍCIO por apenas mais R$10,00 (pagamento único total de R$19,90)?')) {
          alert('Parabéns! Você agora tem acesso vitalício! Aproveite todos os recursos para sempre.');
      }
    }, 500);
  };

  const purchaseCredits = (amount: number) => {
    setCredits(prev => prev + amount);
    alert(`${amount} créditos adicionados com sucesso!`);
  };

  const spendCredits = (amount: number): boolean => {
    if (credits >= amount) {
      setCredits(prev => prev - amount);
      return true;
    }
    alert('Créditos insuficientes!');
    return false;
  };

  const value = {
    isVip,
    credits,
    purchaseSubscription,
    purchaseCredits,
    spendCredits,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
