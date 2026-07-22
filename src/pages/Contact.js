import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page">
      <section className="section">
        <h1 className="page-title">Contact Us</h1>
        <p className="section-text">
          Have a project in mind? Reach out and our team will get back to you.
        </p>

        <div className="contact-info">
          <p><strong>Email:</strong> hello@cloudnova.example</p>
          <p><strong>Phone:</strong> +1 (555) 010-1234</p>
          <p><strong>Address:</strong> 123 Cloud Ave, Austin, TX</p>
        </div>

        {submitted ? (
          <p className="form-success">Thanks for reaching out! We'll be in touch soon.</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        )}
      </section>
    </div>
  );
}

export default Contact;
