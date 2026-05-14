import { FACEBOOK_URL } from "../data/siteData";
import EnquiryForm from "../components/forms/EnquiryForm";

export default function Contact({ onAddEnquiry }) {
  return (
    <section className="section section-soft">
      <div className="container editorial-split">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Start a conversation with the farm.</h1>
          <p className="lead">Use the form to ask about pomelo, future availability, business enquiries, or farm updates.</p>
          <div className="feature-list">
            <div className="feature"><h3>Location</h3><p>Harvey, Australia</p></div>
            <div className="feature"><h3>Email</h3><p>enquiries@wasiangreen.com</p></div>
            <div className="feature"><h3>Facebook</h3><p><a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Follow the farm journey</a></p></div>
          </div>
        </div>
        <EnquiryForm onAddEnquiry={onAddEnquiry} />
      </div>
    </section>
  );
}
