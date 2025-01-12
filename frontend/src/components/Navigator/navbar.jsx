import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./nav.css";
import Dropdown from "react-bootstrap/Dropdown";
// pages
import Homepage from "../Home/homepage.jsx";
import Categories from "../Categories/categories";
import NotFound from "../Page4040/NotFound.jsx";
import Login from "../Login/login.jsx";
import Register from "../Register/register.jsx";
import Products from "../../components/Products/product.jsx";
import Cart from "../Cart/cart.js";
import UserProfile from "../Profile/profile.jsx";
import Deposit from "../deposit/deposit.jsx";
import ProductDetail from "../Products/productDetails.jsx";
// particles
import logo from "../../images/logo_dark.png";
import { FaCartPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  // dropdown
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsOpen((prev) => !prev);
  // };

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src={logo}
                width="40"
                className="rounded mx-2 mb-2"
                height="50"
                alt=""
              ></img>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-4 mb-lg-2 mx-4">
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
                <li>
                  <Link className="nav-link" to="/products">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/products">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/products">
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/products">
                    Chat with us
                  </Link>
                </li>
              </ul>
              <div className="nav-logos action-group d-flex flex-wrap align-content-center justify-content-around">
                <div className="cart">
                  <span>0</span>
                  <FaCartPlus />
                </div>
                <div className="balance mt-2">₦ 0.00</div>

                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <FaUser />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item> */}
                    <Dropdown.Item className="text-center py-2 px-4">
                      <Link
                        to={"login"}
                        className="text-decoration-none text-dark text-center"
                      >
                        Login
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="text-center py-2 px-4">
                      <Link
                        to={"register"}
                        className="text-decoration-none text-dark text-center"
                      >
                        Sign Up
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id/" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navbar;
