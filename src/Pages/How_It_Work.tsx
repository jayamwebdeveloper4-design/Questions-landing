import React, { useEffect, useState, useRef } from "react";
import {
  steps,
  AUTOPLAY_MS,
  HowItWorksHero,
  StepContent,
  SliderControls,
  StepPreview,
} from "./HowItWorks";

export const How_It_Work: React.FC = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [paused, setPaused] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const activeRef = useRef(active);

  const total = steps.length;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsSectionVisible(entry.isIntersecting);
    }, { threshold: 0.1 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const goTo = (index: number) => {
    if (index === active) return;
    activeRef.current = index;
    setDirection(index > active ? "next" : "prev");
    setActive(index);
  };

  const next = () => {
    activeRef.current = (activeRef.current + 1) % total;
    setDirection("next");
    setActive(activeRef.current);
  };

  const prev = () => {
    activeRef.current = (activeRef.current - 1 + total) % total;
    setDirection("prev");
    setActive(activeRef.current);
  };

  // Auto slide (paused on hover)
  useEffect(() => {
    if (
      paused ||
      !isSectionVisible ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, isSectionVisible, active]);

  const step = steps[active];

  return (
    <section
      id="howItWorks"
      ref={sectionRef}
      className="how-it-works-section relative flex min-h-[calc(100svh-8rem)] w-full flex-col justify-center overflow-x-clip bg-surface text-on-surface scroll-mt-16 py-12 sm:py-16 lg:py-20"
    >
        {/* Background Ambient Glows (Contained) */}
        <div
          className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#B2EFD8]/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#E5EEFF]/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="how-it-works-content relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col justify-center">
          {/* Header Title */}
          <HowItWorksHero />

          {/* Interactive Slider Grid */}
          <div
            className="how-it-works-grid mt-6 sm:mt-8 lg:mt-8 grid w-full items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 xl:gap-14"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Left Content Column */}
            <div className="max-w-2xl flex flex-col justify-center">
              <StepContent step={step} direction={direction} />

              <div className="mt-5 sm:mt-6">
                <SliderControls
                  total={total}
                  active={active}
                  onPrev={prev}
                  onNext={next}
                  onGoTo={goTo}
                  stepLabels={["Customer", "Quotation", "Customize", "Send PDF"]}
                />
              </div>
            </div>

            {/* Right Visual: Compact Quotation Proposal Card */}
            <div className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:ml-auto pb-4">
              <StepPreview steps={steps} active={active} />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideNext {
            from { opacity: 0; transform: translateX(32px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes slidePrev {
            from { opacity: 0; transform: translateX(-32px); }
            to   { opacity: 1; transform: translateX(0); }
          }

          .animate-fade-up { animation: fadeUp 0.8s ease-out both; }
          .slide-in-next   { animation: slideNext 0.5s ease-out both; }
          .slide-in-prev   { animation: slidePrev 0.5s ease-out both; }

          @media (prefers-reduced-motion: reduce) {
            .animate-fade-up,
            .slide-in-next,
            .slide-in-prev { animation: none; }
            * { scroll-behavior: auto !important; transition: none !important; }
          }

          @media (min-width: 1024px) and (max-height: 800px) {
            .how-it-works-section { padding-block: clamp(2.5rem, 5vh, 4rem); }
            .how-it-works-content h1 { font-size: clamp(2rem, 3.2vw, 2.75rem); }
            .how-it-works-grid { margin-top: 1rem; }
            .how-it-works-preview-card { min-height: 400px; }
          }

          @media (min-width: 1024px) and (max-height: 700px) {
            .how-it-works-preview-card { min-height: 350px; }
          }
        `}</style>
    </section>
  );
};

export default How_It_Work;