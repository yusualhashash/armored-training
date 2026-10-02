import { getToken } from '@vercel/connect'
import { NextResponse } from 'next/server'

const CONNECTOR_UID = 'telegram/armored-training-location'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const latitude = Number(body.latitude)
    const longitude = Number(body.longitude)

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude) || latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
      return NextResponse.json({ error: 'Invalid location' }, { status: 400 })
    }

    const { token } = await getToken(CONNECTOR_UID, { subject: { type: 'app' } })
    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendLocation`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ latitude, longitude }),
    })

    if (!telegramResponse.ok) {
      return NextResponse.json({ error: 'Unable to send location' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unable to share location' }, { status: 500 })
  }
}
