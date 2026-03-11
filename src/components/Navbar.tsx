'use client';

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-[#080b14]/80 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="#"
          className="font-space font-700 text-lg text-[#eef2ff] tracking-tight hover:text-brand-blue transition-colors"
        >
          Wafi Intelligence
        </a>
        <div className="flex items-center gap-6 text-sm font-inter text-[#8892b0]">
          <a
            href="#services"
            className="hover:text-[#eef2ff] transition-colors focus-visible:outline-none focus-visible:text-brand-blue"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-[#eef2ff] transition-colors focus-visible:outline-none focus-visible:text-brand-blue"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
