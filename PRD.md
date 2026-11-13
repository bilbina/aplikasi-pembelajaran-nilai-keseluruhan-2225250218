# PRD — Jelajah Matematika: Aplikasi Pembelajaran Aritmetika Sosial

## Identitas Pengembang

- **Nama:** Bilbina Azizi Amarinova
- **NIM:** 2225250218
- **Program Studi:** Pendidikan Matematika
- **Universitas:** Universitas Sultan Ageng Tirtayasa

## 1. Latar Belakang

Siswa SMP sering kesulitan pada soal harga grosir dan eceran karena harus memahami beberapa hal sekaligus, seperti konversi satuan (lusin, kodi, gros), arah pembagian, serta perpindahan dari nilai sebagian ke nilai per unit lalu ke nilai baru.

Aplikasi **Jelajah Matematika** dirancang untuk membantu siswa memahami materi Aritmetika Sosial dengan penyajian yang sederhana, bertahap, dan interaktif. Aktivitas belajar diarahkan pada pembentukan pemahaman konsep sehingga kemampuan literasi matematis siswa dalam merumuskan, menggunakan, menafsirkan, dan bernalar dapat meningkat.

## 2. Tujuan dan Indikator Keberhasilan

| Tujuan | Indikator | Target Awal |
|---|---|---|
| Meningkatkan literasi matematis | Skor posttest lebih tinggi daripada pretest | Mengalami peningkatan |
| Menurunkan beban kognitif eksternal | Skor ECL Leppink | Rendah |
| Menjaga beban germane | Skor GCL Leppink | Sedang–tinggi |
| Mengurangi ketergantungan pada bantuan | Jumlah petunjuk per soal dari sesi 1 ke sesi 3 | Menurun |
| Memudahkan penggunaan aplikasi | Siswa dapat menyelesaikan soal tanpa bantuan navigasi | Tercapai |

## 3. Pengguna

- **Pengguna utama:** Siswa SMP kelas VII–VIII yang menggunakan smartphone Android atau browser laptop.
- **Pengguna pendukung:** Mahasiswa peneliti atau fasilitator yang membaca data sesi untuk analisis, serta dosen penilai.

## 4. Ruang Lingkup Materi

### Materi yang Tercakup

- Nilai keseluruhan menjadi nilai per unit. Contoh: 1 lusin buku seharga Rp48.000, berapa harga 1 buku?
- Nilai sebagian menjadi nilai per unit dan nilai keseluruhan baru. Contoh: 4 pensil seharga Rp10.000, berapa harga 1 kodi?
- Perbandingan harga dua paket untuk menentukan paket yang lebih murah.
- Soal majemuk, seperti 1 lusin ditambah 3 buah.
- Konversi satuan: 1 lusin = 12 buah, 1 kodi = 20 buah, dan 1 gros = 144 buah.

### Materi di Luar Ruang Lingkup

Diskon, pajak, bunga, bilangan desimal lanjutan, akun guru atau kelas, peringkat antarsiswa, dan pembayaran.

## 5. Ringkasan Temuan Wawancara

### Hambatan Intrinsik (IL)

- IL01: Bingung dengan alur nilai sebagian → per unit → nilai baru.
- IL02: Lupa konversi lusin, kodi, dan gros.
- IL03: Terhambat saat pembagian atau perkalian berbentuk desimal.
- IL04: Sulit membandingkan paket saat isi dan harga sama-sama berbeda.
- IL05: Tertukar pembilang dan penyebut saat membagi harga total.

### Hambatan Ekstrinsik (EL)

- EL01: Istilah "pak", "gros", dan "dus" menimbulkan salah tafsir.
- EL02: Tabel harga terpisah dari soal sehingga siswa harus berpindah halaman.
- EL03: Hiasan gambar menyamarkan data harga dan jumlah.
- EL04: Penjelasan guru terlalu cepat.
- EL05: Kuantitas terselip dalam cerita; menandai angka sangat membantu.

### Pendukung Germane (GL)

- GL01: Simulasi eceran dan grosir membantu pemahaman.
- GL02: Mengecek kewajaran hasil membantu siswa.
- GL03: Petunjuk "cari harga 1 biji dulu" membuat siswa dapat melanjutkan sendiri.
- GL04: Menjelaskan kepada teman memperjelas pemahaman.
- GL05: Siswa masih ragu pada kasus majemuk dan membutuhkan pendampingan.

### Usulan Siswa (DS)

- DS01: Simulasi membuka toko eceran dengan petunjuk secara bertahap.
- DS02: Umpan balik yang menunjukkan letak kesalahan pembagian atau perkalian.
- DS03: Tampilan tanpa animasi yang terlalu ramai dan menggunakan satu langkah per layar.

