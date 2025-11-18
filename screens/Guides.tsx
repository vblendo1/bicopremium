
import React, { useState } from 'react';
import { useUser } from '../hooks/useUser';
import { mockGuides } from '../services/mockData';
import { Paywall } from '../components/Paywall';
import { Guide } from '../types';
import { BookOpenIcon, VideoIcon, FileTextIcon, LockIcon } from '../utils/icons';

export const Guides: React.FC = () => {
  const { isVip } = useUser();
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  if (!isVip) {
    return (
        <div>
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-brand-yellow">Guia Black de Renda Extra</h1>
                <p className="mt-2 text-gray-400">Mini e-books, vídeos e tutoriais para acelerar seus resultados.</p>
            </div>
            <Paywall featureName="os Guias Black" />
        </div>
    );
  }

  if (selectedGuide) {
    return (
        <div className="bg-brand-gray p-8 rounded-lg">
            <button onClick={() => setSelectedGuide(null)} className="mb-6 text-brand-yellow hover:underline">
                &larr; Voltar para os guias
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedGuide.title}</h2>
            <p className="text-gray-300">{selectedGuide.content}</p>
        </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-brand-yellow">Guia Black de Renda Extra</h1>
        <p className="mt-2 text-gray-400">Mini e-books, vídeos e tutoriais para acelerar seus resultados.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockGuides.map(guide => (
          <GuideCard key={guide.id} guide={guide} onSelect={setSelectedGuide} />
        ))}
      </div>
    </div>
  );
};

interface GuideCardProps {
    guide: Guide;
    onSelect: (guide: Guide) => void;
}

const GuideCard: React.FC<GuideCardProps> = ({ guide, onSelect }) => {
    const getIcon = (type: Guide['type']) => {
        switch (type) {
            case 'E-book': return <BookOpenIcon className="w-6 h-6 text-brand-yellow" />;
            case 'Vídeo': return <VideoIcon className="w-6 h-6 text-brand-yellow" />;
            case 'Tutorial': return <FileTextIcon className="w-6 h-6 text-brand-yellow" />;
        }
    };

    return (
        <div onClick={() => onSelect(guide)} className="bg-brand-gray rounded-lg p-6 flex items-start gap-4 cursor-pointer hover:bg-gray-800 transition-colors border-2 border-transparent hover:border-brand-yellow">
            <div className="flex-shrink-0">
                {getIcon(guide.type)}
            </div>
            <div>
                <h3 className="text-xl font-bold text-white">{guide.title}</h3>
                <p className="text-gray-400 mt-1">{guide.description}</p>
            </div>
        </div>
    )
};
