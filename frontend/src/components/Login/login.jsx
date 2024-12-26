import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/token/", {
        username,
        password,
      });
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.access}`;
      setError("");
      // Redirect to a protected page or other post-login action
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5" }}
    >
      <div
        className="shadow-lg p-5 bg-white rounded"
        style={{
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#4a90e2" }}>
          Welcome Back!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control p-3"
              style={{ borderRadius: "10px" }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control p-3"
              style={{ borderRadius: "10px" }}
              required
            />
          </div>
          {error && (
            <p
              className="text-danger text-center"
              style={{ fontSize: "0.9rem" }}
            >
              {error}
            </p>
          )}
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              backgroundColor: "#4a90e2",
              border: "none",
              borderRadius: "10px",
              padding: "10px",
              fontSize: "1rem",
            }}
          >
            Login
          </button>
        </form>
        <p
          className="text-center text-muted mt-3"
          style={{ fontSize: "0.85rem" }}
        >
          Don’t have an account?{" "}
          <a
            href="/register"
            style={{ color: "#4a90e2", textDecoration: "none" }}
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
