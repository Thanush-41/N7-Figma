'use client';

import { motion } from 'framer-motion';

type Props = {
  brand?: 'CB7' | 'N7';
  title: string;
  body: string;
};

export default function PaperlessCTA({ brand = 'CB7', title, body }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#000d12] py-24 text-[#E9F4F9]">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 select-none justify-center md:flex">
        <span
          className="text-[260px] font-medium leading-none lg:text-[400px]"
          style={{
            fontFamily: 'Archivo, Inter, sans-serif',
            WebkitTextStroke: '1px rgba(0,180,253,0.3)',
            color: 'transparent',
          }}
        >
          {brand}
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto flex max-w-[920px] flex-col items-center gap-6 px-6 text-center md:px-12"
      >
        <h2
          className="text-[32px] leading-[1.15] tracking-[-0.01em] sm:text-[44px]"
          style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
        >
          {title}
        </h2>
        <p className="max-w-[680px] text-[15px] leading-relaxed text-[#E9F4F9]/75">{body}</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
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
            href="#contact"
            className="inline-flex items-center justify-center rounded-[10px] border border-[#E9F4F9]/60 px-10 py-3.5 text-[13px] uppercase tracking-wider text-[#E9F4F9] transition hover:border-[#00B4FD] hover:text-[#00B4FD]"
            style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
