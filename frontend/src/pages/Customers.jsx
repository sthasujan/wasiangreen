import { CUSTOMER_SEGMENTS } from "../data/siteData";
import SectionHeading from "../components/SectionHeading";

export default function Customers({ setCurrentPage }) {
  return (
    <section className="section section-soft">
      <div className="container">
        <SectionHeading eyebrow="Future Customers" title="Built for clear buyer conversations" description="Different customer groups can quickly understand how the pomelo story may fit their needs." />
        <div className="customer-grid">
          {CUSTOMER_SEGMENTS.map((item) => (
            <article className="customer-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <button className="btn btn-soft" onClick={() => setCurrentPage("contact")}>Enquire</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
