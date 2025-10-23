import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { config } from '@/lib/config'

const resendApiKey = process.env.RESEND_API_KEY

const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body as {
      name?: string
      email?: string
      subject?: string
      message?: string
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!resend) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please try again later.' },
        { status: 500 }
      )
    }

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: config.contact.email,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Failed to send contact form message', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}


