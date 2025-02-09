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

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5 text-danger">Error: {error}</div>;

  return (
    <div className="container mt-5 px-5 py-5 mx-2">
      <div className="display-5 mb-5 text-center">All Products</div>

      {Object.entries(productsByCategory).map(([category, products]) => (
        <div key={category} className="mb-5">
          <h2 className="mb-4">{category}</h2>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.main_image}
                    alt={product.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                      <strong>Price:</strong> ${product.price}{" "}
                      {product.previous_price && (
                        <del className="text-muted">${product.previous_price}</del>
                      )}
                    </p>
                    <p className="card-text">
                      <strong>Gender:</strong> {product.gender_display}
                    </p>
                    <p className="card-text">
                      <strong>Sizes:</strong> {product.sizes_available.join(", ")}
                    </p>
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