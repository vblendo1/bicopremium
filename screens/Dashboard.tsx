
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { BanknotesIcon, BarChartIcon, BookOpenIcon, DollarSignIcon, LockIcon, BoltIcon, XIcon } from '../utils/icons';

export const Dashboard: React.FC = () => {
  const { isVip, purchaseSubscription } = useUser();
  const [showNotification, setShowNotification] = useState(true);

  return (
    <div className="space-y-12">
        {showNotification && !isVip && (
             <div className="bg-brand-yellow text-brand-dark p-4 rounded-xl flex flex-col sm:flex-row justify-between items-center mb-6 shadow-lg shadow-brand-yellow/20 animate-pulse">
                <div className="flex items-center gap-3">
                    <BanknotesIcon className="w-8 h-8"/>
                    <p className="font-bold text-center sm:text-left">
                        <span className="text-lg">Dica nova:</span> Como ganhar dinheiro sem sair do sofá!
                    </p>
                </div>
                <div className="flex items-center gap-4 mt-3 sm:mt-0">
                    <Link to="/earn-now" className="font-bold underline hover:text-gray-700">Clique aqui</Link>
                    <button onClick={() => setShowNotification(false)} className="p-1 rounded-full hover:bg-black/10">
                        <XIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        )}

      <section className="text-center bg-brand-gray p-8 rounded-xl shadow-2xl shadow-black/40 border border-brand-yellow/20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-yellow mb-4">
          Desbloqueie seu Potencial de Ganhos
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Acesso instantâneo a oportunidades, ferramentas e guias exclusivos para turbinar sua renda extra. Sem promessas, só informação de valor.
        </p>
        {!isVip && (
          <div className="mt-8">
             <button 
                onClick={purchaseSubscription}
                className="bg-brand-yellow text-brand-dark font-bold py-4 px-10 rounded-full text-xl hover:bg-yellow-300 transition-transform transform hover:scale-105 shadow-lg shadow-brand-yellow/30 flex items-center gap-3 mx-auto">
              <BanknotesIcon className="w-7 h-7" />
              <span>Virar VIP Agora</span>
            </button>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Nossas Ferramentas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <FeatureCard
            to="/earn-now"
            icon={<BoltIcon className="w-8 h-8 text-brand-yellow" />}
            title="Ganhe Agora"
            description="Dicas diretas e atalhos para fazer grana HOJE, mesmo sem experiência."
            locked={!isVip}
          />
          <FeatureCard
            to="/opportunities"
            icon={<BarChartIcon className="w-8 h-8 text-brand-yellow" />}
            title="Oportunidades Premium"
            description="Lista curada de bicos e freelas lucrativos. Detalhes exclusivos para membros."
          />
          <FeatureCard
            to="/guides"
            icon={<BookOpenIcon className="w-8 h-8 text-brand-yellow" />}
            title="Guias Black de Renda"
            description="E-books e vídeos direto ao ponto para você começar a ganhar dinheiro rápido."
            locked={!isVip}
          />
           <FeatureCard
            to="/calculator"
            icon={<DollarSignIcon className="w-8 h-8 text-brand-yellow" />}
            title="Calculadora de Grana"
            description="Estime seu potencial de ganhos semanais com diferentes tipos de bicos."
            locked={!isVip}
          />
        </div>
      </section>

       <section className="bg-brand-gray p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold text-brand-yellow mb-3">Comunidade VIP no Telegram</h2>
            <p className="text-gray-300 mb-6">Receba alertas diários, dicas rápidas e materiais extras antes de todo mundo.</p>
            <button disabled={!isVip} className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center gap-3 mx-auto">
                {isVip ? 'Acessar Comunidade' : <><LockIcon className="w-5 h-5" /><span>Exclusivo para VIPs</span></>}
            </button>
        </section>
    </div>
  );
};

interface FeatureCardProps {
    to: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    locked?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ to, icon, title, description, locked = false }) => {
    return (
        <Link to={to} className="block group">
            <div className="bg-brand-gray p-6 rounded-lg h-full border-2 border-transparent group-hover:border-brand-yellow transition-all duration-300 transform group-hover:-translate-y-1 shadow-lg relative overflow-hidden">
                {locked && <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1"><LockIcon className="w-3 h-3"/> VIP</div>}
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-400">{description}</p>
            </div>
        </Link>
    )
}
