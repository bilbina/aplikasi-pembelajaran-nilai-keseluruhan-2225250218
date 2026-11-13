# CLAUDE.md — Aplikasi Pembelajaran Nilai Keseluruhan, Nilai Per Unit, dan Nilai Sebagian

File ini dibaca pertama kali oleh Claude Code setiap sesi. Baca juga `PRD.md` (apa yang dibangun) dan `DESAIN.md` (bagaimana tampilannya) sebelum menulis kode.

## 1. Ringkasan proyek

- **Nama aplikasi (sementara):** Toko Unit — belajar harga per unit
- **Tujuan:** membantu siswa SMP (kelas VII–VIII) menguasai materi aritmetika sosial *Nilai Keseluruhan, Nilai Per Unit, dan Nilai Sebagian* sambil **menekan beban kognitif** (intrinsic, extraneous, germane) agar kemampuan **literasi matematis** meningkat.
- **Dasar kebutuhan:** wawancara analisis kebutuhan dengan siswa S01 (kelas VIII), kode temuan IL/EL/GL/K/DS. Setiap fitur harus bisa ditelusuri ke satu kode temuan (lihat tabel keterlacakan di `PRD.md`).
- **Platform:** aplikasi web responsif (mobile-first), berjalan di browser dan smartphone (PWA, bisa di-install ke layar utama). Tidak ada aplikasi native.
- **Konteks tugas:** tugas Algoritma dan Pemrograman, pendekatan *vibe coding*, model pengembangan ADDIE, instrumen beban kognitif Leppink.
- **Bahasa antarmuka:** Bahasa Indonesia, kalimat pendek, istilah sesuai buku SMP.

## 2. Tech stack

| Lapisan | Pilihan |
|---|---|
| Build tool | Vite |
| UI | React (fungsional + hooks), JavaScript (bukan TypeScript) |
| Styling | CSS biasa (`App.css`, `index.css`), tanpa framework CSS |
| Backend/DB | Supabase (PostgreSQL + Auth anonim) lewat `src/supabase.js` |
| PWA | `public/pwa-192x192.png`, `public/pwa-512x512.png`, manifest, service worker (plugin Vite PWA bila perlu) |
| Hosting | GitHub → Vercel atau Netlify (build `npm run build`, output `dist`) |

## 3. Struktur folder

Kerangka mengikuti proyek sebelumnya (folder `public`, `src`, `App.jsx`, `App.css`, `supabase.js`, dst.). Tanda ➕ = tambahan baru agar `App.jsx` tidak membengkak.

