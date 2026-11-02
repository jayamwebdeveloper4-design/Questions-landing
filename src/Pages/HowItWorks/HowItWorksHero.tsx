import React from "react";

export const HowItWorksHero: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl text-center animate-fade-up">
      <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#006C49] sm:text-sm">
        HOW IT WORKS
      </p>
      <h2 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#0B1C30] sm:text-3xl lg:text-4xl xl:text-5xl">
        Create and send a quotation in four simple steps.
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-[#667085]">
        Add customer and product details, customize your quote, then preview
        and send it as a PDF.
      </p>
    </div>
  );
};

export default HowItWorksHero;
