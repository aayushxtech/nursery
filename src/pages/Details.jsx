import React, { useState } from "react";
import { FaStar, FaRegStar, FaLeaf, FaCartPlus, FaBolt } from "react-icons/fa";
import {
  BsCheckCircleFill,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { MdWaterDrop, MdWbSunny, MdOutlineNature } from "react-icons/md";
import { GiGroundSprout } from "react-icons/gi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/pages_styles/Details.css";

const Details = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  // Sample product data - in a real app, this would come from an API or props
  const product = {
    id: 1,
    name: "Monstera Deliciosa",
    price: 29.99,
    discount: 5.0,
    inStock: true,
    shortDescription:
      "The Swiss Cheese Plant is famous for its quirky natural leaf holes. A vibrant addition to any room.",
    longDescription:
      "Monstera deliciosa, commonly called Swiss cheese plant, is a species of flowering plant native to tropical forests of southern Mexico, south to Panama. It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands. Common names include ceriman, Swiss cheese plant, hurricane plant, and Mexican breadfruit. The specific epithet deliciosa means delicious, referring to the edible fruit. Monstera deliciosa is a species of evergreen tropical vine that is a part of Araceae, the aroid family. This family includes many other popular houseplants such as the peace lily Spathiphyllum, pothos Epipremnum aureum, and the flamingo flower Anthurium.",
    careInstructions: {
      water:
        "Water when the top 2-3 inches of soil are dry. Usually once a week.",
      light: "Bright, indirect light. Can tolerate some direct morning sun.",
      soil: "Well-draining potting mix, rich in organic matter.",
      growth:
        "Fast-growing during spring and summer. Can grow 1-2 feet per year.",
    },
    benefits: [
      "Improves air quality",
      "Reduces stress",
      "Easy to care for",
      "Pet-friendly",
    ],
    images: [
      "/images/monstera1.jpg",
      "/images/monstera2.jpg",
      "/images/monstera3.jpg",
    ],
    ratings: {
      average: 4.7,
      count: 127,
    },
    reviews: [
      {
        id: 1,
        name: "Sarah Johnson",
        rating: 5,
        date: "2023-08-15",
        comment:
          "Beautiful plant! Arrived in perfect condition and is thriving in my living room.",
      },
      {
        id: 2,
        name: "Michael Chen",
        rating: 4,
        date: "2023-07-29",
        comment:
          "Great plant, but the shipping took longer than expected. Otherwise very happy with my purchase.",
      },
      {
        id: 3,
        name: "Emma Williams",
        rating: 5,
        date: "2023-07-10",
        comment:
          "This is my third Monstera and by far the healthiest one I've owned. The care instructions were very helpful.",
      },
    ],
  };

  // Handle image zoom
  const handleImageMouseMove = (e) => {
    if (!isZoomed) return;

    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y });
  };

  // Generate star ratings display with animation delay
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="star filled" style={{ "--i": i }} />
        ) : (
          <FaRegStar key={i} className="star" />
        )
      );
    }
    return stars;
  };

  // Scroll to reviews
  const scrollToReviews = () => {
    document.querySelector(".reviews-section").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="details-page">
      <Navbar />

      <div className="details-container">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <span>Products</span>
          <span>{product.name}</span>
        </div>

        {/* Product Display Section */}
        <div className="product-display-section">
          <div className="product-images">
            <div
              className={`main-image-container ${isZoomed ? "zoomed" : ""}`}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleImageMouseMove}
            >
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="main-image"
                style={
                  isZoomed
                    ? {
                        transform: "scale(2)",
                        transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      }
                    : {}
                }
              />
              {!isZoomed && (
                <div className="zoom-hint">
                  <BsChevronLeft
                    className="nav-arrow left"
                    onClick={() =>
                      setActiveImg((prev) => Math.max(0, prev - 1))
                    }
                  />
                  <BsChevronRight
                    className="nav-arrow right"
                    onClick={() =>
                      setActiveImg((prev) =>
                        Math.min(product.images.length - 1, prev + 1)
                      )
                    }
                  />
                </div>
              )}
            </div>
            <div className="thumbnail-container">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail ${activeImg === index ? "active" : ""}`}
                  onClick={() => setActiveImg(index)}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="product-info-container">
            <h1 className="product-name">{product.name}</h1>

            <div className="product-pricing">
              {product.discount > 0 && (
                <span className="original-price">
                  ${(product.price + product.discount).toFixed(2)}
                </span>
              )}
              <span className="current-price">${product.price.toFixed(2)}</span>
              {product.discount > 0 && (
                <span className="discount-badge">
                  Save ${product.discount.toFixed(2)}
                </span>
              )}
            </div>

            <div className="product-rating">
              <div className="stars">
                {renderStars(Math.round(product.ratings.average))}
              </div>
              <span className="rating-count" onClick={scrollToReviews}>
                ({product.ratings.count} reviews)
              </span>
            </div>

            <div
              className={`stock-status ${
                product.inStock ? "in-stock" : "out-of-stock"
              }`}
            >
              {product.inStock ? (
                <>
                  <BsCheckCircleFill />
                  <span>In Stock</span>
                </>
              ) : (
                <span>Out of Stock</span>
              )}
            </div>

            <div className="product-short-description">
              <FaLeaf style={{ color: "#27ae60", marginRight: "8px" }} />
              {product.shortDescription}
            </div>

            <div className="product-actions">
              <button className="buy-now-btn">
                <FaBolt /> Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="product-details-section">
          <div className="section-tabs">
            <button
              className={`tab ${activeTab === "description" ? "active" : ""}`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`tab ${activeTab === "care" ? "active" : ""}`}
              onClick={() => setActiveTab("care")}
            >
              Care Instructions
            </button>
          </div>

          <div className="section-content">
            {activeTab === "description" && (
              <div className="description-content">
                <p>{product.longDescription}</p>
              </div>
            )}
            {activeTab === "care" && (
              <div className="care-content">
                <p className="care-intro">
                  Follow these simple care instructions to keep your{" "}
                  {product.name} healthy and thriving.
                </p>

                <div className="care-grid">
                  <div className="care-item">
                    <div className="care-icon-wrapper water">
                      <MdWaterDrop className="care-icon" />
                    </div>
                    <h4>Watering</h4>
                    <div className="care-level">
                      <div className="level-dots">
                        <span className="dot active"></span>
                        <span className="dot active"></span>
                        <span className="dot"></span>
                      </div>
                      <span className="level-text">Moderate</span>
                    </div>
                    <p>{product.careInstructions.water}</p>
                    <div className="care-tip">
                      <span className="tip-label">Pro Tip</span>
                      <span className="tip-text">
                        Check soil moisture with your finger before watering.
                      </span>
                    </div>
                  </div>

                  <div className="care-item">
                    <div className="care-icon-wrapper light">
                      <MdWbSunny className="care-icon" />
                    </div>
                    <h4>Light</h4>
                    <div className="care-level">
                      <div className="level-dots">
                        <span className="dot active"></span>
                        <span className="dot active"></span>
                        <span className="dot active"></span>
                      </div>
                      <span className="level-text">Bright Indirect</span>
                    </div>
                    <p>{product.careInstructions.light}</p>
                    <div className="care-tip">
                      <span className="tip-label">Pro Tip</span>
                      <span className="tip-text">
                        Rotate plant regularly for even growth.
                      </span>
                    </div>
                  </div>

                  <div className="care-item">
                    <div className="care-icon-wrapper soil">
                      <MdOutlineNature className="care-icon" />
                    </div>
                    <h4>Soil</h4>
                    <div className="care-level">
                      <div className="level-dots">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </div>
                      <span className="level-text">Well-draining</span>
                    </div>
                    <p>{product.careInstructions.soil}</p>
                    <div className="care-tip">
                      <span className="tip-label">Pro Tip</span>
                      <span className="tip-text">
                        Mix in perlite for better drainage.
                      </span>
                    </div>
                  </div>

                  <div className="care-item">
                    <div className="care-icon-wrapper growth">
                      <GiGroundSprout className="care-icon" />
                    </div>
                    <h4>Growth</h4>
                    <div className="care-level">
                      <div className="level-dots">
                        <span className="dot active"></span>
                        <span className="dot active"></span>
                        <span className="dot active"></span>
                      </div>
                      <span className="level-text">Fast</span>
                    </div>
                    <p>{product.careInstructions.growth}</p>
                    <div className="care-tip">
                      <span className="tip-label">Pro Tip</span>
                      <span className="tip-text">
                        Prune regularly to encourage bushier growth.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="care-summary">
                  <h4>Care Summary</h4>
                  <div className="difficulty-meter">
                    <span>Difficulty:</span>
                    <div className="difficulty-bar">
                      <div
                        className="difficulty-fill"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                    <span>Easy</span>
                  </div>
                  <p>
                    The {product.name} is generally easy to care for and
                    forgiving of occasional missed waterings. It's perfect for
                    beginners and will thrive with minimal attention.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
