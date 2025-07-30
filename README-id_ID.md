# Kalkulator Zakat

Aplikasi web komprehensif yang membantu umat Muslim menghitung zakat mereka dengan mudah dan akurat sesuai syariat Islam. Dibangun dengan teknologi web modern dan dirancang untuk aksesibilitas global.

## 🌟 Fitur Utama

### **Kalkulator Zakat Lengkap**
- **Zakat Emas**: Menghitung zakat emas dengan nisab 85 gram
- **Zakat Perak**: Menghitung zakat perak dengan nisab 595 gram  
- **Zakat Mal**: Menghitung zakat uang tunai, tabungan, deposito, dan investasi
- **Zakat Penghasilan**: Menghitung zakat gaji dan pendapatan bulanan

### **Integrasi Dalil Syariat**
- Menampilkan ayat Al-Quran dan hadits shahih yang relevan untuk setiap jenis zakat
- Teks Arab dengan terjemahan bahasa Indonesia
- Kutipan sumber yang tepat (surah/ayat Al-Quran, koleksi hadits)

### **Pengalaman Pengguna Modern**
- **Desain Responsif**: Dioptimalkan untuk desktop, tablet, dan perangkat mobile
- **Perhitungan Real-time**: Hasil instan dengan rincian detail
- **Privasi Utama**: Semua perhitungan dilakukan secara lokal di browser
- **Aksesibilitas**: Desain yang sesuai WCAG dengan kontras dan navigasi yang tepat

### **Ramah Developer**
- **Open Source**: Berlisensi MIT dengan kode sumber lengkap tersedia
- **Arsitektur Modular**: Pemisahan kepentingan yang bersih
- **Konfigurasi Berbasis JSON**: Mudah memodifikasi data dan aturan zakat
- **Dukungan TypeScript**: Pengalaman pengembangan yang type-safe

## 🚀 Memulai Cepat

### Prasyarat
- Node.js (versi 18 atau lebih baru)
- npm atau yarn package manager

### Instalasi

1. **Clone repositori:**
   ```bash
   git clone https://github.com/username/zakat-calculator.git
   cd zakat-calculator
   ```

2. **Install dependensi:**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Jalankan server pengembangan:**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. **Buka di browser:**
   ```
   http://localhost:4321
   ```

### Perintah Build

- **Server pengembangan:**
  ```bash
  npm run dev
  ```

- **Build produksi:**
  ```bash
  npm run build
  ```

- **Preview build produksi:**
  ```bash
  npm run preview
  ```

## 🛠️ Stack Teknologi

