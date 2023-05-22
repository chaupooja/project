import React from "react";
import logo from "./image/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-3">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="" id="logo" className="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/myaccount">
                  My&nbsp;Account
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/signup">
                  Signup
                </NavLink>
              </li>

              <li className="nav-item dropdown mx-2">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="1234"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </NavLink>
                <ul className="dropdown-menu" id="dropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/smartphone">
                      SmartPhones
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/headphone">
                      Head Phones
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/charger">
                      Chargers
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
