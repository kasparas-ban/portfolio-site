import { sendEmail } from '@/lib/email'
import { NextResponse } from 'next/server'
 
export async function POST(request: Request) {
  const req = await request.json()
  let err = null

  await sendEmail({
    subject: '👋 Email from kasban.info',
    html: JSON.stringify({ from: req.email, message: req.message })
  }).catch(e => err = e)

  return NextResponse.json({ err })
}