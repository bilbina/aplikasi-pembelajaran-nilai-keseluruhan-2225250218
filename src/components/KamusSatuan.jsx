import { useState } from 'react'
import { SATUAN } from '../data/satuan'

export default function KamusSatuan({ onBuka }) {
  const [buka, setBuka] = useState(false)
  const toggle = () => { setBuka(!buka); if (!buka && onBuka) onBuka() }
  return (
    <div>
      <button className="tombol tombol-sekunder" onClick={toggle}>Kamus satuan</button>
      {buka && (
        <div className="kartu">
          {SATUAN.map((s) => <div key={s.nama}>1 {s.nama} = <span className="jumlah">{s.isi}</span> buah</div>)}
        </div>
      )}
    </div>
  )
}
