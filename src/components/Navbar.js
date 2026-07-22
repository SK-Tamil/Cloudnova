import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          Cloud<span>Nova</span>
        </NavLink>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          <NavLink to="/" className={linkClass} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className={linkClass} onClick={closeMenu}>About</NavLink>
          <NavLink to="/services" className={linkClass} onClick={closeMenu}>Services</NavLink>
          <NavLink to="/careers" className={linkClass} onClick={closeMenu}>Careers</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={closeMenu}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
