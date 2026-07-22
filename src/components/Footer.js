import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <p className="footer-logo">CloudNova Solutions</p>
          <p>Cloud infrastructure and DevOps consulting for growing teams.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>hello@cloudnova.example</p>
          <p>+1 (555) 010-1234</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} CloudNova Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
