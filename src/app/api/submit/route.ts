import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.N8N_WEBHOOK_URL; // server-side only — no NEXT_PUBLIC_ prefix

  if (!webhookUrl) {
    return NextResponse.json({ error: 'Webhook URL not configured' }, { status: 500 });
  }

  const body = await req.json();

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json({ error: `Upstream error ${res.status}` }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
