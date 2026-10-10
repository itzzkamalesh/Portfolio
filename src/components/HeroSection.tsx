import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/resumePdf';

export const HeroSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTarget = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-20 flex flex-col justify-center overflow-hidden border-b border-white/[0.06]"
    >
      {/* Minimal animated background with subtle grid lines, fine orange particles, and abstract data-flow SVG */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div
          className="absolute -top-40 left-1/3 w-[520px] h-[520px] rounded-full opacity-15 blur-[130px]"
          style={{ background: 'radial-gradient(circle, #FF7A18 0%, transparent 70%)' }}
        />
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 1440 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M-100 620 C 320 540, 620 690, 1020 470 C 1220 360, 1380 410, 1540 310"
            stroke="url(#heroDataFlow)"
            strokeWidth="1.2"
            strokeDasharray="5 7"
          />
          <path
            d="M-100 260 C 280 340, 740 160, 1140 320 C 1310 390, 1420 270, 1540 240"
            stroke="url(#heroDataFlow)"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <circle cx="380" cy="575" r="2.5" fill="#FF7A18" fillOpacity="0.65" />
          <circle cx="880" cy="532" r="3" fill="#FF7A18" fillOpacity="0.8" />
          <circle cx="1140" cy="320" r="2.5" fill="#FF7A18" fillOpacity="0.55" />
          <circle cx="240" cy="292" r="2" fill="#F5F5F5" fillOpacity="0.35" />
          <defs>
            <linearGradient id="heroDataFlow" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF7A18" stopOpacity="0" />
              <stop offset="50%" stopColor="#FF7A18" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#FF7A18" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-6"
        >
          <div className="space-y-2">
            <p className="font-mono text-xs sm:text-sm tracking-wider text-[#FF7A18] font-medium">
              {personal.name}
            </p>
            <p className="text-sm sm:text-base font-medium text-[#A3A3A3]">
              {personal.role}
            </p>
          </div>

          <h1
            className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.08]"
            style={{ textWrap: 'balance' }}
          >
            Building Intelligent Solutions with{' '}
            <span className="text-[#FF7A18]">AI &amp; Machine Learning.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed max-w-2xl">
            {personal.supportingText}
          </p>

          {/* Primary CTA Buttons & Optional Text Link */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => scrollToTarget(e, 'projects')}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B0B0D] bg-[#FF7A18] hover:bg-[#FF8F3D] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18]"
            >
              <span>Explore My Projects</span>
              <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => downloadResumePdf()}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#F5F5F5] bg-[#151515] hover:bg-[#1C1C1F] border border-white/15 hover:border-[#FF7A18]/60 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18]"
            >
              <Download className="w-4 h-4 text-[#FF7A18]" aria-hidden="true" />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToTarget(e, 'contact')}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#A3A3A3] hover:text-[#FF7A18] transition-colors duration-150 whitespace-nowrap shrink-0 underline underline-offset-4 decoration-white/20 hover:decoration-[#FF7A18]"
            >
              <span>Let&apos;s Connect</span>
            </a>
          </div>

          {/* Clean unboxed skill tags with typographic separators */}
          <div className="pt-4 border-t border-white/[0.08]">
            <p className="text-xs font-mono text-[#A3A3A3] leading-relaxed flex flex-wrap items-center gap-x-2.5 gap-y-1">
              {personal.heroTags.map((tag, index) => (
                <React.Fragment key={tag}>
                  <span className="text-[#F5F5F5]/90 font-medium">{tag}</span>
                  {index < personal.heroTags.length - 1 && (
                    <span className="text-[#FF7A18]" aria-hidden="true">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>
        </motion.div>

        {/* Academic & Core Profile Strip (No Project Stats, Added 8.0 CGPA) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div>
            <p className="font-mono text-2xl sm:text-3xl font-bold text-[#FF7A18] tabular-nums">
              8.0 CGPA
            </p>
            <p className="text-xs text-[#A3A3A3] mt-1">
              Current Academic Standing · B.E. CSE (AI &amp; ML)
            </p>
          </div>
          <div>
            <p className="font-mono text-2xl sm:text-3xl font-bold text-[#F5F5F5] tabular-nums">
              91%
            </p>
            <p className="text-xs text-[#A3A3A3] mt-1">
              Higher Secondary Certificate (HSC · 2025)
            </p>
          </div>
          <div>
            <p className="font-mono text-2xl sm:text-3xl font-bold text-[#F5F5F5] tabular-nums">
              Python
            </p>
            <p className="text-xs text-[#A3A3A3] mt-1">
              Core Programming Language for AI &amp; ML
            </p>
          </div>
          <div>
            <p className="font-mono text-2xl sm:text-3xl font-bold text-[#F5F5F5] tabular-nums">
              2025 – 2029
            </p>
            <p className="text-xs text-[#A3A3A3] mt-1">
              Jeppiaar Engineering College · Chennai
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
