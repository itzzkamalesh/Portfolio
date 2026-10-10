import React from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const LeadershipAndStrengthsSection: React.FC = () => {
  const { leadership, strengthsAndInterests } = PORTFOLIO_DATA;

  return (
    <section className="py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Part 1: Leadership & Achievements ("Beyond the Code.") */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-3xl">
            <p className="font-mono text-xs text-[#FF7A18] tracking-wider uppercase mb-2">
              06. Leadership &amp; Service
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              {leadership.heading}
            </h2>
            <div className="mt-3 h-[3px] w-20 bg-gradient-to-r from-[#FF7A18] to-transparent rounded-full" />
          </div>

          <div className="mt-10 bg-[#151515] border border-white/[0.08] hover:border-[#FF7A18]/60 rounded-2xl p-6 sm:p-8 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B0B0D] border border-[#FF7A18]/50 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-[#FF7A18]" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#FF7A18]">
                    <span>{leadership.awardTitle}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#A3A3A3] tabular-nums">{leadership.period}</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F5F5F5] mt-1">
                    {leadership.role} — {leadership.organization}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#A3A3A3] leading-relaxed max-w-3xl">
                    {leadership.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Part 2: Additional Interests, Professional Strengths & Languages */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <p className="font-mono text-xs text-[#FF7A18] tracking-wider uppercase mb-2">
              07. Core Competencies
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F5F5] tracking-tight">
              Areas of Focus, Strengths &amp; Languages.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Areas of Focus */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#151515] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#A3A3A3] pb-3 border-b border-white/[0.06]">
                  <span>AREAS OF FOCUS</span>
                  <span className="text-[#FF7A18]">01</span>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm text-[#F5F5F5]">
                  {strengthsAndInterests.areasOfFocus.map((area) => (
                    <li key={area} className="flex items-center justify-between">
                      <span>{area}</span>
                      <span className="text-xs font-mono text-[#FF7A18]" aria-hidden="true">
                        —
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Professional Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#151515] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#A3A3A3] pb-3 border-b border-white/[0.06]">
                  <span>PROFESSIONAL STRENGTHS</span>
                  <span className="text-[#FF7A18]">02</span>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm text-[#F5F5F5]">
                  {strengthsAndInterests.professionalStrengths.map((strength) => (
                    <li key={strength} className="flex items-center justify-between">
                      <span>{strength}</span>
                      <span className="text-xs font-mono text-[#FF7A18]" aria-hidden="true">
                        —
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.19, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#151515] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#A3A3A3] pb-3 border-b border-white/[0.06]">
                  <span>SPOKEN LANGUAGES</span>
                  <span className="text-[#FF7A18]">03</span>
                </div>
                <div className="mt-4 space-y-4">
                  {strengthsAndInterests.languages.map((item) => (
                    <div
                      key={item.language}
                      className="p-3.5 rounded-xl bg-[#0B0B0D] border border-white/[0.06] flex items-center justify-between gap-2"
                    >
                      <span className="font-display font-semibold text-sm text-[#F5F5F5]">
                        {item.language}
                      </span>
                      <span className="text-xs font-mono text-[#FF7A18]">
                        {item.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
