'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { submitLead } from '@/lib/submitLead';
import type { LeadPayload } from '@/types/lead';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 ' +
  'font-inter text-[#eef2ff] text-base placeholder:text-[#4a5568] ' +
  'focus:outline-none focus:border-brand-blue/60 focus:bg-white/[0.07] ' +
  'transition-all duration-200';

const labelClass = 'block font-inter text-sm font-medium text-[#8892b0] mb-2';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [fields, setFields] = useState({ name: '', email: '', problem: '', tools: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const payload: LeadPayload = {
      ...fields,
      timestamp: new Date().toISOString(),
    };

    const result = await submitLead(payload);

    if (result.ok) {
      setStatus('success');
    } else {
      setErrorMsg(result.error ?? 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-space font-700 text-4xl sm:text-5xl text-[#eef2ff] mb-4">
            Get a free automation audit
          </h2>
          <p className="font-inter text-[#8892b0] text-lg">
            Tell us what&apos;s slowing you down. We&apos;ll show you exactly what can be automated.
          </p>
        </div>

        <GlassCard className="p-8">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex flex-col items-center text-center py-8 gap-4"
              >
                <CheckCircle className="w-12 h-12 text-[#4ade80]" strokeWidth={1.5} />
                <h3 className="font-space font-600 text-2xl text-[#eef2ff]">
                  You&apos;re on the list.
                </h3>
                <p className="font-inter text-[#8892b0] max-w-sm">
                  We&apos;ll be in touch within 24 hours with your free automation audit.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={fields.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={fields.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="problem" className={labelClass}>
                    What&apos;s taking up your time?
                  </label>
                  <textarea
                    id="problem"
                    name="problem"
                    required
                    rows={4}
                    value={fields.problem}
                    onChange={handleChange}
                    placeholder="Describe the repetitive tasks or workflows that are slowing you down..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label htmlFor="tools" className={labelClass}>
                    What tools do you use?
                  </label>
                  <input
                    id="tools"
                    name="tools"
                    type="text"
                    required
                    value={fields.tools}
                    onChange={handleChange}
                    placeholder="e.g. HubSpot, Notion, Gmail, Slack, Airtable..."
                    className={inputClass}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-[#f87171] text-sm font-inter">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === 'submitting'}
                  className="w-full py-4 text-base"
                >
                  {status === 'submitting' ? 'Sending...' : 'Get a free audit'}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </GlassCard>
      </div>
    </section>
  );
}
