# DESAIN — Aplikasi "Toko Unit"

Dokumen ini menjelaskan tampilan dan interaksi. Fitur (F01–F17) dan kode temuan (IL/EL/GL/DS) merujuk ke `PRD.md`.

## 1. Prinsip desain

| Prinsip | Penerapan | Sumber temuan |
|---|---|---|
| Satu langkah per layar | Satu keputusan per layar, tombol utama tunggal | EL03, DS03 |
| Minim hiasan | Tanpa latar bergerak, tanpa musik, ikon fungsional saja | EL03 |
| Data dan pertanyaan berdekatan | Tidak perlu pindah halaman untuk melihat angka | EL02 |
| Siswa memegang tempo | Selalu ada Kembali, Ulang, Lanjut | EL04 |
| Bantuan bertahap | Petunjuk dibuka satu tingkat demi satu | GL03, DS02 |
| Kesalahan ditunjuk dengan jelas | Pesan spesifik, nada ramah, tanpa menyalahkan | DS02 |
| Konkret sebelum abstrak | Simulasi barang sebelum rumus | GL01, DS01 |

## 2. Identitas visual

**Warna** (definisikan sebagai variabel di `index.css`)

| Variabel | Nilai | Kegunaan |
|---|---|---|
| `--warna-utama` | `#2F6FED` | Tombol utama, penanda langkah aktif |
| `--warna-utama-gelap` | `#1E4FB8` | Tombol ditekan, teks tautan |
| `--warna-uang` | `#1F8A5B` | Semua angka **harga/uang** (konsisten di seluruh aplikasi) |
| `--warna-jumlah` | `#D9730D` | Semua angka **jumlah barang** (konsisten) |
| `--warna-benar` | `#1F8A5B` | Umpan balik benar |
| `--warna-salah` | `#C0392B` | Umpan balik perlu diperbaiki (lembut, bukan merah menyala) |
| `--warna-latar` | `#FAFAF7` | Latar halaman |
| `--warna-kartu` | `#FFFFFF` | Kartu soal |
| `--warna-teks` | `#1C1C1E` | Teks isi |
| `--warna-teks-redup` | `#5F6368` | Teks sekunder |

Aturan kunci: **hijau = uang, oranye = jumlah barang** di soal, diagram, dan rumus. Pewarnaan konsisten ini membantu siswa membedakan pembilang dan penyebut (IL05) tanpa penjelasan tambahan. Jangan mengandalkan warna saja: tambahkan label teks atau ikon kecil ("Rp", "buah").

**Tipografi**
- Satu keluarga font sans-serif sistem (`system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`).
- Isi 16–18 px; judul soal 20–22 px; angka penting 24 px tebal. Tinggi baris 1,5.
- Maksimal satu kalimat per baris informasi.

**Bentuk dan jarak**
- Sudut membulat 12 px, bayangan tipis, jarak antarblok 16 px, padding kartu 16–20 px.
- Titik henti responsif: seluruh desain dasar untuk ≤ 500 px; di atas itu, konten dipusatkan dengan lebar maksimum 520 px.

## 3. Peta layar

```
Masuk (kode siswa)
   └─ Beranda
        ├─ Pretest ──────────────┐
        ├─ Belajar               │
        │    ├─ Pilih tingkat    │
        │    ├─ Penjelasan (langkah demi langkah)
        │    ├─ Latihan (Langkah 1 → Langkah 2 → Cek)
        │    └─ Simulasi Toko Eceran
        ├─ Posttest ─────────────┤
        └─ Skala beban kognitif ◄┘
              └─ Selesai
```

## 4. Wireframe layar utama (lebar 360 px)

### 4.1 Masuk
```
┌──────────────────────────┐
│        Toko Unit         │
│  Belajar harga per unit  │
│                          │
│  Kode siswa              │
│  [ S01                 ] │
│  Kelas                   │
│  [ VII ▾ ]               │
│                          │
│  [      Mulai       ]    │
└──────────────────────────┘
```

