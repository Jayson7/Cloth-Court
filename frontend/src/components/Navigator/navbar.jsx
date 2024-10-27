import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./nav.css";
// pages
import Homepage from "../Home/homepage.jsx";
import Categories from "../Categories/categories";
import NotFound from "../Page4040/NotFound.jsx";
import logo from "../../images/logo_dark.png";

const Navbar = () => {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg  navbar-light bg-light">
          <div className="container-fluid ">
            <Link className="navbar-brand" to="/">
              <img
                src={logo}
                width="30"
                className="rounded mx-2"
                height="30"
                alt=""
              ></img>
              Cloth Court
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
                  <Link className="nav-link " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categories">
                    All Products
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Another Action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Something Else Here
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link disabled"
                    to="#"
                    aria-disabled="true"
                  >
                    Disabled
                  </Link>
                </li>
              </ul>
              <div className="action-group d-flex flex-wrap align-content-center justify-content-center">
                <button className="btn btn-primary py-1 px-5 text-light mx-1 my-1">
                  Login
                </button>
                <button className="btn btn-success py-1 px-5 text-light mx-1 my-1">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navbar;