## 6. Kebutuhan Fungsional

Prioritas fitur: P1 wajib, P2 penting, dan P3 jika memungkinkan.

| ID | Fitur | Deskripsi | Kode Temuan | Prioritas |
|---|---|---|---|---|
| F01 | Mode One Step per Screen | Setiap soal dipecah menjadi beberapa langkah. | EL03, DS03 | P1 |
| F02 | Diagram Pemecahan Unit | Total harga dibagi ke dalam unit, kemudian dikalikan ke jumlah yang dituju. | IL01 | P1 |
| F03 | Kamus Satuan | Menampilkan konversi lusin, kodi, dan gros. | IL02 | P1 |
| F04 | Penyusun Rumus | Menyusun rumus harga per unit = total harga ÷ jumlah barang. | IL05 | P1 |
| F05 | Penanda Kata Kunci | Menyorot jumlah barang dan harga total dalam soal cerita. | EL01, EL05 | P1 |
| F06 | Data dan Pertanyaan Satu Layar | Menampilkan data harga per unit di dekat gambar atau ikon barang. | EL02 | P1 |
| F07 | Kontrol Tempo | Menyediakan tombol langkah sebelumnya, ulang, dan lanjut. | EL04 | P1 |
| F08 | Simulasi Toko Eceran | Membuka kemasan grosir menjadi unit eceran melalui interaksi sederhana. | GL01, DS01 | P2 |
| F09 | Prompt Validasi Hasil | Mengajak siswa memeriksa kewajaran hasil perhitungan. | GL02, GL04 | P2 |
| F10 | Sistem Petunjuk Bertingkat | Petunjuk diberikan secara bertahap ketika siswa mengalami kesulitan. | GL03, DS02 | P1 |
| F11 | Umpan Balik Letak Kesalahan | Memberikan informasi mengenai kesalahan pembilang, penyebut, konversi, atau operasi. | DS02, IL05 | P1 |
| F12 | Modul Latihan Bertingkat | Latihan dari satuan tunggal, nilai sebagian, perbandingan paket, hingga soal majemuk. | GL05, IL04 | P2 |
| F13 | Pretest dan Posttest | Mengukur kemampuan literasi matematis sebelum dan sesudah pembelajaran. | Penelitian | P1 |
| F14 | Skala Beban Kognitif | Kuesioner Leppink untuk mengukur intrinsic, extraneous, dan germane load. | Penelitian | P1 |
| F15 | Pencatatan Aktivitas | Mencatat waktu pengerjaan, jumlah petunjuk, pengulangan langkah, dan jawaban salah. | EL04, GL03 | P1 |
| F16 | Kalkulator Bantu | Menyediakan kalkulator sederhana untuk membantu pembagian desimal. | IL03 | P3 |
| F17 | PWA | Aplikasi dapat diinstal dan dibuka melalui smartphone. | Platform | P2 |

## 7. Alur Pengguna

1. Siswa membuka aplikasi dan memasukkan kode siswa serta kelas.
2. Siswa mengerjakan pretest sebanyak 4 soal literasi tanpa petunjuk.
3. Siswa mengikuti sesi belajar sebanyak 2–3 sesi melalui penjelasan bertahap, latihan, petunjuk, dan umpan balik.
4. Siswa mengerjakan posttest dengan soal yang setara dengan pretest.
5. Siswa mengisi skala beban kognitif.
6. Siswa melihat halaman selesai dan data pembelajaran tersimpan untuk fasilitator.

## 8. Rancangan Soal Literasi Matematis

Setiap soal dikaitkan dengan empat proses literasi matematis.

| Proses | Wujud pada Materi |
|---|---|
| Formulating (Merumuskan) | Menentukan jumlah barang dan harga total serta memilih operasi yang tepat. |
| Employing (Menggunakan) | Mengonversi satuan dan menghitung harga per unit serta nilai baru. |
| Interpreting (Menafsirkan) | Memeriksa kewajaran hasil dan menyatakan hasil sesuai konteks. |
| Reasoning (Bernalar) | Menjelaskan alasan memilih langkah atau kesimpulan. |

### Contoh Bank Soal

- **Tingkat 1:** 1 lusin buku tulis seharga Rp48.000. Berapa harga 1 buku?
- **Tingkat 2:** 4 pensil seharga Rp10.000. Berapa harga 1 kodi pensil?
- **Tingkat 3:** Paket A berisi 5 pulpen seharga Rp15.000, sedangkan Paket B berisi 12 pulpen seharga Rp30.000. Paket mana yang lebih murah?
- **Tingkat 4:** Harga 1 lusin barang adalah Rp36.000. Berapa harga 1 lusin lebih 3 buah?

