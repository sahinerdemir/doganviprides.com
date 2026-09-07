# Dogan VIP Rides — Google Arama Motoru (GSC), GEO & Kurulum Kılavuzu

Bu rehber, yeni **Dogan VIP Rides** web sitesinin Google'da en üst sıralara çıkması, Google Haritalar (Local SEO) ve Yapay Zeka Arama Motorlarında (Perplexity, ChatGPT Search, Gemini) ilk sırada önerilmesi için yapılması gereken adımları içerir.

---

## 1. Google Search Console (GSC) Kaydı ve Site Haritası Gönderimi

### Adım 1: Search Console Mülkü Ekleyin
1. [Google Search Console](https://search.google.com/search-console/) adresine gidin.
2. **Mülk Ekle (Add Property)** butonuna tıklayın.
3. **Alan Adı (Domain)** seçeneğini seçip `doganviprides.com` yazın.
4. Size verilen TXT doğrulama kaydını DNS sağlayıcınıza (Cloudflare, GoDaddy, Namecheap vb.) ekleyin.

### Adım 2: Sitemap Gönderin
1. Doğrulama tamamlandıktan sonra sol menüden **Site Haritaları (Sitemaps)** sekmesine gidin.
2. Yeni site haritası ekle alanına şunu yazıp **Gönder (Submit)** butonuna basın:
   ```
   https://www.doganviprides.com/sitemap.xml
   ```
3. Durumun **"Başarılı (Success)"** olduğunu teyit edin. Next.js altyapımız tüm sayfaları (`/`, `/services`, `/fleet`, `/airport-transfers`, `/hourly-chauffeur`, `/corporate-travel`, `/about`, `/contact`) otomatik olarak indeksletecektir.

---

## 2. Google Business Profile (Google Haritalar & Yerel SEO) Senkronizasyonu

Local SEO (New Jersey ve NYC bölgesi VIP transfer aramaları) için Google İşletme Profilinizdeki bilgilerin web sitesiyle birebir aynı olması zorunludur:

| Alan | Web Sitesindeki Veri (Eşleşmeli) |
| :--- | :--- |
| **İşletme Adı** | `Dogan VIP Rides LLC` (veya `Dogan VIP Rides - Executive Chauffeur Service`) |
| **Kategori** | Limousine Service, Chauffeur Service, Airport Shuttle Service |
| **Telefon** | `+1 (551) 331-5426` |
| **Hizmet Bölgeleri** | New Jersey, Manhattan, Brooklyn, Queens, JFK, EWR, LGA, Teterboro, Hamptons |
| **Çalışma Saatleri** | 7/24 Açık (24 Hours) |
| **Web Sitesi URL** | `https://www.doganviprides.com` |
| **Rezervasyon Linki** | `https://www.doganviprides.com/#booking-section` |

---

## 3. GEO (Yapay Zeka Arama Motorları Optimizasyonu) Nasıl Çalışır?

Sitenin koduna eklediğimiz semantik mimari sayesinde:
1. **Perplexity & ChatGPT Search:** Kullanıcı *"Best VIP airport transfer from Bergen County to JFK"* veya *"Hourly luxury chauffeur in Manhattan"* diye sorduğunda, sitenizdeki JSON-LD `TaxiService` ve `FAQPage` şemalarını okuyarak Dogan VIP Rides'ı doğrudan kaynak olarak gösterecektir.
2. **Google AI Overviews (SGE):** Havaalanı bekleme süreleri (60 dk ücretsiz), araç kapasiteleri ve canlı uçuş takip özellikleri özet kartlarda doğrudan yer alacaktır.

---

## 4. Google Analytics 4 (GA4) & Dönüşüm Takibi (Lead Tracking)

Sitedeki potansiyel müşteri hareketlerini izlemek için GA4 ölçüm kimliğinizi (`G-XXXXXXXXXX`) ekleyebilirsiniz. İzlenen kritik dönüşüm hedefleri:
- `lead_form_submitted`: Rezervasyon formu doldurulduğunda.
- `click_to_call`: `(551) 331-5426` numarası tıklandığında.
- `click_whatsapp_button`: WhatsApp canlı destek butonuna basıldığında.
- `vehicle_view`: Filo inceleme etkileşimleri.

---

## 5. Canlıya Alma / Yayına Alma (Deploy Seçenekleri)

### Seçenek A: Vercel ile 1 Tıkla Yayınlama (En Hızlı & Önerilen)
1. Projeyi GitHub reponuza push edin (`git push origin main`).
2. [Vercel](https://vercel.com) üzerinde **Add New Project** diyerek repoyu seçin.
3. Framework **Next.js** olarak otomatik algılanacaktır. **Deploy** butonuna basın.
4. Domain ayarlarından `www.doganviprides.com` ve `doganviprides.com` ekleyin.

### Seçenek B: Node.js / Custom VPS (Docker veya PM2)
```bash
# Üretim buildi almak için:
npm run build

# Canlıda çalıştırmak için (Port 3000):
npm run start
```