### **Framework Frontend**
- **[Astro](https://astro.build/)** - Framework web modern untuk membangun website yang cepat dan fokus konten
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript dengan type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first

### **Tools Pengembangan**
- **HTML5 & CSS3** - Standar web modern
- **ESLint & Prettier** - Kualitas kode dan formatting
- **Vite** - Build tool cepat dan development server

### **Deployment**
- **Static Site Generation** - Pre-built untuk performa optimal
- **CDN Ready** - Dapat di-deploy ke layanan hosting statis mana pun

## 📊 Jenis Zakat yang Didukung

### 1. **Zakat Emas**
- **Nisab**: 85 gram
- **Kadar**: 2.5%
- **Syarat**: Dimiliki selama 1 tahun penuh (haul)
- **Rumus**: `(Berat Emas × Harga Emas) × 2.5%`

### 2. **Zakat Perak**
- **Nisab**: 595 gram  
- **Kadar**: 2.5%
- **Syarat**: Dimiliki selama 1 tahun penuh (haul)
- **Rumus**: `(Berat Perak × Harga Perak) × 2.5%`

### 3. **Zakat Mal (Harta)**
- **Nisab**: Setara 85 gram emas
- **Kadar**: 2.5%
- **Meliputi**: Uang tunai, tabungan, deposito, investasi
- **Syarat**: Dimiliki selama 1 tahun penuh (haul)
- **Rumus**: `Total Harta × 2.5%`

### 4. **Zakat Penghasilan**
- **Nisab**: Setara 85 gram emas per bulan
- **Kadar**: 2.5%
- **Meliputi**: Gaji, bonus, tunjangan, penghasilan halal lainnya
- **Syarat**: Dibayar bulanan saat menerima penghasilan
- **Rumus**: `Penghasilan Bulanan × 2.5%`

## 📁 Struktur Proyek

```
zakat-calculator/
├── src/
│   ├── components/           # Komponen UI yang dapat digunakan ulang
│   │   ├── ZakatEmasCard.astro      # Kalkulator zakat emas
│   │   ├── ZakatPerakCard.astro     # Kalkulator zakat perak
│   │   ├── ZakatMalCard.astro       # Kalkulator zakat mal
│   │   ├── ZakatPenghasilanCard.astro # Kalkulator zakat penghasilan
│   │   ├── DalilEmasCard.astro      # Dalil zakat emas
│   │   ├── DalilPerakCard.astro     # Dalil zakat perak
│   │   ├── DalilMalCard.astro       # Dalil zakat mal
│   │   ├── DalilPenghasilanCard.astro # Dalil zakat penghasilan
│   │   └── FAQ.astro                # Pertanyaan yang sering diajukan
│   ├── content/              # File data dan konten
│   │   ├── zakat/           # Data konfigurasi zakat
│   │   │   ├── emas.json    # Aturan dan input form zakat emas
│   │   │   ├── perak.json   # Aturan dan input form zakat perak
│   │   │   ├── mal.json     # Aturan dan input form zakat mal
│   │   │   └── penghasilan.json # Aturan dan input form zakat penghasilan
│   │   └── dalil/           # Data dalil syariat
│   │       ├── dalil-emas-1.json    # Dalil Al-Quran zakat emas
│   │       ├── dalil-emas-2.json    # Dalil hadits zakat emas
│   │       ├── dalil-perak-1.json   # Dalil zakat perak
│   │       ├── dalil-mal-1.json     # Dalil Al-Quran zakat mal
│   │       ├── dalil-mal-2.json     # Dalil hadits zakat mal
│   │       ├── dalil-penghasilan-1.json # Dalil Al-Quran zakat penghasilan
│   │       └── dalil-penghasilan-2.json # Dalil hadits zakat penghasilan
│   ├── layouts/             # Template layout halaman
│   │   ├── Layout.astro     # Template layout utama
│   │   └── PrivacyLayout.astro # Layout halaman privasi/legal
│   ├── pages/               # Halaman aplikasi
│   │   ├── index.astro      # Homepage dengan kalkulator
│   │   ├── about.astro      # Halaman tentang
│   │   ├── contact.astro    # Halaman kontak
│   │   ├── privacy-policy.astro # Kebijakan privasi
│   │   └── terms-of-service.astro # Syarat dan ketentuan
│   └── styles/              # CSS dan styling
│       ├── global.css       # Style global dan import
│       └── zakat.css        # Style komponen khusus zakat
├── public/                  # Asset statis
│   └── favicon.svg          # Favicon situs
├── astro.config.mjs         # Konfigurasi Astro
├── tailwind.config.mjs      # Konfigurasi Tailwind CSS
├── package.json             # Dependensi dan script
└── README.md               # Dokumentasi proyek
```

## ⚙️ Konfigurasi & Kustomisasi

### **Konfigurasi Data Zakat**

Semua aturan dan perhitungan zakat disimpan dalam file JSON yang terletak di `src/content/zakat/`. Setiap file berisi:

#### **Contoh Struktur File** (`emas.json`):
```json
{
  "title": "Zakat Emas",
  "nisab": 85,
  "nisabUnit": "gram",
  "kadarZakat": 2.5,
  "kadarZakatUnit": "persen",
  "description": "Zakat emas wajib dikeluarkan jika...",
  "calculation": "Zakat = (Berat Emas × Harga Emas) × 2.5%",
  "conditions": [
    "Emas mencapai nisab minimal 85 gram",
    "Telah dimiliki selama satu tahun penuh (haul)",
    "Merupakan emas simpanan, bukan perhiasan yang dipakai sehari-hari"
  ],
  "formInputs": [
    {
      "id": "beratEmas",
      "label": "Berat Emas (gram)",
      "type": "number",
      "placeholder": "Masukkan berat emas dalam gram",
      "required": true
    }
  ],
  "dalilIds": ["dalil-emas-1", "dalil-emas-2"]
}
```

#### **Field Konfigurasi Utama:**
- **`title`**: Nama tampilan untuk jenis zakat
- **`nisab`**: Nilai ambang batas minimum
- **`nisabUnit`**: Unit pengukuran untuk nisab
- **`kadarZakat`**: Kadar zakat (biasanya 2.5%)
- **`description`**: Teks penjelasan tentang jenis zakat ini
- **`calculation`**: Rumus yang digunakan untuk perhitungan
- **`conditions`**: Array persyaratan untuk kewajiban zakat
- **`formInputs`**: Definisi field form untuk kalkulator
- **`dalilIds`**: Referensi ke file dalil syariat

### **Konfigurasi Dalil Syariat**

File dalil disimpan di `src/content/dalil/` dengan struktur ini:

```json
{
  "id": "dalil-emas-1",
  "type": "quran",
  "text": "وَالَّذِينَ يَكْنِزُونَ الذَّهَبَ وَالْفِضَّةَ...",
  "source": "QS. At-Taubah: 34",
  "translation": "Dan orang-orang yang menyimpan emas dan perak..."
}
```

#### **Field Dalil:**
- **`id`**: Identifier unik untuk dalil
- **`type`**: "quran" atau "hadith"
- **`text`**: Teks Arab asli
- **`source`**: Kutipan (surah:ayat Al-Quran atau koleksi hadits)
- **`translation`**: Terjemahan bahasa Indonesia

### **Menyesuaikan Aturan Zakat**

Untuk memodifikasi perhitungan zakat atau menambah jenis baru:

1. **Edit file zakat yang ada** di `src/content/zakat/`
2. **Update nilai nisab** dengan mengubah field `nisab`
3. **Modifikasi rumus perhitungan** di field `calculation`
4. **Tambah input form baru** ke array `formInputs`
5. **Update kondisi** di array `conditions`

#### **Contoh: Mengupdate Nisab Emas**
```json
{
  "nisab": 87.48,  // Diupdate dari 85
  "nisabUnit": "gram",
  "calculation": "Zakat = (Berat Emas × Harga Emas) × 2.5%"
}
```

### **Menambah Jenis Zakat Baru**

1. **Buat file JSON baru** di `src/content/zakat/`
2. **Buat komponen terkait** di `src/components/`
3. **Tambah file dalil** di `src/content/dalil/`
4. **Update halaman utama** untuk menyertakan kalkulator baru

### **Kustomisasi Styling**

Aplikasi menggunakan Tailwind CSS dengan warna bertema Islam kustom:

```javascript
// tailwind.config.mjs
colors: {
  islamic: {
    green: '#2e7d32',
    'green-light': '#4caf50',
    'green-dark': '#1b5e20',
    gold: '#ffc107',
    cream: '#f5f5dc',
    brown: '#8d6e63'
  }
}
```

## 🌍 Internasionalisasi

### **Dukungan Bahasa Saat Ini**
- **Bahasa Indonesia**: Bahasa utama
- **Arab**: Teks dalil syariat

### **Menambah Bahasa Baru**

1. **Buat file JSON khusus bahasa** untuk data zakat
2. **Tambah file terjemahan** untuk teks UI
3. **Update komponen** untuk mendukung multiple bahasa
4. **Konfigurasi pergantian bahasa** di layout

### **Panduan Terjemahan**
- Pertahankan akurasi terminologi Islam
- Konsultasi dengan ulama untuk konten agama
- Gunakan terminologi yang konsisten di semua terjemahan
- Test perhitungan dengan penutur asli

## 🔒 Privasi & Keamanan

### **Privasi Data**
- **Tidak ada penyimpanan server**: Semua perhitungan dilakukan di browser
- **Tidak ada tracking**: Tidak ada analitik atau pelacakan pengguna
- **Tidak ada cookies**: Tidak ada penyimpanan data persisten
- **Open source**: Transparansi penuh kode dan penanganan data

### **Fitur Keamanan**
- **Validasi input**: Semua input pengguna divalidasi
- **Proteksi XSS**: Sanitasi data pengguna yang tepat
- **HTTPS ready**: Transmisi aman saat di-deploy
- **Tidak ada dependensi eksternal**: Permukaan serangan minimal

## 🤝 Berkontribusi

Kami menyambut kontribusi dari developer, ulama Islam, dan anggota komunitas!

### **Jenis Kontribusi**

#### **🐛 Laporan Bug & Perbaikan**
- Laporkan kesalahan perhitungan
- Perbaiki masalah UI/UX
- Tingkatkan performa
- Enhance aksesibilitas

#### **✨ Peningkatan Fitur**
- Tambah jenis zakat baru
- Tingkatkan fungsionalitas kalkulator
- Enhance antarmuka pengguna
- Tambah bahasa baru

#### **📝 Dokumentasi**
- Tingkatkan README dan panduan
- Tambah komentar kode
- Buat tutorial
- Tulis dokumentasi API

#### **🌐 Terjemahan**
- Terjemahkan ke bahasa daerah
- Review terjemahan yang ada
- Tambah variasi regional
- Tingkatkan terminologi Islam

#### **🔍 Review Syariat Islam**
- Validasi perhitungan zakat
- Review dalil syariat
- Saran perbaikan konten agama
- Konsultasi fitur baru

### **Workflow Pengembangan**

1. **Fork repositori**
   ```bash
   git clone https://github.com/your-username/zakat-calculator.git
   ```

2. **Buat branch fitur**
   ```bash
   git checkout -b feature/nama-fitur-baru
   ```

3. **Buat perubahan Anda**
   - Ikuti style kode yang ada
   - Tambah test jika applicable
   - Update dokumentasi

4. **Test perubahan Anda**
   ```bash
   npm run dev
   npm run build
   ```

5. **Commit dan push**
   ```bash
   git commit -m "Add: deskripsi fitur baru"
   git push origin feature/nama-fitur-baru
   ```

6. **Buat Pull Request**
   - Deskripsikan perubahan Anda
   - Referensikan issue terkait
   - Minta review dari maintainer

### **Panduan Style Kode**

- **TypeScript**: Gunakan typing yang tepat
- **Komponen**: Jaga komponen tetap fokus dan reusable
- **Penamaan**: Gunakan nama deskriptif untuk variabel dan fungsi
- **Komentar**: Tambah komentar untuk logika kompleks
- **Formatting**: Gunakan Prettier untuk formatting konsisten

### **Panduan Konten Islam**

- **Akurasi**: Pastikan semua konten Islam akurat
- **Sumber**: Berikan kutipan yang tepat untuk semua dalil
- **Konsultasi**: Konsultasi dengan ulama yang berkualifikasi
- **Respect**: Pertahankan tone yang hormat dan terminologi yang tepat

## 📚 Referensi Islam

### **Sumber Primer**
- **Al-Quran**: Ayat langsung terkait kewajiban zakat
- **Hadits Shahih**: Sahih Bukhari, Sahih Muslim, dan koleksi lainnya
- **Fiqh Klasik**: Karya ulama Islam yang diakui
- **Fatwa Kontemporer**: Pendapat ulama modern

### **Metodologi Perhitungan**
- **Nilai Nisab**: Berdasarkan ukuran Islam tradisional
- **Persyaratan Haul**: Periode kepemilikan satu tahun lunar
- **Perhitungan Kadar**: 2.5% (1/40) sebagaimana ditetapkan dalam syariat Islam
- **Aplikasi Modern**: Diadaptasi untuk instrumen keuangan kontemporer

### **Konsultasi Ulama**
Perhitungan aplikasi ini telah dikembangkan dengan referensi:
- Teks fiqh Islam klasik
- Prinsip keuangan Islam modern
- Konsensus ulama kontemporer
- Otoritas Islam regional

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](LICENSE) untuk detail.

