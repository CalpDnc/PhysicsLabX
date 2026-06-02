import { QuizQuestion } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ================= 9. SINIF =================
  // --- TEST 1: Fizik Bilimine Giriş ---
  {
    id: 'q-9-1-1', grade: 9, testId: 1, topicId: '9-fizik-giris',
    text: 'Aşağıdakilerden hangisi fizik biliminin alt dallarından biri değildir?',
    options: ['Mekanik', 'Optik', 'Termodinamik', 'Nükleer Fizik', 'Biyokimya'],
    correctAnswerIndex: 4,
    solution: 'Mekanik, optik, termodinamik ve nükleer fizik fiziğin alt dallarıdır. Biyokimya ise kimya ve biyolojinin kesişim alanıdır.',
    hint: 'Fiziğin alt dallarını kamyonet (Katalizör hariç) şifresiyle hatırlayabilirsiniz.'
  },
  {
    id: 'q-9-1-2', grade: 9, testId: 1, topicId: '9-fizik-giris',
    text: 'Aşağıda verilen fiziksel büyüklüklerden hangisi vektörel bir büyüklüktür?',
    options: ['Sıcaklık', 'Kuvvet', 'Zaman', 'Kütle', 'Işık Şiddeti'],
    correctAnswerIndex: 1,
    solution: 'Kuvvet yönü ve doğrultusu olan vektörel bir büyüklüktür. Diğerleri skaler büyüklüklerdir.',
    hint: 'Yönü ve doğrultusu belirtilmesi gereken büyüklükleri arayın.'
  },
  {
    id: 'q-9-1-3', grade: 9, testId: 1, topicId: '9-fizik-giris',
    text: 'SI birim sistemine göre akım şiddetinin birimi aşağıdakilerden hangisidir?',
    options: ['Volt', 'Ohm', 'Amper', 'Watt', 'Joule'],
    correctAnswerIndex: 2,
    solution: 'Uluslararası Birim Sistemi’nde (SI) akım şiddetinin birimi Amper’dir.',
    hint: 'KISAMASS şifresindeki "A" harfini düşünün.'
  },
  {
    id: 'q-9-1-4', grade: 9, testId: 1, topicId: '9-fizik-giris',
    text: 'Aşağıdaki büyüklük ve ölçme aracı eşleştirmelerinden hangisi yanlıştır?',
    options: ['Sıcaklık - Termometre', 'Akım Şiddeti - Ampermetre', 'Kütle - Eşit Kollu Terazi', 'Kuvvet - Dinamometre', 'Zaman - Kalorimetre'],
    correctAnswerIndex: 4,
    solution: 'Zaman kronometre ile ölçülür. Kalorimetre kabı ise ısı miktarını ölçmekte kullanılır.',
    hint: 'Isı ve sıcaklık deneylerinde neyin kullanıldığını hatırlayın.'
  },
  {
    id: 'q-9-1-5', grade: 9, testId: 1, topicId: '9-fizik-giris',
    text: 'Fizikte iş, güç ve enerji konularını inceleyen alt dal hangisidir?',
    options: ['Mekanik', 'Katıhal Fizikleri', 'Optik', 'Elektromanyetizma', 'Termodinamik'],
    correctAnswerIndex: 0,
    solution: 'Hareket, kuvvet, iş ve enerji gibi konuları mekanik alt dalı inceler.',
    hint: 'Kuvvet ve hareket yasalarını içeren dalı düşünün.'
  },
  {
    id: 'q-9-1-6', grade: 9, testId: 1, topicId: '9-fizik-giris',
    text: 'Aşağıdakilerden hangisi temel bir büyüklük değildir?',
    options: ['Sürat', 'Kütle', 'Zaman', 'Sıcaklık', 'Uzunluk'],
    correctAnswerIndex: 0,
    solution: 'Sürat (yol/zaman) türetilmiş bir büyüklüktür. Diğerleri temel büyüklüklerdir.',
    hint: 'KISAMASS şifresine dahil olmayan büyüklüğü bulun.'
  },
  {
    id: 'q-9-1-7', grade: 9, testId: 1, topicId: '9-fizik-giris',
    text: 'Atom çekirdeğinin yapısını ve radyoaktiviteyi inceleyen fizik alt dalı hangisidir?',
    options: ['Yüksek Enerji ve Plazma Fiziği', 'Nükleer Fizik', 'Atom Fiziği', 'Katıhal Fiziği', 'Mekanik'],
    correctAnswerIndex: 1,
    solution: 'Çekirdek yapısını ve nükleer reaksiyonları nükleer fizik (çekirdek fiziği) inceler.',
    hint: 'Çekirdek kelimesinin Latince karşılığını düşünün.'
  },
  {
    id: 'q-9-1-8', grade: 9, testId: 1, topicId: '9-fizik-giris',
    text: 'Işığın doğasını, yayılmasını, yansıma ve kırılma olaylarını inceleyen alt dal hangisidir?',
    options: ['Termodinamik', 'Mekanik', 'Optik', 'Katıhal Fiziği', 'Atom Fiziği'],
    correctAnswerIndex: 2,
    solution: 'Işık ve optik araçlarla ilgili fiziksel olayları optik inceler.',
    hint: 'Gözlük camı veya teleskopların hangi dalın ürünü olduğunu düşünün.'
  },
  {
    id: 'q-9-1-9', grade: 9, testId: 1, topicId: '9-fizik-giris',
    text: 'Bir cismin birim zamandaki yer değiştirmesi olan "hız" büyüklüğü için hangisi doğrudur?',
    options: ['Skaler ve temeldir', 'Skaler ve türetilmiştir', 'Vektörel ve temeldir', 'Vektörel ve türetilmiştir', 'Birimisizdir'],
    correctAnswerIndex: 3,
    solution: 'Hız (m/s) hem yönlü olduğu için vektöreldir hem de başka büyüklüklerden türetilmiştir.',
    hint: 'Hızın formülü Δx/Δt\'dir ve yönü vardır.'
  },
  {
    id: 'q-9-1-10', grade: 9, testId: 1, topicId: '9-fizik-giris',
    text: 'Kristal yapıdaki katı maddelerin mikroskobik özelliklerini inceleyen fizik alt dalı hangisidir?',
    options: ['Atom Fiziği', 'Nükleer Fizik', 'Mekanik', 'Termodinamik', 'Katıhal Fiziği'],
    correctAnswerIndex: 4,
    solution: 'Yarı iletkenler, güneş pilleri ve süperiletkenler Katıhal Fiziği konusudur.',
    hint: 'Katı maddelerin düzenli kristal örüntülerini araştıran daldır.'
  },

  // --- TEST 2: Madde ve Özkütle ---
  {
    id: 'q-9-2-1', grade: 9, testId: 2, topicId: '9-fizik-giris',
    text: 'Kütlesi 120 g, hacmi 40 cm³ olan homojen bir cismin özkütlesi kaç g/cm³\'tür?',
    options: ['1', '2', '3', '4', '5'],
    correctAnswerIndex: 2,
    solution: 'd = m/V formülünden d = 120 / 40 = 3 g/cm³ bulunur.',
    hint: 'Kütle bölü hacim formülünü uygulayın.'
  },
  {
    id: 'q-9-2-2', grade: 9, testId: 2, topicId: '9-fizik-giris',
    text: 'Aşağıdakilerden hangisi maddelerin ortak özelliklerinden biri değildir?',
    options: ['Kütle', 'Hacim', 'Eylemsizlik', 'Özkütle', 'Tanecikli Yapı'],
    correctAnswerIndex: 3,
    solution: 'Özkütle maddeler için ayırt edici bir özelliktir, ortak özellik değildir.',
    hint: 'Her maddede mutlaka bulunması gereken özellikleri hatırlayın.'
  },
  {
    id: 'q-9-2-3', grade: 9, testId: 2, topicId: '9-fizik-giris',
    text: 'Aynı sıcaklıktaki K ve L sıvılarından K\'nin kütlesi 60g, hacmi 20 cm³; L\'nin kütlesi 80g, hacmi 40 cm³\'tür. Özkütleleri oranı dK/dL kaçtır?',
    options: ['1.5', '2.0', '1.0', '0.5', '3.0'],
    correctAnswerIndex: 0,
    solution: 'dK = 60/20 = 3, dL = 80/40 = 2. dK/dL = 3/2 = 1.5.',
    hint: 'İki sıvının da özkütlesini ayrı ayrı hesaplayıp oranlayın.'
  },
  {
    id: 'q-9-2-4', grade: 9, testId: 2, topicId: '9-fizik-giris',
    text: 'Sıvı moleküllerinin kendi aralarında oluşturduğu çekim kuvvetine ne ad verilir?',
    options: ['Adezyon', 'Kohezyon', 'Kılcallık', 'Yüzey Gerilimi', 'Viskozite'],
    correctAnswerIndex: 1,
    solution: 'Aynı cins moleküllerin birbirini çekmesine kohezyon denir.',
    hint: 'Benzer moleküller arası çekim "ko-" ön eki ile başlar.'
  },
  {
    id: 'q-9-2-5', grade: 9, testId: 2, topicId: '9-fizik-giris',
    text: 'Yağmur damlasının cama yapışmasını sağlayan kuvvet aşağıdakilerden hangisidir?',
    options: ['Kohezyon', 'Adezyon', 'Kılcallık', 'Özkütle', 'Yerçekimi'],
    correctAnswerIndex: 1,
    solution: 'Farklı iki madde arasındaki çekim kuvvetine adezyon (yapışma) denir.',
    hint: 'Farklı moleküller arasındaki tutunmayı düşünün.'
  },
  {
    id: 'q-9-2-6', grade: 9, testId: 2, topicId: '9-fizik-giris',
    text: 'Sıvıların borularda yükselmesi veya alçalması olayı aşağıdakilerden hangisi ile açıklanır?',
    options: ['Viskozite', 'Yüzey Gerilimi', 'Kılcallık', 'Özkütle', 'Eylemsizlik'],
    correctAnswerIndex: 2,
    solution: 'Adezyon ve kohezyon etkileriyle sıvıların ince borularda yayılması kılcallıktır.',
    hint: 'Ağaçların köklerindeki suyun yapraklara ulaşmasını düşünün.'
  },
  {
    id: 'q-9-2-7', grade: 9, testId: 2, topicId: '9-fizik-giris',
    text: 'Bir sıvının yüzeyinin esnek bir zar gibi davranması olayına ne ad verilir?',
    options: ['Yüzey Gerilimi', 'Viskozite', 'Adezyon', 'Eriklik', 'Akıcı Güç'],
    correctAnswerIndex: 0,
    solution: 'Sıvı yüzeyindeki kohezyon kuvvetlerinden kaynaklanan bu duruma yüzey gerilimi denir.',
    hint: 'Bazı böceklerin su üzerinde yürüyebilmesini sağlayan etkidir.'
  },
  {
    id: 'q-9-2-8', grade: 9, testId: 2, topicId: '9-fizik-giris',
    text: 'Sıcaklığı artırılan homojen sıvı bir maddenin özkütlesi nasıl değişir?',
    options: ['Artar', 'Azalır', 'Değişmez', 'Önce artar sonra azalır', 'Sıfır olur'],
    correctAnswerIndex: 1,
    solution: 'Sıcaklık artınca hacim genleşir (artar), kütle sabit kalır. d=m/V gereği özkütle azalır.',
    hint: 'Sıcaklık arttığında genleşen maddelerin hacmi ne olur?'
  },
  {
    id: 'q-9-2-9', grade: 9, testId: 2, topicId: '9-fizik-giris',
    text: 'Gazların basınç altında sıkıştırılabilmesi, katı ve sıvılardan ayıran hangi temel özelliğidir?',
    options: ['Tanecikli olması', 'Hacminin belirsiz olması', 'Kütlesinin çok az olması', 'Adezyonunun olmaması', 'Eylemsizliğinin olmaması'],
    correctAnswerIndex: 1,
    solution: 'Gazların belirli bir şekil ve hacmi yoktur, bulundukları kabı doldururlar ve sıkıştırılabilirler.',
    hint: 'Gaz tanecikleri arasındaki büyük boşlukları düşünün.'
  },
  {
    id: 'q-9-2-10', grade: 9, testId: 2, topicId: '9-fizik-giris',
    text: 'Aşağıdakilerden hangisi adezyon kuvvetinin kohezyon kuvvetinden büyük olduğunun bir göstergesidir?',
    options: ['Sıvının cam boruyu ıslatması', 'Suyun damla şeklinde durması', 'Ebruli sanatı yapılması', 'Ataşın suda batmadan durması', 'Cıva damlasının küresel kalması'],
    correctAnswerIndex: 0,
    solution: 'Adezyon kohezyondan büyükse sıvı temas ettiği kabı ıslatır ve iç bükey eğrilik oluşturur.',
    hint: 'Sıvının yüzeye yapışma/ıslatma eğilimini düşünün.'
  },

  // --- TEST 3: Hareket ve Kuvvet ---
  {
    id: 'q-9-3-1', grade: 9, testId: 3, topicId: '9-hareket-kuvvet',
    text: 'Bir araç 100 metrelik doğrusal yolu 5 saniyede tamamlıyor. Ortalama hızı kaç m/s\'dir?',
    options: ['10', '15', '20', '25', '50'],
    correctAnswerIndex: 2,
    solution: 'Hız = Yer Değiştirme / Zaman = 100 / 5 = 20 m/s.',
    hint: 'Basit yol/zaman oranını kurun.'
  },
  {
    id: 'q-9-3-2', grade: 9, testId: 3, topicId: '9-hareket-kuvvet',
    text: 'Fizikte "eylemsizlik" kavramı aşağıdakilerden hangisini belirtir?',
    options: ['Cismin hızlanma isteğini', 'Cismin hareket durumunu koruma eğilimini', 'Cisme etki eden net sürtünmeyi', 'Cismin ağırlığının etkisini', 'Yapay çekim alanını'],
    correctAnswerIndex: 1,
    solution: 'Eylemsizlik, cisimlerin bulundukları hareket veya sükunet durumlarını koruma eğilimidir.',
    hint: 'Frene basan otobüste öne doğru savrulmamızın sebebini düşünün.'
  },
  {
    id: 'q-9-3-3', grade: 9, testId: 3, topicId: '9-hareket-kuvvet',
    text: 'Newton\'ın 2. Hareket Kanunu olan Temel Prensibe göre bir cismin ivmesi hangisiyle doğru orantılıdır?',
    options: ['Kütlesi', 'Sürati', 'Net Kuvvet', 'Hacmi', 'Sürtünme katsayısı'],
    correctAnswerIndex: 2,
    solution: 'F = m · a formülünden a = F / m bulunur. İvme, net kuvvetle doğru, kütleyle ters orantılıdır.',
    hint: 'F = m · a matematiksel modelini hatırlayın.'
  },
  {
    id: 'q-9-3-4', grade: 9, testId: 3, topicId: '9-hareket-kuvvet',
    text: 'Sürtünmesiz yatay düzlemde 2 kg kütleli cisme 10 N büyüklüğünde net bir kuvvet uygulanıyor. Cismin ivmesi kaç m/s² olur?',
    options: ['2', '5', '8', '10', '20'],
    correctAnswerIndex: 1,
    solution: 'a = F / m = 10 / 2 = 5 m/s².',
    hint: 'Net kuvvet değerini kütleye bölün.'
  },
  {
    id: 'q-9-3-5', grade: 9, testId: 3, topicId: '9-hareket-kuvvet',
    text: 'Yol-Zaman grafiğinin eğimi aşağıdakilerden hangisini verir?',
    options: ['İvme', 'Kuvvet', 'Kütle', 'Hız', 'Alınan Enerji'],
    correctAnswerIndex: 3,
    solution: 'Yol-zaman grafiğinin eğimi (Δx/Δt) bize hızı verir.',
    hint: 'Düşey eksenin yatay eksene oranının neyi temsil ettiğini hatırlayın.'
  },
  {
    id: 'q-9-3-6', grade: 9, testId: 3, topicId: '9-hareket-kuvvet',
    text: 'Hız-Zaman grafiğinin altındaki alan aşağıdakilerden hangisini verir?',
    options: ['İvme', 'Yer değiştirme', 'Kuvvet', 'Güç', 'Sürat'],
    correctAnswerIndex: 1,
    solution: 'Hız ile zamanın çarpımı (v · t) yer değiştirmeyi verir.',
    hint: 'Düşey ve yatay eksenlerin çarpımı hangi fiziksel niceliği verir?'
  },
  {
    id: 'q-9-3-7', grade: 9, testId: 3, topicId: '9-hareket-kuvvet',
    text: 'Aşağıdakilerden hangisi temas gerektirmeyen bir kuvvettir?',
    options: ['İtme kuvveti', 'Sürtünme kuvveti', 'Kütleçekim kuvveti', 'Rüzgar kuvveti', 'Yay kuvveti'],
    correctAnswerIndex: 2,
    solution: 'Kütleçekimi, elektriksel ve manyetik kuvvetler uzaktan etki eder, temas gerektirmez.',
    hint: 'Mıknatıs veya yerçekimi gibi dokunmadan çeken kuvvetleri düşünün.'
  },
  {
    id: 'q-9-3-8', grade: 9, testId: 3, topicId: '9-hareket-kuvvet',
    text: 'Sürtünme kuvvetinin yönü genellikle hareketli bir cisim için nasıldır?',
    options: ['Hareket yönündedir', 'Harekete ters yöndedir', 'Aşağı doğrudur', 'Yatay doğrultuya diktir', 'Dönme yönüyle aynıdır'],
    correctAnswerIndex: 1,
    solution: 'Sürtünme kuvveti öteleme hareketlerinde her zaman hareketi engelleyici yani harekete zıt yönlüdür.',
    hint: 'Kayarken veya fren yaparken bizi durdurmaya çalışan kuvvetin yönünü düşünün.'
  },
  {
    id: 'q-9-3-9', grade: 9, testId: 3, topicId: '9-hareket-kuvvet',
    text: 'Etki-Tepki yasası ile ilgili olarak aşağıdakilerden hangisi yanlıştır?',
    options: ['Etki ve tepki kuvvetleri eşit büyüklüktedir', 'Zıt yönlüdürler', 'Farklı cisimlere etki ederler', 'Bileşkeleri sıfırdır denemez', 'Her zaman aynı cisme etki ederler'],
    correctAnswerIndex: 4,
    solution: 'Etki ve tepki kuvvetleri farklı cisimler üzerindedir, bu yüzden birbirlerini asla yok etmezler.',
    hint: 'Çekiç çiviye vururken, etki çivide, tepki çekiçtedir.'
  },
  {
    id: 'q-9-3-10', grade: 9, testId: 3, topicId: '9-hareket-kuvvet',
    text: 'Bir sporcu dairesel bir pist etrafında koşarak başladığı noktaya geri dönüyor. Bu sporcu için hangisi söylenebilir?',
    options: ['Aldığı yol sıfırdır', 'Yer değiştirmesi sıfırdır', 'Ortalama hızı maksimumdur', 'Sürati sıfırdır', 'İvmesiz hareket etmiştir'],
    correctAnswerIndex: 1,
    solution: 'İlk ve son konumları çakıştığından yapılan net yer değiştirme Δx = 0 olur.',
    hint: 'Başladığı noktaya tam dönme durumunda başlangıç-bitiş mesafesi ne olur?'
  },

  // ================= 10. SINIF =================
  // --- TEST 1: Elektrik Akımı, Direnç & Ohm ---
  {
    id: 'q-10-1-1', grade: 10, testId: 1, topicId: '10-elektrik',
    text: 'Bir iletkenin uçları arasındaki potansiyel fark 24V, üzerinden geçen akım 4A ise bu iletkenin direnci kaç Ohm\'dur?',
    options: ['2', '4', '6', '8', '12'],
    correctAnswerIndex: 2,
    solution: 'V = I · R  => R = V / I = 24 / 4 = 6 Ohm.',
    hint: 'Ohm kanununu (V = I · R) uygulayın.'
  },
  {
    id: 'q-10-1-2', grade: 10, testId: 1, topicId: '10-elektrik',
    text: 'Elektrik devresinde akım şiddetini ölçen araç ve devreye bağlanma şekli aşağıdakilerden hangisidir?',
    options: ['Ampermetre - Paralel', 'Ampermetre - Seri', 'Voltmetre - Seri', 'Voltmetre - Paralel', 'Reosta - Paralel'],
    correctAnswerIndex: 1,
    solution: 'Devreden geçen elektrik akımı Ampermetre ile seri bağlanarak ölçülür.',
    hint: 'Akımın içinden geçebilmesi için ölçüm cihazının yol üstünde (seri) olması gerekir.'
  },
  {
    id: 'q-10-1-3', grade: 10, testId: 1, topicId: '10-elektrik',
    text: 'Seri bağlı iki direncin eşdeğer direnci nasıl hesaplanır?',
    options: ['Dirençlerin toplamıyla', 'Dirençlerin terslerinin toplamıyla', 'Dirençlerin çarpımıyla', 'Dirençlerin farkıyla', 'Dirençlerin ortalamasıyla'],
    correctAnswerIndex: 0,
    solution: 'Seri bağlı dirençlerde toplam zorluk artar: Reş = R1 + R2 + ...',
    hint: 'Uca eklenen engeller toplam zorluğu doğrudan artırır.'
  },
  {
    id: 'q-10-1-4', grade: 10, testId: 1, topicId: '10-elektrik',
    text: 'Özdeş ikişer direnç paralel bağlandığında eşdeğer direnç bir tanesinin direncine göre nasıl değişir?',
    options: ['2 katına çıkar', '4 katına çıkar', 'Yarıya iner', 'Aynı kalır', 'Sıfır olur'],
    correctAnswerIndex: 2,
    solution: 'Paralel dirençlerde Reş = R / n formülünden iki özdeş direnç için Reş = R / 2 olur.',
    hint: 'Aynı yolu genişletmek akımın geçişini kolaylaştırır.'
  },
  {
    id: 'q-10-1-5', grade: 10, testId: 1, topicId: '10-elektrik',
    text: 'Elektrik akımının iletimi ile ilgili metal katılar için hangi tanecikler sorumludur?',
    options: ['Protonlar', 'Serbest elektronlar', 'Nötronlar', 'Pozitif iyonlar', 'Moleküller'],
    correctAnswerIndex: 1,
    solution: 'Metallerde yük iletimi serbest değerlik elektronlarının hareketiyle sağlanır.',
    hint: 'Atom çekirdeğinin dışında rahatça hareket edebilen negatif yüklü parçacıkları düşünün.'
  },
  {
    id: 'q-10-1-6', grade: 10, testId: 1, topicId: '10-elektrik',
    text: 'Potansiyel farkı (gerilimi) ölçen voltmetre devreye nasıl bağlanmalıdır?',
    options: ['Seri', 'Paralel', 'Karışık', 'Bobine dolanarak', 'Topraklanarak'],
    correctAnswerIndex: 1,
    solution: 'Voltmetre uçlar arasındaki farkı ölçeceğinden devreye paralel bağlanmalıdır. İç direnci çok büyüktür.',
    hint: 'İçinden akım geçirmemesi için devre elemanının iki ucu üzerinden köprü kurulur.'
  },
  {
    id: 'q-10-1-7', grade: 10, testId: 1, topicId: '10-elektrik',
    text: 'Bir devrede ayarlanabilir direnç (akım ayarlayıcı sürmeli direnç) elemanına ne ad verilir?',
    options: ['Transistör', 'Kondansatör', 'Diyot', 'Reosta', 'Bobin'],
    correctAnswerIndex: 3,
    solution: 'Sürgülü direnç yani reosta yardımıyla direnç değiştirilerek akım ayarlanır.',
    hint: 'Laboratuvarda direnç boyunu sürgüyle değiştirip akımı değiştirdiğimiz sistemi hatırlayın.'
  },
  {
    id: 'q-10-1-8', grade: 10, testId: 1, topicId: '10-elektrik',
    text: 'R₁=3 Ohm ve R₂=6 Ohm olan iki direnç paralel bağlanırsa eşdeğer direnç kaç Ohm olur?',
    options: ['2', '4.5', '9', '18', '1'],
    correctAnswerIndex: 0,
    solution: 'Reş = (R1 · R2) / (R1 + R2) = (3 · 6) / (3 + 6) = 18 / 9 = 2 Ohm.',
    hint: 'Çarpımları bölü toplamları formülünü uygulayın.'
  },
  {
    id: 'q-10-1-9', grade: 10, testId: 1, topicId: '10-elektrik',
    text: 'Elektriksel iletkenlikle ilgili sıvılarda elektrik iletimi nasıl gerçekleşir?',
    options: ['Sadece elektronlarla', 'Serbest nötronlarla', 'Artı ve eksi iyonlarla', 'Molekül titreşimiyle', 'Sıvılar elektriği asla iletmez'],
    correctAnswerIndex: 2,
    solution: 'Sıvılarda (elektrolitlerde) elektrik akımı çözünmüş pozitif ve negatif iyonların hareketiyle iletilir.',
    hint: 'Tuzlu suyun iyonlarına ayrışmasını düşünün.'
  },
  {
    id: 'q-10-1-10', grade: 10, testId: 1, topicId: '10-elektrik',
    text: 'Boyu L, kesit alanı A olan iletken telin direnci R\'dir. Aynı maddeden yapılmış boyu 2L, kesiti 2A olan telin direnci kaç R olur?',
    options: ['0.25', '0.5', '1', '2', '4'],
    correctAnswerIndex: 2,
    solution: 'R = ρ · L/A. Yeni direnç = ρ · 2L/(2A) = ρ · L/A = R. Değişmez.',
    hint: 'Boy ve kesit alanının oranı (L/A) değişmiş mi kontrol edin.'
  },

  // --- TEST 2: Elektriksel Güç & Mıknatıslar ---
  {
    id: 'q-10-2-1', grade: 10, testId: 2, topicId: '10-elektrik',
    text: 'Üzerinden 2A akım geçen 10 Ohm dirençli bir ampulün gücü kaç Watt\'tır?',
    options: ['20', '40', '100', '200', '400'],
    correctAnswerIndex: 1,
    solution: 'P = I² · R = (2)² · 10 = 4 · 10 = 40 Watt.',
    hint: 'Güç formülü I² · R\'dir.'
  },
  {
    id: 'q-10-2-2', grade: 10, testId: 2, topicId: '10-elektrik',
    text: 'Mıknatıslarda manyetik alan çizgileri dış ortamda hangi kutuptan hangi kutba doğrudur?',
    options: ['N\'den S\'ye', 'S\'den N\'ye', 'Artıdan Eksiye', 'Eksiden Artıya', 'Merkezden dışa'],
    correctAnswerIndex: 0,
    solution: 'Manyetik alan çizgileri mıknatıs dışında daima Kuzey (N) kutbundan çıkıp Güney (S) kutbuna girer.',
    hint: 'Kuzey (North) ve Güney (South) baş harflerini takip eden yönü düşünün.'
  },
  {
    id: 'q-10-2-3', grade: 10, testId: 2, topicId: '10-elektrik',
    text: 'Bir mıknatıs tam ortasından ikiye bölünürse ne oluşur?',
    options: ['Tek kutuplu iki mıknatıs', 'İki kutuplu iki yeni mıknatıs', 'Kutup özelliği kaybolur', 'Biri N diğeri S iki nötr parça', 'Yalnızca çekim gücü sıfırlanır'],
    correctAnswerIndex: 1,
    solution: 'Mıknatıslar ne kadar bölünürse bölünsün tek kutuplu (monopol) hale gelemez, her parça çift kutuplu yeni bir mıknatıs olur.',
    hint: 'Fizikte izole tek manyetik kutup bulunamaz.'
  },
  {
    id: 'q-10-2-4', grade: 10, testId: 2, topicId: '10-elektrik',
    text: 'Yarısına kadar su dolu bir kap tabanına yapılan sıvı basıncı, kap ters çevrilirse (daralan tabandan genişleyene) nasıl değişir?',
    options: ['Artar', 'Azalır', 'Değişmez', 'Kabın şekline bağlı değildir', 'Sıfır olur'],
    correctAnswerIndex: 1,
    solution: 'Genişleyen tabana çevrilirse su yüksekliği (h) azalır. P = h·d·g nedeniyle sıvı basıncı azalır.',
    hint: 'Kabın tabanı yukarısına göre daha genişse, sıvı yüksekliği nasıl değişir?'
  },
  {
    id: 'q-10-2-5', grade: 10, testId: 2, topicId: '10-elektrik',
    text: 'Bir demir çivinin üzerine tel sarılıp bu telden akım geçirilmesiyle elde edilen geçici mıknatısa ne denir?',
    options: ['Doğal mıknatıs', 'Yükselteç', 'Elektromıknatıs', 'Diyot', 'Transformatör'],
    correctAnswerIndex: 2,
    solution: 'Elektrik akımıyla manyetik alan oluşturan sistemlere elektromıknatıs denir.',
    hint: 'Elektrik akımıyla aktifleşen mıknatıs türünü düşünün.'
  },
  {
    id: 'q-10-2-6', grade: 10, testId: 2, topicId: '10-elektrik',
    text: 'Dünyanın coğrafi Kuzey kutbu yakınlarında manyetik alanın hangi kutbu bulunur?',
    options: ['Kuzey (N)', 'Güney (S)', 'Doğu', 'Batı', 'Nötr'],
    correctAnswerIndex: 1,
    solution: 'Dünya’nın manyetik kutbu ile coğrafi kutbu zıttır. Coğrafi kuzeyde manyetik Güney (S) bulunur.',
    hint: 'Pusulanın N kutbunun coğrafi kuzeye yönelmesini sağlayan çekimi düşünün.'
  },
  {
    id: 'q-10-2-7', grade: 10, testId: 2, topicId: '10-elektrik',
    text: 'Sıvıların kaldırma kuvveti cismin hangi hacmine batan kısmı ile doğru orantılıdır?',
    options: ['Tüm hacmi', 'Batan hacmi', 'Havada kalan hacmi', 'Kabın hacmi', 'Sıvının toplam hacmi'],
    correctAnswerIndex: 1,
    solution: 'Fk = Vbatan · dsıvı · g formülü gereğince doğrudan batan hacimle doğru orantılıdır.',
    hint: 'Archimedes prensibinde taşan sıvının hacmi neye eşittir?'
  },
  {
    id: 'q-10-2-8', grade: 10, testId: 2, topicId: '10-elektrik',
    text: 'Katı bir cismin zemine uyguladığı dik kuvvet aşağıdakilerden hangisine eşittir?',
    options: ['Sadece özkütlesine', 'Hacmine', 'Ağırlığına', 'Taban alanına', 'Özgül ağırlığına'],
    correctAnswerIndex: 2,
    solution: 'Yatay zemindeki katıların tabana uyguladığı dik basan kuvvet katının kendi toplam ağırlığıdır.',
    hint: 'Katı basıncı formülü G / S\'dir, burada basan kuvvet pay kısmıdır.'
  },
  {
    id: 'q-10-2-9', grade: 10, testId: 2, topicId: '10-elektrik',
    text: 'Aşağıdakilerden hangisi manyetik maddelerden biri değildir?',
    options: ['Demir', 'Nikel', 'Kobalt', 'Bakır', 'Çelik'],
    correctAnswerIndex: 3,
    solution: 'Bakır diamanyetiktir, mıknatıslar tarafından çekilmez (ferromanyetik değildir).',
    hint: 'Mıknatısın çekmediği metalleri hatırlayın.'
  },
  {
    id: 'q-10-2-10', grade: 10, testId: 2, topicId: '10-elektrik',
    text: 'Yatay kesit alanı S olan bir katının yatay zemine yaptığı basınç P\'dir. Bu katı dik olarak tam ortasından dikey kesilirse oluşan yarım parçaların zemine yaptığı basınç kaç P olur?',
    options: ['0.5', '1', '2', '3', 'Sıfır'],
    correctAnswerIndex: 1,
    solution: 'Dikey kesimde hem kuvvet (G) hem de yüzey alanı (S) aynı oranda azaldığı için oran (G/S) yani basınç değişmez, P kalır.',
    hint: 'Pastayı dikine kestiğinizde dilimin tabana yaptığı basıncı düşünün.'
  },

  // --- TEST 3: Optik, Kırılma & Aynalar ---
  {
    id: 'q-10-3-1', grade: 10, testId: 3, topicId: '10-optik',
    text: 'Havadaki hızı c olan ışığın, kırılma indisi n=1.5 olan camdaki hızı nedir?',
    options: ['c', '1.5c', '2c/3', '3c/2', '0.5c'],
    correctAnswerIndex: 2,
    solution: 'n = c/v  => v = c / n = c / 1.5 = c / (3/2) = 2c/3.',
    hint: 'Kırılma indisi formülünü (v = c/n) uygulayın.'
  },
  {
    id: 'q-10-3-2', grade: 10, testId: 3, topicId: '10-optik',
    text: 'Düzlem aynaya 30° derecelik gelme açısıyla çarpan bir ışının yansıma açısı kaç derecedir?',
    options: ['15', '30', '45', '60', '90'],
    correctAnswerIndex: 1,
    solution: 'Yansıma kurallarına göre gelme açısı daima yansıma açısına eşittir: i = r = 30°.',
    hint: 'Ayna normaliyle yapılan açıların eşitliğini hatırlayın.'
  },
  {
    id: 'q-10-3-3', grade: 10, testId: 3, topicId: '10-optik',
    text: 'Odak uzaklığı f olan çukur aynanın merkez noktası tepe noktasına kaç f uzaklıktadır?',
    options: ['0.5', '1', '2', '3', '4'],
    correctAnswerIndex: 2,
    solution: 'Kavisli aynalarda merkez uzaklığı odak uzaklığının 2 katıdır: M = 2f.',
    hint: 'Aynanın eğrilik yarıçapını düşünün.'
  },
  {
    id: 'q-10-3-4', grade: 10, testId: 3, topicId: '10-optik',
    text: 'Tümsek ayna önüne konulan düz bir cismin görüntüsü için aşağıdakilerden hangisi daima doğrudur?',
    options: ['Ters ve gerçektir', 'Düz, sanal ve daha büyüktür', 'Düz, sanal ve daha küçüktür', 'Ters, sanal ve kütlecedir', 'Görüntü oluşmaz'],
    correctAnswerIndex: 2,
    solution: 'Tümsek aynalarda görüntü odak ile ayna arasında, daima düz, sanal (zahiri) ve cisimden küçüktür.',
    hint: 'Arabaların dikiz aynalarında yolu nasıl gördüğümüzü hatırlayın.'
  },
  {
    id: 'q-10-3-5', grade: 10, testId: 3, topicId: '10-optik',
    text: 'Kırmızı ve yeşil ışıkların karışımı göz tarafından hangi renk olarak algılanır?',
    options: ['Sarı', 'Magenta', 'Cyan', 'Beyaz', 'Mavi'],
    correctAnswerIndex: 0,
    solution: 'Işığın ana renklerinden kırmızı + yeşil = sarı rengi oluşturur.',
    hint: 'Monitörlerdeki RGB renk modelini düşünün.'
  },
  {
    id: 'q-10-3-6', grade: 10, testId: 3, topicId: '10-optik',
    text: 'Aşağıdaki merceklerden hangisi üzerine gelen paralel ışın demetini bir noktada toplar?',
    options: ['İnce kenarlı (Yakınsak) mercek', 'Kalın kenarlı (Iraksak) mercek', 'Düzlem cam plakası', 'Tümsek ayna', 'Prizmatik mercek'],
    correctAnswerIndex: 0,
    solution: 'İnce kenarlı mercekler ışığı kırarak odakta toplayacak şekilde büker (yakınsar).',
    hint: 'Büyüteçlerin güneş ışığını odaklayıp kağıt yakmasını düşünün.'
  },
  {
    id: 'q-10-3-7', grade: 10, testId: 3, topicId: '10-optik',
    text: 'Çok yoğun ortamdan az yoğun ortama geçen ışık ışını normalle nasıl bir ilişki kurar?',
    options: ['Normale yaklaşarak kırılır', 'Normalden uzaklaşarak kırılır', 'Doğrultu değiştirmeden geçer', 'Tamamen soğurulur', 'Hızı değişmez'],
    correctAnswerIndex: 1,
    solution: 'Az yoğun (hızlı) ortama geçen ışın, genişleyerek normalden uzaklaşacak şekilde kırılır.',
    hint: 'Çok yoğun ortamda sıkışan ışık serbestliğe kavuşunca geniş açıyla kaçar.'
  },
  {
    id: 'q-10-3-8', grade: 10, testId: 3, topicId: '10-optik',
    text: 'Aşağıdakilerden hangisi ışığın kırılmasına örnek bir doğa olayıdır?',
    options: ['Serap olayı', 'Gökkuşağı oluşumu', 'Güneş battıktan sonra kızıllık', 'Denizlerin mavi görünmesi', 'Hepsi'],
    correctAnswerIndex: 4,
    solution: 'Tüm bu optik atmosfer olayları ışığın kırılması, saçılması ve tam yansıması temellidir.',
    hint: 'Işığın farklı ortamlara veya dalga boylarına göre yön çizmesini düşünün.'
  },
  {
    id: 'q-10-3-9', grade: 10, testId: 3, topicId: '10-optik',
    text: 'Miyop göz kusuruna sahip birinin net görmesini sağlamak için hangi tip gözlük camı kullanılmalıdır?',
    options: ['İnce kenarlı mercek', 'Kalın kenarlı mercek', 'Silindirik düzlem', 'Çukur ayna', 'Tümsek ayna'],
    correctAnswerIndex: 1,
    solution: 'Miyopta görüntü retinaya ulaşmadan önde odaklanır, kalın kenarlı mercek ışığı dağıtarak retinanın üzerine odaklar.',
    hint: 'Uzağı net göremeyen miyoplar "ıraksak" yardımıyla tedavi edilir.'
  },
  {
    id: 'q-10-3-10', grade: 10, testId: 3, topicId: '10-optik',
    text: 'Düzlem aynaya olan mesafesi 2 metre olan bir cismin, kendi görüntüsüne olan uzaklığı kaç metredir?',
    options: ['1', '2', '3', '4', '8'],
    correctAnswerIndex: 3,
    solution: 'Cismin aynaya uzaklığı görüntünün aynaya uzaklığına eşittir (2m + 2m = 4m).',
    hint: 'Aynanın arkasında cisimle simetrik bir mesafe oluşur.'
  },

  // ================= 11. SINIF =================
  // --- TEST 1: Vektörler & Bağıl Hareket ---
  {
    id: 'q-11-1-1', grade: 11, testId: 1, topicId: '11-kuvvet-hareket',
    text: 'Aralarında 90° açı bulunan 3N ve 4N büyüklüğündeki iki vektörün bileşkesinin büyüklüğü kaç N\'dir?',
    options: ['1', '5', '7', '12', '25'],
    correctAnswerIndex: 1,
    solution: 'R² = A² + B² = 3² + 4² = 9 + 16 = 25  => R = 5 N.',
    hint: 'Dik üçgendeki Pythagoras bağıntısını (3-4-5 üçgeni) hatırlayın.'
  },
  {
    id: 'q-11-1-2', grade: 11, testId: 1, topicId: '11-kuvvet-hareket',
    text: 'Doğuya 50 km/h hızla giden bir araçtaki gözlemci, batıya 30 km/h hızla giden motosikleti hangi yönde ve hangi hızla gidiyor görür?',
    options: ['Batıya 80 km/h', 'Doğuya 80 km/h', 'Batıya 20 km/h', 'Doğuya 20 km/h', 'Duruyor'],
    correctAnswerIndex: 0,
    solution: 'Vbağıl = Vgözlenen - Vgözlemci = -30 (Batı) - (+50) (Doğu) = -80 km/h (Batıya 80 km/h).',
    hint: 'Bağıl harekette gözlemcinin hız vektörünü ters çevirip gözlenene ekleyin.'
  },
  {
    id: 'q-11-1-3', grade: 11, testId: 1, topicId: '11-kuvvet-hareket',
    text: 'Akıntı hızı kıyıya paralel ve Va=2 m/s olan bir nehirde, akıntıya ters yönde suya göre v=5 m/s hızla yüzen bir sporcunun yere göre hızı kaç m/s\'dir?',
    options: ['3', '5', '7', '10', '2.5'],
    correctAnswerIndex: 0,
    solution: 'Vyere = Vsu + Vakıntı = -5 + 2 = -3 m/s (Akıntıya ters yönde 3 m/s).',
    hint: 'Yere göre hız bulunurken akıntı hızını yüzücünün hızına vektörel olarak ekleyin.'
  },
  {
    id: 'q-11-1-4', grade: 11, testId: 1, topicId: '11-kuvvet-hareket',
    text: 'Aşağıdakilerden hangisi bir vektörün bileşenlerine ayrılmasında kullanılan trigonometrik çarpanları ifade eder?',
    options: ['Vx=V·cosθ, Vy=V·sinθ', 'Vx=V·sinθ, Vy=V·cosθ', 'Vx=V/cosθ, Vy=V/sinθ', 'Vx=V·tanθ, Vy=V', 'Sadece kütleyle'],
    correctAnswerIndex: 0,
    solution: 'Yatay bileşen komşu kenar olduğu için cosinus ile, düşey bileşen karşı kenar olduğundan sinus ile çarpılır.',
    hint: 'Açının komşu ekseni daima cosinus bileşenidir.'
  },
  {
    id: 'q-11-1-5', grade: 11, testId: 1, topicId: '11-kuvvet-hareket',
    text: 'Lami Teoremi (Kesişen Kuvvetlerin Dengesi) gereğince, dengedeki üç kuvvetin büyüklükleri karşılarındaki açıların neyiyle ters orantılıdır?',
    options: ['Sinüsüyle', 'Kosinüsüyle', 'Tanjantıyla', 'Direkt kendisiyle', 'Karesiyle'],
    correctAnswerIndex: 0,
    solution: 'Lami: F1/sinα = F2/sinβ = F3/sinγ. Büyük açı karşısında küçük kuvvet bulunur.',
    hint: 'Kuvvet bölü sinüs değerlerinin sabitliğini düşünün.'
  },
  {
    id: 'q-11-1-6', grade: 11, testId: 1, topicId: '11-kuvvet-hareket',
    text: 'Aynı doğrultudaki F₁=12 Newon (Doğu) ve F₂=8 Newton (Batı) iki kuvvetin bileşkesi kaç N\'dir?',
    options: ['4 (Doğu)', '4 (Batı)', '20 (Doğu)', '20 (Batı)', '10'],
    correctAnswerIndex: 0,
    solution: 'Zıt yönlü kuvvetlerin bileşkesi büyük olandan küçük çıkarılarak bulunur: 12 - 8 = 4 N (büyük olan doğu yönünde).',
    hint: 'Zıt yönlü yönelimleri çıkarma işlemiyle birleştirin.'
  },
  {
    id: 'q-11-1-7', grade: 11, testId: 1, topicId: '11-kuvvet-hareket',
    text: 'Genişliği d = 40 m olan bir nehirde suya dik giren bir yüzücünün karşı kıyıya çıkış süresi sadece hangisine bağlıdır?',
    options: ['Akıntı hızına', 'Yüzücünün nehre dik hız bileşenine', 'Yüzücünün yatay sürüklenmesine', 'Nehrin derinliğine', 'Yüzücünün ağırlığına'],
    correctAnswerIndex: 1,
    solution: 'Karşı kıyıya geçiş süresi t = d / Vyıldız sadece dik hız bileşenine bağlıdır, akıntı hızı geçiş süresini etkilemez.',
    hint: 'Akıntı hızı ne kadar büyük olursa olsun sadece yatayda sürükler, karşıya ulaştırma işini dik hız yapar.'
  },
  {
    id: 'q-11-1-8', grade: 11, testId: 1, topicId: '11-kuvvet-hareket',
    text: 'Yatay düzlemde iki vektörün toplamının minimum değeri 2, maksimum değeri 14 ise bu vektörlerin büyüklükleri hangisidir?',
    options: ['4 ve 10', '6 ve 8', '5 ve 9', '2 ve 12', '3 ve 11'],
    correctAnswerIndex: 1,
    solution: 'A + B = 14 ve A - B = 2 denklem sisteminden A = 8 ve B = 6 bulunur.',
    hint: 'Toplamları 14, farkları 2 olan iki sayıyı tespit edin.'
  },
  {
    id: 'q-11-1-9', grade: 11, testId: 1, topicId: '11-kuvvet-hareket',
    text: 'Sürtünmesiz yatay düzlemde dengede (statik) duran bir cisim için hangisi kesinlikle doğrudur?',
    options: ['Üzerine hiçbir kuvvet etki etmiyordur', 'Etki eden net kuvvet sıfırdır', 'Sabit hızla gidiyordur', 'Kütlesi ihmal edilmiştir', 'Yalnızca yerçekimi etkindir'],
    correctAnswerIndex: 1,
    solution: 'Newton\'un 1. Yasası gereği, dengede duran cisme etki eden net dış kuvvetlerin vektörel toplamı sıfırdır.',
    hint: 'Denge koşulunda ivme sıfırdır, bu net kuvvetle ilişkilidir.'
  },
  {
    id: 'q-11-1-10', grade: 11, testId: 1, topicId: '11-kuvvet-hareket',
    text: 'Bileşke vektörün yönü iki farklı büyüklükteki vektörün toplamında hangisine daha yakındır?',
    options: ['Küçük vektöre', 'Büyük vektöre', 'Tam ortadadır', 'Açıya bağlı değildir', 'Sıfıra yakındır'],
    correctAnswerIndex: 1,
    solution: 'Bileşke kuvvet vektörü daima şiddeti daha büyük olan kuvvete daha yakın konumlanır (açı küçülür).',
    hint: 'Daha güçlü çeken tarafın açıyı kendi tarafına doğru daraltacağını düşünün.'
  },

  // --- TEST 2: Newton'ın Hareket Yasaları ---
  {
    id: 'q-11-2-1', grade: 11, testId: 2, topicId: '11-kuvvet-hareket',
    text: 'Kütlesi 5 kg olan bir cisme eğik düzlemin tepesinde etki eden yerçekimi kuvveti (ağırlık) kaç N\'dir? (g=10 m/s²)',
    options: ['0.5', '5', '50', '500', '100'],
    correctAnswerIndex: 2,
    solution: 'G = m · g = 5 · 10 = 50 N.',
    hint: 'Kütle ile yerçekimi ivmesini çarpın.'
  },
  {
    id: 'q-11-2-2', grade: 11, testId: 2, topicId: '11-kuvvet-hareket',
    text: 'Sürtünmeli yatay düzlemde k=0.4 sürtünme katsayısına sahip zeminde m=10 kg kütleli cisme etki edebilecek maksimum sürtünme kuvveti kaç N\'dir? (g=10 m/s²)',
    options: ['4', '10', '40', '100', '16'],
    correctAnswerIndex: 2,
    solution: 'N = m · g = 100 Newton. Fs = k · N = 0.4 · 100 = 40 N olur.',
    hint: 'Fs = k · N formülünü uygulayın, yatayda N = m · g\'dir.'
  },
  {
    id: 'q-11-2-3', grade: 11, testId: 2, topicId: '11-kuvvet-hareket',
    text: 'Net bir dış kuvvete maruz kalan bir cismin kütlesi sabitken, kuvvete bağlı ivme grafiğinin eğimi bize neyi verir?',
    options: ['Kütlenin tersini (1/m)', 'Kütleyi (m)', 'Sürtünmeyi', 'Alınan yolu', 'Zamanı'],
    correctAnswerIndex: 0,
    solution: 'a = F/m olduğundan, a-F grafiğinin eğimi (ivme/kuvvet) 1/m değerini verir. Eğer F-a grafiği olsaydı eğim kütleyi verirdi.',
    hint: 'Eğim düşey bölü yataydır, yani ivme / kuvvet.'
  },
  {
    id: 'q-11-2-4', grade: 11, testId: 2, topicId: '11-kuvvet-hareket',
    text: 'Bir asansör içinde tartılan bir kişi, asansör yukarı doğru sabit ivmeyle hızlandığında ağırlığını nasıl hisseder?',
    options: ['Daha hafif', 'Daha ağır', 'Aynı', 'Sıfır hisseder', 'Asansörün hızına bağlı olarak değişmez'],
    correctAnswerIndex: 1,
    solution: 'Yukarı ivmelenmede eylemsizlik aşağı yönlü etki eder, tartının gösterdiği değer G\' = m(g+a) olur, kişi ağırlaşır.',
    hint: 'Hızlanan asansörün ayaklarımızı tabana daha çok bastırmasını hayal edin.'
  },
  {
    id: 'q-11-2-5', grade: 11, testId: 2, topicId: '11-kuvvet-hareket',
    text: 'Yatay düzlemde durmakta olan bir cisme etki eden statik sürtünme kuvveti için hangisi doğrudur?',
    options: ['Daima sabit bir değerdir', 'Cisme uygulanan yatay kuvvete eşittir (harekete geçene dek)', 'Kinetik sürtünmeden daima küçüktür', 'Cismin hızlanmasını sağlar', 'Sürtünme katsayısına bağlı değildir'],
    correctAnswerIndex: 1,
    solution: 'Statik sürtünme kuvveti cisim harekete başlayana kadar uygulanan zıt kuvvete tam eşittir, kendisini ayarlar.',
    hint: 'Duran bir kutuyu 5N ile ittirdiğinizde kıpırdamıyorsa, geri tutan sürtünme kuvveti kaç N olur?'
  },
  {
    id: 'q-11-2-6', grade: 11, testId: 2, topicId: '11-kuvvet-hareket',
    text: 'Eğik düzlem üzerindeki bir cismin aşağı doğru kaymasını sağlayan net kuvvet bileşeni hangisidir?',
    options: ['m·g·cosθ', 'm·g·sinθ', 'm·g·tanθ', 'k·m·g', 'm·g'],
    correctAnswerIndex: 1,
    solution: 'Ağırlık vektörü bileşenlerine ayrıldığında eğik düzleme paralel olan aşağı çekici kuvvet m·g·sinθ\'dır.',
    hint: 'Eğik düzlem açısı arttıkça (sinüs artar) cismi aşağı kaydıran kuvvet de artar.'
  },
  {
    id: 'q-11-2-7', grade: 11, testId: 2, topicId: '11-kuvvet-hareket',
    text: 'Atwood aleti (bir ipin iki ucundaki kütleler taşıyan makara sistemi) sürtünmesiz ortamda m₁=3 kg ve m₂=2 kg için ivme kaç m/s² olur?',
    options: ['1', '2', '3', '4', '5'],
    correctAnswerIndex: 1,
    solution: 'Fnet = G1 - G2 = 30 - 20 = 10 N. Toplam kütle = 3 + 2 = 5 kg. a = Fnet / m_toplam = 10 / 5 = 2 m/s².',
    hint: 'Net hareket ettirici kuvvet ağırlıkların farkıdır, bunu toplam kütleye bölün.'
  },
  {
    id: 'q-11-2-8', grade: 11, testId: 2, topicId: '11-kuvvet-hareket',
    text: 'Bir cisme etki eden sürtünme katsayısı sürtünen yüzeylerin hangi özelliğine bağlıdır?',
    options: ['Pürüzlülük yapısına ve cinsine', 'Yüzey alanının genişliğine', 'Sadece ağırlığa', 'Ortamın sıcaklığına', 'Basınç katsayısına'],
    correctAnswerIndex: 0,
    solution: 'Sürtünme katsayısı yüzeylerin pürüzlülük/pürüzsüzlük durumuna ve cinsine bağlıdır, yüzey alanından bağımsızdır.',
    hint: 'Kuru tahta ve buz yüzeylerindeki sürtünme farkını getirin aklınıza.'
  },
  {
    id: 'q-11-2-9', grade: 11, testId: 2, topicId: '11-kuvvet-hareket',
    text: 'Normal kuvvet (tepki kuvveti) yüzey tarafından cisme uygulanan hangi doğrultuda bir kuvvettir?',
    options: ['Yüzeye daima dik', 'Yüzeye daima paralel', 'Aşağı yönlü yerçekimine ters', 'Açı ortağı ekseninde', 'Sürtünme yönünde'],
    correctAnswerIndex: 0,
    solution: 'Normal kuvvet yüzeyin dik basınca gösterdiği reaksiyondur, adı üstünde normal (dik) doğrultuludur.',
    hint: 'Teğetsel olmayan, doğrudan yüzeyden dışarı doğru çizilen dik çizgiyi düşünün.'
  },
  {
    id: 'q-11-2-10', grade: 11, testId: 2, topicId: '11-kuvvet-hareket',
    text: 'Sürtünmesiz sistemde yatayda sergilenen m₁=4 kg ve m₂=1 kg kütleli yan yana iki bloğa 25 N itme kuvveti uygulanıyor. Aralarındaki temas tepki kuvveti kaç N olur?',
    options: ['5', '10', '15', '20', '25'],
    correctAnswerIndex: 0,
    solution: 'a = F / m_toplam = 25 / 5 = 5 m/s². bloğun arkasındaki m₂=1 kg cisme ivme kazandıran temas kuvveti T = m₂ · a = 1 · 5 = 5 N\'dir.',
    hint: 'Önce tüm sistemin ortak ivmesini bulun, ardından arkadaki küçük bloğu ittiren net temas kuvvetini hesaplayın.'
  },

  // --- TEST 3: Atışlar & Enerji ---
  {
    id: 'q-11-3-1', grade: 11, testId: 3, topicId: '11-kuvvet-hareket',
    text: 'Sürtünmesiz ortamda serbest düşmeye bırakılan bir cisim 3 saniyede kaç metre düşer? (g=10 m/s²)',
    options: ['15', '30', '45', '60', '80'],
    correctAnswerIndex: 2,
    solution: 'h = 1/2 · g · t² = 5 · t² = 5 · 3² = 45 m. (Pratik yol: 5, 15, 25 toplamı = 45m).',
    hint: 'Serbest düşüş yol formülü 5 · t²\'dir.'
  },
  {
    id: 'q-11-3-2', grade: 11, testId: 3, topicId: '11-kuvvet-hareket',
    text: 'Yerden düşey yukarı doğru v=30 m/s hızla fırlatılan bir cismin çıkabileceği maksimum yükseklik kaç metredir?',
    options: ['15', '30', '45', '90', '120'],
    correctAnswerIndex: 2,
    solution: 't_çıkış = v/g = 30/10 = 3 s. h_max = 5 · (t_çıkış)² = 5 · 9 = 45 m.',
    hint: 'Yerçekiminin hızı saniyede 10 m/s azalttığını düşünerek çıkış süresini bulun ve serbest düşme mesafesini hesaplayın.'
  },
  {
    id: 'q-11-3-3', grade: 11, testId: 3, topicId: '11-kuvvet-hareket',
    text: 'Sürtünmesiz ortamda yatay olarak Vo=10 m/s hızla h=20m yüksekten fırlatılan cismin yatayda aldığı menzil yolu kaç metredir?',
    options: ['10', '20', '30', '40', '50'],
    correctAnswerIndex: 1,
    solution: 'Düşeyde serbest düşme yapar: 20 = 5t² => t = 2 s . Yatayda sabit hızlıdır: X = Vo · t = 10 · 2 = 20 m.',
    hint: 'Yatay atışta havada kalma süresi sadece düşey h = 5t² formülünden bulunur.'
  },
  {
    id: 'q-11-3-4', grade: 11, testId: 3, topicId: '11-kuvvet-hareket',
    text: 'Yerden yatay ile 45° açı yapacak şekilde fırlatılan bir cismin hangi özelliği maksimum olur?',
    options: ['Yatay menzil uzunluğu', 'Havada kalma süresi', 'Maksimum tepe yüksekliği', 'Ulaştığı son hız', 'İvme değeri'],
    correctAnswerIndex: 0,
    solution: 'Açının 45 derece olması durumunda sin(2θ) maksimum (1) değerine ulaşır ve yatay menzil (X_max) pik yapar.',
    hint: 'En uzağa top fırlatmak isteyen gülle atıcılarının ideal fırlatma açısını düşünün.'
  },
  {
    id: 'q-11-3-5', grade: 11, testId: 3, topicId: '11-kuvvet-hareket',
    text: 'Esneklik katsayısı k = 100 N/m olan bir yay 20 cm sıkıştırıldığında yayda depolanan esneklik potansiyel enerjisi kaç Joule olur?',
    options: ['2', '4', '8', '20', '200'],
    correctAnswerIndex: 0,
    solution: 'x = 20 cm = 0.2 m. Ep = 1/2 · k · x² = 0.5 · 100 · (0.2)² = 50 · 0.04 = 2 Joule.',
    hint: 'Enerji formülü 1/2 · k · x²\'dir. Mesafeyi metreye (m) çevirmeyi unutmayın.'
  },
  {
    id: 'q-11-3-6', grade: 11, testId: 3, topicId: '11-kuvvet-hareket',
    text: 'Kütlesi m olan bir cismin hızı 2 katına çıkarılırsa kinetik enerjisi nasıl değişir?',
    options: ['Değişmez', '2 katına çıkar', '4 katına çıkar', 'Yarıya iner', '16 katına çıkar'],
    correctAnswerIndex: 2,
    solution: 'Ek = 1/2 · m · v² formülünden ötürü enerji, hızın karesiyle doğru orantılıdır. Hız 2 katına çıkınca enerji 4 katına çıkar.',
    hint: 'Hızın karesinin etkisini düşünün.'
  },
  {
    id: 'q-11-3-7', grade: 11, testId: 3, topicId: '11-kuvvet-hareket',
    text: '80 metre yükseklikten serbest düşmeye bırakılan bir cismin yere çarpma hızı kaç m/s\'dir?',
    options: ['20', '30', '40', '50', '80'],
    correctAnswerIndex: 2,
    solution: 'h = 5t² => 80 = 5t² => t = 4 s. V = g · t = 10 · 4 = 40 m/s.',
    hint: 'Önce havada kalma süresini bulun ya da v² = 2gh zamansız hız formülünü kullanın.'
  },
  {
    id: 'q-11-3-8', grade: 11, testId: 3, topicId: '11-kuvvet-hareket',
    text: 'Hava direncinin olduğu bir ortamda düşen bir yağmur damlasının ulaştığı ve daha fazla artmadığı sabit hıza ne ad verilir?',
    options: ['Kritik hız', 'Limit hız', 'Eşit hız', 'İdeal hız', 'Sonsuz hız'],
    correctAnswerIndex: 1,
    solution: 'Hava direnç kuvvetinin yerçekimi kuvvetine eşit olduğu an ivme sıfırlanır ve cisim limit hıza ulaşır.',
    hint: 'Yağmur damlalarının bizi yaralamadan sabit hızla yere inebilme nedenidir.'
  },
  {
    id: 'q-11-3-9', grade: 11, testId: 3, topicId: '11-kuvvet-hareket',
    text: 'Esnek çarpışma yapan iki cisim için hangi nicelikler çarpışma boyunca korunur?',
    options: ['Sadece momentum', 'Sadece kinetik enerji', 'Hem momentum hem kinetik enerji', 'Hiçbiri', 'Sadece kütle'],
    correctAnswerIndex: 2,
    solution: 'Esnek çarpışmalarda dış kayıp olmadığından hem toplam vektörel momentum hem de toplam mekanik kinetik enerji korunur.',
    hint: 'Esnek olmayan çarpışmalarda enerjinin ısıya/şekil değişimine dönüştüğünü hatırlatın.'
  },
  {
    id: 'q-11-3-10', grade: 11, testId: 3, topicId: '11-kuvvet-hareket',
    text: 'Bir cismin momentumundaki değişim (ΔP) aşağıdakilerden hangisine eşittir?',
    options: ['Güç', 'İş', 'İtme (I = F·Δt)', 'Kinetik Enerji', 'Yapılan tork oranı'],
    correctAnswerIndex: 2,
    solution: 'İtme-Momentum ilişkisine göre I = F · Δt = ΔP (momentum değişimi).',
    hint: 'Kuvvet çarpı etkileşim süresinin oluşturduğu itmeyi düşünün.'
  },

  // ================= 12. SINIF =================
  // --- TEST 1: Düzgün Çembersel Hareket ---
  {
    id: 'q-12-1-1', grade: 12, testId: 1, topicId: '12-cembersel-hareket',
    text: 'Yarıçapı r = 2 m olan çembersel yörüngede t = 12 saniyede 4 tam tur atan cismin periyodu kaç saniyedir?',
    options: ['2', '3', '4', '6', '8'],
    correctAnswerIndex: 1,
    solution: 'Periyot (T), bir tam tur için geçen süredir. T = Toplam Süre / Tur Sayısı = 12 / 4 = 3 saniye.',
    hint: 'Toplam saniyeyi atılan tur sayısına bölün.'
  },
  {
    id: 'q-12-1-2', grade: 12, testId: 1, topicId: '12-cembersel-hareket',
    text: 'Düzgün çembersel hareket yapan cismin çizgisel hız vektörü ile yarıçap vektörü arasındaki açı kaç derecedir?',
    options: ['0', '30', '45', '60', '90'],
    correctAnswerIndex: 4,
    solution: 'Çizgisel hız yönü yörüngeye teğet olup, dairesel merkeze bağlayan yarıçap doğrusuna her an diktir (90°).',
    hint: 'İpin ucundaki taş dönerken ip doğrultusu ile taşın fırlayacağı doğrultu arasındaki açıyı hayal edin.'
  },
  {
    id: 'q-12-1-3', grade: 12, testId: 1, topicId: '12-cembersel-hareket',
    text: 'Çizgisel hızı v = 6 m/s ve yarıçapı r = 3 m olan düzgün dairesel hareketlinin merkezcil ivmesi kaç m/s²\'dir?',
    options: ['2', '6', '12', '18', '36'],
    correctAnswerIndex: 2,
    solution: 'amer = v² / r = 6² / 3 = 36 / 3 = 12 m/s².',
    hint: 'Hızın karesini yarıçapa oranlayın.'
  },
  {
    id: 'q-12-1-4', grade: 12, testId: 1, topicId: '12-cembersel-hareket',
    text: 'Açısal hızı ω = 2 rad/s olan m = 3 kg kütleli cisim r = 2 m yarıçaplı yörüngede dönüyor. Merkezcil kuvvet kaç N\'dir?',
    options: ['6', '12', '18', '24', '36'],
    correctAnswerIndex: 3,
    solution: 'Fmer = m · ω² · r = 3 · (2)² · 2 = 3 · 4 · 2 = 24 N.',
    hint: 'm · ω² · r formülünü doğrudan uygulayın.'
  },
  {
    id: 'q-12-1-5', grade: 12, testId: 1, topicId: '12-cembersel-hareket',
    text: 'Düzgün çembersel harekette frekans (f) ile periyot (T) arasındaki matematiksel model nasıldır?',
    options: ['T · f = 1', 'T / f = 1', 'T + f = 1', 'T · f = 2π', 'T · f = g'],
    correctAnswerIndex: 0,
    solution: 'Frekans ve periyot birbirinin çarpmaya göre tersidir. T · f = 1.',
    hint: 'Biri bir turun süresi, diğeri bir saniyedeki tur sayısıdır.'
  },
  {
    id: 'q-12-1-6', grade: 12, testId: 1, topicId: '12-cembersel-hareket',
    text: 'Dairesel bir viraja giren aracın güvenle dönebilmesi için maksimum emniyetli hız limiti neye bağlı değildir?',
    options: ['Sürtünme katsayısına', 'Yarıçapa', 'Yerçekimi ivmesine', 'Aracın kütlesine', 'Virajın eğim açısına'],
    correctAnswerIndex: 3,
    solution: 'Emniyetli hız f_s = F_mer => k·m·g = m·v²/r formülünden kütleler (m) sadeleşir, emniyetli hız kütleden bağımsızdır.',
    hint: 'Ağır bir kamyon ile hafif bir binek otomobilin aynı hız sınırında viraj alabildiğini hayal edin.'
  },
  {
    id: 'q-12-1-7', grade: 12, testId: 1, topicId: '12-cembersel-hareket',
    text: 'Bir ipin ucuna bağlı m kütleli cisim düşey düzlemde dairesel hareket yapıyor. İp gerilmesi yörüngenin en üst noktasında nasıl yazılır?',
    options: ['T = F_mer - mg', 'T = F_mer + mg', 'T = F_mer', 'T = mg', 'T = 0'],
    correctAnswerIndex: 0,
    solution: 'Tepe noktasında hem ip gerilmesi (T) hem de ağırlık (mg) merkeze doğrudur. T + mg = F_mer => T = F_mer - mg.',
    hint: 'En üst noktada yerçekimi de merkeze yardım ettiği için ip üzerinde en az gerginlik/zorlama oluşur.'
  },
  {
    id: 'q-12-1-8', grade: 12, testId: 1, topicId: '12-cembersel-hareket',
    text: 'Açısal hız vektörünün yönü hangi kural ile belirlenir?',
    options: ['Sağ el kuralı', 'Sol el kuralı', 'Lenz yasası', 'Pythagoras kuralı', 'Eylemsizlik yasası'],
    correctAnswerIndex: 0,
    solution: 'Sağ elin dört parmağı dönme yönünü gösterecek şekilde büküldüğünde açılan başparmak açısal hızın yönünü verir.',
    hint: 'Fizikte dönme ve manyetizma yönlerinde sıkça kullandığımız el kuralını hatırlayın.'
  },
  {
    id: 'q-12-1-9', grade: 12, testId: 1, topicId: '12-cembersel-hareket',
    text: 'Çizgisel hızı ile açısal hızı arasındaki ilişkiyi gösteren yarıçap çarpanlı formül hangisidir?',
    options: ['v = ω / r', 'v = ω · r', 'v = ω² · r', 'v = ω · r²', 'v = 2π / ω'],
    correctAnswerIndex: 1,
    solution: 'Çizgisel hız yörünge boyunca alınan yay hızı olup v = ω · r ilişkisine sahiptir.',
    hint: 'Merkeze yakın dönenlerin çizgisel hızı az, dışta dönenlerin fazladır.'
  },
  {
    id: 'q-12-1-10', grade: 12, testId: 1, topicId: '12-cembersel-hareket',
    text: 'Dönme hareketi yapan bir cismin dönmeye karşı gösterdiği zorluk veya eylemsizlik direncine ne ad verilir?',
    options: ['Merkezcil İvme', 'Açısal Momentum', 'Eylemsizlik Momenti (I)', 'Tork Potansiyeli', 'Kritik Çekim'],
    correctAnswerIndex: 2,
    solution: 'Dönme hareketine karşı direnç ölçüsüne Eylemsizlik Momenti (Eylemsizlik Torku - I = m·r²) denir.',
    hint: 'Diskin ve halkanın dönme zorluklarının farklı olmasını belirleyen katsayıdır.'
  },

  // --- TEST 2: Açısal Momentum & Kütleçekimi ---
  {
    id: 'q-12-2-1', grade: 12, testId: 2, topicId: '12-cembersel-hareket',
    text: 'Dönen bir buz patencisinin kollarını kapatması durumunda eylemsizlik momenti (I) ve açısal hızı (ω) nasıl değişir?',
    options: ['I artar, ω azalır', 'I azalır, ω artar', 'İkisi de artar', 'İkisi de azalır', 'Değişmezler'],
    correctAnswerIndex: 1,
    solution: 'Kollar kapatılınca kütle merkeze yaklaşır, I = m·r² azalır. Açısal momentum (L=I·ω) dış tork yokken korunacağından ω artar ve sporcu hızlanır.',
    hint: 'Patencilerin kolları kapatınca neden vınlayarak daha hızlı döndüğünü hayal edin.'
  },
  {
    id: 'q-12-2-2', grade: 12, testId: 2, topicId: '12-cembersel-hareket',
    text: 'Açısal momentum (L) ile çizgisel momentum (P) arasındaki dairesel yarıçap çarpanlı bağlantı hangisidir?',
    options: ['L = P · r', 'L = P / r', 'L = P · r²', 'L = m · P', 'L = P / r²'],
    correctAnswerIndex: 0,
    solution: 'Açısal momentum, çizgisel momentumun dönme merkezine göre torku gibidir: L = P · r = m · v · r.',
    hint: 'Çizgisel momentum bileşeni ile yarıçapın dikey çarpımıdır.'
  },
  {
    id: 'q-12-2-3', grade: 12, testId: 2, topicId: '12-cembersel-hareket',
    text: 'Kepler\'in 2. Kanunu olan Alanlar Kanununa göre, Güneş etrafında dolanan bir gezegen Güneş\'e yaklaştıkça hızı nasıl değişir?',
    options: ['Hızı azalır', 'Hızı artar', 'Hızı değişmez', 'Önce azalır sonra artar', 'Sıkışıp durur'],
    correctAnswerIndex: 1,
    solution: 'Gezegen Güneş\'e yaklaştığında açısal momentumu korumak için (r küçüldüğünden) hızı (v) artar. Eşit zamanlarda eşit alanlar tarar.',
    hint: 'Güneş’in güçlü kütleçekim alanına giren gezegenin savrulmamak için hızlanması gerekir.'
  },
  {
    id: 'q-12-2-4', grade: 12, testId: 2, topicId: '12-cembersel-hareket',
    text: 'İki gök cismi arasındaki kütleçekim kuvveti, aralarındaki uzaklığın karesiyle nasıl orantılıdır?',
    options: ['Doğru orantılıdır', 'Ters orantılıdır', 'Orantılı değildir', 'Kübik orantılıdır', 'Logaritmiktir'],
    correctAnswerIndex: 1,
    solution: 'F = G · (m1 · m2) / d² formülünden kütleçekimi uzaklığın karesiyle ters orantılıdır.',
    hint: 'Maddeler birbirinden uzaklaştıkça çekim kuvveti hızla (karesi kadar) zayıflar.'
  },
  {
    id: 'q-12-2-5', grade: 12, testId: 2, topicId: '12-cembersel-hareket',
    text: 'Kepler\'in 3. Yasası olan Periyotlar Kanununa göre, gezegenlerin yörünge yarıçaplarının küpü (R³) ile dolanım periyotlarının karesi (T²) oranı nasıldır?',
    options: ['Gezegene göre değişir', 'Sabittir', 'Daima sıfırdır', 'Kütleye bağlıdır', '1/Periyottur'],
    correctAnswerIndex: 1,
    solution: 'Aynı yıldız etrafında dolanan tüm gezegenler için R³ / T² oranı sabit bir sabite eşittir.',
    hint: 'Güneş sistemindeki tüm gezegenler için bu oran aynı değeri verir.'
  },
  {
    id: 'q-12-2-6', grade: 12, testId: 2, topicId: '12-cembersel-hareket',
    text: 'Bir gezegenin yüzeyinden kurtulmak isteyen bir uydunun fırlatılma hızına ne verilir?',
    options: ['Limit Hız', 'Kurtulma Hızı', 'Bağlanma Enerjisi', 'Yörünge Sabiti', 'Kaçış Sapması'],
    correctAnswerIndex: 1,
    solution: 'Cismin kütleçekim alanından kurtulabilmesi için sahip olması gereken minimum hıza kurtulma hızı denir.',
    hint: 'Yükselen roketlerin Dünya yerçekiminden kaçabilmesini sağlayan hız limitidir.'
  },
  {
    id: 'q-12-2-7', grade: 12, testId: 2, topicId: '12-cembersel-hareket',
    text: 'Yeryüzünden uzaklaştıkça yerçekimi ivmesi (g) nasıl değişir?',
    options: ['Zemin üstünde azalır', 'Artar', 'Sabit kalır', 'Önce artar sonra azalır', 'Tamamen sıfırlanır'],
    correctAnswerIndex: 0,
    solution: 'Yerçekimi ivmesi g = G·M/R² gereği yüzeyden göğe doğru çıkıldığında uzaklığın karesiyle azalarak sıfıra yaklaşır.',
    hint: 'Dünya’nın kütle merkezinden uzaklaştıkça çekim gücü azalacaktır.'
  },
  {
    id: 'q-12-2-8', grade: 12, testId: 2, topicId: '12-cembersel-hareket',
    text: 'Yerçekimi ivmesi Dünya’nın merkezinde (iç katmanlarda) merkeze yaklaştıkça nasıl değişir?',
    options: ['Yüzeye göre azalır ve merkezde sıfır olur', 'Merkeze yaklaştıkça sonsuz olur', 'Sabit kalır', 'Atmosfer gibi yoğundur', 'Kabukla aynıdır'],
    correctAnswerIndex: 0,
    solution: 'Gezegen içinde yerçekimi g = K·d·r formülüyle merkeze uzaklıkla doğru orantılıdır. Merkezde r=0 olduğundan g=0 olur.',
    hint: 'Dünya’nın tam merkezinde her yönden eşit kütleçekimi kütleyi her taraftan eşit çekeceğinden bileşke çekim sıfır olur.'
  },
  {
    id: 'q-12-2-9', grade: 12, testId: 2, topicId: '12-cembersel-hareket',
    text: 'Açısal momentumun birimi aşağıdakilerden hangisidir?',
    options: ['kg·m²/s', 'kg·m/s', 'N·m', 'Joule/s', 'Watt·m'],
    correctAnswerIndex: 0,
    solution: 'L = m·v·r formülünden birim: kg · (m/s) · m = kg·m²/s bulunur.',
    hint: 'Kütle (kg), hız (m/s) ve mesafe (m) çarpanlarının birleşimini düşünün.'
  },
  {
    id: 'q-12-2-10', grade: 12, testId: 2, topicId: '12-cembersel-hareket',
    text: 'Gezegenlerin dairesel değil de eliptik yörüngelerde dolandığını açıklayan ilk bilim insanı kimdir?',
    options: ['Galileo', 'Newton', 'Kepler', 'Copernicus', 'Einstein'],
    correctAnswerIndex: 2,
    solution: 'Yörüngeler kanununu açıklayarak gezegenlerin odaklarından birinde Güneş bulunan elips şeklinde dolandığını Kepler bulmuştur.',
    hint: 'Gezegen yasalarının isim babası olan bilim insanını düşünün.'
  },

  // --- TEST 3: Harmonik Hareket & Dalgalar ---
  {
    id: 'q-12-3-1', grade: 12, testId: 3, topicId: '12-cembersel-hareket',
    text: 'Basit sarkaçta (ipli sarkaç) salınım periyodu hangisine bağlı değildir?',
    options: ['İpin uzunluğuna (L)', 'Yerçekimi ivmesine (g)', 'Cismin kütlesine (m)', 'Sarkacın bulunduğu konuma', 'Yerçekimine'],
    correctAnswerIndex: 2,
    solution: 'Sarkaç periyodu T = 2π√(L/g) (Tolga) formülüyle bulunur. Cismin kütlesi periyodu etkilemez.',
    hint: 'Formülde kütleyi (m) temsil eden bir harf var mı kontrol edin.'
  },
  {
    id: 'q-12-3-2', grade: 12, testId: 3, topicId: '12-cembersel-hareket',
    text: 'Yaylı sarkaçta salınım yapan cismin periyodu hangi formül ile hesaplanır?',
    options: ['T = 2π√(m/k)', 'T = 2π√(L/g)', 'T = 2π√(k/m)', 'T = v / f', 'T = 2π · r / v'],
    correctAnswerIndex: 0,
    solution: 'Yay sarkaçlarında periyot T = 2π√(m/k) (Tam ek) formülüyle hesaplanır.',
    hint: 'Kütle m ve esneklik katsayısı k çarpanlarını barındırır.'
  },
  {
    id: 'q-12-3-3', grade: 12, testId: 3, topicId: '12-cembersel-hareket',
    text: 'Basit harmonik hareket yapan bir cismin hızı denge konumundan (merkezden) geçerken nasıldır?',
    options: ['Sıfırdır', 'Maksimumdur', 'Yarı değerindedir', 'Geri çağırıcıdır', 'Sabit ivmelidir'],
    correctAnswerIndex: 1,
    solution: 'Uç noktalarda durup geri dönen cisim, tam orta denge noktasından geçerken kinetik enerjisi maksimum olur, hız pik noktadadır.',
    hint: 'Salıncakta sallanırken en hızlı geçtiğiniz anı hayal edin.'
  },
  {
    id: 'q-12-3-4', grade: 12, testId: 3, topicId: '12-cembersel-hareket',
    text: 'Denge konumundan olan maksimum uzaklığa ne ad verilir?',
    options: ['Uzanım', 'Genlik', 'Dalga Boyu', 'Faz', 'Aralık'],
    correctAnswerIndex: 1,
    solution: 'Denge konumuna olan anlık mesafeye uzanım, uzanımın en büyük değerine genlik (R) denir.',
    hint: 'Harekette ulaşılabilecek en uç sınırı düşünün.'
  },
  {
    id: 'q-12-3-5', grade: 12, testId: 3, topicId: '12-cembersel-hareket',
    text: 'Frekansları aynı olan iki dalga kaynağının tepe ve çukurlarının üst üste binerek oluşturduğu desene ne ad verilir?',
    options: ['Kırınım', 'Girişim', 'Saçılma', 'Kutuplanma', 'Yansıma'],
    correctAnswerIndex: 1,
    solution: 'Dalgaların birbiri içerisinden geçerken üst üste gelerek genliği artırması ya da sönümlemesi girişim (desenidir).',
    hint: 'Suyun üzerindeki iki damlanın halkalarının birbirini kesmesini düşünün.'
  },
  {
    id: 'q-12-3-6', grade: 12, testId: 3, topicId: '12-cembersel-hareket',
    text: 'Dalgaların engellerin kenarından geçerken bükülmesi veya yarıklardan geçerken daireselleşmesi olayına ne ad verilir?',
    options: ['Girişim', 'Yansıma', 'Kırınım', 'Kırılma', 'Polarizasyon'],
    correctAnswerIndex: 2,
    solution: 'Dalga boyunun yarık genişliğiyle kıyaslanabilir olduğu durumlarda engel kenarında eğrilmesi kırınım olayıdır.',
    hint: 'Gelen doğrusal su dalgalarının dar bir kapıdan geçerek daireselleşmesini hayal edin.'
  },
  {
    id: 'q-12-3-7', grade: 12, testId: 3, topicId: '12-cembersel-hareket',
    text: 'Kaynak ile gözlemci arasındaki bağıl hareket nedeniyle dalga frekansının farklı algılanması olayına ne ad verilir?',
    options: ['Doppler Olayı', 'Photoelektrik', 'Compton Kayması', 'Kırılma', 'Kutuplanma'],
    correctAnswerIndex: 0,
    solution: 'Yaklaşan kaynağın sesinin tizleşmesi, uzaklaşanın kalınlaşmasını açıklayan etki Doppler olayıdır.',
    hint: 'Siren çalarak yaklaşan ve uzaklaşan bir ambulansın korna tonundaki değişimi hatırlayın.'
  },
  {
    id: 'q-12-3-8', grade: 12, testId: 3, topicId: '12-cembersel-hareket',
    text: 'Aşağıdakilerden hangisi elektromanyetik dalgaların özelliklerinden biri değildir?',
    options: ['Boşlukta ışık hızıyla yayılırlar', 'Enine dalgalardır', 'Yansıma ve kırılma yaparlar', 'Yayılmak için maddi ortama ihtiyaç duyarlar', 'Yüksüz dalgalardır'],
    correctAnswerIndex: 3,
    solution: 'Elektromanyetik dalgalar (ışık, röntgen, vb.) boşlukta yayılabilir, maddi ortama muhtaç değildir.',
    hint: 'Güneş ışınlarının uzay boşluğunu aşarak bize ulaşmasını düşünün.'
  },
  {
    id: 'q-12-3-9', grade: 12, testId: 3, topicId: '12-cembersel-hareket',
    text: 'Bir ışık metal yüzeye çarparak elektron kopartıyorsa bu fiziksel olaya ne ad verilir?',
    options: ['Fotoelektrik olay', 'Compton saçılması', 'Kara cisim ışıması', 'Kırınım', 'Girişim'],
    correctAnswerIndex: 0,
    solution: 'Işığın metal plakadan elektron sökebilmesine ve akım oluşturabilmesine fotoelektrik olay denir.',
    hint: 'Modern fizikte ışığın tanecik modelini ispatlayan ve Einstein\'a Nobel kazandıran olaydır.'
  },
  {
    id: 'q-12-3-10', grade: 12, testId: 3, topicId: '12-cembersel-hareket',
    text: 'Modern fizikte "Heisenberg Belirsizlik İlkesi" temel olarak neyi savunur?',
    options: ['Işığın sadece dalga olduğunu', 'Bir parçacığın konumu ve momentumunun aynı anda kusursuz ölçülemeyeceğini', 'Hızın ışık hızını geçemeyeceğini', 'Kütlenin enerjiye dönüşemeyeceğini', 'Evrenin deterministik yapıda olduğunu'],
    correctAnswerIndex: 1,
    solution: 'Kuantum mekaniğinde konum (Δx) ve momentum (Δp) belirsizliklerinin çarpımı Planck sabitinden büyük ya da eşittir, aynı anda tam olarak bilinemezler.',
    hint: 'Bir elektronun tam bulut yerini belirlediğinizde hızını, hızını bulduğunuzda ise yerini kaçıracağınız kuraldır.'
  }
];
