import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Categories() {
  return (
    <div>
      <div className="container">
        <div className="d-grid">
          <h1 className="display-1">All Products</h1>
          <small>
            {" "}
            <FaArrowAltCircleRight /> Categories
          </small>
        </div>
      </div>
    </div>
  );
}

export default Categories;
