# CLAUDE.md — Jelajah Matematika

File ini menjadi panduan utama Claude Code ketika mengembangkan aplikasi. Sebelum menulis atau mengubah kode, baca juga `PRD.md` sebagai panduan kebutuhan aplikasi dan `DESAIN.md` sebagai panduan tampilan aplikasi.

## 1. Ringkasan Proyek

- **Nama aplikasi:** Jelajah Matematika
- **Tagline:** Petualangan Seru Belajar Aritmetika Sosial
- **Pengembang:** Adelilya Salsha
- **NIM:** 2225250218
- **Program Studi:** Pendidikan Matematika
- **Universitas:** Universitas Sultan Ageng Tirtayasa
- **Tujuan:** Membantu siswa SMP memahami materi Aritmetika Sosial melalui pembelajaran bertahap, latihan interaktif, dan evaluasi.
- **Materi utama:** Nilai Keseluruhan, Nilai Per Unit, dan Nilai Sebagian.
- **Platform:** Aplikasi web responsif yang dapat digunakan melalui laptop dan smartphone.
- **Model pengembangan:** ADDIE.
- **Pendekatan pengembangan:** Vibe Coding.

Aplikasi dirancang agar siswa dapat memahami konsep matematika melalui penjelasan, contoh soal, latihan, petunjuk, dan umpan balik.

## 2. Teknologi yang Digunakan

| Lapisan | Teknologi |
|---|---|
| Build Tool | Vite |
| Antarmuka | React |
| Bahasa Pemrograman | JavaScript |
| Styling | CSS biasa |
| Backend/Database | Supabase |
| Hosting | GitHub dan Vercel |
| PWA | Manifest dan aset aplikasi |

Gunakan teknologi yang sudah tersedia dalam proyek. Jangan mengganti teknologi utama tanpa alasan yang jelas.

## 3. Identitas dan Konsep Desain

Gunakan identitas visual Jelajah Matematika secara konsisten.

- **Tema:** Ceria, modern, edukatif, dan interaktif.
- **Warna utama:** Kuning cerah, oranye, hijau, ungu, dan biru.
- **Bentuk elemen:** Kartu dan tombol dengan sudut membulat.
- **Ilustrasi:** Menggunakan ilustrasi anak sekolah dan gambar pendukung pembelajaran.
- **Tipografi:** Mudah dibaca dan sesuai untuk siswa SMP.
- **Tata letak:** Rapi, responsif, dan mudah digunakan.

Jangan mengubah desain aplikasi menjadi tema Toko Unit atau menggunakan desain yang tidak sesuai dengan identitas Jelajah Matematika.

## 4. Struktur Folder Proyek

Ikuti struktur folder yang sudah tersedia. Jangan membuat folder atau file baru jika tidak diperlukan.

```text
aplikasi-pembelajaran-nilai-keseluruhan-2225250218/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── anak-sekolah.png
│   ├── musik-belajar.mp3
│   ├── toko-buku.png
│   ├── toko-dus.png
│   ├── toko-pensil.png
│   ├── toko-pulpen.png
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│   └── manifest.webmanifest
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── KamusSatuan.jsx
│   │   └── LangkahSoal.jsx
│   ├── data/
│   │   ├── petunjuk.js
│   │   ├── satuan.js
│   │   └── soal.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── supabase.js
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
├── CLAUDE.md
├── PRD.md
└── DESAIN.md
```

## 5. Menu dan Fitur Aplikasi

Aplikasi memiliki lima menu utama:

| Menu | Fungsi |
|---|---|
| Materi | Menyediakan penjelasan materi Aritmetika Sosial |
| Pretest | Mengukur kemampuan awal siswa |
| Latihan | Melatih pemahaman siswa melalui soal bertahap |
| Post-test | Mengukur pemahaman setelah pembelajaran |
| Evaluasi | Menampilkan hasil pembelajaran siswa |

### Materi Pembelajaran

