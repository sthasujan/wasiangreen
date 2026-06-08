import { useState, useEffect } from "react";
import { FAQS } from "../data/siteData";
import { loginAdmin } from "../api/authApi";

import {
  fetchEnquiries,
  fetchQuestions,
  updateEnquiry,
  updateQuestion,
  deleteEnquiry,
  deleteQuestion,
} from "../api/adminApi";

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      const response = await loginAdmin({
        email,
        password,
      });

      localStorage.setItem(
        "token",
        response.token
      );

      localStorage.setItem(
        "admin",
        JSON.stringify(response.admin)
      );

      onLogin();
    } catch (error) {
      alert("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="form form-card"
      onSubmit={submit}
    >
      <h2>Admin Login</h2>

      {/* <p className="lead">
        Secure admin access
      </p> */}

      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          required
        />
      </label>

      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
          required
        />
      </label>

      <button
        className="btn btn-primary"
        type="submit"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

export default function Admin() {
  const [loggedIn, setLoggedIn] =
    useState(
      !!localStorage.getItem("token")
    );

  const [enquiries, setEnquiries] =
  useState([]);

  const [questions, setQuestions] =
  useState([]);

  const [page, setPage] =
    useState("dashboard");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const enquiryData =
        await fetchEnquiries();

      const questionData =
        await fetchQuestions();

      setEnquiries(enquiryData);
      setQuestions(questionData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateEnquiry =
  async (id, status) => {
    try {
      const updated =
        await updateEnquiry(
          id,
          status
        );

      setEnquiries((items) =>
        items.map((item) =>
          item._id === id
            ? updated
            : item
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateQuestion =
  async (id, status) => {
    try {
      const updated =
        await updateQuestion(
          id,
          status
        );

      setQuestions((items) =>
        items.map((item) =>
          item._id === id
            ? updated
            : item
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return (
      <section className="section">
        <div className="container">
          <AdminLogin
            onLogin={() =>
              setLoggedIn(true)
            }
          />
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container admin-shell">
        <aside className="admin-sidebar">
          <h3>Admin</h3>

          {[
            [
              "dashboard",
              "Dashboard",
            ],
            [
              "enquiries",
              "Enquiries",
            ],
            [
              "questions",
              "Questions",
            ],
            [
              "content",
              "Content",
            ],
            ["media", "Media"],
          ].map(([id, label]) => (
            <button
              key={id}
              className={`btn ${
                page === id
                  ? "btn-primary"
                  : "btn-soft"
              }`}
              onClick={() =>
                setPage(id)
              }
            >
              {label}
            </button>
          ))}

          <button
            className="btn btn-outline"
            onClick={logout}
          >
            Logout
          </button>
        </aside>

        <main className="admin-main">
          {page ===
            "dashboard" && (
            <>
              <div className="stat-grid">
                <div className="stat-card">
                  <strong>
                    {enquiries.length}
                  </strong>
                  Enquiries
                </div>

                <div className="stat-card">
                  <strong>
                    {questions.length}
                  </strong>
                  Questions
                </div>

                <div className="stat-card">
                  <strong>
                    {FAQS.length}
                  </strong>
                  FAQs
                </div>

                <div className="stat-card">
                  <strong>1</strong>
                  Product
                </div>
              </div>

              <div className="admin-card">
                <h2>Dashboard</h2>

                <p>
                  Overview of
                  enquiries,
                  questions,
                  content, and
                  media.
                </p>
              </div>
            </>
          )}

          {page ===
            "enquiries" &&
            enquiries.map((item) => (
              <article
                className="admin-row"
                key={item._id}
              >
                <div className="admin-row-header">
                  <h3>
                    {item.name}
                  </h3>

                  <span className="status">
                    {item.status}
                  </span>
                </div>

                <p>
                  {item.email}
                </p>

                <p>
                  {item.message}
                </p>
                <div className="admin-actions">
                  <button
                    className="btn btn-soft"
                    onClick={() =>
                      handleUpdateEnquiry(
                        item._id,
                        "Reviewed"
                      )
                    }
                  >
                    Review
                  </button>

                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      handleUpdateEnquiry(
                        item._id,
                        "Responded"
                      )
                    }
                  >
                    Respond
                  </button>

                  <button
                    className="btn btn-outline"
                    onClick={async () => {
                      await deleteEnquiry(
                        item._id
                      );

                      setEnquiries((items) =>
                        items.filter(
                          (x) =>
                            x._id !== item._id
                        )
                      );
                    }}
                  >
                    Delete
                  </button>
                </div>
                
              </article>
            ))}

          {page ===
            "questions" &&
            questions.map((item) => (
              <article
                className="admin-row"
                key={item._id}
              >
                <div className="admin-row-header">
                  <h3>
                    {item.name}
                  </h3>

                  <span className="status">
                    {item.status}
                  </span>
                </div>

                <p>
                  {item.question}
                </p>
                <div className="admin-actions">
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    handleUpdateQuestion(
                      item._id,
                      "Answered"
                    )
                  }
                >
                  Answered
                </button>

                <button
                  className="btn btn-outline"
                  onClick={async () => {
                    await deleteQuestion(
                      item._id
                    );

                    setQuestions((items) =>
                      items.filter(
                        (x) =>
                          x._id !== item._id
                      )
                    );
                  }}
                >
                  Delete
                </button>
              </div>
              </article>
            ))}
        </main>
      </div>
    </section>
  );
}