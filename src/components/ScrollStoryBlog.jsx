import { SCROLL_STORY_STEPS } from "../data/siteData";
import ImageWithFallback from "./ImageWithFallback";
import SectionHeading from "./SectionHeading";

export default function ScrollStoryBlog() {
  return (
    <section className="section scroll-story" aria-label="Interactive pomelo harvest story">
      <div className="container">
        <SectionHeading
          eyebrow="Interactive Story"
          title="A harvest story that reveals itself as you scroll"
          description="This section lets the image peek from the side while the story panels move through the page."
        />
        <div className="scroll-story-layout">
          <div className="scroll-copy">
            {SCROLL_STORY_STEPS.map((step) => (
              <article className="scroll-panel" key={step.number}>
                <span className="scroll-panel-number">{step.number}</span>
                <p className="eyebrow">{step.eyebrow}</p>
                <h3>{step.title}</h3>
                <p className="lead">{step.text}</p>
              </article>
            ))}
          </div>
          <aside className="scroll-visual-wrap" aria-hidden="true">
            <div className="peeking-frame">
              {SCROLL_STORY_STEPS.map((step) => <ImageWithFallback className="peeking-image" key={step.number} src={step.image} alt="" />)}
              <div className="peeking-caption">Pomelo journey · tree care to harvest</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
