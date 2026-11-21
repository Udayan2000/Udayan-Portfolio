import { NextRequest, NextResponse } from 'next/server';
import nodemailer, { Transporter } from 'nodemailer';
import dns from 'dns';

try {
  dns.setDefaultResultOrder?.('ipv4first');
} catch {
  // Ignore if unsupported
}

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';
const CONTACT_RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || '';

const SYSTEM_INSTRUCTION = `
You are Udayan Ghosh's dedicated personal AI assistant on his developer portfolio.

CRITICAL RULES - ANSWER LENGTH & STYLE:
- ALWAYS keep answers SHORT, CRISP, AND DIRECT (strictly 1 to 3 short sentences, under 50 words).
- Answer ONLY the specific question asked by the user. Do not write essays, unsolicited marketing fluff, or long lists.
- Speak naturally and warmly like a senior full-stack developer chatting on Slack or WhatsApp.

CRITICAL RULE - BUDGET & PRICING:
- NEVER state any numbers, prices, hourly rates, or dollar amounts.
- When anyone asks about budget, pricing, cost, rates, quotes, or how much something costs:
  Politely explain that pricing is customized based on their specific project scope and features, and invite them to reach out directly to Udayan Ghosh at +91 89459 38993 (WhatsApp/Call) or ghosh.udayan2000@gmail.com for a tailored quote.
  Dynamically adapt your response to the exact project, app, or feature they asked about!

KNOWLEDGE BASE:
- Developer: Udayan Ghosh (Senior Full-Stack Developer & Solutions Architect, 4+ years exp).
- Tech Stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Node.js, Express, PostgreSQL, Prisma, Redis, Stripe, WordPress (custom Gutenberg).
- Turnaround: 1 to 3 weeks for websites/e-commerce; 3 to 6 weeks for custom web applications and SaaS MVPs.
- Guarantees: 100% full GitHub repository ownership, zero vendor lock-in, 30 days post-launch bug warranty.
- Direct Contact: ghosh.udayan2000@gmail.com, WhatsApp/Phone: +91 89459 38993.
`;

// Concurrency-safe bounded session storage (LRU capped at 1,000 active sessions)
const MAX_SESSIONS = 1000;
const memorySessions = new Map<string, Array<{ role: 'user' | 'model'; text: string }>>();

function saveSessionMessage(sessionId: string, role: 'user' | 'model', text: string) {
  let history = memorySessions.get(sessionId);
  if (!history) {
    if (memorySessions.size >= MAX_SESSIONS) {
      const oldestKey = memorySessions.keys().next().value;
      if (oldestKey) memorySessions.delete(oldestKey);
    }
    history = [];
    memorySessions.set(sessionId, history);
  }
  history.push({ role, text });
  if (history.length > 10) {
    history.splice(0, history.length - 10);
  }
}

// Singleton pooled SMTP transporter for handling high concurrent traffic without socket exhaustion
let pooledTransporter: Transporter | null = null;
function getTransporter() {
  if (!pooledTransporter) {
    pooledTransporter = nodemailer.createTransport({
      pool: true,
      maxConnections: 5,
      maxMessages: 100,
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
  }
  return pooledTransporter;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { sessionId, message, visitorName, visitorEmail } = body;

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ success: false, message: 'Message is required' }, { status: 400 });
    }

    const cleanMessage = message.trim();
    const currentSessionId = sessionId || `sess_${Date.now()}`;

    // Record incoming user message
    saveSessionMessage(currentSessionId, 'user', cleanMessage);
    const history = memorySessions.get(currentSessionId) || [];

    // Auto-detect email and phone volunteered in chat
    const emailMatch = cleanMessage.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/);
    const detectedEmail = visitorEmail || (emailMatch ? emailMatch[0] : undefined);

    const phoneRegex = /(?:(?:\+|00)\d{1,3}[\s.-]?)?(?:\(?\d{2,5}\)?[\s.-]?)?\d{3,5}[\s.-]?\d{3,5}/g;
    const phoneMatches = cleanMessage.match(phoneRegex);
    const detectedPhone = phoneMatches
      ? phoneMatches.find((m) => {
          const d = m.replace(/\D/g, '');
          return d.length >= 10 && d.length <= 15;
        })
      : undefined;

    // 1. Generate real dynamic AI response with Gemini
    let aiReply = '';
    const formattedContents = history.slice(-6).map((m) => ({
      role: m.role,
      parts: [{ text: m.text }],
    }));

    const geminiPayload = {
      system_instruction: {
        parts: [{ text: SYSTEM_INSTRUCTION }],
      },
      contents: formattedContents,
      generationConfig: {
        temperature: 0.35,
        maxOutputTokens: 200,
        topP: 0.9,
      },
    };

    const models = ['gemini-3.5-flash-lite', 'gemini-flash-lite-latest'];
    for (const model of models) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 25000);

        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
        const res = await fetch(url, {
          method: 'POST',
          signal: controller.signal,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(geminiPayload),
        });

        clearTimeout(timeout);

        if (res.ok) {
          const data = await res.json();
          const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (candidate && candidate.trim().length > 0) {
            aiReply = candidate.trim();
            break;
          }
        }
      } catch (e) {
        console.warn(`Model ${model} fetch failed:`, e);
      }
    }

    // Dynamic contextual short fallback if internet is completely down
    if (!aiReply) {
      aiReply = generateShortDynamicResponse(cleanMessage, detectedEmail, detectedPhone);
    }

    // Save model response to memory
    saveSessionMessage(currentSessionId, 'model', aiReply);

    // 2. Dispatch instant email alert to Udayan (non-blocking for high concurrency)
    sendEmailAlertNonBlocking({
      clientMessage: cleanMessage,
      aiReply,
      clientEmail: detectedEmail,
      clientPhone: detectedPhone,
      clientName: visitorName,
      sessionId: currentSessionId,
    });

    return NextResponse.json({
      success: true,
      data: {
        sessionId: currentSessionId,
        reply: aiReply,
        role: 'model',
        userMessage: {
          id: `usr_${Date.now()}`,
          role: 'user',
          text: cleanMessage,
          timestamp: new Date().toISOString(),
        },
        modelMessage: {
          id: `mod_${Date.now()}`,
          role: 'model',
          text: aiReply,
          timestamp: new Date().toISOString(),
        },
      },
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { success: false, message: error?.message || 'Internal chat error' },
      { status: 500 }
    );
  }
}

