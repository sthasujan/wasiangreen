import { POMELO } from "../data/siteData";

export default function ImageWithFallback({ src, fallback = POMELO.groveImage, alt = "", className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = fallback;
      }}
    />
  );
}