Materi terdiri atas tiga bagian:

1. Nilai Keseluruhan.
2. Nilai Per Unit.
3. Nilai Sebagian.

### Fitur Pendukung

- Kamus Satuan.
- Petunjuk pengerjaan.
- Contoh soal dan pembahasan.
- Umpan balik jawaban.
- Navigasi langkah pengerjaan.
- Musik latar.
- Tampilan responsif.

## 6. Aturan Pengembangan Antarmuka

Setiap perubahan kode harus memperhatikan aturan berikut.

1. **Konsistensi desain:** Gunakan warna, bentuk kartu, tombol, dan tipografi yang konsisten dengan aplikasi.
2. **Navigasi sederhana:** Pastikan siswa dapat berpindah halaman dengan mudah.
3. **Informasi jelas:** Gunakan bahasa Indonesia yang sederhana dan mudah dipahami siswa SMP.
4. **Pembelajaran bertahap:** Sajikan soal berdasarkan urutan materi dan tingkat kesulitan.
5. **Umpan balik:** Berikan informasi yang jelas ketika siswa menjawab benar atau salah.
6. **Tombol interaktif:** Pastikan setiap tombol memiliki fungsi yang benar.
7. **Responsif:** Pastikan aplikasi dapat digunakan pada laptop dan smartphone.
8. **Keterbacaan:** Hindari teks terlalu kecil dan elemen yang saling bertumpuk.
9. **Musik:** Tombol musik harus tersedia di seluruh halaman dan dapat dinyalakan atau dimatikan.
10. **Kenyamanan belajar:** Hindari elemen visual berlebihan yang mengganggu fokus siswa.

## 7. Aturan Materi dan Perhitungan

Gunakan konsep matematika yang benar untuk setiap soal.

Rumus utama:

**Nilai Keseluruhan**

Nilai keseluruhan = Nilai per unit × Jumlah unit

**Nilai Per Unit**

Nilai per unit = Nilai keseluruhan ÷ Jumlah unit

**Nilai Sebagian**

Nilai sebagian = Nilai per unit × Jumlah unit sebagian

Konversi satuan:

| Satuan | Jumlah |
|---|---:|
| 1 lusin | 12 buah |
| 1 kodi | 20 buah |
| 1 gros | 144 buah |

Ketentuan:
- Perhitungan harga menggunakan nilai numerik yang tepat.
- Format rupiah menggunakan format seperti `Rp48.000`.
- Hindari kesalahan pembagian dan perkalian.
- Pastikan jawaban sesuai dengan konteks soal.
- Gunakan fungsi pemformatan rupiah yang konsisten.

## 8. Konvensi Kode

- Komponen React menggunakan `PascalCase`.
- Fungsi dan variabel menggunakan `camelCase`.
- Kelas CSS menggunakan `kebab-case`.
- Gunakan React Hooks di dalam komponen atau custom hooks.
- Hindari duplikasi kode.
- Pisahkan data soal dan petunjuk dari logika tampilan jika struktur proyek mendukungnya.
- Gunakan nama variabel dan fungsi yang mudah dipahami.
- Jangan menghapus fitur yang sudah berjalan tanpa alasan.
- Jangan mengubah seluruh struktur aplikasi hanya untuk memperbaiki satu komponen.
- Pastikan tidak ada error pada console browser.

## 9. Supabase dan Variabel Lingkungan

Jika fitur Supabase digunakan, koneksi dilakukan melalui `src/supabase.js`.

Variabel lingkungan disimpan dalam file `.env`:

```env
VITE_SUPABASE_URL=URL_SUPABASE_KAMU
VITE_SUPABASE_ANON_KEY=ANON_KEY_SUPABASE_KAMU
```

