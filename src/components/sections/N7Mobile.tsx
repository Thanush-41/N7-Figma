'use client';

import { motion } from 'framer-motion';

/* ─── Marquee Ticker ─── */
function Marquee() {
  const items = ['N7', '✦', 'Say', '👋', 'to the new way of banking', '✦', 'CB7', '✦', 'Say', '👋', 'to the new way of banking'];
  const row = items.map((t, i) => (
    <span
      key={i}
      className={`mx-4 whitespace-nowrap text-[28px] font-medium tracking-tight sm:text-[36px] ${
        t === 'N7' || t === 'CB7' ? 'text-[#00B4FD]' : 'text-[#1B1B1B]'
      }`}
      style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
    >
      {t}
    </span>
  ));

  return (
    <div className="relative w-full overflow-hidden border-y border-[#E5E5E5] bg-white py-5">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee-scroll 20s linear infinite' }}
      >
        {row}
        {row}
      </div>
    </div>
  );
}

/* ─── Phone Frame ─── */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto h-[560px] w-[280px] shrink-0 rounded-[44px] border-[10px] border-[#1A1F26] bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#1A1F26]" />
      <div className="absolute inset-0 overflow-hidden rounded-[34px]">{children}</div>
    </div>
  );
}

/* ─── Screen: Main Banking App ─── */
function MainScreen() {
  return (
    <div className="flex h-full flex-col bg-white px-4 pt-10 text-[#1B1B1B]">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#00B4FD] to-[#003ACE]" />
        <div>
          <div className="text-[10px] font-semibold">Toni Kross</div>
          <div className="text-[8px] text-[#1B1B1B]/60">Good Morning</div>
        </div>
        <div className="ml-auto h-4 w-4 rounded-full bg-[#F3F4F6]" />
      </div>
      <div className="mt-3 text-[22px] font-semibold">$42,295.00 USD</div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {['Fund Transfer', 'Add Money', 'More', ''].slice(0, 3).map((l) => (
          <div key={l} className="flex flex-col items-center gap-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F3F4F6]">
              <div className="h-3.5 w-3.5 rounded-sm bg-[#D1D5DB]" />
            </div>
            <span className="text-[7px] text-[#1B1B1B]/70">{l}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-[11px] font-semibold">Recent activity</div>
      <div className="mt-1 flex gap-1">
        {['This Day', 'This Week', 'This Month', '6 Month'].map((t, i) => (
          <span
            key={t}
            className={`rounded px-1.5 py-0.5 text-[7px] ${i === 1 ? 'bg-[#00B4FD] text-white' : 'bg-[#F3F4F6] text-[#1B1B1B]/70'}`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-2 flex flex-col gap-2">
        {[
          { name: 'To Jin', tag: 'Work', date: '12 jun 2022', amount: '-$59', color: '#9280FD' },
          { name: 'From Google', tag: 'Salary', date: '10 jun 2022', amount: '+$859', color: '#FFD028' },
          { name: 'To David', tag: 'Work', date: '7 jun 2022', amount: '-$479', color: '#9280FD' },
          { name: 'From Google', tag: 'Bonus', date: '5 jun 2022', amount: '+$899', color: '#FFD028' },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-2 border-b border-[#F3F4F6] pb-1.5 last:border-0">
            <div className="flex h-6 w-6 items-center justify-center rounded-md" style={{ background: t.color }}>
              <span className="text-[8px] font-bold text-white">{t.name[0]}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-medium">{t.name} · <span className="opacity-60">{t.tag}</span></span>
              <span className="text-[7px] text-[#1B1B1B]/50">{t.date}</span>
            </div>
            <span className={`ml-auto text-[9px] font-semibold ${t.amount.startsWith('+') ? 'text-emerald-600' : ''}`}>
              {t.amount}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-auto flex justify-around border-t border-[#F3F4F6] py-2 text-[7px] text-[#1B1B1B]/60">
        {['Home', 'Card', 'Transaction', 'Profile'].map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Screen: Analytics ─── */
function AnalyticsScreen() {
  return (
    <div className="flex h-full flex-col bg-white px-4 pt-10 text-[#1B1B1B]">
      <div className="text-[9px] text-[#1B1B1B]/60">March 2022</div>
      <div className="text-[20px] font-semibold">$8,295.00 USD</div>
      <div className="mt-3 rounded-xl border border-[#F3F4F6] p-3">
        <div className="flex h-24 items-end gap-2">
          {[45, 70, 35, 85, 60, 90, 50].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-[#003ACE] to-[#00B4FD]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[7px] text-[#1B1B1B]/50">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
      <div className="mt-3 flex justify-between text-[10px]">
        <span className="text-[#1B1B1B]/60">$453.00</span>
        <span className="text-[#1B1B1B]/60">$453.00</span>
      </div>
      <div className="mt-4 text-[11px] font-semibold">Recent activity</div>
      <div className="mt-1 flex gap-1">
        {['This Day', 'This Week', 'This Month', '6 Month'].map((t, i) => (
          <span
            key={t}
            className={`rounded px-1.5 py-0.5 text-[7px] ${i === 1 ? 'bg-[#00B4FD] text-white' : 'bg-[#F3F4F6] text-[#1B1B1B]/70'}`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-auto flex justify-around border-t border-[#F3F4F6] py-2 text-[7px] text-[#1B1B1B]/60">
        {['Home', 'Card', 'Transaction', 'Profile'].map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Screen: Profile ─── */
function ProfileScreen() {
  return (
    <div className="flex h-full flex-col bg-white px-4 pt-10 text-[#1B1B1B]">
      {/* Avatar + Name */}
      <div className="flex flex-col items-center gap-2 pt-4">
        <div className="h-16 w-16 rounded-full bg-[#E8EDF2]" />
        <div className="text-center">
          <div className="text-[13px] font-semibold">Toni Kross</div>
        </div>
      </div>
      {/* Menu items */}
      <div className="mt-6 flex flex-col gap-1">
        {[
          { icon: '👤', label: 'Profile setting' },
          { icon: '💳', label: 'Pay' },
          { icon: '✉️', label: 'Invite' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-[#F3F4F6]"
          >
            <span className="text-[14px]">{item.icon}</span>
            <span className="text-[11px] font-medium text-[#1B1B1B]/80">{item.label}</span>
            <svg className="ml-auto h-3 w-3 text-[#1B1B1B]/40" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ))}
      </div>
      <div className="mt-auto flex justify-around border-t border-[#F3F4F6] py-2 text-[7px] text-[#1B1B1B]/60">
        {['Home', 'Card', 'Transaction', 'Profile'].map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Check bullet ─── */
function Check({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00B4FD]">
        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-[14px] font-medium text-[#1B1B1B]">{children}</span>
    </div>
  );
}

/* ─── Main Section ─── */
export default function N7Mobile() {
  return (
    <section className="overflow-hidden">
      {/* Marquee ticker */}
      <Marquee />

      {/* White section */}
      <div className="bg-white py-20 text-[#1B1B1B]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
          {/* First feature row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto_1fr]"
          >
            {/* Left text */}
            <div className="flex flex-col gap-4">
              <h2
                className="text-[32px] leading-[1.1] tracking-[-0.01em] sm:text-[40px]"
                style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
              >
                Digital banking out-of-the-box
              </h2>
              <p className="max-w-[320px] text-[14px] leading-relaxed text-[#1B1B1B]/70">
                N7 helps your financial institution improve the client experience, automate and optimize procedures
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-[10px] px-8 py-3 text-[12px] uppercase tracking-wider text-white"
                  style={{
                    backgroundImage: 'linear-gradient(141.82deg, #00B4FD 5.68%, #003ACE 86.97%)',
                    fontFamily: '"Chivo Mono", ui-monospace, monospace',
                  }}
                >
                  Request Demo
                </a>
              </div>
              <a
                href="#"
                className="mt-1 inline-flex items-center gap-2 text-[12px] uppercase tracking-wider text-[#00B4FD]"
                style={{ fontFamily: '"Chivo Mono", ui-monospace, monospace' }}
              >
                Learn More
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Phone center */}
            <PhoneFrame>
              <MainScreen />
            </PhoneFrame>

            {/* Right features */}
            <div className="flex flex-col gap-5">
              <h3 className="text-[18px] font-semibold leading-tight" style={{ fontFamily: 'Archivo, Inter, sans-serif' }}>
                Fully compliant with regulatory requirement
              </h3>
              <p className="text-[13px] leading-relaxed text-[#1B1B1B]/70">
                The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank&apos;s operational-risk protocols and procedures.
              </p>
              <div className="mt-2 flex flex-col gap-3">
                <Check>Pre-integrated Security System</Check>
                <Check>Fully Compliant With Regulatory Requirement</Check>
                <Check>Digitally Connected Core</Check>
              </div>
            </div>
          </motion.div>

          {/* Second feature row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-28 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto]"
          >
            {/* Left text */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[18px] font-semibold leading-tight" style={{ fontFamily: 'Archivo, Inter, sans-serif' }}>
                No legacy IT systems
              </h3>
              <p className="max-w-[380px] text-[13px] leading-relaxed text-[#1B1B1B]/70">
                Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
              </p>
              <div className="mt-2 flex flex-col gap-3">
                <Check>Adaptive &amp; Intelligent API monetization</Check>
                <Check>Ambient User Experience</Check>
                <Check>Cloud-native With lower TCO</Check>
              </div>
            </div>

            {/* Phone right */}
            <PhoneFrame>
              <AnalyticsScreen />
            </PhoneFrame>
          </motion.div>

          {/* Third feature row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-28 grid grid-cols-1 items-center gap-12 lg:grid-cols-[auto_1fr]"
          >
            {/* Phone left */}
            <PhoneFrame>
              <ProfileScreen />
            </PhoneFrame>

            {/* Right text */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[18px] font-semibold leading-tight" style={{ fontFamily: 'Archivo, Inter, sans-serif' }}>
                No traditional branches
              </h3>
              <p className="max-w-[380px] text-[13px] leading-relaxed text-[#1B1B1B]/70">
                Our Digital Banking out-of-the-box helps you to accelerate timescale while reducing costs and optimizing operational control for a seamless, branchless experience.
              </p>
              <div className="mt-2 flex flex-col gap-3">
                <Check>Branchless &amp; Paperless Banking</Check>
                <Check>Digital Transformation Capability</Check>
                <Check>Optimized, Adoptable and Scalable</Check>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
