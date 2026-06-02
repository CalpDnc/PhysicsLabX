/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Markdown from 'react-markdown';
import { QUIZ_QUESTIONS } from '../data';
import { QuizQuestion } from '../types';
import { 
  Check, 
  X, 
  HelpCircle, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  User,
  Printer
} from 'lucide-react';

interface QuizzesProps {
  onSuccessEarned: () => void;
}

const cleanLaTeX = (text: string): string => {
  if (!text) return "";
  
  // 1. Remove \text{...} wrappers keeping the inside
  let cleaned = text.replace(/\\text\{([^}]+)\}/g, "$1");
  
  // 2. Translate common LaTeX vectors like \vec{x} or \vec{F} or \Delta\vec{x}
  cleaned = cleaned.replace(/\\Delta\\vec\{([^}]+)\}/g, "Δ$1");
  cleaned = cleaned.replace(/\\vec\{([^}]+)\}/g, "$1");
  cleaned = cleaned.replace(/\\Delta\s*(\\vec)?/g, "Δ");
  cleaned = cleaned.replace(/\\quad/g, " ");
  
  // 3. Common symbols, e.g., ^\circ -> °
  cleaned = cleaned.replace(/\^\\circ/g, "°");
  cleaned = cleaned.replace(/\\Delta/g, "Δ");
  cleaned = cleaned.replace(/\\cdot/g, "·");
  cleaned = cleaned.replace(/\\times/g, "×");
  
  // 4. Clean up any remaining single dollar sign wrappers: $v$ -> v
  cleaned = cleaned.replace(/\$([^$]+)\$/g, "$1");
  
  return cleaned;
};

