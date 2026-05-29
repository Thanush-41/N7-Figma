'use client';

import { motion } from 'framer-motion';

type Phone = {
  title: string;
  body: string;
  side: 'left' | 'right';
  screen: React.ReactNode;
};

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[542px] w-[268px] shrink-0 rounded-[44px] border-[10px] border-[#1A1F26] bg-[#0a0f14] shadow-[0_30px_60px_-20px_rgba(0,180,253,0.45)]">
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#1A1F26]" />
      <div className="absolute inset-0 overflow-hidden rounded-[34px]">{children}</div>
    </div>
  );
}

function ScreenA() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#0b2d4a] to-[#0a0f14] p-4 pt-10 text-white">
      <span className="text-[10px] opacity-70">Welcome back</span>
      <span className="text-[15px] font-semibold">Toni Kross</span>
      <div className="mt-3 rounded-xl bg-gradient-to-br from-[#00B4FD] to-[#003ACE] p-3">
        <span className="text-[9px] opacity-80">Available balance</span>
        <div className="text-[18px] font-semibold">$42,295.00</div>
        <div className="mt-2 flex justify-between text-[9px] opacity-80">
          <span>**** 4821</span>
          <span>VISA</span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {['Send', 'Top up', 'Pay', 'More'].map((l) => (
          <div key={l} className="flex flex-col items-center gap-1 rounded-lg bg-white/5 py-2">
            <div className="h-5 w-5 rounded-full bg-[#00B4FD]/30" />
            <span className="text-[8px]">{l}</span>
          </div>
        ))}
      </div>
      <span className="mt-4 text-[10px] font-semibold">Transactions</span>
      <div className="mt-2 flex flex-col gap-2">
        {[
          ['Spotify', '-$9.99'],
          ['Salary', '+$3,200'],
          ['Uber', '-$14.20'],
        ].map(([n, a]) => (
          <div key={n} className="flex items-center justify-between rounded-lg bg-white/5 px-2 py-2 text-[10px]">
            <span>{n}</span>
            <span className={a.startsWith('+') ? 'text-emerald-400' : 'text-rose-300'}>{a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
function ScreenB() {
  return (
    <div className="flex h-full flex-col bg-[#0a0f14] p-4 pt-10 text-white">
      <span className="text-[10px] opacity-70">Insights</span>
      <span className="text-[14px] font-semibold">Your spending</span>
      <div className="mt-3 rounded-xl border border-white/10 p-3">
        <div className="flex h-24 items-end gap-1.5">
          {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-[#003ACE] to-[#00B4FD]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[8px] opacity-60">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[
          ['Food', '$321'],
          ['Travel', '$180'],
          ['Bills', '$240'],
          ['Fun', '$95'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-white/5 p-2">
            <span className="text-[8px] opacity-60">{k}</span>
            <div className="text-[12px] font-semibold">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
function ScreenC() {
  return (
    <div className="flex h-full flex-col bg-[#0a0f14] p-4 pt-10 text-white">
      <span className="text-[10px] opacity-70">Send money</span>
      <span className="text-[14px] font-semibold">To a contact</span>
      <div className="mt-3 flex gap-2 overflow-hidden">
        {['JI', 'AK', 'LM', 'TR'].map((c, i) => (
          <div
            key={i}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#00B4FD] to-[#003ACE] text-[10px] font-bold"
          >
            {c}
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-white/5 p-3">
        <span className="text-[9px] opacity-60">Amount</span>
        <div className="text-[22px] font-semibold">$1,250.00</div>
        <div className="mt-1 text-[9px] opacity-60">From Main Account</div>
      </div>
      <div className="mt-3 rounded-xl border border-white/10 p-2 text-[10px]">
        <div className="flex justify-between">
          <span className="opacity-60">Fee</span>
          <span>$0.00</span>
        </div>
        <div className="mt-1 flex justify-between">
          <span className="opacity-60">Arrives</span>
          <span>Instantly</span>
        </div>
      </div>
      <button className="mt-auto rounded-lg bg-gradient-to-br from-[#00B4FD] to-[#003ACE] py-2 text-[11px] font-semibold">
        Confirm
      </button>
    </div>
  );
}

const phones: Phone[] = [
  {
    title: 'A complete banking experience in your pocket',
    body: 'A modern, intuitive mobile banking app your customers will love — onboarding, payments and insights, all in one place.',
    side: 'right',
    screen: <ScreenA />,
  },
  {
    title: 'Smart insights that help customers grow',
    body: 'AI-powered budgeting, categorisation and savings tools that turn raw transactions into personal financial guidance.',
    side: 'left',
    screen: <ScreenB />,
  },
  {
    title: 'Frictionless payments and transfers',
    body: 'Instant peer-to-peer payments, scheduled transfers and international remittances — built on a real-time core.',
    side: 'right',
    screen: <ScreenC />,
  },
];

export default function N7Mobile() {
  return (
    <section className="relative overflow-hidden bg-[#000d12] py-28 text-[#E9F4F9]">
      <div className="pointer-events-none absolute inset-x-0 top-10 hidden select-none justify-center md:flex">
        <span
          className="text-[280px] font-medium leading-none lg:text-[440px]"
          style={{
            fontFamily: 'Archivo, Inter, sans-serif',
            WebkitTextStroke: '1px rgba(0,180,253,0.3)',
            color: 'transparent',
          }}
        >
          N7
        </span>
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(0,180,253,0.5), rgba(0,58,206,0.2), transparent 80%)',
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[760px] text-center"
        >
          <span
            className="text-xs uppercase tracking-[0.3em] text-[#00B4FD]"
            style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
          >
            Digital Banking N7
          </span>
          <h2
            className="mt-4 text-[36px] leading-[1.1] tracking-[-0.01em] sm:text-[52px]"
            style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
          >
            Digital banking out-of-the-box
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col gap-28">
          {phones.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col items-center gap-12 lg:gap-20 ${
                p.side === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="flex-1">
                <h3
                  className="text-[28px] leading-[1.15] tracking-[-0.01em] sm:text-[36px]"
                  style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
                >
                  {p.title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#E9F4F9]/75">
                  {p.body}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-[13px] uppercase tracking-wider text-[#00B4FD]"
                  style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
                >
                  learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
              <PhoneFrame>{p.screen}</PhoneFrame>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
