import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Subtle Orange Animated Underline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs text-[#FF7A18] tracking-wider uppercase mb-2">
            01. About Me
          </p>
          <div className="inline-block group">
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              {about.heading}
            </h2>
            <div className="mt-3 h-[3px] w-24 bg-gradient-to-r from-[#FF7A18] to-[#FF7A18]/20 rounded-full transition-all duration-300 group-hover:w-full" />
          </div>

          <p className="mt-6 text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
            {about.introduction}
          </p>
        </motion.div>

        {/* Three Minimal Information Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {about.infoCards.map((card, idx) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#151515] border border-white/[0.08] hover:border-[#FF7A18]/60 rounded-xl p-6 transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#A3A3A3] mb-3">
                  <span>{card.label}</span>
                  <span className="text-[#FF7A18] tabular-nums">0{idx + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-[#F5F5F5] leading-snug">
                  {card.value}
                </h3>
              </div>
              <p className="mt-4 pt-4 border-t border-white/[0.06] text-xs text-[#A3A3A3] leading-relaxed">
                {card.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
