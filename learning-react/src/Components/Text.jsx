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

  const [mystyle, setMyStyle] = useState({
    color: "black",
    background: "white",
  });

  const toggle = () => {
    if (mystyle.color === "black") {
      setMyStyle({ color: "white", background: "black" });
    } else {
      setMyStyle({ color: "black", background: "white" });
    }
  };

  return (
    <div className="FullPage d-flex flex-column " style={mystyle}>
      <nav
        className="navbar navbar-expand-lg navbar-text-black"
        style={{
          borderBottom: "2px solid grey",
          backgroundColor: mystyle.color === "black" ? "#c9c9c9d3" : "#111111 ",
        }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/"
            style={{ color: mystyle.color === "black" ? "black" : "white" }}
          >
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
                <a
                  style={{
                    color: mystyle.color === "black" ? "black" : "white",
                  }}
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{
                    color: mystyle.color === "black" ? "black" : "white",
                  }}
                  className="nav-link"
                  href="/"
                >
                  About
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a
                  style={{
                    color: mystyle.color === "black" ? "black" : "white",
                  }}
                  className="nav-link"
                  href="/"
                >
                  Light
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{
                    color: mystyle.color === "black" ? "black" : "white",
                  }}
                  className="nav-link"
                  href="/"
                >
                  <div className="form-check form-switch nav-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onClick={toggle}
                    />
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{
                    color: mystyle.color === "black" ? "black" : "white",
                  }}
                  className="nav-link"
                  href="/"
                >
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
              style={{
                backgroundColor:
                  mystyle.color === "black" ? "#fafafa" : "#424242d3",
                color: mystyle.color === "black" ? "black" : "white",
              }}
            ></textarea>
            <button className="btn btn-primary " onClick={upper}>
              Conver to uppercase
            </button>
            <button className="btn btn-primary my-3 mx-3" onClick={lower}>
              Conver to Lowercase
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
