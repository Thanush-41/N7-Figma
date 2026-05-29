'use client';

const offices = [
  {
    city: 'London',
    line1: 'Linktia Infosystems Ltd.',
    line2: '128 City Road, London',
    line3: 'EC1V 2NX, United Kingdom',
  },
  {
    city: 'Dubai',
    line1: 'Linktia FZE',
    line2: 'Dubai Silicon Oasis',
    line3: 'DDP, Building A2, Dubai',
  },
  {
    city: 'Pune',
    line1: 'Linktia Infosystems Pvt.',
    line2: 'Magarpatta City, Hadapsar',
    line3: 'Pune 411013, India',
  },
];

const solutions = [
  'Core Banking CB7',
  'Digital Banking N7',
  'Open Banking',
  'Loan Origination System',
  'Loan Management System',
  'Digital Transformation',
];

const company = ['About Us', 'Solutions', 'Contact', 'Company', 'Careers', 'Insights', 'Core Team', 'Brand Center'];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#000d12] pt-20 text-[#E9F4F9]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <span
              className="text-3xl font-semibold"
              style={{ fontFamily: 'Archivo, Inter, sans-serif' }}
            >
              N7<span className="text-[#00B4FD]">.</span>
            </span>
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
              {offices.map((o) => (
                <div key={o.city} className="flex flex-col gap-1">
                  <span className="text-[13px] font-semibold uppercase tracking-wider text-[#00B4FD]">
                    {o.city}
                  </span>
                  <span className="text-[13px] text-[#E9F4F9]/70">{o.line1}</span>
                  <span className="text-[13px] text-[#E9F4F9]/70">{o.line2}</span>
                  <span className="text-[13px] text-[#E9F4F9]/70">{o.line3}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-[#E9F4F9]">
              Solutions
            </span>
            <ul className="flex flex-col gap-2">
              {solutions.map((s) => (
                <li key={s}>
                  <a href="#" className="text-[14px] text-[#E9F4F9]/70 transition hover:text-[#00B4FD]">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-[#E9F4F9]">
              N7 Banking
            </span>
            <ul className="flex flex-col gap-2">
              {company.map((s) => (
                <li key={s}>
                  <a href="#" className="text-[14px] text-[#E9F4F9]/70 transition hover:text-[#00B4FD]">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-[#E9F4F9]">
              Our Socials
            </span>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#00B4FD] hover:text-[#00B4FD]"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.22 8h4.55v14H.22V8zm7.37 0h4.36v1.91h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.45H17.4v-6.6c0-1.57-.03-3.6-2.19-3.6-2.2 0-2.54 1.71-2.54 3.49V22H8.32V8h-.73z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#00B4FD] hover:text-[#00B4FD]"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-7.012L4.5 22H1.243l8.026-9.17L1 2h7.012l4.84 6.39L18.244 2zm-1.2 18h1.86L7.04 4H5.07l11.974 16z" />
                </svg>
              </a>
            </div>
            <a
              href="#contact"
              className="mt-4 inline-flex w-fit items-center justify-center rounded-[10px] px-8 py-3 text-[12px] uppercase tracking-wider text-white shadow-lg shadow-[#003ACE]/30 transition hover:scale-[1.02]"
              style={{
                backgroundImage:
                  'linear-gradient(141.82deg, #00B4FD 5.68%, #003ACE 86.97%)',
                fontFamily: '"Chivo Mono", ui-monospace, monospace',
              }}
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 py-8 text-[12px] text-[#E9F4F9]/50 sm:flex-row sm:items-center">
          <span>© 2022 by Linktia Infosystems Limited. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-[#00B4FD]">Privacy Policy</a>
            <a href="#" className="transition hover:text-[#00B4FD]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
