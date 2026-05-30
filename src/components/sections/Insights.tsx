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

/* Blue X-pattern SVG for card covers */
function XPattern() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0a1a22]">
      <div className="grid grid-cols-2 gap-3 p-6">
        {[0, 1, 2, 3].map((i) => (
          <svg key={i} width="48" height="48" viewBox="0 0 48 48" fill="none">
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

function InsightCard({ post, featured = false }: { post: (typeof posts)[0]; featured?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
    >
      <div className={`relative w-full ${featured ? 'aspect-[16/10]' : 'aspect-[16/9]'}`}>
        <XPattern />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-[10px] uppercase tracking-wider text-[#00B4FD]">{post.eyebrow}</span>
        <h3
          className={`leading-snug ${featured ? 'text-[20px]' : 'text-[18px]'}`}
          style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
        >
          {post.title}
        </h3>
        <div className="mt-1 flex items-center gap-2 text-[11px] text-[#E9F4F9]/60">
          <span>{post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>
        <a
          href="#"
          className="mt-auto inline-flex w-full items-center justify-center rounded-[10px] border border-white/20 py-2.5 text-[11px] uppercase tracking-wider text-[#E9F4F9]/80 transition hover:border-[#00B4FD] hover:text-[#00B4FD]"
          style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
        >
          Read More
        </a>
      </div>
    </motion.article>
  );
}

export default function Insights() {
  return (
    <section id="insights" className="relative overflow-hidden bg-[#000d12] py-24 text-[#E9F4F9]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        {/* Top row: heading left + featured card right */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <h2
              className="max-w-md text-[32px] leading-[1.1] tracking-[-0.01em] sm:text-[40px]"
              style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
            >
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <a
              href="#"
              className="inline-flex w-fit items-center justify-center rounded-[10px] border border-[#E9F4F9]/60 px-8 py-3 text-[12px] uppercase tracking-wider transition hover:border-[#00B4FD] hover:text-[#00B4FD]"
              style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
            >
              Insights
            </a>
          </div>
          <InsightCard post={posts[0]} featured />
        </div>

        {/* Bottom row: 2 cards */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <InsightCard post={posts[1]} />
          <InsightCard post={posts[2]} />
        </div>

        {/* Read All link */}
        <div className="mt-8 flex justify-end">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider text-[#00B4FD] transition hover:text-[#00B4FD]/80"
            style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
          >
            Read All | Insights
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
