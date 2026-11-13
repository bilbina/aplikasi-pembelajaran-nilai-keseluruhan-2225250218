# PRD — Aplikasi "Toko Unit": Nilai Keseluruhan, Nilai Per Unit, dan Nilai Sebagian

## 1. Latar belakang

Siswa SMP sering kesulitan pada soal harga grosir/eceran karena harus memegang banyak hal sekaligus: konversi satuan (lusin, kodi, gros), arah pembagian, dan perpindahan dari nilai sebagian ke nilai per unit lalu ke nilai baru. Wawancara dengan siswa S01 (kelas VIII) menunjukkan hambatan yang berasal dari materi itu sendiri (*intrinsic load*) maupun dari cara penyajian (*extraneous load*), serta hal-hal yang justru membantu (*germane load*).

Aplikasi ini dirancang agar penyajian tidak menambah beban, dan aktivitas belajar diarahkan ke pembentukan skema, sehingga kemampuan **literasi matematis** (merumuskan, menggunakan, menafsirkan, bernalar) meningkat.

## 2. Tujuan dan indikator keberhasilan

| Tujuan | Indikator | Target awal |
|---|---|---|
| Meningkatkan literasi matematis | Skor posttest > skor pretest | Naik pada kedua siswa |
| Menurunkan beban kognitif eksternal | Skor ECL Leppink | Rendah (di bawah ICL dan GCL) |
| Menjaga beban germane | Skor GCL Leppink | Sedang–tinggi |
| Mengurangi ketergantungan pada bantuan | Jumlah petunjuk per soal dari sesi 1 ke sesi 3 | Menurun |
| Aplikasi mudah dipakai | Siswa menyelesaikan satu soal tanpa bantuan peneliti untuk navigasi | Tercapai |

## 3. Pengguna

- **Utama:** siswa SMP kelas VII–VIII (2 subjek penelitian), memakai smartphone Android atau browser laptop.
- **Pendukung:** mahasiswa peneliti/fasilitator (membaca data sesi untuk analisis) dan dosen penilai.

## 4. Ruang lingkup materi

**Tercakup**
- Nilai keseluruhan → nilai per unit (mis. 1 lusin Rp48.000 → 1 buah).
- Nilai sebagian → nilai per unit → nilai keseluruhan baru (mis. 4 pensil Rp10.000 → 1 kodi).
- Perbandingan harga dua paket (mana lebih murah).
- Soal majemuk (mis. 1 lusin + 3 buah) pada tingkat lanjutan.
- Satuan: lusin = 12, kodi = 20, gros = 144.

**Di luar ruang lingkup:** diskon, pajak, bunga, bilangan desimal lanjutan, akun guru/kelas, ranking antarsiswa, pembayaran.

## 5. Ringkasan temuan wawancara

**Hambatan intrinsik (IL)**
- IL01: bingung alur nilai sebagian → per unit → nilai baru (Soal 3).
- IL02: lupa konversi lusin/kodi/gros.
- IL03: terhambat saat pembagian/perkalian berbentuk desimal.
- IL04: sulit membandingkan paket saat isi dan harga sama-sama berbeda.
- IL05: tertukar pembilang dan penyebut saat membagi harga total.

**Hambatan ekstrinsik (EL)**
- EL01: istilah "pak", "gros", "dus" menimbulkan salah tafsir.
- EL02: tabel harga terpisah dari soal (bolak-balik halaman).
- EL03: hiasan gambar menyamarkan data harga dan jumlah.
- EL04: penjelasan guru terlalu cepat.
- EL05: kuantitas terselip dalam cerita; menandai angka sangat membantu.

**Pendukung germane (GL)**
- GL01: simulasi eceran/grosir membantu. GL02: mengecek kewajaran hasil. GL03: petunjuk "cari harga 1 biji dulu" membuat lanjut sendiri. GL04: menjelaskan ke teman memperjelas. GL05: ragu pada kasus majemuk, butuh pendampingan.

**Usulan siswa (DS)**
- DS01: simulasi buka toko eceran, petunjuk pelan-pelan. DS02: umpan balik menunjuk letak salah bagi/kali. DS03: tanpa animasi ramai, satu langkah per layar.

## 6. Kebutuhan fungsional

Prioritas: **P1** wajib, **P2** penting, **P3** jika sempat.

