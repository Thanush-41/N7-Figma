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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-[#000d12]/80 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <Link href="/" className="flex items-center gap-2 text-[#E9F4F9]">
          <span className="text-3xl font-semibold tracking-tight" style={{ fontFamily: 'Archivo, Inter, sans-serif' }}>
            N7<span className="text-[#00B4FD]">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="group relative text-sm capitalize text-[#E9F4F9]/80 transition hover:text-[#E9F4F9]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#00B4FD] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center justify-center rounded-lg border border-[#E9F4F9]/40 px-5 py-2.5 text-xs uppercase tracking-wider text-[#E9F4F9] transition hover:border-[#00B4FD] hover:text-[#00B4FD] md:inline-flex"
          style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
        >
          Contact Us
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#E9F4F9] md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#000d12] md:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-4">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm capitalize text-[#E9F4F9]/80 transition hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md border border-[#E9F4F9]/30 px-3 py-2 text-center text-xs uppercase tracking-wider text-[#E9F4F9]"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
