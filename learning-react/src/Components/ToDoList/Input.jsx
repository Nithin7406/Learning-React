import React from "react";

export default function Input({ text, setText, items, setItems }) {
  return (
    <div>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setItems([...items, text]);
          setText("");
        }}
        disabled={!text}
      >
        Add
      </button>
    </div>
  );
}
