/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Flame, 
  GraduationCap, 
  Atom, 
  Calculator, 
  Tv, 
  BrainCircuit,
  Sun,
  Moon
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  streak: number;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab, 
  streak,
  theme,
  toggleTheme
}) => {
  const navItems = [
    { id: 'dashboard', label: 'Genel Durum', icon: GraduationCap },
    { id: 'lectures', label: 'Konu Anlatımı', icon: Calculator },
    { id: 'simulations', label: 'Deney Laboratuvarı', icon: Atom },
    { id: 'quizzes', label: 'Ölçme & Değerlendirme', icon: BrainCircuit },
    { id: 'videos', label: 'Videolu Anlatım', icon: Tv },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12">
         <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              <Atom className="h-6 w-6 animate-pulse" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white italic">Physics<span className="text-cyan-400">LabX</span></span>
              <p className="text-[10px] font-semibold text-cyan-400/90 tracking-widest uppercase">MEB YENİ MÜFREDAT</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive ? 'physics-tab-active' : 'physics-tab-inactive'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Side stats: Daily Streak */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold shadow-[inset_0_0_8px_rgba(245,158,11,0.1)]">
              <Flame className="h-4 w-4 text-amber-500 fill-amber-500 animate-bounce" />
              <span className="hidden sm:inline">{streak} Günlük Çalışma Serisi</span>
              <span className="inline sm:hidden">{streak} Gün</span>
            </div>

            {/* Theme Toggle Switcher */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-slate-900/70 transition-all duration-200 cursor-pointer shadow-sm relative overflow-hidden group"
              aria-label="Temayı Değiştir"
              title={theme === 'dark' ? 'Aydınlık Mod' : 'Karanlık Mod'}
            >
              <div className="relative h-4 w-4 flex items-center justify-center">
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 text-cyan-400 animate-spin-slow transition-transform duration-300 group-hover:rotate-45" />
                ) : (
                  <Moon className="h-4 w-4 text-indigo-500 transition-transform duration-300 group-hover:-rotate-12" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
