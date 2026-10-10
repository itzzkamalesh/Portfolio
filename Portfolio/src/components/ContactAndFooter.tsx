import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin, Download, ArrowUp, Github } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/resumePdf';

export const ContactAndFooter: React.FC = () => {
  const { contact, personal } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-24 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#151515] border border-white/[0.08] rounded-2xl p-8 sm:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="font-mono text-xs text-[#FF7A18] tracking-wider uppercase">
                  08. Get In Touch
                </p>
                <h2
                  className="font-display text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight"
                  style={{ textWrap: 'balance' }}
                >
                  {contact.heading}
                </h2>
                <p className="text-base text-[#A3A3A3] leading-relaxed max-w-2xl">
                  {contact.supportingText}
                </p>

                {/* Action Buttons: Email Me, LinkedIn Profile, Resume Download */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B0B0D] bg-[#FF7A18] hover:bg-[#FF8F3D] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18]"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>Email Me</span>
                  </a>

                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#F5F5F5] bg-[#0B0B0D] hover:bg-white/[0.04] border border-white/15 hover:border-[#FF7A18] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18]"
                  >
                    <Linkedin className="w-4 h-4 text-[#FF7A18]" aria-hidden="true" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => downloadResumePdf()}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#F5F5F5] bg-[#0B0B0D] hover:bg-white/[0.04] border border-white/15 hover:border-[#FF7A18] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18]"
                  >
                    <Download className="w-4 h-4 text-[#FF7A18]" aria-hidden="true" />
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>

              {/* Verified Contact Details Card */}
              <div className="lg:col-span-5 bg-[#0B0B0D] border border-white/[0.08] rounded-xl p-6 space-y-5">
                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#FF7A18] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="block font-mono text-xs text-[#A3A3A3]">Email Address</span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm font-medium text-[#F5F5F5] hover:text-[#FF7A18] transition-colors break-all"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Linkedin className="w-5 h-5 text-[#FF7A18] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="block font-mono text-xs text-[#A3A3A3]">LinkedIn</span>
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#F5F5F5] hover:text-[#FF7A18] transition-colors break-all"
                    >
                      {contact.linkedinDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#FF7A18] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="block font-mono text-xs text-[#A3A3A3]">Location</span>
                    <span className="text-sm font-medium text-[#F5F5F5]">{contact.location}</span>
                  </div>
                </div>

                {contact.showPhoneNumber && contact.phoneNumber && (
                  <div className="pt-3 border-t border-white/[0.06] text-xs font-mono text-[#A3A3A3]">
                    Phone: <span className="text-[#F5F5F5]">{contact.phoneNumber}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-display text-lg font-bold text-[#F5F5F5]">
              {personal.initials}
              <span className="text-[#FF7A18]">.</span>
            </span>
            <span className="text-white/20" aria-hidden="true">
              |
            </span>
            <p className="text-xs sm:text-sm text-[#A3A3A3]">
              Designed &amp; Developed with curiosity by Kamalesh R. &copy; {currentYear}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {contact.githubUrl && (
              <a
                href={contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-[#151515] border border-white/10 hover:border-[#FF7A18] text-[#A3A3A3] hover:text-[#F5F5F5] flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-lg bg-[#151515] border border-white/10 hover:border-[#FF7A18] text-[#A3A3A3] hover:text-[#F5F5F5] flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${contact.email}`}
              aria-label="Send Email"
              className="w-9 h-9 rounded-lg bg-[#151515] border border-white/10 hover:border-[#FF7A18] text-[#A3A3A3] hover:text-[#F5F5F5] flex items-center justify-center transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#151515] border border-white/10 hover:border-[#FF7A18] text-xs font-mono text-[#F5F5F5] transition-colors cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#FF7A18]" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};
