
import { useState } from 'react'
import KamusSatuan from './KamusSatuan'

const rp = (n) =>
  'Rp' + n.toLocaleString('id-ID')

export default function LangkahSoal({ soal, onSelesai }) {
  const [isian, setIsian] = useState('')
  const [pesan, setPesan] = useState(null)
  const [petunjuk, setPetunjuk] = useState(false)

  // Menentukan jawaban berdasarkan jenis soal
  let jawabBenar = 0
  let cara = ''

  if (soal.jenis === 'keseluruhan') {
    jawabBenar = soal.jumlah * soal.nilaiPerUnit
    cara = `${soal.jumlah} × ${rp(soal.nilaiPerUnit)}`
  }

  if (soal.jenis === 'perUnit') {
    jawabBenar = soal.total / soal.jumlah
    cara = `${rp(soal.total)} ÷ ${soal.jumlah}`
  }

  if (soal.jenis === 'sebagian') {
    jawabBenar = (soal.total / soal.jumlah) * soal.sebagian
    cara = `(${rp(soal.total)} ÷ ${soal.jumlah}) × ${soal.sebagian}`
  }

  const judulTahap = {
    keseluruhan: 'Nilai Keseluruhan',
    perUnit: 'Nilai Per Unit',
    sebagian: 'Nilai Sebagian'
  }

  const petunjukTahap = {
    keseluruhan: 'Kalikan jumlah barang dengan nilai per unit.',
    perUnit: 'Bagilah nilai keseluruhan dengan jumlah barang.',
    sebagian: 'Cari nilai per unit terlebih dahulu, kemudian kalikan dengan jumlah sebagian.'
  }

  const periksa = () => {
    const nilai = Number(isian.replace(/\D/g, ''))

    if (nilai === jawabBenar) {
      setPesan({
        benar: true,
        teks: 'Hebat! Jawaban kamu benar 🎉'
      })
    } else {
      setPesan({
        benar: false,
        teks: 'Belum tepat. Coba periksa kembali langkah perhitungannya.'
      })
    }
  }

  const lanjut = () => {
    setIsian('')
    setPesan(null)
    setPetunjuk(false)
    onSelesai()
  }

  return (
    <div className="kartu latihan-card">

      <div className="langkah-penunjuk">
        ✨ {judulTahap[soal.jenis]}
      </div>

      <h2>Yuk, Pecahkan Soalnya!</h2>

      <p>{soal.teks}</p>

      <div className="kotak-rumus">
        <strong>Rumus yang digunakan</strong>

        {soal.jenis === 'keseluruhan' && (
          <p>Nilai keseluruhan = Jumlah barang × Nilai per unit</p>
        )}

        {soal.jenis === 'perUnit' && (
          <p>Nilai per unit = Nilai keseluruhan ÷ Jumlah barang</p>
        )}

        {soal.jenis === 'sebagian' && (
          <p>Nilai sebagian = (Nilai keseluruhan ÷ Jumlah barang) × Jumlah sebagian</p>
        )}
      </div>

      <label>Masukkan jawabanmu</label>

      <input
        className="input"
        type="text"
        inputMode="numeric"
        value={isian}
        onChange={(e) => setIsian(e.target.value)}
        placeholder="Masukkan nilai dalam rupiah"
        disabled={!!pesan?.benar}
      />

      {pesan && (
        <div className={`umpan-balik ${pesan.benar ? 'benar' : 'salah'}`}>
          {pesan.teks}
        </div>
      )}

      {petunjuk && (
        <div className="umpan-balik benar">
          💡 Petunjuk: {petunjukTahap[soal.jenis]}
          <p>Operasi hitung: {cara}</p>
        </div>
      )}

      {pesan?.benar && (
        <div className="umpan-balik benar">
          <strong>Pembahasan:</strong>
          <p>{cara} = {rp(jawabBenar)}</p>
        </div>
      )}

      <div className="baris-aksi">
        {pesan?.benar ? (
          <button className="tombol" onClick={lanjut}>
            Lanjut Soal →
          </button>
        ) : (
          <button
            className="tombol"
            disabled={!isian.trim()}
            onClick={periksa}
          >
            Periksa Jawaban
          </button>
        )}

        {!pesan?.benar && (
          <button
            className="tombol tombol-sekunder"
            onClick={() => setPetunjuk(!petunjuk)}
          >
            💡 Petunjuk
          </button>
        )}
      </div>

      <KamusSatuan />

    </div>
  )
}
