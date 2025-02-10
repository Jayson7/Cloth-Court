import axios from "../axiosConfig";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css"; // External stylesheet for cleaner code

const ProductDetail = () => {
  const { id } = useParams(); // Access the 'id' parameter from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios(`/products/${id}`); // Adjust the endpoint as per your backend
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  if (!product) {
    return <div className="error-container">Product not found.</div>;
  }

  return (
    <div className="product-detail-page">
      <br />
      <br />
      <br />
      <div className="product-detail-container mt-5">
        {/* Product Image Section */}
        <div className="product-image-section mt-5">
          <img
            src={product.main_image}
            alt={product.title}
            className="product-image"
          />
        </div>

        {/* Product Info Section */}
        <div className="product-info-section">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>

          {/* Price and Discount */}
          <div className="price-container">
            <p className="product-price">${product.price}</p>
            {product.previous_price && (
              <p className="product-previous-price">
                <del>${product.previous_price}</del>
              </p>
            )}
          </div>

          {/* Additional Product Info */}
          <div className="product-meta">
            <p>
              <strong>Views:</strong> {product.views}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock}
            </p>
            <p>
              <strong>Gender:</strong> {product.gender_display}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button className="btn-add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
