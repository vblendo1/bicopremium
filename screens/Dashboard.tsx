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
                        <span className="text-lg">Dica nova:</span> R$ 300 com um item da sua casa.
                    </p>
                </div>
                <div className="flex items-center gap-4 mt-3 sm:mt-0">
                    <Link to="/earn-now" className="font-bold underline hover:text-gray-700">Ver o segredo</Link>
                    <button onClick={() => setShowNotification(false)} className="p-1 rounded-full hover:bg-black/10">
                        <XIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        )}

      <section className="text-center bg-brand-gray p-8 rounded-xl shadow-2xl shadow-black/40 border border-brand-yellow/20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-yellow mb-4">
          A Máquina de Fazer Grana no Seu Bolso
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Chega de perder tempo. Aqui você encontra os atalhos, as ferramentas e as informações que os outros não te contam para fazer dinheiro RÁPIDO.
        </p>
        {!isVip && (
          <div className="mt-8">
             <button 
                onClick={purchaseSubscription}
                className="bg-brand-yellow text-brand-dark font-bold py-4 px-10 rounded-full text-xl hover:bg-yellow-300 transition-transform transform hover:scale-105 shadow-lg shadow-brand-yellow/30 flex items-center gap-3 mx-auto">
              <BanknotesIcon className="w-7 h-7" />
              <span>ATIVAR MODO LUCRATIVO</span>
            </button>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Seu Arsenal para Fazer Dinheiro</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <FeatureCard
            to="/earn-now"
            icon={<BoltIcon className="w-8 h-8 text-brand-yellow" />}
            title="Ganhe Agora"
            description="Métodos testados para fazer grana HOJE. Para quem tem pressa e não aceita desculpas."
            locked={!isVip}
          />
          <FeatureCard
            to="/opportunities"
            icon={<BarChartIcon className="w-8 h-8 text-brand-yellow" />}
            title="Oportunidades de Elite"
            description="Uma lista filtrada de bicos que pagam bem de verdade. Esqueça o salário mínimo."
          />
          <FeatureCard
            to="/guides"
            icon={<BookOpenIcon className="w-8 h-8 text-brand-yellow" />}
            title="Guias Black"
            description="O passo a passo mastigado dos métodos mais quentes. É só copiar, colar e lucrar."
            locked={!isVip}
          />
           <FeatureCard
            to="/calculator"
            icon={<DollarSignIcon className="w-8 h-8 text-brand-yellow" />}
            title="Calculadora de Grana"
            description="Descubra o quanto de dinheiro você está deixando na mesa e como virar o jogo."
            locked={!isVip}
          />
        </div>
      </section>

       <section className="bg-brand-gray p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold text-brand-yellow mb-3">Comunidade VIP: Acesso Proibido</h2>
            <p className="text-gray-300 mb-6">Alertas em tempo real e dicas que não postamos em nenhum outro lugar. Só para a elite.</p>
            <button disabled={!isVip} className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center gap-3 mx-auto">
                {isVip ? 'Entrar no Grupo Secreto' : <><LockIcon className="w-5 h-5" /><span>Apenas para Membros VIP</span></>}
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
