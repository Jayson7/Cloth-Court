import React, { useEffect, useState } from "react";
import axios from "../../axiosConfig"; // Import your Axios instance
import { useNavigate } from "react-router-dom";
import "./latest.css";

function LatestProduct() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch the latest products
  useEffect(() => {
    axios
      .get("latest-products/") // Use relative path since baseURL is already set
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Navigate to product detail page
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="latest-product-container">
      <h1 className="latest-product-heading">Latest Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.id)}
          >
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
                <button className="btn btn-view">View Product</button>
                <button className="btn btn-add-to-cart">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestProduct;