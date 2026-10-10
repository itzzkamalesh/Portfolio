import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs text-[#FF7A18] tracking-wider uppercase mb-2">
            03. Featured Projects
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Projects That Solve Problems.
          </h2>
          <div className="mt-3 h-[3px] w-24 bg-gradient-to-r from-[#FF7A18] to-transparent rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#A3A3A3]">
            Concise overview of applied machine learning projects in text classification,
            predictive analytics, and imbalanced dataset modeling.
          </p>
        </motion.div>

        {/* Three Clean, Short-Info Project Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#151515] border border-white/[0.08] hover:border-[#FF7A18] rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Editorial Number & Category Kicker */}
                <div className="flex items-center justify-between text-xs font-mono text-[#A3A3A3]">
                  <span>{project.category}</span>
                  <span className="text-[#FF7A18] font-semibold tabular-nums">
                    {project.index}
                  </span>
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#F5F5F5] group-hover:text-[#FF7A18] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#A3A3A3] leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Short Key Highlights (No Stats/Percentages) */}
                <ul className="space-y-2 text-xs text-[#F5F5F5]/90 pt-2">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#FF7A18] font-mono mt-0.5" aria-hidden="true">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer: Clean Unboxed Technology Metadata */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
                <p className="text-xs font-mono text-[#A3A3A3] flex flex-wrap items-center gap-x-2 gap-y-1">
                  {project.technologies.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="text-[#F5F5F5]">{tech}</span>
                      {idx < project.technologies.length - 1 && (
                        <span className="text-[#FF7A18]" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </p>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-[#FF7A18] hover:underline shrink-0"
                  >
                    <span>Code</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
