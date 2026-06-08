import { POMELO } from "../data/siteData";
import StoryCards from "../components/StoryCards";
import ImageWithFallback from "../components/ImageWithFallback";

export default function Pomelo({ setCurrentPage }) {
  return (
    <>
      <section className="section">
        <div className="container editorial-split">
          <div className="editorial-image"><ImageWithFallback src={POMELO.fruitImage} alt="Pomelo" /></div>
          <div>
            <p className="eyebrow">Pomelo</p>
            <h1>A fruit with a farm story.</h1>
            <p className="lead">{POMELO.care}</p>
            <div className="feature-list">
              <div className="feature"><h3>Tree care</h3><p>Seasonal monitoring and farm management guide the growing journey.</p></div>
              <div className="feature"><h3>Harvest preparation</h3><p>The harvest story is shared through imagery, video, and farm updates.</p></div>
              <div className="feature"><h3>Future enquiries</h3><p>{POMELO.availability}</p></div>
            </div>
            <button className="btn btn-primary" onClick={() => setCurrentPage("contact")}>Enquire About Pomelo</button>
          </div>
        </div>
      </section>
      <StoryCards />
    </>
  );
}
