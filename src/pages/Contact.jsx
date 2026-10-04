import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage(
      "🎉 Thank you! Your message has been submitted successfully."
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      <section className="page-hero">
        <div className="page-hero-content">

          <span className="page-badge">
            📞 GET IN TOUCH
          </span>

          <h1>
            Contact <span>Us</span>
          </h1>

          <p>
            Have questions about internships? We are here to help you.
          </p>

        </div>
      </section>

      <section className="contact-section">

        <div className="contact-info">

          <div className="contact-info-card">
            <div className="contact-icon">📧</div>
            <h3>Email Us</h3>
            <p>support@internshipportal.com</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">📱</div>
            <h3>Call Us</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">📍</div>
            <h3>Location</h3>
            <p>India</p>
          </div>

        </div>

        <div className="contact-form-card">

          <h2>Send Us a Message</h2>

          <p>
            Fill in the form below and our team will get back to you.
          </p>

          {successMessage && (
            <div className="success-message">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Name *</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email *</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Message *</label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              📩 Send Message
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Contact;