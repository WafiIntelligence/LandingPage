import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-16">
      {/* CSS blob animations — GPU transform only, reduced-motion handled in globals.css */}
      <div
        className="hero-blob w-[600px] h-[600px] bg-brand-blue/8 -top-32 -left-32"
        aria-hidden="true"
      />
      <div
        className="hero-blob w-[400px] h-[400px] bg-brand-cyan/6 top-1/4 -right-20"
        style={{ animationDelay: '4s', animationDirection: 'alternate-reverse' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <p className="font-inter text-sm font-medium text-brand-blue uppercase tracking-widest mb-6">
            Automation Agency
          </p>
          <h1 className="font-space font-700 text-5xl sm:text-6xl lg:text-7xl text-[#eef2ff] leading-[1.1] tracking-tight mb-6">
            Automate manual complexity into{' '}
            <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
              one-click execution.
            </span>
          </h1>
          <p className="font-inter text-lg sm:text-xl text-[#8892b0] max-w-2xl mx-auto mb-10 leading-relaxed">
            We map your workflow chaos into clean, reliable automations — so you
            stop managing tasks and start closing deals.
          </p>
          <a href="#contact">
            <Button variant="primary" className="text-base px-8 py-4 text-lg">
              Get a free audit
            </Button>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
