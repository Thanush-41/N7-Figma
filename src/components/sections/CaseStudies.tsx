'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

/* Blue X-pattern for case study image */
function XPattern({ size = 80 }: { size?: number }) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#101c2c]">
      <div className="grid grid-cols-2 gap-4 p-8">
        {[0, 1, 2, 3].map((i) => (
          <svg key={i} width={size} height={size} viewBox="0 0 80 80" fill="none">
            <path d="M40 4L44 16L56 12L48 22L64 28L48 34L56 44L44 40L40 52L36 40L24 44L32 34L16 28L32 22L24 12L36 16L40 4Z" fill="#00B4FD"/>
          </svg>
        ))}
      </div>
    </div>
  );
}

/* Peek chevron pattern for sides */
function PeekPattern() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 opacity-40">
      {[0, 1].map((i) => (
        <svg key={i} width="40" height="60" viewBox="0 0 40 60" fill="none">
          <path d="M35 5L10 30L35 55" stroke="#00B4FD" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25 15L10 30L25 45" stroke="#00B4FD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ))}
    </div>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState(1);

  return (
    <section className="relative overflow-hidden bg-[#000d12] py-24 text-[#E9F4F9]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <h2
          className="text-center text-[36px] leading-[1.1] tracking-[-0.01em] sm:text-[48px]"
          style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
        >
          Our Case Studies
        </h2>

        {/* Carousel with peek elements */}
        <div className="relative mt-14">
          {/* Left peek */}
          <div className="pointer-events-none absolute -left-4 top-0 hidden h-full w-20 lg:block">
            <PeekPattern />
          </div>

          {/* Right peek (faded "h" and chevrons) */}
          <div className="pointer-events-none absolute -right-4 top-0 hidden h-full w-20 items-center justify-center lg:flex">
            <span className="text-[80px] font-light text-[#E9F4F9]/10" style={{ fontFamily: 'Archivo, Inter, sans-serif' }}>h</span>
          </div>

          {/* Featured card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] lg:mx-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">
              <div className="aspect-[4/3] md:aspect-auto md:min-h-[380px]">
                <XPattern size={100} />
              </div>
              <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
                <span className="text-[11px] uppercase tracking-wider text-[#00B4FD]">getting started</span>
                <h3
                  className="text-[26px] leading-snug sm:text-[32px]"
                  style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
                >
                  How we help brand reach out to more people
                </h3>
                <div className="flex items-center gap-2 text-[14px] text-[#E9F4F9]/70">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#00B4FD] text-[12px] font-bold text-white">⊕</span>
                  Zoomerr
                </div>
                <a
                  href="#"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-[10px] border border-white/20 py-3.5 text-[11px] uppercase tracking-wider text-[#E9F4F9]/80 transition hover:border-[#00B4FD] hover:text-[#00B4FD]"
                  style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
                >
                  Read More
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#00B4FD]/60 text-[#00B4FD] transition hover:border-[#00B4FD] hover:bg-[#00B4FD]/10"
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 7H3M7 3L3 7l4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Page ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    active === i ? 'w-8 bg-[#00B4FD]' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setActive((a) => Math.min(3, a + 1))}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#00B4FD]/60 text-[#00B4FD] transition hover:border-[#00B4FD] hover:bg-[#00B4FD]/10"
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider text-[#00B4FD] transition hover:text-[#00B4FD]/80"
            style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
          >
            View All
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
