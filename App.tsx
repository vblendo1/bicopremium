import React from 'react';
import { HashRouter, Route, Routes, NavLink } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { useUser } from './hooks/useUser';
import { Dashboard } from './screens/Dashboard';
import { Opportunities } from './screens/Opportunities';
import { Calculator } from './screens/Calculator';
import { Guides } from './screens/Guides';
import { Referral } from './screens/Referral';
import { EarnNow } from './screens/EarnNow';
import { LockIcon, DollarSignIcon, BarChartIcon, BookOpenIcon, UsersIcon, BanknotesIcon, XIcon, MenuIcon, BoltIcon } from './utils/icons';

const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string; onClick?: () => void; }> = ({ to, icon, label, onClick }) => (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive
            ? 'bg-brand-yellow text-brand-dark'
            : 'text-gray-300 hover:bg-brand-gray hover:text-white'
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
);

const MobileMenu: React.FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
    const { isVip, credits } = useUser();
    return (
        <div className="md:hidden bg-brand-gray absolute top-full left-0 w-full p-4 flex flex-col gap-4">
             <div className="text-center mb-4">
                <div className="font-bold text-lg">{isVip ? 'MEMBRO VIP' : 'MEMBRO FREE'}</div>
                <div className="text-gray-400">{credits} créditos</div>
             </div>
             {!isVip && (
                <button className="w-full bg-brand-yellow text-brand-dark font-bold py-3 px-4 rounded-full hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2 shadow-md shadow-brand-yellow/20">
                    <BanknotesIcon className="w-5 h-5" />
                    <span>Desbloquear Ganhos</span>
                </button>
             )}
            <NavItem to="/earn-now" icon={<BoltIcon className="w-5 h-5" />} label="Ganhe Agora" onClick={closeMenu} />
            <NavItem to="/opportunities" icon={<BarChartIcon className="w-5 h-5" />} label="Oportunidades" onClick={closeMenu} />
            <NavItem to="/calculator" icon={<LockIcon className="w-5 h-5" />} label="Calculadora" onClick={closeMenu} />
            <NavItem to="/guides" icon={<BookOpenIcon className="w-5 h-5" />} label="Guias Black" onClick={closeMenu} />
            <NavItem to="/referral" icon={<UsersIcon className="w-5 h-5" />} label="Indique e Ganhe" onClick={closeMenu} />
        </div>
    );
};

const Header: React.FC = () => {
  const { isVip, credits } = useUser();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-brand-gray/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-1.5 text-lg md:text-2xl font-bold text-brand-yellow">
          <DollarSignIcon className="w-6 h-6 md:w-7 md:h-7" />
          <span>BICO PREMIUM</span>
        </NavLink>
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-2">
            <NavItem to="/earn-now" icon={<BoltIcon className="w-5 h-5" />} label="Ganhe Agora" />
            <NavItem to="/opportunities" icon={<BarChartIcon className="w-5 h-5" />} label="Oportunidades" />
            <NavItem to="/calculator" icon={<LockIcon className="w-5 h-5" />} label="Calculadora" />
            <NavItem to="/guides" icon={<BookOpenIcon className="w-5 h-5" />} label="Guias Black" />
            <NavItem to="/referral" icon={<UsersIcon className="w-5 h-5" />} label="Indique e Ganhe" />
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="text-sm">
            <div className="font-bold">{isVip ? 'MEMBRO VIP' : 'MEMBRO FREE'}</div>
            <div className="text-gray-400">{credits} créditos</div>
          </div>
          {!isVip && (
            <button className="bg-brand-yellow text-brand-dark font-bold py-2 px-4 rounded-full hover:bg-yellow-300 transition-colors flex items-center gap-2 shadow-md shadow-brand-yellow/20">
              <BanknotesIcon className="w-5 h-5" />
              <span>Seja VIP</span>
            </button>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && <MobileMenu closeMenu={() => setIsMenuOpen(false)} />}
    </header>
  );
};

const App: React.FC = () => {
  return (
    <UserProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto p-4 md:p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/earn-now" element={<EarnNow />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/guides" element={<Guides />} />
              <Route path="/referral" element={<Referral />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </UserProvider>
  );
};

export default App;