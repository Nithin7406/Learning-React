import React, { useState } from "react";

export default function () {
  const [text, setText] = useState("");

  const upper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const lower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const clear = () => {
    let newtext = "";
    setText(newtext);
  };

  const onchange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="d-flex flex-column min-h-screen">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  light
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <div className="form-check form-switch nav-item">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Dark
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="page">
        <div className="container my-3">
          <h1>Enter text to analyse..</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={onchange}
              id="myBox"
              rows="8"
              placeholder="Enter text here..."
            ></textarea>
            <button className="btn btn-primary " onClick={upper}>
              Conver to uppercase
            </button>
            <button className="btn btn-primary my-3 mx-3" onClick={lower}>
              Conver to Lowercasr
            </button>
            <button className="btn btn-primary" onClick={clear}>
              Clear TEXT!
            </button>
          </div>
          <h2>Your Text Summery</h2>
          <p>
            {text.split(" ").length} words and {text.length} letters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
