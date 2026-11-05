import type { FeatureDefinition, FeatureId } from "./featuresData";
import { DualMockupShowcase } from "./DualMockupShowcase";

export interface FeaturePreviewProps {
  feature: FeatureDefinition;
  onSelectFeature?: (id: FeatureId) => void;
  onInteraction?: () => void;
  onLeave?: () => void;
}

export const FeaturePreview = ({
  feature,
  onSelectFeature,
  onInteraction,
  onLeave,
}: FeaturePreviewProps) => {
  return (
    <div key={feature.id} aria-live="polite" className="relative w-full select-none">
      <DualMockupShowcase
        activeFeatureId={feature.id}
        onSelectFeature={onSelectFeature}
        onInteraction={onInteraction}
        onLeave={onLeave}
      />
    </div>
  );
};

export default FeaturePreview;
