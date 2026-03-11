export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-space font-500 text-[#eef2ff] text-sm">Wafi Intelligence</p>
        <p className="font-inter text-[#4a5568] text-xs">
          &copy; {new Date().getFullYear()} Wafi Intelligence. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
