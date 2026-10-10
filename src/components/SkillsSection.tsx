import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Cpu, Wrench } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code2 className="w-4 h-4 text-[#FF7A18]" aria-hidden="true" />;
      case 'ai-ml':
        return <Cpu className="w-4 h-4 text-[#FF7A18]" aria-hidden="true" />;
      default:
        return <Wrench className="w-4 h-4 text-[#FF7A18]" aria-hidden="true" />;
    }
  };

  const visibleCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="font-mono text-xs text-[#FF7A18] tracking-wider uppercase mb-2">
              02. Technical Skills
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Core AI &amp; Engineering Stack.
            </h2>
            <div className="mt-3 h-[3px] w-20 bg-gradient-to-r from-[#FF7A18] to-transparent rounded-full" />
          </div>

          {/* Interactive Category Filter Control */}
          <div
            className="inline-flex items-center gap-1 p-1 bg-[#151515] border border-white/[0.08] rounded-lg self-start"
            role="tablist"
            aria-label="Filter skills by category"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#FF7A18] text-[#0B0B0D] font-semibold'
                  : 'text-[#A3A3A3] hover:text-[#F5F5F5]'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#FF7A18] text-[#0B0B0D] font-semibold'
                    : 'text-[#A3A3A3] hover:text-[#F5F5F5]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Dashboard Categories */}
        <div className="mt-12 space-y-12">
          {visibleCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  {getCategoryIcon(category.id)}
                  <h3 className="font-display text-xl font-semibold text-[#F5F5F5]">
                    {category.title}
                  </h3>
                  {category.statusLabel === 'Learning' && (
                    <span className="font-mono text-xs text-[#FF7A18] ml-1">
                      · Learning
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#A3A3A3]">{category.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="group bg-[#151515] border border-white/[0.08] hover:border-[#FF7A18] rounded-xl p-4 transition-colors duration-150 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-display text-sm font-semibold text-[#F5F5F5] group-hover:text-[#FF7A18] transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[11px] text-[#FF7A18]">
                        {category.statusLabel}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-[#A3A3A3] leading-relaxed">
                      {skill.context}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