Ketentuan:
- Jangan mengunggah file `.env` ke GitHub.
- Jangan menampilkan kredensial pribadi dalam kode atau log.
- Jangan menggunakan kunci `service_role` pada sisi klien.
- Tangani kondisi loading dan error ketika melakukan permintaan data.
- Jangan menganggap fitur penyimpanan sudah aktif jika belum dikonfigurasi.

## 10. Hal yang Tidak Boleh Dilakukan

- Jangan mengganti nama aplikasi menjadi Toko Unit.
- Jangan mengubah materi utama tanpa persetujuan.
- Jangan menghapus menu atau fitur yang sudah berfungsi.
- Jangan mengubah desain secara keseluruhan tanpa diminta.
- Jangan menambahkan fitur yang tidak berkaitan dengan kebutuhan aplikasi.
- Jangan menghapus aset gambar atau musik yang masih digunakan.
- Jangan mengunggah file `.env` dan kredensial Supabase.
- Jangan membuat tombol yang tidak memiliki fungsi.
- Jangan menampilkan jawaban yang salah atau rumus yang tidak sesuai.
- Jangan mengubah identitas pengembang tanpa persetujuan.

## 11. Perintah Pengembangan

Jalankan perintah berikut dari folder utama proyek.

Menginstal dependencies:

```bash
npm install
```

Menjalankan aplikasi:

```bash
npm run dev
```

Membuat build produksi:

```bash
npm run build
```

Menjalankan pemeriksaan lint:

```bash
npm run lint
```

Mengunggah perubahan ke GitHub:

```bash
git add .
git commit -m "pesan perubahan"
git push origin main
```

## 12. Alur Pengembangan ADDIE

| Tahap | Kegiatan |
|---|---|
| Analyze | Menganalisis kebutuhan dan kesulitan siswa |
| Design | Menyusun PRD, desain aplikasi, dan alur pembelajaran |
| Develop | Mengembangkan aplikasi menggunakan React dan Vite |
| Implement | Menggunakan aplikasi dalam proses pembelajaran |
| Evaluate | Mengevaluasi hasil belajar dan kualitas aplikasi |

Kerjakan pengembangan# CLAUDE.md — Jelajah Matematika

File ini menjadi panduan utama Claude Code ketika mengembangkan aplikasi. Sebelum menulis atau mengubah kode, baca juga `PRD.md` sebagai panduan kebutuhan aplikasi dan `DESAIN.md` sebagai panduan tampilan aplikasi.

## 1. Ringkasan Proyek

- **Nama aplikasi:** Jelajah Matematika
- **Tagline:** Petualangan Seru Belajar Aritmetika Sosial
- **Pengembang:** Adelilya Salsha
- **NIM:** 2225250218
- **Program Studi:** Pendidikan Matematika
- **Universitas:** Universitas Sultan Ageng Tirtayasa
- **Tujuan:** Membantu siswa SMP memahami materi Aritmetika Sosial melalui pembelajaran bertahap, latihan interaktif, dan evaluasi.
- **Materi utama:** Nilai Keseluruhan, Nilai Per Unit, dan Nilai Sebagian.
- **Platform:** Aplikasi web responsif yang dapat digunakan melalui laptop dan smartphone.
- **Model pengembangan:** ADDIE.
- **Pendekatan pengembangan:** Vibe Coding.

Aplikasi dirancang agar siswa dapat memahami konsep matematika melalui penjelasan, contoh soal, latihan, petunjuk, dan umpan balik.

## 2. Teknologi yang Digunakan

| Lapisan | Teknologi |
|---|---|
| Build Tool | Vite |
| Antarmuka | React |
| Bahasa Pemrograman | JavaScript |
| Styling | CSS biasa |
| Backend/Database | Supabase |
| Hosting | GitHub dan Vercel |
| PWA | Manifest dan aset aplikasi |

Gunakan teknologi yang sudah tersedia dalam proyek. Jangan mengganti teknologi utama tanpa alasan yang jelas.

## 3. Identitas dan Konsep Desain

Gunakan identitas visual Jelajah Matematika secara konsisten.

