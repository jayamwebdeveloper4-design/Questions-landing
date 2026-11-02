import type { FeatureDefinition, FeatureId } from "./featuresData";

import quotationImg from "../../assets/Quotation Management UI Showcase.webp";
import productImg from "../../assets/ACER Admin Product Dashboard Showcase.webp";
import customerImg from "../../assets/Client Management App Mockup.webp";
import pdfImg from "../../assets/Teal Reports & Analytics Dashboard Showcase.webp";
import templateImg from "../../assets/Responsive ACER Admin Settings Dashboard.webp";
import analyticsImg from "../../assets/ACER Admin Dashboard Showcase.webp";
import teamImg from "../../assets/ACER Admin User Management Showcase.webp";
import subscriptionImg from "../../assets/ACER Admin Subscription Dashboard Mockup.webp";

interface FeaturePreviewProps {
  feature: FeatureDefinition;
}

const featureImages: Record<FeatureId, string> = {
  quotations: quotationImg,
  products: productImg,
  customers: customerImg,
  pdf: pdfImg,
  templates: templateImg,
  analytics: analyticsImg,
  team: teamImg,
  subscription: subscriptionImg,
};

const PreviewTopBar = ({ label }: { label: string }) => (
  <div className="flex items-center justify-between border-b border-outline-variant/40 bg-white px-4 py-3 sm:px-5">
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-secondary" aria-hidden="true" />
      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-on-surface-variant">
        QuotFlow workspace
      </span>
    </div>
    <span className="rounded border border-outline-variant/50 px-2 py-1 text-[9px] font-semibold text-on-surface-variant">
      {label}
    </span>
  </div>
);

export const FeaturePreview = ({ feature }: FeaturePreviewProps) => {
  const currentImage = featureImages[feature.id];

  return (
    <div className="overflow-hidden rounded-xl border border-outline-variant/45 bg-white shadow-[0_12px_36px_rgba(11,28,48,0.07)]">
      <PreviewTopBar label="LIVE PREVIEW" />

      <div
        key={feature.id}
        aria-live="polite"
        className="animate-fade-up"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-white lg:aspect-auto lg:h-[min(42vw,calc(100svh-20rem))]">
          <img
            src={currentImage}
            alt={`${feature.title} interface showcase`}
            width={1200}
            height={800}
            loading="lazy"
            className="block h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Preview Footer */}
      <div className="flex items-center justify-between border-t border-outline-variant/40 bg-white px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
          <span className="text-[10px] font-semibold text-on-surface-variant">
            {feature.title}
          </span>
        </div>
        <span className="text-[9px] uppercase tracking-wider text-outline font-medium">
          Product preview
        </span>
      </div>
    </div>
  );
};

export default FeaturePreview;
