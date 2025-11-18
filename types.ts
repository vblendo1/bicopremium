
export interface Opportunity {
  id: number;
  title: string;
  category: string;
  potential: string;
  description: string;
  details: string;
  unlocked: boolean;
}

export interface Guide {
  id: number;
  title: string;
  type: 'E-book' | 'Vídeo' | 'Tutorial';
  description: string;
  content: string;
  unlocked: boolean;
}

export interface UserContextType {
  isVip: boolean;
  credits: number;
  purchaseSubscription: () => void;
  purchaseCredits: (amount: number) => void;
  spendCredits: (amount: number) => boolean;
}

export interface EarnNowTip {
  id: number;
  title: string;
  steps: string[];
  resource?: {
    name: string;
    url: string;
  };
}

export interface JobLink {
  name: string;
  url: string;
  description: string;
}

export interface JobLinkCategory {
  category: string;
  links: JobLink[];
}
