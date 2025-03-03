import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import "../styles/pages_styles/Home.css";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: 29.99,
      image: "/images/monstera.jpg",
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 19.99,
      image: "/images/peace-lily.jpg",
    },
    {
      id: 3,
      name: "Snake Plant",
      price: 24.99,
      image: "/images/snake-plant.jpg",
    },
    {
      id: 4,
      name: "Fiddle Leaf Fig",
      price: 34.99,
      image: "/images/fiddle-leaf.jpg",
    },
  ];

  const plantCareTips = [
    {
      id: 1,
      title: "Watering Guide",
      description: "Water most indoor plants once a week",
      icon: "💧",
    },
    {
      id: 2,
      title: "Light Requirements",
      description: "Most plants need 6+ hours of indirect light",
      icon: "☀️",
    },
    {
      id: 3,
      title: "Fertilizing Tips",
      description: "Fertilize during growing season (spring/summer)",
      icon: "🌱",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah L.",
      text: "The plants arrived in perfect condition. I'm impressed with the quality!",
    },
    {
      id: 2,
      name: "Michael T.",
      text: "Great selection and excellent customer service. Will definitely shop again!",
    },
    {
      id: 3,
      name: "Amanda R.",
      text: "The plant care guide that came with my purchase was super helpful.",
    },
  ];

  return (
    <div
      className="home-container"
      style={{ maxWidth: "100vw", overflowX: "hidden", width: "100%" }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bringing Nature Closer to You!</h1>
          <p>Discover the perfect plants to transform your space</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Plants</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
        <button className="view-all-btn">View All Products</button>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <div className="about-content">
          <h2>About Our Nursery</h2>
          <p>
            We are passionate about plants and dedicated to providing the
            highest quality specimens for your home and garden. With over 15
            years of experience, our expert team is ready to help you bring more
            greenery into your life.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="about-image"></div>
      </section>

      {/* Plant Care Tips Section */}
      <section className="plant-care">
        <h2>Plant Care Tips</h2>
        <div className="tips-container">
          {plantCareTips.map((tip) => (
            <div className="tip-card" key={tip.id}>
              <div className="tip-icon">{tip.icon}</div>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>
        <button className="tips-btn">More Plant Care Tips</button>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-carousel">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <p>"{testimonial.text}"</p>
              <h4>{testimonial.name}</h4>
            </div>
          ))}
        </div>
        <button className="community-btn">Join Our Community</button>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
