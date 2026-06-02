/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { Lectures } from './components/Lectures';
import { Simulations } from './components/Simulations';
import { Quizzes } from './components/Quizzes';
import { Videos } from './components/Videos';
import { AITutor } from './components/AITutor';
import { 
  GraduationCap, 
  HelpCircle, 
  Settings2 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [streak, setStreak] = useState<number>(3); // Standard default mock score
  const [completedQuizzes, setCompletedQuizzes] = useState<number>(1);
  const [explainTopicContext, setExplainTopicContext] = useState<string>('');
  
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    }
    return 'dark';
  });

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const handleSelectTopicForExplain = (topicTitle: string) => {
    setExplainTopicContext(topicTitle);
    setActiveTab('tutor');
  };

  const handleSuccessEarned = () => {
    setCompletedQuizzes((prev) => prev + 1);
    // 50% chance to award extra streak day
    if (Math.random() > 0.5) {
      setStreak((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-cyan-950 selection:text-cyan-200 font-sans relative overflow-x-hidden transition-colors duration-300">
      {/* Background Glows and Radial Pattern */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#94a3b8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-cyan-400/[0.03] rounded-full blur-[120px] pointer-events-none transition-all duration-300" />
      <div className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-purple-500/[0.02] rounded-full blur-[140px] pointer-events-none transition-all duration-300" />

      {/* Top Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab !== 'tutor') {
            setExplainTopicContext(''); // reset topic when moving away from AI
          }
        }} 
        streak={streak} 
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1650px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-8 relative z-10">
        
        {/* Render Active View Segment */}
        {activeTab === 'dashboard' && (
          <Dashboard 
            streak={streak} 
            completedQuizzes={completedQuizzes} 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onSelectTopicForExplain={handleSelectTopicForExplain}
          />
        )}

        {activeTab === 'lectures' && (
          <Lectures onSelectTopicForExplain={handleSelectTopicForExplain} />
        )}

        {activeTab === 'simulations' && (
          <Simulations />
        )}

        {activeTab === 'quizzes' && (
          <Quizzes onSuccessEarned={handleSuccessEarned} />
        )}

        {activeTab === 'videos' && (
          <Videos />
        )}

        {activeTab === 'tutor' && (
          <AITutor initialTopic={explainTopicContext} />
        )}

      </main>

      {/* Bottom Footer block */}
      <footer className="border-t border-slate-800 bg-slate-900/40 backdrop-blur-md py-6 mt-12 relative z-10">
        <div className="max-w-[1650px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs font-semibold uppercase tracking-wider">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-5 w-5 text-cyan-500" />
            <span className="text-slate-400">© {new Date().getFullYear()} PhysicsLabX</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-slate-300 transition-colors flex items-center gap-1"><HelpCircle className="h-3.5 w-3.5" /> Yardım & Destek</a>
            <span className="text-slate-800">|</span>
            <span className="flex items-center gap-1 text-cyan-400 font-bold"><Settings2 className="h-3.5 w-3.5" /> MEB Sınav Modeli Uyumlu</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
