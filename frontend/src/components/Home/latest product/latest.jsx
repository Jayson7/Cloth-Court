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
        // Assuming the API returns an array of products
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
    <div className="container">
      <div className="product-container">
        <h1>Latest Products</h1>
        <div className="product-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
            >
              <img
                src={product.main_image}
                alt={product.main_name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestProduct;
