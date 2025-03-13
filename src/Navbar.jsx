import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">TechPulse</a>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">World</a>
          <a href="#">Politics</a>
          <a href="#">Sports</a>
          <a href="#">Technology</a>
        </div>

        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">World</a>
          <a href="#">Politics</a>
          <a href="#">Sports</a>
          <a href="#">Technology</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;