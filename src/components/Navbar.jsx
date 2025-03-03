import React, { useState, useEffect } from "react";
import "../styles/components_styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle login status (for demo purposes)
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // Handle scroll events for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest("nav")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo - Centered vertically */}
          <div className="navbar-logo">
            <a href="/" className="logo-link" aria-label="Home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="logo-icon"
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
              <span className="logo-text">Nursery</span>
            </a>
          </div>

          {/* Desktop Menu - Better centered */}
          <div className="navbar-links-desktop">
            <div className="nav-links">
              <a href="/" className="nav-link active">
                Home
                <span className="link-underline"></span>
              </a>
              <a href="/products" className="nav-link">
                Products
                <span className="link-underline"></span>
              </a>
              <a href="/community" className="nav-link">
                Community
                <span className="link-underline"></span>
              </a>
              <a href="/contact" className="nav-link">
                Contact
                <span className="link-underline"></span>
              </a>
              {/* Saved Products Link - Only visible when logged in */}
              {isLoggedIn && (
                <a href="/saved-products" className="nav-link saved-products">
                  Saved Products
                </a>
              )}
            </div>
          </div>

          {/* Login/Logout Button - No changes needed */}
          <div className="navbar-auth">
            <button
              onClick={toggleLogin}
              className={`auth-button ${isLoggedIn ? "logout" : "login"}`}
            >
              <span className="button-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="button-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {isLoggedIn ? (
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 4a1 1 0 10-2 0v4.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L14 11.586V7z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm5 4a1 1 0 10-2 0v4.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 11.586V7z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
                {isLoggedIn ? "Logout" : "Login"}
              </span>
            </button>
          </div>

          {/* Mobile menu button - No changes needed */}
          <div className="navbar-toggle">
            <button
              onClick={toggleMenu}
              className="toggle-button"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0)",
              }}
            >
              <svg
                className="toggle-icon"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Better centered items */}
      <div
        className={`navbar-mobile ${isOpen ? "open" : ""}`}
        style={{
          maxHeight: isOpen ? "500px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="mobile-links">
          <a href="/" className="mobile-link active">
            Home
          </a>
          <a href="/products" className="mobile-link">
            Products
          </a>
          <a href="/community" className="mobile-link">
            Community
          </a>
          <a href="/contact" className="mobile-link">
            Contact
          </a>
          {/* Mobile Saved Products - Only visible when logged in */}
          {isLoggedIn && (
            <a
              href="/saved-products"
              className="mobile-link saved-products-mobile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mobile-favorite-icon"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              Saved Products
            </a>
          )}
          {/* Mobile login button */}
          <button
            onClick={toggleLogin}
            className={`mobile-auth-button ${isLoggedIn ? "logout" : "login"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mobile-button-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {isLoggedIn ? (
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 4a1 1 0 10-2 0v4.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L14 11.586V7z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm5 4a1 1 0 10-2 0v4.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 11.586V7z"
                  clipRule="evenodd"
                />
              )}
            </svg>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