- **Tema:** Ceria, modern, edukatif, dan interaktif.
- **Warna utama:** Kuning cerah, oranye, hijau, ungu, dan biru.
- **Bentuk elemen:** Kartu dan tombol dengan sudut membulat.
- **Ilustrasi:** Menggunakan ilustrasi anak sekolah dan gambar pendukung pembelajaran.
- **Tipografi:** Mudah dibaca dan sesuai untuk siswa SMP.
- **Tata letak:** Rapi, responsif, dan mudah digunakan.

Jangan mengubah desain aplikasi menjadi tema Toko Unit atau menggunakan desain yang tidak sesuai dengan identitas Jelajah Matematika.

## 4. Struktur Folder Proyek

Ikuti struktur folder yang sudah tersedia. Jangan membuat folder atau file baru jika tidak diperlukan.

```text
aplikasi-pembelajaran-nilai-keseluruhan-2225250218/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── anak-sekolah.png
│   ├── musik-belajar.mp3
│   ├── toko-buku.png
│   ├── toko-dus.png
│   ├── toko-pensil.png
│   ├── toko-pulpen.png
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│   └── manifest.webmanifest
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── KamusSatuan.jsx
│   │   └── LangkahSoal.jsx
│   ├── data/
│   │   ├── petunjuk.js
│   │   ├── satuan.js
│   │   └── soal.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── supabase.js
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
├── CLAUDE.md
├── PRD.md
└── DESAIN.md
```

## 5. Menu dan Fitur Aplikasi

Aplikasi memiliki lima menu utama:

| Menu | Fungsi |
|---|---|
| Materi | Menyediakan penjelasan materi Aritmetika Sosial |
| Pretest | Mengukur kemampuan awal siswa |
| Latihan | Melatih pemahaman siswa melalui soal bertahap |
| Post-test | Mengukur pemahaman setelah pembelajaran |
| Evaluasi | Menampilkan hasil pembelajaran siswa |

### Materi Pembelajaran

Materi terdiri atas tiga bagian:

1. Nilai Keseluruhan.
2. Nilai Per Unit.
3. Nilai Sebagian.

### Fitur Pendukung

- Kamus Satuan.
- Petunjuk pengerjaan.
- Contoh soal dan pembahasan.
- Umpan balik jawaban.
- Navigasi langkah pengerjaan.
- Musik latar.
- Tampilan responsif.

## 6. Aturan Pengembangan Antarmuka

Setiap perubahan kode harus memperhatikan aturan berikut.

1. **Konsistensi desain:** Gunakan warna, bentuk kartu, tombol, dan tipografi yang konsisten dengan aplikasi.
2. **Navigasi sederhana:** Pastikan siswa dapat berpindah halaman dengan mudah.
3. **Informasi jelas:** Gunakan bahasa Indonesia yang sederhana dan mudah dipahami siswa SMP.
4. **Pembelajaran bertahap:** Sajikan soal berdasarkan urutan materi dan tingkat kesulitan.
5. **Umpan balik:** Berikan informasi yang jelas ketika siswa menjawab benar atau salah.
6. **Tombol interaktif:** Pastikan setiap tombol memiliki fungsi yang benar.
7. **Responsif:** Pastikan aplikasi dapat digunakan pada laptop dan smartphone.
8. **Keterbacaan:** Hindari teks terlalu kecil dan elemen yang saling bertumpuk.
9. **Musik:** Tombol musik harus tersedia di seluruh halaman dan dapat dinyalakan atau dimatikan.
10. **Kenyamanan belajar:** Hindari elemen visual berlebihan yang mengganggu fokus siswa.

## 7. Aturan Materi dan Perhitungan

Gunakan konsep matematika yang benar untuk setiap soal.

Rumus utama:

**Nilai Keseluruhan**

Nilai keseluruhan = Nilai per unit × Jumlah unit

**Nilai Per Unit**

