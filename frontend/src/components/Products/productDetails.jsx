import axios from "../axiosConfig";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css"; // External stylesheet for cleaner code

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
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">
          Price: <span>${product.price}</span>
        </p>
        <p className="product-views">Views: {product.views}</p>
        <button className="btn-add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
