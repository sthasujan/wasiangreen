import { STORY_CHAPTERS, STORY_GALLERY_IMAGES, STORY_TIMELINE, POMELO } from "../data/siteData";
import SectionHeading from "../components/SectionHeading";
import ScrollStoryBlog from "../components/ScrollStoryBlog";
import ImageWithFallback from "../components/ImageWithFallback";

function RaynersStyleStory() {
  return (
    <>
      <section className="section storybook-hero">
        <div className="container storybook-intro">
          <div>
            <p className="eyebrow">Our Farm Story</p>
            <h2>From Vietnam to Harvey, told through pomelo.</h2>
          </div>
          <div className="storybook-note">
            <p>This sample story is written in a warm, chronological style: beginning with the grower’s background, moving into the land, the decision to grow pomelo, the care behind the trees, and the future vision for WAsian Green.</p>
            <p>This is just my sample text. You can add anything here Truyen</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container storybook">
          {STORY_CHAPTERS.map((chapter) => (
            <article className="story-chapter" key={chapter.id}>
              <div className="chapter-media"><ImageWithFallback src={chapter.image} alt={chapter.title} /></div>
              <div className="chapter-copy">
                <span className="chapter-label">{chapter.label}</span>
                <h3>{chapter.title}</h3>
                <p className="lead">{chapter.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="Photo Story" title="Nineteen moments from the farm" description="Rename your 19 images as story-01.jpg to story-19.jpg and place them in public/images." />
          <div className="story-gallery-wall">
            {STORY_GALLERY_IMAGES.map((image) => (
              <figure className="story-gallery-item" key={image.src}><ImageWithFallback src={image.src} alt={image.alt} /></figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function Story() {
  return (
    <>
      <section className="section section-soft">
        <div className="container editorial-split">
          <div>
            <p className="eyebrow">Our Story</p>
            <h1>Growing with patience in Harvey.</h1>
            <p className="lead">WAsian Green’s story is built around place, care, Vietnamese farming memories, and one clear product focus: pomelo.</p>
          </div>
          <div className="editorial-image"><ImageWithFallback src={POMELO.storyImage} alt="Farm story" /></div>
        </div>
      </section>
      <RaynersStyleStory />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="The Journey" title="How the story unfolds" />
          <div className="timeline">
            {STORY_TIMELINE.map((item) => (
              <article className="timeline-item" key={item.title}>
                <span className="timeline-number">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ScrollStoryBlog />
    </>
  );
}
