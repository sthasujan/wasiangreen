import { FACEBOOK_URL } from "../data/siteData";
import { navigateTo } from "../utils/navigation";

export default function Footer({ setCurrentPage }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>WAsian Green Pty Ltd</h3>
          <p>Pomelo farm story from Harvey, Australia.</p>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Follow on Facebook</a>
        </div>
        <div>
          <button onClick={() => navigateTo(setCurrentPage, "story")}>Story</button>
          <button onClick={() => navigateTo(setCurrentPage, "pomelo")}>Pomelo</button>
          <button onClick={() => navigateTo(setCurrentPage, "contact")}>Contact</button>
        </div>
      </div>
    </footer>
  );
}
