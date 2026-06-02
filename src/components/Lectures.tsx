/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PHYSICS_TOPICS } from '../data';
import { Topic, Formula } from '../types';
import { 
  BookOpen, 
  Settings, 
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';

interface LecturesProps {
  onSelectTopicForExplain: (topicTitle: string) => void;
}

export const Lectures: React.FC<LecturesProps> = ({ onSelectTopicForExplain }) => {
  const [selectedGrade, setSelectedGrade] = useState<9 | 10 | 11 | 12 | 0>(0); // 0 means all
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(PHYSICS_TOPICS[0]);

  const filteredTopics = selectedGrade === 0 
    ? PHYSICS_TOPICS 
    : PHYSICS_TOPICS.filter(t => t.grade === selectedGrade);

  const handleTopicClick = (topic: Topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="space-y-6">
      {/* Intro Banner */}
      <div className="physics-glass-card p-6 md:p-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-40 w-40 opacity-10 bg-radial-gradient from-white to-transparent" />
        <div className="max-w-5xl">
          <span className="physics-badge physics-badge-cyan mb-3">
            <BookOpen className="h-3 w-3" /> PhysicsLabX Öğretim Metodu
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 italic">İnteraktif Konu Anlatım Merkezi</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Millî Eğitim Bakanlığı (MEB) lise düzeyi tüm kazanımları bir arada bulabilirsin. Bilgi, kavrama, analiz ve problem çözme sarmalıyla öğrenimini pekiştir.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation / Grade selection */}
        <div className="lg:col-span-4 space-y-4">
          <div className="physics-glass-card p-4">
            <h3 className="text-sm font-semibold text-slate-500 tracking-wider mb-3 uppercase">Sınıf Seviyeleri</h3>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Tüm Sınıflar', value: 0 },
                { label: '9. Sınıf Fizik', value: 9 },
                { label: '10. Sınıf Fizik', value: 10 },
                { label: '11. Sınıf Fizik', value: 11 },
                { label: '12. Sınıf Fizik', value: 12 },
              ].map((lvl) => (
                <button
                  key={lvl.value}
                  onClick={() => {
                    setSelectedGrade(lvl.value as any);
                    // Select first topic in filtered list as fallback
                    const list = lvl.value === 0 
                      ? PHYSICS_TOPICS 
                      : PHYSICS_TOPICS.filter(t => t.grade === lvl.value);
                    if (list.length > 0) setSelectedTopic(list[0]);
                  }}
                  className={`w-full text-left font-bold ${
                    selectedGrade === lvl.value 
                      ? 'physics-btn-primary' 
                      : 'physics-btn-secondary'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          <div className="physics-glass-card p-4">
            <h3 className="text-sm font-semibold text-slate-500 tracking-wider mb-3 uppercase">Ünite ve Konular</h3>
            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
              {filteredTopics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => handleTopicClick(topic)}
                  className={`w-full text-left p-3 rounded-lg border text-xs font-semibold transition-all ${
                    selectedTopic?.id === topic.id 
                      ? 'physics-list-item-active' 
                      : 'physics-list-item-inactive'
                  }`}
                >
                  <p className="text-[10px] text-cyan-400 tracking-wider uppercase mb-0.5 font-bold">{topic.unit}</p>
                  <p className="font-bold text-slate-200">{topic.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content detail panel */}
        <div className="lg:col-span-8">
          {selectedTopic ? (
            <div className="physics-glass-card p-6 md:p-8 space-y-6">
              {/* Header */}
              <div className="border-b border-slate-800 pb-5">
                <div className="flex items-center space-x-2 text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-1">
                  <span>{selectedTopic.grade}. Sınıf Kazanımları</span>
                  <span>•</span>
                  <span>{selectedTopic.unit}</span>
                </div>
                <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">{selectedTopic.title}</h1>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">{selectedTopic.description}</p>
              </div>

              {/* Summary conceptual info */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-300 flex items-center gap-1.5 font-serif py-1">
                  <BookOpen className="h-4 w-4 text-cyan-400" /> Konunun Özü
                </h3>
                <p className="physics-info-box p-4 text-slate-300 text-sm leading-relaxed select-text">
                  {selectedTopic.summary}
                </p>
              </div>

              {/* Key concepts with boxes */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-300 flex items-center gap-1.5 font-serif py-1">
                  <Award className="h-4 w-4 text-cyan-400" /> Temel Kavram ve Tanımlar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedTopic.keyConcepts.map((concept, idx) => (
                    <div key={idx} className="physics-info-box-cyan p-3 flex gap-2">
                      <div className="h-5 w-5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs text-slate-300 leading-normal select-text font-semibold">{concept}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formulas */}
              {selectedTopic.formulas.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-slate-300 flex items-center gap-1.5 font-serif py-1">
                    <TrendingUp className="h-4 w-4 text-cyan-400" /> Matematiksel Modelleme & Formüller
                  </h3>
                  <div className="space-y-3">
                    {selectedTopic.formulas.map((formula: Formula, idx) => (
                      <div key={idx} className="physics-info-box p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-white">{formula.name}</span>
                          <p className="text-xs text-slate-400 max-w-md">{formula.explanation}</p>
                          <span className="physics-badge physics-badge-cyan">Birim: {formula.unit}</span>
                        </div>
                        <div className="px-5 py-3.5 bg-slate-950 rounded-xl border border-dashed border-slate-850 text-center shadow-inner min-w-[140px]">
                          <span className="font-mono text-cyan-300 font-bold block select-all tracking-wider">{formula.formula}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA to AI explanation */}
              <div className="physics-info-box p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-cyan-400">Bu konuyu daha derin mi incelemek istiyorsun?</span>
                  <p className="text-[11px] text-slate-400">PhysicsLabX Yapay Zeka Fizik Öğretmeni, kazanımlarla uyumlu örnekler anlatmaya hazır.</p>
                </div>
                <button
                  onClick={() => onSelectTopicForExplain(selectedTopic.title)}
                  className="physics-btn-primary"
                >
                  <span>Öğretmene Sor</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 physics-glass-card text-slate-500">
              <Settings className="h-10 w-10 text-slate-600 animate-spin mb-3" />
              <p className="text-sm font-semibold">Lütfen bir fizik konusu seçiniz.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
