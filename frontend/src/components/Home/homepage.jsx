import React from "react";
import "./home.css";
import hero from "../../images/hero-bg.jpg";
function homepage() {
  return (
    <div className="homeWrapper">
      <div className="container d-flex justify-content-around align-items-center flex-wrap">
        <div className="row">
          <div className="tittle-box1">
            <div className="title-text">Raining Offers For Hot Summer!</div>
            <div className="tittle-text-mini">25% Off On All Products</div>
            <div className="tittle-button">
              <button className="btn btn-transparent py-3 px-4">
                Shop Now
              </button>
              <button className="btn btn-success">Find More</button>
            </div>
          </div>
        </div>

        <div className="tittle-box2">
          <img src="{hero}" alt="" />
        </div>
      </div>
    </div>
  );
}

export default homepage;
