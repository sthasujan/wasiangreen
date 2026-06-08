export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <div className={`section-heading ${align === "left" ? "left" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="lead">{description}</p>}
    </div>
  );
}
