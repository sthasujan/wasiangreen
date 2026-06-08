import { useState } from "react";
import { FAQS } from "../data/siteData";
import SectionHeading from "../components/SectionHeading";
import QuestionForm from "../components/forms/QuestionForm";

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="faq-item">
      <button className="faq-button" onClick={() => setOpen(!open)}><span>{item.q}</span><span>{open ? "−" : "+"}</span></button>
      {open && <div className="faq-answer"><p>{item.a}</p></div>}
    </article>
  );
}

export default function FAQs({ onAddQuestion }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="FAQs" title="Questions about the farm and pomelo" />
        <div className="faq-list">{FAQS.map((item) => <FAQItem key={item.q} item={item} />)}</div>
        <div className="section"><QuestionForm onAddQuestion={onAddQuestion} /></div>
      </div>
    </section>
  );
}
