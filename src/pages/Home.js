import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <h1>Cloud Infrastructure, Built Right.</h1>
          <p>
            CloudNova Solutions helps businesses migrate, automate, and scale
            their infrastructure on the cloud with confidence.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
            <Link to="/services" className="btn btn-outline">Our Services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Company Overview</h2>
        <p className="section-text">
          We partner with startups and enterprises alike to design resilient
          cloud architectures and automated delivery pipelines. From initial
          migration to full CI/CD automation, our team brings hands-on
          experience with AWS, containers, and modern DevOps tooling.
        </p>

        <div className="grid grid-3">
          <div className="card">
            <h3>Reliable</h3>
            <p>Infrastructure designed for high availability and uptime.</p>
          </div>
          <div className="card">
            <h3>Secure</h3>
            <p>Security reviewed at every stage, from code to deployment.</p>
          </div>
          <div className="card">
            <h3>Automated</h3>
            <p>Pipelines that take code from commit to production, fast.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
