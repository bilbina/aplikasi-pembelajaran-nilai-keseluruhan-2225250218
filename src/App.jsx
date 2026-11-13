
import { useState, useRef } from 'react'
import './App.css'
import { SOAL } from './data/soal'
import LangkahSoal from './components/LangkahSoal'

const PRETEST = [
  { t: '5 buku seharga Rp3.000 per buku. Berapa nilai keseluruhannya?', o: ['Rp8.000', 'Rp15.000', 'Rp20.000', 'Rp30.000'], j: 1 },
  { t: '8 pensil seharga Rp2.000 per pensil. Berapa nilai keseluruhannya?', o: ['Rp10.000', 'Rp12.000', 'Rp16.000', 'Rp20.000'], j: 2 },
  { t: '4 buku seharga Rp20.000. Berapa nilai per unit?', o: ['Rp4.000', 'Rp5.000', 'Rp6.000', 'Rp8.000'], j: 1 },
  { t: '6 kg beras seharga Rp48.000. Berapa harga per kg?', o: ['Rp6.000', 'Rp7.000', 'Rp8.000', 'Rp9.000'], j: 2 },
  { t: '10 pensil seharga Rp20.000. Berapa harga 3 pensil?', o: ['Rp4.000', 'Rp6.000', 'Rp8.000', 'Rp10.000'], j: 1 },
  { t: '5 buku seharga Rp25.000. Berapa harga 2 buku?', o: ['Rp5.000', 'Rp8.000', 'Rp10.000', 'Rp15.000'], j: 2 }
]

const POSTTEST = [
  { t: '7 buku seharga Rp4.000 per buku. Berapa nilai keseluruhannya?', o: ['Rp21.000', 'Rp24.000', 'Rp28.000', 'Rp32.000'], j: 2 },
  { t: '9 pensil seharga Rp3.000 per pensil. Berapa nilai keseluruhannya?', o: ['Rp18.000', 'Rp24.000', 'Rp27.000', 'Rp30.000'], j: 2 },
  { t: '5 kg gula seharga Rp60.000. Berapa harga per kg?', o: ['Rp10.000', 'Rp12.000', 'Rp15.000', 'Rp20.000'], j: 1 },
  { t: '8 buku seharga Rp72.000. Berapa harga satu buku?', o: ['Rp7.000', 'Rp8.000', 'Rp9.000', 'Rp10.000'], j: 2 },
  { t: '12 pensil seharga Rp36.000. Berapa harga 4 pensil?', o: ['Rp9.000', 'Rp12.000', 'Rp15.000', 'Rp18.000'], j: 1 },
  { t: '10 buku seharga Rp80.000. Berapa harga 3 buku?', o: ['Rp16.000', 'Rp20.000', 'Rp24.000', 'Rp30.000'], j: 2 }
]

const TAHAP = [
  { id: 'keseluruhan', judul: 'Nilai Keseluruhan', deskripsi: 'Menghitung nilai seluruh barang.', rumus: 'Jumlah barang × Nilai per unit' },
  { id: 'perUnit', judul: 'Nilai Per Unit', deskripsi: 'Menghitung nilai untuk satu satuan barang.', rumus: 'Nilai keseluruhan ÷ Jumlah barang' },
  { id: 'sebagian', judul: 'Nilai Sebagian', deskripsi: 'Menghitung nilai beberapa bagian barang.', rumus: 'Jumlah sebagian × Nilai per unit' }
]