Soal pretest dan posttest menggunakan angka berbeda, tetapi memiliki struktur soal yang setara.

## 9. Model Data (Supabase)

| Tabel | Kolom Utama |
|---|---|
| `siswa` | id (uuid), kode_siswa, kelas, dibuat_pada |
| `sesi` | id, siswa_id, jenis (pretest/belajar/posttest), nomor_sesi, mulai, selesai |
| `jawaban` | id, sesi_id, soal_id, tingkat, jawaban_siswa, benar, skor, jumlah_petunjuk, jumlah_ulang, durasi_detik |
| `event_log` | id, sesi_id, jenis_event, payload (jsonb), waktu |
| `beban_kognitif` | id, sesi_id, jawaban_icl (jsonb), jawaban_ecl (jsonb), jawaban_gcl (jsonb), dibuat_pada |

Isi item kuesioner mengikuti instrumen Leppink yang digunakan dalam mata kuliah.

## 10. Kebutuhan Non-Fungsional

- **Kinerja:** Halaman awal dimuat kurang dari 3 detik pada jaringan seluler biasa.
- **Kompatibilitas:** Mendukung Chrome Android terbaru dan browser desktop modern dengan lebar minimum 360 px.
- **Keterbacaan:** Ukuran font isi minimal 16 px, kontras warna memadai, dan target sentuh minimal 48 px.
- **Keandalan:** Jawaban tidak hilang ketika koneksi terputus dan dapat dikirim ulang.
- **Privasi:** Menggunakan kode siswa tanpa nama lengkap atau foto. Persetujuan perekaman dan penggunaan data dijelaskan kepada siswa dan orang tua atau wali.
- **Keamanan:** Row Level Security (RLS) aktif dan kunci `service_role` tidak disimpan di sisi klien.

## 11. Milestone (ADDIE → Develop)

| No. | Milestone | Isi |
|---|---|---|
| M1 | Fondasi | Setup Vite dan React, variabel CSS, layout mobile, koneksi Supabase, dan kode siswa. |
| M2 | Inti Belajar | F01, F05, F06, dan F07 pada tingkat 1 dan 2. |
| M3 | Penopang IL | F02, F03, F04, dan F11. |
| M4 | Penopang GL | F10, F09, dan F08. |
| M5 | Penelitian | F13, F14, dan F15 (pretest, posttest, Leppink, dan pencatatan aktivitas). |
| M6 | Perluasan | F12, F17, dan F16 jika memungkinkan. |
| M7 | Uji dan Rilis | Pengujian kepada 1–2 siswa, perbaikan, deployment, dan README. |

## 12. Cara Menguji Fitur

| Fitur | Cara Uji |
|---|---|
| F02 | Siswa menjelaskan hubungan harga satuan dan total setelah menggunakan diagram. |
| F03 | Mengamati apakah kesalahan konversi satuan berkurang. |
| F04 | Mengamati ketepatan siswa dalam menyusun rumus pembagian per unit. |
| F05 | Mengamati apakah siswa dapat menemukan data yang relevan tanpa petunjuk langsung. |
| F06 | Menguji navigasi dan kejelasan tampilan visual. |
| F01 | Melakukan wawancara mengenai kejelasan tampilan aplikasi. |
| F07 | Mencatat frekuensi pengulangan langkah. |
| F08 | Mengamati kualitas penalaran sebelum dan sesudah simulasi. |
| F09 | Mengamati apakah siswa dapat mengoreksi hasilnya sendiri. |
| F10 | Mencatat penurunan bantuan yang dibutuhkan pada soal berikutnya. |
| F12 | Memberikan variasi soal majemuk dan mengamati kelancaran alur pengerjaan. |

## 13. Risiko dan Mitigasi

| Risiko | Mitigasi |
|---|---|
| Subjek hanya 2 siswa sehingga hasil tidak dapat digeneralisasi. | Menuliskan hasil sebagai studi kasus dan berfokus pada pola serta kualitas penalaran. |
| Fitur terlalu banyak untuk waktu yang tersedia. | Mengerjakan prioritas P1 terlebih dahulu, sedangkan P3 bersifat opsional. |
| Drag-and-drop sulit digunakan pada layar sentuh. | Menyediakan alternatif ketuk untuk menempatkan. |
| Koneksi internet siswa tidak stabil. | Menggunakan antrean lokal dan pengiriman ulang. |
| Fitur justru menambah beban kognitif. | Meninjau tampilan berdasarkan aturan beban kognitif pada `CLAUDE.md` bagian 5. |
| Kebutuhan hanya didasarkan pada satu siswa (S01). | Melakukan validasi kepada siswa subjek pada pertemuan 4. |

---

**Jelajah Matematika — Petualangan Seru Belajar Aritmetika Sosial.**