import { useState } from "react";
import { FAQS } from "../data/siteData";

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (email === "admin@wasiangreen.com" && password === "admin123") onLogin();
    else alert("Prototype login: admin@wasiangreen.com / admin123");
  };

  return (
    <form className="form form-card" onSubmit={submit}>
      <h2>Admin Login</h2>
      <p className="lead">Prototype access for the mock admin dashboard.</p>
      <label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} /></label>
      <label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /></label>
      <button className="btn btn-primary" type="submit">Login</button>
    </form>
  );
}

export default function Admin({ enquiries, setEnquiries, questions, setQuestions }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");

  const updateEnquiry = (id, status) => setEnquiries((items) => items.map((item) => (item.id === id ? { ...item, status } : item)));
  const updateQuestion = (id, status) => setQuestions((items) => items.map((item) => (item.id === id ? { ...item, status } : item)));

  if (!loggedIn) {
    return <section className="section"><div className="container"><AdminLogin onLogin={() => setLoggedIn(true)} /></div></section>;
  }

  return (
    <section className="section">
      <div className="container admin-shell">
        <aside className="admin-sidebar">
          <h3>Admin</h3>
          {[["dashboard", "Dashboard"], ["enquiries", "Enquiries"], ["questions", "Questions"], ["content", "Content"], ["media", "Media"]].map(([id, label]) => (
            <button key={id} className={`btn ${page === id ? "btn-primary" : "btn-soft"}`} onClick={() => setPage(id)}>{label}</button>
          ))}
          <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</button>
        </aside>

        <main className="admin-main">
          {page === "dashboard" && (
            <>
              <div className="stat-grid">
                <div className="stat-card"><strong>{enquiries.length}</strong>Enquiries</div>
                <div className="stat-card"><strong>{questions.length}</strong>Questions</div>
                <div className="stat-card"><strong>{FAQS.length}</strong>FAQs</div>
                <div className="stat-card"><strong>1</strong>Product</div>
              </div>
              <div className="admin-card"><h2>Dashboard</h2><p>Overview of enquiries, questions, content, and media for the owner.</p></div>
            </>
          )}
          {page === "enquiries" && enquiries.map((item) => (
            <article className="admin-row" key={item.id}>
              <div className="admin-row-header"><h3>{item.name}</h3><span className="status">{item.status}</span></div>
              <p>{item.email} · {item.customerType}</p><p>{item.message}</p>
              <div className="admin-actions"><button className="btn btn-soft" onClick={() => updateEnquiry(item.id, "Reviewed")}>Reviewed</button><button className="btn btn-soft" onClick={() => updateEnquiry(item.id, "Responded")}>Responded</button></div>
            </article>
          ))}
          {page === "questions" && questions.map((item) => (
            <article className="admin-row" key={item.id}>
              <div className="admin-row-header"><h3>{item.name}</h3><span className="status">{item.status}</span></div>
              <p>{item.question}</p>
              <div className="admin-actions"><button className="btn btn-soft" onClick={() => updateQuestion(item.id, "Answered")}>Answered</button><button className="btn btn-soft" onClick={() => updateQuestion(item.id, "Archived")}>Archive</button></div>
            </article>
          ))}
          {page === "content" && <div className="admin-card"><h2>Content Management</h2><p>Mock area for editing homepage, pomelo story, FAQs, and contact details.</p></div>}
          {page === "media" && <div className="admin-card"><h2>Media Management</h2><p>Mock area for uploading farm images, videos, and captions.</p></div>}
        </main>
      </div>
    </section>
  );
}
