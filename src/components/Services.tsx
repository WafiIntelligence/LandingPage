import { UserCheck, PackageOpen, Receipt, BarChart2, CalendarCheck, Database } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const services = [
  { icon: UserCheck, label: 'Lead Follow-Up', example: 'Reply to new leads within 60 seconds — automatically.' },
  { icon: PackageOpen, label: 'Client Onboarding', example: 'Send contracts, welcome packs, and project briefs on auto-pilot.' },
  { icon: Receipt, label: 'Invoice Reminders', example: 'Chase late payments without a single awkward email.' },
  { icon: BarChart2, label: 'Report Generation', example: 'Deliver weekly performance reports without touching a spreadsheet.' },
  { icon: CalendarCheck, label: 'Appointment Booking', example: 'Let clients self-book — synced to your calendar instantly.' },
  { icon: Database, label: 'Data Collection', example: 'Pull data from any form, sheet, or API into one clean dashboard.' },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-space font-700 text-4xl sm:text-5xl text-[#eef2ff] mb-4">
          What we automate
        </h2>
        <p className="font-inter text-[#8892b0] text-lg max-w-xl mx-auto">
          Repetitive tasks that drain your time — handled once, running forever.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, label, example }, i) => (
          <AnimatedSection key={label} delay={i * 0.08}>
            <GlassCard className="p-6 h-full">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/15 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-brand-blue" strokeWidth={1.5} />
              </div>
              <h3 className="font-space font-600 text-lg text-[#eef2ff] mb-2">{label}</h3>
              <p className="font-inter text-sm text-[#8892b0] leading-relaxed">{example}</p>
            </GlassCard>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
