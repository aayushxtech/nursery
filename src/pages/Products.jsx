import React from "react";
import "../styles/pages_styles/Products.css";

const sampleProducts = [
  {
    id: 1,
    name: "Snake Plant",
    price: 29.99,
    image: "path/to/image1.jpg",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 24.99,
    image: "path/to/image2.jpg",
  },
  // Add more sample products as needed
];

const Products = () => {
  return (
    <div className="products-container">
      <h1>Our Plants</h1>
      <div className="products-grid">
        {sampleProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
