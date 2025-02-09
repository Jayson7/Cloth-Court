import React from "react";
import "./home.css";
import LatestProduct from "./latest product/latest";
import hero from '../../images/logoh.jpg'
function Homepage() {
  return (
    <div className="homeWrapper">
      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Raining Offers for <br /> Hot Summer!
          </h1>
          <p className="hero-subtitle">
            25% Off on All Products
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Shop Now</button>
            <button className="btn-outline">Find More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={hero} alt="Summer Offers" />
        </div>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <LatestProduct />
      </div>
    </div>
  );
}

export default Homepage;