// Non-blocking fire-and-forget email dispatch
function sendEmailAlertNonBlocking(data: {
  clientMessage: string;
  aiReply: string;
  clientEmail?: string;
  clientPhone?: string;
  clientName?: string;
  sessionId: string;
}) {
  setImmediate(async () => {
    try {
      const transporter = getTransporter();

      const nowFormatted = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'short',
      });

      const hasClientEmail = Boolean(data.clientEmail && data.clientEmail.includes('@'));
      const subject = 'A client just reached out to you!';

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #fafafa; padding: 20px; color: #18181b;">
          <div style="max-width: 540px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; padding: 24px;">
            <h2 style="margin: 0 0 16px 0; color: #09090b; font-size: 20px; font-weight: 700; border-bottom: 2px solid #06b6d4; padding-bottom: 12px;">
              A client just reached out to you!
            </h2>

            <div style="margin-bottom: 16px;">
              <div style="font-size: 13px; font-weight: 700; color: #71717a; text-transform: uppercase; margin-bottom: 6px;">
                Client Message:
              </div>
              <div style="padding: 14px 16px; background-color: #f4f4f5; border-radius: 6px; font-size: 15px; color: #18181b; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(data.clientMessage)}</div>
            </div>

            <div style="margin-bottom: 16px;">
              <div style="font-size: 13px; font-weight: 700; color: #0891b2; text-transform: uppercase; margin-bottom: 6px;">
                AI Reply:
              </div>
              <div style="padding: 14px 16px; background-color: #ecfeff; border-left: 3px solid #06b6d4; border-radius: 6px; font-size: 14px; color: #164e63; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(data.aiReply)}</div>
            </div>

            <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid #f4f4f5; font-size: 13px; color: #52525b; line-height: 1.8;">
              ${hasClientEmail ? `<div><strong>Email:</strong> <a href="mailto:${data.clientEmail}" style="color: #06b6d4; font-weight: 600;">${data.clientEmail}</a></div>` : ''}
              ${data.clientPhone ? `<div><strong>Phone:</strong> <span style="color: #09090b; font-weight: 600;">${data.clientPhone}</span></div>` : ''}
              <div><strong>Time:</strong> ${nowFormatted} IST</div>
            </div>
          </div>
        </body>
        </html>
      `;

      await transporter.sendMail({
        from: `"Portfolio Alerts" <${SMTP_USER}>`,
        to: CONTACT_RECEIVER_EMAIL,
        replyTo: hasClientEmail ? data.clientEmail : SMTP_USER,
        subject,
        html: htmlContent,
      });
    } catch (err) {
      console.error('Non-blocking email alert error:', err);
    }
  });
}

function generateShortDynamicResponse(query: string, email?: string, phone?: string): string {
  const q = query.toLowerCase();

  if (email || phone) {
    return `Thank you for sharing your contact details! Udayan has received your message and will reach out to you directly shortly.`;
  }

  // Budget / Cost policy: NEVER state prices, direct to Udayan
  if (q.includes('cost') || q.includes('price') || q.includes('rate') || q.includes('budget') || q.includes('quote') || q.includes('how much')) {
    return `Project pricing is customized based on your specific scope and features. You can reach out directly to Udayan Ghosh at +91 89459 38993 (WhatsApp/Call) or ghosh.udayan2000@gmail.com for a tailored quote!`;
  }

  if (q.includes('ecommerce') || q.includes('e-commerce') || q.includes('shop') || q.includes('store') || q.includes('stripe')) {
    return `Yes! Udayan builds fast headless stores using Next.js and Stripe with sub-second checkout. Typical delivery is 1 to 3 weeks. Would you like to discuss your project?`;
  }

  if (q.includes('timeline') || q.includes('how long') || q.includes('turnaround')) {
    return `Websites typically take 1 to 3 weeks, while custom web apps take 3 to 6 weeks. When is your target launch date?`;
  }

  return `Thanks for asking! Udayan specializes in modern, high-performance web development with Next.js, TypeScript, and Node.js. How can he help with your project?`;
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