### 4.2 Beranda
```
┌──────────────────────────┐
│ Halo, S01                │
│ Langkah hari ini:        │
│ ┌──────────────────────┐ │
│ │ ▶ Lanjut belajar     │ │
│ │ Tingkat 1 • Soal 2/5 │ │
│ └──────────────────────┘ │
│ [ Pretest ✓ ] [ Posttest]│
└──────────────────────────┘
```
Hanya satu tombol besar yang menonjol; yang lain sekunder.

### 4.3 Latihan — Langkah 1 (cari harga per unit)
```
┌──────────────────────────┐
│ Langkah 1 dari 2   [📖Kamus]│
│ ──●─────○                │
│ 4 pensil harganya        │
│ Rp10.000.                │
│ Berapa harga 1 pensil?   │
│                          │
│    Rp10.000   ← hijau    │
│    ─────────             │
│     4 buah    ← oranye   │
│                          │
│ [ Rp____ ]   [Periksa]   │
│ [💡 Petunjuk]            │
│ [← Sebelumnya] [Ulang]   │
└──────────────────────────┘
```

### 4.4 Latihan — Langkah 2 (cari nilai baru)
```
┌──────────────────────────┐
│ Langkah 2 dari 2   [📖Kamus]│
│ ○─────●                  │
│ 1 pensil = Rp2.500       │
│ Berapa harga 1 kodi?     │
│ (1 kodi = 20 buah)       │
│                          │
│  Rp2.500 × 20 = Rp____   │
│              [Periksa]   │
└──────────────────────────┘
```

### 4.5 Cek kewajaran (setelah jawaban dikirim)
```
┌──────────────────────────┐
│ Jawabanmu: Rp50.000      │
│ Cek dulu:                │
│ Apakah 1 kodi (20 buah)  │
│ lebih mahal dari 4 buah? │
│ [ Ya, masuk akal ]       │
│ [ Tidak, aku periksa lagi]│
└──────────────────────────┘
```

## 5. Komponen (di `src/components/`)

| Komponen | Fitur | Perilaku |
|---|---|---|
| `LangkahSoal` | F01 | Kerangka layar satu langkah: judul langkah, penunjuk progres (2 titik), area isi, tombol aksi |
| `SoalCerita` | F05, F06 | Menampilkan teks soal dengan kata kunci tersorot (jumlah = oranye, harga = hijau); ketuk kata/angka untuk menandai sendiri |
| `DiagramPemecahanUnit` | F02 | Satu blok besar berisi total harga → dibagi menjadi N wadah sama besar → satu wadah disorot sebagai "1 unit" → disalin sebanyak target. Animasi ≤ 600 ms, bisa dijeda dan diulang |
| `KamusSatuan` | F03 | Tombol tetap di pojok kanan atas; membuka panel bawah (bottom sheet) berisi 1 lusin = 12, 1 kodi = 20, 1 gros = 144. Ditutup dengan satu ketukan; jumlah buka dicatat |
| `PenyusunRumus` | F04 | Dua kotak seret (Uang, Jumlah barang) dan pecahan kosong. Alternatif ketuk: ketuk kotak lalu ketuk posisi. Pengecekan langsung dengan pesan spesifik |
| `PetunjukBertingkat` | F10 | Tombol 💡; membuka satu tingkat per ketukan (bagian 6) |
| `UmpanBalik` | F11 | Kartu kecil di bawah jawaban: ikon, satu kalimat letak salah, tombol Coba lagi |
| `CekKewajaran` | F09 | Pertanyaan ya/tidak sebelum soal dianggap selesai |
| `SimulasiTokoEceran` | F08 | Dus/lusin berisi unit; ketuk "Buka kemasan" → unit terurai; ketuk untuk membagi harga ke tiap unit |
| `KontrolTempo` | F07 | Tombol Sebelumnya, Ulang, Lanjut berukuran seragam di bagian bawah |
| `SkalaLeppink` | F14 | Satu pertanyaan per layar, skala 0–10 dengan geser atau tombol angka |
| `FormatRupiah` | — | Fungsi/komponen tampilan `Rp48.000` |

## 6. Sistem petunjuk bertingkat (F10)

Petunjuk dibuka siswa (💡) dan otomatis ditawarkan setelah dua kesalahan berurutan pada langkah yang sama. Tidak pernah langsung menampilkan jawaban.

