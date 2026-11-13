import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = url && key && url.startsWith('http') ? createClient(url, key) : null

export async function catatEvent(sesiId, jenis, payload = {}) {
  if (!supabase || !sesiId) return
  try {
    await supabase.from('event_log').insert({ sesi_id: sesiId, jenis_event: jenis, payload })
  } catch (e) {
    console.error('Gagal mencatat event', e)
  }
}
