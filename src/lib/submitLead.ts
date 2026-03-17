import type { LeadPayload } from '@/types/lead';

export async function submitLead(
  payload: LeadPayload
): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch('/api/submit', {
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
