import React, { useState, useEffect } from "react";
import "../styles/components_styles/Footer.css";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll events for back-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add a responsive handler to check viewport size and adjust layout accordingly
  useEffect(() => {
    const handleResize = () => {
      // You can add additional responsive logic here if needed
      const _isMobile = window.innerWidth <= 768;
      // Could set state variables for conditional rendering if needed
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section - Better alignment */}
        <div className="footer-section brand">
          <div className="logo-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="footer-logo"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="brand-name">Nursery</h2>
          </div>
          <p className="tagline">
            Growing green spaces,
            <br className="mobile-break" />
            nurturing life
          </p>
          <address className="contact-info">
            <p>
              <strong>Visit Us:</strong> 123 Garden Street, Green Valley
            </p>
            <p>
              <strong>Call Us:</strong> (123) 456-7890
            </p>
          </address>
        </div>

        {/* Center Section - Better spacing */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <div className="links-grid">
            <div className="links-column">
              <ul className="links-list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/community">Community</a>
                </li>
              </ul>
            </div>
            <div className="links-column">
              <ul className="links-list">
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/faqs">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section - Better form layout */}
        <div className="footer-section connect">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-link"
              title="Follow us on Instagram"
            >
              <i className="social-icon instagram"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-link"
              title="Like us on Facebook"
            >
              <i className="social-icon facebook"></i>
            </a>
            <a
              href="https://wa.me/7328045646"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-link"
              title="Chat with us on WhatsApp"
            >
              <i className="social-icon whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Better centering */}
      <div className="footer-bottom">
        <div className="footer-nav">
          <a href="/privacy">Privacy Policy</a>
          <span className="divider">|</span>
          <a href="/terms">Terms of Use</a>
        </div>
        <p className="copyright">
          &copy; {currentYear} Nursery. All rights reserved.
        </p>
      </div>

      {/* Back to top button - No changes needed */}
      <button
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3l8 8h-6v10h-4v-10h-6z"></path>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
