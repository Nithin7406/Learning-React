import React, { useState } from "react";

export default function Text(props) {
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

  const copy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const space = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };

  const onchange = (e) => {
    setText(e.target.value);
  };

  return (
    <div
      className="container my-3 "
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1>Enter text to analyse...</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={onchange}
          id="myBox"
          rows="8"
          placeholder="Enter text here..."
          style={{
            backgroundColor: props.mode === "dark" ? "#3b3b3b" : "#eeeeee",
            color: props.mode === "dark" ? "white" : "black",
          }}
        />
        <button className="btn btn-primary my-3" onClick={upper}>
          Conver to uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={lower}>
          Conver to Lowercase
        </button>
        <button className="btn btn-primary" onClick={clear}>
          Clear TEXT!
        </button>
        <button className="btn btn-primary mx-3 " onClick={copy}>
          copy text
        </button>
        <button className="btn btn-primary " onClick={space}>
          Remove spaces
        </button>
      </div>
      <h2>Your Text Summery</h2>
      <p>
        {text.split(/\s+/).filter((word) => word !== "").length} words and{" "}
        {text.length} letters
      </p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>
        {text.length > 0
          ? text
          : "Enter somthing in above textbox to Preview it !"}
      </p>
    </div>
  );
}
