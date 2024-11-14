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
      // Handle errors from the API response
      if (error.response && error.response.data) {
        setMessage(`Error: ${JSON.stringify(error.response.data)}`);
      } else {
        setMessage("Error: Registration failed");
      }
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="full_name"
            value={full_name}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
