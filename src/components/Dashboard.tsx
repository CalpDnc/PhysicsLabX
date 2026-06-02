/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Atom, 
  Activity, 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Battery, 
  Layers 
} from 'lucide-react';

interface DashboardProps {
  streak: number;
  completedQuizzes: number;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSelectTopicForExplain: (topicTitle: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  streak, 
  completedQuizzes, 
  setActiveTab, 
  onSelectTopicForExplain 
}) => {
  return (
    <div className="space-y-8 select-none">
      
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-900 via-slate-900 to-cyan-950 p-6 md:p-10 text-white shadow-lg">
        {/* Glow Effects */}
        <div className="absolute right-0 top-0 h-96 w-96 opacity-10 bg-radial-gradient from-cyan-400 to-transparent blur-3xl" />
        
        <div className="relative z-10 max-w-5xl space-y-4">
          <span className="physics-badge physics-badge-cyan">
            TÜRKİYE YÜZYILI MAARİF MODELİ
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-black tracking-tight leading-none text-white">
            Akıl, Erdem ve Eylem Yoluyla <br className="hidden md:block"/>
            <span className="text-cyan-400">Fizik Dünyasını Keşfet</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
            PhysicsLabX Portalı, Millî Eğitim Bakanlığı yeni öğretim programıyla tam uyumlu, sarmal yaklaşımı temel alan, etkileşimli deney simülasyonları ve yapay zeka destekli rehber öğretmeni barındıran milli eğitim kapınızdır.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setActiveTab('lectures')}
              className="physics-btn-primary"
            >
              <span>Konuları İncele</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setActiveTab('simulations')}
              className="physics-btn-secondary"
            >
              <span>Deney Odasına Gir</span>
              <Atom className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Statistics widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Günlük Çalışma Serisi', val: `${streak} Gün`, desc: 'İstikrarlı çalışma ivmesi', color: 'text-amber-400', border: 'border-amber-500/20', bgGlow: 'bg-amber-500/10', ico: Activity },
          { label: 'Erişilen Fizik Üniteleri', val: '6 Detaylı Ünite', desc: '9, 10, 11 ve 12. Sınıf', color: 'text-cyan-400', border: 'border-cyan-500/20', bgGlow: 'bg-cyan-500/10', ico: BookOpen },
          { label: 'Mesafe Kat Edilen Test', val: `${completedQuizzes} Soru`, desc: 'Başarı puanı ve analiz', color: 'text-emerald-400', border: 'border-emerald-500/20', bgGlow: 'bg-emerald-500/10', ico: Award },
          { label: 'Deney Laboratuvarı', val: '3 Aktif Simülasyon', desc: 'Optik, Atış, Ohm Yasası', color: 'text-purple-400', border: 'border-purple-500/20', bgGlow: 'bg-purple-500/10', ico: GraduationCap },
        ].map((itm, idx) => {
          const Icon = itm.ico;
          return (
            <div key={idx} className="physics-glass-card p-5 space-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-16 w-16 opacity-10 bg-radial-gradient from-slate-400 to-transparent blur-xl" />
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">{itm.label}</span>
                <Icon className={`h-5 w-5 ${itm.color}`} />
              </div>
              <p className="text-xl font-extrabold text-white leading-tight">{itm.val}</p>
              <p className="text-[10px] text-slate-400 font-medium">{itm.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Curriculum grade card pathways */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-300 tracking-wide flex items-center gap-1.5 uppercase">
          <BookOpen className="h-4 w-4 text-cyan-400" />
          <span>Sınıf Seviyelerine Göre Müfredat Yolculuğu</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { grade: '9. Sınıf Fizik', path: 'Fiziksel Nicelikler & Sabit Hızlı Hareket', desc: 'Madde özellikleri ve fiziğin temellerine adım atın.', icon: Compass, color: 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20' },
            { grade: '10. Sınıf Fizik', path: 'Elektrik Akımı & Işığın Kırılması (Optik)', desc: 'Ohm kanununu ve dalga kırınımlarını simüle edin.', icon: Layers, color: 'text-rose-400 bg-rose-500/10 border border-rose-500/20' },
            { grade: '11. Sınıf Fizik', path: 'Sürtünmesiz Eğik Atış ve Newton Kuvvetleri', desc: 'Vektörlerin gücüyle iki boyutlu hareket fiziğini çözün.', icon: Atom, color: 'text-amber-400 bg-amber-500/10 border border-amber-500/20' },
            { grade: '12. Sınıf Fizik', path: 'Düzgün Çembersel Hareket & Modern Fizik', desc: 'Dönme dinamiği ve evrenin modern yapısını öğrenin.', icon: Battery, color: 'text-purple-400 bg-purple-500/10 border border-purple-500/20' },
          ].map((card, cidx) => {
            const CircleIco = card.icon;
            return (
              <div 
                key={cidx} 
                className="physics-card-interactive p-5 flex items-start gap-4 cursor-pointer"
                onClick={() => setActiveTab('lectures')}
              >
                <div className={`p-3 rounded-xl ${card.color}`}>
                  <CircleIco className="h-6 w-6" />
                </div>
                <div className="space-y-1 flex-1">
                  <h4 className="text-sm font-extrabold text-white">{card.grade}</h4>
                  <p className="text-xs text-slate-300 font-semibold leading-snug">{card.path}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI banner highlight trigger */}
      <div className="physics-glass-card p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="text-sm font-extrabold text-white flex items-center gap-1.5">
            <Sparkles className="h-4.5 w-4.5 text-cyan-400" />
            <span>Kafana Takılan Bir Fizik Problemi mi Var?</span>
          </h4>
          <p className="text-xs text-slate-400 font-semibold">
            Formülleri, soruları veya kavramları "PhysicsLabX Akademik Destek Rehberine" sorarak anında, sarmal anlatımlı cevaplar al.
          </p>
        </div>
        <button
          onClick={() => setActiveTab('tutor')}
          className="physics-btn-primary shrink-0"
        >
          Çözüm Öğretmenine Danış
        </button>
      </div>
    </div>
  );
};
