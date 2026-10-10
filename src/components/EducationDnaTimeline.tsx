import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationDnaTimeline: React.FC = () => {
  const { education } = PORTFOLIO_DATA;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="education"
      className="py-24 border-b border-white/[0.06] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl md:mx-auto md:text-center"
        >
          <p className="font-mono text-xs text-[#FF7A18] tracking-wider uppercase mb-2">
            04. Education Timeline
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            My Learning Journey.
          </h2>
          <div className="mt-3 h-[3px] w-24 md:mx-auto bg-gradient-to-r from-[#FF7A18] to-transparent rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-[#A3A3A3]">
            Academic progression in Computer Science, Artificial Intelligence, and Machine Learning.
          </p>
        </motion.div>

        {/* Redesigned Architectural Helix Spine & Milestone Grid */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          {/* Desktop Central Interwoven Helix Spine */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[140px] pointer-events-none"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 140 780"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="strandOrangeGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF7A18" stopOpacity="0.15" />
                  <stop offset="15%" stopColor="#FF7A18" stopOpacity="0.95" />
                  <stop offset="85%" stopColor="#FF7A18" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#FF7A18" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="strandSilverGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#A3A3A3" stopOpacity="0.1" />
                  <stop offset="20%" stopColor="#A3A3A3" stopOpacity="0.45" />
                  <stop offset="80%" stopColor="#A3A3A3" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#A3A3A3" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Center subtle guide axis */}
              <line
                x1="70"
                y1="20"
                x2="70"
                y2="760"
                stroke="#F5F5F5"
                strokeOpacity="0.06"
                strokeDasharray="3 6"
                strokeWidth="1"
              />

              {/* Horizontal Base-Pair Rungs inside Helix */}
              {[65, 95, 165, 195, 230, 295, 325, 425, 455, 490, 555, 585, 685, 715].map(
                (y, idx) => {
                  const phase = (y / 260) * Math.PI;
                  const offset = Math.sin(phase) * 34;
                  const x1 = 70 + offset;
                  const x2 = 70 - offset;
                  return (
                    <g key={y}>
                      <line
                        x1={x1}
                        y1={y}
                        x2={x2}
                        y2={y}
                        stroke={idx % 2 === 0 ? '#FF7A18' : '#A3A3A3'}
                        strokeOpacity={idx % 2 === 0 ? '0.35' : '0.2'}
                        strokeWidth="1.2"
                      />
                      <circle
                        cx={x1}
                        cy={y}
                        r="2"
                        fill="#FF7A18"
                        fillOpacity="0.7"
                      />
                      <circle
                        cx={x2}
                        cy={y}
                        r="2"
                        fill="#A3A3A3"
                        fillOpacity="0.5"
                      />
                    </g>
                  );
                }
              )}

              {/* Smooth Cubic Bezier Strand B (Secondary Muted Strand) */}
              <path
                d="M 70 0 C 20 65, 20 195, 70 260 C 120 325, 120 455, 70 520 C 20 585, 20 715, 70 780"
                fill="none"
                stroke="url(#strandSilverGrad)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Smooth Cubic Bezier Strand A (Primary Orange Strand) */}
              <path
                d="M 70 0 C 120 65, 120 195, 70 260 C 20 325, 20 455, 70 520 C 120 585, 120 715, 70 780"
                fill="none"
                stroke="url(#strandOrangeGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Mobile Clean Vertical Double-Track */}
          <div
            className="md:hidden absolute left-4 top-4 bottom-4 w-5 pointer-events-none"
            aria-hidden="true"
          >
            <div className="h-full w-full flex items-center justify-between px-1">
              <div className="w-[2px] h-full bg-gradient-to-b from-[#FF7A18]/20 via-[#FF7A18] to-[#FF7A18]/20" />
              <div className="w-[1px] h-full bg-white/15" />
            </div>
          </div>

          {/* Milestone Cards with Synchronized Center Nodes */}
          <div className="space-y-12 md:space-y-16 relative z-10">
            {education.map((item, idx) => {
              const isLeft = item.align === 'left';
              const isHovered = hoveredId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Desktop Center Helix Node Badge */}
                  <div
                    className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center"
                    aria-hidden="true"
                  >
                    <div
                      className={`w-10 h-10 rounded-full bg-[#0B0B0D] border-2 flex items-center justify-center transition-all duration-200 ${
                        isHovered
                          ? 'border-[#FF7A18] scale-110 shadow-[0_0_24px_rgba(255,122,24,0.6)]'
                          : 'border-[#FF7A18]/80 shadow-[0_0_12px_rgba(255,122,24,0.25)]'
                      }`}
                    >
                      <span className="font-mono text-xs font-bold text-[#FF7A18] tabular-nums">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Node */}
                  <div
                    className={`md:hidden absolute left-[13px] top-8 w-4 h-4 rounded-full border-2 border-[#FF7A18] bg-[#0B0B0D] z-20 transition-transform ${
                      isHovered ? 'scale-125 bg-[#FF7A18]' : ''
                    }`}
                    aria-hidden="true"
                  />

                  {/* Academic Milestone Card */}
                  <div
                    className={`pl-12 md:pl-0 w-full md:w-[calc(50%-56px)] relative ${
                      isLeft ? 'md:pr-4' : 'md:pl-4'
                    }`}
                  >
                    {/* Horizontal Connector Rung from Card to Center Helix Node */}
                    <div
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[1.5px] w-10 transition-colors duration-200 ${
                        isHovered ? 'bg-[#FF7A18]' : 'bg-[#FF7A18]/40'
                      } ${isLeft ? '-right-9' : '-left-9'}`}
                      aria-hidden="true"
                    />

                    <div
                      className={`bg-[#151515] border rounded-2xl p-6 transition-all duration-200 ${
                        isHovered
                          ? 'border-[#FF7A18] shadow-[0_0_30px_-10px_rgba(255,122,24,0.35)] -translate-y-0.5'
                          : 'border-white/[0.08] hover:border-[#FF7A18]/70'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono mb-3">
                        <span className="text-[#FF7A18] font-semibold">
                          {item.milestoneNumber}
                        </span>
                        <span className="text-[#A3A3A3] tabular-nums">{item.period}</span>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-lg bg-[#0B0B0D] border border-[#FF7A18]/40 flex items-center justify-center shrink-0 mt-0.5">
                          <GraduationCap
                            className="w-4 h-4 text-[#FF7A18]"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-[#F5F5F5]">
                            {item.degree}
                          </h3>
                          {item.specialization && (
                            <p className="text-sm font-medium text-[#F5F5F5]/90 mt-1">
                              {item.specialization}
                            </p>
                          )}
                          <p className="text-sm text-[#A3A3A3] mt-1">{item.institution}</p>
                        </div>
                      </div>

                      {/* Academic Metadata / Score / Graduation / Coursework */}
                      <div className="mt-4 pt-4 border-t border-white/[0.08] space-y-2 text-xs">
                        {item.score && (
                          <div className="flex items-center justify-between font-mono">
                            <span className="text-[#A3A3A3]">Academic Score</span>
                            <span className="text-[#FF7A18] font-semibold tabular-nums">
                              {item.score}
                            </span>
                          </div>
                        )}

                        {item.expectedGraduation && (
                          <div className="flex items-center justify-between font-mono">
                            <span className="text-[#A3A3A3]">Expected Graduation</span>
                            <span className="text-[#F5F5F5] font-semibold">
                              {item.expectedGraduation}
                            </span>
                          </div>
                        )}

                        {item.coursework && item.coursework.length > 0 && (
                          <div className="pt-1">
                            <span className="font-mono text-[#A3A3A3] block mb-1">
                              Relevant Coursework:
                            </span>
                            <p className="font-mono text-[#F5F5F5] flex flex-wrap items-center gap-x-2 gap-y-1">
                              {item.coursework.map((course, cIdx) => (
                                <React.Fragment key={course}>
                                  <span>{course}</span>
                                  {cIdx < item.coursework!.length - 1 && (
                                    <span className="text-[#FF7A18]" aria-hidden="true">
                                      ·
                                    </span>
                                  )}
                                </React.Fragment>
                              ))}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
