import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SliderControlsProps {
  total: number;
  active: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
  stepLabels?: string[];
}

export const SliderControls: React.FC<SliderControlsProps> = ({
  total,
  active,
  onPrev,
  onNext,
  onGoTo,
  stepLabels = ["Customer", "Build Quote", "Customize", "Send PDF"],
}) => {
  return (
    <div className="w-full space-y-3">
      {/* Quick Step Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            onMouseEnter={() => onGoTo(i)}
            aria-label={`Go to step ${i + 1}: ${stepLabels[i] || ""}`}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all duration-200 ${
              i === active
                ? "bg-primary-container text-white shadow-xs shadow-primary-container/20 scale-[1.02]"
                : "border border-outline-variant/50 bg-white/80 text-on-surface-variant hover:border-primary-container/50 hover:bg-[#F4FAF7] hover:text-primary-container"
            }`}
          >
            <span className={`text-[10px] ${i === active ? "opacity-90" : "text-primary-container"}`}>
              0{i + 1}
            </span>
            <span className="hidden xs:inline sm:inline">{stepLabels[i]}</span>
          </button>
        ))}
      </div>

      {/* Main Arrows + Dots + Scroll Hint */}
      <div className="flex items-center justify-between gap-4 pt-1">
        <div className="flex items-center gap-4">
          <button
            onClick={onPrev}
            disabled={active === 0}
            aria-label="Previous step"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant/60 bg-white text-on-surface-variant shadow-xs transition-all duration-200 hover:border-primary-container hover:text-primary-container hover:bg-[#F4FAF7] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-outline-variant/60"
          >
            <ArrowLeft size={16} />
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => onGoTo(i)}
                onMouseEnter={() => onGoTo(i)}
                aria-label={`Go to step ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-primary-container"
                    : "w-2 bg-outline-variant/50 hover:bg-outline-variant"
                }`}
              />
            ))}
          </div>

          <button
            onClick={onNext}
            disabled={active === total - 1}
            aria-label="Next step"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant/60 bg-white text-on-surface-variant shadow-xs transition-all duration-200 hover:border-primary-container hover:text-primary-container hover:bg-[#F4FAF7] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-outline-variant/60"
          >
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Automatic slide indicator */}
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-medium text-on-surface-variant/70">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint-accent animate-pulse" />
          <span>Hover or choose a step · Auto-playing</span>
        </div>
      </div>
    </div>
  );
};

export default SliderControls;
