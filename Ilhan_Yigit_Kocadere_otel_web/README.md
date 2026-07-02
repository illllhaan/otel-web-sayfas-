# İlhan Hotel Kapadokya - Kurumsal Otel Tanıtım Portalı

## 1. Proje ve Öğrenci Bilgileri

- **Proje adı:** İlhan Hotel Kapadokya Kurumsal Otel Tanıtım Portalı
- **Öğrenci:** İlhan Yiğit Kocadere
- **Öğrenci numarası:** 24903001
- **Ders:** BGY206 Web Programlama-I
- **Dönem:** 2025-2026 Akademik Yılı / Bahar Dönemi
- **Proje türü:** Çok sayfalı, responsive, etkileşimli kurumsal otel web sitesi

## 2. Tasarım Kararları

### Seçilen bölge ve hedef kitle

Proje için **Kapadokya** bölgesi seçilmiştir. Hedef kitle, Kapadokya'ya gelen yerli ve yabancı **turistlerdir**. Otel butik bir konseptte kurgulanmıştır. Bu nedenle tasarımda sıcak, doğal ve taş mimariye uygun bir görsel kimlik tercih edilmiştir.

### Renk paleti seçiminin gerekçesi

Kullanılan temel renkler:

- `#D2B48C` Tan: Kapadokya'nın taş ve kum tonlarını temsil eder.
- `#8B4513` SaddleBrown: Peri bacaları, mağara oteller ve doğal toprak dokusuyla uyumludur.
- `#E8D4B8` Açık krem: Sayfada sıcaklık, okunabilirlik ve lüks butik otel hissi verir.
- `#3A2418` Koyu kahverengi: Başlık, footer ve kontrast alanlarında kullanılmıştır.

Bu palet, Kapadokya'nın doğal kaya dokusunu ve gün batımı atmosferini yansıtmak için seçilmiştir.

### Font seçiminin gerekçesi

- **Playfair Display:** Başlıklarda kullanılmıştır. Serif yapısı sayesinde butik ve lüks otel algısını güçlendirir.
- **Lato:** Paragraflar, butonlar ve form alanlarında kullanılmıştır. Sans-serif yapısı okunabilirliği artırır.
- Genel metinlerde `line-height: 1.6` kullanılmıştır. Böylece minimum 1.5 satır aralığı şartı karşılanmıştır.

## 3. Teknik Detaylar

### Sayfa yapısı

Projede beş temel HTML sayfası vardır:

1. `index.html` - Ana sayfa
2. `odalar.html` - Odalar ve fiyatlar
3. `rezervasyon.html` - Rezervasyon formu
4. `galeri.html` - Fotoğraf galerisi
5. `hakkimizda.html` - Kurumsal bilgiler, iletişim, etik beyan ve kaynakça

### CSS Grid ve Flexbox kullanımı

- **Ana sayfa:** Avantaj kartlarında CSS Grid kullanılmıştır.
- **Odalar sayfası:** Oda kartları ve filtre panelinde CSS Grid kullanılmıştır.
- **Rezervasyon sayfası:** Form alanları iki sütunlu CSS Grid ile hizalanmıştır.
- **Galeri sayfası:** Şartnamedeki yapıya uygun olarak şu yapı kullanılmıştır:

