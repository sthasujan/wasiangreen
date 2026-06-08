import { FEATURED_GALLERY_IMAGES, FEATURED_GALLERY_VIDEOS } from "../data/siteData";
import ImageWithFallback from "../components/ImageWithFallback";
import SectionHeading from "../components/SectionHeading";

export default function Gallery() {
  return (
    <>
      <section className="farm-showcase" aria-label="Farm gallery">
        <div className="farm-showcase-bg-text">POMELO</div>
        <div className="farm-showcase-header">
          <p className="eyebrow">Gallery</p>
          <h1>Fresh from the farm.</h1>
          <p>A moving visual story of WAsian Green’s pomelo journey — from the trees, to harvest checks, to fruit ready to share.</p>
        </div>
        <div className="farm-slider-track">
          {FEATURED_GALLERY_IMAGES.map((image) => (
            <article className="farm-slide-card" key={image.src}>
              <ImageWithFallback src={image.src} fallback={image.fallback} alt={image.title} />
              <div className="farm-slide-caption"><span>{image.label}</span><h3>{image.title}</h3></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section gallery-story-section">
        <div className="container">
          <SectionHeading eyebrow="Harvest Moments" title="Five images. One farm story." description="Use this section for your selected five best photos. The image layout stays fixed and zooms on hover." />
          <div className="gallery-detail-grid">
            {FEATURED_GALLERY_IMAGES.map((image) => (
              <article className="gallery-detail-card" key={image.src}>
                <ImageWithFallback src={image.src} fallback={image.fallback} alt={image.title} />
                <div><span>{image.label}</span><h3>{image.title}</h3><p>{image.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading eyebrow="Farm Videos" title="Short moments from the farm" description="Add three short client videos to show real movement, light, and activity from the farm." />
          <div className="farm-video-grid">
            {FEATURED_GALLERY_VIDEOS.map((video) => (
              <article className="farm-video-card" key={video.src}>
                <video controls preload="metadata"><source src={video.src} type="video/mp4" />Your browser does not support the video tag.</video>
                <div className="farm-video-body"><span>{video.label}</span><h3>{video.title}</h3></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
