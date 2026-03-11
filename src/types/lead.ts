export interface LeadPayload {
  name: string;
  email: string;
  problem: string;   // "What's taking up your time?"
  tools: string;     // "What tools do you use?"
  timestamp: string; // ISO 8601 — added at submit time
}