| ID | Fitur | Deskripsi | Kode temuan | Prioritas |
|---|---|---|---|---|
| F01 | Mode One Step per Screen | Setiap soal dipecah: Langkah 1 cari per unit, Langkah 2 cari total baru. | EL03, DS03 | P1 |
| F02 | Diagram Pemecahan Unit | Total harga dibagi ke wadah-wadah unit, lalu dikalikan ke target baru. | IL01 | P1 |
| F03 | Kamus Satuan (pop-up) | Tombol tetap yang menampilkan 1 lusin = 12, 1 kodi = 20, 1 gros = 144. | IL02 | P1 |
| F04 | Penyusun rumus drag-and-drop | Seret/ketuk "Uang" ke atas dan "Jumlah barang" ke bawah pada pecahan Harga per unit = total ÷ jumlah. | IL05 | P1 |
| F05 | Penanda kata kunci | Soal cerita otomatis menyorot jumlah barang dan harga total; siswa juga bisa menandai sendiri. | EL01, EL05 | P1 |
| F06 | Data dan pertanyaan satu layar | Label harga per unit tepat di samping gambar/ikon barang. | EL02 | P1 |
| F07 | Kontrol tempo | Tombol Langkah sebelumnya, Ulang, Lanjut pada setiap penjelasan. | EL04 | P1 |
| F08 | Simulasi Toko Eceran | Membuka kemasan grosir (dus/lusin) menjadi unit eceran dengan interaksi sederhana. | GL01, DS01 | P2 |
| F09 | Prompt validasi hasil | Pertanyaan: "Apakah harga 1 barang masuk akal jika lebih mahal dari harga 1 lusin?" | GL02, GL04 | P2 |
| F10 | Sistem petunjuk bertingkat | Petunjuk muncul bertahap; naik tingkat jika salah berulang. | GL03, DS02 | P1 |
| F11 | Umpan balik letak salah | Pesan spesifik: tertukar pembilang/penyebut, salah konversi satuan, salah arah kali/bagi. | DS02, IL05 | P1 |
| F12 | Modul latihan bertingkat | Tingkat 1 satuan tunggal → 2 nilai sebagian → 3 perbandingan paket → 4 majemuk. | GL05, IL04 | P2 |
| F13 | Pretest dan posttest | Soal literasi matematis tanpa bantuan; skor tersimpan. | Penelitian | P1 |
| F14 | Skala beban kognitif | Kuesioner Leppink (intrinsic, extraneous, germane) setelah sesi dan posttest. | Penelitian | P1 |
| F15 | Pencatatan aktivitas | Waktu per soal, jumlah petunjuk, jumlah ulang langkah, jawaban salah. | EL04, GL03 | P1 |
| F16 | Kalkulator bantu | Kalkulator sederhana untuk pembagian desimal agar IL03 tidak menghambat penalaran. | IL03 | P3 |
| F17 | PWA | Dapat di-install dan dibuka cepat di smartphone. | Platform | P2 |

## 7. Alur pengguna

1. Siswa membuka aplikasi → memasukkan **kode siswa** dan kelas.
2. **Pretest** (4 soal literasi, tanpa petunjuk).
3. **Sesi belajar** (2–3 sesi): penjelasan satu langkah per layar → latihan bertingkat dengan petunjuk dan umpan balik.
4. **Posttest** (soal setara pretest) → **skala beban kognitif**.
5. Layar selesai; data tersimpan untuk fasilitator.

## 8. Rancangan soal literasi matematis

Setiap soal dikaitkan dengan empat proses literasi dan rubrik skor (total 24, rincian di dokumen tugas Tabel 2).

| Proses | Wujud pada materi ini |
|---|---|
| Formulating (merumuskan) | Menentukan jumlah barang dan harga total, memilih operasi (bagi dahulu, lalu kali). |
| Employing (menggunakan) | Mengonversi satuan dan menghitung harga per unit serta nilai baru. |
| Interpreting (menafsirkan) | Mengecek kewajaran hasil dan menyatakan hasil dalam konteks (paket mana lebih murah). |
| Reasoning (bernalar) | Menjelaskan alasan memilih langkah atau kesimpulan. |

Contoh bank soal (disesuaikan dengan soal pemicu wawancara):
- Tingkat 1: 1 lusin buku tulis Rp48.000, harga 1 buku?
- Tingkat 2: 4 pensil Rp10.000, harga 1 kodi (20 buah)?
- Tingkat 3: Paket A (5 pulpen Rp15.000) vs Paket B (12 pulpen Rp30.000), mana lebih murah dan mengapa?
- Tingkat 4: harga 1 lusin Rp36.000, berapa untuk 1 lusin lebih 3 buah?

