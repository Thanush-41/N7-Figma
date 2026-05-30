'use client';

import { motion } from 'framer-motion';

type Props = {
  brand?: 'CB7' | 'N7';
  title: string;
  body: string;
};

export default function PaperlessCTA({ brand = 'CB7', title, body }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#000d12] py-20 text-[#E9F4F9]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0a1a22]/60 px-10 py-16 md:px-16 lg:px-20"
        >
          {/* Giant outlined brand text in background */}
          <div className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 select-none md:block">
            <span
              className="text-[240px] font-medium leading-none lg:text-[340px]"
              style={{
                fontFamily: 'Archivo, Inter, sans-serif',
                WebkitTextStroke: '1.5px rgba(0,180,253,0.25)',
                color: 'transparent',
              }}
            >
              {brand}
            </span>
          </div>

          {/* Content: split layout */}
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex max-w-[540px] flex-col gap-4">
              <h2
                className="text-[30px] leading-[1.15] tracking-[-0.01em] sm:text-[40px]"
                style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
              >
                {title}
              </h2>
              <p className="max-w-[480px] text-[14px] leading-relaxed text-[#E9F4F9]/70">{body}</p>
            </div>

            <div className="flex shrink-0 flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-[10px] border border-[#E9F4F9]/60 px-8 py-3.5 text-[13px] uppercase tracking-wider text-[#E9F4F9] transition hover:border-[#00B4FD] hover:text-[#00B4FD]"
                style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
              >
                Contact Us
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-[10px] px-8 py-3.5 text-[13px] uppercase tracking-wider text-white shadow-lg shadow-[#003ACE]/30 transition hover:scale-[1.02]"
                style={{
                  backgroundImage: 'linear-gradient(141.82deg, #00B4FD 5.68%, #003ACE 86.97%)',
                  fontFamily: '"Chivo Mono", ui-monospace, monospace',
                }}
              >
                Request Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
