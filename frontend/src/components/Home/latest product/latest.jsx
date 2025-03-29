import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../reducers/cartSlice"; // Adjust the path as needed
import axios from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import "./latest.css";

function LatestProduct() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch

  useEffect(() => {
    axios
      .get("latest-products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product)); // Dispatch the action with product details
  };

  return (
    <div className="latest-product-container">
      <h1 className="latest-product-heading display-5 fw-bold">
        Latest Products
      </h1>
      <div className="text-center d-flex align-items-center  justify-content-center">
        <p className="mb-5 w-50 text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          dolorum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ratione at ullam dolore dolorem esse perspiciatis hic quo expedita
          dignissimos fugiat.
        </p>
      </div>
      <br />
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                src={product.main_image}
                alt={product.name}
                className="product-image"
              />
              {product.discount && (
                <span className="discount-badge">{product.discount}% OFF</span>
              )}
            </div>
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <div className="price-container">
                <p className="product-price">${product.price}</p>
                {product.previous_price && (
                  <p className="product-previous-price">
                    <del>${product.previous_price}</del>
                  </p>
                )}
              </div>
              <div className="product-info">
                <p>
                  <strong>Views:</strong> {product.views}
                </p>
                <p>
                  <strong>Gender:</strong> {product.gender_display}
                </p>
                <p>
                  <strong>Stock:</strong> {product.stock}
                </p>
              </div>
              <div className="product-actions">
                <button
                  className="btn btn-view"
                  onClick={() => handleProductClick(product.id)}
                >
                  View Product
                </button>
                <button
                  className="btn btn-add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestProduct;
