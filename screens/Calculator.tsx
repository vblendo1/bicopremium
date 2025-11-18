import React, { useState, useMemo } from 'react';
import { useUser } from '../hooks/useUser';
import { Paywall } from '../components/Paywall';
import { DollarSignIcon } from '../utils/icons';

const BICO_TYPES = {
  freela: { name: 'Freelas (Edição, Design)', rate: 100, hours: 5 },
  apps: { name: 'Apps de Tarefas', rate: 15, hours: 10 },
  revenda: { name: 'Revenda de Produtos', rate: 25, hours: 8 },
  microtarefas: { name: 'Microtarefas', rate: 8, hours: 15 },
};

type BicoKey = keyof typeof BICO_TYPES;

const CalculatorTool: React.FC = () => {
    const [hours, setHours] = useState<{ [key in BicoKey]: number }>({
        freela: 5,
        apps: 10,
        revenda: 8,
        microtarefas: 15
    });

    const handleHoursChange = (bico: BicoKey, value: number) => {
        setHours(prev => ({...prev, [bico]: value}));
    };

    const totalWeeklyEarnings = useMemo(() => {
        return Object.keys(hours).reduce((total, bicoKey) => {
            const key = bicoKey as BicoKey;
            return total + (hours[key] * BICO_TYPES[key].rate);
        }, 0);
    }, [hours]);


    return (
        <div className="bg-brand-gray p-4 md:p-8 rounded-xl shadow-2xl shadow-black/40 border border-brand-yellow/20">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Simulador de Riqueza</h2>
            
            <div className="space-y-6">
                {Object.keys(BICO_TYPES).map(bicoKey => {
                    const key = bicoKey as BicoKey;
                    const bico = BICO_TYPES[key];
                    return (
                        <div key={key}>
                            <label htmlFor={key} className="block mb-2 text-sm font-medium text-gray-300">{bico.name}</label>
                            <div className="flex items-center gap-4">
                                <input
                                    id={key}
                                    type="range"
                                    min="0"
                                    max="40"
                                    value={hours[key]}
                                    onChange={(e) => handleHoursChange(key, parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                                />
                                <span className="font-bold text-brand-yellow w-24 text-center">{hours[key]} horas/sem</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-10 pt-6 border-t-2 border-brand-yellow/20 text-center">
                <p className="text-lg text-gray-300">Seu potencial de massacre financeiro semanal é de:</p>
                <p className="text-4xl sm:text-5xl font-extrabold text-brand-yellow my-2">
                    R$ {totalWeeklyEarnings.toFixed(2).replace('.', ',')}
                </p>
                <p className="text-sm text-gray-500">*Cálculo baseado em quem não tem medo de trabalhar.</p>
            </div>
        </div>
    );
};


export const Calculator: React.FC = () => {
  const { isVip } = useUser();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-brand-yellow">Calculadora da Verdade</h1>
        <p className="mt-2 text-gray-400">Descubra quanto dinheiro você está deixando na mesa por pura preguiça. Os números não mentem.</p>
      </div>

      {isVip ? (
        <CalculatorTool />
      ) : (
        <Paywall featureName="a Calculadora da Verdade" />
      )}
    </div>
  );
};
