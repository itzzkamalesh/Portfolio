import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Upload,
  X,
  FileImage,
  RotateCcw,
} from 'lucide-react';
import { PORTFOLIO_DATA, CertificationItem } from '../data/portfolioData';

const CERT_STORAGE_PREFIX = 'kamalesh_cert_image_';

export const CertificationsSlider: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxCert, setLightboxCert] = useState<CertificationItem | null>(null);
  const [customImages, setCustomImages] = useState<Record<string, string>>({});
  const [failedStaticPaths, setFailedStaticPaths] = useState<Record<string, boolean>>({});
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  useEffect(() => {
    const loaded: Record<string, string> = {};
    certifications.forEach((cert) => {
      const saved = localStorage.getItem(`${CERT_STORAGE_PREFIX}${cert.id}`);
      if (saved) {
        loaded[cert.id] = saved;
      }
    });
    setCustomImages(loaded);
  }, [certifications]);

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
      if (e.key === 'Escape' && lightboxCert) {
        setLightboxCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxCert]);

  const handleUploadCertificate = (certId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const cert = certifications.find((c) => c.id === certId)!;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setCustomImages((prev) => ({ ...prev, [certId]: reader.result as string }));
        try {
          localStorage.setItem(`${CERT_STORAGE_PREFIX}${cert.id}`, reader.result);
        } catch {
          // Ignore quota warnings
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetCertificate = (certId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomImages((prev) => {
      const updated = { ...prev };
      delete updated[certId];
      return updated;
    });
    localStorage.removeItem(`${CERT_STORAGE_PREFIX}${certId}`);
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

  const getResolvedImage = (cert: CertificationItem): string | null => {
    if (customImages[cert.id]) return customImages[cert.id];
    if (!failedStaticPaths[cert.id]) return cert.imagePath;
    return null;
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
              className="w-10 h-10 rounded-lg bg-[#151515] border border-white/10 hover:border-[#FF7A18] text-[#F5F5F5] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF7A18]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next certificate"
              className="w-10 h-10 rounded-lg bg-[#151515] border border-white/10 hover:border-[#FF7A18] text-[#F5F5F5] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF7A18]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal Carousel Container with Center Card + Adjacent Previews on Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-roledescription="carousel"
          aria-label="Certifications Image Slider"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {[-1, 0, 1].map((offset) => {
              const index =
                (activeIndex + offset + certifications.length) % certifications.length;
              const cert = certifications[index];
              const isCenter = offset === 0;
              const resolvedSrc = getResolvedImage(cert);

              return (
                <div
                  key={`${cert.id}-${offset}`}
                  onClick={() => {
                    if (!isCenter) {
                      setActiveIndex(index);
                    } else {
                      setLightboxCert(cert);
                    }
                  }}
                  className={`${
                    isCenter
                      ? 'lg:col-span-6 z-20 scale-100 opacity-100'
                      : 'hidden lg:block lg:col-span-3 z-10 scale-95 opacity-55 hover:opacity-80'
                  } transition-all duration-300 cursor-pointer`}
                >
                  <div
                    className={`bg-[#151515] rounded-2xl overflow-hidden border transition-colors ${
                      isCenter
                        ? 'border-[#FF7A18] shadow-[0_0_35px_-12px_rgba(255,122,24,0.35)]'
                        : 'border-white/[0.08]'
                    }`}
                  >
                    {/* Certificate Image / Upload Placeholder Frame */}
                    <div className="relative aspect-[16/11] bg-[#0B0B0D] flex items-center justify-center p-4 border-b border-white/[0.06]">
                      {resolvedSrc ? (
                        <img
                          src={resolvedSrc}
                          alt={`${cert.title} certificate issued by ${cert.issuer}`}
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setFailedStaticPaths((prev) => ({ ...prev, [cert.id]: true }))
                          }
                          className="w-full h-full object-contain rounded-lg"
                        />
                      ) : (
                        <div className="w-full h-full rounded-xl border border-dashed border-[#FF7A18]/45 bg-[#111114] p-5 flex flex-col items-center text-center justify-between">
                          <div className="w-full flex items-center justify-between text-[11px] font-mono text-[#A3A3A3]">
                            <span>CERTIFICATE ASSET SLOT</span>
                            <span className="text-[#FF7A18]">UPLOAD PLACEHOLDER</span>
                          </div>

                          <div className="my-auto space-y-2 max-w-md px-2">
                            <FileImage
                              className="w-9 h-9 text-[#FF7A18] mx-auto stroke-[1.5]"
                              aria-hidden="true"
                            />
                            <p className="font-display text-base sm:text-lg font-bold text-[#F5F5F5]">
                              {cert.title}
                            </p>
                            <p className="text-xs font-mono text-[#FF7A18]">
                              Issuer: {cert.issuer} · {cert.year}
                            </p>
                            <p className="text-[11px] text-[#A3A3A3] leading-relaxed">
                              Place actual certificate in{' '}
                              <code className="text-[#F5F5F5] font-mono">
                                public{cert.imagePath}
                              </code>{' '}
                              or upload below to display the full image.
                            </p>
                          </div>

                          <div className="w-full flex items-center justify-center gap-2 pt-2">
                            <input
                              ref={(el) => {
                                fileInputRefs.current[cert.id] = el;
                              }}
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleUploadCertificate(cert.id, e)}
                              className="hidden"
                            />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                fileInputRefs.current[cert.id]?.click();
                              }}
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#0B0B0D] bg-[#FF7A18] hover:bg-[#FF8F3D] rounded-lg transition-colors cursor-pointer"
                            >
                              <Upload className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>Upload Certificate Image</span>
                            </button>
                          </div>
                        </div>
                      )}

                      {isCenter && (
                        <div className="absolute top-3 right-3 flex items-center gap-1.5">
                          {customImages[cert.id] && (
                            <button
                              type="button"
                              onClick={(e) => handleResetCertificate(cert.id, e)}
                              title="Reset uploaded image"
                              className="p-2 rounded-lg bg-[#0B0B0D]/90 border border-white/15 text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors cursor-pointer"
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setLightboxCert(cert);
                            }}
                            title="Open certificate in full lightbox"
                            className="p-2 rounded-lg bg-[#0B0B0D]/90 border border-white/15 text-[#F5F5F5] hover:border-[#FF7A18] transition-colors cursor-pointer"
                          >
                            <Maximize2 className="w-3.5 h-3.5 text-[#FF7A18]" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Certification Name and Issuer Below Preview */}
                    <div className="p-5 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-display text-base sm:text-lg font-bold text-[#F5F5F5] line-clamp-1">
                          {cert.title}
                        </h3>
                        <p className="text-xs font-mono text-[#A3A3A3] mt-1">
                          Issued by <span className="text-[#FF7A18]">{cert.issuer}</span> ·{' '}
                          <span className="tabular-nums">{cert.year}</span>
                        </p>
                      </div>

                      {isCenter && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            fileInputRefs.current[cert.id]?.click();
                          }}
                          className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#F5F5F5] bg-[#0B0B0D] border border-white/10 hover:border-[#FF7A18] rounded-lg transition-colors cursor-pointer"
                        >
                          <Upload className="w-3.5 h-3.5 text-[#FF7A18]" aria-hidden="true" />
                          <span>{customImages[cert.id] ? 'Replace' : 'Upload'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {certifications.map((cert, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={cert.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to certificate ${idx + 1}: ${cert.title}`}
                  aria-current={isActive ? 'true' : 'false'}
                  className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                    isActive ? 'w-8 bg-[#FF7A18]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Certificate Lightbox Modal */}
      {lightboxCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={() => setLightboxCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-cert-title"
        >
          <div
            className="relative w-full max-w-4xl bg-[#151515] border border-[#FF7A18]/60 rounded-2xl p-6 shadow-2xl max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div>
                <h3
                  id="lightbox-cert-title"
                  className="font-display text-xl sm:text-2xl font-bold text-[#F5F5F5]"
                >
                  {lightboxCert.title}
                </h3>
                <p className="text-xs font-mono text-[#A3A3A3] mt-0.5">
                  Issuer: <span className="text-[#FF7A18]">{lightboxCert.issuer}</span> ·{' '}
                  {lightboxCert.year}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxCert(null)}
                aria-label="Close certificate lightbox"
                className="p-2 rounded-lg bg-[#0B0B0D] border border-white/10 text-[#A3A3A3] hover:text-[#F5F5F5] hover:border-[#FF7A18] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-4 flex-1 overflow-auto bg-[#0B0B0D] rounded-xl p-4 flex items-center justify-center min-h-[320px]">
              {getResolvedImage(lightboxCert) ? (
                <img
                  src={getResolvedImage(lightboxCert)!}
                  alt={`${lightboxCert.title} — ${lightboxCert.issuer}`}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[65vh] object-contain mx-auto"
                />
              ) : (
                <div className="text-center max-w-md py-12 px-4 space-y-4">
                  <FileImage className="w-12 h-12 text-[#FF7A18] mx-auto stroke-[1.5]" />
                  <div className="space-y-1">
                    <p className="font-display text-lg font-bold text-[#F5F5F5]">
                      Certificate Image Upload Placeholder
                    </p>
                    <p className="text-xs text-[#A3A3A3]">
                      {lightboxCert.title} — {lightboxCert.issuer} ({lightboxCert.year})
                    </p>
                  </div>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed">
                    To display your official certificate, upload the image file below or place it in{' '}
                    <code className="text-[#F5F5F5] font-mono">
                      public{lightboxCert.imagePath}
                    </code>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => fileInputRefs.current[lightboxCert.id]?.click()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0B0B0D] bg-[#FF7A18] hover:bg-[#FF8F3D] rounded-lg transition-colors cursor-pointer"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Select Certificate Image</span>
                  </button>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#A3A3A3]">
              <span>Topics: {lightboxCert.focusTopics.join(' · ')}</span>
              <span>Asset Path: public{lightboxCert.imagePath}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