```
aplikasi-pembelajaran-nilai-per-unit-2225250063/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│   └── toko-*.png            # ilustrasi sederhana simulasi (pensil, buku, pulpen, dus)
├── src/
│   ├── assets/
│   ├── components/ ➕          # komponen per fitur (lihat DESAIN.md bagian 5)
│   ├── data/ ➕                # soal.js, satuan.js, petunjuk.js (konten terpisah dari logika)
│   ├── App.jsx               # routing antar layar + state global saja
│   ├── App.css               # gaya global + per bagian
│   ├── index.css             # reset + variabel warna/tipografi
│   ├── main.jsx
│   └── supabase.js
├── .env                      # TIDAK di-commit
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

Nama folder tugas yang dikumpulkan: `2225250063_Adelilya_Salsha` (format NIM_NAMA_LENGKAP).

## 4. Perintah

```bash
npm install
npm run dev        # http://localhost:5173
npm run build
npm run lint
git add . && git commit -m "pesan jelas" && git push origin main
```

Variabel lingkungan di `.env` (jangan pernah dicetak ke log atau di-commit):

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

## 5. Aturan beban kognitif (WAJIB, berlaku untuk semua kode UI)

Aturan ini adalah inti penelitian. Jika ragu, pilih yang lebih sederhana.

1. **One Step per Screen.** Satu layar = satu keputusan/langkah (Langkah 1: cari per unit, Langkah 2: cari total baru).
2. **Tanpa hiasan.** Tidak ada animasi ramai, latar bergerak, atau ilustrasi dekoratif. Animasi hanya untuk menjelaskan konsep (membagi total ke wadah unit) dan durasinya ≤ 600 ms. Musik latar tidak ada.
3. **Informasi yang dibutuhkan satu tempat.** Data soal, tabel harga, dan pertanyaan tampil di layar yang sama. Tidak ada tabel di halaman lain (hindari *split-attention*).
4. **Siswa mengatur tempo.** Setiap penjelasan punya tombol *Lanjut*, *Ulang*, dan *Langkah sebelumnya*. Tidak ada auto-advance.
5. **Bantuan bertahap, bukan jawaban langsung.** Petunjuk dibuka satu tingkat demi satu tingkat (lihat `DESAIN.md` bagian 6).
6. **Umpan balik menunjuk letak salah.** Contoh: "Jumlah barang seharusnya di bawah (penyebut), bukan harga."
7. **Kamus satuan selalu terjangkau** (1 lusin = 12, 1 kodi = 20, 1 gros = 144) lewat satu ketukan.
8. **Kata kunci disorot** pada soal cerita (jumlah barang dan harga total) dan siswa bisa menandai sendiri.
9. **Bahasa soal sederhana.** Satu kalimat = satu informasi. Satuan seperti pak/gros/dus selalu dijelaskan di soal.
10. **Mobile-first.** Rancang untuk lebar 360 px, target sentuh ≥ 48 px, font isi ≥ 16 px.

## 6. Konvensi kode

- Komponen React: `PascalCase`, satu komponen per file di `src/components/`.
- Kelas CSS: `kebab-case`, diawali nama bagian, mis. `.diagram-unit`, `.kamus-satuan`, `.petunjuk-kartu` (pola seperti `.calculator-section .material-card` di proyek sebelumnya).
- Warna, jarak, dan ukuran font **hanya** lewat variabel CSS di `index.css` (`var(--warna-utama)`).
- Konten soal, satuan, dan petunjuk disimpan di `src/data/*.js`, bukan ditulis langsung di JSX.
- Semua teks yang tampil ke siswa berbahasa Indonesia. Komentar kode boleh Indonesia.
- Komponen kecil (< 150 baris). Jika `App.css` melewati ±1000 baris, pecah per komponen.
- Tangani kondisi *loading*, *error*, dan *offline* pada setiap pemanggilan Supabase.
- Perhitungan memakai bilangan bulat/rupiah; format tampilan `Rp48.000` lewat satu fungsi `formatRupiah()`.

## 7. Supabase

Tabel inti (detail kolom di `PRD.md` bagian 9): `siswa`, `sesi`, `jawaban`, `event_log`, `beban_kognitif`.

- Gunakan **Auth anonim** agar siswa tidak perlu akun; identitas memakai kode siswa (mis. `S01`), bukan nama asli.
- Aktifkan **Row Level Security** pada semua tabel. Kunci `anon` hanya boleh `insert` data milik sesinya sendiri.
- Jangan simpan data pribadi (nama lengkap, alamat, foto) siswa.

## 8. Yang JANGAN dilakukan

- Jangan menambah fitur di luar `PRD.md` tanpa konfirmasi (setiap fitur harus punya kode temuan).
- Jangan menambah pustaka besar (animasi, UI kit) tanpa alasan kuat.
- Jangan commit `.env` atau kunci Supabase `service_role`.
- Jangan menampilkan jawaban akhir sebelum siswa mencoba setidaknya sekali.
- Jangan menampilkan iklan, pop-up berlebihan, atau skor kompetitif yang menambah beban ekstra.

## 9. Alur kerja (ADDIE)

| Fase | Wujud di proyek |
|---|---|
| Analyze | Wawancara kebutuhan → matriks fitur (sudah) |
| Design | `PRD.md`, `DESAIN.md` (file ini dan pasangannya) |
| Develop | Coding bertahap sesuai Milestone di `PRD.md` bagian 11 |
| Implement | 2 siswa SMP, 2–3 sesi belajar, pretest dan posttest |
| Evaluate | Skor literasi + skala beban kognitif Leppink + catatan pengulangan langkah |

Kerjakan **satu milestone per sesi**. Setelah selesai: jalankan `npm run lint` dan `npm run build`, uji di lebar 360 px, lalu commit.

## 10. Definition of Done (per fitur)

- [ ] Sesuai aturan beban kognitif bagian 5
- [ ] Berjalan di layar 360 px dan desktop
- [ ] Teks bebas typo dan memakai istilah yang benar
- [ ] Data penting tercatat ke `event_log`
- [ ] Lint dan build lolos tanpa error
- [ ] Cara menguji fitur (kolom terakhir matriks) bisa dilakukan langsung
