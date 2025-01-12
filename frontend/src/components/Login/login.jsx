import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // For navigation
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from ".././../reducers/userSlice"; // Import Redux action

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/token/", {
        username,
        password,
      });

      const { access, refresh } = response.data;

      // Store tokens in Redux
      dispatch(
        login({
          user: { username }, // Assuming `username` is the user object
          accessToken: access,
          refreshToken: refresh,
        })
      );

      // Store tokens in localStorage for persistence
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;

      // Show success toast
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 2000,
      });

      // Wait for the toast message to disappear before redirecting
      setTimeout(() => {
        navigate("/"); // Navigate to home page
      }, 2000);
    } catch (err) {
      toast.error("Invalid credentials", { position: "top-right" });
    }
  };

  // end submit
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5" }}
    >
      <ToastContainer />
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
