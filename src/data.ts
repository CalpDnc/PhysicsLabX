/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Topic, QuizQuestion, VideoLecture } from './types';

export const PHYSICS_TOPICS: Topic[] = [
  // 9. Sınıf
  {
    id: '9-fizik-giris',
    grade: 9,
    unit: '1. Ünite: Fizik Bilimine Giriş',
    title: 'Fiziksel Niceliklerin Sınıflandırılması',
    description: 'Temel ve türetilmiş büyüklükler, vektörel ve skaler nicelikler, fizikteki ölçme bilimleri ve birim sistemleri.',
    summary: 'Fizik evrendeki olayları anlamlandırmaya çalışan gözlem ve deneye dayalı bir bilim dalıdır. Fiziksel büyüklükler kendilerini ifade etme biçimlerine göre Temel ve Türetilmiş olarak ikiye ayrılır. Ayrıca yön bilgisi barındırıp barındırmamalarına göre Skaler ve Vektörel olarak sınıflandırılırlar.',
    keyConcepts: [
      'Temel Büyüklükler (KISAMASS: Kütle, Işık Şiddeti, Sıcaklık, Akım Şiddeti, Madde Miktarı, Uzunluk, Zaman)',
      'Türetilmiş Büyüklükler (Kuvvet, Sürat, Enerji, Basınç, Elektriksel Potansiyel)',
      'Skaler Büyüklük (Yalnızca sayı ve birimle ifade edilenler)',
      'Vektörel Büyüklük (Sayı ve birimin yanında yön ve doğrultu barındıranlar - Kuvvet, Hız, İvme)'
    ],
    formulas: [
      {
        name: 'Kütle-Hacim İlişkisi (Özkütle)',
        formula: 'd = m / V',
        unit: 'g/cm³ veya kg/m³',
        explanation: 'Özkütle (d), birim hacimdeki (V) madde miktarının (m) ağırlığıdır. Maddeler için ayırt edici bir özelliktir.'
      }
    ]
  },
  {
    id: '9-hareket-kuvvet',
    grade: 9,
    unit: '2. Ünite: Hareket ve Kuvvet',
    title: 'Tek Boyutta Sabit Hızlı Hareket',
    description: 'Konum, alınan yol, yer değiştirme, sürat ve hız kavramlarının farkları ve aralarındaki matematiksel modeller.',
    summary: 'Hareket, seçilen bir referans noktasına göre konumun zamanla değişmesidir. Yer değiştirme yönlü bir büyüklükken (vektörel), alınan yol doğrultudan bağımsızdır (skaler). Sabit hızlı harekette hız ile sürat büyüklük olarak birbirine eşit olabilir ancak doğrusal olmayan yörüngelerde farklılık gösterirler.',
    keyConcepts: [
      'Referans Noktası (Hareketi tanımlamak için seçilen sabit nokta)',
      'Konum (Referans noktasından cismin bulunduğu yere çizilen yönlü uzaklık)',
      'Yer Değiştirme (Δx: Son konum ile ilk konum arasındaki en kısa yönlü mesafe)',
      'Sürat (Birim zamanda alınan toplam yol / Skaler)',
      'Hız (Birim zamandaki yer değiştirme / Vektörel)'
    ],
    formulas: [
      {
        name: 'Ortalama Hız',
        formula: 'v = Δx / Δt',
        unit: 'm/s',
        explanation: 'Ortalama hız (v), yapılan net yer değiştirmenin (Δx) geçen toplam süreye (Δt) oranıdır.'
      },
      {
        name: 'Ortalama Sürat',
        formula: 'Sürat = Alınan Yol / Geçen Zaman',
        unit: 'm/s',
        explanation: 'Sürat, hareketlinin izlediği yörüngenin uzunluğunun (alınan yol) geçen süreye oranıdır.'
      }
    ]
  },
  // 10. Sınıf
  {
    id: '10-elektrik',
    grade: 10,
    unit: '1. Ünite: Elektrik ve Manyetizma',
    title: 'Akım, Direnç ve Ohm Kanunu',
    description: 'Elektrik akımının oluşumu, direnç kavramı, iletkenlerin direncinin bağlı olduğu değişkenler ve Ohm Yasası.',
    summary: 'Elektrik akımı, iletken bir telin kesitinden bir yönde geçen net yük miktarının zamana oranıdır. İletken bir telin uçları arasındaki potansiyel farkının (gerilim) içinden geçen akıma oranı sabittir. Bu sabit değere iletkenin elektriksel direnci denir ve Ohm Kanunu olarak bilinir.',
    keyConcepts: [
      'Elektrik Akımı (I: Birim zamanda geçen yük miktarı, Ampermetre ile ölçülür)',
      'Voltaj (V: Potansiyel fark, Voltmetre ile ölçülür ve devreye paralel bağlanır)',
      'Ohm Yasası (Bir iletkenin uçlarındaki gerilim ile üzerinden geçen akım doğru orantılıdır)',
      'Özdirenç (ρ: Maddenin elektrik akımına karşı gösterdiği iç zorluk)'
    ],
    formulas: [
      {
        name: 'Ohm Kanunu',
        formula: 'V = I · R',
        unit: 'V (Volt) = A(Amper) · Ω(Ohm)',
        explanation: 'Bir devredeki gerilim (V), devreden geçen akım (I) ile devrenin eşdeğer direncinin (R) çarpımına eşittir.'
      },
      {
        name: 'İletkenin Direnci',
        formula: 'R = ρ · (L / A)',
        unit: 'Ω (Ohm)',
        explanation: 'Bir iletkenin direnci; öz direnci (ρ) ve boyu (L) ile doğru, kesit alanı (A) ile ters orantılıdır.'
      }
    ]
  },
  {
    id: '10-optik',
    grade: 10,
    unit: '4. Ünite: Optik',
    title: 'Işığın Kırılması ve Snell Yasası',
    description: 'Işığın saydam bir ortamdan diğerine geçerken doğrultu değiştirmesi, kırılma indisi ve sınır açısı kuralları.',
    summary: 'Işık, hızı farklı olan iki saydam ortam sınırına ulaştığında doğrultusunu değiştirir. Bu olaya kırılma denir. Ortamların kırılma indisleri ışığın o ortamdaki yayılma hızıyla ters orantılıdır. Çok yoğun ortamdan az yoğun ortama geçen ışınlar için belirli bir sınır açısı bulunur, bu açının üzerindeki açılarla gelen ışık tam yansımaya uğrar.',
    keyConcepts: [
      'Kırılma İndisi (n: Işığın boşluktaki hızının ortamdaki ortalama hızına oranı)',
      'Gelen ve Kırılan Işın (Normal ile yapılan gelme açısı i, kırılma açısı r)',
      'Sınır Açısı (Çok yoğun ortamdan az yoğun ortama geçerken kırılma açısının 90° olduğu gelme açısı)',
      'Tam Yansıma (Sınır açısından daha büyük açıyla gelen ışığın az yoğun ortama geçemeyip tamamen geri dönmesi)'
    ],
    formulas: [
      {
        name: 'Kırılma İndisi Modeli',
        formula: 'n = c / v',
        unit: 'Birimsimdir',
        explanation: 'Kırılma indisi (n), ışığın boşluktaki hızının (c) ortam içerisindeki hızına (v) oranıdır. n daima ≥ 1.'
      },
      {
        name: 'Snell Yasası',
        formula: 'n₁ · sin(θ₁) = n₂ · sin(θ₂)',
        unit: 'Açısal Model',
        explanation: 'Ortamın kırılma indisi ile o ortamdaki açının sinüsü çarpımları iki ortam için eşittir. Yoğun ortamda açı küçülür.'
      }
    ]
  },
  // 11. Sınıf
  {
    id: '11-kuvvet-hareket',
    grade: 11,
    unit: '1. Ünite: Kuvvet ve Hareket',
    title: 'İki Boyutta Hareket - Eğik Atış',
    description: 'Yatay ve düşey doğrultuda bağımsız hareketler analizi, havada kalma süresi, maksimum yükseklik ve menzil hesabı.',
    summary: 'Yerçekimi etkisinde yatayla belli bir açı yapacak şekilde fırlatılan cisimlerin hareketidir. Eğik atış hareketi, yatay doğrultuda sabit hızlı hareket (çünkü yatayda kuvvet yoktur) ve düşey doğrultuda aşağıdan yukarıya düşey atış hareketinin (yerçekimi ivmeli sabit ivmeli hareket) birleşimidir.',
    keyConcepts: [
      'Hız Bileşenleri (Yatay hız Vx sabit kalır; Düşey hız Vy yerçekimi ivmesiyle saniyede 10 m/s hız kaybeder/kazanır)',
      'Maksimum Yükseklik (Düşey hızın sıfır olduğu tepe noktası)',
      'Uçuş Süresi (Yükselme ve düşme sürelerinin toplamı, sadece düşey ilk hıza ve g ivmesine bağlıdır)',
      'Yatay Menzil (Uçuş süresi boyunca yatay hız ile alınan maksimum yol)'
    ],
    formulas: [
      {
        name: 'Yatay ve Düşey Hız Bileşenleri',
        formula: 'V₀ₓ = V₀ · cos(θ), V₀ᵧ = V₀ · sin(θ)',
        unit: 'm/s',
        explanation: 'V₀ ilk hızının yatay (V₀ₓ) ve düşey (V₀ᵧ) bileşenleri trigonometrik fonksiyonlarla hesaplanır.'
      },
      {
        name: 'Maksimum Yükseklik (h_max)',
        formula: 'h_max = (V₀ᵧ)² / (2g)',
        unit: 'm',
        explanation: 'Tepe noktasında düşey hız sıfırlanır, cismin yükselebileceği tepe noktası düşey hızının karesiyle doğru orantılıdır.'
      },
      {
        name: 'Menzil Uzaklığı (X)',
        formula: 'X = V₀ₓ · t_uçuş',
        unit: 'm',
        explanation: 'Sürtünmesiz ortamda yatayda net kuvvet sıfır olduğundan yatay hız hiç değişmez ve menzil bu hızla bulunulur.'
      }
    ]
  },
  // 12. Sınıf
  {
    id: '12-cembersel-hareket',
    grade: 12,
    unit: '1. Ünite: Çembersel Hareket',
    title: 'Düzgün Çembersel Hareket',
    description: 'Sabit süratle dairesel yörüngede dönen cisimlerin çizgisel hızı, açısal hızı, merkezcil ivmesi ve merkezcil kuvveti.',
    summary: 'Düzgün çembersel hareket yapan bir cismin hızının büyüklüğü (sürati) sabittir ancak hızın yönü sürekli değiştiği için hareket ivmelidir. Bu ivmeye daima merkeze doğru yönelmiş olan Merkezcil İvme denir. Bu ivmeyi oluşturan net kuvvete ise Merkezcil Kuvvet adı verilir.',
    keyConcepts: [
      'Periyot (T: Bir tam tur için geçen zaman/saniye)',
      'Frekans (f: Bir saniyedeki tur sayısı/Hertz)',
      'Çizgisel Hız (v: Dairesel yörüngede teğet olan anlık hız vektörü)',
      'Açısal Hız (ω: Birim zamanda taranan radyan cinsinden açı değeri)',
      'Merkezcil Kuvvet (Cismi yörüngede tutan merkeze yönelik net bileşke kuvvet)'
    ],
    formulas: [
      {
        name: 'Çizgisel ve Açısal Hız İlişkisi',
        formula: 'v = ω · r = (2π · r) / T',
        unit: 'm/s',
        explanation: 'Çizgisel hız (v), açısal hız (ω) ile dönme yarıçapının (r) çarpımına eşittir.'
      },
      {
        name: 'Merkezcil İvme',
        formula: 'a_mer = v² / r = ω² · r',
        unit: 'm/s²',
        explanation: 'Merkezcil ivme yönü her an merkeze doğrudur. Hızın yönündeki değişim oranını ifade eder.'
      },
      {
        name: 'Merkezcil Kuvvet',
        formula: 'F_mer = m · v² / r = m · ω² · r',
        unit: 'N (Newton)',
        explanation: 'Cismin dairesel hareket yapmasını sağlayan kuvvettir. Sürtünme, ip gerilmesi ya da kütleçekimi bu rolü üstlenebilir.'
      }
    ]
  }
];

