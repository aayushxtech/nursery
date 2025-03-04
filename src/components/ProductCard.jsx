import React from "react";
import "../styles/components_styles/ProductCard.css";

const ProductCard = ({ product = {} }) => {
  const {
    image = "https://via.placeholder.com/300x300",
    name = "Monstera Deliciosa",
    price = "$24.99",
    description = "A beautiful tropical plant with unique split leaves. Easy to care for and perfect for beginners.",
  } = product;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
        <p className="product-description">{description}</p>
        <div className="product-actions">
          <button className="add-to-cart-btn">Save</button>
          <button className="view-details-btn">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
