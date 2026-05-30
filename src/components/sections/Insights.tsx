'use client';

import { motion } from 'framer-motion';

const posts = [
  {
    eyebrow: 'getting started',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
  {
    eyebrow: 'getting started',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
  {
    eyebrow: 'getting started',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
];

/* Blue X-pattern SVG */
function XPattern() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#101c2c] rounded-xl">
      <div className="grid grid-cols-2 gap-4 p-8">
        {[0, 1, 2, 3].map((i) => (
          <svg key={i} width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path d="M40 8C40 8 48 20 52 24C56 28 68 28 68 28C68 28 56 36 52 40C48 44 48 56 48 56C48 56 40 44 40 40C40 44 40 56 32 56C32 56 32 44 28 40C24 36 12 28 12 28C12 28 24 28 28 24C32 20 40 8 40 8Z" fill="#00B4FD"/>
            <path d="M40 4L44 16L56 12L48 22L64 28L48 34L56 44L44 40L40 52L36 40L24 44L32 34L16 28L32 22L24 12L36 16L40 4Z" stroke="#00B4FD" strokeWidth="2" fill="#00B4FD"/>
          </svg>
        ))}
      </div>
    </div>
  );
}

/* Featured card: horizontal - image left + text right */
function FeaturedCard({ post }: { post: (typeof posts)[0] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:grid-cols-[1fr_1fr]"
    >
      <div className="aspect-square md:aspect-auto">
        <XPattern />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-8">
        <span className="text-[11px] uppercase tracking-wider text-[#00B4FD]">{post.eyebrow}</span>
        <h3
          className="text-[22px] leading-snug sm:text-[26px]"
          style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
        >
          {post.title}
        </h3>
        <div className="flex items-center gap-3 text-[12px] text-[#E9F4F9]/60">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
        <a
          href="#"
          className="mt-auto inline-flex w-full items-center justify-center rounded-[10px] border border-white/20 py-3 text-[11px] uppercase tracking-wider text-[#E9F4F9]/80 transition hover:border-[#00B4FD] hover:text-[#00B4FD]"
          style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
        >
          Read More
        </a>
      </div>
    </motion.article>
  );
}

/* Text-only card (no image) */
function TextCard({ post }: { post: (typeof posts)[0] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
    >
      <span className="text-[11px] uppercase tracking-wider text-[#00B4FD]">{post.eyebrow}</span>
      <h3
        className="text-[20px] leading-snug sm:text-[24px]"
        style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
      >
        {post.title}
      </h3>
      <div className="flex items-center gap-3 text-[12px] text-[#E9F4F9]/60">
        <span>{post.author}</span>
        <span>{post.date}</span>
      </div>
      <a
        href="#"
        className="mt-auto inline-flex w-full items-center justify-center rounded-[10px] border border-white/20 py-3 text-[11px] uppercase tracking-wider text-[#E9F4F9]/80 transition hover:border-[#00B4FD] hover:text-[#00B4FD]"
        style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
      >
        Read More
      </a>
    </motion.article>
  );
}

export default function Insights() {
  return (
    <section id="insights" className="relative overflow-hidden bg-[#000d12] py-24 text-[#E9F4F9]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        {/* Top row: heading left + featured card right */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.4fr]">
          <div className="flex flex-col gap-8">
            <h2
              className="max-w-sm text-[32px] leading-[1.1] tracking-[-0.01em] sm:text-[40px]"
              style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
            >
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <a
              href="#"
              className="inline-flex w-fit items-center justify-center rounded-[10px] border border-[#E9F4F9]/60 px-10 py-3.5 text-[12px] uppercase tracking-wider transition hover:border-[#00B4FD] hover:text-[#00B4FD]"
              style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
            >
              Insights
            </a>
          </div>
          <FeaturedCard post={posts[0]} />
        </div>

        {/* Bottom row: 2 text-only cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <TextCard post={posts[1]} />
          <TextCard post={posts[2]} />
        </div>

        {/* Read All link */}
        <div className="mt-10 flex justify-end">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider text-[#00B4FD] transition hover:text-[#00B4FD]/80"
            style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
          >
            Read All Insights
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
