import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "./nav.css";
import Homepage from "../Home/homepage.jsx";
import NotFound from "../Page4040/NotFound.jsx";
import Login from "../Login/login.jsx";
import Register from "../Register/register.jsx";
import Products from "../../components/Products/product.jsx";
import Cart from "../Cart/cart.jsx";
import UserProfile from "../Profile/profile.jsx";
import Deposit from "../deposit/deposit.jsx";
import ProductDetail from "../Products/productDetails.jsx";
import logo from "../../images/logo_dark.png";
import { FaCartPlus, FaUser } from "react-icons/fa";
import TokenService from "../../tokenService.js";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../reducers/userSlice";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Get cart quantity
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    TokenService.clearToken();
    dispatch(logout());
    navigate("/login");
  };

  const handleCartClick = () => {
    navigate("/cart"); // Navigate to cart page
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              width="40"
              className="rounded mx-2 mb-2"
              height="50"
              alt="CloThCourt Logo"
            />
            <span className="logo-text">
              CloTh<span>Court</span>
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  All Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Track Order
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Chat with us
                </Link>
              </li>
            </ul>
            <div className="nav-logos">
              <div
                className="cart"
                onClick={handleCartClick}
                style={{ cursor: "pointer" }}
              >
                <span>{totalQuantity}</span> {/* Show total cart items */}
                <FaCartPlus size={24} />
              </div>
              <div className="balance">₦ 0.00</div>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <FaUser size={20} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {isAuthenticated ? (
                    <>
                      <Dropdown.Item>
                        <Link
                          to="/profile"
                          className="text-decoration-none text-dark"
                        >
                          Profile
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item onClick={handleLogout}>
                        Logout
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item>
                        <Link
                          to="/login"
                          className="text-decoration-none text-dark"
                        >
                          Login
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link
                          to="/register"
                          className="text-decoration-none text-dark"
                        >
                          Sign Up
                        </Link>
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id/" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Navbar;
