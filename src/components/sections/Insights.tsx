'use client';

import { motion } from 'framer-motion';

const posts = [
  {
    eyebrow: 'getting started',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
    accent: 'from-[#00B4FD] to-[#003ACE]',
  },
  {
    eyebrow: 'product',
    title: 'Five reasons cloud-native cores out-perform on-premise systems',
    author: 'Maya Chen',
    date: '02/09/24',
    accent: 'from-[#9280FD] to-[#003ACE]',
  },
  {
    eyebrow: 'compliance',
    title: 'A practical guide to KYC automation in 2025',
    author: 'Anika Rao',
    date: '21/10/24',
    accent: 'from-[#FFD028] to-[#00B4FD]',
  },
];

export default function Insights() {
  return (
    <section id="insights" className="relative overflow-hidden bg-[#000d12] py-24 text-[#E9F4F9]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2
            className="max-w-xl text-[32px] leading-[1.1] tracking-[-0.01em] sm:text-[44px]"
            style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
          >
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-[10px] border border-[#E9F4F9]/60 px-8 py-3 text-[13px] uppercase tracking-wider transition hover:border-[#00B4FD] hover:text-[#00B4FD]"
            style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
          >
            View More
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-[#00B4FD]/50 hover:bg-white/[0.04]"
            >
              <div
                className={`relative aspect-[16/10] w-full bg-gradient-to-br ${p.accent}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[10px] uppercase tracking-wider backdrop-blur">
                  {p.eyebrow}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3
                  className="text-[20px] leading-snug transition group-hover:text-[#00B4FD]"
                  style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
                >
                  {p.title}
                </h3>
                <div className="mt-auto flex items-center justify-between text-[12px] text-[#E9F4F9]/60">
                  <span>{p.author}</span>
                  <span>{p.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
