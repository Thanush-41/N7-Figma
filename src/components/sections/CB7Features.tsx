'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  'Open APIs for fast third-party integration',
  'Modular architecture for granular deployment',
  'Real-time transaction processing engine',
  'Built-in compliance and KYC workflows',
  'Multi-currency and multi-entity support',
  'Cloud-native, horizontally scalable services',
  'Configurable product catalog and pricing',
  'Enterprise-grade security and audit trails',
  'Advanced reporting and analytics layer',
  '24/7 dedicated implementation support',
];

function Check() {
  return (
    <span
      className="mt-0.5 inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
      style={{ background: '#00B4FD' }}
    >
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function CB7Features() {
  return (
    <section className="relative overflow-hidden bg-[#000d12] py-24 text-[#E9F4F9]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-[1.05fr_1fr] lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[1.4/1] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_30px_80px_-20px_rgba(0,180,253,0.35)]">
            <Image
              src="/images/cb7-features-dashboard.png"
              alt="CB7 KYC and operations dashboard"
              fill
              sizes="(min-width:1024px) 640px, 90vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <h2
            className="text-[32px] leading-[1.15] tracking-[-0.01em] sm:text-[42px]"
            style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
          >
            Run a more efficient, flexible, and digitally connected core banking system
          </h2>

          <div className="flex flex-col gap-4">
            <span
              className="text-[16px] font-semibold text-[#E9F4F9]"
              style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
            >
              What you will get:
            </span>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[14px] text-[#E9F4F9]/85">
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
