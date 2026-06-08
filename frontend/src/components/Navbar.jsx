import { useState } from "react";
import { FACEBOOK_URL, MORE_NAV_ITEMS, NAV_ITEMS } from "../data/siteData";
import { navigateTo } from "../utils/navigation";
import logo from "/images/Logo.png";

function TopStrip() {
  return (
    <div className="top-strip">
      <div className="container">
        <span>Pomelo grown with care in Harvey, Australia</span>
        <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Follow the farm journey</a>
      </div>
    </div>
  );
}

export default function Navbar({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreActive = MORE_NAV_ITEMS.some((item) => item.id === currentPage);

  const go = (page) => {
    setMenuOpen(false);
    setMoreOpen(false);
    navigateTo(setCurrentPage, page);
  };

  return (
    <header className="navbar">
      <TopStrip />
      <div className="container nav-inner">
        <button className="brand" onClick={() => go("home")}>
          <img src={logo} alt="WAsian Green Logo" className="brand-logo" />
          <span>
            <span className="brand-title">WAsian Green</span>
            <span className="brand-subtitle">Pomelo farm story</span>
          </span>
        </button>

        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <button key={item.id} className={`nav-link ${currentPage === item.id ? "active" : ""}`} onClick={() => go(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="more-wrap">
            <button className="more-button" onClick={() => setMoreOpen(!moreOpen)}>{moreActive ? "More •" : "More"}</button>
            {moreOpen && (
              <div className="dropdown">
                {MORE_NAV_ITEMS.map((item) => (
                  <button key={item.id} className={currentPage === item.id ? "active" : ""} onClick={() => go(item.id)}>
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="nav-cta" onClick={() => go("contact")}>Enquire</button>
        </div>
      </div>
    </header>
  );
}
