'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

/* Blue X-pattern for case study image */
function XPattern() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0a1a22]">
      <div className="grid grid-cols-2 gap-4 p-8">
        {[0, 1, 2, 3].map((i) => (
          <svg key={i} width="64" height="64" viewBox="0 0 48 48" fill="none">
            <path
              d="M24 4L28 14L38 10L32 20L44 24L32 28L38 38L28 34L24 44L20 34L10 38L16 28L4 24L16 20L10 10L20 14L24 4Z"
              fill="#00B4FD"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#000d12] py-24 text-[#E9F4F9]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <h2
          className="text-center text-[36px] leading-[1.1] tracking-[-0.01em] sm:text-[48px]"
          style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
        >
          Our Case Studies
        </h2>

        {/* Featured card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr]">
            <div className="aspect-[4/3] md:aspect-auto">
              <XPattern />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
              <span className="text-[10px] uppercase tracking-wider text-[#00B4FD]">getting started</span>
              <h3
                className="text-[24px] leading-snug sm:text-[28px]"
                style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
              >
                How we help brand reach out to more people
              </h3>
              <div className="flex items-center gap-2 text-[13px] text-[#E9F4F9]/70">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#00B4FD] text-[10px] font-bold text-white">⊕</span>
                Zoomer
              </div>
              <a
                href="#"
                className="mt-4 inline-flex w-full items-center justify-center rounded-[10px] border border-white/20 py-3 text-[11px] uppercase tracking-wider text-[#E9F4F9]/80 transition hover:border-[#00B4FD] hover:text-[#00B4FD]"
                style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
              >
                Read More
              </a>
            </div>
          </div>
        </motion.div>

        {/* Pagination */}
        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActive((a) => Math.max(0, a - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#00B4FD] hover:text-[#00B4FD]"
              aria-label="Previous"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 7H3M7 3L3 7l4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Page ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    active === i ? 'w-8 bg-[#00B4FD]' : 'w-1.5 bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setActive((a) => Math.min(3, a + 1))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#00B4FD] hover:text-[#00B4FD]"
              aria-label="Next"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider text-[#E9F4F9]/80 transition hover:text-[#00B4FD]"
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
