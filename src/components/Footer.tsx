'use client';

const offices = [
  {
    city: 'London',
    lines: [
      'Linktia Infosystems Ltd – CB7,',
      '26 Main Road Sundridge,TN14 6EP,',
      'England, United Kingdom.',
    ],
  },
  {
    city: 'Dubai',
    lines: [
      'Linktia Infosystems Ltd –',
      'CB7,Jumeirah Business, Center 5',
      'Cluster W, Jumeirah Lakes Towers,',
      'Dubai, United Arab Emirates',
    ],
  },
  {
    city: 'London',
    lines: [
      'Linktia Infosystems Ltd –',
      'CB7,Nirmal, Anand Nagar,',
      'Suncity Road, Pune,',
      'Maharashtra, 411041, India',
    ],
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

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 opacity-50">
      <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#000d12] pt-20 text-[#E9F4F9]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        {/* Top section: Giant N7 left + Offices right */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[auto_1fr]">
          {/* Giant N7 gradient text */}
          <div className="pointer-events-none select-none">
            <span
              className="text-[220px] font-bold leading-[0.85] tracking-tight sm:text-[300px]"
              style={{
                fontFamily: 'Archivo, Inter, sans-serif',
                background: 'linear-gradient(180deg, #00B4FD 0%, #003ACE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              N7
            </span>
          </div>

          {/* Right side content */}
          <div className="flex flex-col">
            {/* Offices row */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {offices.map((o, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-[14px] font-semibold text-[#E9F4F9]">
                    {o.city}
                  </span>
                  {o.lines.map((line, j) => (
                    <span key={j} className="text-[13px] leading-relaxed text-[#E9F4F9]/60">{line}</span>
                  ))}
                </div>
              ))}
            </div>

            {/* Links grid */}
            <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
              <div className="flex flex-col gap-4">
                <span className="text-[14px] font-semibold text-[#E9F4F9]">
                  Solutions
                </span>
                <ul className="flex flex-col gap-3">
                  {solutions.map((s) => (
                    <li key={s}>
                      <a href="#" className="flex items-center justify-between text-[13px] text-[#E9F4F9]/60 transition hover:text-[#00B4FD]">
                        {s}
                        <ArrowIcon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[14px] font-semibold text-[#E9F4F9]">
                  N7 Banking
                </span>
                <ul className="flex flex-col gap-3">
                  {company.map((s) => (
                    <li key={s}>
                      <a href="#" className="flex items-center justify-between text-[13px] text-[#E9F4F9]/60 transition hover:text-[#00B4FD]">
                        {s}
                        <ArrowIcon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[14px] font-semibold text-[#E9F4F9]">
                  Our Socials
                </span>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="#" className="flex items-center justify-between text-[13px] text-[#E9F4F9]/60 transition hover:text-[#00B4FD]">
                      LinkedIn
                      <ArrowIcon />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between text-[13px] text-[#E9F4F9]/60 transition hover:text-[#00B4FD]">
                      X
                      <ArrowIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-white/10 py-8">
          <p className="text-[11px] leading-relaxed text-[#E9F4F9]/40">
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
          </p>
        </div>
      </div>
    </footer>
  );
}
