import { NextRequest, NextResponse } from 'next/server';
import nodemailer, { Transporter } from 'nodemailer';
import dns from 'dns';

try {
  dns.setDefaultResultOrder?.('ipv4first');
} catch {
  // Ignore
}

const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';
const CONTACT_RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || 'ghosh.udayan2000@gmail.com';

let transporter: Transporter | null = null;
function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      pool: true,
      maxConnections: 3,
      maxMessages: 50,
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 10000,
    });
  }
  return transporter;
}

async function sendNotificationEmail(options: {
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<boolean> {
  // Option 1: Modern Transactional HTTPS API (Resend) - Best for serverless with 0 SMTP port/IP restrictions
  if (RESEND_API_KEY) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: [CONTACT_RECEIVER_EMAIL],
          reply_to: options.replyTo,
          subject: options.subject,
          html: options.html,
        }),
      });
      if (res.ok) {
        return true;
      }
      const errText = await res.text();
      console.warn('[Contact Email] Resend API error:', errText);
    } catch (err) {
      console.error('[Contact Email] Resend error:', err);
    }
  }

  // Option 2: Gmail SMTP with connection timeout race to prevent serverless freeze
  if (SMTP_USER && SMTP_PASS) {
    try {
      const mailer = getTransporter();
      await Promise.race([
        mailer.sendMail({
          from: `"Portfolio Contact" <${SMTP_USER}>`,
          to: CONTACT_RECEIVER_EMAIL,
          replyTo: options.replyTo || SMTP_USER,
          subject: options.subject,
          html: options.html,
        }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('SMTP transmission timed out after 8s')), 8000)
        ),
      ]);
      return true;
    } catch (err) {
      console.error('[Contact Email] SMTP transmission failed:', err);
      return false;
    }
  }

  console.warn('[Contact Email] No active email provider configured (missing RESEND_API_KEY and SMTP_USER/SMTP_PASS in environment variables).');
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const nowFormatted = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const subject = `A client just reached out to you!`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #fafafa; padding: 20px; color: #18181b;">
        <div style="max-width: 540px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; padding: 24px;">
          <h2 style="margin: 0 0 16px 0; color: #09090b; font-size: 20px; font-weight: 700; border-bottom: 2px solid #06b6d4; padding-bottom: 12px;">
            A client just reached out to you!
          </h2>

          <div style="font-size: 14px; line-height: 1.8; margin-bottom: 16px;">
            <div><strong>Client:</strong> ${escapeHtml(name)}</div>
            <div><strong>Email:</strong> <a href="mailto:${email}" style="color: #06b6d4; font-weight: 600;">${email}</a></div>
            ${phone ? `<div><strong>Phone / WhatsApp:</strong> <span style="color: #09090b; font-weight: 600;">${escapeHtml(phone)}</span></div>` : ''}
            ${service ? `<div><strong>Service Needed:</strong> <span style="color: #09090b;">${escapeHtml(service)}</span></div>` : ''}
          </div>

          <div style="margin-bottom: 16px;">
            <div style="font-size: 13px; font-weight: 700; color: #71717a; text-transform: uppercase; margin-bottom: 6px;">
              Project Message:
            </div>
            <div style="padding: 14px 16px; background-color: #f4f4f5; border-radius: 6px; font-size: 15px; color: #18181b; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(message)}</div>
          </div>

          <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid #f4f4f5; font-size: 13px; color: #71717a;">
            Time: ${nowFormatted} IST
          </div>
        </div>
      </body>
      </html>
    `;

    // Await delivery with timeout race to guarantee dispatch before serverless container suspends
    await sendNotificationEmail({
      subject,
      html: htmlContent,
      replyTo: email,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, message: error?.message || 'Server error' },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
