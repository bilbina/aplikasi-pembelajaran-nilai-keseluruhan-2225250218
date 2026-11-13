# Jelajah Matematika


**Identitas Pengembang**
- **Nama:** Adelilya Salsha
- **NIM:** 2225250218
- **Program Studi:** Pendidikan Matematika
- **Universitas:** Universitas Sultan Ageng Tirtayasa

**Petualangan Seru Belajar Aritmetika Sosial**

Jelajah Matematika adalah aplikasi pembelajaran berbasis web yang dikembangkan menggunakan React dan Vite untuk membantu siswa SMP memahami materi Aritmetika Sosial secara bertahap, interaktif, dan menyenangkan.

Aplikasi ini berfokus pada tiga materi utama, yaitu:

1. **Nilai Keseluruhan** – memahami jumlah nilai atau harga dari seluruh barang.
2. **Nilai Per Unit** – memahami nilai atau harga untuk satu satuan barang.
3. **Nilai Sebagian** – memahami nilai atau harga dari sebagian jumlah barang.

## Fitur Aplikasi

- **Materi:** menyediakan penjelasan materi Aritmetika Sosial.
- **Pretest:** mengukur pemahaman awal siswa.
- **Latihan:** membantu siswa berlatih melalui soal interaktif secara bertahap.
- **Post-test:** mengukur pemahaman siswa setelah mempelajari materi.
- **Evaluasi:** memberikan evaluasi terhadap hasil pembelajaran.
- **Kamus Satuan:** membantu siswa memahami istilah dan satuan yang digunakan dalam soal.
- **Musik Belajar:** menghadirkan musik latar untuk menemani proses belajar.

## Teknologi yang Digunakan

- React
- Vite
- JavaScript
- CSS
- Supabase

## Menjalankan Aplikasi

Pastikan Node.js sudah terpasang di komputer.

1. Clone repository:

   ```bash
   git clone https://github.com/bilbina/aplikasi-pembelajaran-nilai-keseluruhan-2225250218.git
   ```

2. Masuk ke folder proyek:

   ```bash
   cd aplikasi-pembelajaran-nilai-keseluruhan-2225250218
   ```

3. Instal dependencies:

   ```bash
   npm install
   ```

4. Jalankan aplikasi:

   ```bash
   npm run dev
   ```

5. Buka alamat lokal yang muncul di terminal, biasanya:

   ```text
   http://localhost:5173
   ```

## Konfigurasi Supabase

Jika menggunakan integrasi Supabase, buat file `.env` di folder utama proyek dan isi dengan konfigurasi berikut:

```env
VITE_SUPABASE_URL=URL_SUPABASE_KAMU
VITE_SUPABASE_ANON_KEY=ANON_KEY_SUPABASE_KAMU
```

Ganti nilai tersebut dengan kredensial proyek Supabase yang digunakan.

**Catatan:** Jangan mengunggah file `.env` yang berisi kredensial pribadi ke GitHub.

## Build untuk Produksi

Untuk membuat versi aplikasi yang siap dipublikasikan, jalankan:

```bash
npm run build
```

Hasil build akan tersimpan di folder `dist`.

Untuk melihat hasil build secara lokal:

```bash
npm run preview
```

## Tujuan Pengembangan

Aplikasi ini dikembangkan sebagai media pembelajaran matematika yang membantu siswa memahami konsep Aritmetika Sosial melalui penyajian materi, contoh soal, latihan, dan evaluasi secara interaktif.

---


**Jelajah Matematika – Belajar Matematika Jadi Lebih Seru!**