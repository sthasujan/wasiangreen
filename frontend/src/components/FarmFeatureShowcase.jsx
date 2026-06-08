import { useState } from "react";
import { FARM_FEATURES, POMELO } from "../data/siteData";
import ImageWithFallback from "./ImageWithFallback";

export default function FarmFeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);
  const feature = FARM_FEATURES[activeFeature];

  return (
    <section className="farm-feature-section" aria-label="Farm feature showcase">
      <div className="farm-feature-bg"><ImageWithFallback src={POMELO.heroImage} alt="Farm background" /></div>
      <div className="farm-feature-layout">
        <span className="farm-feature-kicker">{feature.kicker}</span>
        <div className="farm-feature-image"><ImageWithFallback src={feature.image} fallback={feature.fallback} alt={feature.title} /></div>
        <div className="farm-feature-title"><h2>{feature.title}</h2></div>
        <div className="farm-feature-controls" aria-label="Feature controls">
          {FARM_FEATURES.map((item, index) => (
            <button key={item.title} className={index === activeFeature ? "active" : ""} onClick={() => setActiveFeature(index)}>
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