export { QUIZ_QUESTIONS } from './questions';

export const VIDEO_LECTURES: VideoLecture[] = [
  {
    id: 'vid-9-1',
    grade: 9,
    title: 'Sabit Hızlı Hareket ve Grafikler',
    topic: 'Hareket ve Kuvvet',
    videoId: 'O2aT0bO7tY4', // VIP Fizik 9. Sınıf Hareket ve Kuvvet
    author: 'VIP Fizik - MEB Destekli',
    duration: '21:45'
  },
  {
    id: 'vid-10-1',
    grade: 10,
    title: 'Ohm Yasası ve Eşdeğer Direnç',
    topic: 'Elektrik ve Manyetizma',
    videoId: 'q_S9JqYtM8s', // Fizikle Barış - Elektrik Akımı ve Ohm Kanunu
    author: 'Fizikle Barış Öğretmen',
    duration: '28:10'
  },
  {
    id: 'vid-10-2',
    grade: 10,
    title: 'Işığın Kırılması ve Su Deposu Deneyi',
    topic: 'Optik',
    videoId: 'Uat3uK7_Ysc', // Özcan Aykın - Işığın Kırılması
    author: 'Özcan Aykın Fizik EBA',
    duration: '25:30'
  },
  {
    id: 'vid-11-1',
    grade: 11,
    title: 'İki Boyutta Hareket: Eğik Atış Analizi',
    topic: 'Kuvvet ve Hareket',
    videoId: 'V19i-v7x9nE', // VIP Fizik - Eğik Atış
    author: 'VIP Fizik Lise',
    duration: '32:15'
  },
  {
    id: 'vid-12-1',
    grade: 12,
    title: 'Düzgün Çembersel Hareket Temel Kavramlar',
    topic: 'Çembersel Hareket',
    videoId: 'I_bC85D830w', // Özcan Aykın - Çembersel Hareket
    author: 'Özcan Aykın Lise Müfredatı',
    duration: '35:40'
  }
];
