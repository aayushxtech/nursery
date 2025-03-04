import React, { useState, useEffect } from "react";
import "../styles/pages_styles/Contacts.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Add animation class after component mounts
    setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic would go here
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);

      // Scroll to form success message
      const formSection = document.querySelector(".contact-form-section");
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={`contacts-page ${isAnimated ? "animated" : ""}`}>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>We'd Love to Hear From You</h1>
          <p>
            Have questions about our plants or services? Need advice for your
            garden? Our plant experts are here to help.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Our Location</h3>
                <p>123 Green Garden Street, Plant City, PC 12345</p>
              </div>
            </div>

            <div className="info-item">
              <FaPhone className="icon" />
              <div>
                <h3>Call Us</h3>
                <p>
                  <a href="tel:+1234567890">(123) 456-7890</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email Us</h3>
                <p>
                  <a href="mailto:info@plantnursery.com">
                    info@plantnursery.com
                  </a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <FaClock className="icon" />
              <div>
                <h3>Working Hours</h3>
                <p>
                  Monday - Saturday: 8:00 AM - 6:00 PM
                  <br />
                  Sunday: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="section-header">
            <h2>Send Us a Message</h2>
            <p className="subtitle">
              Have a specific question or need a custom order? Fill out the form
              below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div
            className="form-success-message"
            style={{ display: submitted ? "block" : "none" }}
          >
            <strong>Thank you for reaching out!</strong>
            <br />
            Your message has been received. We'll get back to you within 24
            hours.
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? "error" : ""}
                />
                {formErrors.name && (
                  <span className="error-message">{formErrors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? "error" : ""}
                />
                {formErrors.email && (
                  <span className="error-message">{formErrors.email}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(123) 456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject (Optional)</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we help you today?"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={formErrors.message ? "error" : ""}
              ></textarea>
              {formErrors.message && (
                <span className="error-message">{formErrors.message}</span>
              )}
            </div>

            <button type="submit" className="submit-button">
              <FaPaperPlane style={{ marginRight: "8px" }} /> Send Message
            </button>
          </form>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Google Maps */}
      <section className="maps-section">
        <div className="container">
          <div className="section-header">
            <h2>Visit Our Nursery</h2>
            <p className="subtitle">
              Come experience our wide selection of plants and garden supplies
              in person - we'd love to welcome you!
            </p>
          </div>
          <div className="map-container">
            <iframe
              title="Nursery Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d-73.9876543210987!3d40.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA3JzI0LjQiTiA3M8KwNTknMTUuNiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Social Media Links */}
      <section className="social-media-section">
        <div className="container">
          <div className="section-header">
            <h2>Connect With Us</h2>
          </div>
          <p>
            Follow us for exclusive offers, gardening tips, and inspiration for
            your green spaces
          </p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="social-icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="social-icon" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              <FaPinterest className="social-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/7328045646?text=Hello%20I%27d%20like%20to%20inquire%20about%20your%20plants"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp /> Chat with us
      </a>
      <Footer />
    </div>
  );
};

export default Contacts;
