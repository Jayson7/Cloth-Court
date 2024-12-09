import React from "react";
import "./home.css";

// extensions

import LatestProduct from "./latest product/latest";

function homepage() {
  return (
    <div>
      <div className="homeWrapper">
        <div className="hero-container ">
          <div className="tittle-box1 px-3">
            <h1 className="title-text">
              Raining Offers For <br /> Hot Summer!
            </h1>
            <h4 className="title-text-mini">25% Off On All Products</h4>
            <div className="title-button mt-5">
              <button className="btn btn-primary text-white py-2 px-4 ">
                Shop Now
              </button>
              <button className="btn btn-success py-2 px-4 mx-4">
                Find More
              </button>
            </div>
          </div>

          <div className="title-box2 "></div>
        </div>
      </div>
      <LatestProduct />
    </div>
  );
}

export default homepage;
