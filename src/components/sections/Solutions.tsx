'use client';

import { motion } from 'framer-motion';

type Solution = {
  title: string;
  body: string;
  badge?: string;
  icon: React.ReactNode;
};

const I = {
  cb7: (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" stroke="#00B4FD" strokeWidth="1.6">
      <rect x="6" y="10" width="36" height="28" rx="4" />
      <path d="M6 18h36M12 28h8M12 32h14" />
    </svg>
  ),
  n7: (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" stroke="#00B4FD" strokeWidth="1.6">
      <rect x="14" y="6" width="20" height="36" rx="4" />
      <path d="M22 38h4M14 14h20" />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" stroke="#00B4FD" strokeWidth="1.6">
      <path d="M14 24l-6 6 6 6M34 12l6 6-6 6M28 8l-8 32" />
    </svg>
  ),
  loan: (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" stroke="#00B4FD" strokeWidth="1.6">
      <path d="M8 36V14a4 4 0 0 1 4-4h20l8 8v18a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4z" />
      <path d="M16 22h16M16 28h12M16 34h8" />
    </svg>
  ),
  manage: (
    <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" stroke="#00B4FD" strokeWidth="1.6">
      <circle cx="24" cy="24" r="14" />
      <path d="M24 16v8l6 4" />
    </svg>
  ),
};

const items: Solution[] = [
  {
    title: 'Core Banking CB7',
    body:
      'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
    icon: I.cb7,
  },
  {
    title: 'Digital Banking N7',
    body:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
    icon: I.n7,
  },
  {
    title: 'Open Banking',
    body:
      'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
    icon: I.api,
  },
  {
    title: 'Loan Origination System',
    body:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
    badge: 'NBFC',
    icon: I.loan,
  },
  {
    title: 'Loan Management System',
    body:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
    badge: 'NBFC',
    icon: I.manage,
  },
];

function LearnMore() {
  return (
    <div className="mt-auto flex flex-col gap-1 pt-6">
      <span
        className="inline-flex items-center gap-1 text-[13px] uppercase tracking-wider text-[#00B4FD] transition group-hover:gap-2"
        style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
      >
        learn more
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="block h-px w-8 bg-[#00B4FD]" />
    </div>
  );
}

export default function Solutions() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-[#000d12] py-24 text-[#E9F4F9]">
      <div
        className="pointer-events-none absolute right-[-160px] top-1/4 h-[560px] w-[560px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(0,180,253,0.35), rgba(0,58,206,0.18), transparent 80%)',
        }}
      />

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-[1fr_1.4fr] lg:px-20">
        <div className="flex flex-col gap-6">
          <h2
            className="text-[34px] leading-[1.1] tracking-[-0.01em] sm:text-[42px]"
            style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
          >
            All of our solutions are tailor-made to your needs
          </h2>
          <a
            href="#contact"
            className="inline-flex w-fit items-center justify-center rounded-[10px] px-10 py-3.5 text-[13px] uppercase tracking-wider text-white shadow-lg shadow-[#003ACE]/30 transition hover:scale-[1.02]"
            style={{
              backgroundImage:
                'linear-gradient(141.82deg, #00B4FD 5.68%, #003ACE 86.97%)',
              fontFamily: '"Chivo Mono", ui-monospace, monospace',
            }}
          >
            Get Started
          </a>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex flex-col"
            >
              <div className="flex items-start justify-between">
                {s.icon}
                {s.badge && (
                  <span className="rounded-md border border-[#00B4FD]/40 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-[#00B4FD]">
                    {s.badge}
                  </span>
                )}
              </div>
              <h3
                className="mt-6 text-[22px] leading-tight"
                style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
              >
                {s.title}
              </h3>
              <p className="mt-3 max-w-[280px] text-[14px] leading-relaxed text-[#E9F4F9]/70">
                {s.body}
              </p>
              <LearnMore />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
