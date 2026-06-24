'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Slide01_Cover from './slides/Slide01_Cover';
import Slide02_WhyMe from './slides/Slide02_WhyMe';
import Slide03_FounderJourney from './slides/Slide03_FounderJourney';
import Slide04_Problem from './slides/Slide04_Problem';
import Slide05_WhyNow from './slides/Slide05_WhyNow';
import Slide06_Vision from './slides/Slide06_Vision';
import Slide07_WhyAssam from './slides/Slide07_WhyAssam';
import Slide08_MarketOpportunity from './slides/Slide08_MarketOpportunity';
import Slide09_IntroducingQBriz from './slides/Slide09_IntroducingQBriz';
import Slide10_WhyDifferent from './slides/Slide10_WhyDifferent';
import Slide11_MVP from './slides/Slide11_MVP';
import Slide12_BusinessDashboard from './slides/Slide12_BusinessDashboard';
import Slide13_CurrentProgress from './slides/Slide13_CurrentProgress';
import Slide14_GoToMarket from './slides/Slide14_GoToMarket';
import Slide15_BusinessModel from './slides/Slide15_BusinessModel';
import Slide16_ExpansionRoadmap from './slides/Slide16_ExpansionRoadmap';
import Slide17_WhatWeNeed from './slides/Slide17_WhatWeNeed';
import Slide18_ThankYou from './slides/Slide18_ThankYou';

const slides = [
  { id: 1, component: Slide01_Cover },
  { id: 2, component: Slide02_WhyMe },
  { id: 3, component: Slide03_FounderJourney },
  { id: 4, component: Slide04_Problem },
  { id: 5, component: Slide05_WhyNow },
  { id: 6, component: Slide06_Vision },
  { id: 7, component: Slide07_WhyAssam },
  { id: 8, component: Slide08_MarketOpportunity },
  { id: 9, component: Slide09_IntroducingQBriz },
  { id: 10, component: Slide10_WhyDifferent },
  { id: 11, component: Slide11_MVP },
  { id: 12, component: Slide12_BusinessDashboard },
  { id: 13, component: Slide13_CurrentProgress },
  { id: 14, component: Slide14_GoToMarket },
  { id: 15, component: Slide15_BusinessModel },
  { id: 16, component: Slide16_ExpansionRoadmap },
  { id: 17, component: Slide17_WhatWeNeed },
  { id: 18, component: Slide18_ThankYou },
];

export default function QBrizSeedPitchPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error('Fullscreen failed:', err);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error('Exit fullscreen failed:', err);
      });
    }
  }, []);

  const handleScroll = useCallback((e: WheelEvent) => {
    if (e.deltaY > 0) {
      nextSlide();
    } else if (e.deltaY < 0) {
      prevSlide();
    }
  }, [nextSlide, prevSlide]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        prevSlide();
        break;
      case 'f':
      case 'F':
        toggleFullscreen();
        break;
      case 'Escape':
        if (isFullscreen) {
          setIsFullscreen(false);
        }
        break;
    }
  }, [nextSlide, prevSlide, toggleFullscreen, isFullscreen]);

  const exportToPDF = useCallback(() => {
    window.print();
  }, []);

  const resetControlsTimeout = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleScroll, handleKeyDown]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#0A0F1E] fixed inset-0"
      onMouseMove={resetControlsTimeout}
      onClick={resetControlsTimeout}
    >
      {/* Current Slide */}
      <div className="w-full h-full">
        <CurrentSlideComponent />
      </div>

      {/* Navigation Controls */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg text-white backdrop-blur-sm transition-all border border-white/20"
          aria-label="Previous slide"
        >
          ← Prev
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-[#06B6D4] scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg text-white backdrop-blur-sm transition-all border border-white/20"
          aria-label="Next slide"
        >
          Next →
        </button>
      </div>

      {/* Top Controls */}
      <div
        className={`fixed top-8 right-8 flex items-center gap-3 transition-opacity duration-300 z-50 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Fullscreen Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFullscreen();
          }}
          className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg text-white backdrop-blur-sm transition-all border border-white/20 flex items-center justify-center"
          aria-label="Toggle fullscreen"
        >
          {isFullscreen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          )}
        </button>

        {/* Export PDF Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            exportToPDF();
          }}
          className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg text-white backdrop-blur-sm transition-all border border-white/20 flex items-center justify-center"
          aria-label="Export to PDF"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </button>
      </div>

      {/* Slide Counter */}
      <div
        className={`fixed top-8 left-8 text-white/50 text-sm transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Keyboard Hints */}
      <div
        className={`fixed bottom-8 right-8 text-white/30 text-xs transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-right">
          <div>← → or Scroll to navigate</div>
          <div>F for Fullscreen</div>
        </div>
      </div>

      {/* Print Styles for PDF Export */}
      <style jsx global>{`
        @media print {
          @page {
            size: landscape;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
          }
          .fixed {
            position: static !important;
          }
        }
      `}</style>
    </div>
  );
}
