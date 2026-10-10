/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationDnaTimeline } from './components/EducationDnaTimeline';
import { CertificationsSlider } from './components/CertificationsSlider';
import { LeadershipAndStrengthsSection } from './components/LeadershipAndStrengthsSection';
import { ContactAndFooter } from './components/ContactAndFooter';

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'education',
  'certifications',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let current = 'home';

      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
        current = 'contact';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F5F5F5] selection:bg-[#FF7A18]/25 selection:text-[#F5F5F5]">
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationDnaTimeline />
        <CertificationsSlider />
        <LeadershipAndStrengthsSection />
      </main>
      <ContactAndFooter />
    </div>
  );
}

