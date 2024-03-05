import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} `}
        style={{
          backgroundColor: props.mode === "dark" ? "#2b2b2b" : "#eeeeee",
          color: props.mode === "dark" ? "white" : "black",
          borderBottom:
            props.mode === "dark" ? "1px solid #fff" : "1px solid #111",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <label
            className="form-check-label mx-2"
            htmlfor="flexSwitchCheckChecked"
          >
            LightMode
          </label>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onClick={props.toggle}
            />
            <label
              className="form-check-label"
              htmlfor="flexSwitchCheckChecked"
            >
              DarkMode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