Nilai per unit = Nilai keseluruhan ÷ Jumlah unit

**Nilai Sebagian**

Nilai sebagian = Nilai per unit × Jumlah unit sebagian

Konversi satuan:

| Satuan | Jumlah |
|---|---:|
| 1 lusin | 12 buah |
| 1 kodi | 20 buah |
| 1 gros | 144 buah |

Ketentuan:
- Perhitungan harga menggunakan nilai numerik yang tepat.
- Format rupiah menggunakan format seperti `Rp48.000`.
- Hindari kesalahan pembagian dan perkalian.
- Pastikan jawaban sesuai dengan konteks soal.
- Gunakan fungsi pemformatan rupiah yang konsisten.

## 8. Konvensi Kode

- Komponen React menggunakan `PascalCase`.
- Fungsi dan variabel menggunakan `camelCase`.
- Kelas CSS menggunakan `kebab-case`.
- Gunakan React Hooks di dalam komponen atau custom hooks.
- Hindari duplikasi kode.
- Pisahkan data soal dan petunjuk dari logika tampilan jika struktur proyek mendukungnya.
- Gunakan nama variabel dan fungsi yang mudah dipahami.
- Jangan menghapus fitur yang sudah berjalan tanpa alasan.
- Jangan mengubah seluruh struktur aplikasi hanya untuk memperbaiki satu komponen.
- Pastikan tidak ada error pada console browser.

## 9. Supabase dan Variabel Lingkungan

Jika fitur Supabase digunakan, koneksi dilakukan melalui `src/supabase.js`.

Variabel lingkungan disimpan dalam file `.env`:

```env
VITE_SUPABASE_URL=URL_SUPABASE_KAMU
VITE_SUPABASE_ANON_KEY=ANON_KEY_SUPABASE_KAMU
```

Ketentuan:
- Jangan mengunggah file `.env` ke GitHub.
- Jangan menampilkan kredensial pribadi dalam kode atau log.
- Jangan menggunakan kunci `service_role` pada sisi klien.
- Tangani kondisi loading dan error ketika melakukan permintaan data.
- Jangan menganggap fitur penyimpanan sudah aktif jika belum dikonfigurasi.

## 10. Hal yang Tidak Boleh Dilakukan

- Jangan mengganti nama aplikasi menjadi Toko Unit.
- Jangan mengubah materi utama tanpa persetujuan.
- Jangan menghapus menu atau fitur yang sudah berfungsi.
- Jangan mengubah desain secara keseluruhan tanpa diminta.
- Jangan menambahkan fitur yang tidak berkaitan dengan kebutuhan aplikasi.
- Jangan menghapus aset gambar atau musik yang masih digunakan.
- Jangan mengunggah file `.env` dan kredensial Supabase.
- Jangan membuat tombol yang tidak memiliki fungsi.
- Jangan menampilkan jawaban yang salah atau rumus yang tidak sesuai.
- Jangan mengubah identitas pengembang tanpa persetujuan.

## 11. Perintah Pengembangan

Jalankan perintah berikut dari folder utama proyek.

Menginstal dependencies:

```bash
npm install
```

Menjalankan aplikasi:

```bash
npm run dev
```

Membuat build produksi:

```bash
npm run build
```

Menjalankan pemeriksaan lint:

```bash
npm run lint
```

Mengunggah perubahan ke GitHub:

```bash
git add .
git commit -m "pesan perubahan"
git push origin main
```

## 12. Alur Pengembangan ADDIE

| Tahap | Kegiatan |
|---|---|
| Analyze | Menganalisis kebutuhan dan kesulitan siswa |
| Design | Menyusun PRD, desain aplikasi, dan alur pembelajaran |
| Develop | Mengembangkan aplikasi menggunakan React dan Vite |
| Implement | Menggunakan aplikasi dalam proses pembelajaran |
| Evaluate | Mengevaluasi hasil belajar dan kualitas aplikasi |

