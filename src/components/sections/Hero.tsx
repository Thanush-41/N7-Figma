'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const trustedBy = [
  'SHELLS',
  'SmartFinder',
  'Zoomerr',
  'ArtVenue',
  'kontrastr',
  'WAVESMARATHON',
];

function ArrowUpRight({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 11L11 3M5 3h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowDownLeft({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 3L3 11M9 11H3V5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function BellIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2a2 2 0 0 0-2 2v.6A7 7 0 0 0 5 11v3l-1.6 2.4A1 1 0 0 0 4.2 18h15.6a1 1 0 0 0 .8-1.6L19 14v-3a7 7 0 0 0-5-6.4V4a2 2 0 0 0-2-2zm-2 18a2 2 0 1 0 4 0h-4z" />
    </svg>
  );
}

function ActivityRow({
  type,
  who,
  tag,
  date,
  amount,
  positive,
}: {
  type: 'out' | 'in';
  who: string;
  tag: string;
  date: string;
  amount: string;
  positive: boolean;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-white/30 pb-2 last:border-0">
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${
          type === 'out' ? 'bg-[#9280FD]' : 'bg-[#FFD028]'
        }`}
      >
        {type === 'out' ? (
          <ArrowUpRight className="h-3.5 w-3.5 text-white" />
        ) : (
          <ArrowDownLeft className="h-3.5 w-3.5 text-[#1B1B1B]" />
        )}
      </div>
      <div className="flex min-w-0 flex-col">
        <span className="truncate text-[10px] font-medium text-[#1B1B1B]">
          {who} <span className="opacity-50">·</span> <span className="opacity-70">{tag}</span>
        </span>
        <span className="text-[9px] text-[#1B1B1B]/60">{date}</span>
      </div>
      <span
        className={`ml-auto text-[10px] font-semibold ${
          positive ? 'text-emerald-600' : 'text-[#1B1B1B]'
        }`}
      >
        {amount}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#000d12] text-[#E9F4F9]">
      {/* Glow */}
      <div
        className="pointer-events-none absolute right-[-120px] top-32 h-[600px] w-[600px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(0,180,253,0.45), rgba(0,58,206,0.25), transparent 80%)',
        }}
      />

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 pb-24 pt-36 md:px-12 lg:grid-cols-[1.05fr_1fr] lg:px-20 lg:pt-44">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <h1
              className="text-[44px] font-medium leading-[1.05] tracking-[-0.02em] text-[#E9F4F9] sm:text-[56px] lg:text-[67px]"
              style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
            >
              The new foundation of modern banking
            </h1>
            <p className="max-w-md text-base leading-relaxed text-[#E9F4F9]/80">
              We drive innovation and growth, provide seamless customer experience and operational excellence
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-[10px] px-12 py-4 text-[13px] font-medium uppercase tracking-wider text-white shadow-lg shadow-[#003ACE]/30 transition hover:scale-[1.02] hover:shadow-[#003ACE]/50"
              style={{
                backgroundImage:
                  'linear-gradient(141.82deg, #00B4FD 5.68%, #003ACE 86.97%)',
                fontFamily: '"Chivo Mono", ui-monospace, monospace',
              }}
            >
              Request Demo
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-[10px] border border-[#E9F4F9]/70 px-12 py-4 text-[13px] font-medium uppercase tracking-wider text-[#E9F4F9] transition hover:border-[#00B4FD] hover:text-[#00B4FD]"
              style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
            >
              Contact Us
            </a>
          </div>

          {/* Trusted by */}
          <div className="flex flex-col gap-4 pt-6">
            <span className="text-sm capitalize text-[#E9F4F9]/70">trusted by:</span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 opacity-90">
              {trustedBy.map((name) => (
                <span
                  key={name}
                  className="text-[14px] font-bold tracking-wide text-[#586E84]"
                  style={{ fontFamily: 'Roboto, Inter, sans-serif' }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right – photo + floating widgets */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto h-[400px] w-full max-w-[560px] sm:h-[460px]"
        >
          {/* Image */}
          <div className="absolute inset-y-0 left-4 right-32 overflow-hidden rounded-[31px] shadow-2xl sm:right-40">
            <Image
              src="/images/hero-woman.png"
              alt="Customer using mobile banking"
              fill
              priority
              sizes="(min-width:1024px) 480px, 80vw"
              className="object-cover"
            />
          </div>

          {/* Balance card (top right) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-0 top-6 w-[210px] rounded-[14px] border border-white/20 bg-white/40 p-3 backdrop-blur-md shadow-[0_0_30px_8px_rgba(0,0,0,0.25)] sm:right-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#00B4FD] to-[#003ACE]" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold text-[#1B1B1B]">Toni Kross</span>
                  <span className="text-[8px] text-[#1B1B1B]/70">Good Morning</span>
                </div>
              </div>
              <BellIcon className="h-3.5 w-3.5 text-[#1B1B1B]/70" />
            </div>
            <div className="mt-3 flex flex-col gap-0.5">
              <span className="text-[10px] text-[#1B1B1B]/70">Total balance</span>
              <span className="text-[16px] font-semibold text-[#1B1B1B]">$42,295.00 USD</span>
            </div>
            <div className="my-2 h-px bg-[#1B1B1B]/10" />
            <div className="grid grid-cols-3 gap-1 text-center">
              {[
                { label: 'Fund Transfer', glyph: '⇄' },
                { label: 'Add Money', glyph: '$' },
                { label: 'More', glyph: '⋯' },
              ].map((a) => (
                <div key={a.label} className="flex flex-col items-center gap-1">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#FFD028]/80 text-[12px] font-bold text-[#1B1B1B]">
                    {a.glyph}
                  </div>
                  <span className="text-[8px] text-[#1B1B1B]">{a.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent activity (bottom left) */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 left-0 w-[245px] rounded-[14px] border border-white/20 bg-white/40 p-3 backdrop-blur-md shadow-[0_0_30px_8px_rgba(0,0,0,0.25)] sm:left-6"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#1B1B1B]">Recent activity</span>
            </div>
            <div className="mb-2 flex gap-1">
              {['This Day', 'This Week', 'This Month', '6 Month'].map((t, i) => (
                <span
                  key={t}
                  className={`rounded px-1.5 py-0.5 text-[8px] ${
                    i === 1
                      ? 'bg-[#00B4FD] text-white'
                      : 'bg-white/60 text-[#1B1B1B]/70'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-1.5">
              <ActivityRow type="out" who="To Jin" tag="Work" date="12 jun 2022" amount="-$59" positive={false} />
              <ActivityRow type="in" who="From Google" tag="Salary" date="10 jun 2022" amount="+$859" positive />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
