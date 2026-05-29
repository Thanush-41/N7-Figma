'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CB7Banking() {
  return (
    <section className="relative overflow-hidden bg-[#000d12] py-28 text-[#E9F4F9]">
      {/* Giant outlined CB7 text */}
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden select-none justify-center md:flex">
        <span
          className="text-[260px] font-medium leading-none lg:text-[420px]"
          style={{
            fontFamily: 'Archivo, Inter, sans-serif',
            WebkitTextStroke: '1px rgba(0,180,253,0.35)',
            color: 'transparent',
          }}
        >
          CB7
        </span>
      </div>

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-2 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <span
            className="text-xs uppercase tracking-[0.3em] text-[#00B4FD]"
            style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
          >
            Cloud Core Banking
          </span>
          <h2
            className="text-[36px] leading-[1.1] tracking-[-0.01em] sm:text-[48px]"
            style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
          >
            A complete cloud-based core banking.
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-[#E9F4F9]/75">
            CB7 helps your financial institution improve the client experience, automate procedures and ensure full regulatory compliance — all on a modern, scalable cloud foundation.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-[10px] px-10 py-3.5 text-[13px] uppercase tracking-wider text-white shadow-lg shadow-[#003ACE]/30 transition hover:scale-[1.02]"
              style={{
                backgroundImage:
                  'linear-gradient(141.82deg, #00B4FD 5.68%, #003ACE 86.97%)',
                fontFamily: '"Chivo Mono", ui-monospace, monospace',
              }}
            >
              Request Demo
            </a>
            <a
              href="#learn"
              className="inline-flex items-center justify-center rounded-[10px] border border-[#E9F4F9]/60 px-10 py-3.5 text-[13px] uppercase tracking-wider text-[#E9F4F9] transition hover:border-[#00B4FD] hover:text-[#00B4FD]"
              style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
            >
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[1.35/1] overflow-hidden rounded-2xl border border-[#00B4FD]/40 bg-black/40 shadow-[0_30px_80px_-20px_rgba(0,180,253,0.4)]">
            <Image
              src="/images/cb7-dashboard.png"
              alt="CB7 dashboard"
              fill
              sizes="(min-width:1024px) 600px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="mx-auto mt-2 h-2 w-[88%] rounded-b-2xl bg-[#00B4FD]/30 blur-sm" />
        </motion.div>
      </div>
    </section>
  );
}