```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

- **Navigasyon:** Flexbox ile hizalanmıştır.

### Media Query kırılım noktaları

Projede üç temel ekran yaklaşımı vardır:

- **Masaüstü:** 1024px ve üzeri geniş ekran düzeni
- **Tablet:** `max-width: 1023px` ile iki sütunlu düzen
- **Mobil:** `max-width: 600px` ile tek sütunlu düzen ve hamburger menü

Mobilde buton ve bağlantıların dokunma alanları en az 44px olacak şekilde tasarlanmıştır.

### JavaScript etkileşimleri

`js/script.js` dosyasında aşağıdaki etkileşimler uygulanmıştır:

1. **Form doğrulama:** Rezervasyon formundaki zorunlu alanlar kontrol edilir.
2. **Dinamik bildirim:** Form doğru gönderildiğinde sayfa yenilenmeden başarı mesajı gösterilir.
3. **Tarih kontrolü:** Çıkış tarihi, giriş tarihinden önce veya aynı gün olamaz.
4. **Sticky menü efekti:** Sayfa kaydırılınca menünün gölgesi değişir.
5. **Oda filtreleme:** Odalar kapasite ve maksimum fiyat bilgisine göre filtrelenir.
6. **Galeri lightbox:** Galeri görselleri modal pencerede büyütülerek açılır.
7. **Mobil hamburger menü:** Mobilde navigasyon açılıp kapanır.
8. **Smooth scroll:** Sayfa içi bağlantılarda akıcı kaydırma uygulanır.

Tüm JavaScript kodları ayrı dosyada tutulmuştur ve inline JavaScript kullanılmamıştır.

## 4. Erişilebilirlik Notları

- Tüm görsellerde açıklayıcı `alt` metinleri kullanılmıştır.
- Formdaki tüm input ve select alanları `label` etiketi ile ilişkilendirilmiştir.
- Klavye kullanıcıları için `:focus-visible` stilleri eklenmiştir.
- Galeri lightbox alanında `role="dialog"`, `aria-modal` ve `aria-hidden` özellikleri kullanılmıştır.
- Menü butonunda `aria-expanded` ve `aria-controls` kullanılmıştır.
- Renk kontrastı için koyu kahverengi zemin üzerinde açık krem/beyaz metin tercih edilmiştir.
- Sayfanın başında "Ana içeriğe geç" skip link kullanılmıştır.

## 5. Dosya ve Klasör Yapısı

```text
24903001_Ilhan_Yigit_Kocadere/
│
├── index.html
├── odalar.html
├── rezervasyon.html
├── galeri.html
├── hakkimizda.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│   ├── images/
│   └── icons/
│
└── README.md
```

Tüm CSS, JavaScript ve görsel bağlantıları relative path ile verilmiştir.

## 6. Kaynakça

Bu projedeki otel, adres ve iletişim bilgileri kurgu olarak hazırlanmıştır.

### Görseller

Aşağıdaki görseller proje için temsili olarak **Google Gemini** ile oluşturulmuştur. Harici telifli fotoğraf kullanılmamıştır. AI ile üretildikleri için doğrudan kaynak URL'si bulunmamaktadır; kaynak kısmında bu durum açıkça belirtilmiştir.

- `hero-cappadocia-ilhan-hotel.webp` - Google Gemini AI görseli, kaynak URL yok - AI Generated / Project Use
- `oda-standart.webp` - Google Gemini AI görseli, kaynak URL yok - AI Generated / Project Use
- `oda-deluxe.webp` - Google Gemini AI görseli, kaynak URL yok - AI Generated / Project Use
- `oda-suite.webp` - Google Gemini AI görseli, kaynak URL yok - AI Generated / Project Use
- `gallery-balloon-view.webp` - Google Gemini AI görseli, kaynak URL yok - AI Generated / Project Use
- `gallery-breakfast.webp` - Google Gemini AI görseli, kaynak URL yok - AI Generated / Project Use
- `gallery-spa.webp` - Google Gemini AI görseli, kaynak URL yok - AI Generated / Project Use
- `gallery-restaurant.webp` - Google Gemini AI görseli, kaynak URL yok - AI Generated / Project Use
- `gallery-courtyard.webp` - Google Gemini AI görseli, kaynak URL yok - AI Generated / Project Use
- `gallery-balloons.webp` - Google Gemini AI görseli, kaynak URL yok - AI Generated / Project Use
- `gallery-reception.webp` - Google Gemini AI görseli, kaynak URL yok - AI Generated / Project Use

### İkonlar ve fontlar

- `logo-ilhan.webp`, `logo-ilhan-full.webp` ve `favicon.png` - Google Gemini AI logo görseli, kaynak URL yok - AI Generated / Project Use
- Google Fonts: Lato ve Playfair Display - Google Fonts License

## 7. Etik Beyanı

Bu proje BGY206 Web Programlama-I final projesi için hazırlanmıştır. HTML, CSS ve JavaScript dosyaları proje şartnamesindeki gereksinimleri karşılayacak şekilde oluşturulmuştur. Kullanılan görseller Google Gemini ile oluşturulmuş temsili/AI destekli üretimlerdir ve kaynakça bölümünde açıkça belirtilmiştir.
