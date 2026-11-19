import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, X, FileImage } from 'lucide-react';
import { PORTFOLIO_DATA, CertificationItem } from '../data/portfolioData';


export const CertificationsSlider: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxCert, setLightboxCert] = useState<CertificationItem | null>(null);
  const [failedStaticPaths, setFailedStaticPaths] = useState<Record<string, boolean>>({});
  const [touchStartX, setTouchStartX] = useState<number | null>(null);


  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % certifications.length);
  }, [certifications.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  }, [certifications.length]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isPaused || lightboxCert || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      nextSlide();
    }, 3500);

    return () => window.clearInterval(timer);
  }, [isPaused, lightboxCert, nextSlide]);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxCert) setLightboxCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxCert]);


  const getResolvedImage = (cert: CertificationItem): string | null => {
    if (!failedStaticPaths[cert.id]) return cert.imagePath;
    return null;
  };


  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };


  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) > 45) {
      if (deltaX < 0) nextSlide();
      else prevSlide();
    }
    setTouchStartX(null);
  };


  return (
    <section id="certifications" className="py-24 border-b border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Carousel Controls */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="font-mono text-xs text-[#FF7A18] tracking-wider uppercase mb-2">
              05. Verified Credentials
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-[#F5F5F5] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Certifications &amp; Continuous Learning.
            </h2>
            <div className="mt-3 h-[3px] w-24 bg-gradient-to-r from-[#FF7A18] to-transparent rounded-full" />
          </div>


          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous certificate"
