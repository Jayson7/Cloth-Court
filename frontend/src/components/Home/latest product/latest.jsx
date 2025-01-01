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
    <div className="container-fluid">
      <div className="product-container">
        <h1 className="mb-5">Latest Products</h1>
        <div className="product-grid d-flex align-items-center justify-content-around flex-wrap mt-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card col-md-3 mx-1 my-4 col-sm-3 px-4"
            >
              <img
                src={product.main_image}
                alt={product.name}
                className="product-image py-1"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>

              {/* Display product details */}
              <p className="product-info">
                <strong>Views:</strong> {product.views}
              </p>
              <p className="product-info">
                <strong>Gender:</strong> {product.gender_display}
              </p>
              <p className="product-info">
                <strong>Stock:</strong> {product.stock}
              </p>
              <p className="product-info">
                <strong>Previous Price:</strong> ${product.previous_price}
              </p>

              <div
                onClick={() => handleProductClick(product.id)}
                className="btn btn-info mx-2 my-2 px-2 py-2"
              >
                View product
              </div>
              <div className="btn btn-success mx-2 my-2 px-2 py-2">
                Add To Cart
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestProduct;
