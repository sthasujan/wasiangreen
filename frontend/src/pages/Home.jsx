import { FACEBOOK_URL, POMELO } from "../data/siteData";
import StoryCards from "../components/StoryCards";
import FarmFeatureShowcase from "../components/FarmFeatureShowcase";
import ScrollStoryBlog from "../components/ScrollStoryBlog";
import ImageWithFallback from "../components/ImageWithFallback";

export default function Home({ setCurrentPage }) {
  return (
    <>
      <section className="hero">
        <ImageWithFallback className="hero-bg" src={POMELO.heroImage} alt="Farm landscape" />
        <div className="container hero-content">
          <span className="hero-kicker">Pomelo harvest story · Harvey, Australia</span>
          <h1>From grove to harvest.</h1>
          <p>{POMELO.summary}</p>
          <div className="hero-actions">
            <button className="btn btn-light" onClick={() => setCurrentPage("story")}>Explore the Story</button>
            <button className="btn btn-primary" onClick={() => setCurrentPage("contact")}>Contact the Farm</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">WAsian Green Pty Ltd</p>
            <h2>A refined farm website experience.</h2>
            <p className="lead">The website is designed like a professional produce brand: image-led, story-focused, and easy to navigate without crowding the visitor.</p>
          </div>
          <div className="signature-card">
            <h3>Current focus</h3>
            <p>Pomelo is presented through a harvest journey, from tree care and growing conditions to media, FAQs, and direct enquiries.</p>
            <div className="stats">
              <div className="stat"><strong>01</strong>Product</div>
              <div className="stat"><strong>04</strong>Story stages</div>
              <div className="stat"><strong>05</strong>Buyer groups</div>
            </div>
          </div>
        </div>
      </section>

      <StoryCards />
      <FarmFeatureShowcase />
      <ScrollStoryBlog />

      <section className="section section-forest">
        <div className="container editorial-split">
          <div>
            <p className="eyebrow">Follow the journey</p>
            <h2>Farm updates, photos, and future harvest news.</h2>
            <p className="lead">The Facebook link gives visitors a simple way to keep following the farm as the pomelo story develops.</p>
            <a className="btn btn-light" href={FACEBOOK_URL} target="_blank" rel="noreferrer">Follow on Facebook</a>
          </div>
          <div className="editorial-image"><ImageWithFallback src={POMELO.fruitImage} alt="Pomelo fruit" /></div>
        </div>
      </section>
    </>
  );
}
