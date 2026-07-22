import React from "react";

function About() {
  return (
    <div className="page">
      <section className="section">
        <h1 className="page-title">About CloudNova</h1>
        <p className="section-text">
          CloudNova Solutions was founded to help teams close the gap between
          cloud infrastructure and modern DevOps practice. We work as an
          extension of our clients' engineering teams, not just an outside
          vendor.
        </p>

        <div className="grid grid-2">
          <div className="card">
            <h3>Our Mission</h3>
            <p>Make cloud adoption simple, secure, and sustainable for teams of any size.</p>
          </div>
          <div className="card">
            <h3>Our Vision</h3>
            <p>A world where reliable infrastructure is never a barrier to shipping good software.</p>
          </div>
        </div>

        <h2 className="section-title">Core Values</h2>
        <div className="grid grid-3">
          <div className="card">
            <h3>Transparency</h3>
            <p>Clear communication at every stage of a project.</p>
          </div>
          <div className="card">
            <h3>Reliability</h3>
            <p>We build systems we would trust to run our own business.</p>
          </div>
          <div className="card">
            <h3>Continuous Improvement</h3>
            <p>Always refining pipelines, security, and performance.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
