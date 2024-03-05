import React from "react";

export default function About(props) {
  return (
    <div
      className="container my-3"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1>About</h1>
      <p>This is our amazing application!</p>
      <p>It does wonderful things and helps people in many ways.</p>
      <p>
        Contact us at : <a href="https://www.google.com">nithin@gmail.com</a>
      </p>
    </div>
  );
}
