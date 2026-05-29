'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const studies = [
  {
    client: 'Nordic Trust Bank',
    tag: 'Core Migration',
    title: 'Migrating a 40-year-old core to cloud in 9 months',
    metric: '−62% ops cost',
    wide: true,
    accent: 'from-[#003ACE] to-[#00B4FD]',
  },
  {
    client: 'PayLeaf',
    tag: 'Digital Onboarding',
    title: 'From 7-day to 7-minute account opening',
    metric: '4.8 CSAT',
    accent: 'from-[#9280FD] to-[#003ACE]',
  },
  {
    client: 'BlueWave NBFC',
    tag: 'Loan Origination',
    title: 'Automating retail loan approvals end-to-end',
    metric: '3× faster approvals',
    accent: 'from-[#FFD028] to-[#00B4FD]',
  },
];

function Card({ s, wide }: { s: (typeof studies)[number]; wide?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-[#00B4FD]/50 ${
        wide ? 'min-h-[420px]' : 'min-h-[260px]'
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${s.accent}`}
      />
      <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#E9F4F9]/60">
        <span>{s.client}</span>
        <span className="rounded-full border border-white/20 px-2 py-0.5">{s.tag}</span>
      </div>
      <h3
        className={`mt-6 leading-tight ${wide ? 'text-[28px] sm:text-[34px]' : 'text-[20px]'}`}
        style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
      >
        {s.title}
      </h3>
      <div className="mt-auto flex items-end justify-between pt-6">
        <span className="text-[24px] font-medium text-[#00B4FD]" style={{ fontFamily: 'Archivo, Inter, sans-serif' }}>
          {s.metric}
        </span>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider text-[#E9F4F9]/80 transition group-hover:text-[#00B4FD]"
          style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
        >
          read case
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </motion.article>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#000d12] py-24 text-[#E9F4F9]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2
            className="text-[36px] leading-[1.1] tracking-[-0.01em] sm:text-[48px]"
            style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
          >
            Our Case Studies
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[13px] uppercase tracking-wider text-[#E9F4F9]/80 transition hover:text-[#00B4FD]"
            style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
          >
            View All
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Card s={studies[0]} wide />
          <div className="flex flex-col gap-6">
            <Card s={studies[1]} />
            <Card s={studies[2]} />
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
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
      </div>
    </section>
  );
}
