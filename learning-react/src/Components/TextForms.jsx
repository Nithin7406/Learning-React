import React, { useState } from "react";

export default function TextForms() {
  const [text, setText] = useState("");

  const upper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const lower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const onchange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container my-3">
      <h1>Enter text to analyse below</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={onchange}
          id="myBox"
          rows="8"
          placeholder="Enter text here..."
        ></textarea>
        <button className="btn btn-primary mx-2 my-3" onClick={upper}>
          Conver to uppercase
        </button>
        <button className="btn btn-primary my-3" onClick={lower}>
          Conver to Lowercasr
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
  );
}
