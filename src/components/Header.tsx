'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const nav = [
  { label: 'solutions', href: '#solutions' },
  { label: 'resources', href: '#insights' },
  { label: 'About us', href: '#about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-[31px]">
      <div
        className={`flex w-full max-w-[716px] items-center justify-between rounded-full border px-6 py-3 transition-all duration-300 ${
          scrolled
            ? 'border-white/10 bg-[#000d12]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'border-white/10 bg-[#0a1a22]/60 backdrop-blur-md'
        }`}
      >
        <Link href="/" className="flex items-center text-[#E9F4F9]">
          <span className="text-2xl font-semibold tracking-tight" style={{ fontFamily: 'Archivo, Inter, sans-serif' }}>
            N7<span className="text-[#00B4FD]">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="group relative text-[13px] capitalize text-[#E9F4F9]/80 transition hover:text-[#E9F4F9]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#00B4FD] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center justify-center rounded-full px-5 py-2 text-[11px] uppercase tracking-wider text-white transition hover:scale-[1.03] md:inline-flex"
          style={{
            backgroundImage: 'linear-gradient(141.82deg, #00B4FD 5.68%, #003ACE 86.97%)',
            fontFamily: '"Chivo Mono", ui-monospace, monospace',
          }}
        >
          Contact Us
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#E9F4F9] md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="absolute left-1/2 top-full mt-2 w-[90vw] max-w-[716px] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#000d12]/95 p-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm capitalize text-[#E9F4F9]/80 transition hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full py-2.5 text-center text-xs uppercase tracking-wider text-white"
              style={{ backgroundImage: 'linear-gradient(141.82deg, #00B4FD 5.68%, #003ACE 86.97%)' }}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
