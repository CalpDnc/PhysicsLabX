# 🪐 PhysicsLabX: İnteraktif Fizik Simülasyonu ve Yapay Zekâ Eğitmeni

**PhysicsLabX**, Türkiye Yüzyılı Maarif Modeli fizik müfredatı göz önünde bulundurularak kurgulanmış; öğrencilerin, öğretmenlerin ve fizik meraklılarının karmaşık fiziksel olguları görselleştirip deneyimleyebileceği, yapay zekâ destekli üst düzey bir interaktif öğrenme ve laboratuvar platformudur.

Kullanıcı arayüzü son derece geniş ekranlara adanmış (**1650px maksimum genişlik**), modern bento-grid yerleşimine sahip ve **Dinamik Aydınlık / Karanlık Tema** desteğiyle optimize edilmiştir.

---

## ✨ Öne Çıkan Özellikler

### 1. 🌌 İnteraktif Fizik Simülasyonları (`Simulations.tsx`)
Fizik kurallarını gerçek zamanlı matematiksel modellerle simüle eden laboratuvar araçları:
- **Basit Sarkaç Periyodu**: Kütle, ip uzunluğu, yerçekimi ivmesi ve salınım açısını değiştirerek periyot hesaplaması yapın ve enerji korunumu grafiklerini izleyin.
- **Kepler Gezegen Yörünge Mekaniği**: Eliptik yörüngelerdeki gezegenlerin dönüş hızlarını, yarıçaplarını ve çekim kuvvetlerini gerçek zamanlı görselleştirin.
- **Lazer ve Kırılma İndisi**: Farklı ortamlar arası ışık geçişlerini, kritik sınır açılarını ve *Lazer Kromatik Dispersiyon Kaymasını* inceleyin.
- Diğer mekanik, elektromanyetizma ve dalga simülasyonları.

### 2. 🧠 Gemini Destekli Yapay Zekâ Fizik Mentörü (`AITutor.tsx`)
- Fizik formülleri, teorileri ve adımlı soru çözümleri için özelleştirilmiş, gerçek zamanlı AI asistanı.
- Konu Anlatımı üzerinden seçilen konuları doğrudan asistan bağlamına aktarabilme desteği.

### 3. 📝 Konu Anlatımları ve Formül Kartları (`Lectures.tsx`)
- MEB müfredatıyla %100 uyumlu, görsel şemalarla desteklenmiş 11. ve 12. Sınıf fizik konuları.
- Formüller üzerindeki değişkenleri interaktif olarak kurcalama ve etkilerini anlık izleme panelleri.

### 4. 🎯 Akıllı Tarama Sınavları (`Quizzes.tsx`)
- Fizik konularını pekiştirecek, yanlış cevaplandığında detaylı çözümler sunan çoktan seçmeli test yapısı.
- Günlük çalışma serisi (**Daily Streak**) entegrasyonu ile motivasyon artırıcı gamifikasyon sistemi.

### 5. 🌗 Premium Çift Tema ve Gelişmiş UI
- **Aydınlık / Karanlık Tema**: Göz sağlığını ve laboratuvar netliğini koruyan, tüm komponent ve grafiklerle kusursuz çalışan esnek CSS değişken mimarisi.
- **Genişletilmiş Görüş Alanı (Max-Width 1650px)**: Laboratuvar araçları ve grafik analizleri için sağa ve sola doğru genişleyen, bento-grid tasarımlı derinlikli yerleşim.

---

## 🛠️ Kullanılan Teknolojiler

- **Frontend Framework**: React 18+ & TypeScript
- **Derleme Aracı**: Vite
- **Stil Yönetimi**: Tailwind CSS v4 & Özel Glassmorphic Animasyon Katmanları
- **İkon Seti**: Lucide React
- **Veri Görselleştirme**: Recharts & D3.js (Grafikler ve Canlı Analitikler için)
- **Sunucu & Derleme**: Node.js & Express (Full-Stack mimari için Vite Middleware entegrasyonu)

---

## 🚀 Başlangıç ve Kurulum

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

### 1. Depoyu Klonlayın
```bash
git clone https://github.com/kullanici_adi/physicslabx.git
cd physicslabx
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Çevre Değişkenleri Kurulumu
Projenin kök dizininde bulunan `.env.example` dosyasını `.env` olarak kopyalayın ve asistan özellikleri için Gemini API anahtarınızı girin:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```
Sunucu varsayılan olarak `http://localhost:3000` portunda çalışacaktır.

### 5. Production Yapısını Oluşturma ve Çalıştırma
```bash
npm run build
npm start
```

---

## 📐 Tasarım ve UI Yaklaşımı

PhysicsLabX, tasarım disiplininde sadeliği ve işlevselliği ön planda tutar:
- **Tonal Arayüz**: Karanlık modda derin uzay ve laboratuvar hissi için kömür ve gece mavisi tonları; aydınlık modda temiz parşömen ve cam (glassmorphism) efektleri tercih edilmiştir.
- **Akıcı Animasyonlar**: Butonlar, geçişler ve simülasyon adımları yumuşak CSS geçişleri ile desteklenmiştir.
- **Erişilebilirlik**: Tüm renk şemaları kontrast kurallarına ve yüksek okunabilirliğe uygun olacak şekilde ayarlanmıştır.

---

💫 *PhysicsLabX, fizik öğrenmeyi teoriden çıkarıp dokunulabilir, değiştirilebilir ve derinlemesine anlaşılabilir interaktif bir serüvene dönüştürür.*
