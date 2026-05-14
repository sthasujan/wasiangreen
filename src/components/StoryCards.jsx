import { HARVEST_CARDS } from "../data/siteData";
import SectionHeading from "./SectionHeading";
import ImageWithFallback from "./ImageWithFallback";

export default function StoryCards() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Harvest Journey"
          title="From tree care to harvest story"
          description="A professional farm website should lead with strong images and a clear sense of place. These cards let visitors explore the pomelo journey visually."
        />
        <div className="story-grid">
          {HARVEST_CARDS.map((card) => (
            <article className="story-card" key={card.title}>
              <ImageWithFallback src={card.image} alt={card.title} />
              <div className="story-card-content">
                <p className="eyebrow">{card.eyebrow}</p>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
