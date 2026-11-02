import React from "react";
import { Check } from "lucide-react";
import type{ Step } from "./types";

interface StepContentProps {
  step: Step;
  direction: "next" | "prev";
}

export const StepContent: React.FC<StepContentProps> = ({ step, direction }) => {
  const Icon = step.icon;

  return (
    <div
      key={step.number}
      className={direction === "next" ? "slide-in-next" : "slide-in-prev"}
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="text-xs sm:text-sm font-bold tracking-[0.12em] text-primary-container">
          STEP {step.number}
        </span>
        <div className="h-px w-10 bg-outline-variant/40" />
        <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[#E7F2EE] text-primary-container">
          <Icon size={17} strokeWidth={2} />
        </div>
      </div>

      <h2 className="font-display text-2xl font-extrabold tracking-tight text-on-surface sm:text-3xl lg:text-4xl leading-tight">
        {step.title}
      </h2>

      <p className="mt-2.5 max-w-xl font-body text-xs sm:text-sm md:text-base leading-relaxed text-on-surface-variant">
        {step.description}
      </p>

      <div className="mt-4 space-y-2 sm:space-y-2.5">
        {step.points.map((point) => (
          <div
            key={point}
            className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-on-surface-variant"
          >
            <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#E7F2EE] text-mint-accent">
              <Check size={11} strokeWidth={2.5} />
            </span>
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepContent;
