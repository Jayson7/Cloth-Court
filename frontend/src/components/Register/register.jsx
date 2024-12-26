import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const [message, setMessage] = useState("");

  const { full_name, email, username, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/register/", {
        full_name,
        email,
        username,
        password,
        password2,
      });
      setMessage("Registration successful!");
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(`Error: ${JSON.stringify(error.response.data)}`);
      } else {
        setMessage("Error: Registration failed");
      }
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
          maxWidth: "500px",
        }}
      >
        <h2 className="text-center mb-4" style={{ color: "#4a90e2" }}>
          Create an Account
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              value={full_name}
              onChange={onChange}
              className="form-control p-3"
              style={{ borderRadius: "10px" }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
              className="form-control p-3"
              style={{ borderRadius: "10px" }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={onChange}
              className="form-control p-3"
              style={{ borderRadius: "10px" }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
              className="form-control p-3"
              style={{ borderRadius: "10px" }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password2"
              placeholder="Confirm Password"
              value={password2}
              onChange={onChange}
              className="form-control p-3"
              style={{ borderRadius: "10px" }}
              required
            />
          </div>
          <div className="text-center">
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
              Register
            </button>
          </div>
        </form>
        {message && (
          <p
            className={`text-center mt-3 ${
              message.includes("successful") ? "text-success" : "text-danger"
            }`}
            style={{ fontSize: "0.9rem" }}
          >
            {message}
          </p>
        )}
        <p
          className="text-center text-muted mt-3"
          style={{ fontSize: "0.85rem" }}
        >
          Already have an account?{" "}
          <a href="/login" style={{ color: "#4a90e2", textDecoration: "none" }}>
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