Soal pretest/posttest harus memakai angka berbeda tetapi struktur setara.

## 9. Model data (Supabase)

| Tabel | Kolom utama |
|---|---|
| `siswa` | id (uuid), kode_siswa, kelas, dibuat_pada |
| `sesi` | id, siswa_id, jenis (`pretest`/`belajar`/`posttest`), nomor_sesi, mulai, selesai |
| `jawaban` | id, sesi_id, soal_id, tingkat, jawaban_siswa, benar (bool), skor, jumlah_petunjuk, jumlah_ulang, durasi_detik |
| `event_log` | id, sesi_id, jenis_event (mis. `buka_kamus`, `petunjuk_naik`, `ulang_langkah`), payload (jsonb), waktu |
| `beban_kognitif` | id, sesi_id, jawaban_icl (jsonb), jawaban_ecl (jsonb), jawaban_gcl (jsonb), dibuat_pada |

Isi item kuesioner mengikuti instrumen Leppink yang dipakai di mata kuliah.

## 10. Kebutuhan non-fungsional

- **Kinerja:** halaman awal termuat < 3 detik pada jaringan seluler biasa.
- **Kompatibilitas:** Chrome Android terbaru dan browser desktop modern; lebar minimum 360 px.
- **Keterbacaan:** font isi ≥ 16 px, kontras warna memadai, target sentuh ≥ 48 px.
- **Keandalan:** jawaban tidak hilang saat koneksi putus (antre lokal lalu kirim ulang).
- **Privasi:** hanya kode siswa; tanpa nama lengkap atau foto. Persetujuan merekam dan data dijelaskan kepada siswa dan orang tua/wali.
- **Keamanan:** RLS aktif, kunci `service_role` tidak ada di klien.

## 11. Milestone (ADDIE → Develop)

| # | Milestone | Isi |
|---|---|---|
| M1 | Fondasi | Setup Vite + React, variabel CSS, layout mobile, koneksi Supabase, kode siswa |
| M2 | Inti belajar | F01, F05, F06, F07 pada Tingkat 1 dan 2 |
| M3 | Penopang IL | F02, F03, F04, F11 |
| M4 | Penopang GL | F10, F09, F08 |
| M5 | Penelitian | F13, F14, F15 (pretest, posttest, Leppink, log) |
| M6 | Perluasan | F12, F17, F16 (jika sempat) |
| M7 | Uji dan rilis | Uji ke 1–2 siswa, perbaikan, deploy, README |

## 12. Cara menguji fitur (dari matriks analisis)

| Fitur | Cara uji |
|---|---|
| F02 | Siswa menjelaskan hubungan harga satuan dan total setelah memakai diagram. |
| F03 | Amati apakah salah konversi satuan berkurang. |
| F04 | Amati ketepatan menyusun rumus pembagian per unit. |
| F05 | Amati apakah siswa menemukan data relevan tanpa petunjuk langsung. |
| F06 | Uji navigasi dan wawancara kejelasan visual. |
| F01 | Wawancara kejelasan tampilan aplikasi. |
| F07 | Catat frekuensi pengulangan langkah. |
| F08 | Amati kualitas penalaran sebelum dan sesudah simulasi. |
| F09 | Amati apakah siswa mengoreksi hasilnya sendiri. |
| F10 | Catat penurunan bantuan yang dibutuhkan pada soal berikutnya. |
| F12 | Beri soal variasi majemuk dan amati kelancaran alur. |

## 13. Risiko dan mitigasi

| Risiko | Mitigasi |
|---|---|
| Subjek hanya 2 siswa, hasil tidak bisa digeneralisasi | Tulis sebagai studi kasus; fokus pada pola dan kualitas penalaran |
| Fitur terlalu banyak untuk waktu tersisa | Kerjakan prioritas P1 dulu; P3 opsional |
| Drag-and-drop sulit di layar sentuh | Sediakan alternatif ketuk-untuk-menempatkan |
| Koneksi siswa tidak stabil | Antrean lokal dan kirim ulang |
| Fitur justru menambah beban (animasi, teks panjang) | Review dengan aturan beban kognitif di `CLAUDE.md` bagian 5 |
| Satu siswa jadi dasar kebutuhan (S01) | Validasi cepat ke siswa subjek pada pertemuan 4 |
