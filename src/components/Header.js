import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        MCR 10 | Ahsan
      </Link>
      <nav></nav>
      <label class="switch">
        <input type="checkbox" className="mode-switch" />
        <span class="slider"></span>
      </label>
    </header>
  );
};

export default Header;
