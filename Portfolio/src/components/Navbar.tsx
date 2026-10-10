import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { downloadResumePdf } from '../utils/resumePdf';

interface NavbarProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0B0B0D]/90 backdrop-blur-md border-b border-white/[0.08]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="font-display text-xl font-bold tracking-tight text-[#F5F5F5] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#FF7A18] rounded-sm"
          aria-label="Kamalesh R Home"
        >
          {PORTFOLIO_DATA.personal.initials}
          <span className="text-[#FF7A18]">.</span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#FF7A18] rounded-sm ${
                  isActive ? 'text-[#F5F5F5]' : 'text-[#A3A3A3] hover:text-[#F5F5F5]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#FF7A18] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action on desktop + accessible mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => downloadResumePdf()}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0B0B0D] bg-[#FF7A18] hover:bg-[#FF8F3D] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A18]"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Download Resume</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-[#F5F5F5] hover:border-[#FF7A18]/60 transition-colors focus-visible:outline-2 focus-visible:outline-[#FF7A18]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0B0B0D]/95 backdrop-blur-xl border-b border-white/10 px-6 py-5"
        >
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`py-2 text-base font-medium transition-colors flex items-center justify-between ${
                    isActive ? 'text-[#FF7A18]' : 'text-[#A3A3A3] hover:text-[#F5F5F5]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A18]" />}
                </a>
              );
            })}
            <div className="pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  downloadResumePdf();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#0B0B0D] bg-[#FF7A18] hover:bg-[#FF8F3D] rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
