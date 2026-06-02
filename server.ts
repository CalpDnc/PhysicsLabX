import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Lazy load Google GenAI instance to prevent startup block if the key is empty
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined. Please configure it in your Secrets / .env file.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Endpoint - Yapay Zeka Fizik Öğretmeni
  app.post("/api/gemini/tutor", async (req, res) => {
    try {
      const { message, history, topicContext, isHintRequest } = req.body;

      const ai = getGenAI();

      let systemInstruction = `Sen Millî Eğitim Bakanlığı (MEB) lise fizik müfredatına (9, 10, 11 ve 12. sınıf) tam uyumlu eğitim veren, son derece cana yakın, teşvik edici ve öğretici bir lise fizik öğretmenisin. Adın "PhysicsLabX Yapay Zeka Fizik Öğretmeni".
      Önemli Kurallar:
      1. Öğrencilerin fiziksel büyüklükleri kavramasına, formüllerin mantığını hayattan örneklerle anlamasına yardımcı ol.
      2. Matematiksel modellemede formülleri açık yazıp değişkenlerin (örneğin m kütle, v hız, F kuvvet gibi) fiziksel birimlerini belirt.
      3. Cevaplarını dürüst, profesyonel, yapaylıktan uzak ve samimi bir dille yaz. Kesinlikle "online", "aktif", "sunucu" gibi teknik terimlerle larp yapma.
      4. Markdown formatını kullan. Önemli kelimeleri kalın (**), listeleri madde işaretiyle yap. Cevabını makul ölçüde kısa, net ve anlaşılır tut.
      5. MATEMATİKSEL VEYA FİZİKSEL BÜYÜKLÜKLERİ yazarken ASLA LaTeX (örneğin $...$, $$, \\text{...}, \\vec{...}, ^\\circ) kullanma! Bunun yerine herkesin rahatça okuyabileceği sade, temiz düz metin ve standart Unicode karakterler kullan (örneğin: '25°C', 'kg', 'F = m.a', 'v hız', 'G ağırlık', 'yer değiştirme Δx').`;

      if (isHintRequest) {
        systemInstruction += `\nKRİTİK GÖREV: Öğrenci bir soruda IPUCU istedi! Doğrudan doğru cevabı söyleme. Onu cevaba götürecek bir formülü hatırlat, mantığı sorgulat ve "Hadi bunu bir dene, yapabileceğine inanıyorum!" gibi motive edici bir dille yardımcı ol.`;
      }

      if (topicContext) {
        systemInstruction += `\nÖğrencinin şu an çalıştığı konu bağlamı: ${topicContext}`;
      }

      // Convert standard client-side history to contents expected by generateContent or chats
      // We will map custom chat history format to standard parts
      const contents = [];
      if (history && Array.isArray(history)) {
        for (const turn of history) {
          contents.push({
            role: turn.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: turn.content }]
          });
        }
      }
      
      // Append the latest user message
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      const text = response.text;
      res.json({ success: true, text });
    } catch (error: any) {
      console.error("Gemini API Error:", error.message);
      res.status(500).json({ 
        success: false, 
        error: error.message || "Gemini API çağrısı sırasında bir hata oluştu." 
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Serve static assets OR handle development with Vite
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
