import React, { useEffect, useState } from "react";
import axios from "../axiosConfig"; // Import your Axios instance

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from the Django API
    axios
      .get("/products/")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Organize products by category
  const productsByCategory = products.reduce((acc, product) => {
    product.category_display.forEach((category) => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
    });
    return acc;
  }, {});

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="alert alert-danger text-center mt-5" role="alert">
        Error: {error}
      </div>
    );

  return (
    <div className="container mt-5">
      <br />
      <br />
      <div className="text-center mb-5 mt-5">
        <h1 className="display-4 fw-bold mt-5">All Products</h1>
        <p className="lead text-muted">Explore our wide range of products</p>
      </div>

      {Object.entries(productsByCategory).map(([category, products]) => (
        <div key={category} className="mb-5">
          <h2 className="mb-4 fw-bold text-uppercase border-bottom pb-2 text-center">
            {category}
          </h2>
          <div className="row g-4 justify-content-center">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 d-flex justify-content-center">
                <div className="card h-100 shadow-sm border-0" style={{ width: "100%", maxWidth: "300px" }}>
                  <div className="position-relative">
                    <img
                      src={product.main_image}
                      alt={product.title}
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    {product.discount && (
                      <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                        {product.discount}% OFF
                      </span>
                    )}
                  </div>
                  <div className="card-body p-4 text-center">
                    <h5 className="card-title fw-bold">{product.title}</h5>
                    <p className="card-text text-muted">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="card-text fw-bold text-primary mb-0">
                        ${product.price}
                      </p>
                      {product.previous_price && (
                        <del className="text-muted">${product.previous_price}</del>
                      )}
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="card-text mb-0">
                        <small className="text-muted">
                          <strong>Gender:</strong> {product.gender_display}
                        </small>
                      </p>
                      <p className="card-text mb-0">
                        <small className="text-muted">
                          <strong>Sizes:</strong> {product.sizes_available.join(", ")}
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-4">
                    <button className="btn btn-dark w-100">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;