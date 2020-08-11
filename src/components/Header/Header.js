import React, { useState } from "react";

import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [headerOpened, setHeaderOpened] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h3>Mel's Beach Breaks</h3>
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={() => {
              setHeaderOpened(!headerOpened);
            }}
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={headerOpened ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