export const Quizzes: React.FC<QuizzesProps> = ({ onSuccessEarned }) => {
  const [selectedGrade, setSelectedGrade] = useState<9 | 10 | 11 | 12 | 0>(9); // 9-12 or 0 (all)
  const [selectedTest, setSelectedTest] = useState<number>(1); // 1, 2, or 3
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  // AI Hint State
  const [activeHint, setActiveHint] = useState<string | null>(null);
  const [hintLoading, setHintLoading] = useState(false);

  // Certificate State
  const [studentName, setStudentName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const getTestTitle = (grade: number, testId: number): string => {
    if (grade === 9) {
      if (testId === 1) return "Fizik Bilimine Giriş";
      if (testId === 2) return "Madde ve Özkütle";
      return "Hareket ve Kuvvet";
    }
    if (grade === 10) {
      if (testId === 1) return "Elektrik Akımı & Ohm";
      if (testId === 2) return "Elektriksel Güç & Mıknatıslar";
      return "Optik, Kırılma & Aynalar";
    }
    if (grade === 11) {
      if (testId === 1) return "Vektörler & Bağıl Hareket";
      if (testId === 2) return "Newton'ın Hareket Yasaları";
      return "Atışlar & Enerji";
    }
    if (grade === 12) {
      if (testId === 1) return "Düzgün Çembersel Hareket";
      if (testId === 2) return "Açısal Momentum & Kütleçekimi";
      return "Harmonik Hareket & Dalgalar";
    }
    // All (0)
    if (testId === 1) return "Kapsamlı Sınav - I";
    if (testId === 2) return "Kapsamlı Sınav - II";
    return "Kapsamlı Sınav - III";
  };

  // Filter questions
  const filteredQuestions = QUIZ_QUESTIONS.filter(q => {
    const matchGrade = selectedGrade === 0 || q.grade === selectedGrade;
    const matchTest = q.testId === selectedTest;
    return matchGrade && matchTest;
  });

  const currentQuestion: QuizQuestion | undefined = filteredQuestions[currentIdx];

  const handleOptionSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isSubmitted || !currentQuestion) return;

    setIsSubmitted(true);
    setTotalAnswered((prev) => prev + 1);
    
    const isCorrect = selectedOption === currentQuestion.correctAnswerIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      onSuccessEarned(); // Increment streak/success metric
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setActiveHint(null);
    if (currentIdx < filteredQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      // Completed last question option
      if (score >= Math.max(1, Math.floor(filteredQuestions.length * 0.6))) {
        setShowCertificate(true);
      } else {
        alert("Harika bir denemeydi! Sertifika kazanmak için en az %60 başarı oranına ulaşmalısın. Tekrar denemeye ne dersin?");
        // reset quiz
        setCurrentIdx(0);
        setScore(0);
        setTotalAnswered(0);
      }
    }
  };

  const handleGetAiHint = async () => {
    if (!currentQuestion || hintLoading) return;
    setHintLoading(true);
    setActiveHint(null);

    try {
      const response = await fetch('/api/gemini/tutor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Şu fizik sorusu için doğrudan cevabı söylemeden bana pedagojik, açıklayıcı bir ipucu verir misiniz?\nSoru: ${currentQuestion.text}\nHint İpucu: ${currentQuestion.hint}`,
          isHintRequest: true,
          topicContext: currentQuestion.topicId
        }),
      });

      if (!response.ok) throw new Error("Yapay zeka öğretmenine şu an ulaşılamıyor.");
      const data = await response.json();
      if (data.success) {
        setActiveHint(data.text);
      } else {
        throw new Error(data.error);
      }
    } catch (err: any) {
      console.error(err);
      setActiveHint(`Öğretmen İpucu: ${currentQuestion.hint}`);
    } finally {
      setHintLoading(false);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setTotalAnswered(0);
    setActiveHint(null);
    setShowCertificate(false);
  };

  const triggerPrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Grade Selector & Score Gauge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 physics-glass-card p-5">
        <div className="space-y-1">
          <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mb-1 block">ÖLÇME VE DEĞERLENDİRME</span>
          <div className="flex flex-wrap gap-1.5">
            {[
              { label: 'Tüm Müfredat', value: 0 },
              { label: '9. Sınıf', value: 9 },
              { label: '10. Sınıf', value: 10 },
              { label: '11. Sınıf', value: 11 },
              { label: '12. Sınıf', value: 12 },
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => {
                  setSelectedGrade(btn.value as any);
                  setCurrentIdx(0);
                  setSelectedOption(null);
                  setIsSubmitted(false);
                  setScore(0);
                  setTotalAnswered(0);
                  setActiveHint(null);
                  setShowCertificate(false);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  selectedGrade === btn.value 
                    ? 'physics-tab-active' 
                    : 'physics-tab-inactive'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 physics-info-box px-4 py-2.5 shrink-0">
          <TrendingUp className="h-5 w-5 text-cyan-400" />
          <div className="text-sm font-semibold">
            <span className="text-slate-400">Genel Skor: </span>
            <span className="text-cyan-400 font-extrabold">{score}</span> / <span className="text-slate-300 font-bold">{totalAnswered || filteredQuestions.length}</span>
            <p className="text-[9px] text-slate-400 font-medium tracking-wide">Doğru Cevap Oranı: {totalAnswered > 0 ? `${Math.round((score / totalAnswered) * 100)}%` : '0%'}</p>
          </div>
        </div>
      </div>

      {/* Test Selector (Test 1, Test 2, Test 3) */}
      <div className="physics-glass-card p-5 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="text-[10px] text-cyan-400 font-extrabold tracking-widest uppercase block">
            AKTİF SINAV SEÇİMİ (HER BİRİ 10 SORUDUR)
          </span>
          <span className="text-xs text-slate-400 font-semibold">
            Müfredat Seviyesi: <span className="text-white font-bold">{selectedGrade === 0 ? 'Tüm Sınıflar' : `${selectedGrade}. Sınıf`}</span>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[1, 2, 3].map((tId) => {
            const isActive = selectedTest === tId;
            const testTitle = getTestTitle(selectedGrade, tId);
            return (
              <button
                key={tId}
                onClick={() => {
                  setSelectedTest(tId);
                  setCurrentIdx(0);
                  setSelectedOption(null);
                  setIsSubmitted(false);
                  setScore(0);
                  setTotalAnswered(0);
                  setActiveHint(null);
                  setShowCertificate(false);
                }}
                className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'border-cyan-500/50 bg-cyan-950/20 text-cyan-200'
                    : 'border-slate-800 bg-slate-950/40 hover:bg-slate-900/60 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-[10px] font-black uppercase tracking-wider ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                    TEST {tId}
                  </span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </div>
                <span className={`text-xs font-bold mt-1.5 tracking-wide ${isActive ? 'text-slate-100 font-extrabold' : 'text-slate-400'}`}>
                  {testTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* CERTIFICATE DISPLAY OVERLAY */}
      {showCertificate ? (
        <div className="physics-glass-card bg-gradient-to-br from-amber-950/20 via-slate-900/40 to-slate-950/95 border-2 border-amber-500/20 p-6 md:p-10 text-center max-w-2xl mx-auto space-y-6">
          <div className="flex justify-center">
            <Award className="h-16 w-16 text-amber-500 animate-bounce" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-serif font-black text-amber-400 tracking-tight">Tebrikler, Fizik Başarı Sertifikasını Kazandın!</h2>
            <p className="text-xs text-amber-200 font-medium">Bakanlık müfredat testlerinde başarı eşiğini geçerek fizik bilimindeki yetkinliğini ispatladın.</p>
          </div>

          <div className="max-w-md mx-auto p-4 physics-info-box-amber space-y-3">
            <label className="block text-xs font-bold text-amber-300 uppercase tracking-widest text-left">Öğrenci Adı Soyadı</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Adınızı Soyadınızı girin..."
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="flex-1 physics-input"
              />
            </div>
          </div>

          {/* Actual Elegant Certificate Template */}
          {studentName && (
            <div id="print-certificate" className="border-4 double border-amber-500/40 p-6 md:p-8 bg-slate-950 text-slate-200 text-center rounded-xl space-y-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-[9px] font-extrabold text-cyan-400 tracking-widest">PHYSICSLABX AKADEMİSİ</span>
                <span className="text-[9px] font-bold text-slate-500">Belge No: PLX-{Date.now().toString().slice(-6)}</span>
              </div>
              <h3 className="font-serif font-bold text-lg md:text-xl text-amber-500">BAŞARI BELGESİ</h3>
              <p className="text-xs italic font-medium">Bu belge,</p>
              <h4 className="text-lg font-bold border-b border-slate-800 inline-block px-8 py-1 uppercase text-white font-serif tracking-wider">{studentName}</h4>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
                Lise Fizik Müfredatı kapsamında düzenlenen Ölçme, Değerlendirme ve Analiz testlerini üstün başarıyla tamamladığı için verilmiştir.
              </p>
              <div className="flex justify-between items-end pt-5 text-left text-[9px] text-slate-400 font-bold uppercase">
                <div>
                  <p>Tarih: {new Date().toLocaleDateString('tr-TR')}</p>
                  <p>Sistem Doğrulamalı</p>
                </div>
                <div className="text-right">
                  <p className="border-t border-slate-800 pt-1 text-slate-300 font-serif">PhysicsLabX Bilim Kurulu</p>
                  <p className="text-[7px]">Yapay Zeka Onay Mührü</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center gap-3">
            <button
              onClick={handleRestart}
              className="physics-btn-secondary"
            >
              Testi Sıfırla
            </button>
            {studentName && (
              <button
                onClick={triggerPrint}
                className="physics-btn-primary"
              >
                <Printer className="h-4 w-4" />
                <span>Yazdır / PDF Kaydet</span>
              </button>
            )}
          </div>
        </div>
      ) : currentQuestion ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Question detail box */}
          <div className="lg:col-span-8 physics-glass-card p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="physics-badge physics-badge-cyan">
                {currentQuestion.grade}. Sınıf
              </span>
              <span className="text-xs text-slate-400 font-semibold">Soru {currentIdx + 1} / {filteredQuestions.length}</span>
            </div>

            {/* Question description */}
            <div className="text-slate-200 font-semibold text-sm leading-relaxed p-4 physics-info-box select-text">
              <p>{currentQuestion.text}</p>
            </div>

            {/* Answer Options list */}
            <div className="space-y-2.5">
              {currentQuestion.options.map((opt, oIdx) => {
                const isSelected = selectedOption === oIdx;
                const isCorrectOption = oIdx === currentQuestion.correctAnswerIndex;
                
                let optionStyle = 'border-slate-800 bg-slate-950/20 hover:bg-slate-900/60 text-slate-300';
                if (isSelected && !isSubmitted) {
                  optionStyle = 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400';
                } else if (isSubmitted) {
                  if (isCorrectOption) {
                    optionStyle = 'border-emerald-500/60 bg-emerald-500/15 text-emerald-400 font-bold';
                  } else if (isSelected) {
                    optionStyle = 'border-rose-500/60 bg-rose-500/15 text-rose-400';
                  } else {
                    optionStyle = 'border-slate-900/50 bg-slate-950/10 text-slate-500';
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleOptionSelect(oIdx)}
                    disabled={isSubmitted}
                    className={`w-full text-left p-4 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between ${optionStyle}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`h-5 w-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 ${
                        isSelected ? 'bg-cyan-600 text-white' : 'bg-slate-900 text-slate-400'
                      }`}>
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span className="select-text">{opt}</span>
                    </div>

                    {isSubmitted && isCorrectOption && <Check className="h-4 w-4 text-emerald-400 shrink-0" />}
                    {isSubmitted && isSelected && !isCorrectOption && <X className="h-4 w-4 text-rose-500 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Submit & Navigation triggers */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
              {!isSubmitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedOption === null}
                  className="physics-btn-primary"
                >
                  Cevabı Gönder
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="physics-btn-secondary"
                >
                  <span>{currentIdx < filteredQuestions.length - 1 ? 'Sıradaki Soru' : 'Sonuçları Gör'}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* AI Helper column */}
          <div className="lg:col-span-4 space-y-4">
            {/* Real Teacher's Clue trigger */}
            <div className="physics-glass-card p-5 space-y-4">
              <h3 className="text-xs font-bold text-white flex items-center gap-1.5 uppercase tracking-wider">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span>PhysicsLabX AI İpucu</span>
              </h3>
              <p className="text-[11px] text-slate-400 leading-normal">
                Bu soruda zorlandın mı? Yapay Zeka Öğretmeninden doğrudan cevabı söylemeden seni çözüme ulaştıracak akıllı bir ipucu isteyebilirsin.
              </p>

              {activeHint ? (
                <div className="p-3.5 border border-cyan-500/25 rounded-xl bg-slate-950 text-xs text-slate-300 leading-relaxed shadow-inner">
                  <div className="markdown-body">
                    <Markdown>{cleanLaTeX(activeHint)}</Markdown>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleGetAiHint}
                  disabled={hintLoading || isSubmitted}
                  className="w-full physics-btn-secondary"
                >
                  {hintLoading ? (
                    <>
                      <div className="h-3 w-3 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                      <span>İpucu Hazırlanıyor...</span>
                    </>
                  ) : (
                    <>
                      <HelpCircle className="h-4 w-4 text-cyan-400" />
                      <span>Öğretmenden İpucu İste</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Answer analytical report once submitted */}
            {isSubmitted && (
              <div className="physics-glass-card bg-gradient-to-tr from-cyan-950/20 to-slate-950 p-5 border border-cyan-500/10 space-y-3">
                <h4 className="text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>Öğretmenin Çözüm Analizi</span>
                </h4>
                <div className="text-[11px] text-cyan-200 leading-relaxed space-y-1 select-text">
                  <p className="font-bold border-b border-slate-800 pb-1.5 text-white">
                    {selectedOption === currentQuestion.correctAnswerIndex
                      ? 'Harika! Doğru Seçenek.'
                      : 'Maalesef, doğru seçenek bu değildi. Çözümü inceleyerek öğrenmeye devam edelim:'}
                  </p>
                  <p className="pt-1 text-slate-300">{currentQuestion.solution}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center p-12 physics-glass-card">
          <p className="text-sm font-semibold text-slate-400">Bu sınıf için henüz hazırlanmış bir soru bulunmamaktadır.</p>
        </div>
      )}
    </div>
  );
};