### **Ringkasan MIT License**
- ✅ Penggunaan komersial diizinkan
- ✅ Modifikasi diizinkan
- ✅ Distribusi diizinkan
- ✅ Penggunaan pribadi diizinkan
- ❗ Pemberitahuan lisensi dan hak cipta diperlukan
- ❗ Tidak ada garansi yang diberikan

## 📞 Kontak & Dukungan

### **Kontak Umum**
- **Email**: info@kalkulatorzakat.com
- **Support**: support@kalkulatorzakat.com

### **Pengembangan**
- **GitHub**: [https://github.com/username/zakat-calculator](https://github.com/username/zakat-calculator)
- **Issues**: Laporkan bug dan minta fitur
- **Discussions**: Diskusi komunitas dan pertanyaan

### **Konsultasi Islam**
- **Review Ulama**: Untuk pertanyaan syariat Islam
- **Validasi Konten**: Untuk akurasi konten agama
- **Adaptasi Regional**: Untuk praktik Islam lokal

### **Komunitas**
- **Kontributor**: Lihat [CONTRIBUTORS.md](CONTRIBUTORS.md)
- **Acknowledgments**: Terima kasih kepada semua yang telah membantu
- **Feedback**: Kami menghargai masukan dan saran Anda

## 🙏 Ucapan Terima Kasih

### **Ulama Islam**
- Terima kasih kepada semua ulama yang memberikan panduan perhitungan zakat
- Apresiasi untuk mereka yang me-review konten Islam
- Gratitude untuk konsultasi dan dukungan berkelanjutan

### **Komunitas Open Source**
- Terima kasih kepada semua kontributor yang telah meningkatkan aplikasi ini
- Apresiasi untuk laporan bug dan saran fitur
- Gratitude untuk terjemahan dan perbaikan dokumentasi

### **Partner Teknologi**
- **Tim Astro**: Untuk framework web yang excellent
- **Tailwind CSS**: Untuk framework CSS utility-first
- **Tim TypeScript**: Untuk tools pengembangan type-safe

---

**Dibuat dengan ❤️ untuk umat Muslim di seluruh dunia**

*"Dan dirikanlah shalat, tunaikanlah zakat dan ruku'lah beserta orang-orang yang ruku'."* - **QS. Al-Baqarah: 43**

---

## 🔄 Riwayat Versi

- **v1.0.0** - Rilis awal dengan kalkulator zakat dasar
- **v1.1.0** - Menambah integrasi dalil syariat
- **v1.2.0** - Enhanced UI/UX dan responsivitas mobile
- **v1.3.0** - Menambah dokumentasi komprehensif
- **Saat Ini** - Perbaikan berkelanjutan dan kontribusi komunitas

## 🚀 Roadmap

### **Fitur yang Akan Datang**
- [ ] Dukungan multi-bahasa (Arab, Inggris, Melayu, dll.)
- [ ] Jenis zakat lanjutan (bisnis, pertanian, ternak)
- [ ] Pelacakan pembayaran zakat dan pengingat
- [ ] Integrasi dengan kalender Islam
- [ ] Fungsionalitas PWA offline
- [ ] Laporan perhitungan yang dapat dicetak

### **Tujuan Jangka Panjang**
- [ ] Aplikasi mobile (iOS/Android)
- [ ] Integrasi dengan sistem perbankan syariah
- [ ] Konten edukasi dan tutorial
- [ ] Fitur komunitas dan diskusi
- [ ] Kustomisasi dan variasi regional

---

*Untuk update terbaru dan pengumuman, silakan watch repositori GitHub kami dan ikuti progress pengembangan.*