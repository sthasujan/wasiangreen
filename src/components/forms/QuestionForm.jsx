import { useState } from "react";

export default function QuestionForm({ onAddQuestion }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", question: "" });

  const submit = (event) => {
    event.preventDefault();
    onAddQuestion({ ...form, id: Date.now(), date: "14 May 2026", status: "New" });
    setSubmitted(true);
    setForm({ name: "", email: "", question: "" });
  };

  return (
    <form className="form form-card" onSubmit={submit}>
      <h3>Ask a Question</h3>
      {submitted && <div className="success-message">Your question has been added to the mock admin dashboard.</div>}
      <div className="form-grid">
        <label>Name<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required /></label>
        <label>Email<input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required /></label>
      </div>
      <label>Question<textarea rows="5" value={form.question} onChange={(event) => setForm({ ...form, question: event.target.value })} required /></label>
      <button className="btn btn-primary" type="submit">Submit Question</button>
    </form>
  );
}
