/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';
import { 
  Send, 
  Sparkles, 
  User, 
  HelpCircle, 
  AlertCircle,
  RotateCcw,
  BookOpen
} from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AITutorProps {
  initialTopic?: string;
}

const PRESET_PROMPTS = [
  'Eğik atışta havada kalma süresi neye bağlıdır?',
  'Ohm Kanununu günlük hayat örnekleriyle anlatır mısınız?',
  'Işığın kırılması ve Snell yasasını basit bir dille açıklar mısınız?',
  'Fizikte skaler ve vektörel büyüklüklerin farkı nedir?'
];

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

export const AITutor: React.FC<AITutorProps> = ({ initialTopic }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Merhaba geleceğin bilim insanı! ⚡\n\nBen senin **PhysicsLabX Yapay Zeka Fizik Öğretmeninim**. Millî Eğitim Bakanlığı (MEB) müfredatına uygun olarak, her türlü fizik sorunu çözmek veya konu anlatımı yapmak için buradayım.\n\nSana hangi konuda yardımcı olabilirim? Aşağıdaki hazır sorulardan birini seçebilir veya aklına takılan soruyu doğrudan yazabilirsin!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState('Düşünceler toparlanıyor...');
  const [err, setErr] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const loadingPhrases = [
    'Newton yasaları hesaplanıyor...',
    'Vektörler bileşenlerine ayrılıyor...',
    'Snell bağıntıları çözümleniyor...',
    'PhysicsLabX yapay zeka süzgecinden geçiriliyor...',
    'Cevap kağıdı hazırlanıyor...'
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        const randomPhrase = loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)];
        setLoadingPhrase(randomPhrase);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  // If initialTopic changes, inject a request
  useEffect(() => {
    if (initialTopic) {
      handleSend(null, `Bana "${initialTopic}" konusunu Millî Eğitim Bakanlığı müfredatına uygun olarak formülleriyle ve örnekleriyle detaylıca anlatabilir misiniz?`);
    }
  }, [initialTopic]);

  const handleSend = async (e: React.FormEvent | null, textToSend?: string) => {
    if (e) e.preventDefault();
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const updatedMessages = [...messages, { role: 'user' as const, content: query }];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);
    setErr(null);
    setLoadingPhrase(loadingPhrases[0]);

    try {
      const response = await fetch('/api/gemini/tutor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: query,
          history: updatedMessages.slice(0, -1), // Send previous history for continuation
          topicContext: initialTopic
        }),
      });

      if (!response.ok) {
        throw new Error('Öğretmeniniz sınıfa girmekte gecikti. Lütfen bağlantınızı kontrol edip tekrar deneyin.');
      }

      const data = await response.json();
      if (data.success) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.text }]);
      } else {
        throw new Error(data.error || 'Gemini API yanıt vermedi.');
      }
    } catch (error: any) {
      console.error(error);
      setErr(error.message || 'Bir hata oluştu.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        role: 'assistant',
        content: 'Merhaba! Sohbeti sıfırladık. Kafandaki yeni soruyu duymak için sabırsızlanıyorum! 🚀'
      }
    ]);
    setErr(null);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] max-h-[750px] rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md overflow-hidden shadow-xl relative z-10">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-cyan-950/80 to-slate-900/90 text-white border-b border-slate-850 shadow-md">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <Sparkles className="h-5 w-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-wide italic">PhysicsLabX Özel Yapay Zeka Fizik Öğretmeni</h3>
            <p className="text-[10px] text-cyan-400 font-semibold tracking-wider uppercase">Bireyselleştirilmiş Akademik İşbirlikçi</p>
          </div>
        </div>
        <button 
          onClick={handleReset}
          className="flex items-center space-x-1 px-2.5 py-1 text-xs font-bold rounded-lg hover:bg-white/10 active:bg-white/20 transition-all border border-slate-700 bg-slate-950/40 text-slate-300"
        >
          <RotateCcw className="h-3 w-3" />
          <span>Sohbeti Sıfırla</span>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, idx) => {
          const isUser = msg.role === 'user';
          return (
            <div 
              key={idx} 
              className={`flex items-start gap-3 max-w-[85%] ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
            >
              {/* Avatar */}
              <div className={`flex h-8 w-8 items-center justify-center rounded-full shrink-0 shadow-lg ${
                isUser ? 'bg-cyan-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'
              }`}>
                {isUser ? <User className="h-4 w-4" /> : <BookOpen className="h-4 w-4 text-cyan-400" />}
              </div>

              {/* Box */}
              <div className={`rounded-2xl px-4 py-3 text-sm shadow-md ${
                isUser 
                  ? 'bg-cyan-600 text-white rounded-tr-xs shadow-[0_0_15px_rgba(6,182,212,0.25)]' 
                  : 'bg-slate-950/70 text-slate-100 border border-slate-800 rounded-tl-xs'
              }`}>
                <div className="markdown-body select-text leading-relaxed prose prose-sm max-w-none">
                  <Markdown>{cleanLaTeX(msg.content)}</Markdown>
                </div>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-start gap-3 mr-auto max-w-[85%]">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-slate-300 border border-slate-800 animate-bounce">
              <BookOpen className="h-4 w-4 text-cyan-400" />
            </div>
            <div className="bg-slate-950/70 border border-slate-850 rounded-2xl rounded-tl-xs px-4 py-3 text-slate-400 text-sm flex items-center space-x-3 shadow-md">
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="h-2 w-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="h-2 w-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span className="italic text-xs text-slate-400 font-semibold">{loadingPhrase}</span>
            </div>
          </div>
        )}

        {err && (
          <div className="flex items-center space-x-2 p-3 text-sm rounded-xl bg-red-950/40 border border-red-900/50 text-red-300 max-w-lg mx-auto shadow-lg">
            <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />
            <span>{err}</span>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Preset suggestions */}
      {messages.length === 1 && (
        <div className="px-6 py-2 bg-slate-950/50 border-t border-slate-850">
          <p className="text-xs font-bold text-slate-500 mb-1.5 flex items-center gap-1 uppercase tracking-wider">
            <HelpCircle className="h-3 w-3 text-cyan-400" /> Hızlı Öğrenme Önerileri:
          </p>
          <div className="flex flex-wrap gap-1.5 pb-2">
            {PRESET_PROMPTS.map((prompt, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleSend(null, prompt)}
                className="text-[11px] bg-slate-900/60 border border-slate-800/80 text-slate-300 px-3 py-1.5 rounded-lg hover:border-cyan-500/50 hover:bg-slate-850/60 hover:text-cyan-400 transition-all font-bold"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={(e) => handleSend(e)} className="p-4 bg-slate-950/60 border-t border-slate-850/80 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Fizik öğretmeninize sorun... (Örn: Newton yasaları, Eğik atış)"
          className="flex-1 physics-input"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="flex items-center justify-center p-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white disabled:opacity-50 disabled:bg-slate-800 font-bold transition-all shadow-md shadow-cyan-900/30"
          disabled={!input.trim() || isLoading}
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
};
