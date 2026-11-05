import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { FeaturePreview } from "./Feature/FeaturePreview";
import { features } from "./Feature/featuresData";
import type { FeatureId } from "./Feature/featuresData";

const FEATURE_AUTOPLAY_MS = 5000;

export const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const featureButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndexRef = useRef(activeIndex);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused || !isVisible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % features.length;
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }, FEATURE_AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, isVisible, activeIndex]);

  const selectFeature = (index: number) => {
    activeIndexRef.current = index;
    setActiveIndex(index);
  };

  const handleSelectFeatureById = (id: FeatureId) => {
    const idx = features.findIndex((f) => f.id === id);
    if (idx !== -1) {
      selectFeature(idx);
    }
  };

  useEffect(() => {
    const list = listRef.current;
    const button = featureButtonRefs.current[activeIndex];
    if (!list || !button) return;

    const listBounds = list.getBoundingClientRect();
    const buttonBounds = button.getBoundingClientRect();

    if (buttonBounds.top < listBounds.top) {
      list.scrollTop -= listBounds.top - buttonBounds.top;
    } else if (buttonBounds.bottom > listBounds.bottom) {
      list.scrollTop += buttonBounds.bottom - listBounds.bottom;
    }
  }, [activeIndex]);

  const activeFeature = features[activeIndex];

  return (
    <section
      id="features"
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative z-0 scroll-mt-16 bg-surface px-3 py-6 text-on-surface sm:px-6 sm:py-8 lg:scroll-mt-20 lg:px-8 lg:py-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-secondary sm:text-xs">
            Product features
          </p>
          <h2 className="mt-1 font-display text-xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-2xl lg:text-3xl">
            Everything You Need to Manage Your Quotations
          </h2>
          <p className="mx-auto mt-1 max-w-2xl text-[11px] leading-relaxed text-on-surface-variant sm:text-xs">
            Create professional quotations, manage products and customers,
            generate PDFs, and keep your entire quotation workflow organized in
            one place.
          </p>
        </header>

        <div className="mt-4 grid items-start gap-6 lg:mt-5 lg:grid-cols-[0.74fr_1.26fr] xl:grid-cols-[0.70fr_1.30fr] lg:gap-8">
          <div className="order-2 lg:order-1">
            <div className="mb-2 flex items-center justify-between border-b border-outline-variant/40 pb-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant">
                Explore the workspace
              </p>
              <span className="text-[11px] tabular-nums text-on-surface-variant font-mono">
                {String(features.indexOf(activeFeature) + 1).padStart(2, "0")}{" "}
                <span className="px-0.5 text-outline">/</span>{" "}
                {String(features.length).padStart(2, "0")}
              </span>
            </div>
            <p className="mb-2 text-[10px] text-on-surface-variant">
              Hover or select a feature · Auto-playing
            </p>

            <ul
              ref={listRef}
              aria-label="Product features"
              className="feature-list-scroll divide-y divide-outline-variant/30 lg:max-h-[380px] lg:overflow-y-auto lg:pr-1.5"
            >
              {features.map((feature, index) => {
                const Icon = feature.Icon;
                const isActive = index === activeIndex;

                return (
                  <li key={feature.id}>
                    <button
                      ref={(element) => {
                        featureButtonRefs.current[index] = element;
                      }}
                      type="button"
                      aria-pressed={isActive}
                      onMouseEnter={() => selectFeature(index)}
                      onFocus={() => selectFeature(index)}
                      onClick={() => selectFeature(index)}
                      className={`group flex w-full items-start gap-2.5 py-2 text-left transition-colors sm:gap-3 sm:py-2.5 ${
                        isActive ? "text-primary-container font-semibold" : "text-on-surface"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-colors ${
                          isActive
                            ? "border-primary-container/20 bg-primary-container text-white"
                            : "border-outline-variant/50 bg-white text-on-surface-variant group-hover:border-primary-container/30 group-hover:text-primary-container"
                        }`}
                        aria-hidden="true"
                      >
                        <Icon size={14} strokeWidth={1.8} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-2">
                          <span className="font-display text-xs font-bold sm:text-[13px]">
                            {feature.title}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="hidden text-[9px] font-medium tabular-nums text-outline sm:inline">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <ArrowUpRight
                              size={13}
                              aria-hidden="true"
                              className={`shrink-0 transition-transform duration-200 ${
                                isActive
                                  ? "translate-x-0.5 -translate-y-0.5 text-primary-container"
                                  : "text-outline group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              }`}
                            />
                          </span>
                        </span>
                        <span className="mt-0.5 block max-w-xl text-[10px] leading-4 text-on-surface-variant line-clamp-1 sm:line-clamp-2">
                          {feature.description}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <p className="mt-3 flex items-center gap-1.5 text-[11px] text-on-surface-variant">
              <Check size={13} className="text-secondary" aria-hidden="true" />
              One organized workspace for your quotation workflow
            </p>
          </div>

          <div className="order-1 min-w-0 lg:order-2">
            <FeaturePreview
              feature={activeFeature}
              onSelectFeature={handleSelectFeatureById}
              onInteraction={() => setIsPaused(true)}
              onLeave={() => setIsPaused(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
