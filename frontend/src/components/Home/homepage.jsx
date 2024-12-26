import React from "react";
import "./home.css";
import LatestProduct from "./latest product/latest";

function Homepage() {
  return (
    <div className="homeWrapper">
      <div className="hero-container">
        <div className="title-box1">
          <h1 className="title-text">
            Raining Offers for <br /> Hot Summer!
          </h1>
          <h4 className="title-text-mini">25% Off on All Products</h4>
          <div className="title-button">
            <button className="btn btn-primary shop-btn py-3 px-5">
              Shop Now
            </button>
            <button className="btn btn-outline-success find-more-btn py-3 px-5">
              Find More
            </button>
          </div>
        </div>
        <div className="title-box2"></div>
      </div>
      <div className="products-section">
        <LatestProduct />
      </div>
    </div>
  );
}

export default Homepage;