| Tingkat | Isi | Contoh (Soal: 4 pensil Rp10.000, harga 1 kodi) |
|---|---|---|
| 1 | Arahan alur | "Cari dulu harga 1 pensil." |
| 2 | Arahan operasi | "Bagi total uang dengan jumlah pensil." |
| 3 | Kerangka rumus | "Rp10.000 ÷ 4 = ...". |
| 4 | Contoh serupa selesai (angka berbeda) | "Contoh: 3 buku Rp9.000 → 1 buku Rp3.000." |

Jumlah petunjuk per soal dicatat di `jawaban.jumlah_petunjuk`.

## 7. Umpan balik letak salah (F11)

| Kondisi terdeteksi | Pesan |
|---|---|
| Pembilang/penyebut tertukar (mis. 4 ÷ 10.000) | "Uang ada di atas, jumlah barang di bawah. Coba tukar." |
| Salah konversi satuan (pakai 10 untuk 1 lusin) | "Cek kamus satuan: 1 lusin berapa buah?" |
| Mengalikan padahal harus membagi di Langkah 1 | "Langkah 1 mencari harga 1 barang. Itu dibagi, bukan dikali." |
| Membagi padahal harus mengalikan di Langkah 2 | "Sekarang kita punya harga 1 barang. Untuk banyak barang, dikali." |
| Hasil per unit lebih besar dari total | "Harga 1 barang seharusnya lebih kecil dari harga semuanya." |
| Jawaban benar | "Tepat. Harga 1 pensil Rp2.500." |

Nada: singkat, hangat, tanpa tanda seru berlebihan, tanpa kata "salah besar".

## 8. Mikro-interaksi dan gerak

- Transisi antarlangkah: geser halus 200 ms atau tanpa animasi (hormati `prefers-reduced-motion`).
- Tidak ada konfeti, suara, atau skor poin.
- Tombol *Periksa* nonaktif sampai ada isian.
- Setelah benar, tombol *Lanjut* muncul sebagai satu-satunya aksi utama.

## 9. Aksesibilitas dan kegunaan

- Target sentuh ≥ 48×48 px; jarak antartombol ≥ 8 px.
- Kontras teks terhadap latar ≥ 4,5:1.
- Semua ikon punya label teks atau `aria-label`.
- Input angka memakai `inputmode="numeric"` agar keyboard angka muncul di ponsel.
- Mendukung layar vertikal; orientasi horizontal tidak wajib.
- Pesan galat jaringan berbahasa sederhana ("Koneksi terputus. Jawabanmu aman, akan dikirim lagi.").

## 10. Konvensi CSS

- Awalan kelas per bagian: `.masuk-*`, `.beranda-*`, `.langkah-*`, `.diagram-*`, `.kamus-*`, `.rumus-*`, `.petunjuk-*`, `.simulasi-*`, `.skala-*`.
- Semua nilai warna/jarak lewat variabel di `index.css`.
- Satu media query utama `@media (max-width: 500px)` untuk penyesuaian ponsel, seperti pola proyek sebelumnya.

## 11. Aset

| Aset | Keterangan |
|---|---|
| `pwa-192x192.png`, `pwa-512x512.png` | Ikon PWA, bentuk sederhana (kantong belanja atau pecahan) |
| `favicon.svg` | Ikon tab browser |
| `toko-pensil.png`, `toko-buku.png`, `toko-pulpen.png`, `toko-dus.png` | Ilustrasi datar satu warna, dipakai hanya di samping label harga/jumlah (F06) dan simulasi |

Tidak ada aset audio.

## 12. Daftar periksa desain sebelum rilis

- [ ] Setiap layar hanya punya satu aksi utama
- [ ] Hijau selalu uang dan oranye selalu jumlah, di semua layar
- [ ] Data soal, gambar, dan pertanyaan terlihat bersamaan tanpa menggulir jauh
- [ ] Kamus satuan terbuka dalam satu ketukan dari layar mana pun yang berisi soal
- [ ] Petunjuk tidak pernah memberi jawaban akhir pada tingkat 1–3
- [ ] Teks lolos uji baca oleh siswa SMP (tanpa istilah yang tidak dijelaskan)
- [ ] Berjalan baik di 360 px dan desktop
