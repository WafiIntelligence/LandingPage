import type { LeadPayload } from '@/types/lead';

export async function submitLead(
  payload: LeadPayload
): Promise<{ ok: boolean; error?: string }> {
  const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('NEXT_PUBLIC_N8N_WEBHOOK_URL is not set');
    return { ok: false, error: 'Configuration error — webhook URL not set.' };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return { ok: false, error: `Webhook returned ${res.status}` };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: 'Network error — please try again.' };
  }
}