export default function App() {
  const [layar, setLayar] = useState('masuk')
  const [nama, setNama] = useState('')
  const [kelas, setKelas] = useState('VII')

  const [mode, setMode] = useState('')
  const [idx, setIdx] = useState(0)
  const [pilihan, setPilihan] = useState(null)
  const [umpan, setUmpan] = useState(null)
  const [skor, setSkor] = useState(0)
  const [nilaiPretest, setNilaiPretest] = useState(null)
  const [nilaiPosttest, setNilaiPosttest] = useState(null)

  const [tahapAktif, setTahapAktif] = useState('')
  const [idxLatihan, setIdxLatihan] = useState(0)

const audioRef = useRef(null)
const [musikAktif, setMusikAktif] = useState(false)

const toggleMusik = async () => {
  if (!audioRef.current) {
    audioRef.current = new Audio('/musik-belajar.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.35
  }

  if (musikAktif) {
    audioRef.current.pause()
    setMusikAktif(false)
  } else {
    try {
      await audioRef.current.play()
      setMusikAktif(true)
    } catch (error) {
      alert('Musik belum bisa diputar. Periksa file musiknya.')
    }
  }
}


  const bank = mode === 'pretest' ? PRETEST : POSTTEST
  const soalKuis = bank[idx]
  const soalLatihan = SOAL.filter(s => s.jenis === tahapAktif)

  const mulaiKuis = (jenis) => {
    setMode(jenis)
    setIdx(0)
    setPilihan(null)
    setUmpan(null)
    setSkor(0)
    setLayar('kuis')
  }

  const periksa = () => {
    if (pilihan === null) return
    setUmpan({
      benar: pilihan === soalKuis.j,
      teks: pilihan === soalKuis.j
        ? 'Benar! Jawaban kamu tepat.'
        : 'Belum tepat. Jawaban benar: ' + soalKuis.o[soalKuis.j]
    })
  }

  const lanjutKuis = () => {
    const skorBaru = skor + (umpan.benar ? 1 : 0)

    if (idx < bank.length - 1) {
      setSkor(skorBaru)
      setIdx(idx + 1)
      setPilihan(null)
      setUmpan(null)
    } else {
      const hasil = Math.round(skorBaru / bank.length * 100)

      if (mode === 'pretest') {
        setNilaiPretest(hasil)
        setLayar('hasil-pretest')
      } else {
        setNilaiPosttest(hasil)
        setLayar('evaluasi')
      }
    }
  }

  const MenuNavigasi = () => (
    <div className="menu-navigasi">
      <button onClick={() => setLayar('beranda')}>Beranda</button>
      <button onClick={() => setLayar('materi')}>Materi</button>
      <button onClick={() => mulaiKuis('pretest')}>Pretest</button>
      <button onClick={() => setLayar('pilih-latihan')}>Latihan</button>
      <button onClick={() => mulaiKuis('posttest')}>Post-test</button>
      <button onClick={() => setLayar('evaluasi')}>Evaluasi</button>
    </div>
  )

  
if (layar === 'masuk') {
  return (
    <div className="app">
      <button
        type="button"
        className="tombol-musik-global"
        onClick={toggleMusik}
        title={musikAktif ? 'Matikan musik' : 'Putar musik'}
        aria-label={musikAktif ? 'Matikan musik' : 'Putar musik'}
      >
        {musikAktif ? '🔊' : '🎵'}
      </button>

      <div className="kartu halaman-masuk">
        <img
  src="/anak-sekolah.png"
  alt="Ilustrasi anak sekolah"
  className="gambar-anak"
/>

        <div className="ilustrasi-masuk">📚✨</div>

        <h1 className="judul-aplikasi">
          Jelajah Matematika
        </h1>

        <p className="tagline">
          Petualangan Seru Belajar Aritmetika Sosial
        </p>

        <div className="sambutan-masuk">
          <h2>Halo, Calon Matematikawan! 👋</h2>
          <p>
            Siap menjelajahi dunia matematika?
            Yuk, belajar nilai keseluruhan, nilai per unit,
            dan nilai sebagian melalui aktivitas yang seru!
          </p>
        </div>

        <div className="form-masuk">
          <label>Nama lengkap</label>
          <input
            className="input"
            value={nama}
            onChange={e => setNama(e.target.value)}
            placeholder="Masukkan nama lengkap"
          />

          <label>Kelas</label>
          <select
            className="input"
            value={kelas}
            onChange={e => setKelas(e.target.value)}
          >
            <option value="VII">VII</option>
            <option value="VIII">VIII</option>
            <option value="IX">IX</option>
          </select>

          <button
            className="tombol tombol-penuh tombol-mulai"
            disabled={!nama.trim()}
            onClick={() => setLayar('beranda')}
          >
            Mulai Petualangan 🚀
          </button>
        </div>

        <p className="teks-bawah">
          Belajar • Berlatih • Raih Prestasi 🏆
        </p>

      </div>
    </div>
  )
}

if (layar === 'beranda') {
  return (
    <div className="app halaman-beranda">
      <button
        type="button"
        className="tombol-musik-global"
        onClick={toggleMusik}
        title={musikAktif ? 'Matikan musik' : 'Putar musik'}
        aria-label={musikAktif ? 'Matikan musik' : 'Putar musik'}
      >
        {musikAktif ? '🔊' : '🎵'}
      </button>

      <div className="kartu kartu-utama">
        <div className="hiasan-beranda">✨ ⭐ ✨</div>

        <h1 className="judul-aplikasi">
          Jelajah Matematika
        </h1>

        <p className="tagline">
          🚀 Petualangan Seru Belajar Aritmetika Sosial
        </p>

        <div className="sambutan-beranda">
          <div className="avatar-beranda">👩‍🎓</div>
          <div>
            <h2>Halo, {nama}! 👋</h2>
            <p>Kelas {kelas}</p>
          </div>
        </div>

        <h3 className="judul-menu">
          🎯 Mau Belajar Apa Hari Ini?
        </h3>

        <div className="kisi-menu">
          <button className="menu-materi"
            onClick={() => setLayar('materi')}>
            <span>📚</span>
            Materi
            <small>Yuk pelajari konsepnya!</small>
          </button>

          <button className="menu-pretest"
            onClick={() => mulaiKuis('pretest')}>
            <span>📝</span>
            Pretest
            <small>Uji kemampuan awalmu!</small>
          </button>

          <button className="menu-latihan"
            onClick={() => setLayar('pilih-latihan')}>
            <span>✏️</span>
            Latihan
            <small>Asah kemampuanmu!</small>
          </button>

          <button className="menu-posttest"
            onClick={() => mulaiKuis('posttest')}>
            <span>📋</span>
            Post-test
            <small>Uji hasil belajarmu!</small>
          </button>

          <button className="menu-evaluasi"
            onClick={() => setLayar('evaluasi')}>
            <span>🏆</span>
            Evaluasi
            <small>Lihat perkembanganmu!</small>
          </button>
        </div>

        <div className="motivasi-beranda">
          🌟 "Belajar matematika jadi lebih seru
          jika dilakukan dengan semangat!"
        </div>
      </div>

      <div className="kartu alur-beranda">
        <h3>🗺️ Peta Petualangan Belajarmu</h3>
        <ol>
          <li>📝 Kerjakan pretest.</li>
          <li>📚 Pelajari nilai keseluruhan.</li>
          <li>💡 Pelajari nilai per unit.</li>
          <li>🧮 Pelajari nilai sebagian.</li>
          <li>✏️ Kerjakan latihan dan post-test.</li>
          <li>🏆 Lihat hasil evaluasi belajarmu.</li>
        </ol>
      </div>
    </div>
  )
}

  if (layar === 'materi') {
    return (
      <div className="app">
      <button
        type="button"
        className="tombol-musik-global"
        onClick={toggleMusik}
        title={musikAktif ? 'Matikan musik' : 'Putar musik'}
        aria-label={musikAktif ? 'Matikan musik' : 'Putar musik'}
      >
        {musikAktif ? '🔊' : '🎵'}
      </button>

        <MenuNavigasi />
        <div className="kartu">
          <h2>📖 Materi Aritmetika Sosial</h2>
          <p>Aritmetika sosial mempelajari penerapan perhitungan matematika dalam kegiatan ekonomi dan kehidupan sehari-hari.</p>

          <div className="bagian-materi">
            <h3>1. Nilai Keseluruhan</h3>
            <p>Nilai keseluruhan adalah nilai total dari sejumlah barang yang memiliki nilai per unit tertentu.</p>
            <div className="kotak-rumus">Nilai keseluruhan = Jumlah barang × Nilai per unit</div>
            <p><strong>Contoh:</strong> Harga 5 buku masing-masing Rp4.000.</p>
            <p>5 × Rp4.000 = <strong>Rp20.000</strong>.</p>
          </div>

          <div className="bagian-materi">
            <h3>2. Nilai Per Unit</h3>
            <p>Nilai per unit adalah nilai untuk setiap satu satuan barang.</p>
            <div className="kotak-rumus">Nilai per unit = Nilai keseluruhan ÷ Jumlah barang</div>
            <p><strong>Contoh:</strong> 5 buku berharga Rp20.000.</p>
            <p>Rp20.000 ÷ 5 = <strong>Rp4.000 per buku</strong>.</p>
          </div>

          <div className="bagian-materi">
            <h3>3. Nilai Sebagian</h3>
            <p>Nilai sebagian adalah nilai dari sejumlah bagian tertentu berdasarkan nilai per unit.</p>
            <div className="kotak-rumus">Nilai sebagian = Jumlah sebagian × Nilai per unit</div>
            <p><strong>Contoh:</strong> Harga 5 buku Rp20.000. Berapa harga 2 buku?</p>
            <p>Nilai per unit = Rp20.000 ÷ 5 = Rp4.000.</p>
            <p>Nilai 2 buku = 2 × Rp4.000 = <strong>Rp8.000</strong>.</p>
          </div>

          <div className="umpan-balik benar">
            <strong>Kesimpulan:</strong>
            <p>Ketiga konsep saling berhubungan. Nilai keseluruhan dapat digunakan untuk mencari nilai per unit, kemudian nilai per unit dapat digunakan untuk menentukan nilai sebagian.</p>
          </div>

          <button className="tombol tombol-penuh" onClick={() => setLayar('pilih-latihan')}>
            Mulai Latihan
          </button>
        </div>
      </div>
    )
  }

  if (layar === 'pilih-latihan') {
    return (
      <div className="app">
      <button
        type="button"
        className="tombol-musik-global"
        onClick={toggleMusik}
        title={musikAktif ? 'Matikan musik' : 'Putar musik'}
        aria-label={musikAktif ? 'Matikan musik' : 'Putar musik'}
      >
        {musikAktif ? '🔊' : '🎵'}
      </button>

        <MenuNavigasi />
        <div className="kartu">
          <h2>✏️ Pilih Tahap Latihan</h2>
          <p>Kerjakan latihan sesuai urutan materi.</p>
          {TAHAP.map((t, i) => (
            <button
              key={t.id}
              className="kartu pilihan-tahap"
              onClick={() => {
                setTahapAktif(t.id)
                setIdxLatihan(0)
                setLayar('latihan')
              }}
            >
              <strong>{i + 1}. {t.judul}</strong>
              <p>{t.deskripsi}</p>
              <small>Rumus: {t.rumus}</small>
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (layar === 'latihan') {
    if (idxLatihan >= soalLatihan.length) {
      return (
        <div className="app">
      <button
        type="button"
        className="tombol-musik-global"
        onClick={toggleMusik}
        title={musikAktif ? 'Matikan musik' : 'Putar musik'}
        aria-label={musikAktif ? 'Matikan musik' : 'Putar musik'}
      >
        {musikAktif ? '🔊' : '🎵'}
      </button>

          <MenuNavigasi />
          <div className="kartu">
            <h2>Latihan Selesai!</h2>
            <p>Kamu sudah menyelesaikan tahap {TAHAP.find(t => t.id === tahapAktif)?.judul}.</p>
            {TAHAP.findIndex(t => t.id === tahapAktif) < 2 ? (
              <button
                className="tombol tombol-penuh"
                onClick={() => {
                  const berikutnya = TAHAP[TAHAP.findIndex(t => t.id === tahapAktif) + 1]
                  setTahapAktif(berikutnya.id)
                  setIdxLatihan(0)
                }}
              >
                Lanjut Tahap Berikutnya
              </button>
            ) : (
              <button className="tombol tombol-penuh" onClick={() => mulaiKuis('posttest')}>
                Mulai Post-test
              </button>
            )}
            <button className="tombol tombol-sekunder tombol-penuh" onClick={() => setLayar('pilih-latihan')}>
              Pilih Tahap Latihan
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="app">
      <button
        type="button"
        className="tombol-musik-global"
        onClick={toggleMusik}
        title={musikAktif ? 'Matikan musik' : 'Putar musik'}
        aria-label={musikAktif ? 'Matikan musik' : 'Putar musik'}
      >
        {musikAktif ? '🔊' : '🎵'}
      </button>

        <MenuNavigasi />
        <p className="langkah-penunjuk">
          {TAHAP.find(t => t.id === tahapAktif)?.judul} — Soal {idxLatihan + 1} dari {soalLatihan.length}
        </p>
        <LangkahSoal
          key={soalLatihan[idxLatihan].id}
          soal={soalLatihan[idxLatihan]}
          onSelesai={() => setIdxLatihan(idxLatihan + 1)}
        />
      </div>
    )
  }

  if (layar === 'kuis') {
    return (
      <div className="app">
      <button
        type="button"
        className="tombol-musik-global"
        onClick={toggleMusik}
        title={musikAktif ? 'Matikan musik' : 'Putar musik'}
        aria-label={musikAktif ? 'Matikan musik' : 'Putar musik'}
      >
        {musikAktif ? '🔊' : '🎵'}
      </button>

        <div className="kartu">
          <p className="langkah-penunjuk">
            {mode === 'pretest' ? 'PRETEST' : 'POST-TEST'} | Soal {idx + 1} dari {bank.length}
          </p>
          <div className="garis-progres">
            <div style={{ width: `${((idx + 1) / bank.length) * 100}%` }} />
          </div>
          <h2>{mode === 'pretest' ? 'Tes Kemampuan Awal' : 'Tes Kemampuan Akhir'}</h2>
          <p>{soalKuis.t}</p>
          <div className="pilihan-jawaban">
            {soalKuis.o.map((opsi, i) => (
              <button
                key={i}
                className={`opsi ${pilihan === i ? 'opsi-aktif' : ''}`}
                disabled={!!umpan}
                onClick={() => setPilihan(i)}
              >
                {String.fromCharCode(65 + i)}. {opsi}
              </button>
            ))}
          </div>

          {umpan && (
            <div className={`umpan-balik ${umpan.benar ? 'benar' : 'salah'}`}>
              {umpan.teks}
            </div>
          )}

          {!umpan ? (
            <button className="tombol tombol-penuh" disabled={pilihan === null} onClick={periksa}>
              Periksa Jawaban
            </button>
          ) : (
            <button className="tombol tombol-penuh" onClick={lanjutKuis}>
              {idx === bank.length - 1 ? 'Lihat Hasil' : 'Soal Berikutnya'}
            </button>
          )}
        </div>
      </div>
    )
  }

  if (layar === 'hasil-pretest') {
    return (
      <div className="app">
      <button
        type="button"
        className="tombol-musik-global"
        onClick={toggleMusik}
        title={musikAktif ? 'Matikan musik' : 'Putar musik'}
        aria-label={musikAktif ? 'Matikan musik' : 'Putar musik'}
      >
        {musikAktif ? '🔊' : '🎵'}
      </button>

        <div className="kartu">
          <h2>Pretest Selesai!</h2>
          <p>Nilai awal {nama}:</p>
          <div className="nilai-besar">{nilaiPretest}</div>
          <p>Pelajari ketiga materi secara berurutan sebelum mengerjakan post-test.</p>
          <button className="tombol tombol-penuh" onClick={() => setLayar('materi')}>
            Pelajari Materi
          </button>
          <button className="tombol tombol-sekunder tombol-penuh" onClick={() => setLayar('beranda')}>
            Beranda
          </button>
        </div>
      </div>
    )
  }

  if (layar === 'evaluasi') {
    const selisih = nilaiPretest !== null && nilaiPosttest !== null
      ? nilaiPosttest - nilaiPretest
      : null

    return (
      <div className="app">
      <button
        type="button"
        className="tombol-musik-global"
        onClick={toggleMusik}
        title={musikAktif ? 'Matikan musik' : 'Putar musik'}
        aria-label={musikAktif ? 'Matikan musik' : 'Putar musik'}
      >
        {musikAktif ? '🔊' : '🎵'}
      </button>

        <MenuNavigasi />
        <div className="kartu">
          <h2>📊 Evaluasi Hasil Belajar</h2>
          <p>Nama: <strong>{nama}</strong></p>
          <p>Kelas: <strong>{kelas}</strong></p>

          <div className="hasil-evaluasi">
            <div>
              <span>Nilai Pretest</span>
              <strong>{nilaiPretest === null ? '-' : nilaiPretest}</strong>
            </div>
            <div>
              <span>Nilai Post-test</span>
              <strong>{nilaiPosttest === null ? '-' : nilaiPosttest}</strong>
            </div>
          </div>

          {selisih !== null ? (
            <>
              <h3>Perkembangan Belajar</h3>
              <div className="nilai-besar">
                {selisih > 0 ? '+' : ''}{selisih}
              </div>
              <p>
                {selisih > 0
                  ? 'Hebat! Pemahaman kamu meningkat setelah pembelajaran.'
                  : selisih === 0
                    ? 'Nilai kamu tetap. Terus berlatih untuk meningkatkan pemahaman.'
                    : 'Kamu perlu mempelajari kembali materi yang belum dikuasai.'}
              </p>
              <p>
                Kategori post-test: <strong>
                  {nilaiPosttest >= 85 ? 'Sangat Baik' : nilaiPosttest >= 75 ? 'Baik' : nilaiPosttest >= 60 ? 'Cukup' : 'Perlu Bimbingan'}
                </strong>
              </p>
            </>
          ) : (
            <p>Kerjakan pretest dan post-test untuk melihat perkembangan hasil belajarmu.</p>
          )}

          <button className="tombol tombol-penuh" onClick={() => setLayar('beranda')}>
            Kembali ke Beranda
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <button
        type="button"
        className="tombol-musik-global"
        onClick={toggleMusik}
        title={musikAktif ? 'Matikan musik' : 'Putar musik'}
        aria-label={musikAktif ? 'Matikan musik' : 'Putar musik'}
      >
        {musikAktif ? '🔊' : '🎵'}
      </button>

      <div className="kartu">
        <h2>Halaman tidak ditemukan</h2>
        <button className="tombol" onClick={() => setLayar('beranda')}>Kembali</button>
      </div>
    </div>
  )
}
