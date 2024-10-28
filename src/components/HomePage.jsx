import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className="home-page">
      <header className="nav-bar">
        <a
          href="http://girmantech.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
        <a
          href="https://www.linkedin.com/company/girman-technologies"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:contact@girmantech.com">Contact</a>
      </header>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default HomePage;
