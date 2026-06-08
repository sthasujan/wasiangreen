import { useState } from "react";
import { submitEnquiry } from "../../api/publicApi";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    customerType: "Grocery store",
    interestType: "Future pomelo supply",
    message: "",
  });

  const update = (field, value) => setForm((current) => ({ ...current, [field]: value }));

  const submit = async (event) => {
    event.preventDefault();

    try {
      await submitEnquiry(form);

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        customerType:
          "Grocery store",
        interestType:
          "Future pomelo supply",
        message: "",
      });
    } catch (error) {
      console.error(error);

      alert(
        "Failed to submit enquiry"
      );
    }
  };

  return (
    <form className="form form-card" onSubmit={submit}>
      {submitted && <div className="success-message">Thank you. Your enquiry has been submitted successfully.</div>}
      <div className="form-grid">
        <label>Name<input value={form.name} onChange={(event) => update("name", event.target.value)} required /></label>
        <label>Email<input type="email" value={form.email} onChange={(event) => update("email", event.target.value)} required /></label>
      </div>
      <div className="form-grid">
        <label>Phone<input value={form.phone} onChange={(event) => update("phone", event.target.value)} /></label>
        <label>Customer type
          <select value={form.customerType} onChange={(event) => update("customerType", event.target.value)}>
            <option>Grocery store</option><option>Restaurant</option><option>Weekend market retailer</option><option>Wholesaler</option><option>Fruit/Food buyer</option><option>General customer</option>
          </select>
        </label>
      </div>
      <label>Interest type
        <select value={form.interestType} onChange={(event) => update("interestType", event.target.value)}>
          <option>Future pomelo supply</option><option>Farm information</option><option>Wholesale enquiry</option><option>Restaurant supply enquiry</option><option>General question</option>
        </select>
      </label>
      <label>Message<textarea rows="6" value={form.message} onChange={(event) => update("message", event.target.value)} required /></label>
      <button className="btn btn-primary" type="submit">Submit Enquiry</button>
    </form>
  );
}
